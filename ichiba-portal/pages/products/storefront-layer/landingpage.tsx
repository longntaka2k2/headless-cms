import { GetServerSideProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Head from "next/head";
import { useTranslation } from "next-i18next";
import Banner from "@/components/product/digital-commerce/landingpage/Banner";
import ContactUs from "@/components/product/digital-commerce/landingpage/contactUs";
import ListTemplates from "@/components/product/digital-commerce/landingpage/templates/listTemplates";
import Outstanding from "@/components/product/digital-commerce/landingpage/outstanding";
import FlexiblyCustomize from "@/components/product/digital-commerce/landingpage/flexiblyCustomize";
import BuildOptimized from "@/components/product/digital-commerce/landingpage/buildOptimized";
import HelpBuild from "@/components/product/digital-commerce/landingpage/helpBuild";
import OurCustomers from "@/components/product/digital-commerce/landingpage/ourCustomers";
import Contact from "@/components/product/digital-commerce/landingpage/contact";
import HeaderStoreFront from "@/components/product/storeFront/header";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { GetMeta } from "@/services/strapi";

export default function LandingPage() {
  const { t } = useTranslation("common");
  const router = useRouter();
  const [meta, setMeta] = useState([] as any);

  const link =
    router.locale === "en"
      ? "https://ichiba.vn/en/products/storefront-layer/landingpage"
      : "https://ichiba.vn/products/storefront-layer/landingpage";

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
    <>
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
      <HeaderStoreFront />
      <Banner />
      <ListTemplates />
      <ContactUs />
      <Outstanding />
      <FlexiblyCustomize />
      <BuildOptimized />
      <HelpBuild />
      <OurCustomers />
      <Contact />
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
