import { useTranslation } from "next-i18next";
import Image from "next/image";
import Link from "next/link";

const CreateCross = () => {
  const { t } = useTranslation("common");
  return (
    <div className="tw-py-6 lg:tw-pt-[80px] lg:tw-pb-0 tw-px-4 lg:tw-px-0 tw-text-[#333] tw-bg-[#F0F5FF] lg:tw-bg-[linear-gradient(270deg,_rgba(235,_238,_250,_0.00)_0.05%,_rgba(172,_190,_255,_0.50)_99.96%)]">
      <div className="tw-container">
        <div className="tw-text-center lg:tw-max-w-[790px] lg:tw-mx-auto lg:tw-mb-10">
          <div className="tw-text-2xl lg:tw-text-4xl tw-font-bold tw-mt-3 lg:tw-mb-6">
            {t("smartCrossBorder.CreateCross.title")}
          </div>
          <div className="tw-text-sm lg:tw-text-base tw-mt-2">
            {t("smartCrossBorder.CreateCross.content")}
          </div>
          <div className="tw-mt-4 tw-text-sm lg:tw-text-base">
            {t("smartCrossBorder.CreateCross.subcontent")}
          </div>
        </div>
        <div className="tw-grid tw-grid-cols-2 lg:tw-grid-cols-4 tw-gap-4 tw-my-6">
          <div className="tw-flex tw-items-center tw-rounded-xl tw-bg-white tw-px-2 tw-py-4 lg:tw-p-4 tw-shadow-[0px_0px_12px_0px_rgba(54,_50,_46,_0.08)]">
            <div className="tw-rounded tw-w-[6px] tw-h-9 lg:tw-h-[70px] tw-bg-[linear-gradient(0deg,_#FF7400_-0.66%,_#FFAB52_99.49%)]"></div>
            <div className="tw-font-bold lg:tw-text-lg tw-ml-3">
              {t("smartCrossBorder.CreateCross.local")}
            </div>
          </div>
          <div className="tw-flex tw-items-center tw-rounded-xl tw-bg-white tw-px-2 tw-py-4 lg:tw-p-4 tw-shadow-[0px_0px_12px_0px_rgba(54,_50,_46,_0.08)]">
            <div className="tw-rounded tw-w-[6px] tw-h-9 lg:tw-h-[70px] tw-bg-[linear-gradient(180deg,_#5E79FF_13.02%,_#1D39C4_100%)]"></div>
            <div className="tw-font-bold lg:tw-text-lg tw-ml-3">
              {t("smartCrossBorder.CreateCross.multilang")}
            </div>
          </div>
          <div className="tw-flex tw-items-center tw-rounded-xl tw-bg-white tw-px-2 tw-py-4 lg:tw-p-4 tw-shadow-[0px_0px_12px_0px_rgba(54,_50,_46,_0.08)]">
            <div className="tw-rounded tw-w-[6px] tw-h-9 lg:tw-h-[70px] tw-bg-[#9254DE]"></div>
            <div className="tw-font-bold lg:tw-text-lg tw-ml-3">
              {t("smartCrossBorder.CreateCross.multipayment")}
            </div>
          </div>
          <div className="tw-flex tw-items-center tw-rounded-xl tw-bg-white tw-px-2 tw-py-4 lg:tw-p-4 tw-shadow-[0px_0px_12px_0px_rgba(54,_50,_46,_0.08)]">
            <div className="tw-rounded tw-w-[6px] tw-h-9 lg:tw-h-[70px] tw-bg-[#389E0D]"></div>
            <div className="tw-font-bold lg:tw-text-lg tw-ml-3">
              {t("smartCrossBorder.CreateCross.customized")}
            </div>
          </div>
        </div>
        <div className="text-center lg:tw-my-10 ">
          <Link
            href="/products/storefront-layer/overview"
            className="tw-text-sm lg:tw-text-base lg:tw-inline-block tw-hidden tw-bg-brand-primary tw-text-white tw-rounded-lg tw-px-8 tw-py-3 tw-no-underline  tw-mt-6"
          >
            {t("smartCrossBorder.CreateCross.export")}
          </Link>
        </div>
        <div className="">
          <Image
            src={
              "https://cms-strapi.ichiba.net/uploads/Group_19881_6692aa7208.png"
            }
            alt="6692aa7208.png"
            width={1190}
            height={699}
            quality={100}
          />
        </div>
        <div className="text-center tw-mt-6 lg:tw-hidden">
          <Link
            href="/products/storefront-layer/overview"
            className="tw-text-sm lg:tw-text-base lg:tw-hidden tw-bg-brand-primary tw-text-white tw-rounded-lg tw-px-8 tw-py-3 tw-no-underline tw-inline-block "
          >
            {t("smartCrossBorder.CreateCross.export")}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CreateCross;
