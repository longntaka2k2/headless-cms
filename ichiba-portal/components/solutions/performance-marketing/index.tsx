import { useTranslation } from "next-i18next";
import { Kickstart } from "./Kickstart";
import { ApplyinAgile } from "./applying-agile";
import { HelpYou } from "./help-you";
import { MarketingMeasurement } from "./makerting-measurement";
import { OurResults } from "./our-results";
import { SuccessfulCustomers } from "./successful-customers";
import { WhatWeOffer } from "./what-we-offer";

import bgPromote from "@/public/solutions/performance-marketing/bg-promote.png";
import Link from "next/link";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const PerformanceMarketing = () => {
  const { t } = useTranslation("performance-marketing");
  return (
    <>
      <Kickstart />
      <WhatWeOffer />
      <MarketingMeasurement />
      <OurResults />
      <HelpYou />
      <ApplyinAgile />
      {/* <SuccessfulCustomers /> */}
      <section className="tw-container tw-mb-6 lg:tw-mb-20">
        <div
          style={{
            backgroundImage: `url(${bgPromote.src})`,
          }}
          className="tw-rounded-2xl tw-py-6 lg:tw-py-10 tw-px-5 lg:tw-px-0 tw-bg-cover"
        >
          <p className="tw-mb-0 tw-text-xl lg:tw-text-3xl tw-font-bold tw-text-center lg:tw-w-[50%] tw-mx-auto">
            {t("promoteAndSell")}
          </p>
          <Link
            target="_blank"
            href="/contact-sales"
            className="tw-text-sm tw-block tw-no-underline tw-mt-6 tw-w-max tw-mx-auto tw-font-medium tw-rounded-lg tw-bg-[#F57C00] tw-px-4 lg:tw-px-6 tw-py-3 tw-text-white"
          >
            {t("contact")}{" "}
            <FontAwesomeIcon icon={faArrowRight} className="tw-ml-2" />
          </Link>
        </div>
      </section>
    </>
  );
};
