/* eslint-disable react-hooks/rules-of-hooks */
import TagsComponent from "@/components/blog/tags";
import { GetServerSideProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import React from "react";
import Head from "next/head";
import { useTranslation } from "react-i18next";
import { useRouter } from "next/router";

const Tags = () => {
  const { t } = useTranslation("common");
  const router = useRouter();
  return (
    <>
      {/* <Head>
        <title>{t("metatitle.blog")}</title>
        <meta name="description" content={t("metatitle.blog") || ""} />
      </Head> */}
      <TagsComponent />
    </>
  );
};
export default Tags;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  return {
    props: {
      ...(await serverSideTranslations(ctx?.locale as string)),
    },
  };
};
