import { GetServerSideProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export default function Events() {
  return(
    <>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  return {
      props: {
          ...(await serverSideTranslations(ctx?.locale as string)),
      },
  };
};

