import { getDictionary } from "@/app/getDictionary";
import Facilities from "@/components/services/Facilities";
import Header from "@/components/services/Header";
import WhyChooseEzBuy from "@/components/services/WhyChooseEzbuy";
import DownloadJanbox from "@/components/shared/DownloadJanbox";
import ShoppingSite from "@/components/xBorderEcom/ShoppingSite";
import Banner from "@/components/xBorderEcom/banner";
import Features from "@/components/xBorderEcom/features";
import ServiceFlow from "@/components/xBorderEcom/flow";
import ShippingNetwork from "@/components/xBorderEcom/shippingNetwork";
import { PageProps } from "@/const/types";
import { Metadata, ResolvingMetadata } from "next";

export async function generateMetadata(
  { params }: PageProps,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  const lang = await getDictionary(params.lang);

  return {
    title: lang.meta.xBorderEcommerce.title,
    description: lang.meta.xBorderEcommerce.description,
  };
}

const XBorderEcommerce = async ({ params }: any) => {
  const lang = await getDictionary(params.lang);
  const whyChooseUsContent = [
    {
      title: lang.services?.xBorderEcom?.whyChooseEzbuy?.solutions[0],
      content: lang.services?.xBorderEcom?.whyChooseEzbuy?.solutionContents[0],
      image: "/uploads/Rectangle_9_812365deef.png",
    },
    {
      title: lang.services?.xBorderEcom?.whyChooseEzbuy?.solutions[1],
      content: lang.services?.xBorderEcom?.whyChooseEzbuy?.solutionContents[1],
      image: "/uploads/Rectangle_10_4d9df2c94c.png",
    },
    {
      title: lang.services?.xBorderEcom?.whyChooseEzbuy?.solutions[2],
      content: lang.services?.xBorderEcom?.whyChooseEzbuy?.solutionContents[2],
      image: "/uploads/Rectangle_11_9fbb6e044e.png",
    },
    {
      title: lang.services?.xBorderEcom?.whyChooseEzbuy?.solutions[3],
      content: lang.services?.xBorderEcom?.whyChooseEzbuy?.solutionContents[3],
      image: "/uploads/Rectangle_12_70ec6f2a8b.png",
    },
    {
      title: lang.services?.xBorderEcom?.whyChooseEzbuy?.solutions[4],
      content: lang.services?.xBorderEcom?.whyChooseEzbuy?.solutionContents[4],
      image: "/uploads/Rectangle_13_e9f67e85f3.png",
    },
    {
      title: lang.services?.xBorderEcom?.whyChooseEzbuy?.solutions[5],
      content: lang.services?.xBorderEcom?.whyChooseEzbuy?.solutionContents[5],
      image: "/uploads/Rectangle_14_eb7a2488dd.png",
    },
    {
      title: lang.services?.xBorderEcom?.whyChooseEzbuy?.solutions[6],
      content: lang.services?.xBorderEcom?.whyChooseEzbuy?.solutionContents[6],
      image: "/uploads/Rectangle_15_ea3bf21a0e.png",
    },
    {
      title: lang.services?.xBorderEcom?.whyChooseEzbuy?.solutions[7],
      content: lang.services?.xBorderEcom?.whyChooseEzbuy?.solutionContents[7],
      image: "/uploads/Rectangle_17_e8237f0c4f.png",
    },
  ];
  return (
    <>
      <Header
        Breadcrumb={[
          lang.services?.header.homePage,
          lang.services?.header.xBorderEcommerce,
        ]}
      />
      <Banner lang={lang} locale={params.lang} />
      <WhyChooseEzBuy
        lang={lang}
        contents={whyChooseUsContent}
        heading={lang.services.xBorderEcom?.whyChooseEzbuy?.heading}
        subHeading={lang.services.xBorderEcom?.whyChooseEzbuy?.subHeading}
      />
      <Features lang={lang} />
      <ServiceFlow lang={lang} />
      <ShippingNetwork lang={lang} />
      <ShoppingSite lang={lang} />
      <DownloadJanbox lang={lang.downloadJanboxEcom} className="lg:mb-6" />
      <Facilities
        lang={lang.services?.xBorderEcom?.buyingFlow}
        videoId="66U3VKhLhGE"
        imageUrl="https://strapi-ezbuy.ichiba.net/uploads/IMG_1174_1225a71473.JPG"
      />
    </>
  );
};
export default XBorderEcommerce;
