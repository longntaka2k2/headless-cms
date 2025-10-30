import Image from "next/image";
import React from "react";
import { useTranslation } from "next-i18next";
import { LocaleNamespace } from "@/const/locale";
import AspectRatio from "@/components/core/aspect-ratio";
import clsx from "clsx";

const MobileTree = () => {
  const { t } = useTranslation(LocaleNamespace.EcommerceFulfillment);
  const items = t(`fulfillmentProficiency.items`, {
    returnObjects: true,
  }) as { value: string; label: string[] }[];

  return (
    <div className="tw-block xl:tw-hidden tw-mt-6 tw-w-full">
      <div className="tw-flex gap-2 tw-w-full tw-items-stretch">
        <div className="tw-w-4/5">
          <AspectRatio x={712} y={878}>
            <div className="tw-w-full tw-h-full tw-relative">
              <Image
                fill
                alt=""
                src="https://cms-strapi.ichiba.net/uploads/fulfillment_proficiency_tree_mobile_46c6c02ea0.png"
              />
            </div>
          </AspectRatio>
        </div>
        <div className="tw-grid tw-grid-cols-1">
          {items.map((item, index) => (
            <div
              key={index}
              className={clsx(
                "tw-flex tw-items-start tw-flex-col tw-justify-center",
                {
                  "-tw-translate-x-[30%] sm:-tw-translate-x-[50%] lg:-tw-translate-x-[60%]":
                    [0, 4].includes(index),
                  "-tw-translate-x-[15%]": [1, 3].includes(index),
                },
              )}
            >
              <span className="tw-text-base tw-font-bold sm:tw-text-lg">
                {item.value}
              </span>
              <span className="tw-text-xs tw-text-left sm:tw-text-sm">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MobileTree;
