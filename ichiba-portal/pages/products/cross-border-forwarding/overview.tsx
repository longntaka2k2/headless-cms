import { GetServerSideProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import dynamic from "next/dynamic";
import Head from "next/head";
import clsx from "clsx";
import SEO from "@/components/layout/head";
import endpoints from "@/const/endpoints";
import { useEffect, useState } from "react";
import { GetMeta } from "@/services/strapi";
import { useRouter } from "next/router";

const HeaderCrossBorder = dynamic(
  () =>
    import("@/components/product/cross-border-forwarding/HeaderCrossBorder"),
  { ssr: true },
);

const Banner = dynamic(
  () => import("@/components/product/cross-border-forwarding/Banner"),
  { ssr: true },
);

const HowItWork = dynamic(
  () => import("@/components/product/cross-border-forwarding/HowItwork"),
  { ssr: true },
);

const FourObstacles = dynamic(
  () => import("@/components/product/cross-border-forwarding/FourObstacles"),
  { ssr: true },
);

const Process = dynamic(
  () => import("@/components/product/cross-border-forwarding/Process"),
  { ssr: true },
);

const Management = dynamic(
  () => import("@/components/product/cross-border-forwarding/manegement"),
  { ssr: true },
);

const Integration = dynamic(
  () => import("@/components/product/cross-border-forwarding/Integration"),
  { ssr: true },
);

const FreightCost = dynamic(
  () => import("@/components/product/cross-border-forwarding/FreightCost"),
  { ssr: true },
);

const Digitize = dynamic(
  () => import("@/components/product/cross-border-forwarding/digitize"),
  { ssr: true },
);

const CustomerSuccess = dynamic(
  () =>
    import(
      "@/components/product/cross-border-forwarding/customer-success/index"
    ),
  {
    ssr: false,
  },
);

const BeforeAfter = dynamic(
  () => import("@/components/product/cross-border-forwarding/BeforeAfter"),
  {
    ssr: false,
  },
);

const Contact = dynamic(
  () => import("@/components/product/cross-border-forwarding/Contact"),
  {
    ssr: false,
  },
);

export default function Corssbolder(props: any) {
  const { t } = useTranslation("common");
  const router = useRouter();
  const seoData = props?.data?.attributes?.seo;
  const seo = {
    metaTitle: t("metatitle.smartCBOverview"),
    metaDescription: t("metaDescription.smartCBOverview"),
  };

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
      {seoData ? (
        <SEO {...seo} />
      ) : (
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
      )}
      <HeaderCrossBorder />
      <div id="crossBorder-overView">
        <Banner />
        <HowItWork content={""} id={0} title={""} type={""} />
        <FourObstacles />
        <Process />
        <Management />
        <Integration />
        <FreightCost />
        <Digitize />
        <div
          className={clsx(
            "tw-bg-[linear-gradient(156deg,_rgba(255,_255,_255,_0.50)_26.82%,_#D7E1F0_107.36%,_rgba(177,_209,_246,_0.50)_180.33%)]",
          )}
        >
          {/* <CustomerSuccess /> */}
          <BeforeAfter />
        </div>
        <Contact />
      </div>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { data } = await fetch(
    `${endpoints.smartCrossBorder_overview}?locale=${ctx.locale}&populate=deep`,
  ).then((x) => x.json());
  return {
    props: {
      data,
      ...(await serverSideTranslations(ctx?.locale as string)),
    },
  };
};
