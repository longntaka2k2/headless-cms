import EzImage from "@/components/commons/EzImage";
import clsx from "clsx";
import { Element } from "react-scroll";

const Card = ({ title, des }: { title: string; des: String }) => {
  return (
    <div>
      <div className="flex gap-2 lg:gap-3 mb-2 lg:mb-4">
        <div className="bg-gradient-red-1 w-1"></div>
        <span className="font-bold leading-6 lg:text-2xl text-brand-primary">
          {title}
        </span>
      </div>
      <p className="text-sm lg:text-base leading-5 lg:leading-6">{des}</p>
    </div>
  );
};

const OurMission = ({ lang }: any) => {
  return (
    <Element name={lang.anchors[1].id}>
      <div className="lg:max-w-[1325px] bg-[#F3F7FE] mx-auto pt-6 lg:pt-10 lg:pb-15 rounded-xl px-4 lg:px-[100px] mb-20">
        <h2 className="mb-4 lg:mb-11 text-center">
          {lang.missionVision.heading}
        </h2>
        <div className="flex flex-col-reverse lg:flex-row justify-between gap-4 lg:gap-20">
          <EzImage
            src={"/uploads/image_599_1_709797c139.png"}
            width={585}
            height={433}
            quality={100}
            className="-mb-20 lg:-mb-32 lg:flex-1"
            alt=""
          />
          <div className="flex flex-col gap-5 lg:gap-10 lg:flex-1">
            <Card {...lang.missionVision.contents[0]} />
            <Card {...lang.missionVision.contents[1]} />
          </div>
        </div>
      </div>
    </Element>
  );
};
export default OurMission;
