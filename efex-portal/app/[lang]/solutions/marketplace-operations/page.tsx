import { Suspense } from "react";
import { getDictionary } from "@/app/getDictionary";
import dynamic from "next/dynamic";
import { Metadata, ResolvingMetadata } from "next";

const Banner = dynamic(
  () => import("@/components/solutions/marketplace-operations/Banner")
);
const VietNameseProducts = dynamic(
  () =>
    import("@/components/solutions/marketplace-operations/VietNameseProducts")
);
const GotYouCovered = dynamic(
  () => import("@/components/solutions/marketplace-operations/GotYouCovered")
);
const EndToEnd = dynamic(
  () => import("@/components/solutions/marketplace-operations/end-to-end")
);
const Opportunity = dynamic(
  () => import("@/components/solutions/marketplace-operations/Opportunity")
);
const WeChoose = dynamic(
  () => import("@/components/solutions/marketplace-operations/WeChoose")
);
const FourStep = dynamic(
  () => import("@/components/solutions/marketplace-operations/FourStep")
);
const ChooseTheMarketplace = dynamic(
  () =>
    import("@/components/solutions/marketplace-operations/ChooseTheMarketplace")
);
const GlobalSuccessfully = dynamic(
  () =>
    import("@/components/solutions/marketplace-operations/global-successfully")
);
const ContactSales = dynamic(
  () => import("@/components/solutions/marketplace-operations/ContactSales")
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
    `https://efex.vn/${params.lang}/solutions/marketplace-operations` as string;
  return {
    title: lang?.meta?.marketplaceOperations?.title,
    description: lang?.meta?.marketplaceOperations?.des,
    alternates: { canonical: link },
    robots: "index, follow",
    openGraph: {
      type: "website",
      url: link,
      title: lang?.meta?.marketplaceOperations?.title,
      description: lang?.meta?.marketplaceOperations?.des,
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
      title: lang?.meta?.marketplaceOperations?.title,
      description: lang?.meta?.marketplaceOperations?.des,
    },
  };
}

const MarketplaceOperations = async ({
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
      <Banner lang={lang.marketplaceOperations.banner} locale={params.lang} />
      <VietNameseProducts
        lang={lang.marketplaceOperations.vietNameseProducts}
        locale={params.lang}
      />
      <GotYouCovered lang={lang.marketplaceOperations.gotYouCovered} />
      <EndToEnd lang={lang.marketplaceOperations.endToEnd} params={params} />
      <Opportunity
        lang={lang.marketplaceOperations.opportunity}
        locale={params.lang}
      />
      <WeChoose lang={lang.marketplaceOperations.weChoose} />
      <FourStep lang={lang.marketplaceOperations.fourStep} />
      <ChooseTheMarketplace
        lang={lang.marketplaceOperations.chooseTheMarketplace}
        locale={params.lang}
      />
      <GlobalSuccessfully
        lang={lang.marketplaceOperations.globalSuccessfully}
        locale={params.lang}
      />
      <ContactSales
        lang={lang.marketplaceOperations.contactSales}
        locale={params.lang}
      />
      <FromVietNam lang={lang} />
    </Suspense>
  );
};

export default MarketplaceOperations;
