import { LocaleNamespace } from "@/const/locale";
import React from "react";
import { useTranslation } from "next-i18next";
import AspectRatio from "@/components/core/aspect-ratio";
import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";

const Introduce = () => {
  const { t } = useTranslation(LocaleNamespace.OmnichannelRetailers);

  return (
    <div
      className={clsx(
        "tw-bg-cover tw-bg-no-repeat",
        "tw-bg-[url('https://cms-strapi.ichiba.net/uploads/background_61c24f1415.webp')]",
      )}
    >
      <div className="container">
        <div className="tw-grid tw-grid-cols-1 md:tw-grid-cols-2 tw-gap-6 xl:tw-gap-4 tw-py-6 xl:tw-py-5">
          <div className="tw-flex-1 tw-flex tw-flex-col tw-justify-center">
            <h1 className="tw-text-2xl lg:tw-text-3xl xl:tw-text-4xl tw-mb-0 tw-font-bold">
              {t("introduce.title")}
            </h1>
            <span className="tw-mt-4 xl:tw-mt-6">
              {t("introduce.content1")}
            </span>
            <span className="tw-mt-4">{t("introduce.content2")}</span>
            <Link
              href="/contact-sales"
              target="_blank"
              rel="noreferrer canonical"
              className={clsx(
                "!tw-relative tw-rounded-lg tw-font-medium tw-px-3 tw-text-white tw-bg-brand-primary tw-no-underline tw-flex tw-items-center tw-justify-center",
                "tw-w-max tw-min-w-[128px] lg:tw-min-w-[220px] tw-mt-6 xl:tw-mt-12 tw-h-12 lg:tw-h-14 lg:tw-text-xl",
              )}
            >
              {t("speakToExperts")}
            </Link>
          </div>
          <div className="xl:tw-pl-2">
            <div className="tw-relative tw-w-full tw-h-full">
              <Image
                alt=""
                src="https://cms-strapi.ichiba.net/uploads/banner_2b4223e743.webp"
                className="tw-object-cover tw-rounded-xl"
                unoptimized
                width={515}
                height={493}
                quality={100}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Introduce;
