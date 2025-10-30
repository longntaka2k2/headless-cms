import { useTranslation } from "next-i18next";
import Image from "next/image";

const OurFulfillment = () => {
  const s = useTranslation("multichannel-fulfill").t;

  return (
    <div className="tw-py-6 tw-px-4 lg:tw-pt-[60px] lg:tw-pb-[80px] tw-bg-[url(https://cms-strapi.ichiba.net/uploads/Frame_2609029_bf97ef2aa2.png)]">
      <div className="lg:tw-max-w-[750px] tw-mx-auto">
        <h2 className="tw-text-2xl lg:tw-text-4xl tw-font-bold tw-text-white tw-text-center">
          {s("simplify.ourFulfill.title")}
        </h2>
        <div className="tw-text-sm lg:tw-text-lg tw-text-white tw-opacity-80 tw-text-center lg:tw-mt-2">
          {s("simplify.ourFulfill.subtitle")}
        </div>
        <div className="tw-mt-8 tw-text-white lg:tw-mt-10 tw-overflow-hidden lg:tw-overflow-visible">
          <div className="tw-relative tw-w-max tw-mx-auto">
          <Image src="https://cms-strapi.ichiba.net/uploads/Group_19805_32d176df6d.png" alt="ourFulfill" width={944} height={658} className="tw-max-w-[357px] lg:tw-max-w-[916px]" />
          <div className="tw-absolute tw-top-[6px] tw-right-[68px] lg:tw-top-6 lg:tw-right-[230px]"> 
            <div className="tw-font-bold tw-text-xs lg:tw-text-2xl ">{s("simplify.ourFulfill.total.title")}</div>
            <div className="tw-opacity-80 tw-text-[8px] lg:tw-text-sm">{s("simplify.ourFulfill.total.subtitle")}</div>
          </div>
          <div className="tw-absolute tw-top-[60px] tw-right-[24px] lg:tw-top-[165px] lg:tw-right-[130px]"> 
            <div className="tw-font-bold tw-text-xs lg:tw-text-2xl">{s("simplify.ourFulfill.global.title")}</div>
            <div className="tw-opacity-80 tw-text-[8px] lg:tw-text-sm">{s("simplify.ourFulfill.global.subtitle")}</div>
          </div>
          <div className="tw-absolute tw-top-[105px] tw-right-[6px] tw-max-w-[90px] lg:tw-top-[293px] lg:tw-right-[15px] lg:tw-max-w-[241px]"> 
            <div className="tw-font-bold tw-text-xs lg:tw-text-2xl">{s("simplify.ourFulfill.fulfillment.title")}</div>
            <div className="tw-opacity-80 tw-text-[8px] lg:tw-text-sm">{s("simplify.ourFulfill.fulfillment.subtitle")}</div>
          </div>
          <div className="tw-absolute tw-bottom-[59px] tw-right-[64px] lg:tw-bottom-[160px] lg:tw-right-[210px] "> 
            <div className="tw-font-bold tw-text-xs lg:tw-text-2xl">{s("simplify.ourFulfill.api.title")}</div>
            <div className="tw-opacity-80 tw-text-[8px] lg:tw-text-sm">{s("simplify.ourFulfill.api.subtitle")}</div>
          </div>
          <div className="tw-absolute tw-bottom-[6px] tw-right-[62px] lg:tw-bottom-[25px] lg:tw-right-[230px]"> 
            <div className="tw-font-bold tw-text-xs lg:tw-text-2xl">{s("simplify.ourFulfill.onTime.title")}</div>
            <div className="tw-opacity-80 tw-text-[8px] lg:tw-text-sm">{s("simplify.ourFulfill.onTime.subtitle")}</div>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default OurFulfillment;
 