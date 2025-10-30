import React from "react";
import { useTranslation } from "next-i18next";
import { LocaleNamespace } from "@/const/locale";
import Image from "next/image";
import clsx from "clsx";
import classes from "./MoreThanSection.module.scss";

const MoreThanSection = () => {
  const { t } = useTranslation(LocaleNamespace.OrderFulfillment);

  const items = t(`moreThan.items`, {
    returnObjects: true,
  }) as { title: string; content: string[] }[];

  const icons = [
    "https://cms-strapi.ichiba.net/uploads/world_network_smart_home_7b336f1020.svg",
    "https://cms-strapi.ichiba.net/uploads/cloud_storage_browser_group_4f6d74ffef.svg",
    "https://cms-strapi.ichiba.net/uploads/browser_shopping_basket_right_bottom_2_82b27d1d86.svg",
  ];

  return (
    <div className="container">
      <div className="tw-py-6 xl:tw-py-10">
        <div className="tw-max-w-[792px] tw-mx-auto tw-text-center">
          <h3 className="tw-mb-2 tw-text-2xl xl:tw-text-4xl tw-font-bold">
            {t("moreThan.title")}
          </h3>
          <span dangerouslySetInnerHTML={{ __html: t("moreThan.content") }} />
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

export default MoreThanSection;
