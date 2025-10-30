import React from "react";
import { useTranslation } from "next-i18next";
import Button from "@/components/core/button";

const Summary = () => {
  const { t } = useTranslation("pim");

  return (
    <div className="tw-bg-primary-1 tw-py-10 tw-text-sm lg:tw-text-base">
      <div className="container">
        <div className="tw-flex tw-flex-col tw-text-center tw-items-center">
          <h1 className="tw-mb-0 tw-text-2xl lg:tw-text-[40px] lg:tw-leading-[48px]">
            {t("pimFeaturesTitle")}
          </h1>
          <p className="tw-mb-0 tw-mt-2">{t("pimFeaturesSubtitle")}</p>
          <a
            target="_blank"
            rel="noreferrer nofollow"
            href="https://org.ichiba.net/"
            className="tw-min-w-[200px] tw-font-medium tw-rounded-lg tw-mt-6 tw-text-white tw-py-2.5 lg:tw-py-3.5 tw-bg-brand-primary tw-no-underline"
          >
            {t("exploreNow")}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Summary;
