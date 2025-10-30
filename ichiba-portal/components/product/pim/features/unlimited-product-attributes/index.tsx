import React from "react";
import MixLabel from "../mix-label";
import ListItems from "../list-items";
import Image from "next/image";
import { contentRows } from "./dataset";
import { useTranslation } from "next-i18next";
import { Language } from "@/const/language";

const UnlimitedProductAttributes = () => {
  const { t, i18n } = useTranslation("pim");
  const lang = i18n.language as Language;

  return (
    <div
      className="tw-bg-bg-light tw-pb-5 tw-pt-6 lg:tw-py-15 tw-scroll-mt-20"
      id="unlimited-product-attributes"
    >
      <div className="container">
        <div className="tw-flex tw-flex-col lg:tw-flex-row tw-gap-5 lg:tw-gap-[126px] tw-items-center">
          <MixLabel
            className="tw-flex-1"
            label={t("unlimitedProductAttributes")}
          >
            <ListItems items={contentRows[lang]} />
          </MixLabel>
          <div className="tw-w-full lg:tw-w-[486px] tw-h-[254px] lg:tw-h-[345px] tw-relative">
            <Image
              src="/icons/pim/layer1.svg"
              alt="pim"
              fill
              className="tw-object-cover tw-rounded-3xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UnlimitedProductAttributes;
