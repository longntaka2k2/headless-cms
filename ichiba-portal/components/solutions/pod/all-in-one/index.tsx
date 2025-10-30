import { useTranslation } from "next-i18next";
import { Seamless } from "./Seamless";
import { Powerful } from "./Powerful";
import { SmartOrder } from "./SmartOrder";
import { Automated } from "./Automated";
import { MultiChannel } from "./MultiChannel";
import { AIPowered } from "./AIPowered";

export const AllInOne = () => {
  const { t } = useTranslation("pod");
  return (
    <section className="tw-px-4 tw-py-6 lg:tw-py-15 tw-bg-[linear-gradient(180deg,_#FFF_0%,_#F6F9FC_6.42%)]">
      <div className="tw-container">
        <p className="tw-text-center tw-font-medium tw-text-sm lg:tw-text-base tw-text-brand-primary tw-uppercase tw-mb-2">
          {t("allInOne.label")}
        </p>
        <h2 className="tw-relative tw-w-full tw-text-2xl lg:tw-text-4xl tw-font-bold tw-text-center tw-leading-8 lg:tw-leading-[48px] tw-mb-6 lg:tw-mb-12">
          {t("allInOne.heading.0")} <br />
          {t("allInOne.heading.1")}
        </h2>
        <div className="tw-grid tw-gap-6 lg:tw-gap-12">
          <Seamless />
          <Powerful />
          <SmartOrder />
          <Automated />
          <div className="tw-grid lg:tw-grid-cols-2 tw-gap-6 lg:tw-gap-12">
            <MultiChannel />
            <AIPowered />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AllInOne;
