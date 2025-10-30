import Head from "next/head";
import { getDictionary } from "@/app/getDictionary";
import { Metadata, ResolvingMetadata } from "next";
import CaseStudie from "@/components/CaseStudie/page";

interface Props {
  params: { lang: string };
  searchParams?: { [key: string]: string | string[] | undefined };
}

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const lang = await getDictionary(params.lang ?? "en");
  const link = `https://efex.vn/${params.lang}/customer-success-studies`;
  return {
    title: lang?.meta?.caseStudies?.title,
    description: lang?.meta?.caseStudies?.des,
    alternates: { canonical: link },
    robots: "index, follow",
    openGraph: {
      type: "website",
      url: link,
      title: lang?.meta?.caseStudies?.title,
      description: lang?.meta?.caseStudies?.des,
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
      title: lang?.meta?.caseStudies?.title,
      description: lang?.meta?.caseStudies?.des,
    },
  };
}

const CaseStudies = async ({
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
      <CaseStudie lang={lang} locale={params.lang} />
    </>
  );
};

export default CaseStudies;
