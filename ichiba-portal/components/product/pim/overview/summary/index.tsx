import React from "react";
import { useTranslation } from "next-i18next";
import Image from "next/image";
import Statistical from "./components/Statistical";
import Link from "next/link";
import bannerImg from "@/public/icons/pim/bannerImage.webp";
import VideoComponent from "./videoComponent";
const image = {
  banner: {
    name: "Banner image",
    src: "https://cms-strapi.ichiba.net/uploads/Banner_image_b4667f34f7.svg",
  },
  summaryBg: {
    name: "background section 1",
    src: "https://cms-strapi.ichiba.net/uploads/background_section_1_2510fd1182.png",
  },
};

const PimSummary = () => {
  const { t } = useTranslation("pim");

  return (
    <div className="tw-font-normal tw-text-ic-ink-6 tw-relative tw-min-h-[768px] tw-flex tw-flex-col -tw-z-1">
      <div className="tw-grid tw-items-stretch tw-grid-cols-1 lg:tw-grid-cols-2 container tw-flex-1 tw-z-10 tw-py-6 xl:tw-py-0 !tw-px-4">
        <div className="tw-flex tw-flex-col tw-justify-center">
          <h1 className="tw-text-2xl md:tw-text-3xl lg:tw-text-[40px] lg:tw-leading-[48px] tw-font-bold tw-mb-0">
            {t("title")}
          </h1>
          <h2 className="tw-text-base tw-font-normal tw-mt-5 tw-mb-0">
            {t("subTitle")}
          </h2>
          <div className="tw-gap-6 tw-mt-12 tw-hidden lg:tw-flex">
            <Link
              href="/book-demo"
              target="_blank"
              rel="canonical"
              className="tw-min-w-[200px] tw-bg-brand-primary tw-px-3 tw-py-3.5 tw-rounded-lg tw-text-ic-white-6 tw-text-center tw-no-underline"
            >
              {t("getDemo")}
            </Link>
            <a
              target="_blank"
              rel="noreferrer nofollow"
              href="https://org.ichiba.net/"
              className="tw-min-w-[200px] tw-px-3 tw-py-3.5 tw-rounded-lg tw-text-brand-primary tw-border tw-border-brand-primary tw-text-center tw-no-underline"
            >
              {t("freeTrial")}
            </a>
          </div>
        </div>
        <div className="tw-gap-4 tw-mt-12 tw-flex lg:tw-hidden tw-justify-center">
          <Link
            href="/contact-sales"
            rel="canonical"
            className="tw-min-w-[170px] tw-bg-brand-primary tw-px-3 tw-py-3.5 tw-rounded-lg tw-text-ic-white-6 tw-font-medium tw-text-center tw-no-underline"
          >
            {t("getDemo")}
          </Link>
          <a
            target="_blank"
            rel="noreferrer nofollow"
            href="https://org.ichiba.net/"
            className="tw-min-w-[170px] tw-px-3 tw-py-3.5 tw-rounded-lg tw-text-brand-primary tw-border tw-border-brand-primary tw-font-medium tw-text-center tw-no-underline"
          >
            {t("freeTrial")}
          </a>
        </div>
        <div className="tw-flex tw-items-center">
          <VideoComponent />
        </div>
      </div>
      <Statistical />
      <Image
        src="/icons/pim/background-section.svg"
        width={846}
        height={540}
        alt="background-section"
        className="tw-absolute tw-top-0 tw-right-0 tw-z-0"
      />
    </div>
  );
};

export default PimSummary;
