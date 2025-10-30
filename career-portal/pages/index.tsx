
import { GetServerSideProps, GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import dynamic from "next/dynamic";

import loadding from "@/public/icons/home/loading.json";
import { Player, Controls } from "@lottiefiles/react-lottie-player";
import { useState, useEffect } from "react";
import Head from "next/head";
import SEO from "@/public/icons/auditSEO.jpg";
import { useTranslation } from "next-i18next";
import { getPosts } from "@/payload-client";
import qs from "qs";

const Banner = dynamic(() => import("@/components/company/discover/banner"), {
  ssr: true,
});

const CoreValue = dynamic(
  () => import("@/components/company/discover/coreValue"),
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
const OurNetworks = dynamic(
  () => import("@/components/company/discover/ourNetworks"),
  {
    ssr: true,
  }
);
const OpenToWork = dynamic(
  () => import("@/components/company/discover/openToWork"),
  {
    ssr: true,
  }
);

export default function Discover(data : any) {
  const {t} = useTranslation("common");
  const urlImg = SEO.src ;
  const schemaHome = data?.schemaHome?.posts?.docs[0]?.layout[0]?.columns
  const alternateNameField = schemaHome?.find((item: any) => 'alternateName' === item?.quoteHeader)
  const logo = schemaHome?.find((item: any) => 'logo' === item?.quoteHeader)
  const image = schemaHome?.find((item: any) => 'image' === item?.quoteHeader)
  const description = schemaHome?.find((item: any) => 'description' === item?.quoteHeader)


  return (
    <>
     <Head>
        <title>{t('metatitle.careers.index.title') || ""}</title>
        <meta name="description" content={t('metatitle.careers.index.meta') || ""}/>
        <meta property="og:image" content={urlImg} />
        <meta property="og:title" content={t('metatitle.careers.index.title') || ""}/>
        <meta property="og:description" content={t('metatitle.careers.index.meta') || ""}/>
        <script type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html:`{"@context":"https:\/\/schema.org","@type":"EmploymentAgency","name":"Ichiba careers","alternateName":"${alternateNameField?.quoteText}","logo":"${logo?.quoteText}","image":"${image?.quoteText}","description":"${description?.quoteText}","hasMap":"https:\/\/goo.gl\/maps\/NaoLkpkUViHpoRXr5","url":"https:\/\/careers.ichiba.net\/","priceRange":"VNĐ","address":{"@type":"PostalAddress","streetAddress":"8 L\u00ea Quang \u0110\u1ea1o, M\u1ef9 \u0110\u00ecnh, Nam T\u1eeb Li\u00eam, H\u00e0 N\u1ed9i","addressLocality":"Nam T\u1eeb Li\u00eam","addressRegion":"H\u00e0 N\u1ed9i","postalCode":"100000","addressCountry":"Vi\u1ec7t Nam"},"geo":{"@type":"GeoCoordinates","latitude":21.015750540223397,"longitude":105.77030271765486},"openingHoursSpecification":{"@type":"OpeningHoursSpecification","dayOfWeek":["Monday","Tuesday","Wednesday","Thursday","Friday"],"opens":"08:00","closes":"17:30"}}` }} />
      </Head>
      <div id="discover" className="">
        <Banner />
        <CoreValue />
        <OpenToWork />
        <OurNetworks />
        <LastestCompany data={data?.data} />
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

  const querySchema = {
    "category.name": {
      equals: "schemaPage",
    },
    "tags":{
      equals:"hompage"
    }
  };
  const querySchemaQuery = qs.stringify(
    {
      where: querySchema, // ensure that `qs` adds the `where` property, too!
      locale: ctx.locale,
    },
    { addQueryPrefix: true }
  );
  let schemaPage = await getPosts(querySchemaQuery);
  return {
    props: {
      data: listPostCareer?.posts,
      schemaHome:schemaPage,
      ...(await serverSideTranslations(ctx?.locale as string)),
    },
    //https://nextjs.org/docs/pages/building-your-application/data-fetching/incremental-static-regeneration
    revalidate: 10,
  };
};
