import { Suspense } from "react";
import dynamic from "next/dynamic";
import { getDictionary } from "../../getDictionary";
import { Metadata, ResolvingMetadata } from "next";
import { Button } from "@ichiba/ichiba-core-ui";
import ContactSaleComponent from "@/components/contact-sales/page";

type Props = {
  params: { lang: string };
};
export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const lang = await getDictionary(params.lang ? params.lang : "en");
  const link = `https://ichiba.net/${params.lang}/contact-sales`;
  return {
    title: lang?.meta?.contactSale?.title,
    description: lang?.meta?.contactSale?.des,
    alternates: { canonical: link },
    openGraph: {
      type: "website",
      url: link,
      title: lang?.meta?.contactSale?.title,
      description: lang?.meta?.contactSale?.des,
      siteName: "ICHIBA",
      images: [
        {
          url: "https://cms-strapi.ichiba.net/uploads/Size_40_46722f9991.png",
        },
      ],
    },
  };
}

const Reviews = async ({
  params,
}: {
  params: {
    lang: string;
    slug: string;
  };
}) => {
  const lang = await getDictionary(params.lang ? params.lang : "en");

  return (
    <Suspense fallback={<div></div>}>
      <ContactSaleComponent lang={lang} />
    </Suspense>
  );
};

export default Reviews;
