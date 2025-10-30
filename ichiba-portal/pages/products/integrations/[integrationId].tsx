import { GetServerSideProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Image from "next/image";
import Banner from "@/components/product/integration/integration-detail/Banner";
import Advantages from "@/components/product/integration/integration-detail/Advantages";
import OurAPI from "@/components/product/integration/integration-detail/OurAPI";
import WhyChoose from "@/components/product/integration/integration-detail/WhyChoose";
import ContactNow from "@/components/product/integration/integration-detail/ContactNow";
import endpoints from "@/const/endpoints";
import Head from "next/head";
import Custom404 from "@/pages/404";
import { useTranslation } from "react-i18next";
import APower from "@/components/product/integration/integration-detail/APower";
import Benefits from "@/components/product/integration/integration-detail/Benefits";
import Helps from "@/components/product/integration/integration-detail/Helps";
import FAQs from "@/components/product/integration/integration-detail/FAQs";
import { useRouter } from "next/router";

export default function IntegrationDetail(data: any) {
  const { t } = useTranslation("common");
  const router = useRouter();
  let integrationData = data?.data[0];
  const link =
    router.locale === "en"
      ? `https://ichiba.vn/en/${router.asPath}`
      : `https://ichiba.vn/${router.asPath}`;
  return (
    <>
      {integrationData ? (
        <>
          <Head>
            {integrationData?.attributes?.metaTitle && (
              <title>{integrationData?.attributes?.metaTitle}</title>
            )}
            {integrationData?.attributes?.metaDescription && (
              <meta
                name="description"
                content={integrationData?.attributes?.metaDescription}
              />
            )}
            <meta
              property="og:title"
              content={integrationData?.attributes?.metaTitle || ""}
            />
            <meta
              property="og:description"
              content={integrationData?.attributes?.metaDescription || ""}
            />
            <meta
              property="og:image"
              content="https://cms-strapi.ichiba.net/uploads/Size_40_46722f9991.png"
            />
            <meta property="og:url" content={link} />
            <meta property="og:type" content="IChiba OnePlatform" />
          </Head>
          <Banner data={integrationData?.attributes?.banner} />
          <Benefits data={integrationData?.attributes?.benefits} />
          <Helps data={integrationData?.attributes?.listHelps} />
          <Advantages data={integrationData?.attributes?.advantages} />
          <WhyChoose data={integrationData?.attributes?.whyChoose} />
          <div className="tw-relative">
            <OurAPI data={integrationData?.attributes?.ourPartners} />
            <FAQs data={integrationData?.attributes?.faqs} />
            <ContactNow />
            <Image
              src={
                "https://cms-strapi.ichiba.net/uploads/Ellipse_518_78e22c2991.svg"
              }
              width={1920}
              height={762}
              alt="IChiba"
              className="tw-absolute tw-bottom-0 tw-left-0 -tw-z-1"
            />
          </div>
          <APower />
        </>
      ) : (
        <Custom404 />
      )}
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const locale = () => {
    switch (ctx?.locale) {
      case "en":
        return endpoints.integrationDetail;
      case "vi":
        return endpoints.integrationDetail;
    }
  };
  const qs = require("qs");
  const query = qs.stringify(
    {
      locale: ctx?.locale,
      filters: {
        slug: {
          $eq: ctx?.query?.integrationId,
        },
      },
    },
    {
      encodeValuesOnly: true, // prettify URL
    },
  );

  const { data } = await fetch(`${locale()}?${query}&&populate=deep`).then(
    (x) => x.json(),
  );

  return {
    props: {
      integrationId: ctx?.query?.integrationId,
      locale: ctx?.locale,
      data: data,
      resolvedUrl: ctx.resolvedUrl,
      ...(await serverSideTranslations(ctx?.locale as string)),
    },
  };
};
