import SvgIcon from "@/components/common/SvgIcon";
import bgSupport from "@/public/images/products/bg-support.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import clsx from "clsx";
import { useTranslation } from "next-i18next";

export default function Support() {
  const { t } = useTranslation("products");

  return (
    <div className="tw-container tw-py-5 lg:tw-py-0">
      <div
        style={{
          backgroundImage: `url(${bgSupport.src})`,
          objectFit: "cover",
        }}
        className={clsx(
          "tw-grid tw-w-full tw-rounded-lg tw-text-white tw-pt-5 tw-px-5 tw-pb-10",
          "lg:tw-grid-cols-2 lg:tw-rounded-xl lg:tw-py-10 lg:tw-px-14 lg:tw-items-center",
        )}
      >
        <div
          className={clsx(
            "tw-border-b tw-pb-6 tw-border-gray-600",
            "lg:tw-border-r tw-border-b-0 lg:tw-pr-12 lg:tw-pb-0",
          )}
        >
          <div className="tw-mb-3 lg:tw-mb-4">
            <h2 className="tw-mb-0 tw-text-2xl lg:tw-text-4xl tw-font-bold">
              {t("support.title.0")}
            </h2>
            <h2 className="tw-mb-0 tw-text-2xl lg:tw-text-4xl tw-font-bold">
              {t("support.title.1")}
            </h2>
          </div>

          <div className="tw-mb-6 lg:tw-mb-8">
            <p className="tw-text-sm lg:tw-text-base tw-text-ic-white-5 tw-mb-0">
              {t("support.subTitle.0")}
            </p>
            <p className="tw-text-sm lg:tw-text-base tw-text-ic-white-5 tw-mb-0">
              {t("support.subTitle.1")}
            </p>
          </div>

          <button className="tw-bg-[#F57C00] tw-py-3 tw-px-3 tw-w-[200px] tw-text-sm tw-font-medium tw-rounded-lg">
            {t("support.textBtn")}
          </button>
        </div>

        <div
          className={clsx(
            "tw-border-t  tw-pt-6 tw-border-gray-600",
            "lg:tw-border-t-0 lg:tw-pl-12 lg:tw-pt-0",
          )}
        >
          <p className="tw-text-xs  lg:tw-text-sm tw-mb-4">
            {t("support.orCheck")}
          </p>
          <div className="tw-grid tw-gap-4">
            <div className="tw-flex tw-gap-4 tw-items-center">
              <div
                style={{
                  background: "rgba(255, 255, 255, 0.20)",
                }}
                className="tw-w-10 tw-h-10 tw-flex tw-items-center tw-justify-center tw-rounded-lg"
              >
                <SvgIcon icon="svg-icon-discover" />
              </div>
              <p className="tw-mb-0 tw-text-sm lg:tw-text-base tw-font-medium tw-max-w-[220px] lg:tw-max-w-[400px]">
                {t("support.contentResource.0")}
              </p>
              <FontAwesomeIcon icon={faArrowRight} />
            </div>

            <div className="tw-flex tw-gap-4 tw-items-center">
              <div
                style={{
                  background: "rgba(255, 255, 255, 0.20)",
                }}
                className="tw-w-10 tw-h-10 tw-flex tw-items-center tw-justify-center tw-rounded-lg"
              >
                <SvgIcon icon="svg-icon-experience" />
              </div>
              <p className="tw-mb-0 tw-text-sm lg:tw-text-base tw-font-medium tw-max-w-[220px] lg:tw-max-w-[400px]">
                {t("support.contentResource.1")}
              </p>
              <FontAwesomeIcon icon={faArrowRight} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
