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
      className="tw-grid lg:tw-grid-cols-2 tw-gap-6 lg:tw-gap-20 tw-relative tw-overflow-hidden"
      ref={elementRef}
    >
      <div
        className={clsx(
          "tw-transition-all tw-duration-300 tw-delay-200 tw-flex tw-flex-col tw-gap-6 tw-justify-between",
          isVisible ? "tw-opacity-100" : "tw-opacity-0",
        )}
      >
        <div>
          <p className="tw-text-lg tw-text-[#0F62FE] tw-font-bold tw-mb-2">
            {viewStory?.title}
          </p>
          <div>
            {viewStory?.content.map((item, index) => (
              <div
                key={index}
                className="tw-text-sm lg:tw-text-base tw-mb-4 lg:tw-mb-5"
              >
                {item}
              </div>
            ))}
          </div>
          <div className="tw-flex tw-items-center tw-gap-3 lg:tw-gap-4">
            <div className="tw-w-10 tw-h-10 tw-rounded-full tw-overflow-hidden">
              <Image
                src={viewStory?.avatar as string}
                width={40}
                height={40}
                className="tw-object-cover"
                alt="#"
              />
            </div>
            <div>
              <p className="tw-text-sm lg:tw-text-base tw-font-bold tw-mb-1">
                {viewStory?.author}
              </p>
              <p className="tw-text-xs lg:tw-text-sm tw-mb-0">
                {viewStory?.career}
              </p>
            </div>
          </div>
        </div>

        <div className="tw-flex tw-gap-2">
          <button
            disabled={disableSwipe}
            onClick={() => swiperRef.current?.swiper.slidePrev()}
            className="tw-w-8 tw-h-8 lg:tw-w-11 lg:tw-h-11 tw-flex tw-items-center tw-justify-center tw-relative tw-border tw-border-ic-ink-6 tw-rounded-full"
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
            className="tw-w-8 tw-h-8 lg:tw-w-11 lg:tw-h-11 tw-flex tw-items-center tw-justify-center tw-relative tw-border tw-border-ic-ink-6 tw-rounded-full"
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
        </div>
      </div>
      <div
        className={clsx(
          "tw-w-[358px] lg:tw-w-full tw-mx-auto",
          isVisible
            ? "tw-animate-showOn lg:tw-animate-rightShow"
            : "tw-opacity-0",
        )}
      >
        <Swiper
          ref={swiperRef}
          loop
          spaceBetween={0}
          slidesPerView={1}
          onSlideChange={onSlideChange}
        >
          {stories[lang].map((story, index) => (
            <SwiperSlide
              className="tw-rounded-xl tw-overflow-hidden tw-w-[358px] lg:tw-w-full"
              key={index}
            >
              <Image
                src={viewStory?.image as string}
                width={580}
                height={460}
                className="tw-mx-auto"
                alt="#"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default ListStories;
