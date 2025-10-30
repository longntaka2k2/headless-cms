import React from "react";
import PimSection from "../section";
import Image from "next/image";
import { useTranslation } from "next-i18next";
import Link from "next/link";

const image = {
  cover:
    "https://cms-strapi.ichiba.net/uploads/Integration_and_Partnership_64ff1209fb.png",
};

const IntegrationAndPartnership = () => {
  const { t } = useTranslation("pim");

  return (
    <div className="container">
      <PimSection
        title={t("integrationTitle")}
        subTitle={t("integrationSubtitle").toString()}
      >
        <div className="tw-flex tw-flex-col tw-gap-10 tw-items-center">
          <Image
            width={1134}
            height={540}
            alt="integrationTitle"
            src={image.cover}
          />
          <Link
            href="/products/integrations"
            target="_blank"
            className="tw-bg-brand-primary tw-text-white tw-p-3 tw-w-max tw-min-w-[228px] tw-rounded-lg tw-text-center tw-no-underline"
            rel="canonical"
          >
            {t("viewAllIntegrations")}
          </Link>
        </div>
      </PimSection>
    </div>
  );
};

export default IntegrationAndPartnership;
