import { GetServerSideProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import dynamic from "next/dynamic";
import Head from "next/head";
import { useTranslation } from "next-i18next";
import SEO from "@/components/layout/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { GetMeta } from "@/services/strapi";

const Header = dynamic(() => import("@/components/product/ship4P/header"), {
  ssr: false,
});
const Banner = dynamic(() => import("@/components/product/ship4P/Banner"), {
  ssr: false,
});
const ManageEntire = dynamic(
  () => import("@/components/product/ship4P/ManageEntire"),
  {
    ssr: false,
  },
);
const MultiCarrier = dynamic(
  () => import("@/components/product/ship4P/multi-carrier"),
  {
    ssr: false,
  },
);
const SayGoodbye = dynamic(
  () => import("@/components/product/ship4P/SayGoodbye"),
  {
    ssr: false,
  },
);
const Connecting = dynamic(
  () => import("@/components/product/ship4P/Connecting"),
  {
    ssr: false,
  },
);
const MultiChannel = dynamic(
  () => import("@/components/product/ship4P/MultiChannel"),
  {
    ssr: false,
  },
);
const FAQ = dynamic(() => import("@/components/product/ship4P/faq"), {
  ssr: false,
});
const GetStarted = dynamic(
  () => import("@/components/product/ship4P/GetStarted"),
  {
    ssr: false,
  },
);

export default function Ship4p() {
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

  const seo = {
    metaTitle: meta[0]?.attributes?.metaTitle || "IChiba OnePlatform",
    metaDescription: t("metaDescription.ship4p"),
  };

  return (
    <>
      <SEO {...seo} />
      <Head>
        <title>{meta[0]?.attributes?.metaTitle || "IChiba OnePlatform"}</title>
        <meta
          name="description"
          content={meta[0]?.attributes?.metaDescription || "IChiba OnePlatform"}
        />
        <meta
          property="og:image"
          content="https://cms-strapi.ichiba.net/uploads/Size_40_46722f9991.png"
        />
      </Head>
      <div id="overview">
        <Header />
        <Banner />
        <ManageEntire />
        <MultiCarrier />
        <SayGoodbye />
        <Connecting />
        <MultiChannel />
        <FAQ />

        {/* <CustomerStory /> */}
        <GetStarted />
      </div>
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
