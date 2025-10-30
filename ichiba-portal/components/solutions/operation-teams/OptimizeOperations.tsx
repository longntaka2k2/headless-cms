import SvgIcon from "@/components/common/SvgIcon";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "next-i18next";

const OptimizeOperations = () => {
  const { t } = useTranslation("operation-teams");
  return (
    <div className="tw-relative">
      <Image
        src="https://cms-strapi.ichiba.net/uploads/header_right_1_0a59c603ab.svg"
        alt="#"
        width={298}
        height={348}
        className="tw-absolute tw-top-[-30px] tw-left-[-5px] -tw-z-1 tw-hidden lg:tw-block"
      />
      <Image
        src="https://cms-strapi.ichiba.net/uploads/Background_a8e98421a5.svg"
        alt="#"
        width={643}
        height={317}
        className="tw-absolute tw-bottom-[-30px] tw-right-[20px] -tw-z-1 tw-hidden lg:tw-block"
      />
      <div className="tw-container tw-py-6 lg:tw-pt-20 lg:tw-pb-10">
        <h3 className="tw-mb-2 lg:tw-mb-4 tw-text-xs lg:tw-text-sm tw-font-bold tw-text-brand-secondary tw-uppercase tw-text-center">
          {t("optimize.label")}
        </h3>

        <h1 className="tw-mb-3 lg:tw-mb-11 tw-text-2xl lg:tw-text-5xl lg:tw-leading-[56px] tw-font-bold lg:tw-w-[80%] tw-mx-auto tw-text-end lg:tw-text-center">
          <span
            style={{
              background:
                "linear-gradient(90deg, #FFF7E6 0.04%, rgba(255, 247, 230, 0.00) 94.29%)",
            }}
            className="tw-mb-0 tw-border-l-4 tw-border-orange-6 tw-pl-3"
          >
            {t("optimize.heading.0")}
          </span>
          {t("optimize.heading.1")}
        </h1>

        {/* Mobile */}
        <div className="lg:tw-hidden ">
          <div className="tw-bg-[#F9F9F9] tw-rounded-lg tw-py-6 tw-px-8 tw-mb-5">
            <p className="tw-mb-6 tw-text-base tw-text-ic-black-5">
              {t("optimize.content")}
            </p>
            <div className="tw-flex tw-justify-end">
              <Link
                href={"/contact-sales"}
                target="_blank"
                className="tw-text-white"
              >
                <button className="tw-bg-[#F57C00] tw-py-3 tw-px-3 tw-w-[200px] tw-text-sm tw-font-medium tw-rounded-lg">
                  {t("optimize.contactSales")}
                </button>
              </Link>
            </div>
          </div>

          <div className="tw-w-full tw-h-full tw-relative tw-rounded-2xl tw-overflow-hidden tw-group">
            <Image
              src="https://cms-strapi.ichiba.net/uploads/content_tax_1_7ff9c2ce05.svg"
              alt="#"
              width={690}
              height={456}
              className="tw-w-full tw-h-full"
            />
            <div
              style={{
                background: "rgba(255, 255, 255, 0.80)",
              }}
              className={clsx(
                "tw-absolute tw-top-[50%] tw-translate-y-[-50%] tw-left-[50%] tw-translate-x-[-50%] tw-cursor-pointer",
                "tw-flex tw-items-center tw-justify-center tw-w-[196px] tw-h-[44px] lg:tw-w-[240px] lg:tw-h-[48px]",
                "tw-bg-[rgba(255, 255, 255, 0.80)] tw-rounded-[80px] tw-border-2 tw-border-brand-secondary group-hover:tw-opacity-70",
              )}
            >
              <SvgIcon icon="svg-play-video" width={24} height={24} />
              <p className="tw-mb-0 tw-text-sm lg:tw-text-base tw-text-[#1135A8] tw-text-center tw-font-bold tw-uppercase">
                {t("optimize.seeSolution")}
              </p>
            </div>
          </div>

          <Image
            src="https://cms-strapi.ichiba.net/uploads/ecom_marketing_1_9fac421657.svg"
            alt="#"
            width={486}
            height={238}
            className="tw-mx-auto"
          />
        </div>

        {/* Desktop */}
        <div className="tw-hidden lg:tw-flex tw-gap-6 tw-items-center">
          <div className="tw-flex-col tw-gap-6">
            <div className="tw-bg-[#F9F9F9] tw-rounded-lg tw-py-6 tw-px-8">
              <p className="tw-mb-6 tw-text-base tw-text-ic-black-5">
                {t("optimize.content")}
              </p>
              <Link
                href={"/contact-sales"}
                target="_blank"
                className="tw-text-white"
              >
                <button className="tw-bg-[#F57C00] tw-py-3 tw-px-3 tw-w-[200px] tw-text-sm tw-font-medium tw-rounded-lg">
                  {t("optimize.contactSales")}
                </button>
              </Link>
            </div>
            <Image
              src="https://cms-strapi.ichiba.net/uploads/ecom_marketing_1_9fac421657.svg"
              alt="#"
              width={486}
              height={238}
            />
          </div>

          <div className="tw-min-w-[690px] tw-min-h-[456px] tw-relative tw-rounded-2xl tw-overflow-hidden tw-group">
            <Image
              src="https://cms-strapi.ichiba.net/uploads/content_tax_1_7ff9c2ce05.svg"
              alt="#"
              width={690}
              height={456}
              className="tw-w-full tw-h-full"
            />
            <div
              style={{
                background: "rgba(255, 255, 255, 0.80)",
              }}
              className={clsx(
                "tw-absolute tw-top-[50%] tw-translate-y-[-50%] tw-left-[50%] tw-translate-x-[-50%] tw-cursor-pointer",
                "tw-flex tw-items-center tw-justify-center tw-w-[196px] tw-h-[44px] lg:tw-w-[240px] lg:tw-h-[48px]",
                "tw-bg-[rgba(255, 255, 255, 0.80)] tw-rounded-[80px] tw-border-2 tw-border-brand-secondary group-hover:tw-opacity-70",
              )}
            >
              <SvgIcon icon="svg-play-video" width={24} height={24} />
              <p className="tw-mb-0 tw-text-sm lg:tw-text-base tw-text-[#1135A8] tw-font-bold tw-uppercase">
                {t("optimize.seeSolution")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OptimizeOperations;
