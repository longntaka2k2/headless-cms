import React from "react";
import { useTranslation } from "next-i18next";
import { LocaleNamespace } from "@/const/locale";
import Image from "next/image";
import clsx from "clsx";
import classes from "./MultiChannelFulfillment.module.scss";

const MultiChannelFulfillment = () => {
  const { t } = useTranslation(LocaleNamespace.EcommerceFulfillment);
  const items = t(`multiChannelFulfillment.items`, {
    returnObjects: true,
  }) as { title: string; content: string[] }[];

  const icons = [
    "https://cms-strapi.ichiba.net/uploads/money_banknote_coins_baaeb8d34e.svg",
    "https://cms-strapi.ichiba.net/uploads/business_chart_6f741444fd.svg",
    "https://cms-strapi.ichiba.net/uploads/single_user_heart_user_806418b398.svg",
  ];

  return (
    <div className="container">
      <div className="tw-py-6 xl:tw-py-10">
        <div className="tw-max-w-[792px] tw-mx-auto tw-text-center">
          <h3 className="tw-mb-2 tw-text-2xl xl:tw-text-4xl tw-font-bold">
            {t("multiChannelFulfillment.title")}
          </h3>
          <span>{t("multiChannelFulfillment.content")}</span>
        </div>
        <div className={classes.scroll}>
          <div className="tw-flex tw-gap-6">
            {items.map((item, index) => (
              <div
                key={index}
                className={clsx(
                  "tw-flex tw-flex-col tw-items-center tw-text-center tw-p-3 tw-flex-1 tw-min-w-[300px]",
                  {
                    "xl:tw-border-r xl:tw-border-ic-ink-2":
                      index !== items.length - 1,
                  },
                )}
              >
                <Image width={64} height={64} alt="" src={icons[index]} />
                <p className="tw-font-bold tw-mb-1.5 tw-mt-2">{item.title}</p>
                <span>{item.content}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MultiChannelFulfillment;
