import Image from "next/image";
import marketingMeasurement from "@/public/solutions/performance-marketing/makerting-measurement.png";
import icon from "@/public/solutions/performance-marketing/icon-mak-measure.png";
import clsx from "clsx";
import { useTranslation } from "next-i18next";

export const MarketingMeasurement = () => {
  const { t } = useTranslation("performance-marketing");
  return (
    <section className="tw-container tw-mb-6 lg:tw-mb-15">
      <div
        className={clsx(
          "tw-bg-gradient-to-r tw-from-[#F7F9FC] tw-to-[#faf4ff] tw-rounded-2xl",
          "tw-flex tw-flex-col-reverse tw-gap-7",
          "lg:tw-grid lg:tw-grid-cols-2 lg:tw-gap-11 lg:tw-items-center",
        )}
      >
        <div className="tw-max-w-[550px] w-full tw-max-h-[642px] tw-h-full">
          <Image
            src={marketingMeasurement}
            alt="marketingMeasurement"
            className="tw-w-full tw-h-full"
          />
        </div>
        <div className="lg:tw-w-[90%] tw-grid tw-gap-2 lg:tw-gap-5 tw-pt-4 tw-px-4 lg:tw-pt-0 lg:tw-px-0">
          <div className="tw-w-[48px] lg:tw-w-[60px] tw-h-[48px] lg:tw-h-[60px]">
            <Image src={icon} alt="icon" className="tw-w-full tw-h-full" />
          </div>
          <h2 className="tw-mb-0 tw-text-2xl lg:tw-text-4xl tw-font-bold">
            {t("marketingMeasurement.title")}
          </h2>
          <p className="tw-text-sm lg:tw-text-base tw-mb-0">
            {t("marketingMeasurement.subTitle")}
          </p>
        </div>
      </div>
    </section>
  );
};
