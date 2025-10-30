import React from "react";
import MixLabel from "../mix-label";
import Image from "next/image";
import AspectRatio from "@/components/core/aspect-ratio";
import { useTranslation } from "next-i18next";
import { contentRows } from "./dataset";
import { Language } from "@/const/language";

const CategorizeProducts = () => {
  const { t, i18n } = useTranslation("pim");
  const lang = i18n.language as Language;

  return (
    <div
      className="container tw-bg-neutral-1 lg:tw-bg-transparent tw-scroll-mt-20"
      id="categorize-products"
    >
      <div className="tw-flex tw-flex-col lg:tw-flex-row tw-items-center tw-gap-5">
        <div className="tw-px-4 lg:tw-px-10 tw-bg-neutral-1 tw-pt-4 lg:tw-pt-12 lg:tw-pb-15 tw-rounded-t-3xl tw-w-full">
          <MixLabel label={t("categorizeProducts")}>
            <div className="tw-flex tw-flex-col tw-gap-4 lg:tw-gap-8">
              {contentRows[lang].map((row, index) => (
                <div className="tw-flex tw-items-center tw-gap-5" key={index}>
                  <div className="bg-white tw-p-[14px] tw-rounded-xl tw-shadow-[0px_8px_16px_0px_rgba(0,_0,_0,_0.05)]">
                    <Image
                      src={`/icons/pim/${
                        index === 0 ? "categori" : "search"
                      }.svg`}
                      className="tw-object-cover tw-rounded-xl"
                      alt="categori"
                      width={32}
                      height={32}
                    />
                  </div>
                  <span className="tw-flex-1 tw-text-sm lg:tw-text-base">
                    {row}
                  </span>
                </div>
              ))}
            </div>
          </MixLabel>
        </div>
        <div className="tw-pb-6 tw-px-4 lg:tw-pb-0 lg:tw-px-0 tw-w-full">
          <AspectRatio x={310} y={174}>
            <div className="tw-w-full tw-h-full tw-relative">
              <Image
                src="/icons/pim/illustration.svg"
                className="tw-object-cover tw-rounded-xl mx-auto"
                alt="categori"
                width={307}
                height={307}
              />
            </div>
          </AspectRatio>
        </div>
      </div>
    </div>
  );
};

export default CategorizeProducts;
