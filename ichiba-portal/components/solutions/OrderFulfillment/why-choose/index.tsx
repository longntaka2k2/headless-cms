import { LocaleNamespace } from "@/const/locale";
import React, { useRef, useState } from "react";
import { useTranslation } from "next-i18next";
import { Swiper, SwiperSlide, SwiperClass, SwiperRef } from "swiper/react";
import { Autoplay } from "swiper/modules";
import AspectRatio from "@/components/core/aspect-ratio";
import Image from "next/image";
import ListItems from "@/components/product/pim/features/list-items";
import clsx from "clsx";

const WhyChoose = () => {
  const { t } = useTranslation(LocaleNamespace.OrderFulfillment);

  const swiperRef = useRef<SwiperRef | null>(null);
  const items = t(`whyChoose.items`, {
    returnObjects: true,
  }) as { title: string; contents: string[] }[];

  const [activeIndex, setActiveIndex] = useState(0);

  const onSlideChange = (swiper: SwiperClass) =>
    setActiveIndex(swiper.realIndex);

  const onClickTab = (index: number) => {
    setActiveIndex(index);
    swiperRef.current?.swiper.slideTo(index);
    swiperRef.current?.swiper.autoplay.start();
  };
  const images = [
    "https://cms-strapi.ichiba.net/uploads/integrate_sales_channel_5398ca7987.png",
  ];

  const icons = [
    {
      src: "https://cms-strapi.ichiba.net/uploads/cloud_storage_laptop_756d4794aa.svg",
      color: "#5698FD",
    },
    {
      src: "https://cms-strapi.ichiba.net/uploads/fast_delivery_d7935eb4ab.svg",
      color: "#FFAA54",
    },
    {
      src: "https://cms-strapi.ichiba.net/uploads/warehouse_delivery_car_2a227ad37c.svg",
      color: "#04D1DD",
    },
    {
      src: "https://cms-strapi.ichiba.net/uploads/hand_cursor_e8e1bc9810.svg",
      color: "#ED4FFE",
    },
    {
      src: "https://cms-strapi.ichiba.net/uploads/warehouse_delivery_boxes_2e3e021152.svg",
      color: "#6248F7",
    },
    {
      src: "https://cms-strapi.ichiba.net/uploads/clock_icon_b791362c1a.svg",
      color: "#3CD739",
    },
    {
      src: "https://cms-strapi.ichiba.net/uploads/map_point_icon_da23fa41bd.svg",
      color: "#FE5050",
    },
    {
      src: "https://cms-strapi.ichiba.net/uploads/package_box_icon_b59219d44f.svg",
      color: "#EBC231",
    },
  ];

  return (
    <div
      className={clsx(
        "tw-bg-no-repeat tw-bg-center tw-bg-cover",
        "tw-bg-[url('https://cms-strapi.ichiba.net/uploads/why_choose_bg_bb16cb4678.webp')]",
      )}
    >
      <div className="container">
        <div className="tw-py-6 xl:tw-py-10">
          <div className="tw-max-w-[792px] tw-mx-auto tw-text-center">
            <h3 className="tw-mb-2 tw-text-2xl xl:tw-text-4xl tw-font-bold">
              {t("whyChoose.title")}
            </h3>
            <span
              dangerouslySetInnerHTML={{ __html: t("whyChoose.content") }}
            />
          </div>
          <div className={clsx("tw-mt-6 tw-flex tw-flex-col")}>
            <div className={clsx("tw-overflow-auto", "md:tw-hidden")}>
              <div
                className={clsx(
                  "tw-py-6 tw-flex tw-items-center tw-gap-1 tw-min-w-full",
                )}
              >
                {icons.map((icon, index) => (
                  <div
                    key={index}
                    className={clsx("tw-flex tw-items-center tw-gap-1", {
                      "tw-flex-1": index !== icons.length - 1,
                    })}
                  >
                    <div
                      className={clsx(
                        "tw-relative",
                        activeIndex === index
                          ? "tw-w-[86px] tw-h-[86px] sm:tw-w-12 sm:tw-h-12"
                          : "tw-w-12 tw-h-12",
                      )}
                      onClick={() => onClickTab(index)}
                    >
                      <Image src={icon.src} fill alt="" />
                    </div>
                    {index !== icons.length - 1 && (
                      <div
                        className={clsx(
                          "tw-w-6 tw-h-0.5 tw-rounded-3xl tw-flex-1",
                        )}
                        style={{ backgroundColor: icon.color }}
                      />
                    )}
                  </div>
                ))}
              </div>
            </div>
            <div className="tw-flex-1 tw-overflow-hidden">
              {items.map((item, index) => (
                <div className="tw-flex tw-gap-6 xl:tw-gap-10 " key={index}>
                  <div
                    className={clsx(
                      "tw-w-12 tw-flex-col tw-gap-1 tw-hidden",
                      "md:tw-flex xl:tw-w-15",
                    )}
                  >
                    <AspectRatio>
                      <div className="tw-relative tw-w-full tw-h-full">
                        <Image fill alt="" src={icons[index].src} />
                      </div>
                    </AspectRatio>
                    <div className="tw-flex-1 tw-flex tw-justify-center">
                      <div
                        className="tw-w-0.5 tw-h-full tw-rounded-3xl"
                        style={{ backgroundColor: icons[index].color }}
                      />
                    </div>
                  </div>
                  <div
                    className={clsx(
                      "tw-flex tw-flex-col tw-gap-6 tw-flex-1 tw-overflow-hidden tw-py-6",
                      "sm:tw-items-center",
                      index % 2 === 0
                        ? "sm:tw-flex-row-reverse"
                        : "sm:tw-flex-row",
                    )}
                  >
                    <div
                      className={clsx(
                        "tw-w-[500px] tw-max-w-full tw-mx-auto",
                        "sm:tw-max-w-[45%]",
                      )}
                    >
                      <AspectRatio>
                        <div className="tw-relative tw-w-full tw-h-full">
                          <Image
                            src={images[index] || "/icons/pim/empty-img-bg.svg"}
                            alt=""
                            fill
                            className="tw-rounded-lg tw-object-cover"
                          />
                        </div>
                      </AspectRatio>
                    </div>
                    <div className="tw-flex tw-flex-col tw-gap-4 tw-flex-1">
                      <p className="tw-mb-0 tw-text-lg tw-font-bold">
                        #{index + 1}. {item.title}
                      </p>
                      <ListItems items={item.contents} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChoose;
