import SvgIcon from "@/components/common/SvgIcon";
import clsx from "clsx";
import { useTranslation } from "next-i18next";
import Image from "next/image";

const BannerPOS = () => {
  const { t } = useTranslation("pos");
  return (
    <div className="tw-px-4 lg:tw-px-[140px] tw-mt-6 lg:tw-mt-15 tw-mb-[130px] lg:tw-mb-[90px]">
      <div
        className={clsx(
          "tw-relative tw-bg-[url(https://cms-strapi.ichiba.net/uploads/Frame_1_1_49cf7bde49.svg)] tw-bg-cover",
          "tw-w-full tw-h-[362px] tw-rounded-2xl tw-pt-6 tw-px-4",
          "lg:tw-h-[640px] lg:tw-rounded-[28px] lg:tw-pt-15 -tw-z-1",
        )}
      >
        <div className="tw-text-center tw-grid tw-gap-3 lg:tw-gap-4">
          <p className="tw-mb-0 tw-uppercase tw-text-sm lg:tw-text-base tw-font-medium tw-text-brand-secondary">
            {t("feature.bannerFeature.label")}
          </p>
          <h1 className="tw-mb-0 tw-text-2xl lg:tw-text-3xl xl:tw-text-5xl tw-leading-8 lg:tw-leading-[56px] tw-font-bold lg:tw-max-w-[1029px] tw-mx-auto tw-text-center">
            {t("feature.bannerFeature.heading.0")} <br />{" "}
            {t("feature.bannerFeature.heading.1")}
          </h1>
          <p className="tw-mb-0 tw-text-sm lg:tw-text-base">
            {t("feature.bannerFeature.subHeading")}
          </p>
        </div>

        <div
          className={clsx(
            "tw-absolute tw-left-[50%] tw-translate-x-[-50%] tw-bottom-[-130px] lg:tw-bottom-[-90px] tw-group tw-cursor-pointer",
            "tw-w-[326px] tw-h-[280px] lg:tw-w-[993px] lg:tw-h-[435px] tw-rounded-lg lg:tw-rounded-3xl tw-overflow-hidden",
          )}
        >
          <Image
            src="https://cms-strapi.ichiba.net/uploads/video_1_78023b1a6b.svg"
            alt="video"
            width={993}
            height={435}
            className="tw-w-full tw-h-full tw-object-cover tw-object-left-top tw-relative"
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
              {t("feature.bannerFeature.seeFeatures")}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerPOS;
