import React, { useRef, useState } from "react";
import { useTranslation } from "next-i18next";
import { Swiper, SwiperSlide, SwiperClass, SwiperRef } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { LocaleNamespace } from "@/const/locale";
import ListItems from "@/components/product/pim/features/list-items";
import Image from "next/image";
import AspectRatio from "@/components/core/aspect-ratio";
import clsx from "clsx";

const ListMobile = () => {
  const { t } = useTranslation(LocaleNamespace.EcommerceFulfillment);

  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef<SwiperRef | null>(null);
  const onSlideChange = (swiper: SwiperClass) =>
    setActiveIndex(swiper.realIndex);
  const items = t(`whyChoose.items`, {
    returnObjects: true,
  }) as { title: string; contents: string[] }[];

  const onClickTab = (index: number) => {
    setActiveIndex(index);
    swiperRef.current?.swiper.slideTo(index);
    swiperRef.current?.swiper.autoplay.start();
  };

  return (
    <div className="container lg:tw-hidden tw-mt-10">
      <div className="tw-items-center tw-flex tw-gap-1 pb-3 tw-h-[50px]">
        {items.map((item, index) => (
          <div
            key={index}
            className={clsx("tw-flex tw-gap-1 tw-items-center", {
              "tw-flex-1": index !== items.length - 1,
            })}
          >
            <div
              className={clsx(
                "tw-border tw-border-brand-primary tw-rounded-full tw-transition-all tw-ease-in tw-duration-300",
                index === activeIndex
                  ? "tw-w-9 tw-h-9 sm:tw-w-12 sm:tw-h-12 md:tw-w-16 md:tw-h-16 tw-text-2xl md:tw-text-3xl"
                  : "tw-w-8 tw-h-8 sm:tw-w-10 sm:tw-h-10 md:tw-w-12 md:tw-h-12 tw-text-sm md:tw-text-base ",
              )}
              onClick={() => onClickTab(index)}
            >
              <div
                className={clsx(
                  "tw-w-full tw-h-full tw-flex tw-items-center tw-justify-center tw-font-bold tw-rounded-full tw-text-white tw-border-white",
                  index === activeIndex ? "tw-border" : "tw-border-2",
                )}
                style={{
                  background:
                    "linear-gradient(0deg, #FF7400 -0.66%, #FFAB52 99.49%)",
                }}
              >
                {index + 1}
              </div>
            </div>
            {index !== items.length - 1 && (
              <div
                className="tw-flex-1 tw-rounded-3xl tw-h-0.5"
                style={{
                  background:
                    "linear-gradient(0deg, #FF7400 -0.66%, #FFAB52 99.49%)",
                }}
              />
            )}
          </div>
        ))}
      </div>
      <Swiper
        loop
        spaceBetween={24}
        autoplay
        slidesPerView={1}
        onSlideChange={onSlideChange}
        className="tw-h-full"
        modules={[Autoplay]}
        ref={swiperRef}
      >
        {items.map((item, index) => (
          <SwiperSlide className="tw-h-full" key={index}>
            <div className="tw-flex tw-flex-col tw-h-full tw-gap-6">
              <AspectRatio x={350} y={243}>
                <div className="tw-relative tw-h-full tw-w-full">
                  <Image
                    src="/icons/pim/empty-img-bg.svg"
                    fill
                    className="tw-object-cover tw-rounded"
                    alt=""
                  />
                </div>
              </AspectRatio>

              <div className="tw-flex tw-flex-col tw-gap-2">
                <span className="tw-text-xl tw-font-bold">
                  #{index + 1}. {item.title}
                </span>
                <ListItems items={item.contents} />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ListMobile;
