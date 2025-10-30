import { getDictionary } from "@/app/getDictionary";
import B2BWarehouseCPN from "@/components/b2b-warehouse-fulfillment/page";
import { ResolvingMetadata, Metadata } from "next";

type Props = {
  params: { lang: string };
};
export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const lang = await getDictionary(params.lang ? params.lang : "en");
  const link = `https://efex.vn/${params.lang}/b2b-warehouse-fulfillment`;
  return {
    title: lang?.meta?.b2bWarehouse?.title,
    description: lang?.meta?.b2bWarehouse?.des,
    alternates: { canonical: link },
    openGraph: {
      type: "website",
      url: link,
      title: lang?.meta?.b2bWarehouse?.title,
      description: lang?.meta?.b2bWarehouse?.des,
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
      title: lang?.meta?.b2bWarehouse?.title,
      description: lang?.meta?.b2bWarehouse?.des,
    },
  };
}

const B2BWarehousePage = async ({
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
      <B2BWarehouseCPN lang={lang} params={params.lang} />
    </>
  );
};
export default B2BWarehousePage;
