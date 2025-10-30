import React from "react";
import MixLabel from "../mix-label";
import ListItems from "../list-items";
import AspectRatio from "@/components/core/aspect-ratio";
import Image from "next/image";
import { contentRows } from "./dataset";
import { useTranslation } from "next-i18next";
import { Language } from "@/const/language";

const DeepIntegration = () => {
  const { t, i18n } = useTranslation("pim");
  const lang = i18n.language as Language;

  return (
    <div className="lg:tw-items-center tw-grid-cols-1 tw-grid-rows-2 tw-grid lg:tw-grid-rows-1 lg:tw-grid-cols-2 tw-w-[343px] lg:tw-w-full tw-min-w-[50%]">
      <div className="lg:tw-pr-4 tw-pt-5 tw-pl-5 lg:tw-pt-0 lg:tw-pl-0">
        <MixLabel
          className="tw-w-[485px] tw-max-w-full tw-flex-1"
          label={t("deepIntegrationWithMultiplePlatforms")}
        >
          <ListItems items={contentRows[lang]} />
        </MixLabel>
      </div>
      <div className="tw-w-full -tw-order-1 lg:tw-order-1">
        <div
          className="tw-p-9 lg:tw-px-14 lg:tw-py-9 tw-rounded-3xl lg:tw-rounded-tl-none tw-rounded-bl-none lg:tw-rounded-bl-3xl tw-h-full"
          style={{
            background:
              "linear-gradient(311deg, #FDE9D3 0%, rgba(233, 238, 255, 0.60) 100%)",
          }}
        >
          <AspectRatio x={486} y={345}>
            <div className="tw-relative tw-w-full tw-h-full">
              <Image src="/icons/pim/deep.svg" alt="deep" fill />
            </div>
          </AspectRatio>
        </div>
      </div>
    </div>
  );
};

export default DeepIntegration;
