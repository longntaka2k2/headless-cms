"use client";
import ListBlog from "@/components/blog/ListBlog";
import loadingFile from "@/public/json/loading.json";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import Lottie from "react-lottie-player";
import EmptyData from "@/public/images/empty-data.svg";
import {
  GetBlogs,
  GetTags,
  StrapiQuery,
} from "@/services/strapi";
import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";

const TagsComponent = () => {
  const { t } = useTranslation("common");
  const router = useRouter();
  const [posts, setListPost] = useState([] as any);
  const [tags, setTags] = useState([] as any);
  const [viewMore, setView] = useState(true);
  const [loading, setLoading] = useState(false);
  const [pageNumber, setPageNumber] = useState(1);
  const [tag, setTag] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [blogData, tags] = await Promise.all([
          GetBlogs({
            populate: "deep",
            locale: router?.locale,
            filters: {
              topic_blogs: router.query.slug
                ? { value: router.query.slug }
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

    if (router.query.slug) {
      fetchData();
    }
  }, [router?.locale, router.query.slug]);

  const changeTags = async (value: string) => {
    setLoading(true);
    setTag(value);
    setListPost([]);
    try {
      const data = await GetBlogs({
        populate: "deep",
        locale: router?.locale,
        filters: {
          topic_blogs: {
            value: value,
          },
        },
        sort: ["publishedAt:desc"],
        pagination: {
          page: 0,
          pageSize: 9,
        },
      });

      setListPost(data);
      setView(data.length >= 9);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

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

    if (tag) {
      query.filters = {
        topic_blogs: {
          value: tag,
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
    <div className="lg:tw-px-0">
      <div className="tw-bg-[#fafafa] tw-py-10 lg:tw-py-[60px] tw-px-4 lg:tw-px-0">
        <div className="tw-container">
          <div className="tw-flex tw-flex-wrap tw-gap-2 tw-items-center tw-justify-center tw-pb-2">
            {(tags || []).map((value: any, index: number) => (
              <Link
                rel="canonical"
                href={`/blog/tags/${value?.attributes?.value}`}
                onClick={() => changeTags(value?.attributes?.value)}
                key={index}
                className={`tw-text-sm lg:tw-text-base tw-block tw-px-3 tw-py-1 tw-mx-2 tw-whitespace-nowrap tw-rounded-full tw-cursor-pointer tw-no-underline ${
                  value?.attributes?.value === router.query.slug
                    ? "tw-text-white tw-bg-[linear-gradient(89deg,_#ececec_-100%,_#f57c00_84.37%)]"
                    : "tw-bg-gray-200 tw-text-base tw-font-medium tw-text-ic-ink-6"
                } `}
                prefetch={false}
              >
                {value?.attributes?.label}
              </Link>
            ))}
          </div>
          <ListBlog posts={posts} />
          {loading && (
            <div className="tw-mx-auto tw-w-[100px] lg:tw-w-[150px] tw-h-[100px] lg:tw-h-[150px]">
              <Lottie loop animationData={loadingFile} play />
            </div>
          )}
          <div className={clsx(posts.length > 0 ? "tw-hidden" : "")}>
            {!loading && (
              <Image
                src={EmptyData}
                alt="empty-data"
                width={300}
                height={300}
                className="tw-mx-auto"
              />
            )}
          </div>
          <div className="tw-flex tw-justify-center">
            {viewMore && (
              <div
                className="tw-cursor-pointer grounded tw-font-bold"
                onClick={() => changePageNumber(pageNumber + 1)}
              >
                <div className="tw-px-5 tw-py-2 tw-text-brand-primary">
                  {t("viewMore")}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default TagsComponent;
