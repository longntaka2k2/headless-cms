import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import StreamlineManage from "./streamline-management";
import BrandMonitor from "./brand-monitor";
import OrderFulfillment from "./order-fulfilment";
import StreamLess from "./streamless";
import BuildBusiness from "./build-business";
import Custommized from "./customized";
import Offer from "../offer";
const GlobalBrand = () => {
  const router = useRouter();
  const { t } = useTranslation("brand-commerce");
  return (
    <div className=" tw-my-6 lg:tw-mt-16">
      <div className=" tw-p-3 tw-bg-[#F0F5FF] tw-rounded-xl tw-container lg:tw-py-6 tw-px-4 lg:tw-px-0">
        <div className=" text-center">
          <div className="tw-text-xl lg:tw-text-4xl tw-font-bold lg:tw-max-w-[710px] lg:tw-mx-auto">
            {t("globalBrand.title")}
          </div>
          <div className="tw-text-sm lg:tw-text-base lg:tw-max-w-[750px] lg:tw-mx-auto lg:tw-mt-3">
            {t("globalBrand.subtitle")}
          </div>
        </div>
      </div>
      <div className="tw-mt-10 lg:tw-mt-12">
        <StreamlineManage />
        <BrandMonitor />
        <OrderFulfillment />
        <StreamLess />
        <BuildBusiness />
        <Custommized />
      </div>
      <Offer />
    </div>
  );
};

export default GlobalBrand;
