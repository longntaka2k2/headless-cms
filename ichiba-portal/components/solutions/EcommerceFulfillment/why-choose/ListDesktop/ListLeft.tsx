import AspectRatio from "@/components/core/aspect-ratio";
import ListItems from "@/components/product/pim/features/list-items";
import Image from "next/image";
import React, { useRef, useState } from "react";
import { useTranslation } from "next-i18next";
import { Swiper, SwiperSlide, SwiperClass, SwiperRef } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { LocaleNamespace } from "@/const/locale";
import clsx from "clsx";
import SvgIcon from "@/components/common/SvgIcon";

const ListLeft = () => {
  const { t } = useTranslation(LocaleNamespace.EcommerceFulfillment);
  const swiperRef = useRef<SwiperRef | null>(null);

  const [activeIndex, setActiveIndex] = useState(0);

  const onSlideChange = (swiper: SwiperClass) =>
    setActiveIndex(swiper.realIndex);

  const items = t(`whyChoose.items`, {
    returnObjects: true,
  }) as { title: string; contents: string[] }[];

  const icons = [
    "package-box-1",
    "box-delivery-conveyor-belts",
    "courier-hands-package-box",
    "warehouse-delivery-packages",
  ];

  return (
    <div className="tw-relative">
      <div className="tw-max-w-[1444px]">
        <AspectRatio x={1444} y={760}>
          <div className="tw-relative tw-w-full tw-h-full lg:tw-bg-[url('/icons/ecommerce-fulfillment/why-choose-bg-left.png')] tw-bg-no-repeat tw-bg-cover"></div>
        </AspectRatio>
      </div>
      <div className="tw-absolute tw-inset-0">
        <div className="container tw-h-full">
          <div className="tw-flex tw-items-center tw-w-full tw-py-7 tw-h-full tw-gap-16 2xl:tw-gap-12">
            <div className="tw-flex-1 tw-overflow-hidden tw-h-full">
              <Swiper
                loop
                ref={swiperRef}
                spaceBetween={24}
                slidesPerView={1}
                onSlideChange={onSlideChange}
                className="tw-h-full"
              >
                {items.slice(0, 4).map((item, index) => (
                  <SwiperSlide className="tw-h-full" key={index}>
                    <div className="tw-flex tw-flex-col tw-h-full tw-gap-7">
                      <div className="tw-flex tw-flex-col tw-gap-4">
                        <span className="tw-text-xl tw-font-bold">
                          #{index + 1}. {item.title}
                        </span>
                        <ListItems items={item.contents} />
                      </div>
                      <div className="tw-flex-1 tw-flex tw-justify-center tw-items-end tw-overflow-hidden">
                        <div className="tw-h-[500px] tw-max-h-full tw-aspect-square tw-relative">
                          <Image
                            src="/icons/pim/empty-img-bg.svg"
                            fill
                            className="tw-object-cover tw-rounded-xl"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
            <div className="tw-flex tw-flex-col tw-justify-between tw-h-full">
              {items.slice(0, 4).map((item, index) => (
                <button
                  key={index}
                  onClick={() => {
                    swiperRef.current?.swiper.slideTo(index);
                  }}
                  className={clsx(
                    "tw-w-[260px] lg:tw-min-h-[104px] xl:tw-min-h-[120px] tw-rounded-[100px] tw-flex tw-items-center tw-justify-center tw-gap-4 tw-bg-white tw-p-4 xl:tw-p-6",
                    {
                      "2xl:tw-translate-x-14": [1, 2].includes(index),
                      "2xl:tw-translate-x-0 -tw-translate-x-12": [
                        0, 3,
                      ].includes(index),
                    },
                    index === activeIndex
                      ? "tw-text-white tw-font-bold"
                      : "tw-text-ic-ink-5",
                  )}
                  style={{
                    boxShadow: "5px 5px 20px 0px rgba(0, 0, 0, 0.20)",
                    ...(index === activeIndex
                      ? {
                          background:
                            "linear-gradient(0deg, #FF7400 -0.66%, #FFAB52 99.49%)",
                        }
                      : {}),
                  }}
                >
                  <SvgIcon width={40} height={40} icon={icons[index]} />
                  <span className="tw-flex-1 tw-text-left">
                    #{index + 1} {item.title}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListLeft;
