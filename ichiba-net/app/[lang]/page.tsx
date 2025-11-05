import { Suspense } from "react";
import { getDictionary } from "../getDictionary";
import Homepage from "@/components/homepage/page";
import { Metadata, ResolvingMetadata } from "next";

type Props = {
  params: { lang: string };
};
export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const lang = await getDictionary(params.lang ? params.lang : "en");
  const link = `https://ichiba.net/${params.lang}`;
  return {
    title: lang?.meta?.homepage?.title,
    description: lang?.meta?.homepage?.des,
    alternates: { canonical: link },
    openGraph: {
      type: "website",
      url: link,
      title: lang?.meta?.homepage?.title,
      description: lang?.meta?.homepage?.des,
      siteName: "ICHIBA",
      images: [
        {
          url: "https://cms-strapi.ichiba.net/uploads/Size_40_46722f9991.png",
        },
      ],
    },
  };
}

const Home = async ({
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
      <Homepage lang={lang} locale={params.lang} />
    </Suspense>
  );
};

export default Home;