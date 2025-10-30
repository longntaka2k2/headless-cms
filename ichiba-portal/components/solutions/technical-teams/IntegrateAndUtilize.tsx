import clsx from "clsx";
import { useTranslation } from "next-i18next";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import { useState, useRef } from "react";
import Image from "next/image";

const IntegrateAndUtilize = () => {
  const { t } = useTranslation("technical-teams");
  const [sliderActive, setSliderActive] = useState<number>(0);
  const sliderRef = useRef<SwiperClass>();

  return (
    <div
      className={clsx(
        "tw-relative tw-py-6 lg:tw-py-20 tw-overflow-hidden tw-bg-cover",
        "tw-bg-[url(https://cms-strapi.ichiba.net/uploads/Frame_1171276123_edb0b01432.svg)]",
      )}
    >
      <div className="lg:tw-container tw-px-4 lg:tw-flex lg:tw-gap-10 lg:tw-items-center tw-justify-between">
        <h2 className="tw-mb-0 tw-text-2xl tw-font-bold lg:tw-text-4xl tw-text-white lg:tw-w-[70%]">
          {t("integrateAndUtilize.heading")}
        </h2>
        <div className="lg:tw-flex tw-hidden tw-gap-4">
          <div
            className={clsx(
              "tw-w-12 tw-h-12 tw-flex tw-items-center tw-justify-center tw-text-white",
              "tw-rounded-full tw-border tw-border-[#fff] tw-cursor-pointer tw-bg-ic-white-1",
            )}
            onClick={() => sliderRef.current?.slidePrev()}
          >
            <FontAwesomeIcon icon={faArrowLeft} size="sm" />
          </div>
          <div
            className={clsx(
              "tw-w-12 tw-h-12 tw-flex tw-items-center tw-justify-center tw-text-white",
              "tw-rounded-full tw-border tw-border-[#fff] tw-cursor-pointer tw-bg-ic-white-1",
            )}
            onClick={() => sliderRef.current?.slideNext()}
          >
            <FontAwesomeIcon icon={faArrowRight} size="sm" />
          </div>
        </div>

        <div
          className={clsx(
            "lg:tw-hidden",
            "tw-mt-5 tw-flex tw-overflow-x-scroll tw-gap-4 tw-scroll-px-2 tw-scroll-mx-48 tw-pb-3",
          )}
        >
          {(
            t("integrateAndUtilize.items", {
              returnObjects: true,
            }) as string[]
          ).map((value: any, index: number) => (
            <div key={index} className="tw-relative tw-pt-3">
              <div
                key={index}
                style={{
                  boxShadow: "0px 0px 20px 0px rgba(133, 133, 133, 0.24)",
                }}
                className={clsx(
                  "tw-rounded-lg tw-border tw-border-ic-white-1 tw-p-4 tw-bg-ic-white-1",
                  "tw-min-w-[237px] tw-h-[280px]",
                )}
              >
                <div className="tw-mt-3 tw-flex tw-gap-2 tw-items-center">
                  <Image src={value.icon} alt="#" width={32} height={32} />
                  <p className="tw-mb-0 tw-text-base tw-font-bold tw-text-white">
                    {value.title}
                  </p>
                </div>
                <ul className="tw-mt-2 tw-text-sm tw-text-ic-white-5">
                  {Array.isArray(value.content)
                    ? value.content.map((item: string, itemIndex: number) => (
                        <li
                          key={itemIndex}
                          className={clsx(
                            item.length > 1 ? "tw-list-disc" : "",
                          )}
                        >
                          {item}
                        </li>
                      ))
                    : ""}
                </ul>
              </div>
              <button
                className={clsx(
                  "tw-absolute tw-top-0 tw-left-5 tw-text-xs",
                  "tw-py-1 tw-px-2 tw-rounded tw-bg-[#454344] tw-text-white",
                )}
              >
                {t("integrateAndUtilize.step")} {index + 1}
              </button>
            </div>
          ))}
        </div>
      </div>

      <div className="tw-w-full tw-h-[480px] tw-hidden lg:tw-block"></div>

      <div
        className={clsx(
          "tw-absolute tw-top-[210px] lg:tw-top-[230px] tw-right-0 lg:tw-max-w-[82%]",
          "lg:tw-block tw-hidden tw-overflow-visible",
        )}
      >
        <Swiper
          onBeforeInit={(swiper) => {
            sliderRef.current = swiper;
          }}
          spaceBetween={24}
          onSlideChange={(e) => setSliderActive(e.activeIndex)}
          className="w-full"
          slidesOffsetBefore={16}
          slidesOffsetAfter={16}
          breakpoints={{
            1000: {
              slidesPerView: 2.3,
            },
            1150: {
              slidesPerView: 2.7,
            },
            1250: {
              slidesPerView: 3,
            },
            1450: {
              slidesPerView: 3.3,
            },
            1500: {
              slidesPerView: 3.5,
            },
            1600: {
              slidesPerView: 3.7,
            },
            1700: {
              slidesPerView: 4,
            },
            1750: {
              slidesPerView: 4.1,
            },
            1800: {
              slidesPerView: 4.3,
            },
          }}
        >
          {(
            t("integrateAndUtilize.items", {
              returnObjects: true,
            }) as string[]
          ).map((value: any, index: number) => (
            <SwiperSlide
              className="tw-relative scroll-m-16 max-w-[340px] lg:max-w-[384px] tw-pt-4"
              key={index}
            >
              <div
                key={index}
                style={{
                  boxShadow: "0px 0px 20px 0px rgba(133, 133, 133, 0.24)",
                }}
                className={clsx(
                  "tw-rounded-lg tw-border tw-border-ic-white-1 tw-p-4 tw-bg-ic-white-1",
                  "tw-h-[332px] tw-min-w-[342px] tw-max-w-[342px] tw-grid tw-content-between",
                )}
              >
                <div>
                  <Image src={value.icon} alt="#" width={56} height={56} />
                  <h4 className="tw-mt-5 tw-mb-3 tw-text-xl tw-font-bold tw-text-white">
                    {value.title}
                  </h4>
                  <ul
                    className={clsx("tw-mt-2 tw-text-base tw-text-ic-white-5")}
                  >
                    {Array.isArray(value.content)
                      ? value.content.map((item: string, itemIndex: number) => (
                          <li
                            key={itemIndex}
                            className={clsx(
                              item.length > 1 ? "tw-list-disc" : "",
                            )}
                          >
                            {item}
                          </li>
                        ))
                      : ""}
                  </ul>
                </div>
              </div>
              <button
                className={clsx(
                  "tw-absolute tw-top-0 tw-left-5",
                  "tw-py-1 tw-px-2 tw-rounded tw-bg-[#454344] tw-text-white",
                )}
              >
                {t("integrateAndUtilize.step")} {index + 1}
              </button>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default IntegrateAndUtilize;
