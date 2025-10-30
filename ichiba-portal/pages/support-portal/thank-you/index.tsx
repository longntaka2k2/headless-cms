import { GetServerSideProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import Head from "next/head";
import ThankYouComponent from "@/components/thank-you";
import { useRouter } from "next/router";
export default function SupportPortal() {
  const { t } = useTranslation("common");
  const router = useRouter();
  const link =
    router.locale === "en"
      ? "https://ichiba.vn/en/support-portal/thank-you"
      : "https://ichiba.vn/support-portal/thank-you";

  return (
    <>
      <Head>
        <title>{t("metatitle.thankYou")}</title>
        <meta name="description" content={t("metatitle.thankYou") || ""} />
        <meta property="og:title" content={t("metatitle.thankYou") || ""} />
        <meta property="og:description" content={t("metatitle.thankYou") || ""} />
        <meta
          property="og:image"
          content="https://cms-strapi.ichiba.net/uploads/Size_40_46722f9991.png"
        />
        <meta property="og:url" content={link} />
        <meta property="og:type" content="IChiba OnePlatform" />
      </Head>
      <ThankYouComponent />
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
