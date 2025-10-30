import TouchRipple from "@/components/core/touch-ripple";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperRef, SwiperSlide, SwiperClass } from "swiper/react";
import { stories } from "./dataset";
import { useTranslation } from "next-i18next";
import { Language } from "@/const/language";
import SvgIcon from "@/components/common/SvgIcon";
import clsx from "clsx";
import Link from "next/link";

const ListStories = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const { i18n, t } = useTranslation("cross-border-forwarding");
  const elementRef = useRef(null);
  const [isVisible, setVisible] = useState(false);

  const lang = i18n.language as Language;

  const onSlideChange = (swiper: SwiperClass) =>
    setActiveIndex(swiper.realIndex);

  const swiperRef = useRef<SwiperRef | null>(null);

  const viewStory = stories[lang][activeIndex]
    ? stories[lang][activeIndex]
    : null;

  const disableSwipe = stories[lang].length <= 1;

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 1 / 3 },
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }
    return () => {
      if (elementRef.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        observer.unobserve(elementRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={elementRef}
      className={clsx(
        "tw-container tw-relative tw-bg-[linear-gradient(168deg,_#ECF5FF_20.11%,_#CEDEFF_108.79%)]",
        "tw-pt-12 tw-pb-6 lg:tw-pt-12 lg:tw-pb-8 tw-px-4 lg:tw-px-15 tw-rounded-2xl lg:tw-rounded-[24px]",
        isVisible ? "tw-animate-showOn" : "tw-opacity-0",
      )}
    >
      <Image
        src={"https://cms-strapi.ichiba.net/uploads/Group_df188a3a51.svg"}
        width={64}
        height={49}
        className="tw-w-12 tw-h-9 lg:tw-w-16 lg:tw-h-12 tw-mx-auto"
        alt="#"
      />

      <h3
        className={clsx(
          "tw-flex tw-gap-2 tw-items-start tw-justify-center",
          "tw-text-base lg:tw-text-2xl tw-mt-6 tw-mb-4 lg:tw-mb-6 tw-font-medium lg:tw-font-bold",
        )}
      >
        Fulfillment by
        <Image
          src={"https://cms-strapi.ichiba.net/uploads/Group_d479f1e3a3.svg"}
          width={75}
          height={25}
          className=""
          alt=""
        />
      </h3>

      <Swiper
        ref={swiperRef}
        loop
        className="w-full"
        spaceBetween={24}
        slidesPerView={1}
        onSlideChange={onSlideChange}
      >
        {stories[lang].map((story, index) => (
          <SwiperSlide className="" key={index}>
            <div className="lg:tw-w-[70%] tw-grid tw-gap-6 lg:tw-gap-8 tw-mx-auto">
              <span className="tw-mx-auto tw-text-sm lg:tw-text-xl tw-italic">
                {story?.content}
              </span>
              <div className="tw-flex tw-justify-center tw-items-center tw-gap-2 lg:tw-gap-3">
                <div className="tw-w-12 tw-h-12 lg:tw-w-12 lg:tw-h-12 tw-rounded-full tw-overflow-hidden">
                  <Image
                    src={story?.avatar}
                    width={48}
                    height={48}
                    className="tw-w-full tw-h-full"
                    alt={story?.author}
                  />
                </div>
                <div>
                  <p className="tw-text-sm lg:tw-text-base tw-font-medium tw-mb-1">
                    {story?.author}
                  </p>
                  <p className="tw-text-xs lg:tw-text-sm tw-mb-0">
                    {story?.career}
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <button
        disabled={disableSwipe}
        onClick={() => swiperRef.current?.swiper.slidePrev()}
        className={clsx(
          "tw-w-8 tw-h-8 lg:tw-w-11 lg:tw-h-11 tw-hidden lg:tw-flex tw-items-center tw-justify-center",
          "tw-border tw-border-ic-ink-6 tw-rounded-full",
          "tw-absolute tw-top-[50%] tw-translate-y-[-50%] tw-left-15 tw-z-10",
        )}
      >
        <SvgIcon
          icon="arrow"
          width={24}
          height={24}
          className="tw-text-ic-ink-6 tw-rotate-180"
        />
        <TouchRipple
          disabled={disableSwipe}
          className="tw-rounded-full"
          autoStart
        />
      </button>
      <button
        disabled={disableSwipe}
        onClick={() => swiperRef.current?.swiper.slideNext()}
        className={clsx(
          "tw-w-8 tw-h-8 lg:tw-w-11 lg:tw-h-11 tw-hidden lg:tw-flex tw-items-center tw-justify-center",
          "tw-border tw-border-ic-ink-6 tw-rounded-full",
          "tw-absolute tw-top-[50%] tw-translate-y-[-50%] tw-right-15 tw-z-10",
        )}
      >
        <SvgIcon
          icon="arrow"
          width={24}
          height={24}
          className="tw-text-ic-ink-6"
        />
        <TouchRipple
          disabled={disableSwipe}
          className="tw-rounded-full"
          autoStart
        />
      </button>

      <Image
        src={
          "https://cms-strapi.ichiba.net/uploads/breakline_white_1_c6d7443d0d.svg"
        }
        width={144}
        height={28}
        className={clsx(
          "tw-w-[144px] tw-h-[26px] lg:tw-h-7",
          "tw-absolute tw-left-[50%] tw-translate-x-[-50%] -tw-top-[1px]",
        )}
        alt="#"
      />
      <Image
        src={"https://cms-strapi.ichiba.net/uploads/Breakline_a19843d03e.svg"}
        width={144}
        height={28}
        className={clsx(
          "tw-w-[144px] tw-h-[26px] lg:tw-h-7",
          "tw-absolute tw-left-[50%] tw-translate-x-[-50%] lg:-tw-bottom-6",
        )}
        alt="#"
      />
    </div>
  );
};

export default ListStories;
