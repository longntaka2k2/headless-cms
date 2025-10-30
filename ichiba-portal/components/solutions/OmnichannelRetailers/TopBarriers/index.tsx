import { LocaleNamespace } from "@/const/locale";
import React from "react";
import { useTranslation } from "next-i18next";
import clsx from "clsx";
import BarriersListDesktop from "./BarriersListDesktop";
import BarriersListMobile from "./BarriersListMobile";

const TopBarriers = () => {
  const { t } = useTranslation(LocaleNamespace.OmnichannelRetailers);

  return (
    <div
      className={clsx("tw-text-white !tw-bg-center tw-py-6 xl:tw-py-10")}
      style={{
        background:
          "linear-gradient(0deg, rgba(0, 25, 79, 0.90) 0%, rgba(0, 25, 79, 0.90) 100%), url('https://cms-strapi.ichiba.net/uploads/background_d5b7af117b.webp'), lightgray -376.894px -396.628px / 119.619% 200.407% no-repeat",
      }}
    >
      <div className="container">
        <div className="tw-max-w-[792px] tw-mx-auto tw-text-center">
          <h3
            className="tw-text-2xl xl:tw-text-4xl tw-font-bold"
            dangerouslySetInnerHTML={{
              __html: t("topBarriers.title"),
            }}
          />
        </div>
      </div>
      <BarriersListDesktop />
      <BarriersListMobile />
    </div>
  );
};

export default TopBarriers;
