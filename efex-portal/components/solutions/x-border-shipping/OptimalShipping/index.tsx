import EzImage from "@/components/commons/EzImage";
import logo from "@/public/images/icons/logo-mini.svg";
import {
  faEarthAmerica,
  faLightbulb,
  faMagnifyingGlass,
  faRoad,
  faTruckFast,
} from "@fortawesome/free-solid-svg-icons";
import clsx from "clsx";
import { Card } from "./Card";

const OptimalShipping = ({ lang }: any) => {
  const icons = [
    faTruckFast,
    faLightbulb,
    faEarthAmerica,
    faRoad,
    faMagnifyingGlass,
  ];
  return (
    <section className="container pt-11 px-4 lg:px-0">
      <div className="text-center text-[#333] mb-4 lg:mb-10">
        <h2 className="text-center font-bold text-2xl lg:text-4xl lg:leading-12 mb-2">
          <EzImage className=" inline h-[30px] -mt-2" src={logo} alt="" />{" "}
          {lang.heading}
        </h2>
        <p className="lg:text-base text-center">{lang.subHeading}</p>
      </div>
      <div className="relative lg:h-[551px] w-full">
        <div
          className={clsx(
            "relative z-4 top-0",
            "flex flex-col lg:static gap-2 h-full w-full"
          )}
        >
          <Card
            title={lang.contents[0].title}
            des={lang.contents[0].des}
            icon={icons[0]}
            className={clsx("lg:absolute lg:top-8 lg:max-w-[418px]")}
          />
          <Card
            title={lang.contents[1].title}
            des={lang.contents[1].des}
            icon={icons[1]}
            className={clsx(
              "lg:absolute lg:top-[212px] lg:max-w-[418px] mb-20 lg:mb-0 "
            )}
          />
          <Card
            title={lang.contents[2].title}
            des={lang.contents[2].des}
            icon={icons[2]}
            className={clsx(
              "lg:absolute lg:left-1/2 lg:-translate-x-1/2 lg:bottom-0 ",
              "lg:max-w-[408px]"
            )}
          />
          <Card
            title={lang.contents[3].title}
            des={lang.contents[3].des}
            icon={icons[3]}
            className={clsx(
              "lg:absolute lg:top-[212px] right-0 lg:max-w-[438px]"
            )}
          />
          <Card
            title={lang.contents[4].title}
            des={lang.contents[4].des}
            icon={icons[4]}
            className={clsx("lg:absolute lg:top-8 right-0 lg:max-w-[438px]")}
          />
        </div>
        <div className="absolute top-0 bottom-0 left-0 right-0 -z-1">
          <EzImage
            src={"/uploads/Group_19293_74f3d57b25.png"}
            className="mx-auto mt-15 lg:mt-0"
            alt=""
            width={389}
            height={379}
          />
        </div>
      </div>
    </section>
  );
};

export default OptimalShipping;
