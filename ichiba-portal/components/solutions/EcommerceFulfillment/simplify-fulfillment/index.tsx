import React, { useRef, useState } from "react";
import DesktopTimeline from "./desktop-timeline";
import { Swiper, SwiperClass, SwiperRef, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { useTranslation } from "next-i18next";
import { LocaleNamespace } from "@/const/locale";
import Image from "next/image";
import MobileTimeline from "./mobile-timeline";
import Button from "@/components/core/button";
import clsx from "clsx";
import Link from "next/link";

const SimplifyFulfillment = () => {
  const swiperRef = useRef<SwiperRef | null>(null);
  const { t } = useTranslation(LocaleNamespace.EcommerceFulfillment);
  const [activeIndex, setActiveIndex] = useState(0);

  const onSlideChange = (swiper: SwiperClass) =>
    setActiveIndex(swiper.realIndex);

  const sliceItems = t(`simplifyFulfillment.slices`, {
    returnObjects: true,
  }) as { title: string; content: string[] }[];

  const sliceImages: string[] = [
    "/icons/pim/empty-img-bg.svg",
    "/icons/pim/empty-img-bg.svg",
    "/icons/pim/empty-img-bg.svg",
  ];

  const onClickTab = (index: number) => {
    swiperRef.current?.swiper.slideTo(index);
    swiperRef.current?.swiper.autoplay.start();
  };

  return (
    <React.Fragment>
      <div className="container">
        <div className="tw-py-6 xl:tw-py-10">
          <div className="tw-flex tw-flex-col tw-gap-2 sm:tw-items-center tw-max-w-[752px] sm:tw-m-auto">
            <h3 className="tw-font-bold tw-text-2xl xl:tw-text-4xl tw-mb-0 sm:tw-text-center">
              {t("simplifyFulfillment.title")}
            </h3>
            <span className="sm:tw-text-center">
              {t("simplifyFulfillment.subTitle")}
            </span>
          </div>
          <MobileTimeline activeIndex={activeIndex} />
          <DesktopTimeline onClickTab={onClickTab} activeIndex={activeIndex} />
          <Swiper
            ref={swiperRef}
            className="tw-w-full tw-max-w-[752px]"
            spaceBetween={24}
            slidesPerView={1}
            autoplay={{ delay: 5000 }}
            modules={[Autoplay]}
            onSlideChange={onSlideChange}
          >
            {sliceItems.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="tw-flex tw-flex-col tw-items-center tw-text-center">
                  <Image
                    width={600}
                    height={400}
                    alt=""
                    src={sliceImages[index]}
                  />
                  <span className="tw-text-lg sm:tw-text-xl tw-font-bold tw-mt-6">
                    {index + 1}. {item.title}
                  </span>
                  <span className="tw-text-sm sm:tw-text-base tw-mt-2">
                    {item.content}
                  </span>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      <div
        className="!tw-bg-center !tw-bg-no-repeat !tw-bg-cover tw-py-6 xl:tw-py-10"
        style={{
          background: `linear-gradient(0deg, rgba(0, 25, 79, 0.80) 0%, rgba(0, 25, 79, 0.80) 100%),  url('https://cms-strapi.ichiba.net/uploads/simplify_fulfillment_bg_5a373d1c7f.webp'), lightgray -324.951px -387.13px / 266.595% 299.449% no-repeat`,
        }}
      >
        <div className="container">
          <div className="tw-text-center tw-text-white px-2">
            <h3 className="tw-text-2xl xl:tw-text-4xl tw-font-bold tw-mb-0">
              {t("simplifyFulfillment.banner.title")}
            </h3>
            <p className="tw-mt-2 tw-mb-0">
              {t("simplifyFulfillment.banner.content")}
            </p>
            <Link
              href="/contact-sales"
              target="_blank"
              rel="noreferrer canonical"
              className={clsx(
                "!tw-relative tw-rounded-lg tw-font-medium tw-px-3 tw-text-white tw-bg-brand-primary tw-no-underline tw-flex tw-items-center tw-justify-center",
                "tw-w-max lg:tw-min-w-[220px] xl:tw-mt-12 lg:tw-h-14 lg:tw-text-xl tw-h-12 tw-mt-6 tw-min-w-[160px] sm:tw-min-w-[200px] tw-mx-auto",
              )}
            >
              {t("getStartedNow")}
            </Link>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default SimplifyFulfillment;
