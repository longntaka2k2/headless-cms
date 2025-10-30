import { useTranslation } from "next-i18next";
import { HeroSlidePODMobile } from "@/components/solutions/pod/banner-pod/HeroSlideMobile";
import { HeroSlidePOD } from "@/components/solutions/pod/banner-pod/HeroSlide";
import clsx from "clsx";
import Link from "next/link";
import Image from "next/image";

export const BannerPOD = () => {
  const { t } = useTranslation("pod");
  return (
    <section
      className={clsx(
        "tw-bg-[linear-gradient(178deg,_#FFF3E8_-3.11%,_rgba(215,_229,_255,_0.80)_42.38%,_#FEFFFF_91.53%)]",
        "tw-grid tw-gap-6 lg:tw-gap-15 tw-pt-6 tw-pb-10 lg:tw-pt-20 lg:tw-pb-9",
      )}
    >
      <div className="tw-container tw-grid tw-gap-6 lg:tw-gap-8">
        <div className=" tw-grid tw-text-center tw-gap-2 lg:tw-gap-4">
          <span className="tw-text-sm lg:tw-text-base tw-uppercase tw-text-brand-primary">
            {t("banner.label")}
          </span>
          <h1 className=" tw-text-2xl tw-font-bold lg:tw-text-5xl tw-leading-8 lg:tw-leading-[56px] tw-mb-0">
            {t("banner.heading.0")}
            <span className="tw-text-brand-primary">
              {t("banner.heading.1")}
            </span>
            {t("banner.heading.2")} <br />
            {t("banner.heading.3")}
          </h1>
          <span className="tw-text-sm lg:tw-text-base">
            {t("banner.subHeading")}
          </span>
        </div>
        <div className="tw-grid tw-gap-8 lg:tw-gap-9">
          <div className="tw-grid lg:tw-grid-cols-3 tw-gap-4 lg:tw-gap-6">
            {(
              t(`banner.items`, {
                returnObjects: true,
              }) as string[]
            ).map((value: any, index: number) => (
              <div
                key={index}
                className={clsx(
                  "tw-flex tw-gap-2 lg:tw-gap-3 tw-items-center tw-bg-[rgba(255,_255,_255,_0.60)]",
                  "tw-p-3 tw-rounded-xl",
                )}
              >
                <Image
                  src={`https://cms-strapi.ichiba.net${value.icon}`}
                  width={40}
                  height={40}
                  className="tw-w-[46px] tw-h-[46px] lg:tw-w-10 lg:tw-h-10"
                  alt="icon"
                />
                <span className="tw-text-sm lg:tw-text-base tw-font-medium">
                  {value.title}
                </span>
              </div>
            ))}
          </div>
          <Link
            // href={"/contact-sales"}
            href={"#"}
            className={clsx(
              "tw-text-center tw-no-underline tw-text-base tw-font-medium tw-bg-brand-primary tw-text-white",
              "tw-py-[14px] tw-px-5 lg:tw-px-3 tw-w-[180px] lg:tw-w-[200px] tw-rounded-lg tw-mx-auto",
            )}
          >
            {t("banner.textBtn")}
          </Link>
        </div>
      </div>
      <div className="lg:tw-hidden tw-overflow-hidden">
        <HeroSlidePODMobile />
      </div>
      <div className="tw-hidden lg:tw-block">
        <HeroSlidePOD />
      </div>
    </section>
  );
};

export default BannerPOD;
