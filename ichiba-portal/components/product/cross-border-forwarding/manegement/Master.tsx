/* eslint-disable react-hooks/exhaustive-deps */
import { useTranslation } from "next-i18next";
import React from "react";
import Image from "next/image";
import clsx from "clsx";

export default function Master() {
  const { t } = useTranslation("cross-border-forwarding");

  return (
    <div
      className={clsx(
        "tw-grid lg:tw-grid-cols-2 tw-items-center tw-gap-4 lg:tw-gap-5",
      )}
    >
      <Image
        src={
          "https://cms-strapi.ichiba.net/uploads/Frame_1171276043_ef1ff1bac3.svg"
        }
        width={577}
        height={350}
        className="tw-mx-auto"
        alt="#"
      />
      <div
        className={clsx(
          "tw-py-6 tw-px-4 tw-rounded-xl tw-bg-[#1B3775] tw-h-full tw-text-white",
          "lg:tw-py-10 lg:tw-px-15 lg:tw-rounded-2xl",
          "tw-flex tw-flex-col tw-justify-center" // Added flex and vertical centering
        )}
      >
        <h3 className="tw-text-lg lg:tw-text-2xl tw-mb-2 lg:tw-mb-5 tw-font-bold">
          {t("management.items.3.title")}
        </h3>
        <p className="tw-text-sm lg:tw-text-base tw-mb-0">
          {t("management.items.3.subTitle")}
        </p>
      </div>
    </div>
  );
}
