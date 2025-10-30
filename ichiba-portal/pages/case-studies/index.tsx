import { useRouter } from "next/router";
import Head from "next/head";
import { GetServerSideProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Image from "next/image";
import { useTranslation } from "next-i18next";
import { GetBlogs, GetCaseStudie, GetCategories } from "@/services/strapi";
import Link from "next/link";
import { RelativeImagePath, formatTime } from "@/utils/utils";
import ListBlogPanel from "@/components/blog/ListBlogPanel";
import clsx from "clsx";
import ListCaseStudiePanel from "@/components/CaseStudy/ListCaseStudiePanel";
import CaseStudieV2 from "@/components/CaseStudy/CaseStudieV2";
import BlogTag from "@/components/blog/BlogTag";

export default function CaseStudies({ data }: any) {
  const router = useRouter();
  const { t } = useTranslation("common");
  const link =
    router.locale === "en"
      ? `https://ichiba.vn/en/case-studies`
      : `https://ichiba.vn/case-studies`;

  return (
    <>
      <Head>
        <title>{t("metatitle.caseStudies")}</title>
        <meta
          name="description"
          content={t("metaDescription.caseStudies") || ""}
        />
        <meta property="og:title" content={t("metatitle.caseStudies") || ""} />
        <meta
          property="og:description"
          content={t("metatitle.caseStudies") || ""}
        />
        <meta
          property="og:image"
          content="https://cms-strapi.ichiba.net/uploads/Size_40_46722f9991.png"
        />
        <meta property="og:url" content={link} />
        <meta property="og:type" content="IChiba OnePlatform" />
      </Head>
      <CaseStudieV2 />
    </>
  );
}
export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const query = {
    populate: "deep",
    locale: ctx?.locale,
    sort: ["publishedAt:desc"],
  };

  const data = await GetCaseStudie(query);

  let dataCategory = await GetCategories(query);

  return {
    props: {
      category: dataCategory,
      data: data,
      ...(await serverSideTranslations(ctx?.locale as string)),
    },
  };
};
