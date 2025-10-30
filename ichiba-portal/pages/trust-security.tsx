import { GetServerSideProps, GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import dynamic from "next/dynamic";
import { Player, Controls } from "@lottiefiles/react-lottie-player";
import { useState, useEffect } from "react";
import { getPosts } from "@/payload-client";
import loadding from "@/public/icons/home/loading.json";
import qs from "qs";
import Head from "next/head";
import { useTranslation } from "next-i18next";
import SEO from "@/public/icons/auditSEO.jpg";
import { GetBlogs } from "@/services/strapi";

// import trustComponent from '../../../components/company/trust/trustComponent';
// const partNers = [
//   {partner1},
//   {partner2},
//   {partner3},
//   {partner4},
//   {partner5},
//   {partner6},
//   {partner7},
//   {partner8},
//   {partner9},
//   {partner10},
//   {partner11},
//   {partner12},
//   {partner13},

// ]
const TrustComponent = dynamic(
  () => import("@/components/company/trust/trustComponent"),
  {
    ssr: true,
  },
);
export default function TrustSecurity(props: any) {
  const [isLoading, setIsLoading] = useState(true);
  const { t } = useTranslation("common");
  const urlImg = SEO.src;
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      <Head>
        <title>{t("metatitle.careers.trust.title") || ""}</title>
        <meta
          property="description"
          content={t("metatitle.careers.trust.meta") || ""}
        />
        <meta
          property="og:title"
          content={t("metatitle.careers.trust.title") || ""}
        />
        <meta property="og:image" content={urlImg} />
        <meta
          property="og:description"
          content={t("metatitle.careers.trust.meta") || ""}
        />
      </Head>
      <div id="trust">
        <TrustComponent data={props?.data} />
      </div>
    </>
  );
}
export const getStaticProps: GetStaticProps = async (ctx) => {
  const query = {
    populate: "deep",
    filters: {
      locale: {
        $eq: ctx?.locale,
      },
    },
    sort: ["publishedAt:desc"],
  };

  const data = await GetBlogs(query);

  return {
    props: {
      data: data,
      ...(await serverSideTranslations(ctx?.locale as string)),
    },
  };
};
