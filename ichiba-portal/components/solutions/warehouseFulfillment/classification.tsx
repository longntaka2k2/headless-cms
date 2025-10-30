import { Swiper, SwiperSlide, SwiperClass } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { useRef, useState } from "react";
import Image from "next/image";
import { useTranslation } from "next-i18next";
import clsx from "clsx";

const Classification = () => {
  const { t } = useTranslation("common");

  const refSlideMedia = useRef<SwiperClass>();
  const refSlideContent = useRef<SwiperClass>();
  const [active, setActive] = useState<number>(0);

  const sliderContent = [
    {
      image:
        "https://cms-strapi.ichiba.net/uploads/Warehouse_1_968efacdbb.png",
      title: t("solutions.warehouseFulfillment.classification.title1"),
      content: t("solutions.warehouseFulfillment.classification.tab1"),
    },
    {
      image:
        "https://cms-strapi.ichiba.net/uploads/Group_3fc45ed61b.png",
      title: t("solutions.warehouseFulfillment.classification.title2"),
      content: t("solutions.warehouseFulfillment.classification.tab2"),
    },
    {
      image:
        "https://cms-strapi.ichiba.net/uploads/warehouse_4_07e1dbf7d0.png",
      title: t("solutions.warehouseFulfillment.classification.title3"),
      content: t("solutions.warehouseFulfillment.classification.tab3"),
    },
  ];
  const moveTo = (index: number) => {
    setActive(index);
    refSlideMedia.current?.slideTo(index);
    refSlideContent.current?.slideTo(index);
  };
  return (
    <section className="tw-py-6 md:tw-py-10">
      <div className="tw-text-center tw-flex tw-flex-col tw-items-center tw-pb-6">
        <h2 className="md:tw-max-w-[792px] tw-font-bold tw-text-2xl md:tw-text-4xl lg:tw-mb-4">
          {t("solutions.warehouseFulfillment.classification.heading")}
        </h2>
        <p>{t("solutions.warehouseFulfillment.classification.subHeading")}</p>
      </div>

      <div
        className="md:tw-container tw-flex tw-justify-stretch tw-w-full 
          tw-overflow-x-auto  tw-gap-3 md:tw-gap-0 tw-ps-3 md:tw-ps-0 tw-no-scrollbar tw-mb-4"
      >
        {sliderContent.map((x, idx) => (
          <>
            <div
              key={x.title + idx}
              className={clsx(
                "tw-relative tw-z-10 ",
                "tw-flex md:tw-flex-1 tw-shrink-0 tw-items-center tw-justify-center",
                "tw-ease-out tw-cursor-pointer",
                "tw-p-4 md:tw-p-3 md:tw-border-b-2",
                "tw-rounded-[30px] md:tw-rounded-t-lg md:tw-rounded-b-none",
                active == idx
                  ? "tw-border-brand-primary tw-bg-brand-primary  tw-text-white"
                  : "tw-bg-pending-3 md:tw-text-pending-4 md:tw-bg-white md:tw-border-pending-3",
              )}
              onClick={() => moveTo(idx)}
            >
              <span className="tw-text-sm md:tw-text-xl tw-font-bold">
                {x.title}
              </span>
            </div>
          </>
        ))}
      </div>

      <div className="tw-container">
        <Swiper
          onSwiper={(instance) => (refSlideContent.current = instance)}
          modules={[Autoplay]}
          autoplay={{
            delay: 5000,
            disableOnInteraction: true,
          }}
          onAutoplay={(x) => setActive(x.activeIndex)}
          className="tw-w-full tw-max-h-[1686px]"
        >
          {sliderContent?.map((x, idx) => (
            <SwiperSlide key={idx} className="tw-h-full">
              <h3 className="tw-font-bold tw-text-xl md:tw-hidden tw-mb-2">
                {x.title}
              </h3>
              <div className="tw-flex">
                <span>{x.content}</span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <Swiper
        onSwiper={(instance) => (refSlideMedia.current = instance)}
        modules={[Autoplay]}
        slidesPerView={1.2}
        autoplay={{
          delay: 5000,
          disableOnInteraction: true,
        }}
        className="tw-w-full tw-max-h-[1686px] tw-min-h-fit"
      >
        {sliderContent?.map((x, idx) => (
          <SwiperSlide key={idx} className="tw-h-full">
            <div className=" tw-h-full tw-flex tw-items-center tw-justify-center">
              <Image
                className="tw-w-full "
                quality={100}
                src={x.image}
                alt="sliderContent"
                width={1300}
                height={650}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};
export default Classification;
