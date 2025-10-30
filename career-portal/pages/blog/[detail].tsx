/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/link-passhref */
/* eslint-disable react-hooks/rules-of-hooks */

import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { getPosts, getPostsLocal } from "@/payload-client";
import Image from "next/image";
import Head from "next/head";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faSquareShareNodes,
  faMessage,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { GetServerSideProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import qs from "qs";
import loadding from "@/public/icons/auditSEO.jpg";
import { Gutter } from "@/components/Gutter";
import RichText from "@/components/RichText";
import Related from "@/components/blog/related";
import Link from "next/link";
import { useTranslation } from "next-i18next";
import dynamic from "next/dynamic";
// import BlogDetailComponent from "@/components/blog/blogDetail";

const renderRelated =  (id : string) =>{
  const router = useRouter();
  
}
const BlogDetailComponent = dynamic(
  () => import("@/components/blog/blogDetail"),
  {
    ssr: true,
  }
);
type blogConent = {
  post: object;
};

export default function BlogDetailICB(data : any) {
  const router = useRouter(); 
  const { t } = useTranslation("common");
  const urlImg = loadding.src ;


  useEffect(() => {

    //@ts-ignore
    // if (blogContent?.posts?.docs?.length === 0) {
    //   router.push("/blog");
    // }
  }, [router]);

  return (
    <>
      <Head>

        <title>{data?.data?.posts?.docs[0]?.title ? data?.data?.posts?.docs[0]?.title : ""}</title>
        <meta property="description" content={'IChiba ' + t('metatitle.jobs') || "" + " "+ data?.data?.posts?.docs[0]?.title ? data?.data?.posts?.docs[0]?.title : ""}/>
        <meta property="og:image" content={data?.data?.posts?.docs[0]?.layout[0]?.blog[0]?.media?.url ? data?.data?.posts?.docs[0]?.layout[0]?.blog[0]?.media?.url : urlImg} />
        <meta property="og:title" content={data?.data?.posts?.docs[0]?.title ? data?.data?.posts?.docs[0]?.title : ""}/>
        <meta property="og:description" content={'IChiba ' + t('metatitle.jobs') || "" + " "+ data?.data?.posts?.docs[0]?.title ? data?.data?.posts?.docs[0]?.title : ""}/>
      </Head>
      
      <BlogDetailComponent data={data?.data?.posts?.docs[0] as any}/>     
    </>
  );
}
export const getServerSideProps: GetServerSideProps = async (ctx) => {
  
    
  const query = {
    "category.name": {
      equals: ctx?.locale ==='vi' ? "blogVi" : 'blogEn',
    },
    slugs: {
      equals:  ctx?.query?.detail
    },
  };
  const stringifiedQuery = qs.stringify(
    {
      where: query, // ensure that `qs` adds the `where` property, too!
      locale:  ctx?.locale,
    },
    { addQueryPrefix: true }
  );
  let careerDetail = await getPosts(stringifiedQuery);
  return {
    props: {
      data:careerDetail,
      ...(await serverSideTranslations(ctx?.locale as string)),
    },
  };
};
// export async function getServerSideProps(context: { query: { blogId: any; }; }) {
//   const paths = context?.query?.blogId
//   const res  = await client.metaBlogDetailEntry({ slug : paths as string}) ;
//   const postData = res?.blogDetailCollection?.items[0]?.metadataCollection
//   return{props : {postData}}
// }