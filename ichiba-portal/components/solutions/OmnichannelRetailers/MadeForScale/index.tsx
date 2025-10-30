import AspectRatio from "@/components/core/aspect-ratio";
import { LocaleNamespace } from "@/const/locale";
import React from "react";
import { useTranslation } from "next-i18next";
import clsx from "clsx";
import Link from "next/link";
import SvgIcon from "@/components/common/SvgIcon";

const MadeForScale = () => {
  const { t } = useTranslation(LocaleNamespace.OmnichannelRetailers);

  return (
    <div className="tw-py-6 xl:tw-py-10">
      <div className="container tw-text-white">
        <div
          className={clsx(
            "tw-p-5 tw-flex tw-flex-col tw-bg-center tw-bg-no-repeat tw-bg-cover tw-rounded-xl",
            "tw-bg-[url('https://cms-strapi.ichiba.net/uploads/background_5e1f4de0e2.png')]",
            "md:tw-px-10 md:tw-py-7",
            "xl:tw-px-14 xl:tw-py-9 xl:tw-min-h-[336px]",
          )}
        >
          <span className="tw-uppercase">{t("madeForScale.sectionName")}</span>
          <h4 className="tw-mb-0 tw-mt-3 tw-text-2xl md:tw-text-3xl xl:tw-text-4xl">
            {t("madeForScale.title")}
          </h4>
          <Link
            className="tw-mt-6 tw-no-underline tw-text-white tw-bg-brand-primary tw-w-max tw-p-3 tw-rounded-lg tw-font-medium tw-min-w-[200px] tw-flex tw-items-center tw-justify-center tw-gap-2"
            href="/contact-sales"
            passHref
            target="_blank"
          >
            {t("contactSales")}
            <SvgIcon icon="arrow" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MadeForScale;
