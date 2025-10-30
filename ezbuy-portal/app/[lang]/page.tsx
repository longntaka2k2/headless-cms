import Banner from "@/components/home/Banner";
import News from "@/components/home/News";
import OurPartner from "@/components/home/OurPartner";
import { getDictionary } from "../getDictionary";
import WorkWithEzBuy2 from "@/components/home/WorkWithEzBuy/WorkWithEzBuy2";
import Services3 from "@/components/home/Services3";
import { Metadata } from "next";

export async function generateMetadata({ params }: any): Promise<Metadata> {
  const lang = await getDictionary(params.lang);

  return {
    title: lang.meta.home.title,
    description: lang.meta.home.description,
  };
}

const Home = async ({ params }: any) => {
  const lang = await getDictionary(params.lang);
  return (
    <>
      <Banner lang={lang} />
      <WorkWithEzBuy2 lang={lang} />
      <Services3 lang={lang} params={params} />
      <OurPartner lang={lang} />
      <News params={params} lang={lang} />
    </>
  );
};

export default Home;
