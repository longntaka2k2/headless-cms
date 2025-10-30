import { getDictionary } from "@/app/getDictionary";
import EFEXFulfillmentCPN from "@/components/efex-fulfillment/page";
import ThankYouCPN from "@/components/efex-fulfillment/thanh-you/page";

import { ResolvingMetadata, Metadata } from "next";

type Props = {
  params: { lang: string };
};
export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const lang = await getDictionary(params.lang ? params.lang : "en");
  const link = `https://fulfillment.efex.vn/thank-you`;
  return {
    title: lang?.meta?.thankYou?.title,
    description: lang?.meta?.thankYou?.des,
    alternates: { canonical: link },
    openGraph: {
      type: "website",
      url: link,
      title: lang?.meta?.thankYou?.title,
      description: lang?.meta?.thankYou?.des,
      siteName: "EFEX",
      images: [
        {
          url: "https://strapi-efex.ichiba.net/uploads/image_835_1_40836254e9.png",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      site: "@EfexVietnam",
      creator: "@EfexVietnam",
      images:
        "https://strapi-efex.ichiba.net/uploads/image_835_1_40836254e9.png",
      title: lang?.meta?.thankYou?.title,
      description: lang?.meta?.thankYou?.des,
    },
  };
}

const ThankYouEFEXFulfillment = async ({
  params,
}: {
  params: {
    lang: string;
    slug: string;
  };
}) => {
  const lang = await getDictionary(params.lang ? params.lang : "en");
  return (
    <>
      <ThankYouCPN lang={lang} params={params.lang} />
    </>
  );
};
export default ThankYouEFEXFulfillment;
