/* eslint-disable react-hooks/exhaustive-deps */
import { useTranslation } from "next-i18next";
import React from "react";
import Image from "next/image";
import clsx from "clsx";

export default function Electronic() {
  const { t } = useTranslation("cross-border-forwarding");

  return (
    <div
      className={clsx(
        "tw-grid lg:tw-grid-cols-2 tw-items-center tw-gap-4 lg:tw-gap-16 tw-border tw-border-[#B1D1F6] tw-rounded-xl lg:tw-rounded-2xl",
      )}
    >
      <Image
        src={
          "https://cms-strapi.ichiba.net/uploads/Frame_1171275978_c9647105b4.svg"
        }
        width={627}
        height={365}
        className="tw-mx-auto"
        alt="#"
      />
      <div
        className={clsx("lg:tw-pr-20 tw-px-4 tw-pb-6 lg:tw-pb-0 lg:tw-px-0 ")}
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
