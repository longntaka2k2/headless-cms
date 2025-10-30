import { useState } from "react";
import { useSwiper } from "swiper/react";
import swiperClass from "swiper/types/swiper-class";

export const SlideController = () => {
  const swiper = useSwiper();

  const [isEnd, setIsEnd] = useState(false);
  const [isBeginning, setIsBeginning] = useState(true);
  const buttonUpdater = (swiper: swiperClass) => {
    setIsBeginning(swiper.isBeginning);
    setIsEnd(swiper.isEnd);
  };
  return (
    <div className="tw-absolute tw-left-[54%] tw-top-[90%] tw-flex tw-justify-end tw-h-10  tw-gap-5 tw-z-10">
      <div
        className={`tw-rounded-full tw-w-10 tw-h-10 tw-flex tw-justify-center tw-items-center
          hover:tw-shadow-3 ${
            isBeginning ? "tw-bg-pending-2" : "tw-bg-brand-primary"
          } tw-cursor-pointer`}
        onClick={() => {
          swiper.slidePrev();
          buttonUpdater(swiper);
        }}
      >
        <i className="fa-solid fa-lg fa-arrow-up tw-text-white" />
      </div>
      <div
        className={`tw-rounded-full tw-w-10 tw-h-10 tw-shadow-2 tw-flex tw-justify-center tw-items-center
          hover:tw-shadow-3  ${
            isEnd ? "tw-bg-pending-2" : "tw-bg-brand-primary"
          } tw-cursor-pointer`}
        onClick={() => {
          swiper.slideNext();
          buttonUpdater(swiper);
        }}
      >
        <i className="fa-solid fa-lg fa-arrow-down tw-text-white" />
      </div>
    </div>
  );
};
