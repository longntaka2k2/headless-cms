import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import clsx from "clsx";
import { useRef, useState } from "react";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import { StoriesCard } from "./StoriesCard";
import avatar from "@/public/solutions/avatar.png";
import { useTranslation } from "next-i18next";

const CustomerSuccess = () => {
  const { t } = useTranslation("order-fulfillment-by-efex");
  const [sliderActive, setSliderActive] = useState<number>(0);
  const sliderRef = useRef<SwiperClass>();

  const stories = [
    {
      avatar: avatar,
      author: "Mrs.Hoai Thuong",
      career: "Omnichannel Retailer",
      title: "IChiba has significantly reduced our fulfillment costs",
      description:
        "We must say that we're lucky to have IChiba OnePlatform as the fulfillment service provider for our multi-market expansion plan. IChiba delivers a fully-equipped warehouse network, wonderful fulfilling ability, and reputable shipping services at all markets.",
    },
    {
      avatar: avatar,
      author: "Mrs.Hoai Thuong",
      career: "Omnichannel Retailer",
      title: "IChiba has significantly reduced our fulfillment costs",
      description:
        "We must say that we're lucky to have IChiba OnePlatform as the fulfillment service provider for our multi-market expansion plan. IChiba delivers a fully-equipped warehouse network, wonderful fulfilling ability, and reputable shipping services at all markets.",
    },
    {
      avatar: avatar,
      author: "Mrs.Hoai Thuong",
      career: "Omnichannel Retailer",
      title: "IChiba has significantly reduced our fulfillment costs",
      description:
        "We must say that we're lucky to have IChiba OnePlatform as the fulfillment service provider for our multi-market expansion plan. IChiba delivers a fully-equipped warehouse network, wonderful fulfilling ability, and reputable shipping services at all markets.",
    },
  ];

  return (
    <div className="tw-relative tw-min-h-[550px] lg:tw-min-h-[740px] tw-overflow-hidden">
      <div
        style={{
          background: "linear-gradient(70deg, #D8ECEB 0%, #F8FCFC 92.7%)",
        }}
        className={clsx(
          "tw-absolute tw-left-[3%] lg:tw-left-[20%]",
          "tw-flex tw-flex-col lg:tw-items-center tw-mb-6 tw-rounded-l-lg",
          "lg:tw-flex-row lg:tw-mb-20 lg:tw-rounded-l-3xl",
        )}
      >
        <div
          className={clsx(
            "tw-relative lg:tw-pl-20",
            "lg:tw-w-[45%] tw-mx-auto lg:tw-min-h-[200px] tw-px-4 tw-pt-6 tw-gap-5",
          )}
        >
        <div className="tw-w-[64%] lg:tw-w-[70%]">
            <p className="tw-mb-3 tw-text-xs lg:tw-text-sm tw-text-blue-6 tw-uppercase">
            {t("customerSuccess.ourSuccess")}
            </p>
            <h2 className="tw-text-2xl tw-font-bold lg:tw-text-4xl lg:tw-leading-12 tw-mb-3">
            {t("customerSuccess.title")}
            </h2>
            <p className="tw-mb-3 tw-mt-1 tw-text-sm lg:tw-text-base">
            {t("customerSuccess.subTitle")}
            </p>
          </div>
          <div className="tw-hidden lg:tw-flex tw-gap-6">
            <FontAwesomeIcon
              role="button"
              icon={faArrowRight}
              onClick={() => sliderRef.current?.slidePrev()}
              className={clsx(
                "tw-rotate-180 tw-p-3 tw-border-[2px] tw-border-black tw-rounded-lg hover:tw-opacity-100",
              )}
            />
            <FontAwesomeIcon
              role="button"
              onClick={() => sliderRef.current?.slideNext()}
              icon={faArrowLeft}
              className={clsx(
                "tw-rotate-180 tw-p-3 tw-border-[2px] tw-border-black tw-rounded-lg hover:tw-opacity-100",
              )}
            />
          </div>
        </div>

        <div className="lg:tw-w-[55%]">
          <Swiper
            onBeforeInit={(swiper) => {
              sliderRef.current = swiper;
            }}
            spaceBetween={24}
            onSlideChange={(e) => setSliderActive(e.activeIndex)}
            className="tw-w-full"
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
            {stories?.map((storie, index) => (
              <SwiperSlide
                className="tw-scroll-m-16 tw-max-w-[300px] lg:tw-max-w-[384px]"
                key={index}
              >
                <StoriesCard
                  {...storie}
                  className="tw-bg-white"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default CustomerSuccess;
