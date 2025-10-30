import React, { useState } from "react";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { useTranslation } from "next-i18next";
import { LocaleNamespace } from "@/const/locale";
import clsx from "clsx";
import SvgIcon from "@/components/common/SvgIcon";

const BarriersListMobile = () => {
  const { t } = useTranslation(LocaleNamespace.OmnichannelRetailers);

  const [activeIndex, setActiveIndex] = useState(0);

  const onSlideChange = (swiper: SwiperClass) =>
    setActiveIndex(swiper.realIndex);

  const icons = ["laptop-mobile", "truck", "cloud", "camera", "clock", "home"];

  return (
    <div className="sm:tw-hidden">
      <Swiper
        loop
        slidesPerView="auto"
        spaceBetween={16}
        centeredSlides
        autoplay={{ delay: 5000 }}
        modules={[Autoplay]}
        onSlideChange={onSlideChange}
        breakpoints={{
          640: {
            enabled: false,
          },
        }}
      >
        {(
          t(`topBarriers.items`, {
            returnObjects: true,
          }) as string[]
        ).map((item: any, index: number) => (
          <SwiperSlide key={index} className={clsx("!tw-h-auto !tw-w-2/3")}>
            <div
              className={clsx(
                "tw-py-6 tw-px-4 tw-flex tw-flex-col tw-gap-3 tw-b tw-text-white tw-rounded-lg tw-h-full tw-items-center",
              )}
              style={{
                background:
                  index === activeIndex
                    ? "linear-gradient(0deg, #FF7400 -0.66%, #FFAB52 99.49%)"
                    : "rgba(151, 178, 248, 0.30)",
              }}
            >
              <div
                className={clsx(
                  "tw-rounded-full tw-text-white tw-border tw-border-current tw-w-20 tw-h-20 tw-flex tw-items-center tw-justify-center",
                  {
                    "tw-bg-current": index === activeIndex,
                  },
                )}
              >
                <SvgIcon
                  width={52}
                  height={52}
                  className={clsx({
                    "tw-text-brand-primary": index === activeIndex,
                  })}
                  icon={icons[index]}
                />
              </div>
              <span
                className={clsx("tw-text-center", {
                  "tw-font-bold": index === activeIndex,
                })}
              >
                {item}
              </span>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="tw-flex tw-gap-2 tw-mt-6 tw-justify-center">
        {(
          t(`topBarriers.items`, {
            returnObjects: true,
          }) as string[]
        ).map((item: any, index: number) => (
          <div
            key={index}
            className={clsx(
              "tw-w-2 tw-h-2 tw-rounded-full",
              index === activeIndex ? "tw-bg-brand-primary" : "tw-bg-ic-ink-4",
            )}
          />
        ))}
      </div>
    </div>
  );
};

export default BarriersListMobile;
