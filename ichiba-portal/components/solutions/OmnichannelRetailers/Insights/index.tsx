import { LocaleNamespace } from "@/const/locale";
import React, { useRef, useState } from "react";
import { useTranslation } from "next-i18next";
import { Swiper, SwiperClass, SwiperRef, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import AspectRatio from "@/components/core/aspect-ratio";
import Image from "next/image";
import { get } from "lodash";
import Link from "next/link";
import { formatDateToDDMMYYYY } from "@/convert";
import SvgIcon from "@/components/common/SvgIcon";
import clsx from "clsx";

const Insights = ({ posts = [] }: { posts: Record<string, any>[] }) => {
  const { t } = useTranslation(LocaleNamespace.OmnichannelRetailers);
  const swiperRef = useRef<SwiperRef | null>(null);

  const [activeIndex, setActiveIndex] = useState(0);

  const onSlideChange = (swiper: SwiperClass) =>
    setActiveIndex(swiper.realIndex);

  return (
    <div className="container">
      <div className="tw-py-6 xl:tw-py-10">
        <div className="tw-max-w-[792px] tw-mx-auto tw-text-center">
          <h3 className="tw-mb-2 tw-text-2xl xl:tw-text-4xl tw-font-bold">
            {t("insights.title")}
          </h3>
          <span dangerouslySetInnerHTML={{ __html: t("insights.content") }} />
        </div>
        <div className="tw-mt-6 tw-relative">
          <Swiper
            loop
            ref={swiperRef}
            spaceBetween={24}
            slidesPerView={1}
            onSlideChange={onSlideChange}
            modules={[Autoplay]}
            autoplay={{
              delay: 5000,
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
              1300: {
                modules: [],
                autoplay: false,
                slidesPerView: 3,
              },
            }}
          >
            {posts.slice(0, 10).map((item, index) => {
              return (
                <SwiperSlide key={index} className="!tw-h-auto">
                  <div className="tw-shadow-10 tw-rounded-2xl tw-p-6 tw-flex tw-flex-col tw-h-full">
                    <AspectRatio x={336} y={160}>
                      <div className="tw-w-full tw-h-full tw-relative">
                        <Image
                          fill
                          alt=""
                          className="tw-object-cover tw-rounded-xl"
                          src={String(
                            get(item, "attributes.image.data.attributes.url") ||
                              "/icons/pim/empty-img-bg.svg",
                          )}
                        />
                      </div>
                    </AspectRatio>
                    <div className="tw-mt-6 tw-flex tw-flex-col">
                      {!!get(
                        item,
                        "attributes.category_blog.data.attributes",
                      ) && (
                        <Link
                          rel="canonical"
                          href={`/blog/category/${get(
                            item,
                            "attributes.category_blog.data.attributes.value",
                          )}`}
                          className="tw-no-underline tw-text-sm"
                          target="_blank"
                        >
                          {String(
                            get(
                              item,
                              "attributes.category_blog.data.attributes.label",
                            ),
                          )}
                        </Link>
                      )}
                      <h5 className="tw-mb-0 tw-line-clamp-3 tw-text-xl tw-py-1">
                        {get(item, "attributes.title")}
                      </h5>
                      <span className="tw-text-sm tw-text-ic-ink-5">
                        {formatDateToDDMMYYYY(
                          get(item, "attributes.publishedAt"),
                        )}
                      </span>
                      {/* <div
                        className="tw-line-clamp-3 tw-py-4"
                        dangerouslySetInnerHTML={{
                          __html: String(get(item, "attributes.content")),
                        }}
                      ></div> */}
                      <Link
                        className="tw-mt-4 tw-text-sm tw-no-underline tw-flex tw-items-center tw-gap-1"
                        href={`/blog/${item.attributes.slug}`}
                        passHref
                        target="_blank"
                      >
                        {t("viewMore")}
                        <SvgIcon icon="arrow" />
                      </Link>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
          <button
            onClick={() => swiperRef.current?.swiper.slidePrev()}
            className={clsx(
              "tw-absolute tw-w-10 tw-h-10 tw-rounded-lg tw-border tw-border-current tw-left-0 tw-top-1/2 -tw-translate-x-1/2 -tw-translate-y-1/2 tw-text-primary-6 tw-items-center tw-justify-center tw-hidden",
              "min-[1300px]:tw-flex",
            )}
          >
            <SvgIcon className="tw-rotate-90" icon="arrow-1" />
          </button>
          <button
            onClick={() => swiperRef.current?.swiper.slideNext()}
            className={clsx(
              "tw-absolute tw-w-10 tw-h-10 tw-rounded-lg tw-border tw-border-current tw-right-0 tw-top-1/2 tw-translate-x-1/2 -tw-translate-y-1/2 tw-text-primary-6 tw-items-center tw-justify-center tw-hidden",
              "min-[1300px]:tw-flex",
            )}
          >
            <SvgIcon className="-tw-rotate-90" icon="arrow-1" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Insights;
