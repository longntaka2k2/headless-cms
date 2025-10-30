import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import clsx from "clsx";
import { useTranslation } from "next-i18next";
import Link from "next/link";
import { useRef, useState } from "react";
import { SwiperClass, SwiperRef, Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import TouchRipple from "@/components/core/touch-ripple";

const DontJust = () => {
  const b = useTranslation("business-owner").t;
  const swiperRef = useRef<SwiperRef | null>(null);

  const [activeIndex, setActiveIndex] = useState(0);

  const onSlideChange = (swiper: SwiperClass) =>
    setActiveIndex(swiper.realIndex);
  return (
    <div className="tw-pt-6 tw-px-4 tw-pb-10 tw-bg-[#F9F5EF] lg:tw-pt-12 lg:tw-pb-20 lg:tw-mb-20 lg:tw-container lg:tw-rounded-3xl lg:tw-mt-10 tw-relative tw-overflow-hidden">
      <div className="tw-text-center tw-max-w-[600px] tw-mx-auto">
        <h2 className="tw-text-2xl tw-font-bold lg:tw-text-4xl">
          {b("dontJust.title")}
        </h2>
        <div className="tw-mt-2 tw-text-sm lg:tw-text-lg lg:tw-mt-4">
          {b("dontJust.content")}
        </div>
        <Link
          href={"/case-studies"}
          target="_blank"
          rel="noreferrer noopener canonical"
          className={clsx(
            "tw-py-3 tw-px-6 tw-text-sm tw-w-max tw-mx-auto tw-mt-4 lg:tw-mt-6 lg:tw-text-base",
            "tw-no-underline tw-bg-[#F57C00] tw-text-white tw-block tw-rounded-lg lg:tw-py-4 lg:tw-px-8",
          )}
        >
          {b("dontJust.read")}
        </Link>
      </div>
      <div className="tw-mt-6 lg:tw-mt-15 lg:tw-flex lg:tw-gap-6 lg:tw-items-center lg:tw-w-max  lg:tw-mx-auto ">
        <button
          onClick={() => swiperRef.current?.swiper.slidePrev()}
          className="tw-w-11 tw-h-11 tw-rounded-full lg:tw-flex tw-items-center tw-justify-center tw-relative tw-shadow-8 tw-z-1 tw-bg-white tw-hidden"
        >
          <Image width={24} height={24} src="/svgs/arrow-dark.svg" alt="icon" />
          <TouchRipple className="tw-rounded-full" autoStart />
        </button>
        <Swiper
          ref={swiperRef}
          slidesPerView={1.1}
          onSlideChange={onSlideChange}
          className="tw-h-full lg:tw-w-[724px] tw-mx-auto"
        >
          <SwiperSlide className="">
            <div
              className={clsx(
                "tw-py-10 tw-px-6 tw-mx-2 tw-my-3 tw-bg-white tw-border tw-border-[#F2F2F2]",
                "tw-rounded-lg tw-shadow-[0px_8px_16px_0px_rgba(0,0,0,0.05)] lg:tw-py-15 lg:tw-px-10",
              )}
            >
              <div className="tw-text-sm lg:tw-text-lg">
                “The IChiba implementation team made getting started extremely
                simple, and their support team is always available to answer any
                questions. We are very pleased about the accuracy and speed with
                which orders are processed. We wish we had worked with IChiba
                sooner”. 
              </div>
              <div className="tw-mt-4 lg:tw-mt-6 tw-flex tw-gap-3 tw-items-center lg:tw-gap-4">
                <Image
                  src={
                    "https://cms-strapi.ichiba.net/uploads/Avatar_66c2d97aa7.png"
                  }
                  alt=""
                  className="tw-rounded-full lg:tw-w-[44px]"
                  width={37}
                  height={37}
                />
                <div>
                  <div className="tw-text-sm tw-font-bold lg:tw-text-base">
                    Mr.Jan Knap
                  </div>
                  <div className="tw-text-[#666] tw-text-xs lg:tw-text-sm">
                    Business Manager at IZONIL
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="">
            <div
              className={clsx(
                "tw-py-10 tw-px-6 tw-mx-2 tw-my-3 tw-bg-white tw-border tw-border-[#F2F2F2]",
                "tw-rounded-lg tw-shadow-[0px_8px_16px_0px_rgba(0,0,0,0.05)] lg:tw-py-15 lg:tw-px-10",
              )}
            >
              <div className="tw-text-sm lg:tw-text-lg">
                “The IChiba implementation team made getting started extremely
                simple, and their support team is always available to answer any
                questions. We are very pleased about the accuracy and speed with
                which orders are processed. We wish we had worked with IChiba
                sooner”. 
              </div>
              <div className="tw-mt-4 lg:tw-mt-6 tw-flex tw-gap-3 tw-items-center lg:tw-gap-4">
                <Image
                  src={
                    "https://cms-strapi.ichiba.net/uploads/Avatar_66c2d97aa7.png"
                  }
                  alt=""
                  className="tw-rounded-full lg:tw-w-[44px]"
                  width={37}
                  height={37}
                />
                <div>
                  <div className="tw-text-sm tw-font-bold lg:tw-text-base">
                    Mr.Jan Knap
                  </div>
                  <div className="tw-text-[#666] tw-text-xs lg:tw-text-sm">
                    Business Manager at IZONIL
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="">
            <div
              className={clsx(
                "tw-py-10 tw-px-6 tw-mx-2 tw-my-3 tw-bg-white tw-border tw-border-[#F2F2F2]",
                "tw-rounded-lg tw-shadow-[0px_8px_16px_0px_rgba(0,0,0,0.05)] lg:tw-py-15 lg:tw-px-10",
              )}
            >
              <div className="tw-text-sm lg:tw-text-lg">
                “The IChiba implementation team made getting started extremely
                simple, and their support team is always available to answer any
                questions. We are very pleased about the accuracy and speed with
                which orders are processed. We wish we had worked with IChiba
                sooner”. 
              </div>
              <div className="tw-mt-4 lg:tw-mt-6 tw-flex tw-gap-3 tw-items-center lg:tw-gap-4">
                <Image
                  src={
                    "https://cms-strapi.ichiba.net/uploads/Avatar_66c2d97aa7.png"
                  }
                  alt=""
                  className="tw-rounded-full lg:tw-w-[44px]"
                  width={37}
                  height={37}
                />
                <div>
                  <div className="tw-text-sm tw-font-bold lg:tw-text-base">
                    Mr.Jan Knap
                  </div>
                  <div className="tw-text-[#666] tw-text-xs lg:tw-text-sm">
                    Business Manager at IZONIL
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
        <button
          onClick={() => swiperRef.current?.swiper.slideNext()}
          className="tw-w-11 tw-h-11 tw-rounded-full lg:tw-flex tw-items-center tw-justify-center tw-relative tw-z-1 tw-bg-white tw-shadow-8 tw-hidden"
        >
          <Image
            className="tw-rotate-180"
            width={24}
            height={24}
            src="/svgs/arrow-dark.svg"
            alt="icon"
          />
          <TouchRipple className="tw-rounded-full" autoStart />
        </button>
        <Image
          alt="icon"
          className="tw-absolute lg:-tw-bottom-0 lg:-tw-right-10 -tw-bottom-10 -tw-right-10 lg:tw-w-[400px]"
          width={195}
          height={143}
          src={
            "https://cms-strapi.ichiba.net/uploads/Group_1171275896_f46a39a0ff.svg"
          }
        />
      </div>
    </div>
  );
};

export default DontJust;
