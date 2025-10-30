import SvgIcon from "@/components/common/SvgIcon";
import Image from "next/image";
import imageBuild from "@/public/solutions/performance-marketing/imageBuild.png";
import seoService from "@/public/solutions/performance-marketing/seo-service.png";
import socialMedia from "@/public/solutions/performance-marketing/social-media.png";
import payPer from "@/public/solutions/performance-marketing/img-payper.png";
import emailMarketing from "@/public/solutions/performance-marketing/email-marketing.png";
import bgInfluencer from "@/public/solutions/performance-marketing/bg-influencer.png";
import influencer from "@/public/solutions/performance-marketing/influencer.png";
import clsx from "clsx";
import { useTranslation } from "next-i18next";

export const WhatWeOffer = () => {
  const { t } = useTranslation("performance-marketing");
  return (
    <section className="tw-container tw-grid tw-gap-6 lg:tw-gap-15 tw-mb-20 lg:tw-mb-[120px]">
      <h2 className="tw-mb-0 tw-text-2xl lg:tw-text-4xl tw-font-bold tw-text-center">
        {t("weOffer.title")}
      </h2>

      <div className="tw-flex tw-flex-col-reverse lg:tw-flex-row tw-items-center tw-gap-4 lg:tw-gap-10">
        <div className="lg:tw-w-[60%] tw-rounded-lg lg:tw-rounded-2xl tw-overflow-hidden">
          <Image
            src={"https://cms-strapi.ichiba.net/uploads/image_Build_0145cde2af.png"}
            width={897}
            height={615}
            alt="imageBuild"
            className="tw-w-full tw-h-full"
          />
        </div>

        <div className="lg:tw-w-[40%]">
          <div className="tw-grid tw-gap-2 lg:tw-gap-5">
            <h3 className="tw-text-lg lg:tw-text-2xl tw-font-bold tw-mb-0">
              1. {t("weOffer.buildWeb.title")}
            </h3>
            <div
              className={clsx(
                "tw-flex lg:tw-flex-col tw-gap-3 lg:tw-gap-4 tw-rounded-lg tw-overflow-hidden",
                "tw-py-3 tw-px-5 lg:tw-py-5 lg:tw-px-6 tw-border tw-relative",
              )}
            >
              <div>
                <SvgIcon
                  icon="svg-icon-build"
                  width={22}
                  height={24}
                  className="lg:tw-hidden"
                />
                <SvgIcon
                  icon="svg-icon-build"
                  width={26}
                  height={28}
                  className="tw-hidden lg:tw-block"
                />
              </div>
              <p className="tw-text-sm lg:tw-text-base tw-mb-0 tw-line-clamp-3">
                {t("weOffer.buildWeb.subTitle.0")}
              </p>
              <div className="tw-absolute tw-h-full tw-w-[6px] tw-bg-gradient-to-t tw-from-[#3B4DAB] tw-to-[#5DBFDE] tw-top-0 tw-left-0"></div>
            </div>
            <div
              className={clsx(
                "tw-flex lg:tw-flex-col tw-gap-3 lg:tw-gap-4 tw-rounded-lg tw-overflow-hidden",
                "tw-py-3 tw-px-5 lg:tw-py-5 lg:tw-px-6 tw-border tw-relative",
              )}
            >
              <div>
                <SvgIcon
                  icon="svg-icon-build"
                  width={22}
                  height={24}
                  className="lg:tw-hidden"
                />
                <SvgIcon
                  icon="svg-icon-build"
                  width={26}
                  height={28}
                  className="tw-hidden lg:tw-block"
                />
              </div>
              <p className="tw-text-sm lg:tw-text-base tw-mb-0">
                {t("weOffer.buildWeb.subTitle.1")}
              </p>
              <div className="tw-absolute tw-h-full tw-w-[6px] tw-bg-gradient-to-t tw-from-[#3B4DAB] tw-to-[#5DBFDE] tw-top-0 tw-left-0"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="tw-flex tw-flex-col lg:tw-flex-row tw-gap-10 lg:tw-gap-20">
        <div className="lg:tw-w-[45%] tw-p-4 lg:tw-p-6 lg:tw-text-2xl tw-grid tw-bg-[#F8F8FB] tw-rounded-lg lg:tw-rounded-2xl tw-h-full">
          <div className="tw-mb-4">
            <h3 className="tw-text-lg lg:tw-text-2xl tw-font-bold tw-mb-4 lg:tw-mb-6">
              2. {t("weOffer.seoService.title")}
            </h3>
            <p className="tw-text-sm lg:tw-text-base tw-mb-0">
              {t("weOffer.seoService.subTitle")}
            </p>
          </div>

          <div className="tw-relative tw-w-full tw-h-[171px] lg:tw-h-[195px]">
            <div
              className={clsx(
                "tw-absolute tw-left-[50%] tw-translate-x-[-50%]",
                "tw-w-[326px] tw-h-[215px] lg:tw-w-[484px] lg:tw-h-[274px] tw-rounded-lg tw-overflow-hidden",
              )}
            >
              <Image
                src={seoService}
                alt="seoService"
                className="tw-w-full tw-h-full"
              />
            </div>
          </div>
        </div>

        <div className="lg:tw-w-[55%] tw-grid tw-gap-4 lg:tw-gap-7">
          <div className="w-full tw-h-[313px] lg:tw-h-[313px] tw-rounded-lg lg:tw-rounded-2xl tw-overflow-hidden">
            <Image
              src={socialMedia}
              alt="socialMedia"
              className="tw-w-full tw-h-full"
            />
          </div>
          <div>
            <h3 className="tw-text-lg lg:tw-text-2xl tw-font-bold tw-mb-4 lg:tw-mb-6">
              3. {t("weOffer.socialMedia.title")}
            </h3>
            <p className="tw-text-sm lg:tw-text-base tw-pl-6 lg:tw-pl-10">
              {t("weOffer.socialMedia.subTitle")}
            </p>
          </div>
        </div>
      </div>

      <div>
        <h3 className="tw-text-lg lg:tw-text-2xl tw-font-bold tw-mb-4 lg:tw-mb-6">
          4. {t("weOffer.payPer.title")}
        </h3>

        <div className="tw-flex tw-flex-col lg:tw-flex-row tw-gap-6 lg:tw-gap-15 lg:tw-items-center">
          <div className="lg:tw-w-[45%] lg:tw-h-[274px] tw-rounded-lg tw-overflow-hidden">
            <Image src={payPer} alt="payPer" className="tw-w-full tw-h-full" />
          </div>
          <div className="lg:tw-w-[55%] tw-grid tw-gap-4 lg:tw-gap-10">
            <div className="tw-flex tw-items-center tw-gap-3 lg:tw-gap-5">
              <div>
                <SvgIcon
                  icon="svg-automation"
                  width={40}
                  height={40}
                  className="lg:tw-hidden"
                />
                <SvgIcon
                  icon="svg-automation"
                  width={48}
                  height={48}
                  className="tw-hidden lg:tw-block"
                />
              </div>
              <p className="tw-mb-0 tw-text-sm lg:tw-text-base">
                {t("weOffer.payPer.subTitle.0")}
              </p>
            </div>
            <div className="tw-flex tw-items-center tw-gap-3 lg:tw-gap-5">
              <div>
                <SvgIcon
                  icon="svg-automation"
                  width={40}
                  height={40}
                  className="lg:tw-hidden"
                />
                <SvgIcon
                  icon="svg-automation"
                  width={48}
                  height={48}
                  className="tw-hidden lg:tw-block"
                />
              </div>
              <p className="tw-mb-0 tw-text-sm lg:tw-text-base">
                {t("weOffer.payPer.subTitle.1")}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="tw-bg-[#F3F7FE] tw-grid tw-gap-5 lg:tw-gap-11 tw-pt-4 lg:tw-pt-8 tw-rounded-lg lg:tw-rounded-xl tw-overflow-hidden">
        <div className="lg:tw-w-[50%] tw-px-4 tw-text-center tw-mx-auto">
          <h3 className="tw-text-lg lg:tw-text-2xl tw-font-bold tw-mb-4 lg:tw-mb-6">
            5. {t("weOffer.emailMarketing.title")}
          </h3>
          <p className="tw-mb-0 tw-text-sm lg:tw-text-base">
            {t("weOffer.emailMarketing.subTitle.0")}
          </p>
          <p className="tw-mb-0 tw-text-sm lg:tw-text-base">
            {t("weOffer.emailMarketing.subTitle.1")}
          </p>
        </div>
        <div className="tw-w-full tw-h-[129px] lg:tw-h-[315px] tw-px-2 lg:tw-px-[100px]">
          <Image
            src={emailMarketing}
            alt="emailMarketing"
            className="tw-w-full tw-h-full"
          />
        </div>
      </div>

      <div
        className={clsx(
          "tw-grid lg:tw-grid-cols-2 lg:tw-items-center",
          "tw-border tw-border-blue-1 tw-rounded-lg lg:t w-rounded-2xl",
        )}
        style={{
          backgroundImage: `url(${bgInfluencer.src})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "right",
        }}
      >
        <div className="tw-pt-4 tw-px-4 lg:tw-pl-15">
          <h3 className="tw-text-lg lg:tw-text-2xl tw-font-bold tw-mb-4 lg:tw-mb-6">
            6. {t("weOffer.influencerMarketing.title")}
          </h3>
          <p className="tw-text-sm lg:tw-text-base tw-pl-6 lg:tw-pl-10">
            {t("weOffer.influencerMarketing.subTitle")}
          </p>
        </div>
        <div className="tw-relative tw-w-full tw-h-[274px] lg:tw-h-[320px]">
          <div
            className={clsx(
              "tw-absolute tw-left-[50%] tw-translate-x-[-50%]",
              "tw-w-[320px] tw-h-[351px] lg:tw-w-[400px] lg:tw-h-[439px]",
            )}
          >
            <Image
              src={influencer}
              alt="influencer"
              className="tw-w-full tw-h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
