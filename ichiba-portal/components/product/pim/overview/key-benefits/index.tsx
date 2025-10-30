import React from "react";
import PimSection from "../section";
import { useTranslation } from "next-i18next";
import PimCanDo from "./components/PimCanDo";
import HowPimHelp from "./components/HowPimHelp";
import Benefits from "./components/Benefits";

const KeyBenefits = () => {
  const { t } = useTranslation("pim");

  return (
    <PimSection
      title={t("keyBenefits.title")}
      subTitle={t("keyBenefits.subTitle").toString()}
      className="tw-pb-0"
    >
      <div className="tw-flex tw-flex-col">
        <Benefits />
        <div className="tw-mt-10">
          <PimCanDo />
        </div>
        <HowPimHelp />
      </div>
    </PimSection>
  );
};

export default KeyBenefits;
