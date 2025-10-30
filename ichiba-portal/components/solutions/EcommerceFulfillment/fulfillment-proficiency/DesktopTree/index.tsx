import { LocaleNamespace } from "@/const/locale";
import Image from "next/image";
import React from "react";
import { useTranslation } from "next-i18next";
import classes from "./DesktopTree.module.scss";
import clsx from "clsx";

const DesktopTree = () => {
  const { t } = useTranslation(LocaleNamespace.EcommerceFulfillment);

  const items = t(`fulfillmentProficiency.items`, {
    returnObjects: true,
  }) as { value: string; label: string[] }[];

  return (
    <div className="tw-mt-6 tw-hidden xl:tw-block">
      <div className="tw-flex tw-justify-center">
        <div className="tw-max-w-full tw-w-[940px] tw-relative tw-grid tw-grid-cols-2 tw-items-center">
          <Image
            src="https://cms-strapi.ichiba.net/uploads/fulfillment_proficiency_tree_574996dda8.webp"
            alt=""
            width={571}
            height={549}
          />
          <div className="tw-flex tw-flex-col tw-justify-between tw-gap-4">
            <div className={clsx(classes.item, "-tw-translate-x-[100px]")}>
              <div className={classes.icon}>
                <Image
                  src="https://cms-strapi.ichiba.net/uploads/home_house_real_estate_plan_511716a666.svg"
                  width={40}
                  height={40}
                  alt=""
                />
              </div>
              <div className="tw-flex tw-flex-col tw-items-start">
                <span className="sm:tw-text-xl tw-font-bold">
                  {items[0]?.value}
                </span>
                <span className="tw-text-sm">{items[0]?.label}</span>
              </div>
            </div>
            <div className={clsx(classes.item)}>
              <div className={classes.icon}>
                <Image
                  src="https://cms-strapi.ichiba.net/uploads/money_banknote_handshake_e0f137e0b0.svg"
                  width={40}
                  height={40}
                  alt=""
                />
              </div>
              <div className="tw-flex tw-flex-col tw-items-start">
                <span className="sm:tw-text-xl tw-font-bold">
                  {items[1]?.value}
                </span>
                <span className="tw-text-sm">{items[1]?.label}</span>
              </div>
            </div>
            <div className={clsx(classes.item, "tw-translate-x-8")}>
              <div className={classes.icon}>
                <Image
                  src="https://cms-strapi.ichiba.net/uploads/courier_hands_package_box_866ac4703c.svg"
                  width={40}
                  height={40}
                  alt=""
                />
              </div>
              <div className="tw-flex tw-flex-col tw-items-start">
                <span className="sm:tw-text-xl tw-font-bold">
                  {items[2]?.value}
                </span>
                <span className="tw-text-sm">{items[2]?.label}</span>
              </div>
            </div>
            <div className={clsx(classes.item)}>
              <div className={classes.icon}>
                <Image
                  src="https://cms-strapi.ichiba.net/uploads/cloud_storage_laptop_2f88a70f2e.svg"
                  width={40}
                  height={40}
                  alt=""
                />
              </div>
              <div className="tw-flex tw-flex-col tw-items-start">
                <span className="sm:tw-text-xl tw-font-bold">
                  {items[3]?.value}
                </span>
                <span className="tw-text-sm">{items[3]?.label}</span>
              </div>
            </div>
            <div className={clsx(classes.item, "-tw-translate-x-[100px]")}>
              <div className={classes.icon}>
                <Image
                  src="https://cms-strapi.ichiba.net/uploads/time_clock_menu_e00e129c8e.svg"
                  width={40}
                  height={40}
                  alt=""
                />
              </div>
              <div className="tw-flex tw-flex-col tw-items-start">
                <span className="sm:tw-text-xl tw-font-bold">
                  {items[4]?.value}
                </span>
                <span className="tw-text-sm">{items[4]?.label}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesktopTree;
