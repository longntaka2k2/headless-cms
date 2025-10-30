import clsx from "clsx";
import React from "react";
import classes from "./MobileTimeline.module.scss";
import Image from "next/image";

const MobileTimeline = ({ activeIndex }: { activeIndex: number }) => {
  const nums = [1, 2, 3];

  return (
    <div className="tw-py-6 tw-max-w-[752px] tw-mx-auto xl:tw-hidden">
      <div className="tw-flex tw-gap-3 tw-h-[52px]">
        {nums.map((num, index) => {
          const isActive = activeIndex === index;
          return (
            <React.Fragment key={index}>
              <div className="tw-flex tw-items-center tw-gap-3">
                <div
                  className={clsx(
                    "tw-rounded-full tw-flex tw-items-center tw-justify-center tw-text-white tw-font-bold",
                    isActive
                      ? `tw-w-[52px] tw-h-[52px] tw-text-2xl tw-transition-all ${classes.gradient}`
                      : "tw-w-7 tw-h-7 tw-bg-ic-ink-4",
                  )}
                >
                  {num}
                </div>
              </div>
              {index !== nums.length - 1 && (
                <div className="tw-flex-1 tw-relative">
                  <Image
                    fill
                    src={
                      activeIndex >= index
                        ? "/icons/ecommerce-fulfillment/line-active.svg"
                        : "/icons/ecommerce-fulfillment/line-inactive.svg"
                    }
                    alt=""
                  />
                </div>
              )}
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
};

export default MobileTimeline;
