import Button from "@/components/core/button";
import TouchRipple from "@/components/core/touch-ripple";
import Image from "next/image";
import React, { useRef, useState } from "react";
import { Swiper, SwiperRef, SwiperSlide, SwiperClass } from "swiper/react";
import { stories } from "./dataset";
import { useTranslation } from "next-i18next";
import { Language } from "@/const/language";
import StoryBg from "@/public/icons/pim/story-bg.svg";

const SuccessStories = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const { i18n, t } = useTranslation("pim");

  const lang = i18n.language as Language;

  const onSlideChange = (swiper: SwiperClass) =>
    setActiveIndex(swiper.realIndex);

  const swiperRef = useRef<SwiperRef | null>(null);

  const viewStory = stories[lang][activeIndex]
    ? stories[lang][activeIndex]
    : null;

  const disableSwipe = stories[lang].length <= 1;

  return (
    <div className="tw-bg-neutral-1 tw-pt-15 tw-pb-16">
      <div className="container">
        <div className="tw-flex tw-flex-col">
          <h3 className="tw-mb-0 tw-text-center tw-text-lg lg:tw-text-3xl tw-font-bold">
            {t("storyTitle")}
          </h3>
          <Button size="medium" className="tw-mx-auto tw-px-5 tw-mt-5">
            {t("readMoreSuccessStories")}
          </Button>
          <div className="tw-grid tw-grid-cols-1 lg:tw-grid-cols-2 tw-mt-9 lg:tw-mt-15 tw-py-5 tw-px-4 lg:tw-py-0 lg:tw-px-0 tw-relative tw-bg-white lg:tw-bg-neutral-1 tw-rounded-xl tw-overflow-hidden">
            <div className="lg:tw-px-10 lg:tw-py-15 tw-rounded-xl tw-flex tw-flex-col tw-justify-between tw-gap-10 tw-bg-white">
              <span className="tw-text-base">{viewStory?.content}</span>
              <span className="tw-text-xl tw-font-bold">
                {viewStory?.author}
              </span>
              <Image
                width={48}
                height={35}
                alt="icon"
                src="/svgs/quote-left.svg"
                className="tw-absolute -tw-top-4 tw-left-10"
              />
            </div>
            <div className="tw-flex tw-justify-end lg:tw-bg-neutral-1 tw-pt-3 lg:tw-pt-0">
              <div className="tw-flex tw-gap-6 tw-items-center tw-w-max tw-relative">
                <button
                  disabled={disableSwipe}
                  onClick={() => swiperRef.current?.swiper.slidePrev()}
                  className="tw-w-11 tw-h-11 tw-rounded-full tw-flex tw-items-center tw-justify-center tw-relative tw-shadow-8"
                >
                  <Image
                    width={24}
                    height={24}
                    src="/svgs/arrow-dark.svg"
                    alt="icon"
                  />
                  <TouchRipple
                    disabled={disableSwipe}
                    className="tw-rounded-full"
                    autoStart
                  />
                </button>
                <Swiper
                  ref={swiperRef}
                  loop
                  className="tw-w-[124px] tw-h-[150px] sm:tw-w-[282px] sm:tw-h-[340px]"
                  spaceBetween={0}
                  slidesPerView={1}
                  onSlideChange={onSlideChange}
                >
                  {stories[lang].map((story, index) => (
                    <SwiperSlide className="tw-relative" key={index}>
                      <Image
                        className="tw-object-cover"
                        fill
                        alt="icon"
                        src={story.image}
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
                <button
                  disabled={disableSwipe}
                  onClick={() => swiperRef.current?.swiper.slideNext()}
                  className="tw-w-11 tw-h-11 tw-rounded-full tw-flex tw-items-center tw-justify-center tw-relative tw-bg-white tw-shadow-8"
                >
                  <Image
                    className="tw-rotate-180"
                    width={24}
                    height={24}
                    src="/svgs/arrow-dark.svg"
                    alt="icon"
                  />
                  <TouchRipple
                    disabled={disableSwipe}
                    className="tw-rounded-full"
                    autoStart
                  />
                </button>
                <Image
                  alt="icon"
                  className="tw-absolute lg:-tw-bottom-16 lg:-tw-left-10 -tw-bottom-44 -tw-left-28"
                  src={StoryBg}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessStories;
