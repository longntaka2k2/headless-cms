import { StaticImport } from "next/dist/shared/lib/get-img-props";
import researchIcon from "@/public/images/services/sellInJapan/howTo/researchImport.svg";
import prepareIcon from "@/public/images/services/sellInJapan/howTo/prepareDoc.svg";
import payCustomIcon from "@/public/images/services/sellInJapan/howTo/payCustom.svg";
import determineIcon from "@/public/images/services/sellInJapan/howTo/determineImport.svg";
import declareGoodsIcon from "@/public/images/services/sellInJapan/howTo/declareGoods.svg";
import customInspectionIcon from "@/public/images/services/sellInJapan/howTo/customInspection.svg";
import transoportationIcon from "@/public/images/services/sellInJapan/howTo/transoportation.svg";
import calculateIcon from "@/public/images/services/sellInJapan/howTo/calculate.svg";
import EzImage from "../commons/EzImage";
import Link from "next/link";
import { LocalizeLink } from "@/utils/ultils";

interface Content {
  icon: StaticImport;
  title: string;
}
const HowTo = ({ lang, params }: any) => {
  const { heading, subHeading, contents, cta } =
    lang.services.sellInJapan.howTo;
  const contentss: Content[] = [
    {
      icon: researchIcon,
      title: contents[0],
    },
    {
      icon: prepareIcon,
      title: contents[1],
    },
    {
      icon: payCustomIcon,
      title: contents[2],
    },
    {
      icon: determineIcon,
      title: contents[3],
    },
    {
      icon: declareGoodsIcon,
      title: contents[4],
    },
    {
      icon: customInspectionIcon,
      title: contents[5],
    },
    {
      icon: customInspectionIcon,
      title: contents[6],
    },
    {
      icon: transoportationIcon,
      title: contents[7],
    },
    {
      icon: calculateIcon,
      title: contents[8],
    },
  ];
  return (
    <section className="container py-10 lg:py-20 px-4 flex flex-col gap-8 lg:gap-14 bg-gray-11">
      <h2 className="font-black text-2xl leading-9 lg:text-4xl lg:leading-54 uppercase">
        {heading}
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-12">
        {contentss.map(({ icon, title }, idx) => (
          <div
            key={idx}
            className="flex justify-start gap-4 py-5 border-b-[1px] border-gray-12"
          >
            <EzImage src={icon} width={21} height={21} alt="icon" />
            <p className="font-medium lg:leading-6">{title}</p>
          </div>
        ))}
      </div>
      <div>
        <p className="font-medium uppercase text-base lg:text-xl mb-8 lg:w-[68%]">
          {" "}
          {subHeading}
        </p>
        <Link
          href={LocalizeLink(params.lang, "#")}
          className="block text-center p-4 w-[228px] min-h-[40px] text-white bg-brand-secondary uppercase"
        >
          {cta}
        </Link>
      </div>
    </section>
  );
};

export default HowTo;
