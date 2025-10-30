import { useTranslation } from "next-i18next";
import Fulfill from "./Fulfiil";
import Streamline from "./Streamline";
import Distribution from "./Distribytuion";
import { useRef, useEffect } from "react";
import Same from "./Same";
import UptotheTime from "./UptotheTime";
import Customized from "./Customized";
import ECommerce from "./ECommerce";
import OurFulfillment from "./OurFulfillment";

const Simplify = () => {
  const s = useTranslation("multichannel-fulfill").t;
 
  return (
    <div className="" >
      <div className="tw-px-4 tw-py-6 lg:tw-py-20 lg:tw-container ">
        <h2 className="tw-font-bold tw-text-xl lg:tw-text-4xl lg:tw-text-center">
          {s("simplify.title")}
        </h2>
        <div className="tw-mt-2 tw-text-sm lg:tw-text-base tw-text-center tw-text-[#666]">
          {s("simplify.subtitle")}
        </div>
      </div>
        <Fulfill />
        <Streamline />
        <Distribution />
        <Same />
        <UptotheTime />
        <Customized />
        <ECommerce />
        <OurFulfillment />
    </div>
  );
};
export default Simplify;
