import { getDictionary } from "@/app/getDictionary";
import Banner from "@/components/dropshipping/Banner";
import Benefits from "@/components/dropshipping/Benefits";
import CrossBorder from "@/components/dropshipping/CrossBorder";
import Customized from "@/components/dropshipping/Customized";
import Process from "@/components/dropshipping/Process";
import SimpleSteps from "@/components/dropshipping/SimpleSteps";
import WhyChooseUs from "@/components/dropshipping/WhyChooseUs";
import OurPartner from "@/components/home/OurPartner";
import Header from "@/components/services/Header";
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
    title: lang.meta?.dropshipping?.title,
    description: lang.meta?.dropshipping?.description,
  };
}
const Dropshipping = async ({ params }: any) => {
  const lang = await getDictionary(params.lang);

  return (
    <>
      <Header
        Breadcrumb={[
          lang?.services?.header.homePage,
          lang?.services?.header.dropshipping,
        ]}
      />
      <Banner lang={lang} params={params} />
      <Benefits lang={lang} />
      <Process lang={lang} />
      <WhyChooseUs lang={lang} />
      <Customized lang={lang} />
      <CrossBorder lang={lang} />
      <OurPartner lang={lang} />
      <ShippingNetwork lang={lang} />
      <SimpleSteps lang={lang} />
    </>
  );
};
export default Dropshipping;
