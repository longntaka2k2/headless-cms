import { getDictionary } from "@/app/getDictionary";
import Banner from "@/components/aboutUs/Banner";
import OurCulture from "@/components/aboutUs/OurCulture";
import OurStrengths from "@/components/aboutUs/OurStrengths";
import TrustSecurity from "@/components/aboutUs/TrustSecurity";
import We from "@/components/aboutUs/We";
import { Metadata, ResolvingMetadata } from "next";
import { PageProps } from "@/const/types";

export async function generateMetadata(
  { params }: PageProps,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  const lang = await getDictionary(params.lang);

  return {
    title: lang?.header.aboutUs,
  };
}
const AboutUs = async ({ params }: { params: { lang: string } }) => {
  const { aboutUs } = await getDictionary(params.lang);
  return (
    <div>
      <Banner aboutUs={aboutUs} />
      <We aboutUs={aboutUs} />
      <OurStrengths aboutUs={aboutUs} lang={params.lang} />
      <OurCulture aboutUs={aboutUs} />
      <TrustSecurity aboutUs={aboutUs} />
    </div>
  );
};

export default AboutUs;
