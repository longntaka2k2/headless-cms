import clsx from "clsx";
import { useTranslation } from "next-i18next";
import Link from "next/link";
import React from "react";

const HeroSection = () => {
  const { t: tCommerce } = useTranslation("commerce-layer");

  return (
    <div className="tw-py-6 lg:tw-py-15 tw-bg-[linear-gradient(188deg,_#C6DDFF_-95.27%,_#FFEDD8_-27.52%,_#FFF_45.69%)]">
      <div className="tw-container tw-animate-showOn tw-transition-all tw-duration-300">
        <p className="tw-text-sm lg:tw-text-base tw-font-medium tw-text-brand-secondary tw-uppercase tw-mb-4 lg:tw-mb-5 lg:tw-text-center">
          {tCommerce("heroSection.label")}
        </p>
        <h1 className="tw-text-2xl lg:tw-text-5xl lg:tw-leading-[56px] tw-font-bold tw-mb-4 lg:tw-mb-5 lg:tw-text-center">
          {tCommerce("heroSection.heading")}
        </h1>
        <p className="tw-text-sm lg:tw-text-base tw-mb-4 lg:tw-mb-10 lg:tw-text-center lg:tw-w-[90%] tw-mx-auto">
          {tCommerce("heroSection.subHeading")}
        </p>
        <div className="tw-flex lg:tw-justify-center tw-justify-start">
          <Link
            target="_blank"
            href={"/contact-sales"}
            className={clsx(
              "tw-no-underline tw-px-6 tw-py-3 tw-rounded-lg tw-bg-[#F57C00] tw-border tw-border-[#F57C00] tw-text-sm lg:tw-text-base",
              "tw-text-center tw-text-white",
            )}
          >
            {tCommerce("heroSection.textBtn")}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
