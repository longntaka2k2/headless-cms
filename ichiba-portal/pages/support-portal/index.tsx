import { GetServerSideProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

import { ChangeEvent, useState } from "react";

import Link from "next/link";
import Image from "next/image";
import SuportPortalComponent from "@/components/supportPortal/supportPortalComponent";
import Head from "next/head";
import { useRouter } from "next/router";
export default function SupportPortal() {
  const { t } = useTranslation("common");
  const router = useRouter();
  const link =
    router.locale === "en"
      ? "https://ichiba.vn/en/support-portal"
      : "https://ichiba.vn/support-portal";

  return (
    <>
      <Head>
        <title>{t("metatitle.suport")}</title>
        <meta name="description" content={t("metatitle.suport") || ""} />
        <meta property="og:title" content={t("metatitle.suport") || ""} />
        <meta property="og:description" content={t("metatitle.suport") || ""} />
        <meta
          property="og:image"
          content="https://cms-strapi.ichiba.net/uploads/Size_40_46722f9991.png"
        />
        <meta property="og:url" content={link} />
        <meta property="og:type" content="IChiba OnePlatform" />
      </Head>
      <SuportPortalComponent />
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
