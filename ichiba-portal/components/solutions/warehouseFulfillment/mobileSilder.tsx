import { Swiper, SwiperSlide, SwiperClass } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { Fragment, useRef, useState } from "react";
import "swiper/css";

export interface Props {
  sliderContent: {
    title: string;
    contents: string[];
  }[];
}

const MobileSlider = ({ sliderContent }: Props) => {
  const refSlideMedia = useRef<SwiperClass>();
  const refSlideContent = useRef<SwiperClass>();
  const [active, setActive] = useState<number>(0);

  const moveTo = (index: number) => {
    setActive(index);
    refSlideMedia.current?.slideTo(index);
    refSlideContent.current?.slideTo(index);
  };

  return (
    <>
      <Swiper
        onSwiper={(instance) => (refSlideMedia.current = instance)}
        modules={[Autoplay]}
        autoplay={{
          delay: 5000,
          disableOnInteraction: true,
        }}
        className="tw-w-full tw-max-h-[1686px] !tw-pt-2"
      >
        {sliderContent?.map((x, idx) => (
          <SwiperSlide key={idx + "c" + x.title} className="tw-h-full">
            <div className=" gap-2 tw-h-full tw-flex tw-items-center tw-justify-center">
              <div className="tw-w-[95vw] tw-h-[95vw]  tw-bg-gray-200"></div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="tw-flex tw-justify-between tw-mt-3 tw-w-full">
        {sliderContent.map((x, idx) => (
          <Fragment key={idx}>
            <div
              key={x.title + idx}
              className={`tw-border-brand-primary tw-bg-white tw-relative tw-z-10 tw-flex tw-h-9 tw-w-9
                    tw-shrink-0 tw-items-center tw-justify-center tw-rounded-full tw-border-[1px] tw-cursor-pointer
                    tw-mx-2 tw-ease-out
                    ${active == idx ? "tw-scale-[1.35]" : ""}`}
              onClick={() => moveTo(idx)}
            >
              <div
                className="tw-bg-brand-primary tw-h-6 tw-w-6 
                      tw-rounded-full tw-z-11 tw-flex tw-justify-center tw-items-center"
              >
                <span className="tw-text-white">{idx + 1}</span>
              </div>
            </div>
            {sliderContent.length !== idx + 1 && (
              <div
                key={x.title + idx + "c"}
                className="tw-h-1 tw-flex-1 tw-w-2 tw-bg-brand-primary tw-self-center 
                      tw-rounded-s-full tw-rounded-e-full"
              />
            )}
          </Fragment>
        ))}
      </div>
      <Swiper
        onSwiper={(instance) => (refSlideContent.current = instance)}
        modules={[Autoplay]}
        autoplay={{
          delay: 5000,
          disableOnInteraction: true,
        }}
        onAutoplay={(x) => setActive(x.activeIndex)}
        className="tw-w-full tw-max-h-[1686px] !tw-pt-2"
      >
        {sliderContent?.map((x, idx) => (
          <SwiperSlide key={idx + x.title} className="tw-h-full">
            <h3 className="tw-font-bold tw-text-xl">{x.title}</h3>
            {x.contents?.map((c, cidx) => (
              <div key={x.title + cidx} className="tw-flex tw-mt-4">
                <i className="fa-solid fa-lg fa-circle-check tw-text-blue-6 tw-mt-3  tw-mr-4" />
                <span>{c}</span>
              </div>
            ))}
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default MobileSlider;
