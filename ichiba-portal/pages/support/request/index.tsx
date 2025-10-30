import { GetServerSideProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export default function SupportRequest() {
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

