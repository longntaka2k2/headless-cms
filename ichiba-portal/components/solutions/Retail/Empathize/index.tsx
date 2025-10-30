import SvgIcon from "@/components/common/SvgIcon";
import clsx from "clsx";
import { useTranslation } from "next-i18next";
import Image from "next/image";

export default function Empathize() {
  const { t } = useTranslation("retail");

  return (
    <div
      style={{
        backgroundImage: `url("https://cms-strapi.ichiba.net/uploads/Multi_channel_Order_Fulfillment_Process_7bc6167c50.svg")`,
        objectFit: "cover",
        backgroundPosition: "bottom",
      }}
      className={clsx("tw-relative tw-pt-6 lg:tw-pt-20")}
    >
      <div className="tw-container tw-text-white">
        <h2 className="tw-text-2xl lg:tw-text-4xl tw-font-bold tw-mb-6 lg:tw-mb-[180px] tw-text-center">
          {t("weEmpathize.title")}
        </h2>

        <div className="tw-grid tw-gap-6">
          <div
            style={{
              background: "rgba(255, 77, 79, 0.30)",
            }}
            className={clsx(
              "lg:tw-absolute tw-bottom-[22%] tw-left-[10%]",
              "tw-flex tw-gap-4 tw-items-center tw-py-2 tw-px-4 tw-rounded-lg",
              "tw-w-full lg:tw-w-[260px] tw-h-14 lg:tw-h-[88px]",
            )}
          >
            <div className="tw-w-10 tw-h-10">
              <SvgIcon icon="svg-package" width={40} height={40} />
            </div>
            <p className="tw-mb-0 tw-text-sm lg:tw-text-base tw-font-medium">
              {t("weEmpathize.items.0")}
            </p>
          </div>

          <div
            style={{
              background: "rgba(255, 77, 79, 0.30)",
            }}
            className={clsx(
              "lg:tw-absolute tw-top-[42%] tw-left-[20%]",
              "tw-flex tw-gap-4 tw-items-center tw-py-2 tw-px-4 tw-rounded-lg",
              "tw-w-full lg:tw-w-[260px] tw-h-14 lg:tw-h-[88px]",
            )}
          >
            <div className="tw-w-10 tw-h-10">
              <SvgIcon icon="svg-money-earn" width={40} height={40} />
            </div>
            <p className="tw-mb-0 tw-text-sm lg:tw-text-base tw-font-medium">
              {t("weEmpathize.items.1")}
            </p>
          </div>

          <div
            style={{
              background: "rgba(255, 77, 79, 0.30)",
            }}
            className={clsx(
              "lg:tw-absolute tw-top-[20%] tw-left-[50%] lg:tw-translate-x-[-50%]",
              "tw-flex tw-gap-4 tw-items-center tw-py-2 tw-px-4 tw-rounded-lg",
              "tw-w-full lg:tw-w-[260px] tw-h-14 lg:tw-h-[88px]",
            )}
          >
            <div className="tw-w-10 tw-h-10">
              <SvgIcon icon="svg-tablet-ipad" width={40} height={40} />
            </div>
            <p className="tw-mb-0 tw-text-sm lg:tw-text-base tw-font-medium">
              {t("weEmpathize.items.2")}
            </p>
          </div>

          <div
            style={{
              background: "rgba(255, 77, 79, 0.30)",
            }}
            className={clsx(
              "lg:tw-absolute tw-top-[42%] tw-right-[20%]",
              "tw-flex tw-gap-4 tw-items-center tw-py-2 tw-px-4 tw-rounded-lg",
              "tw-w-full lg:tw-w-[260px] tw-h-14 lg:tw-h-[88px]",
            )}
          >
            <div className="tw-w-10 tw-h-10">
              <SvgIcon icon="svg-update-rotation" width={40} height={40} />
            </div>
            <p className="tw-mb-0 tw-text-sm lg:tw-text-base tw-font-medium">
              {t("weEmpathize.items.3")}
            </p>
          </div>

          <div
            style={{
              background: "rgba(255, 77, 79, 0.30)",
            }}
            className={clsx(
              "lg:tw-absolute tw-bottom-[22%] tw-right-[10%]",
              "tw-flex tw-gap-4 tw-items-center tw-py-2 tw-px-4 tw-rounded-lg",
              "tw-w-full lg:tw-w-[260px] tw-h-14 lg:tw-h-[88px]",
            )}
          >
            <div className="tw-w-10 tw-h-10">
              <SvgIcon icon="svg-package-box" width={40} height={40} />
            </div>
            <p className="tw-mb-0 tw-text-sm lg:tw-text-base tw-font-medium">
              {t("weEmpathize.items.4")}
            </p>
          </div>
        </div>

        <div className="tw-w-[354px] lg:tw-w-[934px] tw-h-[279px] lg:tw-h-[427px] tw-mx-auto tw-overflow-hidden">
          <Image
            src={"https://cms-strapi.ichiba.net/uploads/dng_1_4b37148508.png"}
            alt="banner"
            width={1401}
            height={641}
            className="tw-w-[400px] tw-h-[279px] lg:tw-w-full lg:tw-h-full tw-object-center tw-hidden lg:tw-block"
          />
          <Image
            src={"https://cms-strapi.ichiba.net/uploads/dng_1_1_bfb604b2b7.png"}
            alt="banner"
            width={1401}
            height={641}
            className="tw-w-[400px] tw-h-[279px] lg:tw-w-full lg:tw-h-full tw-object-center lg:tw-hidden"
          />
        </div>
      </div>
    </div>
  );
}
