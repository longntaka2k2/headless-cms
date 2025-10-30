import { GetServerSideProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Head from "next/head";
import { useTranslation } from "next-i18next";
import Banner from "@/components/product/integration/Banner";
import Explore from "@/components/product/integration/Explore";
import Slogan from "@/components/product/integration/Sologan";
import { GetStrapiData } from "@/services/strapi";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { GetMeta } from "@/services/strapi";

export default function Intergration({ cmsData }: any) {
  const router = useRouter();
  const { t } = useTranslation("common");

  const [meta, setMeta] = useState([] as any);

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

  const link =
    router.locale === "en"
      ? `https://ichiba.vn/en/products/integrations`
      : `https://ichiba.vn/products/integrations`;

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
          content={meta[0]?.attributes?.metaTitle || "IChiba OnePlatform"}
        />
        <meta
          property="og:image"
          content="https://cms-strapi.ichiba.net/uploads/Size_40_46722f9991.png"
        />
        <meta property="og:url" content={link} />
        <meta property="og:type" content="IChiba OnePlatform" />
      </Head>
      <Banner />
      <Explore
        contents={cmsData.explore.map(({ title, item }: any, idx: number) => ({
          category: title,
          items: item.map((x: any) => ({
            img: x.logo?.data?.attributes?.url,
            title: x.title,
            link: x.link,
          })),
        }))}
      />
      <Slogan />
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const data = await GetStrapiData("integration", {
    populate: "deep",
    locale: ctx?.locale as string,
  });

  return {
    props: {
      ...(await serverSideTranslations(ctx?.locale as string)),
      locale: ctx.locale,
      cmsData: data?.attributes,
    },
  };
};
