import { LocaleNamespace } from "@/const/locale";
import React from "react";
import { useTranslation } from "next-i18next";
import clsx from "clsx";

const TrustedPartner = () => {
  const { t } = useTranslation(LocaleNamespace.OmnichannelRetailers);
  const items = t(`trustedPartner.items`, {
    returnObjects: true,
  }) as { title: string; content: string[] }[];

  return (
    <div className="tw-bg-[#00194F] tw-text-white">
      <div className="container">
        <div className="tw-py-6 xl:tw-py-10">
          <div className="tw-max-w-[792px] tw-mx-auto tw-text-center">
            <h3 className="tw-mb-2 tw-text-2xl xl:tw-text-4xl tw-font-bold">
              {t("trustedPartner.title")}
            </h3>
            <span
              dangerouslySetInnerHTML={{ __html: t("trustedPartner.content") }}
            />
          </div>
          <div
            className={clsx(
              "tw-mt-6 tw-grid tw-grid-cols-1 tw-gap-6",
              "sm:tw-grid-cols-2 xl:tw-grid-cols-3 xl:tw-gap-y-8",
            )}
          >
            {items.map((item, index) => (
              <div
                key={index}
                className={clsx("tw-flex tw-gap-3", "xl:tw-p-2 2xl:tw-p-5")}
              >
                <div className="tw-w-10 tw-h-10 tw-bg-white tw-rounded-full tw-flex tw-items-center tw-justify-center tw-text-base tw-text-[#00194F]">
                  {index + 1}
                </div>
                <div className="tw-flex tw-flex-col tw-gap-2 tw-flex-1">
                  <span className="tw-font-bold tw-text-base">
                    {item.title}
                  </span>
                  <span>{item.content}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrustedPartner;
