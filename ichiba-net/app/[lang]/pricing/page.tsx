import { Suspense } from "react";
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
  const link = `https://ichiba.net/${params.lang}/pricing`;
  return {
    title: lang?.meta?.pricing?.title,
    description: lang?.meta?.pricing?.des,
    alternates: { canonical: link },
    openGraph: {
      type: "website",
      url: link,
      title: lang?.meta?.pricing?.title,
      description: lang?.meta?.pricing?.des,
      siteName: "ICHIBA",
      images: [
        {
          url: "https://cms-strapi.ichiba.net/uploads/Size_40_46722f9991.png",
        },
      ],
    },
  };
}
const Pricing = async ({
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
      <div className="w-full h-[500px] flex items-center justify-center">
        <h1 className="text-center my-auto">
          Comming soon
        </h1>
      </div>
    </Suspense>
  );
};

export default Pricing;
