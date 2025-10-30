import { getDictionary } from "@/app/getDictionary";
import OurPartner from "@/components/home/OurPartner";
import Banner from "@/components/services/Banner";
import Facilities from "@/components/services/Facilities";
import FulfillmentProcess from "@/components/services/FulfillmentProcess";
import Header from "@/components/services/Header";
import InventoryMangement from "@/components/services/InventoryManagement";
import Storage from "@/components/services/Storage";
import ValueAdded from "@/components/services/ValueAdded";
import WhyChooseEzBuy from "@/components/services/WhyChooseEzbuy";
import { PageProps } from "@/const/types";
import { Metadata, ResolvingMetadata } from "next";

export async function generateMetadata(
  { params }: PageProps,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  const lang = await getDictionary(params.lang);

  return {
    title: lang.meta.warehouseFulfillment.title,
    description: lang.meta.warehouseFulfillment.description,
  };
}

const WarehouseFulfilment = async ({ params }: any) => {
  const lang = await getDictionary(params.lang);
  const whyChooseEzBuyContent = [
    {
      title: lang.services?.warehouseFulfillment?.whyChooseEzbuy?.solutions[0],
      content:
        lang.services?.warehouseFulfillment?.whyChooseEzbuy
          ?.solutionContents[0],
      image: "/uploads/Rectangle_9_db64a2ae48.png",
    },
    {
      title: lang.services?.warehouseFulfillment?.whyChooseEzbuy?.solutions[1],
      content:
        lang.services?.warehouseFulfillment?.whyChooseEzbuy
          ?.solutionContents[1],
      image: "/uploads/Rectangle_10_193b8cf302.png",
    },
    {
      title: lang.services?.warehouseFulfillment?.whyChooseEzbuy?.solutions[2],
      content:
        lang.services?.warehouseFulfillment?.whyChooseEzbuy
          ?.solutionContents[2],
      image: "/uploads/Rectangle_11_9afef1cb3d.png",
    },
    {
      title: lang.services?.warehouseFulfillment?.whyChooseEzbuy?.solutions[3],
      content:
        lang.services?.warehouseFulfillment?.whyChooseEzbuy
          ?.solutionContents[3],
      image: "/uploads/Rectangle_19_d73db78577.png",
    },
    {
      title: lang.services?.warehouseFulfillment?.whyChooseEzbuy?.solutions[4],
      content:
        lang.services?.warehouseFulfillment?.whyChooseEzbuy
          ?.solutionContents[4],
      image: "/uploads/Rectangle_13_8522dc5cfc.png",
    },
    {
      title: lang.services?.warehouseFulfillment?.whyChooseEzbuy?.solutions[5],
      content:
        lang.services?.warehouseFulfillment?.whyChooseEzbuy
          ?.solutionContents[5],
      image: "/uploads/Rectangle_9_811048f891.png",
    },
  ];

  return (
    <>
      <Header
        Breadcrumb={[
          lang.services.header.homePage,
          lang.services.header.warehouseFulfillment,
        ]}
      />
      <Banner lang={lang} params={params} />
      <WhyChooseEzBuy
        lang={lang}
        contents={whyChooseEzBuyContent}
        heading={lang.services?.warehouseFulfillment?.whyChooseEzbuy?.heading}
        subHeading={
          lang.services?.warehouseFulfillment?.whyChooseEzbuy?.subHeading
        }
      />
      <FulfillmentProcess lang={lang} />
      <Storage lang={lang} />
      <InventoryMangement lang={lang} />
      <Facilities
        lang={lang?.services?.warehouseFulfillment?.facilities}
        imageUrl="https://strapi-ezbuy.ichiba.net/uploads/bg_Storage_af8c27856d.png"
      />
      <ValueAdded lang={lang} />
      <OurPartner lang={lang} />
    </>
  );
};
export default WarehouseFulfilment;
