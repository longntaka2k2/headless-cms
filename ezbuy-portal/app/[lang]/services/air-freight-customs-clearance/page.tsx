import { getDictionary } from "@/app/getDictionary";
import Header from "@/components/services/Header";
import Discovery from "@/components/services/airFreight/Discovery";
import Banner from "@/components/services/airFreight/Banner";
import WhyChoose from "@/components/services/airFreight/WhyChoose";
import Value from "@/components/services/airFreight/Value";
import CustomsClearance from "@/components/services/airFreight/CustomerClearance";
import WhyChooseCustom from "@/components/services/airFreight/WhyChooseCustoms";
import WhyChooseEzBuy from "@/components/services/WhyChooseEzbuy";
import { Metadata, ResolvingMetadata } from "next";
import { PageProps } from "@/const/types";

export async function generateMetadata(
  { params }: PageProps,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  const lang = await getDictionary(params.lang);

  return {
    title: lang.meta?.airFreight.title,
    description: lang.meta.airFreight.description,
  };
}

const AirFreightCustomsClearance = async ({ params }: any) => {
  const lang = await getDictionary(params.lang);
  const whyChooseUsContent = [
    {
      title: lang.services?.airFreight?.whyChooseCustoms?.solutions[0],
      content: lang.services?.airFreight?.whyChooseCustoms?.solutionContents[0],
      image: "/uploads/Rectangle_9_812365deef.png",
    },
    {
      title: lang.services?.airFreight?.whyChooseCustoms?.solutions[1],
      content: lang.services?.airFreight?.whyChooseCustoms?.solutionContents[1],
      image: "/uploads/Rectangle_10_4d9df2c94c.png",
    },
    {
      title: lang.services?.airFreight?.whyChooseCustoms?.solutions[2],
      content: lang.services?.airFreight?.whyChooseCustoms?.solutionContents[2],
      image: "/uploads/Rectangle_11_9fbb6e044e.png",
    },
    {
      title: lang.services?.airFreight?.whyChooseCustoms?.solutions[3],
      content: lang.services?.airFreight?.whyChooseCustoms?.solutionContents[3],
      image: "/uploads/Rectangle_12_70ec6f2a8b.png",
    },
    {
      title: lang.services?.airFreight?.whyChooseCustoms?.solutions[4],
      content: lang.services?.airFreight?.whyChooseCustoms?.solutionContents[4],
      image: "/uploads/Rectangle_13_e9f67e85f3.png",
    },
  ];
  return (
    <>
      <Header
        Breadcrumb={[
          lang.services?.header.homePage,
          lang.services?.header.airFreight,
        ]}
      />
      <Banner lang={lang} locale={params.lang} />
      <WhyChoose lang={lang} />
      <Value lang={lang} />
      <CustomsClearance
        lang={lang.services?.airFreight?.custom}
        videoId="66U3VKhLhGE"
        imageUrl="https://strapi-ezbuy.ichiba.net/uploads/IMG_1174_1225a71473.JPG"
      />
      <WhyChooseCustom
        lang={lang}
        contents={whyChooseUsContent}
        heading={lang.services.airFreight.whyChooseCustoms.heading}
        subHeading={lang.services?.airFreight?.whyChooseCustoms?.subHeading}
      />
      <Discovery lang={lang} params={params} />
    </>
  );
};

export default AirFreightCustomsClearance;
