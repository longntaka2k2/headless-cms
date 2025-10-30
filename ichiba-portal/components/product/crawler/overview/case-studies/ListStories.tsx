import { useTranslation } from "next-i18next";
import { GetCaseStudie } from "@/services/strapi";
import { useRouter } from "next/router";
import { RelativeImagePath } from "@/utils/utils";
import Card from "./Card";
import { Swiper, SwiperRef, SwiperSlide, SwiperClass } from "swiper/react";
import React, { useRef, useState } from "react";
import SvgIcon from "@/components/common/SvgIcon";
import clsx from "clsx";
interface PropsBoxStory {
  list?: [];
}

export default function ListStories(props: PropsBoxStory) {
  const swiperRef = useRef<SwiperRef | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const onSlideChange = (swiper: SwiperClass) =>
    setActiveIndex(swiper.realIndex);

  return (
    <div className="tw-relative">
      <Swiper
        ref={swiperRef}
        loop
        className="tw-rounded-xl tw-w-full"
        spaceBetween={20}
        slidesOffsetBefore={16}
        slidesOffsetAfter={16}
        breakpoints={{
          600: {
            slidesPerView: 1.1,
          },
          800: {
            slidesPerView: 2,
          },
          1000: {
            slidesPerView: 2.3,
          },
          1150: {
            slidesPerView: 2.7,
          },
          1250: {
            slidesPerView: 3,
          },
        }}
        onSlideChange={onSlideChange}
      >
        {props?.list?.map((item: any, index: number) => {
          return (
            <>
              <SwiperSlide className=" tw-py-5">
                <Card
                  key={index}
                  image={RelativeImagePath(
                    item?.attributes?.image?.data?.attributes?.url,
                  )}
                  width={item?.attributes?.image?.data?.attributes?.width}
                  height={item?.attributes?.image?.data?.attributes?.height}
                  logoBrand={RelativeImagePath(
                    item?.attributes?.logoBrand?.data?.attributes?.url,
                  )}
                  title={item?.attributes?.title}
                  content={item?.attributes?.content}
                  slug={item?.attributes?.slug}
                  description={item?.description}
                />
              </SwiperSlide>
            </>
          );
        })}
      </Swiper>

      <button
        onClick={() => swiperRef.current?.swiper.slidePrev()}
        className={clsx(
          "tw-absolute tw-top-[50%] tw-translate-y-[-50%] -tw-left-15",
          "tw-w-12 tw-h-12 tw-rounded-full tw-bg-white tw-hidden xl:tw-flex tw-justify-center tw-items-center",
          "tw-shadow-[0px_0px_20px_0px_rgba(0,_0,_0,_0.11)]",
        )}
      >
        <SvgIcon className="tw-rotate-90" icon="arrow-1" />
      </button>
      <button
        onClick={() => swiperRef.current?.swiper.slideNext()}
        className={clsx(
          "tw-absolute tw-top-[50%] tw-translate-y-[-50%] -tw-right-15",
          "tw-w-12 tw-h-12 tw-rounded-full tw-bg-white tw-hidden xl:tw-flex tw-justify-center tw-items-center",
          "tw-shadow-[0px_0px_20px_0px_rgba(0,_0,_0,_0.11)]",
        )}
      >
        <SvgIcon className="-tw-rotate-90" icon="arrow-1" />
      </button>
    </div>
  );
}
