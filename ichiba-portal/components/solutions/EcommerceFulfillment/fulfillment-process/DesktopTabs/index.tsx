import { LocaleNamespace } from "@/const/locale";
import clsx from "clsx";
import React from "react";
import { useTranslation } from "next-i18next";

interface DesktopTabsProps {
  activeIndex: number;
  onClickTab: (index: number) => void;
}

const DesktopTabs = ({ activeIndex, onClickTab }: DesktopTabsProps) => {
  const { t } = useTranslation(LocaleNamespace.EcommerceFulfillment);

  return (
    <div className="tw-grid-cols-6 tw-mt-8 tw-hidden xl:tw-grid">
      {(
        t(`fulfillmentProcess.items`, {
          returnObjects: true,
        }) as string[]
      ).map((item: any, index: number) => (
        <button
          onClick={() => onClickTab(index)}
          key={index}
          className={clsx(
            "tw-px-4 tw-py-6 tw-font-bold tw-text-base tw-text-center tw-border-b-4 tw-rounded-t-xl tw-flex tw-items-center tw-justify-center",
            index !== activeIndex
              ? "tw-border-ic-ink-3"
              : "tw-border-brand-primary",
            {
              "tw-bg-white": index === activeIndex,
            },
          )}
        >
          {index + 1}. {item.title}
        </button>
      ))}
    </div>
  );
};

export default DesktopTabs;
