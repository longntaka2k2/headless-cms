/* eslint-disable @next/next/link-passhref */
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTranslation } from "next-i18next";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import Image from "next/image";
import clsx from "clsx";
const Tailored = () => {
  const b = useTranslation("build-store-front").t;
  const [sliderActive, setSliderActive] = useState<number>(0);
  const sliderRef = useRef<SwiperClass>();
  const listItem = [
    {
      title: "Business",
      link: "/",
      img: "https://cms-strapi.ichiba.net/uploads/64ec7dbc921a14ee8afed8b8_Template_06_1_a3bfcaa208.png",
    },
    {
      title: "Fashion",
      link: "/",
      img: "https://cms-strapi.ichiba.net/uploads/6461f6f57655625aea25d565_Webfront_11_1_73c41a5fab.png",
    },
    {
      title: "Business",
      link: "/",
      img: "https://cms-strapi.ichiba.net/uploads/64ec7dbc921a14ee8afed8b8_Template_06_1_a3bfcaa208.png",
    },
  ];
  const [isVisible, setVisible] = useState(false);
    const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(entry.target);
        }
      });
    },{ threshold: 1 / 3 });

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }
    return () => {
      if (elementRef.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        observer.unobserve(elementRef.current);
      }
    };
  }, []);
  return (
    <div className="tw-bg-[#F1F5F9] lg:tw-py-[117px] tw-py-6 tw-relative" ref={elementRef}>
      <div className="container lg:tw-flex tw-items-center">
        <div className={clsx("tw-max-w-[420px] tw-transition-all tw-duration-300 tw-delay-200",isVisible ? "tw-opacity-100" : "tw-opacity-0")}>
          <h2 className="lg:tw-text-4xl tw-font-bold tw-text-xl">
            {b("tailored.title")}
          </h2>
          <Link
          target="_blank"
            href={"/"}
            className="lg:tw-my-6 tw-my-4 tw-inline-block tw-no-underline tw-text-white tw-py-3 tw-px-3 tw-rounded-lg tw-bg-[#F57C00] lg:tw-text-base tw-text-sm"
          >
            {b("tailored.subtitle")}
          </Link>
          <div className="lg:tw-flex tw-hidden tw-gap-4">
            <div
              className="tw-rounded-lg tw-border tw-border-[#333] tw-py-[7px] tw-px-3 text-center tw-cursor-pointer"
              onClick={() => sliderRef.current?.slidePrev()}
            >
              <FontAwesomeIcon icon={faArrowLeft} size="sm" />
            </div>
            <div
              className="tw-rounded-lg tw-border tw-border-[#333] tw-py-[7px] tw-px-3 text-center tw-cursor-pointer"
              onClick={() => sliderRef.current?.slideNext()}
            >
              <FontAwesomeIcon icon={faArrowRight} size="sm" />
            </div>
          </div>
        </div>
        <div className="lg:tw-block tw-hidden tw-absolute tw-right-0 tw-max-w-[58%] ">
          <Swiper
            onBeforeInit={(swiper) => {
              sliderRef.current = swiper;
            }}
            spaceBetween={24}
            onSlideChange={(e) => setSliderActive(e.activeIndex)}
            className="w-full"
            slidesOffsetBefore={16}
            slidesOffsetAfter={16}
            slidesPerView={2.3}
          >
            {listItem.map((value: any, index: number) => (
              <SwiperSlide
                className="scroll-m-16 max-w-[340px] lg:max-w-[384px]"
                key={index}
                
              >
                <Link href={value.link} className={clsx("tw-relative tw-transition-all ")} >
                  <Image
                    src={value.img}
                    alt={value.title}
                    width={510}
                    height={345}
                    quality={100}
                    className={clsx("tw-h-[345px] tw-object-cover tw-delay-300",isVisible ? "tw-scale-100 tw-opacity-100" : "tw-scale-75 tw-opacity-0")}
                    style={{transitionDuration: `${(index + 1 )*250}ms`}}
                  />
                  <div className="tw-absolute tw-text-right tw-p-4 tw-w-full tw-bottom-0 tw-text-white tw-bg-[linear-gradient(360deg,_#000_9.17%,_rgba(0,_0,_0,_0.00)_89.62%)]">
                    {value.title}{" "}
                    <FontAwesomeIcon icon={faArrowRight} size="sm" />
                  </div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="lg:tw-hidden tw-overflow-x-scroll tw-flex tw-gap-4">
          {listItem.map((value: any, index: number) => (
            <Link href={value.link} className="tw-relative tw-min-w-[310px] " key={index}>
              <Image
                src={value.img}
                alt={value.title}
                width={510}
                height={345}
                quality={100}
              />
              <div className="tw-absolute tw-text-right tw-p-4 tw-w-full tw-bottom-0 tw-text-white tw-bg-[linear-gradient(360deg,_#000_9.17%,_rgba(0,_0,_0,_0.00)_89.62%)]">
                {value.title} <FontAwesomeIcon icon={faArrowRight} size="sm" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Tailored;
