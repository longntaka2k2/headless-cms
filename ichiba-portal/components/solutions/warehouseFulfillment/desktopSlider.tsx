import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { SlideController } from "./SlideController";

export interface Props {
  sliderContent: {
    title: string;
    contents: string[];
  }[];
}
const DesktopSlider = ({ sliderContent }: Props) => {
  return (
    <div className="tw-max-h-[700px] tw-overflow-auto tw-no-scrollbar tw-snap-y tw-snap-mandatory">
      {sliderContent?.map((x, idx) => (
        <div
          key={idx}
          className="tw-relative tw-grid tw-grid-cols-2 gap-2 tw-h-full tw-snap-center"
        >
          <div className="tw-w-[500px] tw-h-[500px]  tw-bg-gray-200 tw-opacity-50 tw-rounded-md"></div>
          <div className="tw-border-l-4 tw-border-l-brand-primary tw-pl-10">
            <div
              className="tw-border-brand-primary tw-bg-white tw-absolute tw-z-10 tw-flex tw-h-9 tw-w-9 tw-shrink-0 
              tw-items-center tw-justify-center tw-rounded-full tw-border-2 tw-left-[49%] tw-top-0"
            >
              <div className="tw-bg-brand-primary tw-h-6 tw-w-6 tw-rounded-full tw-z-11" />
            </div>
            <h3 className="tw-font-bold tw-text-xl">{x.title}</h3>
            {x.contents?.map((c, cidx) => (
              <div key={x.title + cidx} className="tw-flex tw-mt-4">
                <i className="fa-solid fa-lg fa-circle-check tw-text-blue-6 tw-mt-3  tw-mr-4" />
                <span>{c}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
export default DesktopSlider;
