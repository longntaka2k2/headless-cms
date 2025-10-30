"use client";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import clsx from "clsx";
import { useRef } from "react";
import { SwiperSlide, Swiper, SwiperClass } from "swiper/react";
import { Card } from "./Card";

const MobileSlide = ({
  className,
  contents,
}: {
  contents: any[];
  className?: string;
}) => {
  const refSwiper = useRef<SwiperClass>();
  return (
    <div className={clsx("px-4", className)}>
      <div className="flex justify-between items-center mb-3">
        <p className="font-bold text-lg">Viet Nam(2)</p>
        <div className="flex justify-between gap-2">
          <button
            className="aspect-square w-9 rounded-full border border-[#333] text-center py-1"
            onClick={() => refSwiper.current?.slidePrev()}
          >
            <FontAwesomeIcon icon={faArrowRight} className="rotate-180" />
          </button>
          <button
            className="aspect-square w-9 rounded-full border border-[#333] text-center py-1"
            onClick={() => refSwiper.current?.slideNext()}
          >
            <FontAwesomeIcon icon={faArrowRight} />
          </button>
        </div>
      </div>
      <Swiper slidesPerView={1} onInit={(x) => (refSwiper.current = x)}>
        <SwiperSlide>
          <Card {...contents[0]} className="!static" />
        </SwiperSlide>
        <SwiperSlide>
          <Card {...contents[1]} className="!static" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
export default MobileSlide;
