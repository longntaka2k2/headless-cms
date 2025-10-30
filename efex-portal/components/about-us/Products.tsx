import clsx from "clsx";
import { useRef, useState } from "react";

import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
const Products = ({ lang }: { lang: any }) => {
  const [sliderActive, setSliderActive] = useState<number>(0);
  const sliderRef = useRef<SwiperClass>();
  return (
    <div className="relative py-6 lg:pt-20 lg:pb-10 overflow-hidden">
      <div className="container px-4">
        <h2 className="text-2xl lg:text-4xl font-bold lg:leading-[48px]">
          {lang.heading}
        </h2>

        <div
          className={clsx(
            "relative w-[87%] lg:w-4/5 mt-10 mb-4 lg:mt-15 lg:mb-10"
          )}
        >
          <Swiper
            onBeforeInit={(swiper) => {
              sliderRef.current = swiper;
            }}
            spaceBetween={24}
            loop
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
                className="max-w-[280px] lg:max-w-[486px] transform-none"
                key={idx}
              >
                <Image
                  src={x.image}
                  width={546}
                  height={546}
                  alt="EFEX"
                  className="max-w-[280px] lg:max-w-[486px] w-full h-full"
                />
                <p className="text-sm lg:text-lg font-bold text-center mt-2 lg:mt-4">
                  {x.title}
                </p>
              </SwiperSlide>
            ))}
          </Swiper>

          <FontAwesomeIcon
            width={24}
            height={24}
            role="button"
            icon={faArrowLeft}
            onClick={() => sliderRef.current?.slidePrev()}
            className={clsx(
              "absolute top-[50%] translate-y-[-50%] left-3 z-10",
              "p-3 bg-[rgba(255,_255,_255,_0.20)] rounded-xl",
              "lg:text-white hover:opacity-80 hidden lg:block"
            )}
          />
          <FontAwesomeIcon
            width={24}
            height={24}
            role="button"
            onClick={() => sliderRef.current?.slideNext()}
            icon={faArrowRight}
            className={clsx(
              "absolute top-[50%] translate-y-[-50%] right-[-45px] lg:right-3 z-10",
              "rounded-xl p-3 bg-gray-300 lg:bg-[rgba(255,_255,_255,_0.20)]",
              "text-white hover:opacity-80"
            )}
          />
        </div>

        <p className="text-sm lg:text-lg lg:w-[85%]">
          <span className="text-brand-primary font-bold">
            {lang.subHeading[0]}
          </span>
          {lang.subHeading[1]}
        </p>
      </div>
      <Image
        src="https://strapi-efex.ichiba.net/uploads/Map_fb5c883e0a.svg"
        width={1309}
        height={722}
        alt="EFEX"
        className={clsx(
          "w-[392px] h-[227px] lg:w-[1309px] lg:h-[722px] -z-1",
          "absolute top-0 right-0-0 lg:right-[70px] lg:top-20"
        )}
      />
    </div>
  );
};

export default Products;
