import { getDictionary } from "@/app/getDictionary";
import B2bTradingView from "@/components/b2bTrading";
import { PageProps } from "@/const/types";
import { Metadata, ResolvingMetadata } from "next";
import React from "react";

export async function generateMetadata(
  { params }: PageProps,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  const lang = await getDictionary(params.lang);

  return {
    title: lang.meta.b2b.title,
    description: lang.meta.b2b.description,
  };
}

const B2bTrading = async (props: { params: { lang: string } }) => {
  const lang = await getDictionary(props.params.lang);
  return <B2bTradingView lang={lang} />;
};

export default B2bTrading;
