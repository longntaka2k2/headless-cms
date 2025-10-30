import clsx from "clsx";
import iconIntegrity from "@/public/images/aboutUs/coreValues/integrity.svg";
import iconCreativity from "@/public/images/aboutUs/coreValues/creativity.svg";
import iconCentricity from "@/public/images/aboutUs/coreValues/centricity.svg";

import { Element } from "react-scroll";
import EzImage from "@/components/commons/EzImage";
const CoreValues = ({ lang }: any) => {
  const icons = [iconIntegrity, iconCreativity, iconCentricity];
  return (
    <Element
      name={"core-values"}
      className={clsx("container px-4 lg:px-0 lg:mx-auto py-6 lg:py-0")}
    >
      <h2 className="text-center mb-4 lg:mb-5">{lang.coreValues.heading}</h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-y-5 px-2 lg:px-0">
        {icons.map((x, idx) => (
          <article
            key={idx}
            className={clsx(
              "flex lg:flex-col gap-4 lg:gap-5 ",
              "lg:text-center hover:lg:card-fx lg:rounded-lg lg:py-5 lg:px-6"
            )}
          >          
            <EzImage src={x} alt="icon" className="lg:mx-auto" quality={100}/>
            <div className=" ">
              <h3 className="font-bold mb-2 lg:mb-4 lg:text-xl text-base">
                {lang.coreValues.contents[idx].title}
              </h3>
              <p className="text-sm lg:text-base">
                {lang.coreValues.contents[idx].des}
              </p>
            </div>
          </article>
        ))}
      </div>
    </Element>
  );
};
export default CoreValues;
