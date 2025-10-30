import { GetServerSideProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import qs from "qs";
import { getPosts } from "@/payload-client";
import CareerDetailComponentt from "@/components/company/career/careerDetail";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useTranslation } from "next-i18next";
import Head from "next/head";
import SEO from "@/public/icons/auditSEO.jpg";

export default function CareerDetail(data: any) {
  const router = useRouter();
  const {t} = useTranslation("common");
  const urlImg = SEO.src ;
  const hasAttributeJob = data?.data?.posts?.docs[0]?.layout?.find((item: any)  => 'attributeJob' in item)

  useEffect(() => {
    if (data?.data?.posts?.docs.length === 0) {
      router.push("/jobs");
    }
  }, [data, router]);
  
  if (data?.data?.posts?.docs) { 
    return (
      <>
      <Head>

       <title>{data?.data?.posts?.docs[0]?.title ? data?.data?.posts?.docs[0]?.title : ""}</title>
        <meta property="description" content={'IChiba ' + t('metatitle.jobs') || "" + " "+ data?.data?.posts?.docs[0]?.title ? data?.data?.posts?.docs[0]?.title : ""}/>
        <meta property="og:image" content={urlImg} />
        <meta property="og:title" content={data?.data?.posts?.docs[0]?.title ? data?.data?.posts?.docs[0]?.title : ""}/>
        <meta property="og:description" content={'IChiba ' + t('metatitle.jobs') || "" + " "+ data?.data?.posts?.docs[0]?.title ? data?.data?.posts?.docs[0]?.title : ""}/>
        {hasAttributeJob &&  (
        <script type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html:`{"@context":"http:\/\/schema.org\/","@type":"JobPosting","title":"${data?.data?.posts?.docs[0]?.title ? data?.data?.posts?.docs[0]?.title : ""}","description":"${data?.data?.posts?.docs[0]?.title ? data?.data?.posts?.docs[0]?.title : ""}","validThrough":"${hasAttributeJob?.attributeJob[0]?.validThrough}","employmentType":"${hasAttributeJob?.attributeJob[0]?.employmentType}","jobLocation":{"@type":"Place","address":{"@type":"PostalAddress","streetAddress":"8 L\u00ea Quang \u0110\u1ea1o, Ph\u00fa \u0110\u00f4","addressLocality":"Nam T\u1eeb Li\u00eam","addressRegion":"H\u00e0 N\u1ed9i","postalCode":100000,"addressCountry":"VN"}},"baseSalary":{"@type":"MonetaryAmount","currency":"VND","value":{"@type":"QuantitativeValue","unitText":"MONTH","minValue":${hasAttributeJob?.attributeJob[0]?.minPrice},"maxValue":${hasAttributeJob?.attributeJob[0]?.maxPrice}}},"employerOverview":${hasAttributeJob?.attributeJob[0]?.employerOverview},"occupationalCategory":"Nh\u00e2n vi\u00ean"}` }} />
        )}
      </Head>
        <div>
          <CareerDetailComponentt data={data?.data?.posts?.docs} />
        </div>
      </>
    );
  }
}
export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const query = {
    "category.name": {
      equals: "career",
    },
    slugs: {
      equals: ctx.params?.detail,
    },
  };
  const stringifiedQuery = qs.stringify(
    {
      where: query, // ensure that `qs` adds the `where` property, too!
      locale: "vi",
    },
    { addQueryPrefix: true }
  );
  console.time("Get careerDetail from payload CMS spend");
  let careerDetail = await getPosts(stringifiedQuery);
  console.timeEnd("Get careerDetail from payload CMS spend");
  return {
    props: {
      data: careerDetail,
      ...(await serverSideTranslations(ctx?.locale as string)),
    },
  };
};
