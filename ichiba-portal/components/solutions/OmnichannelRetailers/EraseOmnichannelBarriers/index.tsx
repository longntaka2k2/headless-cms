import { LocaleNamespace } from "@/const/locale";
import React from "react";
import { useTranslation } from "next-i18next";
import MobileList from "./MobileList";
import DesktopList from "./DesktopList";

const EraseOmnichannelBarriers = () => {
  const { t } = useTranslation(LocaleNamespace.OmnichannelRetailers);

  return (
    <div>
      <div className="container">
        <div className="tw-py-6 xl:tw-py-10">
          <div className="tw-max-w-[792px] tw-mx-auto tw-text-center">
            <h3 className="tw-mb-2 tw-text-2xl xl:tw-text-4xl tw-font-bold">
              {t("eraseBarriers.title")}
            </h3>
            <span
              dangerouslySetInnerHTML={{ __html: t("eraseBarriers.content") }}
            />
          </div>
        </div>
      </div>
      <div className="tw-mt-6">
        <MobileList />
        <DesktopList />
      </div>
    </div>
  );
};

export default EraseOmnichannelBarriers;
