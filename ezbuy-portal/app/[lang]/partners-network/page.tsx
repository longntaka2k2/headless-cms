import { getDictionary } from "@/app/getDictionary";
import Networks from "@/components/partnerNetwork/Networks";
import Official from "@/components/partnerNetwork/Official";
import Partner from "@/components/partnerNetwork/Partners";
import Header from "@/components/services/Header"
import WareHouse from "@/components/partnerNetwork/Warehouse";
import Tech from "@/components/partnerNetwork/Technology";
import { Metadata, ResolvingMetadata } from "next";
import { PageProps } from "@/const/types";

export async function generateMetadata(
  { params }: PageProps,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  const lang = await getDictionary(params.lang);

  return {
    title: lang?.header.partnerNetwork,
  };
}
const PartnerNetwork = async ({ params }: any) => {
  const lang = await getDictionary(params.lang);
  
  return(
    <>
    <Header
        Breadcrumb={[
          lang.services?.header.homePage,
          lang.partnerNetwork?.title,
        ]}
      />
      <Partner lang={lang.partnerNetwork} />
      <Official lang={lang.partnerNetwork} local={params.lang} />
      <Networks lang={lang.partnerNetwork.networks} />
      <WareHouse lang={lang.partnerNetwork.networks} />
      <Tech lang={lang.partnerNetwork.tech}/>
    </>
  )
}
export default PartnerNetwork
