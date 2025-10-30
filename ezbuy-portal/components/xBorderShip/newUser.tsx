import clsx from "clsx";
import EzImage from "../commons/EzImage";
import TrackingIcon from "@/public/images/services/xBorderShipping/tracking.svg";
import customRegulationIcon from "@/public/images/services/xBorderShipping/customRegulation.svg";
import properPackingIcon from "@/public/images/services/xBorderShipping/properPackaging.svg";
import accurateDocIcon from "@/public/images/services/xBorderShipping/accurateDocumentation.svg";
import shippingIcon from "@/public/images/services/xBorderShipping/shippingOption.svg";
import insuranceIcon from "@/public/images/services/xBorderShipping/insuranceCoverage.svg";
import addressAccuracyIcon from "@/public/images/services/xBorderShipping/addressAccuracy.svg";

const NewUser = ({ lang }: any) => {
  const { contents, heading, subHeading } =
    lang.services.xBorderShip.newUser;
  const contentItems = [
    {
      img: customRegulationIcon,
      ...contents[0],
    },
    {
      img: properPackingIcon,
      ...contents[1],
    },
    {
      img: accurateDocIcon,
      ...contents[2],
    },
    {
      img: shippingIcon,
      ...contents[3],
    },
    {
      img: insuranceIcon,
      ...contents[4],
    },
    {
      img: addressAccuracyIcon,
      ...contents[5],
    },
  ];
  return (
    <section className="py-14  container">
      <div className="flex flex-col gap-2 lg:gap-6 items-center pb-6 lg:pb-12 px-4 lg:px-0">
        <h2 className="uppercase font-black text-2xl lg:text-4xl">{heading}</h2>
        <p className="text-sm lg:text-base">{subHeading}</p>
      </div>
      <div className="flex lg:justify-center gap-4 lg:gap-6 w-full lg:flex-wrap items-stretch overflow-auto [&::-webkit-scrollbar]:hidden snap-proximity snap-x">
        {contentItems.map((x, idx) => (
          <article
            key={idx}
            className={clsx(
              "flex flex-col gap-6 p-6 justify-start content-start lg:max-w-[31%]",
              "transition-all duration-200 hover:scale-[1.015] ease-out gap-6 snap-center",
              "border-1 hover:shadow-1 m-1 p-1",
              "shadow-5 bg-[rgba(255,_255,_255,_0.85)] min-w-[244px] "
            )}
          >
            <EzImage src={x.img} alt={x.title} width={40} height={40} className="self-center"/>
            <div>
              <h3 className="font-bold text-center">{x?.title}</h3>
              <p className="text-sm">{x?.des}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};
export default NewUser;
