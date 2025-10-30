import { GetServerSideProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import React from "react";
import PriceListCommerceLayer from "@/components/pricing-table/commerce-layer";
export default function Features() {
  return (
    <React.Fragment>
      <PriceListCommerceLayer />
    </React.Fragment>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  return {
    props: {
      ...(await serverSideTranslations(ctx?.locale as string)),
    },
  };
};
