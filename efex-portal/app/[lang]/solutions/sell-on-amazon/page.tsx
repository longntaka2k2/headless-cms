import { Suspense } from "react";
import { getDictionary } from "@/app/getDictionary";
import dynamic from "next/dynamic";
import { Metadata, ResolvingMetadata } from "next";

const Management = dynamic(
  () => import("@/components/solutions/sell-on-amazon/Management")
);
const VietNameseProducts = dynamic(
  () => import("@/components/solutions/sell-on-amazon/VietNameseProducts")
);
const SolutionsOfEfex = dynamic(
  () => import("@/components/solutions/sell-on-amazon/solutions-of-efex")
);
const Delivers = dynamic(
  () => import("@/components/solutions/sell-on-amazon/Delivers")
);
const WhyChoose = dynamic(
  () => import("@/components/solutions/sell-on-amazon/WhyChoose")
);
const Step = dynamic(
  () => import("@/components/solutions/sell-on-amazon/Step")
);
const OurCommitment = dynamic(
  () => import("@/components/solutions/sell-on-amazon/our-commitment")
);
const Trusted = dynamic(
  () => import("@/components/solutions/sell-on-amazon/Trusted")
);
const Contact = dynamic(
  () => import("@/components/solutions/sell-on-amazon/Contact")
);
const FromVietNam = dynamic(() => import("@/components/commons/FromVietNam"));

type Props = {
  params: { lang: string };
};

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const lang = await getDictionary(params.lang ? params.lang : "en");
  const link =
    `https://efex.vn/${params.lang}/solutions/sell-in-vietnam` as string;
  return {
    title: lang?.meta?.sellOnAmazon?.title,
    description: lang?.meta?.sellOnAmazon?.des,
    alternates: { canonical: link },
    robots: "index, follow",
    openGraph: {
      type: "website",
      url: link,
      title: lang?.meta?.sellOnAmazon?.title,
      description: lang?.meta?.sellOnAmazon?.des,
      siteName: "EFEX",
      images: [
        {
          url: "https://strapi-efex.ichiba.net/uploads/image_835_34764390d8.png",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      site: "@EfexVietnam",
      creator: "@EfexVietnam",
      images: "https://strapi-efex.ichiba.net/uploads/image_835_34764390d8.png",
      title: lang?.meta?.sellOnAmazon?.title,
      description: lang?.meta?.sellOnAmazon?.des,
    },
  };
}

const Start = async ({
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
      <Management lang={lang.sellOnAmazon.management} locale={params.lang} />
      <VietNameseProducts
        lang={lang.sellOnAmazon.vietNameseProducts}
        locale={params.lang}
      />
      <SolutionsOfEfex
        lang={lang.sellOnAmazon.solutionsOfEfex}
        locale={params.lang}
      />
      <Delivers lang={lang.sellOnAmazon.delivers} locale={params.lang} />
      <WhyChoose lang={lang.sellOnAmazon.whyChoose} />
      <div className="bg-[url('https://strapi-efex.ichiba.net/uploads/Group_1171276386_86217ba728.svg')] bg-cover bg-no-repeat">
        <Step lang={lang.sellOnAmazon.step} locale={params.lang} />
        <OurCommitment
          lang={lang.sellOnAmazon.ourCommitment}
          locale={params.lang}
        />
      </div>
      <div className="bg-[linear-gradient(180deg,_#F2F2F2_67.19%,_#FFF_100%)]">
        <Trusted lang={lang.sellOnAmazon.trusted} locale={params.lang} />
        <Contact lang={lang.sellOnAmazon.contact} locale={params.lang}/>
      </div>
      <FromVietNam lang={lang} />
    </Suspense>
  );
};

export default Start;
