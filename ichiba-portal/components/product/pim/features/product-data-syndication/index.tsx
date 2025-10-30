import React from "react";
import MixLabel from "../mix-label";
import Image from "next/image";
import { contentRows } from "./dataset";
import { useTranslation } from "next-i18next";
import { Language } from "@/const/language";

const ProductDataSyndication = () => {
  const { t, i18n } = useTranslation("pim");

  const lang = i18n.language as Language;

  return (
    <div
      className="container tw-text-ic-ink-6 tw-scroll-mt-20"
      id="product-data-syndication"
    >
      <MixLabel
        className="tw-py-6 lg:tw-py-12"
        label={t("productDataSyndication")}
      >
        <div className="tw-grid tw-grid-cols-2 lg:tw-flex tw-gap-4 lg:tw-gap-6">
          {contentRows[lang].map((row, index) => (
            <div
              key={index}
              className="tw-px-3 lg:tw-px-5 lg:tw-py-6 tw-flex-1 tw-flex tw-flex-col tw-gap-2 lg:tw-gap-5"
            >
              <div className="tw-w-[100px] tw-h-[100px] tw-relative">
                <Image
                  className="tw-rounded-xl tw-object-cover"
                  src={row.image || "/icons/pim/empty-img-bg.svg"}
                  alt="empty-img"
                  fill
                />
              </div>
              <span className="lg:tw-text-base tw-text-sm">{row.content}</span>
            </div>
          ))}
        </div>
      </MixLabel>
    </div>
  );
};

export default ProductDataSyndication;
