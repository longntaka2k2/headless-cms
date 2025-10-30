import { LocaleNamespace } from "@/const/locale";
import React from "react";
import { useTranslation } from "next-i18next";
import ListDesktop from "./ListDesktop";
import ListMobile from "./ListMobile";

const WhyChoose = () => {
  const { t } = useTranslation(LocaleNamespace.EcommerceFulfillment);

  return (
    <div className="tw-flex tw-flex-col">
      <div className="tw-py-6 xl:tw-py-10">
        <div className="tw-text-center container">
          <div className="tw-max-w-[792px] tw-mx-auto">
            <h3 className="tw-mb-2 tw-text-2xl xl:tw-text-4xl tw-font-bold">
              {t("whyChoose.title")}
            </h3>
            <span
              dangerouslySetInnerHTML={{ __html: t("whyChoose.content") }}
            />
          </div>
        </div>
        <ListDesktop />
        <ListMobile />
      </div>
    </div>
  );
};

export default WhyChoose;
