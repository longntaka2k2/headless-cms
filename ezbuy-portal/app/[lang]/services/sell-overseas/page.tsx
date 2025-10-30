import { getDictionary } from "@/app/getDictionary";
import { PageProps } from "@/const/types";
import { ResolvingMetadata, Metadata } from "next";
import { Suspense } from "react"
import Header from "@/components/services/Header";
import GoGlobal from "@/components/sellOverseas/GoGlobal";
import WhyJapan from "@/components/sellOverseas/WhyJapan";
import Challenges from "@/components/sellOverseas/Challenges";
import HowWe from "@/components/sellOverseas/HowWe";
import OurOperator from "@/components/sellOverseas/OurOperator";
import OurTotal from "@/components/sellOverseas/OurTotal";
import WhyChooseUs from "@/components/sellOverseas/WhyChooseUs";
import WhyDo from "@/components/sellOverseas/WhyDo";
import UsageFee from "@/components/sellOverseas/UsageFee";


export async function generateMetadata(
  { params }: PageProps,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // const lang = await getDictionary(params.lang ? params.lang : "en");
  const link = `https://ezbuy.jp/${params.lang}` as string;
  const lang = await getDictionary(params.lang);

  return {
    title: lang?.meta?.sio?.title,
    description: lang?.meta?.sio?.description,
    alternates: { canonical: link },
  };
}
const SellOverseas = async ({
  params,
}: {
  params: {
    lang: string;
    slug: string;
  };
}) => { 
  const lang = await getDictionary(params.lang ? params.lang : "en");

  return(
    <Suspense fallback={<div></div>}>
      <Header
        Breadcrumb={[
          lang?.services?.header.homePage,
          lang?.services?.header.sellOverseas,
        ]}
      />
      <GoGlobal lang={lang?.services?.sellOverseas?.goglobal} />
      <WhyJapan lang={lang?.services?.sellOverseas?.whyJapan} />
      <Challenges lang={lang?.services?.sellOverseas?.challenges} />
      <HowWe lang={lang?.services?.sellOverseas} />
      <OurOperator lang={lang?.services?.sellOverseas?.operation} />
      <OurTotal lang={lang?.services?.sellOverseas?.ourTotal} />
      <WhyChooseUs lang={lang?.services?.sellOverseas?.whyChoose} />
      <WhyDo lang={lang?.services?.sellOverseas?.whydo} />
      <UsageFee  lang={lang?.services?.sellOverseas?.usage}/>
    </Suspense> 
  )
}

export default SellOverseas