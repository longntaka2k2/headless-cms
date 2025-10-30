"use client";
import {
  faArrowRight,
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import clsx from "clsx";
import Link from "next/link";
import { useRef, useState } from "react";
import { FreeMode } from "swiper/modules";
import { SwiperSlide, Swiper, SwiperClass } from "swiper/react";
import { SlideContent } from "./shared/SlideContent";

const SellInJapan = ({ lang }: { lang: any }) => {
  const { sellInJapan } = lang.home;
  const contents = [
    {
      title: lang.home.common.airFreight,
      image:
        "https://strapi-ezbuy.ichiba.net/uploads/Air_Freight_0772923bc1.png",
    },
    {
      title: lang.home.common.seaFreight,
      image:
        "https://strapi-ezbuy.ichiba.net/uploads/Sea_Freight_af61f9ea80.png",
    },
    {
      title: lang.home.common.surfaceFreight,
      image:
        "https://strapi-ezbuy.ichiba.net/uploads/Surface_Freight_b3fae8ee69.png",
    },
  ];
  const refSwiper = useRef<SwiperClass>();
  const [active, setActive] = useState(0);
  return (
    <section className="relative md:h-[700px] mb-16">
      <div className=" container mx-auto">
        <div className="">
          <div className="relative top-10 z-10">
            <div className="flex flex-col-reverse py-12 pr-6 pl-0 z-10">
              <div className="md:w-[576px] flex flex-col gap-6 px-4">
                <div className="flex flex-col items-start justify-start gap-[8px]">
                  <p className="relative text-2xl font-bold">
                    {sellInJapan.heading}
                  </p>
                  <div className="self-stretch relative text-base leading-[150%]">
                    {sellInJapan.subHeading}
                  </div>
                </div>
                <Link
                  href={"/services/sell-in-japan"}
                  className="flex flex-row items-center justify-start gap-[12px] text-sm text-[#00194F]"
                >
                  <div className="relative leading-[150%] font-medium">
                    {lang.common.learnMore}{" "}
                  </div>
                  <div className="relative text-base leading-[150%] text-center flex items-center justify-center w-4 h-4 shrink-0">
                    <FontAwesomeIcon icon={faArrowRight} />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div
          className={clsx(
            "md:absolute top-0 md:right-[0] md:w-[65%] h-[480px]",
            "bg-[url('https://strapi-ezbuy.ichiba.net/uploads/Sell_in_japan_5f8d681c7f.png')]",
            "bg-cover bg-center"
          )}
        >
          <div
            className={clsx(
              "absolute lg:hidden bottom-[-100px] gap-4 text-center text-base overflow-hidden",
              "flex flex-col items-start justify-start w-full"
            )}
          >
            <div className="hidden lg:flex flex-row items-start justify-start gap-2 text-white">
              <div className="bg-gray-2 flex flex-col p-2 items-center justify-center">
                <div className="leading-[150%] inline-block w-6 h-6 shrink-0">
                  <FontAwesomeIcon icon={faChevronLeft} />
                </div>
              </div>
              <div className="bg-gray-2 flex flex-col p-2 items-center justify-center">
                <div className="leading-[150%] inline-block w-6 h-6 shrink-0">
                  <FontAwesomeIcon icon={faChevronRight} />
                </div>
              </div>
            </div>
            <Swiper
              onSwiper={(ref) => (refSwiper.current = ref)}
              modules={[FreeMode]}
              onSlideChange={(x) => setActive(x.activeIndex)}
              slidesPerView={1.5}
              spaceBetween={10}
              navigation={{ enabled: true }}
              breakpoints={{
                984: {
                  slidesPerView: 4.3,
                  spaceBetween: 10,
                },
              }}
              className="text-left text-sm text-gray-10 overflow-hidden w-full"
            >
              {contents.map((content, idx) => (
                <SwiperSlide key={idx}>
                  <SlideContent {...content} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};
export default SellInJapan;
