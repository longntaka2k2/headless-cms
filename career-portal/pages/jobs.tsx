/* eslint-disable react-hooks/exhaustive-deps */
// import ListCareerComponent from "@/components/company/career/listCareer";
// import HeaderCarrer from "@/components/company/career/header";
import { GetServerSideProps, GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import dynamic from "next/dynamic";
import { getPosts, getPostsLocal } from "@/payload-client";
import qs from "qs";
import { Player, Controls } from "@lottiefiles/react-lottie-player";
import { useState, useEffect } from "react";
import loadding from "@/public/icons/home/loading.json";
import { useRouter } from "next/router";
import Head from "next/head";
import { useTranslation } from "next-i18next";
import SEO from "@/public/icons/auditSEO.jpg";

const ListCareerComponent = dynamic(
  () => import("@/components/company/career/listCareer"),
  {
    ssr: false,
  }
);

export default function Career(data : any) {
  const [listCareers, setListCareers] = useState([] as any);
  const {t} = useTranslation("common");
  const urlImg = SEO.src ;

  const router = useRouter()
  async function getDataCareers(){
    if(router?.query?.job){
      const query = {
        "category.name": {
          equals: "career",
        },
        or: [
          {
            'title':{
              contains:router?.query?.job
            }
          },
          {
            "attributes.location.lable": {
              contains: router?.query?.job,
            },
          },
          {
            "attributes.category.lable": {
              contains: router?.query?.job,
            },
          },
          {
            "attributes.type.lable": {
              contains: router?.query?.job,
            },
          },
        ]
        
      };
      const stringifiedQuery = qs.stringify(
        {
          where: query, // ensure that `qs` adds the `where` property, too!
          locale: 'vi',
          limit: 50
        },
        { addQueryPrefix: true }
      );
      let listPostCareer = await getPosts(stringifiedQuery);
      setListCareers(listPostCareer as any)

    }else{
      setListCareers(data?.data as any)

    }
    
  }
  useEffect(() => {
    getDataCareers()
  }, [router?.query?.job]);
  return (

    <>
      <Head>
      <title>{t('metatitle.careers.listCareers.title') || ""}</title>
        <meta property="description" content={t('metatitle.careers.listCareers.meta') || ""}/>
        <meta property="og:image" content={urlImg} />
        <meta property="og:title" content={t('metatitle.careers.listCareers.title') || ""}/>
        <meta property="og:description" content={t('metatitle.careers.listCareers.meta') || ""}/>
      </Head>
      {listCareers && listCareers?.posts?.docs && (
        <>
          <ListCareerComponent data={listCareers?.posts?.docs} />
        </>
      )}
    </>
  );
}

export const getStaticProps: GetStaticProps = async (ctx) => {
  const query = {
    "category.name": {
      equals: "career",
    },
    
  };
  const stringifiedQuery = qs.stringify(
    {
      
      where: query, // ensure that `qs` adds the `where` property, too!
      locale: 'vi',
      limit:50,
      sort: '-prioritize',
    },
    { addQueryPrefix: true }
  );
  let listPostCareer = await getPosts(stringifiedQuery);
  return {
    props: {
      data: listPostCareer,
      ...(await serverSideTranslations(ctx?.locale as string)),
    },
    //https://nextjs.org/docs/pages/building-your-application/data-fetching/incremental-static-regeneration
    revalidate: 5,
  };
};
