import Head from "next/head";
import ThankYouComponent from "@/components/thank-you/page";
import { getDictionary } from "../../getDictionary";
import { Metadata, ResolvingMetadata } from "next";

type Props = {
  params: { lang: string };
};
export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const lang = await getDictionary(params.lang ? params.lang : "en");
  const link = `https://ichiba.net/${params.lang}/thank-you`;
  return {
    title: lang?.meta?.thankYou?.title,
    description: lang?.meta?.thankYou?.des,
    alternates: { canonical: link },
    openGraph: {
      type: "website",
      url: link,
      title: lang?.meta?.thankYou?.title,
      description: lang?.meta?.thankYou?.des,
      siteName: "ICHIBA",
      images: [
        {
          url: "https://cms-strapi.ichiba.net/uploads/Size_40_46722f9991.png",
        },
      ],
    },
  };
}
const ThankYouPage = async ({
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
      <Head>
        <title>Thank you</title>
        <meta name="description" content="Thank you" />
      </Head>
      <ThankYouComponent lang={lang} locale={params.lang} />
    </>
  );
}

export default ThankYouPage;