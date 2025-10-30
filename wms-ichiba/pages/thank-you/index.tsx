import { GetServerSideProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import Head from "next/head";
import ThankYouComponent from "@/components/thank-you";
export default function SupportPortal() {
  const { t } = useTranslation("common");

  return (
    <>
      <Head>
        <title>Cảm ơn</title>
        <meta name="description" content="Cảm ơn" />
      </Head>
      <ThankYouComponent />
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
