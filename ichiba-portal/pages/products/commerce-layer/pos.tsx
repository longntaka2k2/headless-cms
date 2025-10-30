import { GetServerSideProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import React from "react";
import POSOverViewCPN from "@/components/product/commerce-layer/pos";
import Head from "next/head";
import { useTranslation } from "react-i18next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { GetMeta } from "@/services/strapi";

export default function POS() {
  const { t } = useTranslation("common");
  const router = useRouter();
  const [meta, setMeta] = useState([] as any);
  const link =
    router.locale === "en"
      ? "https://ichiba.vn/en/products/commerce-layer/overview"
      : "https://ichiba.vn/products/commerce-layer/overview";

  useEffect(() => {
    const getMetaByAsPath = async () => {
      const data = await GetMeta({
        populate: "deep",
        locale: router?.locale,
        filters: {
          asPath: {
            $eq: router.asPath,
          },
        },
        sort: ["publishedAt:desc"],
      });
      setMeta(data);
    };

    getMetaByAsPath();
  }, [router?.locale, router.asPath]);
  return (
    <React.Fragment>
      <Head>
        <title>{meta[0]?.attributes?.metaTitle || "IChiba OnePlatform"}</title>
        <meta
          name="description"
          content={meta[0]?.attributes?.metaDescription || "IChiba OnePlatform"}
        />
        <meta
          property="og:title"
          content={meta[0]?.attributes?.metaTitle || "IChiba OnePlatform"}
        />
        <meta
          property="og:description"
          content={meta[0]?.attributes?.metaDescription || "IChiba OnePlatform"}
        />
        <meta
          property="og:image"
          content="https://cms-strapi.ichiba.net/uploads/Size_40_46722f9991.png"
        />
        <meta property="og:url" content={link} />
        <meta property="og:type" content="IChiba OnePlatform" />
      </Head>
      <POSOverViewCPN />
    </React.Fragment>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  return {
    props: {
      ...(await serverSideTranslations(ctx?.locale as string)),
    },
  };
};
