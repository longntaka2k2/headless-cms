/* eslint-disable react-hooks/rules-of-hooks */
import CategoryComponent from "@/components/blog/category";
import { GetServerSideProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import React from "react";
import Head from "next/head";
import { useTranslation } from "react-i18next";
import { useRouter } from "next/router";

const Category = () => {
  const { t } = useTranslation("common");
  const router = useRouter();
  const link =
    router.locale === "en"
      ? `https://ichiba.vn/en/${router.asPath}`
      : `https://ichiba.vn/${router.asPath}`;

  return (
    <>
      <Head>
        <title>{t("metatitle.blog")}</title>
        <meta name="description" content={t("metatitle.blog") || ""} />
        {router.asPath === "/blog/category/hoc-vien" ||
          (router.asPath === "/blog/category/tips" && (
            <meta name="robots" content="noindex" />
          ))}
        <meta property="og:title" content={t("metatitle.blog") || ""} />
        <meta property="og:description" content={t("metatitle.blog") || ""} />
        <meta
          property="og:image"
          content="https://cms-strapi.ichiba.net/uploads/Size_40_46722f9991.png"
        />
        <meta property="og:url" content={link} />
        <meta property="og:type" content="IChiba OnePlatform" />
      </Head>
      <CategoryComponent />
    </>
  );
};
export default Category;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  return {
    props: {
      ...(await serverSideTranslations(ctx?.locale as string)),
    },
  };
};
