"use client";
import moneyIcon from "@/public/images/icons/services/money.svg";
import safetyIcon from "@/public/images/icons/services/safety.svg";
import temperatureIcon from "@/public/images/icons/services/temperature.svg";
import areaIcon from "@/public/images/icons/services/area.svg";
import personalizationIcon from "@/public/images/icons/services/personalization.svg";
import { useRef, useState } from "react";
import Image from "next/image";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { SwiperSlide, Swiper, SwiperClass } from "swiper/react";
import clsx from "clsx";
import { Autoplay } from "swiper/modules";
import EzImage from "../commons/EzImage";

interface Content {
  img: string;
  icon: StaticImport;
  title: string;
  subTitle: string;
  des: string;
}
export const SubPanel = ({ lang }: any) => {
  const contents: Content[] = [
    {
      ...lang.services.warehouseFulfillment.storage.contents[0],
      img: "/uploads/area_db5a37a601.png",
      icon: areaIcon,
    },
    {
      ...lang.services.warehouseFulfillment.storage.contents[1],
      img: "/uploads/price_584b9dffc8.png",
      icon: moneyIcon,
    },
    {
      ...lang.services.warehouseFulfillment.storage.contents[2],
      img: "/uploads/safety_4b03de1673.png",
      icon: safetyIcon,
    },
    {
      ...lang.services.warehouseFulfillment.storage.contents[3],
      img: "/uploads/temperature_04f4c33786.png",
      icon: temperatureIcon,
    },
    {
      ...lang.services.warehouseFulfillment.storage.contents[4],
      img: "/uploads/personalization_d9407f0151.png",
      icon: personalizationIcon,
    },
  ];
  const [activeItem, setActiveItem] = useState<Content>(contents[0]);
  const refSwiper = useRef<SwiperClass>();
  const onSlideChange = (x: number) => {
    setActiveItem(contents[x]);
  };

  return (
    <>
      <div className="container relative z-10 bg-gray-11">
        <div className="flex flex-col lg:flex-row justify-between px-4 lg:px-6 py-4 bg-white gap-6">
          {contents
            .filter((x) => x.img != activeItem.img)
            .map((x, idx) => (
              <article key={idx} className="flex justify-between gap-6">
                <div className="flex gap-4">
                  <Image src={x.icon} alt={x.title} width={24} height={24} />
                  <div>
                    <p className="font-bold">{x.title}</p>
                    <p className="text-sm">{x.subTitle}</p>
                  </div>
                </div>
              </article>
            ))}
        </div>
        <div>
          <div className="flex justify-between py-4  lg:px-6 px-4 bg-white">
            <article className="flex justify-between gap-6">
              <div className="flex gap-4">
                <Image src={activeItem.icon} alt={activeItem.title} width={24} height={24} />
                <div>
                  <p className="font-bold">{activeItem.title}</p>
                  <p className="font-bold text-sm">{activeItem.subTitle}</p>
                </div>
              </div>
            </article>
            {/* controller */}
            <div className="flex gap-2 min-w-fit">
              <div
                className={clsx(
                  "gap-3 bg-gray-11 p-3 cursor-pointer",
                  "border-4 border-gray-11 active:bg-white"
                )}
                onClick={() => refSwiper.current?.slidePrev()}
              >
                <FontAwesomeIcon icon={faChevronLeft} width={24} height={24} />
              </div>
              <div
                className={clsx(
                  "gap-3 bg-gray-11 p-3 cursor-pointer",
                  "border-4 border-gray-11 active:bg-white"
                )}
                onClick={() => refSwiper.current?.slideNext()}
              >
                <FontAwesomeIcon icon={faChevronRight} width={24} height={24} />
              </div>
            </div>
          </div>
          <Swiper
            onSwiper={(ref) => (refSwiper.current = ref)}
            onSlideChange={(x) => onSlideChange(x.realIndex)}
            slidesPerView={1}
            spaceBetween={0}
            modules={[Autoplay]}
            autoplay={{ delay: 5000 }}
            loop={true}
          >
            {contents.map((x, idx) => (
              <SwiperSlide key={idx}>
                <div className="flex flex-col lg:flex-row lg:gap-[76px]">
                  <div className="px-4 lg:px-16 py-10 flex-1">
                    <p className="pb-6 font-bold uppercase text-2xl">
                      {x.subTitle}
                    </p>
                    <p className="text-sm">{x.des}</p>
                  </div>
                  <EzImage
                    src={x.img}
                    alt={x.title}
                    width={576}
                    height={320}
                    className="flex-1"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
};
