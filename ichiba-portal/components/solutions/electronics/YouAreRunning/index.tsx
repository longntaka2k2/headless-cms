import imgYouAreRunningDES from "@/public/images/electronics/imgYouAreRunningDES.svg";
import imgYouAreRunningMB from "@/public/images/electronics/imgYouAreRunningMB.svg";
import clsx from "clsx";
import { useTranslation } from "next-i18next";
import Image from "next/image";

export default function YouAreRunning() {
  const { t } = useTranslation("electronics");

  return (
    <div
      style={{
        background:
          "linear-gradient(180deg, #FFF 0%, #DCEEFF 48.23%, #F6EFDC 95.4%)",
      }}
      className="tw-py-6 lg:tw-py-15 tw-overflow-hidden"
    >
      <div className="tw-container">
        <h2 className="tw-mb-6 lg:tw-mb-10 tw-text-2xl tw-leading-8 lg:tw-text-4xl lg:tw-leading-[48px] tw-font-bold">
          {t("youAreRunning.heading")}
        </h2>
        <div className="tw-overflow-x-scroll">
          <div
            className={clsx(
              "tw-relative tw-w-[358px] tw-h-[788px]",
              "lg:tw-w-[1200px] lg:tw-h-[523px] tw-mx-auto",
            )}
          >
            <Image
              src={imgYouAreRunningDES}
              alt="imgYouAreRunningDES"
              className="tw-w-full tw-h-full tw-hidden lg:tw-block"
            />
            <Image
              src={imgYouAreRunningMB}
              alt="imgYouAreRunningMB"
              className="tw-w-full tw-h-full lg:tw-hidden"
            />

            <div
              className={clsx(
                "tw-absolute tw-text-sm lg:tw-text-lg tw-font-bold tw-text-white",
                "tw-left-[50%] tw-translate-x-[-50%] tw-top-[51.5%] tw-translate-y-[-51.5%]",
                "lg:tw-top-[43%] lg:tw-translate-y-[-43%]",
                "-tw-rotate-90 lg:tw-rotate-0",
              )}
            >
              {t("youAreRunning.youNeed")}
            </div>

            <div
              className={clsx(
                "tw-absolute tw-top-[5%] tw-left-[6%]",
                "lg:tw-top-[4%] lg:tw-left-[40px]",
                "tw-text-sm lg:tw-text-base tw-text-[#1D39C4] tw-w-[95px] lg:tw-w-[344px] tw-text-center",
              )}
            >
              <span className="tw-font-bold">
                {t("youAreRunning.listContent.0.item.title")}
              </span>
              {t("youAreRunning.listContent.0.item.subTitle")}
            </div>
            <div
              className={clsx(
                "tw-absolute tw-top-[50%] tw-translate-y-[-50%] tw-left-[7%]",
                "lg:tw-top-[11%] lg:tw-left-[50%] lg:tw-translate-x-[-50%]",
                "tw-text-sm lg:tw-text-base tw-text-[#1D39C4] tw-w-[95px] lg:tw-w-[344px] tw-text-center",
              )}
            >
              <span className="tw-font-bold">
                {t("youAreRunning.listContent.1.item.title")}
              </span>
              {t("youAreRunning.listContent.1.item.subTitle")}
            </div>
            <div
              className={clsx(
                "tw-absolute tw-bottom-[8%] tw-left-[6%]",
                "lg:tw-top-[4%] lg:tw-left-[67.5%]",
                "tw-text-sm lg:tw-text-base tw-text-[#1D39C4] tw-w-[95px] lg:tw-w-[344px] tw-text-center",
              )}
            >
              <span className="tw-font-bold">
                {t("youAreRunning.listContent.2.item.title")}
              </span>
              {t("youAreRunning.listContent.2.item.subTitle")}
            </div>

            <div
              className={clsx(
                "tw-absolute tw-top-[14%] tw-right-[7%]",
                "lg:tw-top-[78%] lg:tw-right-[67.5%]",
                "tw-text-sm lg:tw-text-base tw-w-[95px] lg:tw-w-[344px] tw-text-center tw-font-bold tw-text-white",
              )}
            >
              {t("youAreRunning.listContent.3.item.title")}
            </div>
            <div
              className={clsx(
                "tw-absolute tw-top-[55%] tw-translate-y-[-55%] tw-right-[7%]",
                "lg:tw-top-[86%] lg:tw-left-[50%] lg:tw-translate-x-[-50%]",
                "tw-text-sm lg:tw-text-base tw-w-[95px] lg:tw-w-[344px] tw-text-center tw-font-bold tw-text-white",
              )}
            >
              {t("youAreRunning.listContent.4.item.title")}
            </div>
            <div
              className={clsx(
                "tw-absolute tw-bottom-[50px] tw-right-[7%]",
                "lg:tw-bottom-[12%] lg:tw-right-[4%]",
                "tw-text-sm lg:tw-text-base tw-w-[95px] lg:tw-w-[344px] tw-text-center tw-font-bold tw-text-white",
              )}
            >
              {t("youAreRunning.listContent.5.item.title")}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
