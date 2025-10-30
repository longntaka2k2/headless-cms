"use client";
import clsx from "clsx";
import { FBEButton, FBEButtonProps } from "./FBEButton";
import { Swiper as SwiperType } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import React, { useRef } from "react";

interface FBEListProps {
  list: { title: string; content: string }[];
  onClick: FBEButtonProps["onClick"];
  activeIndex: number;
}

export const FBEMobileList = ({ list, onClick, activeIndex }: FBEListProps) => {
  const sliderRef = useRef<SwiperType>();
  return (
    <Swiper
      onBeforeInit={(swiper) => {
        sliderRef.current = swiper;
      }}
      spaceBetween={16}
      slidesPerView={1.8}
      loop={false}
    >
      {list.map((item, index) => {
        const isActive = activeIndex === index;
        return (
          <SwiperSlide
            key={index}
            className="no-distance !w-fit mr-4 first:ml-4"
          >
            <FBEButton
              index={index}
              title={item.title}
              isActive={isActive}
              onClick={onClick}
            />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export const FBEDesktopList = ({
  list,
  onClick,
  activeIndex,
}: FBEListProps) => {
  return (
    <div className="flex flex-col gap-4">
      {list.map((item, index) => {
        const isActive = activeIndex === index;
        return (
          <React.Fragment key={index}>
            <FBEButton
              index={index}
              title={item.title}
              isActive={isActive}
              onClick={onClick}
            />
          </React.Fragment>
        );
      })}
    </div>
  );
};
