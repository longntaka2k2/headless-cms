import { GetStaticProps } from "next";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import dynamic from "next/dynamic";
import Head from "next/head";
import SEO from "@/public/icons/auditSEO.jpg";
import { useState, useEffect } from "react";
import qs from "qs";
import { getPosts } from "@/payload-client";

const BannerCareer = dynamic(
  () => import("@/components/company/career/banner"),
  {
    ssr: true,
  }
);
const CultureCareer = dynamic(
  () => import("@/components/company/career/ourCulture"),
  {
    ssr: true,
  }
);
const EmployeeCareer = dynamic(
  () => import("@/components/company/career/employee"),
  {
    ssr: true,
  }
);
const WeHire = dynamic(
  () => import("@/components/company/career/weHire"),
  {
    ssr: true,
  }
);
const GladToHave = dynamic(
  () => import("@/components/company/career/gladToHave"),
  {
    ssr: true,
  }
);
const SaveEveryCareer = dynamic(
  () => import("@/components/company/career/saveEvery"),
  {
    ssr: true,
  }
);
const LastestCompany = dynamic(
  () => import("@/components/company/discover/lastest"),
  {
    ssr: true,
  }
);
export default function Career(data : any) {
  const [isLoading, setIsLoading] = useState(true);
  const {t} = useTranslation("common");
  const urlImg = SEO.src ;

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);
  return (
    <>
    <Head>
        <title>{t('metatitle.careers.ourLife.title') || ""}</title>
        <meta property="description" content={t('metatitle.careers.ourLife.meta') || ""}/>
        <meta property="og:image" content={urlImg} />
        <meta property="og:title" content={t('metatitle.careers.ourLife.title') || ""}/>
        <meta property="og:description" content={t('metatitle.careers.ourLife.meta') || ""}/>
      </Head>
      <div id="career">
        <BannerCareer />
        <CultureCareer />
        <EmployeeCareer />
        <WeHire/>
        <SaveEveryCareer />
        <LastestCompany data={data?.data}/>
        <GladToHave />
      </div>
    </>
  );
}

export const getStaticProps: GetStaticProps = async (ctx) => {
  const query = {
    "category.name": {
      equals: ctx.locale === "vi" ? "blogVi" : "blogEn",
    },
  };
  const stringifiedQuery = qs.stringify(
    {
      where: query, // ensure that `qs` adds the `where` property, too!
      locale: ctx.locale,
    },
    { addQueryPrefix: true }
  );
  let listPostCareer = await getPosts(stringifiedQuery);
  return {
    props: {
      data: listPostCareer?.posts,
      ...(await serverSideTranslations(ctx?.locale as string)),
    },
    //https://nextjs.org/docs/pages/building-your-application/data-fetching/incremental-static-regeneration
    revalidate: 10,
  };
};
