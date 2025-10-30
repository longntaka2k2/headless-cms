import { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { GetServerSideProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { GetTag } from "@/services/strapi";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import clsx from "clsx";
import ListCaseStudie from "@/components/CaseStudy/ListCaseStudie";
import Head from "next/head";

export default function TagDetail() {
  const router = useRouter();
  const [posts, setListPost] = useState([] as any);
  const [metaTitle, setMeta] = useState("");
  const [pageNumber, setPageNumber] = useState(0);
  const [viewMore, setView] = useState(true);
  const [loading, setLoading] = useState(false);
  const { t } = useTranslation("common");
  useEffect(() => {
    if (router.query.tagId) {
      getTag();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router.query.tagId]);
  const getTag = useCallback(async () => {
    const query = {
      populate: "deep",
      locale: router?.locale,
      filters: {
        value: {
          $eq: router?.query?.tagId,
        },
      },
      sort: ["publishedAt:desc"],
      pagination: {
        page: 1,
        pageSize: 9,
      },
    };
    const data = await GetTag(query);
    if (data && Array.isArray(data) && data.length > 0) {
      const posts = data[0]?.attributes?.case_studies?.data || [];
      setListPost(posts);
      setMeta(data[0]?.attributes?.label);
      setView(posts.length >= 9);
      setPageNumber(1);
    }
  }, [router?.locale, router?.query?.tagId]);
  const changePageNumber = async (value: number) => {
    setLoading(true);
    const data = await GetTag({
      populate: "deep",
      locale: router?.locale,
      filters: {
        value: {
          $eq: router?.query?.tagId,
        },
      },
      sort: ["publishedAt:desc"],
      pagination: {
        page: value,
        pageSize: 9,
      },
    });

    if (data && Array.isArray(data) && data.length > 0) {
      const newPosts = data[0]?.attributes?.case_studies?.data || [];
      if (newPosts.length > 0) {
        setListPost((prevPosts: any[]) => [...prevPosts, ...newPosts]);
        setView(newPosts.length >= 9);
        setPageNumber(value);
      } else {
        setView(false);
      }
    } else {
      setView(false);
    }
    setLoading(false);
  };
  return (
    <>
      <Head>
        <meta name="robots" content="noindex"></meta>
      </Head>

      <div className="tw-container">
        <h1
          className={clsx(
            "tw-text-[28px] lg:tw-text-[2.2rem] tw-font-black tw-mt-10 lg:tw-mt-6 tw-bg-clip-text tw-text-transparent",
            "tw-bg-[linear-gradient(90deg,_#f57c00_0%,_#ececec_180%)]",
          )}
        >
          {metaTitle}
        </h1>
        <ListCaseStudie posts={posts} />
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
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  return {
    props: {
      ...(await serverSideTranslations(ctx?.locale as string)),
    },
  };
};
