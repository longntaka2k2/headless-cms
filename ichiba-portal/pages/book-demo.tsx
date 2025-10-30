import { GetServerSideProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Script from "next/script";
import BookDemo from "@/components/book-demo";
import Head from "next/head";
import { useTranslation } from "react-i18next";

export default function Bookdemo() {
  const { t } = useTranslation("common");
  return (
    <>
      <Head>
        <meta
          name="description"
          content={t("metaDescription.bookDemo") || ""}
        />
      </Head>
      <BookDemo />
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
