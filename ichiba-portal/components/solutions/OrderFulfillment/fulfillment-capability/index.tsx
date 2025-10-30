import { LocaleNamespace } from "@/const/locale";
import React, { useRef, useState } from "react";
import { useTranslation } from "next-i18next";
import clsx from "clsx";
import { Swiper, SwiperSlide, SwiperClass, SwiperRef } from "swiper/react";
import Image from "next/image";
import { Autoplay } from "swiper/modules";

const FulfillmentCapability = () => {
  const { t } = useTranslation(LocaleNamespace.OrderFulfillment);
  const swiperRef = useRef<SwiperRef | null>(null);

  const [activeIndex, setActiveIndex] = useState(0);

  const onSlideChange = (swiper: SwiperClass) =>
    setActiveIndex(swiper.realIndex);

  const items = t(`fulfillmentCapability.items`, {
    returnObjects: true,
  }) as { title: string; contents: string[] }[];

  const images = [
    "https://cms-strapi.ichiba.net/uploads/technical_connectivity_397fda629c.png",
    "https://cms-strapi.ichiba.net/uploads/warehouse_connectivity_3e0da89e6a.png",
    "https://cms-strapi.ichiba.net/uploads/transportation_management_e3f5f2770a.png",
    "https://cms-strapi.ichiba.net/uploads/warehouse_capabilities_6df8e0e5a3.png",
  ];
  const onClickTab = (index: number) => {
    setActiveIndex(index);
    swiperRef.current?.swiper.slideTo(index);
    swiperRef.current?.swiper.autoplay.start();
  };
  return (
    <div
      className={clsx(
        "tw-text-white tw-bg-center tw-bg-no-repeat tw-bg-cover",
        "tw-bg-[url('https://cms-strapi.ichiba.net/uploads/background_f3bda22ac7.webp')]",
      )}
    >
      <div className="container">
        <div className="tw-py-6 xl:tw-py-10">
          <div className="tw-max-w-[792px] tw-mx-auto tw-text-center">
            <h3 className="tw-mb-0 tw-text-2xl xl:tw-text-4xl tw-font-bold">
              {t("fulfillmentCapability.title")}
            </h3>
          </div>
          <div className="tw-pt-6 tw-max-w-[830px] tw-mx-auto">
            <div
              className={clsx(
                "tw-py-6 tw-flex tw-gap-1 tw-items-center",
                "sm:tw-hidden",
              )}
            >
              {items.map((_, idx) => (
                <div
                  className={clsx("tw-flex tw-items-center tw-gap-1", {
                    "tw-flex-1": idx !== items.length - 1,
                  })}
                  key={idx}
                  onClick={() => onClickTab(idx)}
                >
                  <div
                    className={clsx(
                      "tw-bg-white tw-text-primary-6 tw-font-bold tw-flex tw-items-center tw-justify-center tw-rounded-full tw-gap-1",
                      idx === activeIndex
                        ? "tw-w-14 tw-h-14 tw-text-2xl"
                        : "tw-w-8 tw-h-8",
                    )}
                  >
                    {idx + 1}
                  </div>
                  <div className="tw-flex-1 tw-h-0.5 tw-rounded-3xl tw-bg-white" />
                </div>
              ))}
            </div>
            <Swiper
              loop
              spaceBetween={0}
              autoplay
              ref={swiperRef}
              modules={[Autoplay]}
              slidesPerView={1}
              onSlideChange={onSlideChange}
              breakpoints={{
                640: {
                  direction: "vertical",
                  slidesPerView: items.length,
                  modules: [],
                },
              }}
            >
              {items.map((item, index) => (
                <SwiperSlide className="!tw-h-auto sm:!tw-h-full" key={index}>
                  <div
                    className={clsx(
                      "tw-flex tw-flex-col tw-gap-2 tw-relative tw-h-full tw-justify-between",
                      "sm:tw-flex-row",
                    )}
                  >
                    <div
                      className={clsx(
                        "tw-flex-1 tw-flex tw-items-center tw-justify-center tw-pb-0 tw-h-full",
                        {
                          "sm:tw-pb-24": index !== items.length - 1,
                        },
                      )}
                    >
                      <Image
                        src={images[index]}
                        alt=""
                        width={0}
                        height={0}
                        sizes="100%"
                        className="tw-w-full tw-h-auto"
                      />
                    </div>
                    <div
                      className={clsx(
                        "tw-px-6 tw-flex-col tw-gap-1 tw-items-center tw-pb-1 tw-hidden",
                        "sm:tw-flex",
                      )}
                    >
                      <div className="tw-h-8 tw-w-8 tw-rounded-full tw-bg-white" />
                      <div className="tw-flex-1 tw-w-1 tw-bg-white tw-rounded-3xl" />
                    </div>
                    <div className={clsx("tw-flex tw-flex-col", "sm:tw-w-1/2")}>
                      <div
                        className={clsx("tw-pb-0", {
                          "sm:tw-pb-24": index !== items.length - 1,
                        })}
                      >
                        <div className="tw-bg-white tw-text-ic-ink-6 tw-rounded-xl tw-p-6">
                          <p className="tw-mb-2 tw-text-base tw-font-bold">
                            {item.title}
                          </p>
                          <ul className="tw-list-disc tw-pl-6">
                            {item.contents.map((content, index) => (
                              <li key={index}>{content}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FulfillmentCapability;
