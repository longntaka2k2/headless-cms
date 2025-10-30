import bgMonitor from "@/public/images/fashion-beauty/bgMonitor.svg";
import imgMonitor from "@/public/images/fashion-beauty/imgMonitor.svg";
import clsx from "clsx";
import { useTranslation } from "next-i18next";
import Image from "next/image";

export default function Monitor() {
  const { t } = useTranslation("fashion-beauty");

  return (
    <div
      style={{
        backgroundImage: `url(${bgMonitor.src})`,
        objectFit: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
      className="tw-py-6 lg:tw-py-20 tw-text-white "
    >
      <div className="tw-container tw-relative">
        <h2
          className={clsx(
            "tw-text-2xl tw-leading-8 lg:tw-text-4xl lg:tw-leading-[48px]",
            "tw-font-bold tw-mb-6 lg:tw-mb-0 lg:tw-text-center",
          )}
        >
          {t("monitor.heading")}
        </h2>

        <div className="tw-grid tw-gap-6 lg:tw-gap-0">
          <div className="tw-grid tw-grid-cols-2 tw-gap-6">
            <div
              style={{
                background: "rgba(255, 255, 255, 0.15)",
              }}
              className={clsx(
                "lg:tw-absolute tw-bottom-0 tw-left-[2%] lg:tw-w-[258px]",
                "tw-p-7 tw-rounded-2xl text-center",
              )}
            >
              <h3 className="tw-text-sm lg:tw-text-lg tw-font-bold">
                {t("monitor.listManage.0")}
              </h3>
            </div>
            <div
              style={{
                background: "rgba(255, 255, 255, 0.15)",
              }}
              className={clsx(
                "lg:tw-absolute tw-top-[20%] tw-left-[5%] lg:tw-w-[258px]",
                "tw-p-7 tw-rounded-2xl text-center",
              )}
            >
              <h3 className="tw-text-sm lg:tw-text-lg tw-font-bold">
                {t("monitor.listManage.1")}
              </h3>
            </div>
          </div>
          <div className="tw-grid tw-grid-cols-2 tw-gap-6">
            <div
              style={{
                background: "rgba(255, 255, 255, 0.15)",
              }}
              className={clsx(
                "lg:tw-absolute tw-top-[15%] tw-right-[13%] lg:tw-w-[258px]",
                "tw-p-7 tw-rounded-2xl text-center",
              )}
            >
              <h3 className="tw-text-sm lg:tw-text-lg tw-font-bold">
                {t("monitor.listManage.2")}
              </h3>
            </div>
            <div
              style={{
                background: "rgba(255, 255, 255, 0.15)",
              }}
              className={clsx(
                "lg:tw-absolute tw-bottom-[5%] tw-right-0 lg:tw-w-[258px]",
                "tw-p-7 tw-rounded-2xl text-center",
              )}
            >
              <h3 className="tw-text-sm lg:tw-text-lg tw-font-bold">
                {t("monitor.listManage.3")}
              </h3>
            </div>
          </div>
          <div
            style={{
              background: "rgba(255, 255, 255, 0.15)",
            }}
            className={clsx(
              "lg:tw-absolute lg:tw-bottom-[-25%] lg:tw-left-[50%] lg:tw-translate-x-[-50%] lg:tw-w-[258px]",
              "tw-p-7 tw-rounded-2xl text-center",
            )}
          >
            <h3 className="tw-text-sm lg:tw-text-lg tw-font-bold">
              {t("monitor.listManage.4")}
            </h3>
          </div>
        </div>

        <div
          className={clsx(
            "tw-w-[358px] tw-h-[193px] lg:tw-w-[602px] lg:tw-h-[326px] tw-mx-auto",
            "tw-mt-6 lg:tw-my-[100px]",
          )}
        >
          <Image
            src={imgMonitor}
            alt="imgMonitor"
            className="tw-w-full tw-h-full"
          />
        </div>
      </div>
    </div>
  );
}
