import Button from "@/components/core/button";
import TouchRipple from "@/components/core/touch-ripple";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperRef, SwiperSlide, SwiperClass } from "swiper/react";
import { stories } from "./dataset";
import { useTranslation } from "next-i18next";
import { Language } from "@/const/language";
import SvgIcon from "@/components/common/SvgIcon";
import clsx from "clsx";

const ListStories = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const { i18n, t } = useTranslation("pim");
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
      className="tw-grid lg:tw-grid-cols-2 tw-gap-6 lg:tw-gap-0 tw-py-5 lg:tw-py-0 lg:tw-px-0 tw-relative tw-overflow-hidden"
      ref={elementRef}
    >
      <div
        className={clsx(
          "lg:tw-px-10 lg:tw-py-15 tw-rounded-xl tw-flex tw-flex-col tw-justify-between tw-gap-10",
          isVisible
            ? "tw-animate-showOn lg:tw-animate-leftShow"
            : "tw-opacity-0",
        )}
      >
        <span className="tw-text-base">
          <span className="tw-text-5xl tw-font-bold">“</span>
          {viewStory?.content}
        </span>
        <div className="tw-flex tw-gap-5 tw-items-center">
          <div className="tw-w-[46px] tw-h-[46px] lg:tw-w-[60px] lg:tw-h-[60px] tw-rounded-full tw-overflow-hidden">
            <Image
              src={viewStory?.avatar as string}
              width={40}
              height={40}
              alt={viewStory?.author as string}
              className="tw-w-full tw-h-full"
            />
          </div>
          <div>
            <p className="tw-text-lg lg:tw-text-xl tw-font-bold tw-mb-1 tw-text-[#597EF7]">
              {viewStory?.author}
            </p>
            <p className="tw-text-sm tw-text-ic-ink-6 tw-mb-0">
              {viewStory?.carrer}
            </p>
          </div>
        </div>
      </div>
      <div
        className={clsx(
          "tw-bg-white tw-rounded-2xl tw-p-5",
          isVisible
            ? "tw-animate-showOn lg:tw-animate-rightShow"
            : "tw-opacity-0",
        )}
      >
        <Swiper
          ref={swiperRef}
          loop
          className="tw-max-w-[290px] tw-w-full tw-h-[189px] sm:tw-max-w-[542px] sm:tw-h-[286px] tw-rounded-xl"
          spaceBetween={0}
          slidesPerView={1}
          onSlideChange={onSlideChange}
        >
          {stories[lang].map((story, index) => (
            <SwiperSlide
              className="tw-w-[318px] tw-h-[189px] sm:tw-w-[542px] sm:tw-h-[286px] tw-rounded-xl tw-overflow-hidden"
              key={index}
            >
              <Image
                className="tw-object-cover"
                fill
                alt="icon"
                src={story.image}
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="tw-flex tw-gap-3 tw-items-center tw-mt-5 tw-relative">
          <div className="tw-w-[28px] tw-h-[28px] lg:tw-w-[40px] lg:tw-h-[40px] tw-rounded-full tw-overflow-hidden">
            <Image
              src={viewStory?.avatar as string}
              width={40}
              height={40}
              alt={viewStory?.author as string}
              className="tw-w-full tw-h-full"
            />
          </div>
          <p className="tw-text-xs lg:tw-text-sm tw-text-[#597EF7] tw-mb-0">
            {viewStory?.author}
          </p>
          <div className="tw-flex tw-gap-2 tw-absolute tw-bottom-0 tw-right-0">
            <button
              disabled={disableSwipe}
              onClick={() => swiperRef.current?.swiper.slidePrev()}
              className="tw-w-8 tw-h-8 lg:tw-w-11 lg:tw-h-11 tw-rounded-full tw-flex tw-items-center tw-justify-center tw-relative tw-shadow-8 tw-bg-primary-1"
            >
              <SvgIcon
                icon="arrow-1"
                width={24}
                height={24}
                className="tw-text-brand-secondary tw-rotate-90"
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
              className="tw-w-8 tw-h-8 lg:tw-w-11 lg:tw-h-11 tw-rounded-full tw-flex tw-items-center tw-justify-center tw-relative tw-shadow-8 tw-bg-primary-1"
            >
              <SvgIcon
                icon="arrow-1"
                width={24}
                height={24}
                className="tw-text-brand-secondary -tw-rotate-90"
              />
              <TouchRipple
                disabled={disableSwipe}
                className="tw-rounded-full"
                autoStart
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListStories;
