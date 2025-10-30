import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import clsx from "clsx";
import { useTranslation } from "next-i18next";
import { useRef, useState } from "react";
import { SwiperRef, SwiperClass, Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
import Image from "next/image";
const Explore = () => {
  const { t } = useTranslation("brand-commerce");
  const items = [
    {
      title: t("explore.ship.title"),
      content: t("explore.ship.content"),
      bg: "https://cms-strapi.ichiba.net/uploads/Logo_2_9ee8f2e747.svg",
      link: "/products/ship4p/overview",
    },
    {
      title: t("explore.digital.title"),
      content: t("explore.digital.content"),
      bg: "https://cms-strapi.ichiba.net/uploads/Logo_4_c3c219ffe3.svg",
      link: "/products/storefront-layer/overview",
    },
  ];
  const swiperRef = useRef<SwiperRef | null>(null);

  const [activeIndex, setActiveIndex] = useState(0);

  const onSlideChange = (swiper: SwiperClass) =>
    setActiveIndex(swiper.realIndex);
  return (
    <div className="tw-py-10 lg:tw-py-15 tw-px-4 lg:tw-px-0 tw-bg-[#F2F2F2] tw-bg-no-repeat tw-bg-[url(https://cms-strapi.ichiba.net/uploads/BG_Platform_75fd8ee72a.png)]">
      <div className="lg:tw-max-w-[792px] tw-mx-auto tw-text-center">
        <div className="tw-font-bold tw-text-xl lg:tw-text-4xl">
          {t("explore.title")}
        </div>
        <div className="tw-text-sm lg:tw-text-base tw-mt-2">
          {t("explore.subtitle")}
        </div>
      </div>
      <div className="tw-mt-6 tw-hidden lg:tw-grid tw-grid-cols-3 tw-container tw-gap-10 ">
        {items.map((x: any, index: number) => (
          <div
            key={index}
            className={clsx(
              "tw-py-[26px] tw-px-6 tw-rounded-xl  tw-text-[#666] ",
              "tw-shadow-[0px 8px 16px 0px rgba(0,_0,_0,_0.05)] hover:tw-bg-white",
              "tw-grayscale hover:tw-cursor-pointer hover:tw-grayscale-[0]",
              "tw-grid tw-content-between",
            )}
          >
            <div className="">
              <Image width={64} height={64} src={x.bg} alt={x.title} />
              <div className="tw-mt-6 tw-mb-2 tw-font-bold">{x.title}</div>
              <div className="tw-grid tw-content-between tw-flex-1">
                <div className="">{x.content}</div>
              </div>
            </div>
            <div className="tw-text-[#1D39C4] tw-mt-6 tw-text-sm lg:tw-text-base tw-cursor-pointer ">
              <Link href={x.link} target="_blank" className="tw-no-underline">
                {t("explore.viewMore")}
              </Link>
              <FontAwesomeIcon icon={faArrowRight} className="tw-ml-2" />
            </div>
          </div>
        ))}
      </div>
      <div className="tw-mt-6 lg:tw-hidden">
        <Swiper
          ref={swiperRef}
          slidesPerView={1}
          onSlideChange={onSlideChange}
          className="tw-h-full"
        >
          {items.map((x: any, index: number) => (
            <SwiperSlide className="tw-h-full" key={index}>
              <div
                className={clsx(
                  "tw-p-[26px] tw-text-[#666] tw-bg-white tw-rounded-xl",
                )}
              >
                <Image width={64} height={64} src={x.bg} alt={x.title} />
                <div className="tw-font-bold tw-text-sm lg:tw-text-base tw-mt-6 tw-mb-2">
                  {x.title}
                </div>
                <div className="tw-text-sm lg:tw-text-base">{x.content}</div>
                <div className="tw-text-[#1D39C4] tw-mt-6 tw-text-sm lg:tw-text-base">
                  <Link
                    href={x.link}
                    target="_blank"
                    className="tw-no-underline"
                  >
                    {t("explore.viewMore")}
                  </Link>
                  <FontAwesomeIcon icon={faArrowRight} className="tw-ml-2" />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="tw-flex tw-gap-5 tw-justify-center tw-mt-6 lg:tw-hidden">
        {items.map((x: any, index: number) => (
          <div
            key={index}
            className={clsx(
              "tw-max-w-[12px] tw-w-full tw-h-3 tw-rounded-full",
              activeIndex === index ? "tw-bg-brand-primary " : "tw-bg-[#ddd]",
            )}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Explore;
