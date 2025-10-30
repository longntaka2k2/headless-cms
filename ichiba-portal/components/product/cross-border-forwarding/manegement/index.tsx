/* eslint-disable react-hooks/exhaustive-deps */
import { useTranslation } from "next-i18next";
import React from "react";
import clsx from "clsx";
import Automated from "./Automated";
import CustomDocument from "./CustomDocument";
import RealTime from "./RealTime";
import Master from "./Master";
import Electronic from "./Electronic";

export default function Management() {
  const { t } = useTranslation("cross-border-forwarding");

  return (
    <div className="tw-container tw-py-6 lg:tw-py-20 tw-px-4">
      <h2
        className={clsx(
          "tw-text-2xl lg:tw-text-4xl tw-font-bold tw-mb-6 lg:tw-mb-12 tw-text-center",
        )}
      >
        {t("management.heading")}
      </h2>
      <div className="tw-grid tw-gap-6 lg:tw-gap-10">
        <Automated />
        <div className="tw-grid lg:tw-grid-cols-5 tw-gap-6">
          <div className="lg:tw-col-span-3 tw-h-full">
            <div className="tw-h-full">
              <CustomDocument />
            </div>
          </div>
          <div className="lg:tw-col-span-2 tw-h-full">
            <div className="tw-h-full">
              <RealTime />
            </div>
          </div>
        </div>
        <Master />
        <Electronic />
      </div>
    </div>
  );
}
