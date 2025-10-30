import { getDictionary } from "@/app/getDictionary";
import Header from "@/components/services/Header";
import WhyChooseEzBuy from "@/components/services/WhyChooseEzbuy";
import DownloadEzbuy from "@/components/shared/DownloadEzbuy";
import DownloadJanbox from "@/components/shared/DownloadJanbox";
import ShippingNetwork from "@/components/xBorderEcom/shippingNetwork";
import Banner from "@/components/xBorderShip/banner";
import CreateAShipment from "@/components/xBorderShip/createAShipment";
import GlobalShipping from "@/components/xBorderShip/globalShipping";
import NewUser from "@/components/xBorderShip/newUser";
import ValueAdded from "@/components/xBorderShip/valueAdded";
import { PageProps } from "@/const/types";
import { Metadata, ResolvingMetadata } from "next";

export async function generateMetadata(
  { params }: PageProps,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  const lang = await getDictionary(params.lang);

  return {
    title: lang.meta?.xBorderShipping.title,
    description: lang.meta.xBorderShipping.description,
  };
}
const XBorderShipping = async ({ params }: any) => {
  const lang = await getDictionary(params.lang);
  const whyChooseUsContent = [
    {
      title: lang.services?.xBorderShip?.whyChooseEzbuy?.solutions[0],
      content: lang.services?.xBorderShip?.whyChooseEzbuy?.solutionContents[0],
      image: "/uploads/Rectangle_9_dca4dfa5a5.png",
    },
    {
      title: lang.services?.xBorderShip?.whyChooseEzbuy?.solutions[1],
      content: lang.services?.xBorderShip?.whyChooseEzbuy?.solutionContents[1],
      image: "/uploads/Rectangle_10_f7ecad2afd.png",
    },
    {
      title: lang.services?.xBorderShip?.whyChooseEzbuy?.solutions[2],
      content: lang.services?.xBorderShip?.whyChooseEzbuy?.solutionContents[2],
      image: "/uploads/Rectangle_11_abf7e25868.png",
    },
    {
      title: lang.services?.xBorderShip?.whyChooseEzbuy?.solutions[3],
      content: lang.services?.xBorderShip?.whyChooseEzbuy?.solutionContents[3],
      image: "/uploads/Rectangle_19_37684d22ee.png",
    },
    {
      title: lang.services?.xBorderShip?.whyChooseEzbuy?.solutions[4],
      content: lang.services?.xBorderShip?.whyChooseEzbuy?.solutionContents[4],
      image: "/uploads/Rectangle_20_9f5fc0478a.png",
    },
    {
      title: lang.services?.xBorderShip?.whyChooseEzbuy?.solutions[5],
      content: lang.services?.xBorderShip?.whyChooseEzbuy?.solutionContents[5],
      image: "/uploads/Rectangle_21_6530001c0a.png",
    },
    {
      title: lang.services?.xBorderShip?.whyChooseEzbuy?.solutions[6],
      content: lang.services?.xBorderShip?.whyChooseEzbuy?.solutionContents[6],
      image: "/uploads/Rectangle_17_c29b19d305.png",
    },
    {
      title: lang.services?.xBorderShip?.whyChooseEzbuy?.solutions[7],
      content: lang.services?.xBorderShip?.whyChooseEzbuy?.solutionContents[7],
      image: "/uploads/Rectangle_12_33a873b427.png",
    },
    {
      title: lang.services?.xBorderShip?.whyChooseEzbuy?.solutions[8],
      content: lang.services?.xBorderShip?.whyChooseEzbuy?.solutionContents[8],
      image: "/uploads/Rectangle_21_9b2471d413.png",
    },
  ];

  return (
    <>
      <Header
        Breadcrumb={[
          lang?.services?.header.homePage,
          lang?.services?.header.xBorderShipping,
        ]}
      />
      <Banner lang={lang} locale={params.lang} />
      <WhyChooseEzBuy
        lang={lang}
        contents={whyChooseUsContent}
        heading={lang.services?.xBorderShip?.whyChooseEzbuy?.heading}
        subHeading={lang.services?.xBorderShip?.whyChooseEzbuy?.subHeading}
      />
      <GlobalShipping lang={lang} />
      <ShippingNetwork lang={lang} />
      <ValueAdded lang={lang} />
      <NewUser lang={lang} />
      <CreateAShipment lang={lang} />
      <DownloadEzbuy lang={lang.downloadJanboxShip} />
    </>
  );
};
export default XBorderShipping;
