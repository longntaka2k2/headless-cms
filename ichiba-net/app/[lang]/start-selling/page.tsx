import { getDictionary } from "@/app/getDictionary";
import StartSelling from "@/components/start-selling/page";
import { Metadata, ResolvingMetadata } from "next";

type Props = {
  params: { lang: string };
};
export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const lang = await getDictionary(params.lang ? params.lang : "en");
  const link = `https://ichiba.net/${params.lang}/start-selling`;
  return {
    title: lang?.meta?.startSelling?.title,
    description: lang?.meta?.startSelling?.des,
    alternates: { canonical: link },
    openGraph: {
      type: "website",
      url: link,
      title: lang?.meta?.startSelling?.title,
      description: lang?.meta?.startSelling?.des,
      siteName: "ICHIBA",
      images: [
        {
          url: "https://cms-strapi.ichiba.net/uploads/Size_40_46722f9991.png",
        },
      ],
    },
  };
}

const ContactSales = async ({
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
      <StartSelling
        lang={lang}
      />
    </>
  );
};
export default ContactSales;
