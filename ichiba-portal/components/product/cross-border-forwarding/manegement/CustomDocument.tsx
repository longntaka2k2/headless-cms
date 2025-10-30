/* eslint-disable react-hooks/exhaustive-deps */
import { useTranslation } from "next-i18next";
import React from "react";
import Image from "next/image";
import clsx from "clsx";

export default function CustomDocument() {
  const { t } = useTranslation("cross-border-forwarding");

  return (
    <div
      className={clsx(
        "tw-flex tw-flex-col tw-gap-6 tw-rounded-xl lg:tw-rounded-2xl",
        "tw-border tw-border-[#F2F2F2] tw-bg-[#FFFCFA] tw-overflow-hidden",
      )}
    >
      <div className="lg:tw-gap-10 tw-p-4 lg:tw-p-10">
        <h3 className="tw-text-lg lg:tw-text-2xl tw-mb-2 lg:tw-mb-5 tw-font-bold">
          {t("management.items.1.title")}
        </h3>
        <p className="tw-text-sm lg:tw-text-base tw-mb-0">
          {t("management.items.1.subTitle")}
        </p>
      </div>

      <Image
        src={
          "https://cms-strapi.ichiba.net/uploads/Frame_1171276799_76c1700635.svg"
        }
        width={690}
        height={337}
        className="tw-w-full tw-mx-auto"
        alt="#"
      />
    </div>
  );
}
