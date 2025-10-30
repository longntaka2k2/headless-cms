import { GetServerSideProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useTranslation } from "next-i18next";

export default function Topic() {
  const {t} = useTranslation("common");
  const router = useRouter()
  function backHome() {
    setTimeout(function() {
      router.push('/case-studies')
    }, 100); 
  }
  useEffect(() => {
    backHome();
  }, []);
  return(
    <div>

    </div>
  )
}
export const getServerSideProps: GetServerSideProps = async (ctx) => {
  return {
    props: {
      ...(await serverSideTranslations(ctx?.locale as string)),
    },
  };
};