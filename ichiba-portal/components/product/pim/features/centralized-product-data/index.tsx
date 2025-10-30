import React from "react";
import MixLabel from "../mix-label";
import Image from "next/image";
import CentralizedProductDataCard from "./centralized-product-data-card";
import ListItems from "../list-items";
import AspectRatio from "@/components/core/aspect-ratio";
import {
  contentRows,
  automaticDataEnrichment,
  multiMerchantManagement,
} from "./dataset";
import { useTranslation } from "next-i18next";
import { Language } from "@/const/language";

const CentralizedProductData = () => {
  const { i18n, t } = useTranslation("pim");

  const lang = i18n.language as Language;

  return (
    <div id="centralized-product-data" className="tw-scroll-mt-20">
      <div className="container">
        <div className="tw-px-4 lg:tw-px-15 tw-pt-6 tw-pb-4 lg:tw-py-12 tw-bg-[#0A1A3D] tw-text-ic-white-6 tw-rounded-3xl tw-flex tw-z-1 tw-relative tw-w-full">
          <MixLabel
            className="tw-max-w-full tw-w-full"
            label={t("centralizedProductData")}
          >
            <div className="tw-flex tw-flex-col-reverse lg:tw-flex-row tw-justify-between tw-w-full tw-gap-5 lg:tw-gap-28">
              <div className="tw-flex-1">
                <AspectRatio x={462} y={280}>
                  <div className="tw-w-full tw-h-full tw-relative">
                    <Image
                      className="tw-object-cover tw-rounded-xl mx-auto"
                      alt="centralizedProductData"
                      width={405}
                      height={321}
                      src="/icons/pim/centralized.svg"
                    />
                  </div>
                </AspectRatio>
              </div>

              <ListItems
                items={contentRows[lang]}
                className="tw-text-ic-ink-2 tw-flex-1 lg:!tw-gap-2"
                classes={{ item: "lg:tw-py-4" }}
              />
            </div>
          </MixLabel>
        </div>
      </div>
      <div
        className="tw-pt-[94px] tw-mt-[-94px]"
        style={{
          background:
            "linear-gradient(360deg, #FDE9D3 0%, rgba(233, 238, 255, 0.60) 100%)",
        }}
      >
        <div className="container tw-py-5 lg:tw-py-0">
          <div className="tw-flex tw-gap-x-5 tw-items-stretch tw-justify-between tw-w-full tw-flex-col lg:tw-flex-row">
            <div className="lg:tw-pb-16 lg:tw-pt-20 d-md-block d-none">
              <CentralizedProductDataCard
                id="multi-merchant-management"
                header={t("automaticDataEnrichment")}
                {...automaticDataEnrichment[lang]}
              />
            </div>
            <div className="lg:tw-pb-16 lg:tw-pt-20 d-md-none">
              <CentralizedProductDataCard
                id="automatic-data-enrichment"
                header={t("automaticDataEnrichment")}
                {...automaticDataEnrichment[lang]}
              />
            </div>
            <div className="tw-relative tw-flex tw-justify-center tw-py-5 lg:tw-py-0">
              <Image
                src="/icons/pim/logo.svg"
                className="tw-z-1 tw-relative"
                width={60}
                height={60}
                alt="automaticDataEnrichment"
              />
              <div className="tw-absolute tw-inset-y-0 tw-w-0.5 tw-bg-ic-ink-2 tw-left-1/2 -tw-translate-x-1/2" />
            </div>
            <div className="lg:tw-pb-16 lg:tw-pt-20">
              <CentralizedProductDataCard
                id="multi-merchant-management"
                header={t("productDataSyndication")}
                {...multiMerchantManagement[lang]}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CentralizedProductData;
