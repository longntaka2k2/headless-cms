import { Suspense } from "react";
import { getDictionary } from "../../getDictionary";
import BecomeASupplierCPN from "@/components/become-a-supplier/page"
import { Metadata, ResolvingMetadata } from "next";

type Props = {
  params: { lang: string };
};
export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const lang = await getDictionary(params.lang ? params.lang : "en");
  const link = `https://ichiba.net/${params.lang}/become-a-supplier`;
  return {
    title: lang?.meta?.becomeASupplier?.title,
    description: lang?.meta?.becomeASupplier?.des,
    alternates: { canonical: link },
    openGraph: {
      type: "website",
      url: link,
      title: lang?.meta?.becomeASupplier?.title,
      description: lang?.meta?.becomeASupplier?.des,
      siteName: "ICHIBA",
      images: [
        {
          url: "https://cms-strapi.ichiba.net/uploads/Size_40_46722f9991.png",
        },
      ],
    },
  };
}

const BecomeASupplier = async ({
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
      <BecomeASupplierCPN lang={lang} />
    </Suspense>
  );
};

export default BecomeASupplier;
