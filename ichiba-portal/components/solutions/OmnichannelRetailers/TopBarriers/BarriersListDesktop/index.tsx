import React from "react";
import { useTranslation } from "next-i18next";
import { LocaleNamespace } from "@/const/locale";
import clsx from "clsx";
import SvgIcon from "@/components/common/SvgIcon";
import classes from "./BarriersListDesktop.module.scss";

const BarriersListDesktop = () => {
  const { t } = useTranslation(LocaleNamespace.OmnichannelRetailers);

  const icons = ["laptop-mobile", "truck", "cloud", "camera", "clock", "home"];

  return (
    <div className="container">
      <div
        className={clsx(
          "tw-mt-12 tw-grid-cols-2 tw-gap-x-6 tw-gap-y-12 tw-shadow-10 tw-hidden",
          "xl:tw-grid-cols-3 sm:tw-grid",
        )}
      >
        {(
          t(`eraseBarriers.items`, {
            returnObjects: true,
          }) as string[]
        ).map((item: any, index: number) => (
          <div key={index} className={classes.item}>
            <div className="tw-flex tw-flex-col tw-gap-3 tw-items-center tw-max-w-[235px] tw-mx-auto tw-h-full">
              <div className={classes.icon__root}>
                <div className={classes.icon}>
                  <SvgIcon width="100%" height="100%" icon={icons[index]} />
                </div>
              </div>
              <span className="tw-text-center">{item}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BarriersListDesktop;
