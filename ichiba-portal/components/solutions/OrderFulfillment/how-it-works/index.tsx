import { LocaleNamespace } from "@/const/locale";
import React, { useRef, useState } from "react";
import { useTranslation } from "next-i18next";
import clsx from "clsx";
import { Swiper, SwiperSlide, SwiperClass, SwiperRef } from "swiper/react";

const HowItWorks = () => {
  const { t } = useTranslation(LocaleNamespace.OrderFulfillment);
  const swiperRef = useRef<SwiperRef | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const onSlideChange = (swiper: SwiperClass) =>
    setActiveIndex(swiper.realIndex);

  const items = t(`howItWorks.items`, {
    returnObjects: true,
  }) as { title: string; subTitle: string; content: string[] }[];

  return (
    <div>
      <div className="tw-py-6 xl:tw-py-10">
        <div className="container">
          <div className="tw-max-w-[792px] tw-mx-auto tw-text-center">
            <h3 className="tw-mb-2 tw-text-2xl xl:tw-text-4xl tw-font-bold">
              {t("howItWorks.title")}
            </h3>
            <span
              dangerouslySetInnerHTML={{
                __html: t("howItWorks.content"),
              }}
            />
          </div>
        </div>
        <div className="tw-mt-6 tw-overflow-hidden">
          <div className="tw-px-4 xl:tw-px-0">
            <div
              className={clsx(
                "tw-w-full tw-h-[350px] xl:tw-h-[600px] tw-min-w-[1232px] xl:tw-min-w-[1920px] tw-bg-no-repeat tw-bg-left tw-bg-cover",
                "tw-bg-[url('https://cms-strapi.ichiba.net/uploads/how_it_works_bg_desktop_c43a43bcf6.webp')]",
              )}
            />
          </div>
        </div>
        <div className="container">
          <div className="tw-overflow-auto">
            <div
              className="tw-pt-6 tw-pb-4 xl:tw-pb-6 tw-grid tw-w-max tw-gap-3 xl:tw-gap-0 tw-min-w-full"
              style={{
                gridTemplateColumns: `repeat(${items.length}, minmax(0, 1fr))`,
              }}
            >
              {items.map((item, index) => (
                <button
                  key={index}
                  onClick={() => swiperRef.current?.swiper.slideTo(index)}
                  className={clsx(
                    "tw-flex-1 tw-flex tw-items-center tw-justify-center tw-font-bold tw-relative",
                    "tw-p-4 tw-rounded-[30px]",
                    "xl:tw-p-2 xl:tw-rounded-none md:tw-text-base xl:tw-text-xl",
                    {
                      "tw-bg-brand-primary tw-text-white xl:tw-bg-transparent xl:tw-text-brand-primary":
                        index === activeIndex,
                      "xl:tw-text-ic-ink-4": index !== activeIndex,
                    },
                  )}
                >
                  {item.title}
                  <fieldset
                    className={clsx(
                      "tw-absolute tw-bottom-0 tw-inset-x-0 tw-hidden xl:tw-block",
                      index === activeIndex
                        ? "tw-h-1 tw-bg-brand-primary"
                        : "tw-h-0.5 tw-bg-ic-ink-4",
                    )}
                  />
                </button>
              ))}
            </div>
          </div>
          <Swiper
            loop
            ref={swiperRef}
            spaceBetween={24}
            slidesPerView="auto"
            onSlideChange={onSlideChange}
          >
            {items.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="tw-flex tw-flex-col tw-gap-2">
                  <p className="tw-mb-0 tw-font-bold tw-text-lg sm:tw-text-xl md:tw-text-2xl lg:tw-text-3xl xl:tw-text-4xl">
                    {item.subTitle}
                  </p>
                  <span>{item.content}</span>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
