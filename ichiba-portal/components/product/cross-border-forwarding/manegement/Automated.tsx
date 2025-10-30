/* eslint-disable react-hooks/exhaustive-deps */
import { useTranslation } from "next-i18next";
import React from "react";
import Image from "next/image";
import clsx from "clsx";

export default function Automated() {
  const { t } = useTranslation("cross-border-forwarding");

  return (
    <div className="tw-relative">
      <Image
        src={"https://cms-strapi.ichiba.net/uploads/Section_1_dd69a4310b.svg"}
        width={1200}
        height={490}
        className="tw-w-full tw-rounded-lg tw-hidden lg:tw-block"
        alt="#"
      />

      <div className="lg:tw-max-w-[556px] lg:tw-absolute lg:tw-top-20 lg:tw-right-[2%] xl:tw-right-[5%] tw-mb-6 lg:tw-mb-0">
        <h3 className="tw-text-lg lg:tw-text-2xl tw-mb-2 lg:tw-mb-5 tw-font-bold">
          {t("management.items.0.title")}
        </h3>
        <p className="tw-text-sm lg:tw-text-base tw-mb-0">
          {t("management.items.0.subTitle")}
        </p>
      </div>

      <Image
        src={
          "https://cms-strapi.ichiba.net/uploads/Group_1171276439_ef7f9f8395.svg"
        }
        width={358}
        height={182}
        className="tw-mx-auto tw-rounded-lg lg:tw-hidden"
        alt="#"
      />
    </div>
  );
}
