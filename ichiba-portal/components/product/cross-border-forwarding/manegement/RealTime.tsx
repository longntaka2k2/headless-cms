/* eslint-disable react-hooks/exhaustive-deps */
import { useTranslation } from "next-i18next";
import React from "react";
import Image from "next/image";
import clsx from "clsx";

export default function RealTime() {
  const { t } = useTranslation("cross-border-forwarding");

  return (
    <div
      className={clsx(
        "tw-relative tw-flex tw-flex-col tw-h-full tw-justify-between tw-rounded-xl lg:tw-rounded-2xl",
        "tw-border tw-border-[#DDD]",
        "tw-bg-[linear-gradient(226deg,_rgba(255,_255,_255,_0.00)_38.12%,_#FBE7FF_106.09%)]",
      )}
    >
      <div className="lg:tw-gap-10 tw-p-4 lg:tw-p-10">
        <h3 className="tw-text-lg lg:tw-text-2xl tw-mb-2 lg:tw-mb-5 tw-font-bold">
          {t("management.items.2.title")}
        </h3>
        <p className="tw-text-sm lg:tw-text-base tw-mb-0">
          {t("management.items.2.subTitle")}
        </p>
      </div>

      <div className="tw-mt-auto">
        <Image
          src={
            "https://cms-strapi.ichiba.net/uploads/Frame_1171276798_43ff035399.svg"
          }
          width={476}
          height={300}
          className="tw-mr-auto"
          alt="#"
        />
      </div>

      <Image
        src={
          "https://cms-strapi.ichiba.net/uploads/Group_1171275897_03622af041.svg"
        }
        width={204}
        height={303}
        className={clsx(
          "tw-absolute tw-w-[150px] tw-h-[220px] tw-right-[20px] -tw-bottom-[15px]",
          "lg:tw-w-[204px] lg:tw-h-[303px] lg:tw-right-[45px] lg:-tw-bottom-[23px]",
        )}
        alt="#"
      />
    </div>
  );
}
