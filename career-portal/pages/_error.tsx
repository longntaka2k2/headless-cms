import { GetStaticProps } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Link from 'next/link';
import bgOurData from "@/public/icons/404.jpg"
import Image from 'next/image';


export default function Custom404() {
  const {t} = useTranslation("common");

  return (
    <>
      <div className='container'>
          <Image src={bgOurData} alt='' className='mx-auto d-block' width={500} height={500} style={{maxWidth:'100%',height:'auto'}}/>
      </div>
    </>
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
