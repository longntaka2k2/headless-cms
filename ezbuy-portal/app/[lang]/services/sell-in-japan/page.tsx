import { getDictionary } from "@/app/getDictionary";
import Banner from "@/components/sellInJapan/Banner";
import HowTo from "@/components/sellInJapan/HowTo";
import SellingAccount from "@/components/sellInJapan/SellingAccount";
import SellingPartner from "@/components/sellInJapan/SellingPartner";
import ShippingPartner from "@/components/sellInJapan/ShippingPartner";
import WarehouseFullfilment from "@/components/sellInJapan/WarehouseFulfillment";
import Header from "@/components/services/Header";
import { PageProps } from "@/const/types";
import { Metadata, ResolvingMetadata } from "next";

export async function generateMetadata(
  { params }: PageProps,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  const lang = await getDictionary(params.lang);

  return {
    title: lang.meta.sellInJapan.title,
    description: lang.meta.sellInJapan.description,
  };
}
const SellInJapan = async ({ params }: any) => {
  const lang = await getDictionary(params.lang);

  return (
    <>
      <Header
        Breadcrumb={[
          lang?.services?.header.homePage,
          lang?.services?.header.sellInJapan,
        ]}
      />
      <Banner lang={lang} locale={params.lang} />
      <SellingAccount lang={lang} />
      <WarehouseFullfilment lang={lang} />
      <HowTo lang={lang} params={params} />
      <ShippingPartner lang={lang} />
      <SellingPartner lang={lang} />
    </>
  );
};
export default SellInJapan;
