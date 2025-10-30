import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperRef, SwiperSlide, SwiperClass } from "swiper/react";
import { stories } from "./dataset";
import clsx from "clsx";
import Link from "next/link";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Language } from "@/constants/language";

const ListStories = ({ lang, locale }: { lang: any; locale: string }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const elementRef = useRef(null);
  const [isVisible, setVisible] = useState(false);

  const onSlideChange = (swiper: SwiperClass) =>
    setActiveIndex(swiper.realIndex);

  const language = locale as Language;

  const swiperRef = useRef<SwiperRef | null>(null);

  const viewStory = stories[language][activeIndex]
    ? stories[language][activeIndex]
    : null;

  const disableSwipe = stories[language].length <= 1;

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
      { threshold: 1 / 3 }
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
      className="grid lg:grid-cols-2 items-center gap-6 lg:gap-0 py-5 lg:py-0 lg:px-0 relative overflow-hidden"
      ref={elementRef}
    >
      <div
        className={clsx(
          "lg:px-10 rounded-xl flex flex-col gap-10",
          isVisible ? "animate-showOn lg:animate-leftShow" : "opacity-0"
        )}
      >
        <span className="text-base">
          <span className="text-5xl font-bold">“</span>
          {viewStory?.content}
        </span>
        <div className="flex gap-5 items-center">
          <div className="w-[46px] h-[46px] lg:w-[60px] lg:h-[60px] rounded-full overflow-hidden">
            <Image
              src={viewStory?.avatar as string}
              width={40}
              height={40}
              alt={viewStory?.author as string}
              className="w-full h-full"
            />
          </div>
          <div>
            <p className="text-lg lg:text-xl font-bold mb-1 text-[#597EF7]">
              {viewStory?.author}
            </p>
            <p className="text-sm text-ic-ink-6 mb-0">{viewStory?.carrer}</p>
          </div>
        </div>
      </div>
      <div
        className={clsx(
          "bg-white rounded-2xl p-5",
          isVisible ? "animate-showOn lg:animate-rightShow" : "opacity-0"
        )}
      >
        <Swiper
          ref={swiperRef}
          loop
          className="max-w-[290px] w-full h-[189px] sm:max-w-[542px] sm:h-[286px] rounded-xl"
          spaceBetween={0}
          slidesPerView={1}
          onSlideChange={onSlideChange}
        >
          {stories[language].map((story, index) => (
            <SwiperSlide
              className="w-[318px] h-[189px] sm:w-[542px] sm:h-[286px] rounded-xl overflow-hidden"
              key={index}
            >
              <Image
                className="object-cover"
                fill
                alt="icon"
                src={story.image}
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="flex gap-3 items-center mt-5 relative">
          <div className="flex gap-3 items-center">
            <div className="w-[28px] h-[28px] lg:w-[40px] lg:h-[40px] rounded-full overflow-hidden">
              <Image
                src={viewStory?.avatar as string}
                width={40}
                height={40}
                alt={viewStory?.author as string}
                className="w-full h-full"
              />
            </div>
            <p className="text-xs lg:text-sm text-[#597EF7] mb-0">
              {viewStory?.author}
            </p>
            <div className="hidden lg:flex gap-3 items-center">
              {viewStory?.photoGallery.map((item, index) => (
                <div
                  key={index}
                  className="w-[28px] h-[28px] lg:w-[40px] lg:h-[40px] rounded-full overflow-hidden"
                >
                  <Image
                    src={item as string}
                    width={40}
                    height={40}
                    alt={viewStory?.author as string}
                    className="w-full h-full"
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="flex gap-2 absolute bottom-0 right-0">
            <button
              disabled={disableSwipe}
              onClick={() => swiperRef.current?.swiper.slidePrev()}
              className="w-8 h-8 lg:w-11 lg:h-11 rounded-full flex items-center justify-center relative shadow-8 bg-primary-1"
            >
              <FontAwesomeIcon icon={faArrowLeft} />
            </button>
            <button
              disabled={disableSwipe}
              onClick={() => swiperRef.current?.swiper.slideNext()}
              className="w-8 h-8 lg:w-11 lg:h-11 rounded-full flex items-center justify-center relative shadow-8 bg-primary-1"
            >
              <FontAwesomeIcon icon={faArrowRight} />
            </button>
          </div>
        </div>
      </div>
      <div className="lg:hidden mx-auto">
        <Link
          target="_blank"
          href={`/${locale}/customer-success-studies`}
          className={clsx(
            "no-underline px-6 py-3 rounded-lg bg-brand-primary text-sm lg:text-base",
            "text-center text-white"
          )}
        >
          {lang.textBtn}
        </Link>
      </div>
    </div>
  );
};

export default ListStories;
