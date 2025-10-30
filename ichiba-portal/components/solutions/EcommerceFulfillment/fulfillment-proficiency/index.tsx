import React from "react";
import { useTranslation } from "next-i18next";
import { LocaleNamespace } from "@/const/locale";
import DesktopTree from "./DesktopTree";
import MobileTree from "./MobileTree";

const FulfillmentProficiency = () => {
  const { t } = useTranslation(LocaleNamespace.EcommerceFulfillment);

  return (
    <div
      className="!tw-bg-center !tw-bg-no-repeat !tw-bg-cover tw-py-6 xl:tw-py-10"
      style={{
        background: `linear-gradient(0deg, rgba(0, 25, 79, 0.85) 0%, rgba(0, 25, 79, 0.85) 100%), url('https://cms-strapi.ichiba.net/uploads/fulfillment_proficiency_bg_f910651d60.webp'), lightgray 50% / cover no-repeat`,
      }}
    >
      <div className="container tw-text-white">
        <div className="tw-mx-auto tw-text-center tw-w-full">
          <div className="tw-max-w-[792px] tw-mx-auto">
            <h3 className="tw-mb-0 tw-font-bold tw-text-2xl xl:tw-text-4xl">
              {t("fulfillmentProficiency.title")}
            </h3>
            <p className="tw-mb-0 tw-mt-2">
              {t("fulfillmentProficiency.subTitle")}
            </p>
          </div>
          <MobileTree />
          <DesktopTree />
        </div>
      </div>
    </div>
  );
};

export default FulfillmentProficiency;
