import { LocaleNamespace } from "@/const/locale";
import React, { useState } from "react";
import { useTranslation } from "next-i18next";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import clsx from "clsx";
import SvgIcon from "@/components/common/SvgIcon";
import Link from "next/link";
import Image from "next/image";

const MultipleChannels = () => {
  const { t } = useTranslation(LocaleNamespace.OmnichannelRetailers);

  const [activeIndex, setActiveIndex] = useState(0);

  const onSlideChange = (swiper: SwiperClass) =>
    setActiveIndex(swiper.realIndex);
  const items = t(`multipleChannels.items`, {
    returnObjects: true,
  }) as { title: string; content: string[] }[];

  const logoImages = [
    "/icons/crossBorder/findout/oms.svg",
    "/icons/crossBorder/findout/ship4p.svg",
    "/icons/crossBorder/findout/digital.svg",
    "/icons/crossBorder/findout/wms.svg",
    "/icons/crossBorder/findout/cross.svg",
  ];

  return (
    <div className="tw-bg-ic-ink-1">
      <div className="container">
        <div className="tw-py-6 xl:tw-py-10">
          <div className="tw-max-w-[792px] tw-mx-auto tw-text-center">
            <h3 className="tw-mb-2 tw-text-2xl xl:tw-text-4xl tw-font-bold">
              {t("multipleChannels.title")}
            </h3>
            <span
              dangerouslySetInnerHTML={{
                __html: t("multipleChannels.content"),
              }}
            />
          </div>
          <div className="tw-mt-6">
            <Swiper
              loop
              spaceBetween={24}
              slidesPerView="auto"
              onSlideChange={onSlideChange}
              modules={[Autoplay]}
              autoplay={{ delay: 5000 }}
              breakpoints={{
                768: {
                  slidesPerView: 2,
                },
                1024: {
                  slidesPerView: 3,
                },
              }}
            >
              {items.map((item, index) => (
                <SwiperSlide
                  key={index}
                  className={clsx("!tw-h-auto max-[768px]:!tw-w-[284px]")}
                >
                  <div
                    className={clsx(
                      "tw-p-6 tw-rounded-xl tw-bg-white tw-flex tw-flex-col tw-gap-6 tw-h-full !tw-w-[284px] tw-mx-auto",
                    )}
                  >
                    <Image
                      width={64}
                      height={64}
                      alt=""
                      src={logoImages[index]}
                    />
                    <div className="tw-flex-1 tw-flex tw-flex-col tw-gap-2">
                      <span className={clsx("tw-font-bold")}>{item.title}</span>
                      <span className="tw-text-ic-ink-5">{item.content}</span>
                    </div>
                    <Link
                      href="#"
                      passHref
                      className="tw-text-base tw-flex tw-items-center tw-gap-1 tw-text-blue-6 tw-no-underline"
                    >
                      {t("viewMore")}
                      <SvgIcon icon="arrow" />
                    </Link>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="tw-mt-6 tw-flex tw-gap-2 tw-justify-center md:tw-hidden">
              {items.map((item, index) => (
                <div
                  key={index}
                  className={clsx(
                    "tw-w-2 tw-h-2 tw-rounded-full",
                    index === activeIndex
                      ? "tw-bg-brand-primary"
                      : "tw-bg-white",
                  )}
                ></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MultipleChannels;
