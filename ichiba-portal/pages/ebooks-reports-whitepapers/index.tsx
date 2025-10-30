import { useRouter } from "next/router";
import Head from "next/head";
import { GetServerSideProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { GetBlogs, GetCategories, GetIntegrations } from "@/services/strapi";
import dynamic from "next/dynamic";

const ResourcesComponent = dynamic(
  () => import("@/components/ebooks-reports-whitepapers/index"),
  {
    ssr: true,
  },
);

export default function ResourcesPage({ data }: any) {
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
      <ResourcesComponent />
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
