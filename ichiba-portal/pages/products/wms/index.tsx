import { GetServerSideProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Head from "next/head";
import { useTranslation } from "next-i18next";
import WMSComponent from "@/components/product/wms";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { GetMeta } from "@/services/strapi";

export default function WMS() {
  const { t } = useTranslation("common");
  const router = useRouter();
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

  return (
    <>
      <Head>
        <title>{meta[0]?.attributes?.metaTitle || "IChiba OnePlatform"}</title>
        <meta
          name="description"
          content={meta[0]?.attributes?.metaDescription || "IChiba OnePlatform"}
        />
      </Head>
      <WMSComponent />
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
