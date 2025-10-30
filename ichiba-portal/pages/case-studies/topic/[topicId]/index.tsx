import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { GetServerSideProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import endpoints from "@/const/endpoints";
import { formatDateToDDMMYYYY } from "@/convert";
import Image from "next/image";
import { useTranslation } from "next-i18next";
import HeaderBlog from "@/components/blog/headerBlog";
import ListBlog from "@/components/blog/ListBlog";
import { GetTopic, GetBlogs, GetTopicCaseStudie } from "@/services/strapi";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import clsx from "clsx";
import ListCaseStudie from "@/components/CaseStudy/ListCaseStudie";
import Head from "next/head";

const MostPorpular = dynamic(() => import("@/components/blog/mostPopular"), {
  ssr: true,
});

export default function TopicDetail() {
  const router = useRouter();
  const [posts, setListPost] = useState([] as any);
  const [metaTitle, setMeta] = useState("");
  const [pageNumber, setPageNumber] = useState(0);
  const [topic, setTopics] = useState([] as any);
  const [topicActive, setTopicActive] = useState("");
  const [viewMore, setView] = useState(true);
  const [loading, setLoading] = useState(false);
  const { t } = useTranslation("common");

  // const titleCategory = () => {
  //   const title = data?.category?.filter(
  //     (x: any) => x?.attributes?.value === router?.query?.category,
  //   );

  //   setMeta(title[0]?.attributes?.label);
  // };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const getTopic = async () => {
    const query = {
      populate: "deep",
      locale: router?.locale,
      filters: {
        value: {
          $eq: router?.query?.topicId,
        },
      },
      sort: ["publishedAt:desc"],
    };
    const data = await GetTopicCaseStudie(query);
    setListPost(data[0]?.attributes?.case_studies?.data);
    setMeta(data[0]?.attributes?.title);
  };

  useEffect(() => {
    getTopic();
  }, [getTopic]);

  const changePageNumber = async (value: number) => {
    setLoading(true);
    const data = await GetTopicCaseStudie({
      populate: "deep",
      locale: router?.locale,
      filters: {
        value: {
          $eq: router?.query?.topicId,
        },
      },
      sort: ["publishedAt:desc"],
      pagination: {
        page: value,
        pageSize: 9,
      },
    });
    setPageNumber(value);
    setTimeout(() => {
      setListPost([...posts, ...data]);
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
        <meta name="robots" content="noindex"></meta>
      </Head>

      {/* {router?.query?.category === "customer-say" && (
        <div className="tw-container tw-my-4 lg:tw-my-6">
          <div className=" tw-flex tw-overflow-x-auto tw-gap-4 tw-ml-3 lg:tw-ml-5 tw-whitespace-nowrap">
            <div onClick={() => setTopicActive("")} className={clsx(
                  "tw-text-sm lg:tw-text-base tw-cursor-pointer tw-pb-1",
                  topicActive === "" ? "tw-text-brand-primary tw-font-bold tw-border-b tw-border-[#F57C00]" : "lg:tw-font-medium tw-opacity-80"
                )}>
            {t("blog.all")}
            </div>
            {topic.map((value: any, index: number) => (
              <div
                onClick={() => setTopicActive(value.attributes.value)}
                key={index}
                className={clsx(
                  "tw-text-sm lg:tw-text-base tw-cursor-pointer tw-pb-1",
                  value.attributes.value === topicActive ? "tw-text-brand-primary tw-font-bold tw-border-b tw-border-[#F57C00]" : "lg:tw-font-medium tw-opacity-80"
                )}
              >
                {value.attributes.label}
              </div>
            ))}
          </div>
        </div>
      )} */}
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
