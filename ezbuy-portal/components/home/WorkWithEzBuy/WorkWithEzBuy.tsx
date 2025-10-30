"use client";

import Image from "next/image";
import CustomSlide from "./Slider";
import {
  faArrowRight,
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import clsx from "clsx";
import Link from "next/link";
import { useRef, useState } from "react";
import { Autoplay, FreeMode } from "swiper/modules";
import { SwiperSlide, Swiper, SwiperClass } from "swiper/react";

const SlideItem = ({
  heading,
  description,
  image,
}: {
  heading: string;
  description?: string;
  image: string;
}) => {
  return (
    <article className="bg-whitesmoke-100 flex flex-col items-start justify-start  h-full">
      <div className="self-stretch flex flex-col p-6 items-start justify-start gap-[8px] bg-whitesmoke-100">
        <b className="self-stretch relative leading-[150%] text-base lg:text-3xl h-12 lg:h-auto">
          {heading}
        </b>
        <div className="self-stretch relative text-base leading-[150%]">
          {description}
        </div>
      </div>
      <Image
        className="self-stretch max-w-full overflow-hidden h-60 shrink-0 object-contain"
        alt={heading}
        width={576}
        height={240}
        quality={100}
        src={image}
      />
    </article>
  );
};
const WorkWithEzBuy = ({ lang }: { lang: any }) => {
  const { workWithEzbuy } = lang.home;
  const contents = [
    {
      ...workWithEzbuy.article[0],
      image:
        "https://strapi-ezbuy.ichiba.net/uploads/Borderless_shopping_and_shipping_abd5946c25.png",
    },
    {
      ...workWithEzbuy.article[1],
      image:
        "https://strapi-ezbuy.ichiba.net/uploads/Hands_off_warehouse_fulfillment_46e0d0c6b6.png",
    },
    {
      ...workWithEzbuy.article[2],
      image:
        "https://strapi-ezbuy.ichiba.net/uploads/Adaptable_purchase_in_wholesale_e_commerce_83f01858cd.png",
    },
    {
      ...workWithEzbuy.article[3],
      image:
        "https://strapi-ezbuy.ichiba.net/uploads/Real_time_order_tracking_6910b97f99.png",
    },
    {
      ...workWithEzbuy.article[4],
      image:
        "https://strapi-ezbuy.ichiba.net/uploads/Risk_freely_expedite_Japanese_market_entry_e31fe75962.png",
    },
    {
      ...workWithEzbuy.article[5],
      image:
        "https://strapi-ezbuy.ichiba.net/uploads/Next_day_delivery_with_global_presence_2d04cfdf13.png",
    },
    {
      ...workWithEzbuy.article[6],
      image:
        "https://strapi-ezbuy.ichiba.net/uploads/Smooth_and_safe_customs_clearance_ed09253446.png",
    },
    {
      ...workWithEzbuy.article[7],
      image:
        "https://strapi-ezbuy.ichiba.net/uploads/Door_to_door_Air_freight_244448c961.png",
    },
  ];
  const refSwiper = useRef<SwiperClass>();
  const refSwiper1 = useRef<SwiperClass>();
  const refSwiper2 = useRef<SwiperClass>();
  const [active, setActive] = useState(0);
  const moveNext = () => {
    refSwiper.current?.slideNext();
    refSwiper1.current?.slideNext();
    refSwiper2.current?.slideNext();
  };
  const movePrev = () => {
    refSwiper.current?.slidePrev();
    refSwiper1.current?.slidePrev();
    refSwiper2.current?.slidePrev();
  };
  const moveTo1 = (idx: number) => {
    refSwiper1.current?.slideTo(
      idx +
        (refSwiper1.current?.realIndex - (refSwiper.current?.realIndex ?? 0))
    );
    refSwiper.current?.slideTo(idx);
    refSwiper2.current?.slideTo(idx);
  };
  const moveTo2 = (idx: number) => {
    const slideTo = idx < contents.length ? idx : idx - contents.length - 1;
    refSwiper.current?.slideTo(slideTo);
    refSwiper1.current?.slideTo(slideTo + 1);
    refSwiper2.current?.slideTo(
      idx > contents.length ? slideTo - contents.length + 3 : slideTo + 3
    );
  };
  return (
    <section className="py-16 pl-4">
      <div className="container mx-auto">
        <div className=" flex flex-col gap-14 w-full">
          <div className="flex flex-col items-start gap-6 ">
            <div
              className={clsx(
                "uppercase font-black",
                "text-2xl leading-9",
                "lg:text-4xl lg:leading-54"
              )}
            >
              {workWithEzbuy.heading}
            </div>
            <div className="self-stretch relative leading-[150%]">
              <p className="m-0 text-sm lg:text-base">
                <span className="lg:block">{workWithEzbuy.subHeading}</span>
                <span>{workWithEzbuy.subHeading1}</span>
              </p>
            </div>
          </div>
          <div className="flex flex-col items-start gap-6 text-[28px] w-full">
            <div className="flex flex-col-reverse lg:flex-row items-start lg:gap-6 w-full">
              <div className="w-full lg:w-[50%]">
                <Swiper
                  onSwiper={(ref) => (refSwiper.current = ref)}
                  modules={[FreeMode, Autoplay]}
                  onSlideChange={(x) => setActive(x.realIndex)}
                  slidesPerView={1.25}
                  autoplay={{ delay: 5000, disableOnInteraction: false }}
                  loop
                  spaceBetween={0}
                  breakpoints={{
                    625: {
                      slidesPerView: 1,
                    },
                    984: {
                      slidesPerView: 1,
                    },
                  }}
                  className=" text-left text-sm text-gray-10 overflow-hidden w-full"
                >
                  {contents.map((content, idx) => (
                    <SwiperSlide key={idx}>
                      <SlideItem
                        heading={content.title}
                        description={content.description}
                        image={content.image}
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
              <div className=" flex flex-col items-end justify-start gap-[50px] text-center text-base lg:w-[50%]">
                <div className="flex flex-row items-center justify-start gap-4">
                  <div
                    className="bg-gray flex flex-col p-3 items-center justify-center bg-gray-200 text-white"
                    onClick={() => movePrev()}
                  >
                    <div className="leading-[150%] inline-block w-6 h-6 shrink-0 cursor-pointer">
                      <FontAwesomeIcon icon={faChevronLeft} />
                    </div>
                  </div>
                  <div className="relative leading-[150%] font-medium text-gray-gray-10 text-left">
                    {active + 1}/{contents.length}
                  </div>
                  <div
                    className="bg-gray flex flex-col p-3 items-center justify-center bg-gray-200 text-white"
                    onClick={() => moveNext()}
                  >
                    <div className="leading-[150%] inline-block w-6 h-6 shrink-0 cursor-pointer">
                      <FontAwesomeIcon icon={faChevronRight} />
                    </div>
                  </div>
                </div>
                <Swiper
                  onSwiper={(ref) => (refSwiper1.current = ref)}
                  modules={[FreeMode, Autoplay]}
                  initialSlide={1}
                  autoplay={{ delay: 5000, disableOnInteraction: false }}
                  loop
                  allowTouchMove={false}
                  slidesPerView={2}
                  spaceBetween={24}
                  className="!hidden lg:!block text-left text-sm text-gray-10 overflow-hidden lg:w-full"
                >
                  {contents.map((content, idx) => (
                    <SwiperSlide key={idx} onClick={() => moveTo1(idx)}>
                      <div className="bg-whitesmoke-100 flex flex-col items-start justify-start">
                        <div className="self-stretch h-[120px] flex flex-col p-6 box-border items-start justify-start">
                          <div className="self-stretch relative leading-[150%] font-semibold">
                            {content.title}
                          </div>
                        </div>
                        <Image
                          className="self-stretch relative max-w-full overflow-hidden h-[115px] shrink-0"
                          alt={content.title}
                          width={276}
                          height={115}
                          src={content.image}
                        />
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>

            <Swiper
              onSwiper={(ref) => (refSwiper2.current = ref)}
              modules={[FreeMode, Autoplay]}
              // onSlideChange={(x) => setActive(x.activeIndex)}
              autoplay={{ delay: 5000, disableOnInteraction: false }}
              initialSlide={3}
              slidesPerView={5}
              loop
              spaceBetween={24}
              allowTouchMove={false}
              className="!hidden lg:!block text-left text-sm text-gray-10 overflow-hidden lg:w-full"
            >
              {[...contents, ...Array.from(contents)].map((content, idx) => (
                <SwiperSlide key={idx} onClick={() => moveTo2(idx)}>
                  <div className="flex-1 bg-whitesmoke-100 flex flex-col items-start justify-start">
                    <div className="self-stretch h-[120px] flex flex-col p-6 box-border items-start justify-start">
                      <div className="self-stretch relative leading-[150%] font-semibold">
                        {content.title}
                      </div>
                    </div>
                    <Image
                      className="self-stretch relative max-w-full overflow-hidden h-[90px] shrink-0"
                      alt={content.title}
                      width={276}
                      height={115}
                      src={content.image}
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};
export default WorkWithEzBuy;
