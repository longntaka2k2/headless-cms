import { useRouter } from "next/router";
import Head from "next/head";
import { GetServerSideProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Image from "next/image";
import { useTranslation } from "next-i18next";
import {
  GetBlogs,
  GetCategories,
  GetIntegrations,
  GetTags,
  StrapiQuery,
} from "@/services/strapi";
import Link from "next/link";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import clsx from "clsx";
import { useEffect, useState } from "react";
import ListBlog from "@/components/blog/ListBlog";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function BlogCMP({ data }: any) {
  const router = useRouter();
  const { t } = useTranslation("common");
  const [posts, setListPost] = useState([] as any);
  const [tags, setTags] = useState([] as any);
  const [viewMore, setView] = useState(true);
  const [loading, setLoading] = useState(false);
  const [pageNumber, setPageNumber] = useState(1);
  const [category, setCategory] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [blogData, tags] = await Promise.all([
          GetBlogs({
            populate: "deep",
            locale: router?.locale,
            filters: {
              topic_blogs: router.query.slug
                ? {
                    value: router.query.slug, // value
                  }
                : undefined,
            },
            fields: ["*"],
            sort: ["publishedAt:desc"],
          }),
          GetTags({
            populate: "*",
            locale: router?.locale,
          }),
        ]);
        setListPost(blogData);
        setView(blogData.length >= 9);
        setTags(tags);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [category, router?.locale, router.query.category, router.query.slug]);

  const changePageNumber = async (value: number) => {
    setLoading(true);

    let query: StrapiQuery = {
      populate: "deep",
      locale: router?.locale,
      sort: ["publishedAt:desc"],
      pagination: {
        page: value,
        pageSize: 9,
      },
    };

    if (category) {
      query.filters = {
        category_blog: {
          value: category,
        },
      };
    }

    const data = await GetBlogs(query);

    setPageNumber(value);
    setTimeout(() => {
      setListPost((prevPosts: any) => [...prevPosts, ...data]);
      if (data.length < 9) {
        setView(false);
      } else {
        setView(true);
      }
      setLoading(false);
    }, 700);
  };

  return (
    <>
      <Head>
        <title>{t("metatitle.blog")}</title>
        <meta name="description" content={t("metatitle.blog") || ""} />
      </Head>
      <div className="tw-bg-[#fafafa] tw-py-10 lg:py-[60px] tw-px-4 lg:tw-px-0">
        <div className=" tw-container  ">
          <div className="tw-flex tw-flex-wrap tw-gap-2 tw-items-center tw-justify-center tw-font-bold tw-style-2 tw-pb-2">
            <div
              className={`${
                category === ""
                  ? "tw-text-white tw-bg-[linear-gradient(89deg,_#ececec_-100%,_#f57c00_84.37%)]"
                  : "tw-bg-[linear-gradient(90deg,_#f57c00_0%,_#ececec_180%)] tw-text-transparent tw-bg-clip-text"
              } tw-block tw-px-3 tw-py-1 tw-mx-2 tw-whitespace-nowrap tw-rounded-full tw-cursor-pointer tw-w-max`}
            >
              {t("blog.all")}
            </div>
            {tags &&
              tags?.map((value: any, index: number) => (
                <Link
                  href={`/blog/tags/${value?.attributes?.value}`}
                  key={index}
                  className={`${
                    category === value?.attributes?.value
                      ? "tw-text-white tw-bg-brand-primary"
                      : "tw-bg-gray-200 tw-text-base tw-font-medium tw-text-ic-ink-6"
                  } tw-block tw-py-1 tw-px-2 tw-rounded-2xl tw-whitespace-nowrap tw-cursor-pointer tw-no-underline tw-w-max`}
                >
                  {value?.attributes?.label}
                </Link>
              ))}
          </div>
          <ListBlog posts={posts} />
          {loading && (
            <div className="tw-mx-auto tw-w-fit lg:tw-w-[150px] tw-h-[100px] lg:tw-h-[250px]">
              <FontAwesomeIcon
                icon={faSpinner}
                className="tw-animate-spin tw-duration-500 tw-fa-2xl tw-text-3xl lg:tw-text-6xl tw-text-brand-primary"
              />
            </div>
          )}
          <div className="tw-flex tw-justify-center">
            <div
              className={clsx(
                "tw-relative tw-z-[2]",
                viewMore ? "" : "tw-hidden",
                " tw-border-2 tw-border-solid tw-border-transparent tw-bg-white",
                "tw-cursor-pointer tw-font-bold tw-bg-clip-padding",
                "after:tw-absolute after:tw-rounded-[20px] after:tw-top-[-3px] after:tw-left-[-2px] after:tw-right-[-2px] after:tw-bottom-[-2px]",
                "after:tw-bg-brand-primary after:tw-z-[1]",
              )}
              onClick={() => changePageNumber(pageNumber + 1)}
            >
              <div className="tw-relative tw-z-[10]  tw-px-5 tw-py-2 tw-bg-white tw-text-brand-primary hover:tw-bg-transparent hover:tw-text-white tw-rounded-[19px] tw-transition tw-duration-300 tw-ease-linear">
                {t("viewMore")}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const query = {
    populate: "deep",
    locale: ctx?.locale,
    sort: ["publishedAt:desc"],
  };

  const [data, dataInte, dataCategory, translations] = await Promise.all([
    GetBlogs(query),
    GetIntegrations(query),
    GetCategories(query),
    serverSideTranslations(ctx?.locale as string),
  ]);

  return {
    props: {
      category: dataCategory,
      data: data,
      dataInte: dataInte,
      ...translations,
    },
  };
};
