/* eslint-disable @next/next/link-passhref */
import Contact from "@/components/CaseStudy/CaseStudieV2/Contact.";
import Discover from "@/components/CaseStudy/CaseStudieV2/Discover";
import RichTextCaseStudies from "@/components/blog/RichtextCaseStudies";
import endpoints from "@/const/endpoints";
import { RelativeImagePath } from "@/utils/utils";
import clsx from "clsx";
import { GetServerSideProps } from "next";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import Image from "next/image";
import Link from "next/link";
import BoxStory from "@/components/CaseStudy/CaseStudieV2/BoxStory";
import { useEffect, useState } from "react";
import { GetCaseStudie } from "@/services/strapi";
import { useRouter } from "next/router";
import Head from "next/head";

export default function CaseId(postData: any) {
  const { t } = useTranslation("common");
  const router = useRouter();
  const [topic, setTopic] = useState("");
  const [listStories, setListStories] = useState([] as any);

  let blogDetail = postData?.data?.[0] || null;

  useEffect(() => {
    if (!blogDetail) {
      router.replace("/404"); // Redirect to the custom 404 page
    }
    setTopic(blogDetail?.attributes?.topic_case_study.data?.attributes?.slug);
  }, [blogDetail, router]);

  // Đảm bảo rằng useEffect cho việc lấy dữ liệu luôn được gọi
  useEffect(() => {
    const getDataByTopic = async () => {
      if (!topic) return; // Nếu topic không có, không cần gọi API
      const data = await GetCaseStudie({
        populate: "deep",
        locale: router?.locale,
        filters: {
          topic_case_studies: {
            value: topic,
          },
        },
        sort: ["publishedAt:desc"],
        pagination: {
          page: 0,
          pageSize: 3,
        },
      });
      setListStories(data);
    };

    getDataByTopic();
  }, [topic, router.locale, blogDetail?.id]); // Added blogDetail?.id to dependencies

  // Nếu blogDetail là null, không cần render gì cả
  if (!blogDetail) {
    return null; // Prevent rendering until the redirect happens
  }

  return (
    <>
      <Head>
        {blogDetail?.attributes?.Metatitle && (
          <title>{blogDetail?.attributes?.Metatitle}</title>
        )}
        {blogDetail?.attributes?.metaDescription && (
          <meta
            name="description"
            content={blogDetail?.attributes?.metaDescription}
          />
        )}
        <meta
          property="og:title"
          content={blogDetail?.attributes?.Metatitle || ""}
        />
        <meta
          property="og:description"
          content={blogDetail?.attributes?.metaDescription || ""}
        />
      </Head>
      <div className="tw-py-6 lg:tw-py-15 tw-overflow-hidden">
        <div
          className={clsx(
            "tw-container tw-flex tw-gap-2 tw-justify-center",
            "tw-flex-wrap tw-mb-6",
          )}
        >
          {blogDetail?.attributes.tags &&
            blogDetail?.attributes.tags?.data.map(
              (value: any, index: number) => (
                <Link
                  key={index}
                  rel="canonical noindex"
                  href={"/case-studies/tag/" + value?.attributes?.slug}
                  className={clsx(
                    "tw-bg-primary-3 tw-no-underline tw-text-white tw-rounded-[50px]",
                  )}
                >
                  <p
                    className={clsx(
                      "tw-line-clamp-1 tw-w-max tw-mb-0",
                      "tw-text-xs lg:tw-text-sm tw-font-medium tw-py-2 tw-px-3",
                    )}
                  >
                    #{value?.attributes?.label}
                  </p>
                </Link>
              ),
            )}
        </div>

        <h1
          className={clsx(
            "tw-container tw-text-2xl tw-leading-8 lg:tw-text-5xl lg:tw-leading-[56px]",
            "tw-font-bold tw-text-center tw-mb-6 lg:tw-mb-4",
          )}
        >
          {blogDetail?.attributes?.title}
        </h1>

        <div className="tw-container tw-flex tw-gap-4 tw-mb-6 lg:tw-mb-10">
          <div
            className={clsx(
              "tw-max-w-[57px] tw-max-h-[38px] lg:tw-max-w-[83px] lg:tw-max-h-[53px]",
              "tw-w-full tw-h-full tw-rounded-lg tw-overflow-hidden tw-border tw-border-[rgba(51, 51, 51, 0.08)]",
            )}
          >
            <Image
              src={RelativeImagePath(
                blogDetail?.attributes?.logoBrand?.data?.attributes?.url,
              )}
              alt="brand"
              width={83}
              height={53}
              className="tw-w-full tw-h-full tw-object-contain"
            />
          </div>
          <p className="tw-text-sm lg:tw-text-base tw-text-ic-black-5">
            {blogDetail?.attributes?.description}
          </p>
        </div>

        <div className="tw-container rich-text tw-text-[#2c2f34] tw-mb-6 lg:tw-mb-15">
          <RichTextCaseStudies content={blogDetail?.attributes?.content} />
        </div>

        <div
          style={{
            background:
              "linear-gradient(274deg, #FDE9D3 26.95%, rgba(233, 238, 255, 0.60) 90%)",
          }}
          className="tw-py-6 lg:tw-py-15"
        >
          <div className="tw-container">
            <p className="tw-mb-6 tw-text-2xl lg:tw-text-5xl lg:tw-text-center tw-font-bold">
              Related stories
            </p>
            <BoxStory list={listStories} />
          </div>
        </div>

        <Contact />

        <Discover />
      </div>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const locale = () => {
    switch (ctx?.locale) {
      case "en":
        return endpoints.caseStudies;
      case "vi":
        return endpoints.caseStudies;
    }
  };
  const qs = require("qs");
  const query = qs.stringify(
    {
      filters: {
        slug: {
          $eq: ctx?.query?.caseId,
        },
      },
    },
    {
      encodeValuesOnly: true, // prettify URL
    },
  );
  const queryCategory = qs.stringify(
    {
      locale: ctx?.locale,
      sort: ["order:asc"],
    },
    {
      encodeValuesOnly: true, // prettify URL
    },
  );

  const { data } = await fetch(
    `${locale()}?${query}&&populate=deep&${queryCategory}`,
  ).then((x) => x.json());

  const dataCategory = await fetch(
    `${endpoints.categoryBlog}?populate=deep&${queryCategory}`,
  ).then((x) => x.json());

  return {
    props: {
      category: dataCategory?.data,
      caseId: ctx?.query?.caseId,
      locale: ctx?.locale,
      data: data,
      resolvedUrl: ctx.resolvedUrl,
      ...(await serverSideTranslations(ctx?.locale as string)),
    },
  };
};
