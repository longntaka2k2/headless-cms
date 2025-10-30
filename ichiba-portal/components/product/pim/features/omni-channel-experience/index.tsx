import React from "react";
import MixLabel from "../mix-label";
import ListItems from "../list-items";
import AspectRatio from "@/components/core/aspect-ratio";
import Image from "next/image";
import { useTranslation } from "next-i18next";
import { Language } from "@/const/language";
import { contentRows } from "./dataset";

const OmniChannelExperience = () => {
  const { t, i18n } = useTranslation("pim");

  const lang = i18n.language as Language;

  return (
    <div className="tw-w-[343px] lg:tw-w-full tw-min-w-[50%]">
      <div className="tw-grid tw-grid-cols-1 lg:tw-grid-cols-2 tw-grid-rows-2 lg:tw-grid-rows-1 lg:tw-items-center">
        <div
          className="tw-p-9 lg:tw-px-14 lg:tw-py-9 tw-rounded-3xl lg:tw-rounded-br-none tw-rounded-tr-none lg:tw-rounded-tr-3xl"
          style={{
            background:
              "linear-gradient(311deg, #FDE9D3 0%, rgba(233, 238, 255, 0.60) 100%)",
          }}
        >
          <AspectRatio x={486} y={345}>
            <div className="tw-relative tw-w-full tw-h-full">
              <Image src="/icons/pim/omni.svg" alt="omni" fill />
            </div>
          </AspectRatio>
        </div>
        <div className="tw-flex tw-justify-end tw-w-full -tw-order-1 lg:tw-order-1 lg:tw-pl-4 tw-pr-5 lg:tw-pr-0">
          <MixLabel
            className="tw-w-[485px] tw-max-w-full"
            label={t("omniChannelExperience")}
          >
            <ListItems items={contentRows[lang]} />
          </MixLabel>
        </div>
      </div>
    </div>
  );
};

export default OmniChannelExperience;
