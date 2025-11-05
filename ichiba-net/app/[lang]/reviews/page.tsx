import { Suspense } from "react";
import { getDictionary } from "../../getDictionary";
import ReviewsComponent from "@/components/reviews/page";
import { Metadata, ResolvingMetadata } from "next";

type Props = {
  params: { lang: string };
};
export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const lang = await getDictionary(params.lang ? params.lang : "en");
  const link = `https://ichiba.net/${params.lang}/reviews`;
  return {
    title: lang?.meta?.reviews?.title,
    description: lang?.meta?.reviews?.des,
    alternates: { canonical: link },
    openGraph: {
      type: "website",
      url: link,
      title: lang?.meta?.reviews?.title,
      description: lang?.meta?.reviews?.des,
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
      <ReviewsComponent lang={lang} locale={params.lang} />
    </Suspense>
  );
};

export default Reviews;
