import React, { useEffect } from 'react';
import { GetStaticProps } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Link from 'next/link';
import bgOurData from "@/public/icons/404.jpg"
import Image from 'next/image';
import { useRouter } from 'next/router';


const  Custom404 = () => {
  const {t} = useTranslation("common");
  const router = useRouter()
  function backHome() {
    setTimeout(function() {
      router.push('/')
    }, 5000); // 5000ms = 5 giây
  }
  useEffect(() => {
    backHome();
  }, []);
  return (
      <div className='container'>
          <Image src={bgOurData} alt='' className='mx-auto d-block' width={500} height={500} style={{maxWidth:'100%',height:'auto'}}/>
      </div>
  );
}
export const getStaticProps: GetStaticProps = async (ctx) => {
  return {
    props: {
      ...(await serverSideTranslations(ctx?.locale as string)),
    },
    //https://nextjs.org/docs/pages/building-your-application/data-fetching/incremental-static-regeneration
    revalidate: 10,
  };
};
export default Custom404;