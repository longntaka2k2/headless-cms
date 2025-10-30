import React, { useState } from "react";
import { useTranslation } from "next-i18next";
import Timeline from "./components/Timeline";
import Slider from "./components/Slider";

enum TimelineName {
  Marketing,
  CustomerSuccess,
  InformationTechnology,
  TheCSuite,
}

const HowPimHelp = () => {
  const { t } = useTranslation("pim");

  const [activeIndex, setActiveIndex] = useState(0);

  const onChange = (index: number) => setActiveIndex(index);

  const timelineItems = [
    {
      name: t("howPimHelp.marketing.title"),
      value: TimelineName.Marketing,
    },
    {
      name: t("howPimHelp.customerSuccess.title"),
      value: TimelineName.CustomerSuccess,
    },
    {
      name: t("howPimHelp.informationTechnology.title"),
      value: TimelineName.InformationTechnology,
    },
    {
      name: t("howPimHelp.theCsuite.title"),
      value: TimelineName.TheCSuite,
    },
  ];

  const sliderItems = [
    {
      title: t("howPimHelp.marketing.shortTitle"),
      content: t("howPimHelp.marketing.content"),
      icon: "/icons/pim/cash-banknote-computer-fast-pay.svg",
      image: "https://cms-strapi.ichiba.net/uploads/Marketing_1b9fbe684b.svg",
    },
    {
      title: t("howPimHelp.customerSuccess.shortTitle"),
      content: t("howPimHelp.customerSuccess.content"),
      icon: "/icons/pim/basket-message-2.svg",
      image:
        "https://cms-strapi.ichiba.net/uploads/Customer_Success_43a63029bf.svg",
    },
    {
      title: t("howPimHelp.informationTechnology.shortTitle"),
      content: t("howPimHelp.informationTechnology.content"),
      icon: "/icons/pim/cloud-network-style-2-checkmark.png",
      image:
        "https://cms-strapi.ichiba.net/uploads/Information_Technology_034fd49c0b.svg",
    },
    {
      title: t("howPimHelp.theCsuite.shortTitle"),
      content: t("howPimHelp.theCsuite.content"),
      icon: "/icons/pim/32-user-support.svg",
      image: "https://cms-strapi.ichiba.net/uploads/Marketing_1b9fbe684b.svg",
    },
  ];

  return (
    <div className="tw-pt-[100px] tw-mt-[-100px] tw-bg-white tw-z-[1] tw-w-full">
      <div className="lg:tw-h-[600px] tw-overflow-hidden tw-pt-12 tw-flex tw-flex-col">
        <h4 className="tw-text-2xl md:tw-text-4xl tw-font-bold tw-mb-0 tw-text-center">
          {t("howPimHelpTitle")}
        </h4>
        <div className="tw-mt-8 tw-flex tw-flex-col lg:tw-flex-row tw-gap-20 container tw-flex-1">
          <Timeline
            activeIndex={activeIndex}
            onChange={onChange}
            items={timelineItems}
          />
          <Slider
            activeIndex={activeIndex}
            onChange={onChange}
            items={sliderItems}
          />
        </div>
      </div>
    </div>
  );
};

export default HowPimHelp;
