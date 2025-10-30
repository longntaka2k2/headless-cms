import { LocaleNamespace } from "@/const/locale";
import clsx from "clsx";
import React from "react";
import { useTranslation } from "next-i18next";
import CountUp from "react-countup";

const Statistical = () => {
  const { t } = useTranslation(LocaleNamespace.OrderFulfillment);

  const items = t(`statistical.items`, {
    returnObjects: true,
  }) as { value: number; unit: string; label: string }[];
  return (
    <div
      className={clsx(
        "tw-py-12 !tw-bg-no-repeat !tw-bg-cover tw-text-white !tw-bg-bottom",
      )}
      style={{
        background:
          "linear-gradient(0deg, rgba(0, 25, 79, 0.60) 0%, rgba(0, 25, 79, 0.60) 100%), url('https://cms-strapi.ichiba.net/uploads/statistical_bg_7136d318ad.jpg'), lightgray 0px -397.011px / 100% 326.56% no-repeat",
      }}
    >
      <div className="container">
        <div className="tw-grid tw-grid-cols-2 md:tw-grid-cols-4 tw-gap-6">
          {items.map((item, index) => (
            <div
              key={index}
              className="tw-flex tw-flex-col tw-gap-2 tw-text-center"
            >
              <span className="tw-text-4xl xl:tw-text-5xl tw-font-bold">
                <CountUp decimal="," end={item.value} decimals={2} />
                {item.unit}
              </span>
              <span
                dangerouslySetInnerHTML={{
                  __html: item.label,
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Statistical;
