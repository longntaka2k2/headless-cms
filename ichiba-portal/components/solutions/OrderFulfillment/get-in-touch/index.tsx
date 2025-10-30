import { LocaleNamespace } from "@/const/locale";
import clsx from "clsx";
import React from "react";
import { useTranslation } from "next-i18next";
import Link from "next/link";
import SvgIcon from "@/components/common/SvgIcon";

const GetInTouch = () => {
  const { t } = useTranslation(LocaleNamespace.OrderFulfillment);

  return (
    <div className="container">
      <div className="tw-py-16 tw-text-white">
        <div
          className={clsx(
            "md:tw-min-h-[336px] tw-flex tw-flex-col tw-bg-cover tw-bg-no-repeat tw-bg-center tw-rounded-xl tw-p-5 xl:tw-p-14 tw-justify-center",
            "tw-bg-[url('https://cms-strapi.ichiba.net/uploads/get_in_touch_bg_9d984f6632.webp')]",
          )}
        >
          <h5 className="tw-mb-3 xl:tw-mb-4 tw-text-2xl lg:tw-text-3xl xl:tw-text-4xl tw-font-bold">
            {t("getInTouch.title")}
          </h5>
          <span>{t("getInTouch.content")}</span>
          <Link
            className="tw-mt-6 tw-no-underline tw-text-white tw-bg-brand-primary tw-w-max tw-p-3 tw-rounded-lg tw-font-medium tw-min-w-[200px] tw-flex tw-items-center tw-justify-center tw-gap-2"
            href="/contact-sales"
            passHref
            target="_blank"
          >
            {t("getInTouchNow")}
            <SvgIcon icon="arrow" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;
