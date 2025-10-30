import { useRouter } from "next/router";
import Head from "next/head";
import { GetServerSideProps, Metadata, ResolvingMetadata } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Image from "next/image";
import { useTranslation } from "next-i18next";
import { GetBlogs, GetCategories, GetIntegrations } from "@/services/strapi";
import Link from "next/link";
import { RelativeImagePath, formatTime } from "@/utils/utils";
import ListBlogPanel from "@/components/blog/ListBlogPanel";
import clsx from "clsx";

export default function BlogCMP({ data }: any) {
  const router = useRouter();
  const { t } = useTranslation("common");
  const link =
    router.locale === "en"
      ? "https://ichiba.vn/en/blog"
      : "https://ichiba.vn/blog";

  return (
    <>
      <Head>
        <title>{t("metatitle.blog")}</title>
        <meta name="description" content={t("metatitle.blog") || ""} />
        <meta property="og:title" content={t("metatitle.blog") || ""} />
        <meta property="og:description" content={t("metatitle.blog") || ""} />
        <meta
          property="og:image"
          content="https://cms-strapi.ichiba.net/uploads/Size_40_46722f9991.png"
        />
        <meta property="og:url" content={link} />
        <meta property="og:type" content="IChiba OnePlatform" />
      </Head>

      {data && (
        <div id="blog">
          <div className="tw-container">
            <h1 className="tw-text-2xl lg:tw-text-5xl tw-font-bold tw-leading-8 lg:tw-leading-[56px] tw-mb-2 lg:tw-mb-0">
              {t("blog.heading")}
            </h1>
            <div className="lg:tw-grid lg:tw-grid-cols-8 tw-gap-6 tw-py-10 lg:tw-pb-[60px]">
              <div className="lg:tw-col-span-5 tw-shadow-[0px_0px_12px_0px_rgba(54,_50,_46,_0.08)] tw-overflow-hidden tw-rounded-[16px]">
                <Link
                  className=""
                  href={`/blog/${data[0]?.attributes?.slug}`}
                  passHref
                >
                  <Image
                    src={RelativeImagePath(
                      data[0]?.attributes?.image?.data?.attributes?.url,
                    )}
                    alt="IChiba OnePlatform"
                    width={1000}
                    height={1000}
                    className={clsx(
                      "tw-w-full tw-h-[200px] lg:tw-h-[300px] tw-object-cover tw-cursor-pointer tw-rounded-2xl",
                      "hover:tw-scale-105 tw-transition-all tw-duration-500 tw-ease-in-out",
                    )}
                  />
                </Link>
                <div className="tw-p-5 lg:tw-p-7">
                  {/* <BlogTag tags={data[0]?.attributes?.tags} /> */}
                  <Link
                    className=" tw-font-bold lg:tw-text-2xl tw-line-clamp-2 tw-cursor-pointer tw-no-underline tw-text-black"
                    href={`/blog/${data[0]?.attributes?.slug}`}
                  >
                    {data[0]?.attributes?.title}
                  </Link>
                  <div className="tw-mt-2 tw-flex tw-justify-between tw-text-sm tw-text-[#5e6a78]">
                    <div>
                      {data[0]?.attributes?.author_name?.data?.attributes
                        ?.author_name ?? "Janbox"}
                    </div>
                    <div className=" ">
                      {data[0]?.attributes?.createdAt
                        ? formatTime(data[0]?.attributes?.createdAt)
                        : ""}
                    </div>
                  </div>
                </div>
              </div>
              <div className="lg:tw-col-span-3 tw-mt-7 lg:tw-mt-0 tw-grid tw-grid-col-1 tw-gap-4">
                {data?.slice(1, 4).map((value: any, index: number) => (
                  <div
                    className="tw-flex lg:tw-justify-between tw-flex-1"
                    key={index}
                  >
                    <Image
                      src={RelativeImagePath(
                        value?.attributes?.image?.data?.attributes?.url,
                      )}
                      alt="image"
                      width={220}
                      height={220}
                      quality={100}
                      className={clsx(
                        "tw-w-[120px] tw-h-[120px] ",
                        "tw-rounded-2xl tw-object-cover tw-cursor-pointer tw-shadow-[0px_0px_12px_0px_rgba(54,_50,_46,_0.08)]",
                        "hover:tw-scale-105 tw-transition-all tw-duration-500 tw-ease-in-out",
                      )}
                    />
                    <div className="tw-ml-4">
                      {/* <BlogTag tags={value?.attributes?.tags} /> */}
                      <Link
                        href={`/blog/${value?.attributes?.slug}`}
                        className="tw-font-bold tw-line-clamp-2 tw-cursor-pointer tw-no-underline tw-text-black"
                      >
                        {value?.attributes?.title}
                      </Link>
                      <div className="tw-mt-2 tw-flex tw-justify-between tw-text-[12px] tw-text-[#5e6a78]">
                        <div>
                          {value?.attributes?.author_name?.data?.attributes
                            ?.author_name
                            ? value?.attributes?.author_name?.data?.attributes
                                ?.author_name
                            : "IChiba OnePlatform"}
                        </div>
                        <div className=" ">
                          {value?.attributes?.createdAt
                            ? formatTime(value?.attributes?.createdAt)
                            : ""}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
      <ListBlogPanel />
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
