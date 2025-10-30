import React from "react";
import { useTranslation } from "next-i18next";
import { LocaleNamespace } from "@/const/locale";
import AspectRatio from "@/components/core/aspect-ratio";
import clsx from "clsx";
import LottieRenderer from "@/components/common/lottieRenderer";

const FulfillmentNetwork = () => {
  const { t } = useTranslation(LocaleNamespace.OrderFulfillment);

  return (
    <div className="container">
      <div className="tw-py-6 xl:tw-py-10">
        <div className="tw-max-w-[792px] tw-mx-auto tw-text-center">
          <h3 className="tw-mb-2 tw-text-2xl xl:tw-text-4xl tw-font-bold">
            {t("fulfillmentNetwork.title")}
          </h3>
          <span
            dangerouslySetInnerHTML={{
              __html: t("fulfillmentNetwork.content"),
            }}
          />
        </div>
        <div className="tw-mt-6">
          <LottieRenderer
            path={
              "https://cms-strapi.ichiba.net/uploads/map_crossborder_75ff24df69_bcd7bd34f5.json"
            }
          />
        </div>
      </div>
    </div>
  );
};

export default FulfillmentNetwork;
