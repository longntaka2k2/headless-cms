import clsx from "clsx";
import { Cta } from "@/components/commons/Cta";
import iconProduct from "@/public/images/aboutUs/ourStrengths/address.svg";
import iconTime from "@/public/images/aboutUs/ourStrengths/time.svg";
import iconPrice from "@/public/images/aboutUs/ourStrengths/price.svg";
import iconAddress from "@/public/images/aboutUs/ourStrengths/address.svg";
import { Card } from "./Card";
import { Element } from "react-scroll";

const OurStrength = ({ lang }: any) => {
  return (
    <Element
      name="strengths"
      className={clsx(
        "flex flex-col lg:flex-row lg:items-center gap-5 justify-between",
        "container px-4 lg:px-0 py-6 lg:py-0"
      )}
    >
      <div className="lg:w-[420px]">
        <h2 className="mb-1 lg:mb-2">{lang.heading}</h2>
        <p className="text-ic-ink-5 mb-4 lg:mb-6 text-xs lg:text-sm italic">
          {lang.subHeading}
        </p>
        <p className="text-sm lg:text-base mb-4 lg:mb-6">{lang.subHeading1}</p>
        <Cta href={"#"} className="">
          {lang.cta}
        </Cta>
      </div>
      <div className=" flex flex-col gap-2 lg:gap-4">
        <Card
          key={0}
          icon={iconProduct}
          title={lang.contents[0].title}
          des={lang.contents[0].des}
        />
        <Card
          key={1}
          icon={iconTime}
          title={lang.contents[1].title}
          des={lang.contents[1].des}
        />
        <Card
          key={2}
          icon={iconPrice}
          title={lang.contents[2].title}
          des={lang.contents[2].des}
        />
        <Card
          key={3}
          icon={iconAddress}
          title={lang.contents[3].title}
          des={lang.contents[3].des}
        />
      </div>
    </Element>
  );
};

export default OurStrength;
