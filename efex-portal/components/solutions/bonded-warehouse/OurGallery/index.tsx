"use client";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Swiper, SwiperSlide, SwiperClass, SwiperRef } from "swiper/react";
import "swiper/css/grid";
import { useState, useRef } from "react";
import EzImage from "@/components/commons/EzImage";
import { Grid } from "swiper/modules";
import useWidth from "@/hooks/useWidth";
import clsx from "clsx";

const OurGallery = ({ lang }: any) => {
  const width = useWidth();
  const contents = [
    "/uploads/Image_2_be0beb17d6.png",
    "/uploads/Image_3_d14b8cafef.png",
    "/uploads/Image_4_c3117d3e02.png",
    "/uploads/Image_5_652a37a839.png",
    "/uploads/Image_2_be0beb17d6.png",
    "/uploads/Image_3_d14b8cafef.png",
    "/uploads/Image_4_c3117d3e02.png",
    "/uploads/Image_5_652a37a839.png",
  ];
  const swiperRef = useRef<SwiperClass>();

  return (
    <section className="pt-6 lg:py-10">
      <div className="container flex justify-between mb-4 lg:mb-10 px-4">
        <h2 className="font-bold text-left text-2xl lg:text-4xl leading-8 lg:leading-[48px]">
          {lang}
        </h2>
        <div className="flex gap-6">
          <div
            role="button"
            className={clsx(
              "rounded-full h-fit py-2 px-3 border border-ic-ink-6 text-ic-ink-6",
              "hover:bg-gray-300"
            )}
            onClick={() => swiperRef?.current?.slidePrev()}
          >
            <FontAwesomeIcon icon={faArrowLeft} />
          </div>
          <div
            role="button"
            className={clsx(
              "rounded-full h-fit py-2 px-3 border border-ic-ink-6 text-ic-ink-6",
              "hover:bg-gray-300"
            )}
            onClick={() => swiperRef?.current?.slideNext()}
          >
            <FontAwesomeIcon icon={faArrowLeft} className="rotate-180" />
          </div>
        </div>
      </div>
      <div className="w-full">
        <Swiper
          slidesPerView={2}
          grid={{ rows: 2 }}
          modules={[Grid]}
          spaceBetween={8}
          breakpoints={{
            984: {
              grid: { rows: 1 },
              slidesPerView: 4,
              spaceBetween: 24,
              modules: [Grid],
            },
          }}
          onSwiper={(instance) => (swiperRef.current = instance)}
          className="w-full h-[400px] lg:h-full mx-auto"
        >
          {contents.map((x, idx) => (
            <SwiperSlide
              key={idx}
              className="!h-[calc((99%_-_24px)/2)]"
            >
              <EzImage
                src={x}
                alt="img"
                width={460}
                height={460}
                quality={100}
                className="h-[191px] lg:h-auto"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};
export default OurGallery;
