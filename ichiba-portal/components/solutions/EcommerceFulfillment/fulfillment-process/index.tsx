import React, { useRef, useState } from "react";
import { useTranslation } from "next-i18next";
import { LocaleNamespace } from "@/const/locale";
import classes from "./FulfillmentProcess.module.scss";
import { Swiper, SwiperSlide, SwiperClass, SwiperRef } from "swiper/react";
import Image from "next/image";
import { Autoplay } from "swiper/modules";
import DesktopTabs from "./DesktopTabs";
import MobileTabs from "./MobileTabs";
import AspectRatio from "@/components/core/aspect-ratio";

const FulfillmentProcess = () => {
  const { t } = useTranslation(LocaleNamespace.EcommerceFulfillment);
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef<SwiperRef | null>(null);
  const onSlideChange = (swiper: SwiperClass) => {
    setActiveIndex(swiper.realIndex);
  };

  const images = [
    "https://cms-strapi.ichiba.net/uploads/connect_with_ecommerce_sites_81480a8e98.png",
    "https://cms-strapi.ichiba.net/uploads/order_processing_9a6177430f.png",
    "https://cms-strapi.ichiba.net/uploads/inventory_management_2f0b34f309.png",
    "https://cms-strapi.ichiba.net/uploads/picking_packing_eca5e65388.png",
    "https://cms-strapi.ichiba.net/uploads/labeling_shipping_a347348dd4.png",
    "https://cms-strapi.ichiba.net/uploads/update_realtime_97979af184.png",
  ];

  const onClickTab = (index: number) => {
    swiperRef.current?.swiper.slideTo(index);
    swiperRef.current?.swiper.autoplay.start();
  };

  return (
    <div className={classes.root}>
      <div className="container">
        <div className="tw-py-6 xl:tw-py-10">
          <div className="tw-max-w-[792px] tw-mx-auto tw-text-center">
            <h3 className="tw-mb-2 tw-text-2xl xl:tw-text-4xl tw-font-bold">
              {t("fulfillmentProcess.title")}
            </h3>
            <span>{t("fulfillmentProcess.content")}</span>
          </div>
          <MobileTabs onClickTab={onClickTab} activeIndex={activeIndex} />
          <DesktopTabs onClickTab={onClickTab} activeIndex={activeIndex} />
          <div className="tw-mt-6 xl:mt-8">
            <Swiper
              ref={swiperRef}
              slidesOffsetAfter={80}
              spaceBetween={24}
              slidesPerView="auto"
              onSlideChange={onSlideChange}
              autoplay={{ delay: 7000 }}
              modules={[Autoplay]}
            >
              {(
                t(`fulfillmentProcess.items`, {
                  returnObjects: true,
                }) as string[]
              ).map((item: any, index: number) => (
                <SwiperSlide className={classes.swiper__slide} key={index}>
                  <div className="tw-flex tw-flex-col xl:tw-flex-row tw-gap-6 xl:tw-items-center">
                    <div className="tw-w-[400px] tw-max-w-full tw-relative tw-mx-auto">
                      <AspectRatio x={400} y={360}>
                        <div className="tw-relative tw-w-full tw-h-full">
                          <Image
                            fill
                            alt=""
                            className="tw-object-contain"
                            src={images[index]}
                          />
                        </div>
                      </AspectRatio>
                    </div>
                    <div className="tw-flex-1 tw-flex tw-flex-col">
                      <p className="tw-mb-2 tw-font-bold">
                        {index + 1}. {item.title}
                      </p>
                      <span>{item.content}</span>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FulfillmentProcess;
