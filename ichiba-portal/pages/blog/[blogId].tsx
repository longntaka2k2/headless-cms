import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleDot, faSpinner } from "@fortawesome/free-solid-svg-icons";
import { GetServerSideProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import endpoints from "@/const/endpoints";
import Image from "next/image";
import ReadMore from "@/components/blog/ReadMore";
import { RelativeImagePath } from "@/utils/utils";
import RichText from "@/components/blog/Richtext";
import clsx from "clsx";
import Head from "next/head";
import { useEffect, useState } from "react";

export default function Page(postData1: any) {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const [blogDetail, setBlogDetail] = useState<any>(null);
  const [blogTags, setBlogTags] = useState<any>(null);

  useEffect(() => {
    if (postData1?.data?.[0]) {
      setBlogDetail(postData1.data[0]);
      setBlogTags(postData1?.dataTag?.[0]);
      setIsLoading(false);
    } else {
      setError(true);
      setIsLoading(false);
    }
  }, [postData1]);

  const currentUrl =
    postData1.locale == "vi"
      ? `https://ichiba.vn${postData1.resolvedUrl}`
      : `https://ichiba.net${postData1.resolvedUrl}`;

  if (error) {
    return (
      <div className="tw-min-h-[400px] tw-flex tw-items-center tw-justify-center">
        <div className="tw-text-center">
          <p className="tw-text-red-500 tw-text-xl">Không tìm thấy bài viết</p>
          <p className="tw-mt-2">Vui lòng thử lại sau hoặc quay lại trang chủ</p>
        </div>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="tw-min-h-[400px] tw-flex tw-items-center tw-justify-center">
        <FontAwesomeIcon
          icon={faSpinner}
          className="tw-animate-spin tw-duration-500 tw-fa-2xl tw-text-brand-primary"
        />
      </div>
    );
  }

  if (!blogDetail?.attributes?.content) {
    return (
      <div className="tw-min-h-[400px] tw-flex tw-items-center tw-justify-center">
        <div className="tw-text-center">
          <p className="tw-text-gray-500">Nội dung đang được cập nhật</p>
        </div>
      </div>
    );
  }

  return (
    <>
      <Head>
        <title>{blogDetail?.attributes?.title || "Blog Detail"}</title>
        <meta name="description" content={blogDetail?.attributes?.title || ""} />
        <meta property="og:title" content={blogDetail?.attributes?.title || ""} />
        <meta property="og:description" content={blogDetail?.attributes?.title || ""} />
        <meta
          property="og:image"
          content={blogDetail?.attributes?.image?.data?.attributes?.url ? `https://cms-strapi.ichiba.net${blogDetail.attributes.image.data.attributes.url}` : "https://cms-strapi.ichiba.net/uploads/Size_40_46722f9991.png"}
        />
        <meta property="og:url" content={currentUrl} />
        <meta property="og:type" content="article" />
      </Head>

      <div className="blog-detail">
        <div className="container tw-px-4 tw-py-6">
          <div className="tw-grid tw-grid-cols-1 lg:tw-grid-cols-2 tw-gap-5 lg:tw-gap-10">
            <div className="lg:tw-grid tw-content-between lg:tw-border-b lg:tw-border-[#999]">
              <div className="lg:tw-pt-8">
                {blogDetail?.attributes?.category_blog && (
                  <div
                    className={clsx(
                      "tw-inline-block",
                      "tw-bg-[#D9F7BE] tw-w-max tw-px-2 tw-py-1 tw-rounded",
                      "tw-mr-3 tw-mb-3 tw-text-[#389E0D] tw-text-[12px] tw-font-bold tw-cursor-pointer",
                    )}
                  >
                    {blogDetail.attributes.category_blog?.data?.attributes?.label}
                  </div>
                )}

                <h1
                  className={clsx(
                    "tw-text-[28px] lg:tw-text-[2.2rem] tw-font-black tw-bg-clip-text tw-text-transparent",
                    "tw-bg-[linear-gradient(90deg,_#f57c00_0%,_#ececec_180%)]",
                  )}
                >
                  {blogDetail?.attributes?.title}
                </h1>
              </div>
              <div className="tw-mt-2 tw-flex tw-justify-between lg:tw-justify-start tw-text-[14px] tw-text-[#5e6a78] lg:tw-mb-8">
                <div className="tw-mr-5">
                  <FontAwesomeIcon
                    icon={faCircleDot}
                    width={10}
                    height={10}
                    className="tw-mb-[1px] tw-mr-1"
                  />{" "}
                  {blogDetail?.attributes?.author_name?.data?.attributes?.author_name || "Ichiba OnePlatform"}
                </div>
              </div>
            </div>
            <div>
              {blogDetail?.attributes?.image?.data?.attributes?.url && (
                <Image
                  src={`https://cms-strapi.ichiba.net${blogDetail.attributes.image.data.attributes.url}`}
                  alt={blogDetail?.attributes?.title || "Blog image"}
                  width={800}
                  height={600}
                  className="tw-w-full tw-rounded-[20px]"
                  onError={(e: any) => {
                    e.target.src = "/images/placeholder.jpg";
                  }}
                />
              )}
            </div>
          </div>

          <div className="lg:tw-py-10 rich-text content-blog tw-text-[#2c2f34] tw-px-3 tw-border-b tw-border-[#999] tw-pb-4 lg:tw-border-0">
            <RichText
              content={blogDetail?.attributes?.content}
              tags={blogTags?.attributes?.topic_blogs?.data}
              author={blogDetail?.attributes?.author_name}
            />
          </div>
        </div>
        <ReadMore
          category={blogDetail?.attributes?.category_blog?.data?.attributes?.value}
        />
      </div>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const locale = () => {
    switch (ctx?.locale) {
      case "en":
      case "vi":
        return endpoints.blog;
      default:
        return endpoints.blog;
    }
  };

  const qs = require("qs");
  const query = qs.stringify(
    {
      filters: {
        slug: {
          $eq: ctx?.query?.blogId,
        },
      },
    },
    {
      encodeValuesOnly: true,
    },
  );

  const queryCategory = qs.stringify(
    {
      locale: ctx?.locale,
      sort: ["order:asc"],
    },
    {
      encodeValuesOnly: true,
    },
  );

  const { data } = await fetch(
    `${locale()}?${query}&&populate=deep&${queryCategory}`,
  )
    .then((x) => x.json())
    .catch(() => ({ data: null })); // handle fetch error
  const { data: dataTag = null } = await fetch(
    `${locale()}?${query}&&populate=*&${queryCategory}`,
  )
    .then((x) => x.json())
    .catch(() => ({ data: null })); // handle fetch error
  const { data: dataCategory } = await fetch(
    `${endpoints.categoryBlog}?populate=deep&${queryCategory}`,
  )
    .then((x) => x.json())
    .catch(() => ({ data: null })); // handle fetch error
  return {
    props: {
      category: dataCategory?.data || null, // ensure it's not undefined
      blogId: ctx?.query?.blogId,
      locale: ctx?.locale,
      data: data || null, // ensure it's not undefined
      dataTag: dataTag, // will be null if undefined
      resolvedUrl: ctx.resolvedUrl,
      ...(await serverSideTranslations(ctx?.locale as string)),
    },
  };
};
