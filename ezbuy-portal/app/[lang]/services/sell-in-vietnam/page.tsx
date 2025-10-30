import { Suspense } from "react";
import { getDictionary } from "@/app/getDictionary";
import { Metadata, ResolvingMetadata } from "next";
import Banner from "@/components/sellInVietNam/Banner";
import New from "@/components/sellInVietNam/ANew";
import ECom from "@/components/sellInVietNam/ECom";
import CountLess from "@/components/sellInVietNam/CountLess";
import WhatWeDo from "@/components/sellInVietNam/WhatWeDo";
import Integration from "@/components/sellInVietNam/Integration";
import Resource from "@/components/sellInVietNam/Resource";
import Quote from "@/components/sellInVietNam/Quote";
import Header from "@/components/services/Header";
import { PageProps } from "@/const/types";
import TrustBy from "@/components/sellInVietNam/TrustBy";
import WhyExpand from "@/components/sellInVietNam/WhyExpand";
import Challenges from "@/components/sellInVietNam/Challenges";
import WhatDoes from "@/components/sellInVietNam/WhatDoes";
import OurWarehouse from "@/components/sellInVietNam/OurWarehouse";

export async function generateMetadata(
  { params }: PageProps,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // const lang = await getDictionary(params.lang ? params.lang : "en");
  const link = `https://ezbuy.jp/${params.lang}` as string;
  const lang = await getDictionary(params.lang);

  return {
    title: lang.meta.sellInVietNam.title,
    description: lang.meta.sellInVietNam.description,
    alternates: { canonical: link },
  };
}

const Start = async ({
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
      <Header
        Breadcrumb={[
          lang?.services?.header?.homePage,
          lang?.services?.header?.siv,
        ]}
      />
      <Banner
        lang={{ ...lang.services.siv.banner, ...lang.common }}
        locale={params.lang}
      />
      <TrustBy lang={{ ...lang.services.siv.trustBy }} locale={params.lang} />
      <New lang={lang.services.siv.aNew} locale={params.lang} />
      <WhyExpand lang={lang.services.siv.whyExpand} locale={params.lang} />
      <Challenges lang={lang.services.siv.challenges} locale={params.lang} />
      <WhatDoes lang={lang.services.siv.whatDoes} locale={params.lang} />
      <Integration lang={lang.services.siv.integration} />
      <OurWarehouse lang={lang.services.siv.ourWarehouse} />
      <Quote lang={lang.services.siv.quote} locale={params.lang} />
    </Suspense>
  );
};

export default Start;
