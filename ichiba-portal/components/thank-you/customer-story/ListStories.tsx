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
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown, faArrowUp } from "@fortawesome/free-solid-svg-icons";

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
      className={clsx(
        "tw-bg-[url('https://cms-strapi.ichiba.net/uploads/Body_ce4314d8c8.svg')]",
        "lg:tw-bg-[url('https://cms-strapi.ichiba.net/uploads/Customer_say_ebd9511d9b.svg')]",
        "tw-relative tw-flex tw-flex-col tw-items-center lg:tw-flex-row tw-gap-4 lg:tw-gap-10",
        "tw-pt-6 tw-px-4 tw-pb-4 lg:tw-py-10 lg:tw-pl-20 lg:tw-pr-4",
        "tw-overflow-hidden tw-rounded-2xl lg:tw-rounded-3xl tw-bg-cover tw-bg-no-repeat",
      )}
      ref={elementRef}
    >
      <div
        className={clsx(
          "tw-rounded-2xl",
          isVisible
            ? "tw-animate-showOn lg:tw-animate-rightShow"
            : "tw-opacity-0",
        )}
      >
        <div className="tw-relative">
          <Swiper
            ref={swiperRef}
            loop
            className="tw-w-[326px] tw-h-[166px] sm:tw-w-[270px] sm:tw-h-[320px] tw-rounded-xl"
            spaceBetween={0}
            slidesPerView={1}
            onSlideChange={onSlideChange}
          >
            {stories[lang].map((story, index) => (
              <SwiperSlide
                className="tw-w-[326px] tw-h-[166px] sm:tw-w-[270px] sm:tw-h-[320px] tw-rounded-xl tw-overflow-hidden"
                key={index}
              >
                <Image
                  className="tw-object-cover tw-object-right-top sm:tw-object-right"
                  fill
                  alt="icon"
                  src={story.image}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      <div
        className={clsx(
          isVisible
            ? "tw-animate-showOn lg:tw-animate-leftShow"
            : "tw-opacity-0",
        )}
      >
        <span className="tw-text-sm lg:tw-text-base">{viewStory?.content}</span>
        <Image
          src={"https://cms-strapi.ichiba.net/uploads/Group_2e3931b5e6.svg"}
          width={88}
          height={65}
          alt="#"
          className="tw-w-11 tw-h-8 lg:tw-w-[54px] lg:tw-h-10 tw-ml-auto"
        />
        <div className="tw-flex tw-items-center tw-gap-3">
          <div className="tw-w-10 tw-h-10 lg:tw-w-12 lg:tw-h-12 tw-rounded-full tw-overflow-hidden">
            <Image
              src={viewStory?.avatar as string}
              width={48}
              height={48}
              alt="#"
              className="tw-w-full tw-h-full"
            />
          </div>
          <div>
            <p className="tw-text-sm lg:tw-text-lg tw-font-bold tw-mb-1">
              {viewStory?.author}
            </p>
            <p className="tw-text-xs lg:tw-text-sm tw-text-ic-ink-6 tw-mb-0">
              {viewStory?.carrer}
            </p>
          </div>
        </div>
      </div>

      <div className="tw-flex lg:tw-flex-col tw-items-center tw-z-[1] tw-ml-auto lg:tw-mt-auto">
        {stories[lang].map((value: any, index: number) => (
          <div
            key={index}
            className={`tw-rounded-[4px] tw-mx-[3px] lg:tw-my-[3px] lg:tw-mx-0 ${
              activeIndex === index
                ? "tw-w-8 tw-h-1 lg:tw-w-1 lg:tw-h-8 tw-bg-brand-primary"
                : "tw-w-2 tw-h-1 lg:tw-w-1 l:tw-h-2 tw-bg-orange-4"
            }`}
          ></div>
        ))}
        <div className="tw-mx-2 lg:tw-mx-0 lg:tw-my-2">
          <FontAwesomeIcon
            icon={faArrowUp}
            className={`tw-rounded-full tw-border tw-text-brand-primary tw-border-brand-primary tw-px-[10px] tw-py-[8px] -tw-rotate-90 lg:tw-rotate-0`}
            onClick={() => swiperRef.current?.swiper.slidePrev()}
          />
        </div>
        <div>
          <FontAwesomeIcon
            icon={faArrowDown}
            className={`tw-rounded-full tw-border tw-text-brand-primary tw-border-brand-primary tw-px-[10px] tw-py-[8px] -tw-rotate-90 lg:tw-rotate-0`}
            onClick={() => swiperRef.current?.swiper.slideNext()}
          />
        </div>
      </div>
    </div>
  );
};

export default ListStories;
