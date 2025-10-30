"use client";
import clsx from "clsx";
import "react-phone-input-2/lib/style.css";
import "react-toastify/dist/ReactToastify.css";
import Image from "next/image";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import { useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

const RealImage = ({ lang }: any) => {
  const [active, setActive] = useState(lang.items[0]);
  const [sliderActive, setSliderActive] = useState<number>(0);
  const sliderRef = useRef<SwiperClass>();

  const [loading, setLoading] = useState(false);

  const handleActiveChange = async (x: any) => {
    setLoading(true);
    // Simulate data loading (replace with your data fetching logic)
    await new Promise((resolve) => setTimeout(resolve, 500)); // Simulate a delay

    setActive(x);
    setLoading(false);
  };

  return (
    <div className="py-6 lg:py-15">
      <div className="container px-4 lg:px-0">
        <h2 className="text-2xl lg:text-4xl font-bold lg:w-[80%] mx-auto text-center lg:leading-12 mb-4">
          {lang.heading}
          <span className="inline-flex items-center">
            <Image
              src="https://strapi-efex.ichiba.net/uploads/Group_1_8315320315.svg"
              width={114}
              height={36}
              alt="EFEX"
              className="w-[78px] h-[25px] lg:w-[110px] lg:h-9 ml-2"
            />
          </span>
        </h2>

        <div
          className={clsx(
            "flex gap-3 justify-center",
            "py-4 lg:py-5  w-full overflow-x-auto no-scrollbar mb-6 lg:mb-10"
          )}
        >
          {lang.items.map((x: { title: any }, idx: number) => (
            <div
              role="button"
              key={idx}
              className={clsx(
                "relative z-[1]",
                "text-black bg-white rounded-[40px]",
                "border-2 border-solid border-transparent",
                "after:absolute after:-left-0.5 after:-top-0.5 after:-right-0.5 after:-bottom-0.5 after:z-[1] after:rounded-[42px]",
                active.title === x.title
                  ? "after:bg-linear"
                  : "after:bg-[#EBEEFA]"
              )}
              onClick={() => handleActiveChange(x)}
            >
              <div
                className={clsx(
                  "relative z-[2]",
                  "px-5 py-2 bg-white rounded-[19px] transition duration-100 ease-linear min-w-max",
                  loading && active.title === x.title
                    ? "text-gray-400"
                    : "text-brand-secondary",
                  "text-sm lg:text-base"
                )}
              >
                <p
                  className={clsx(
                    active.title === x.title ? "gradient-text font-bold" : ""
                  )}
                >
                  {x.title}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="relative">
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
            {active?.list?.map((x: any, idx: number) => (
              <SwiperSlide
                className="scroll-m-16 max-w-[340px] lg:max-w-[384px]"
                key={idx}
              >
                <div key={idx} className="relative">
                  <Image
                    src={x.image}
                    width={384}
                    height={460}
                    alt="EFEX"
                    className=""
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <FontAwesomeIcon
            role="button"
            icon={faArrowLeft}
            onClick={() => sliderRef.current?.slidePrev()}
            className={clsx(
              "absolute top-[50%] translate-x-[-50%] left-6 z-10",
              "p-3 bg-[rgba(51,_51,_51,_0.60)] rounded-full",
              "text-white opacity-50 hover:opacity-100"
            )}
          />
          <FontAwesomeIcon
            role="button"
            onClick={() => sliderRef.current?.slideNext()}
            icon={faArrowRight}
            className={clsx(
              "absolute top-[50%] translate-x-[-50%] right-6 z-10",
              "p-3 bg-[rgba(51,_51,_51,_0.60)] rounded-full",
              "text-white opacity-50 hover:opacity-100"
            )}
          />
        </div>
      </div>
    </div>
  );
};

export default RealImage;
