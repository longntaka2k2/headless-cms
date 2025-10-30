import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";

// Import Swiper styles

// import required modules
import useWidth from "@/hooks/useWidth";
import DesktopSlider from "./desktopSlider";
import MobileSlider from "./mobileSilder";

export interface Props {
  heading: string;
  subHeading: string;
  sliderContent: {
    title: string;
    contents: string[];
  }[];
}
const BusinessSolution = ({ sliderContent, heading, subHeading }: Props) => {
  const width = useWidth();

  return (
    <section
      className="tw-py-6 md:tw-py-16 
        tw-bg-silver md:tw-bg-[url('/icons/solutions/warehouseFulfillment/bg-warehouse-fulfillment.webp')]
        tw-bg-no-repeat tw-bg-cover
    "
    >
      <div className="tw-container ">
        <div className="tw-text-center tw-flex tw-flex-col tw-items-center">
          <h2 className="md:tw-max-w-[792px] tw-font-bold tw-text-2xl md:tw-text-4xl md:tw-mb-4">
            {heading}
          </h2>
          <p className="lg:tw-w-3/5 lg:tw-mb-4">{subHeading}</p>
        </div>
        <div>
          {width > 1024 ? (
            <DesktopSlider sliderContent={sliderContent} />
          ) : (
            <MobileSlider sliderContent={sliderContent} />
          )}
        </div>
      </div>
    </section>
  );
};
export default BusinessSolution;
