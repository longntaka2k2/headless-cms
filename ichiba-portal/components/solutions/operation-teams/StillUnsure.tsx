import clsx from "clsx";
import React from "react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { useTranslation } from "next-i18next";
import Image from "next/image";
import TouchRipple from "@/components/core/touch-ripple";
import { useRef, useState } from "react";
import { SwiperClass, SwiperRef, Swiper, SwiperSlide } from "swiper/react";

const StillUnsure = () => {
  const { t } = useTranslation("operation-teams");
  const swiperRef = useRef<SwiperRef | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const onSlideChange = (swiper: SwiperClass) =>
    setActiveIndex(swiper.realIndex);

  return (
    <div
      className={clsx(
        "tw-bg-[url(https://cms-strapi.ichiba.net/uploads/y_X0s_O7_HJ_0ft_W_Dbx7_B_Freb29_AAI_1_061674e350.svg)]",
        "tw-pt-6 tw-pb-10 lg:tw-pt-12 lg:tw-pb-20 tw-bg-cover tw-overflow-hidden",
      )}
    >
      <div className="tw-container">
        <h2 className="tw-mb-2 lg:tw-mb-4 tw-text-center tw-text-2xl lg:tw-text-4xl tw-font-bold lg:tw-w-[50%] tw-mx-auto">
          {t("stillUnsure.heading")}
        </h2>
        <p className="tw-mb-[35px] lg:tw-mb-15 tw-text-sm lg:tw-text-base lg:tw-w-[75%] tw-mx-auto tw-text-center">
          {t("stillUnsure.subHeading")}
        </p>
        <div className="tw-bg-ic-ink-1 tw-w-[358px] tw-h-[229px] lg:tw-w-[724px] lg:tw-h-[229px] tw-mx-auto tw-flex tw-items-center tw-rounded-xl lg:tw-rounded-2xl">
          <div className="tw-relative">
            <Swiper
              ref={swiperRef}
              slidesPerView={1}
              onSlideChange={onSlideChange}
              className="tw-h-full tw-w-[358px] lg:tw-w-[724px] tw-mx-auto"
            >
              {(
                t("stillUnsure.items", {
                  returnObjects: true,
                }) as any
              ).map((item: any, index: number) => {
                return (
                  <SwiperSlide key={index}>
                    <div
                      className={clsx(
                        "tw-w-[333px] tw-h-[269px] lg:tw-w-[675px] lg:tw-h-[300px] tw-bg-white tw-mx-auto",
                        "tw-p-6 lg:tw-py-9 lg:tw-px-10 tw-rounded-lg lg:tw-rounded-2xl",
                      )}
                    >
                      <p className="tw-mb-4 lg:tw-mb-6 tw-text-sm lg:tw-text-lg">
                        {item.content}
                      </p>
                      <div className="tw-flex tw-gap-3 lg:tw-gap-4 tw-items-center">
                        <div className="tw-w-9 tw-h-9 lg:tw-w-11 lg:tw-h-11 tw-rounded-full tw-overflow-hidden">
                          <Image
                            src={item.avatar}
                            alt={item.name}
                            width={44}
                            height={44}
                          />
                        </div>
                        <div>
                          <p className="tw-mb-0 tw-text-sm lg:tw-text-base tw-font-bold">
                            {item.name}
                          </p>
                          <p className="tw-mb-0 tw-text-xs lg:tw-text-sm tw-text-ic-ink-5">
                            {item.career}
                          </p>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
            <button
              onClick={() => swiperRef.current?.swiper.slidePrev()}
              className={clsx(
                "tw-absolute tw-top-[50%] tw-translate-x-[-50%] tw-left-[-10%] tw-hidden lg:tw-block",
                "tw-w-11 tw-h-11 tw-rounded-full lg:tw-flex tw-items-center tw-justify-center tw-shadow-8 tw-z-1 tw-bg-white tw-hidden",
              )}
            >
              <Image
                width={24}
                height={24}
                src="/svgs/arrow-dark.svg"
                alt="icon"
              />
              <TouchRipple className="tw-rounded-full" autoStart />
            </button>
            <button
              onClick={() => swiperRef.current?.swiper.slideNext()}
              className={clsx(
                "tw-absolute tw-top-[50%] tw-translate-x-[-50%] tw-right-[-16%] tw-hidden lg:tw-block",
                "tw-w-11 tw-h-11 tw-rounded-full lg:tw-flex tw-items-center tw-justify-center tw-z-1 tw-bg-white tw-shadow-8 tw-hidden",
              )}
            >
              <Image
                className="tw-rotate-180"
                width={24}
                height={24}
                src="/svgs/arrow-dark.svg"
                alt="icon"
              />
              <TouchRipple className="tw-rounded-full" autoStart />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StillUnsure;
