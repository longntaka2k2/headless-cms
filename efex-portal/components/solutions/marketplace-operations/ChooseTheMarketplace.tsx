"use client";
import React from "react";
import Image from "next/image";
import clsx from "clsx";
import Link from "next/link";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import { useRef, useState } from "react";
import { RelativeImagePath } from "@/utils/ultils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
const ChooseTheMarketplace = ({
  lang,
  locale,
}: {
  lang: any;
  locale: string;
}) => {
  const sliderRef = useRef<SwiperClass>();
  const [sliderActive, setSliderActive] = useState<number>(0);
  return (
    <div
      className={clsx(
        "bg-[url('https://strapi-efex.ichiba.net/uploads/Frame_1171279969_879745007d.svg')]",
        "lg:bg-[url('https://strapi-efex.ichiba.net/uploads/Sell_on_san_403c2dc00f.svg')]",
        "overflow-hidden py-8 lg:py-20 px-4"
      )}
    >
      <div className="relative container flex flex-col lg:flex-row gap-6 lg:gap-10">
        <div className="lg:w-2/5">
          <h2 className="text-lg lg:text-4xl leading-[26px] text-white">
            {lang?.heading}
          </h2>
        </div>
        <div className="lg:w-3/5">
          <Swiper
            onBeforeInit={(swiper) => {
              sliderRef.current = swiper;
            }}
            spaceBetween={24}
            onSlideChange={(e) => setSliderActive(e.activeIndex)}
            className="w-full"
            slidesOffsetBefore={16}
            slidesOffsetAfter={16}
            slidesPerView={"auto"}
            breakpoints={{
              640: {
                spaceBetween: 12,
              },
              1024: {
                spaceBetween: 24,
                slidesOffsetAfter: 64,
                slidesOffsetBefore: 64,
              },
            }}
          >
            {lang.items.map((x: any, idx: number) => (
              <SwiperSlide
                className="relative scroll-m-16 max-w-[202px] lg:max-w-[300px]"
                key={idx}
              >
                <Image
                  src={RelativeImagePath(x.image)}
                  width={300}
                  height={360}
                  alt="#"
                  className="w-full"
                />

                <div className="absolute top-[14px] left-3 lg:left-5 text-lg lg:text-2xl font-bold text-white">
                  <p className="">{lang.sellOn}</p>
                  <p className="text-[#E0B171]">{x.title}</p>
                </div>

                <Link
                  href={`/${locale}/${x.link}`}
                  target="_blank"
                  className={clsx(
                    "absolute bottom-4 lg:bottom-5 right-9 lg:right-5",
                    "bg-white text-sm font-medium text-center w-max rounded-lg px-6 py-3 hover:opacity-90 flex items-center gap-1"
                  )}
                >
                  {lang?.textBtn}
                  <FontAwesomeIcon icon={faArrowRight} />
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="hidden lg:block absolute top-[50%] translate-y-[-50%] -right-15">
          <FontAwesomeIcon
            role="button"
            onClick={() => sliderRef.current?.slideNext()}
            icon={faChevronRight}
            width={24}
            height={24}
            className={clsx("hover:opacity-80 text-white w-[50px] h-[50px]")}
          />
        </div>
      </div>
    </div>
  );
};

export default ChooseTheMarketplace;
