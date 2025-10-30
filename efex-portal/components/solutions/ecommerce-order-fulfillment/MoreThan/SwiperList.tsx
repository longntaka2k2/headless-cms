"use client";
import clsx from "clsx";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import { useRef } from "react";
import { Swiper as SwiperType } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

export const SwiperList = ({
  contents,
}: {
  contents: {
    icon: string | StaticImport;
    title: string;
    description: string;
  }[];
}) => {
  const sliderRef = useRef<SwiperType>();

  return (
    <Swiper
      onBeforeInit={(swiper) => {
        sliderRef.current = swiper;
      }}
      spaceBetween={16}
      slidesOffsetAfter={16}
      slidesOffsetBefore={16}
      centeredSlides
      centeredSlidesBounds
      slidesPerView={"auto"}
      className="flex"
    >
      {contents.map((item) => (
        <SwiperSlide
          className={clsx(
            "!h-auto w-full max-w-[260px] p-4 pb-5 rounded-xl border border-[#F5F5F5] bg-white shadow-[0px_8px_16px_0px_rgba(0,0,0,0.05) mb-6"
          )}
          key={`${item.title}`}
        >
          <div className="w-[52px] h-[52px]] bg-[#F2F4F8] rounded-full flex justify-center items-center">
            <Image src={item.icon} alt={item.title} quality={100} />
          </div>
          <h3 className="mt-3 font-bold text-brand-brandb w-[228px]">
            {item.title}
          </h3>
          <p className="mt-2 text-sm text-ic-ink-6">{item.description}</p>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
