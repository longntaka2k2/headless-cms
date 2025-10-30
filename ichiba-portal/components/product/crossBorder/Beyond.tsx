import { useTranslation } from "next-i18next";
import Timeline from "./beyond/components/Timeline";
import { useState } from "react";
import Image from "next/image";
import clsx from "clsx";
import Slider from "./beyond/components/Slider";
enum TimelineName {
  shipping,
  creation,
  bidding,
}
const Beyond = () => {
  const { t } = useTranslation("common");
  const item = [
    {
      value: TimelineName.bidding,
      title: t("smartCrossBorder.beyond.bidding.title"),
      name: t("smartCrossBorder.beyond.bidding.label"),
      content: t("smartCrossBorder.beyond.bidding.content"),
      img: "https://cms-strapi.ichiba.net/uploads/Frame_5173659edf.png",
    },
    {
      value: TimelineName.shipping,
      title: t("smartCrossBorder.beyond.shipping.title"),
      name: t("smartCrossBorder.beyond.shipping.label"),
      content: t("smartCrossBorder.beyond.shipping.content"),
      img: "https://cms-strapi.ichiba.net/uploads/Group_19614_2b876230cf.png",
    },
    {
      value: TimelineName.creation,
      title: t("smartCrossBorder.beyond.creation.title"),
      name: t("smartCrossBorder.beyond.creation.label"),
      content: t("smartCrossBorder.beyond.creation.content"),
      img: "https://cms-strapi.ichiba.net/uploads/Group_19798_092dabe3cb.png",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const onChange = (index: number) => setActiveIndex(index);

  return (
    <div className="tw-container lg:px-0 tw-px-4 tw-py-6 lg:tw-py-10 tw-text-[#333]  ">
      <div className="tw-text-center tw-max-w-[800px] tw-mx-auto">
        <div className="tw-font-bold tw-text-[24px] lg:tw-text-[36px]">
          {t("smartCrossBorder.beyond.title")}
        </div>
        <div className="tw-py-4 tw-text-sm lg:tw-text-base">
          {t("smartCrossBorder.beyond.content")}
        </div>
      </div>
      <div className="lg:tw-flex lg:tw-mt-10 tw-mt-4 lg:tw-justify-between">
        <Timeline activeIndex={activeIndex} onChange={onChange} items={item} />
        <div className="lg:tw-block tw-hidden tw-self-center">
          <Image
            src={item[activeIndex].img}
            alt={item[activeIndex].img}
            width={588}
            height={331}
            quality={100}
            className="lg:tw-max-w-[588px] "
          />
        </div>
      </div>
      {/* <div className="lg:tw-hidden tw-grid tw-grid-cols-1-1 tw-gap-4 tw-mt-4 tw-relative">
        {item.map((value: any, index: number) => (
          <div
            onClick={() => onChange(index)}
            key={index}
            className={clsx(
              activeIndex === index
                ? "tw-bg-[rgba(255,_243,_229,_0.60)] tw-border-[1.5px] tw-border-[#F57C00]"
                : "tw-bg-[#F0F5FF]",
              "tw-p-3 tw-rounded-xl tw-top-0",
            )}
          >
            <div className="lg:tw-text-[20px] tw-font-bold">{value.title}</div>
            <div className="tw-text-sm lg:tw-text-base tw-mt-2">
              {value.content}
            </div>
            <Image
              src={value.img}
              alt={value.img}
              width={588}
              height={319}
              className="tw-w-full tw-mt-6"
            />
          </div>
        ))}
      </div> */}
      <div className="lg:tw-hidden">
        <Slider activeIndex={activeIndex} onChange={onChange} items={item} />
      </div>
    </div>
  );
};

export default Beyond;
