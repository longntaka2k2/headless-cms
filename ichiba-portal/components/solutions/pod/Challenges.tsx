import { useTranslation } from "next-i18next";
import { HeroSlidePODMobile } from "@/components/solutions/pod/banner-pod/HeroSlideMobile";
import { HeroSlidePOD } from "@/components/solutions/pod/banner-pod/HeroSlide";
import clsx from "clsx";
import Link from "next/link";
import Image from "next/image";

export const Challenges = () => {
  const { t } = useTranslation("pod");
  return (
    <section
      className={clsx(
        "tw-container tw-px-4 xl:tw-px-0 tw-py-6 lg:tw-pt-15 lg:tw-pb-10",
      )}
    >
      <p className="tw-text-center tw-font-medium tw-text-sm lg:tw-text-base tw-text-brand-primary tw-uppercase tw-mb-2">
        {t("challenges.label")}
      </p>
      <h2 className="tw-relative tw-w-full tw-text-2xl lg:tw-text-4xl tw-font-bold tw-text-center tw-leading-8 lg:tw-leading-[48px] tw-mb-6 lg:tw-mb-10">
        <span className="tw-relative">
          {t("challenges.heading.0")}
          <Image
            src={
              "https://cms-strapi.ichiba.net/uploads/yellow_highlight_bold_05_8c1a7d34c2.svg"
            }
            width={200}
            height={20}
            className="tw-absolute -tw-bottom-3 lg:-tw-bottom-4 tw-left-0 -tw-z-1"
            alt="#"
          />
        </span>
        {t("challenges.heading.1")}
      </h2>

      <div className="lg:tw-relative tw-grid tw-gap-4 lg:tw-pb-28">
        <div
          className={clsx(
            "lg:tw-w-[438px] tw-p-3 lg:tw-p-4 tw-rounded-lg tw-bg-white lg:tw-rounded-xl tw-relative tw-group tw-cursor-pointer",
            "tw-flex tw-gap-3 lg:tw-gap-4 tw-border tw-border-primary-2 hover:tw-border-brand-primary",
            "lg:tw-absolute tw-top-0 tw-left-0",
          )}
        >
          <div className="tw-relative">
            <Image
              src={`https://cms-strapi.ichiba.net${t(
                "challenges.items.0.icon",
              )}`}
              width={48}
              height={48}
              className="tw-transition-opacity tw-duration-300 group-hover:tw-opacity-0"
              alt="icon"
            />
            <Image
              src={`https://cms-strapi.ichiba.net${t(
                "challenges.items.0.iconActive",
              )}`}
              width={48}
              height={48}
              className="tw-absolute tw-top-0 tw-left-0 tw-opacity-0 tw-transition-opacity tw-duration-300 group-hover:tw-opacity-100"
              alt="active icon"
            />
          </div>
          <p className="tw-text-sm lg:tw-text-base tw-mb-0">
            {t("challenges.items.0.title")}
          </p>
        </div>

        <div
          className={clsx(
            "lg:tw-w-[438px] tw-p-3 lg:tw-p-4 tw-rounded-lg tw-bg-white lg:tw-rounded-xl tw-relative tw-group tw-cursor-pointer",
            "tw-flex tw-gap-3 lg:tw-gap-4 tw-border tw-border-primary-2 hover:tw-border-brand-primary",
            "lg:tw-absolute lg:tw-top-[40%] lg:tw-left-0",
          )}
        >
          <div className="tw-relative">
            <Image
              src={`https://cms-strapi.ichiba.net${t(
                "challenges.items.1.icon",
              )}`}
              width={48}
              height={48}
              className="tw-transition-opacity tw-duration-300 group-hover:tw-opacity-0"
              alt="icon"
            />
            <Image
              src={`https://cms-strapi.ichiba.net${t(
                "challenges.items.1.iconActive",
              )}`}
              width={48}
              height={48}
              className="tw-absolute tw-top-0 tw-left-0 tw-opacity-0 tw-transition-opacity tw-duration-300 group-hover:tw-opacity-100"
              alt="active icon"
            />
          </div>
          <p className="tw-text-sm lg:tw-text-base tw-mb-0">
            {t("challenges.items.1.title")}
          </p>
        </div>

        <Image
          src={
            "https://cms-strapi.ichiba.net/uploads/Group_19293_f244ec9e0e.svg"
          }
          width={404}
          height={415}
          className="tw-mx-auto"
          alt="image"
        />

        <div
          className={clsx(
            "lg:tw-w-[438px] tw-p-3 lg:tw-p-4 tw-rounded-lg tw-bg-white lg:tw-rounded-xl tw-relative tw-group tw-cursor-pointer",
            "tw-flex tw-gap-3 lg:tw-gap-4 tw-border tw-border-primary-2 hover:tw-border-brand-primary",
            "lg:tw-absolute lg:tw-bottom-0 lg:tw-left-[50%] lg:tw-translate-x-[-50%]",
          )}
        >
          <div className="tw-relative">
            <Image
              src={`https://cms-strapi.ichiba.net${t(
                "challenges.items.2.icon",
              )}`}
              width={48}
              height={48}
              className="tw-transition-opacity tw-duration-300 group-hover:tw-opacity-0"
              alt="icon"
            />
            <Image
              src={`https://cms-strapi.ichiba.net${t(
                "challenges.items.2.iconActive",
              )}`}
              width={48}
              height={48}
              className="tw-absolute tw-top-0 tw-left-0 tw-opacity-0 tw-transition-opacity tw-duration-300 group-hover:tw-opacity-100"
              alt="active icon"
            />
          </div>
          <p className="tw-text-sm lg:tw-text-base tw-mb-0">
            {t("challenges.items.2.title")}
          </p>
        </div>

        <div
          className={clsx(
            "lg:tw-w-[438px] tw-p-3 lg:tw-p-4 tw-rounded-lg tw-bg-white lg:tw-rounded-xl tw-relative tw-group tw-cursor-pointer",
            "tw-flex tw-gap-3 lg:tw-gap-4 tw-border tw-border-primary-2 hover:tw-border-brand-primary",
            "lg:tw-absolute lg:tw-top-0 lg:tw-right-0",
          )}
        >
          <div className="tw-relative">
            <Image
              src={`https://cms-strapi.ichiba.net${t(
                "challenges.items.3.icon",
              )}`}
              width={48}
              height={48}
              className="tw-transition-opacity tw-duration-300 group-hover:tw-opacity-0"
              alt="icon"
            />
            <Image
              src={`https://cms-strapi.ichiba.net${t(
                "challenges.items.3.iconActive",
              )}`}
              width={48}
              height={48}
              className="tw-absolute tw-top-0 tw-left-0 tw-opacity-0 tw-transition-opacity tw-duration-300 group-hover:tw-opacity-100"
              alt="active icon"
            />
          </div>
          <p className="tw-text-sm lg:tw-text-base tw-mb-0">
            {t("challenges.items.3.title")}
          </p>
        </div>

        <div
          className={clsx(
            "lg:tw-w-[438px] tw-p-3 lg:tw-p-4 tw-rounded-lg tw-bg-white lg:tw-rounded-xl tw-relative tw-group tw-cursor-pointer",
            "tw-flex tw-gap-3 lg:tw-gap-4 tw-border tw-border-primary-2 hover:tw-border-brand-primary",
            "lg:tw-absolute lg:tw-top-[40%] lg:tw-right-0",
          )}
        >
          <div className="tw-relative">
            <Image
              src={`https://cms-strapi.ichiba.net${t(
                "challenges.items.4.icon",
              )}`}
              width={48}
              height={48}
              className="tw-transition-opacity tw-duration-300 group-hover:tw-opacity-0"
              alt="icon"
            />
            <Image
              src={`https://cms-strapi.ichiba.net${t(
                "challenges.items.4.iconActive",
              )}`}
              width={48}
              height={48}
              className="tw-absolute tw-top-0 tw-left-0 tw-opacity-0 tw-transition-opacity tw-duration-300 group-hover:tw-opacity-100"
              alt="active icon"
            />
          </div>
          <p className="tw-text-sm lg:tw-text-base tw-mb-0">
            {t("challenges.items.4.title")}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Challenges;
