import EzImage from "@/components/commons/EzImage";
import { faLeftRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import clsx from "clsx";

const WhyExpand = ({ lang, locale }: { lang: any; locale: string }) => {
  return (
    <section className="py-6 lg:pt-10 lg:pb-15 container px-4 lg:px-0">
      <div className="text-center mb-6">
        <h2 className={"font-black text-2xl lg:text-4xl uppercase"}>{lang.heading}</h2>
        <p className="text-sm lg:text-base">{lang.subHeading}</p>
      </div>
      <div className="mb-6">
        <EzImage
          src={"/uploads/Frame_427318849_ed12b6d5fc.png"}
          alt="Ezbuy"
          width={1102}
          height={569}
          className="mx-auto hidden lg:block"
          unoptimized
        />
        <EzImage
          src={"/uploads/Group_260920_bbf75b960d.png"}
          alt="Ezbuy"
          width={1102}
          height={569}
          className="mx-auto block lg:hidden"
          unoptimized
        />
      </div>
      <div
        className={clsx(
          "flex justify-center gap-6",
          "p-[10px] lg:p-3 lg:w-fit rounded-lg mx-auto",
          "border border-[#ADC6FF] text-sm lg:text-base mb-6"
        )}
      >
        <div className="flex items-center">
          <div className="inline-block rounded bg-[#98B3FF] w-[46px] h-6 mr-3" />{" "}
          <div className="inline-block my-auto">{lang.b2cRevenue}</div>
        </div>
        <span className="text-[#ADC6FF]">|</span>
        <div className="lg:w-fit rounded-lg  ">
          <FontAwesomeIcon
            icon={faLeftRight}
            className="text-brand-secondary-active fa-2xl mr-2"
          />
          <span>{lang.growthRate}</span>
        </div>
      </div>
      <p className="text-sm lg:text-base text-center">
        <span className="font-bold">{lang.figure1} - </span>
        <span>{lang.figure2}</span>
      </p>
    </section>
  );
};

export default WhyExpand;
