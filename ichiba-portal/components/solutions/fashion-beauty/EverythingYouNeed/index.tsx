import bgEverythinh from "@/public/images/fashion-beauty/bgEverything.svg";
import banner from "@/public/images/fashion-beauty/banner.svg";
import imgAbsBanner from "@/public/images/fashion-beauty/imgAbsBanner.png";
import headerLeft from "@/public/images/fashion-beauty/header-left.svg";
import headerRight from "@/public/images/fashion-beauty/header-right.svg";
import imgSellOnWeb from "@/public/images/fashion-beauty/imgSellOnWeb.svg";
import imgSellOnPhysical from "@/public/images/fashion-beauty/imgSellOnPhysical.svg";
import imgSellOnSocial from "@/public/images/fashion-beauty/imgSellOnSocial.svg";
import imgSellOnEcommerce from "@/public/images/fashion-beauty/imgSellOnEcommerce.svg";
import Image from "next/image";
import { useTranslation } from "next-i18next";
import clsx from "clsx";
import Link from "next/link";

export default function EverythingYouNeed() {
  const { t } = useTranslation("fashion-beauty");

  return (
    <div
      style={{
        backgroundImage: `url(${bgEverythinh.src})`,
        backgroundRepeat: "no-repeat",
        objectFit: "cover",
        backgroundPosition: "bottom",
      }}
      className="tw-relative tw-overflow-hidden"
    >
      <div
        className={clsx(
          "tw-absolute lg:tw-top-[5%] tw-left-[-15%] lg:tw-left-[-5%] -tw-z-1",
          "tw-w-[180px] tw-h-[123px] lg:tw-w-[471px] lg:tw-h-[223px]",
        )}
      >
        <Image
          src={headerLeft}
          alt="headerLeft"
          className="tw-w-full tw-h-full"
        />
      </div>
      <div
        className={clsx(
          "tw-absolute tw-top-[5%] tw-right-[5%] -tw-z-1",
          "tw-w-[471px] tw-h-[223px] tw-hidden lg:tw-block",
        )}
      >
        <Image
          src={headerRight}
          alt="headerRight"
          className="tw-w-full tw-h-full"
        />
      </div>

      <div className="tw-container tw-py-6 lg:tw-py-[100px]">
        <div className=" tw-grid tw-gap-6 tw-justify-items-end tw-mb-8 lg:tw-mb-15">
          <div className="tw-w-[80%] lg:tw-w-[70%] tw-text-right">
            <h1
              style={{
                background:
                  "linear-gradient(90deg, rgba(255, 247, 230, 0.00) 0.04%, #FFF7E6 94.29%)",
              }}
              className={clsx(
                "tw-text-2xl lg:tw-text-5xl tw-leading-8 lg:tw-leading-[56px] tw-font-bold",
                "tw-mb-6  tw-pr-5 tw-border-r-4 tw-border-[#F57C00]",
              )}
            >
              {t("everythingYouNeed.heading")}
            </h1>
            <p className="tw-mb-0 tw-text-sm lg:tw-text-base ">
              {t("everythingYouNeed.subHeading")}
            </p>

            <Link
              className="tw-mt-6 tw-no-underline tw-text-white tw-bg-brand-primary tw-w-max tw-p-3 tw-rounded-lg tw-font-medium tw-min-w-[200px] tw-flex tw-items-center tw-justify-center tw-ml-auto"
              href="/contact-sales"
              passHref
              target="_blank"
            >
              {t("everythingYouNeed.textBtn")}
            </Link>
          </div>

          <div
            className={clsx(
              "tw-relative tw-w-full tw-h-[231px] lg:tw-h-[434px]",
              "tw-rounded-xl lg:tw-rounded-3xl",
            )}
          >
            <Image
              src={banner}
              alt="banner"
              className="tw-w-full tw-h-full tw-object-cover tw-rounded-xl lg:tw-rounded-3xl"
            />

            <div
              className={clsx(
                "tw-absolute tw-bottom-0 tw-left-0",
                "tw-w-[268px] tw-h-[259px]",
                "lg:tw-w-[630px] lg:tw-h-[608px]",
              )}
            >
              <Image
                src={imgAbsBanner}
                alt="imgAbsBanner"
                className="tw-w-full tw-h-full"
              />
            </div>
          </div>
        </div>

        <div>
          <h2
            className={clsx(
              "tw-mb-2 tw-text-2xl tw-leading-8 tw-font-bold",
              "lg:tw-text-4xl lg:tw-leading-[48px] lg:text-center",
            )}
          >
            {t("weHelpYou.heading")}
          </h2>
          <p className="tw-mb-6 lg:tw-mb-10 tw-text-sm  lg:tw-text-base lg:text-center">
            {t("weHelpYou.subHeading")}
          </p>

          <div className="tw-flex tw-flex-col lg:tw-flex-row tw-gap-6">
            <div
              style={{
                background: "rgba(255, 255, 255, 0.60)",
              }}
              className={clsx(
                "tw-border hover:tw-border-[#B1D1F6] hover:tw-shadow-[0px_8px_16px_0px_rgba(0,_0,_0,_0.05)]",
                "lg:tw-w-[25%] tw-px-5 tw-py-6 lg:tw-p-6",
                "tw-flex tw-flex-col tw-gap-4 tw-justify-between tw-rounded-2xl",
              )}
            >
              <p className="tw-text-sm lg:tw-text-base tw-font-bold tw-mb-0 tw-text-center">
                {t("weHelpYou.contentItemBox.0")}
              </p>
              <div className="tw-w-[238px] tw-h-[226px] tw-mx-auto">
                <Image
                  src={imgSellOnWeb}
                  alt="imgSellOnWeb"
                  className="tw-w-full tw-h-full"
                />
              </div>
            </div>
            <div className="lg:tw-w-[75%] tw-flex tw-flex-col tw-gap-6">
              <div className="tw-flex tw-flex-col lg:tw-flex-row tw-gap-6">
                <div
                  style={{
                    background: "rgba(255, 255, 255, 0.60)",
                  }}
                  className={clsx(
                    "tw-border hover:tw-border-[#B1D1F6] hover:tw-shadow-[0px_8px_16px_0px_rgba(0,_0,_0,_0.05)]",
                    "lg:tw-w-[35%] tw-px-5 tw-pt-6 lg:tw-px-6 tw-rounded-2xl",
                    "tw-flex tw-flex-col tw-gap-4 tw-justify-between",
                  )}
                >
                  <p className="tw-text-sm lg:tw-text-base tw-font-bold tw-mb-0 tw-text-center">
                    {t("weHelpYou.contentItemBox.1")}
                  </p>
                  <div className="tw-w-[286px] tw-h-[144px] lg:tw-w-[238px] lg:tw-h-[120px] tw-rounded-t-2xl tw-overflow-hidden tw-mx-auto">
                    <Image
                      src={imgSellOnPhysical}
                      alt="imgSellOnPhysical"
                      className="tw-w-full tw-h-full"
                    />
                  </div>
                </div>
                <div
                  style={{
                    background: "rgba(255, 255, 255, 0.60)",
                  }}
                  className={clsx(
                    "tw-border hover:tw-border-[#B1D1F6] hover:tw-shadow-[0px_8px_16px_0px_rgba(0,_0,_0,_0.05)]",
                    "lg:tw-w-[65%] tw-pt-6 tw-pl-6 lg:tw-pt-[10px] tw-rounded-2xl",
                    "tw-flex tw-flex-col lg:tw-flex-row tw-gap-4 tw-justify-between lg:tw-items-center",
                  )}
                >
                  <p className="tw-text-sm lg:tw-text-base tw-font-bold tw-mb-0 tw-text-center">
                    {t("weHelpYou.contentItemBox.2")}
                  </p>
                  <div className="tw-min-w-[222px] tw-h-[142px] lg:tw-w-[310px] lg:tw-h-[182px]">
                    <Image
                      src={imgSellOnSocial}
                      alt="imgSellOnSocial"
                      className="tw-w-full tw-h-full"
                    />
                  </div>
                </div>
              </div>

              <div
                style={{
                  background: "rgba(255, 255, 255, 0.60)",
                }}
                className={clsx(
                  "tw-border hover:tw-border-[#B1D1F6] hover:tw-shadow-[0px_8px_16px_0px_rgba(0,_0,_0,_0.05)]",
                  "tw-pt-6 tw-px-5 lg:px-6 lg:tw-pt-[10px] tw-rounded-2xl",
                  "tw-flex tw-flex-col lg:tw-flex-row gap-4 lg:tw-gap-6 lg:tw-items-center",
                )}
              >
                <p className="tw-text-sm lg:tw-text-base tw-font-bold tw-mb-0 tw-text-center">
                  {t("weHelpYou.contentItemBox.3")}
                </p>
                <div className="tw-w-[318px] tw-h-[115px] lg:tw-w-[381px] lg:tw-h-[127px] tw-mx-auto">
                  <Image
                    src={imgSellOnEcommerce}
                    alt="imgSellOnEcommerce"
                    className="tw-w-full tw-h-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
