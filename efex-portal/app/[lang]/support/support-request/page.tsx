import SupportComponent from "@/components/supportRequest/Support";
import { getDictionary } from "@/app/getDictionary";
import { Metadata, ResolvingMetadata } from "next";

type Props = {
  params: { lang: string };
};

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const lang = await getDictionary(params.lang ? params.lang : "vi");
  const link = `https://efex.vn/${params.lang}/support/support-request` as string;
  return {
    title: lang?.meta?.support?.title,
    description: lang?.meta?.support?.des,
    alternates: { canonical: link },
    robots: "index, follow",
    openGraph: {
      type: "website",
      url: link,
      title: lang?.meta?.support?.title,
      description: lang?.meta?.support?.des,
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
      title: lang?.meta?.support?.title,
      description: lang?.meta?.support?.des,
    },
  };
}

const SupportRequest = async ({
  params,
}: {
  params: {
    lang: string;
    slug: string;
  };
}) => {
  const lang = await getDictionary(params.lang ? params.lang : "en");
  return <SupportComponent lang={lang} params={params.lang} />;
};
export default SupportRequest;
