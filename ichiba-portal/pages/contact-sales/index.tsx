import { GetServerSideProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
// import ContactSaleComponent from "@/components/contactSale/contactSaleComponent";
import React from "react";
import dynamic from "next/dynamic";
import Head from "next/head";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";

const ContactSaleComponent = dynamic(
  () => import("@/components/contactSale/contactSaleComponent"),
  {
    ssr: false,
  },
);

export default function ContactSale() {
  const { t } = useTranslation("common");
  const router = useRouter();
  const link =
    router.locale === "en"
      ? `https://ichiba.vn/en/case-studies`
      : `https://ichiba.vn/case-studies`;

  return (
    <>
      <Head>
        <title>{t("metatitle.contactSale")}</title>
        <meta name="description" content={t("metatitle.contactSale") || ""} />
        <meta property="og:title" content={t("metatitle.contactSale") || ""} />
        <meta
          property="og:description"
          content={t("metatitle.contactSale") || ""}
        />
        <meta
          property="og:image"
          content="https://cms-strapi.ichiba.net/uploads/Size_40_46722f9991.png"
        />
        <meta property="og:url" content={link} />
        <meta property="og:type" content="IChiba OnePlatform" />
      </Head>
      <ContactSaleComponent />
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
