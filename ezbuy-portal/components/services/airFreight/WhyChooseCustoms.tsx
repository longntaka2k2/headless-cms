"use client";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRef, useState } from "react";
import { Element } from "react-scroll";
import { Swiper as SwiperType } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { useWindowSize } from "usehooks-ts";
import EzImage from "../../commons/EzImage";
import { Autoplay } from "swiper/modules";
import clsx from "clsx";

const WhyChooseCustom = ({
  contents,
  lang,
  heading,
  subHeading,
  className,
}: {
  contents: {
    title: string;
    content: string;
    image: string;
  }[];
  heading: string;
  subHeading: string;
  lang: any;
  className?: string;
}) => {
  const [sliderActive, setSliderActive] = useState<number>(0);
  const sliderRef = useRef<SwiperType>();
  const screen = useWindowSize();
  const checkWidthScreen = screen.width < 1024;

  const onClickSlidePrev = () => {
    sliderRef.current?.slidePrev();
  };

  const onClickSlideNext = () => {
    sliderRef.current?.slideNext();
  };

  return (
    <Element
      className={clsx("mt-14 lg:mt-[120px] flex lg:justify-center", className)}
      id="ourStrengths"
      name="ourStrengths"
    >
      <div className="container">
        <div>
          <div className="px-4 lg:px-0 text-center mb-4">
            <h2 className="text-2xl lg:text-4xl text-gray-10 font-black leading-9 lg:leading-54 uppercase mb-2 lg:mb-4">
              {heading}
            </h2>
            <p className="text-sm lg:text-lg font-normal leading-21 lg:leading-27 text-gray-10">
              {subHeading}
            </p>
          </div>
          <div className="p-4 lg:p-8 grid grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-4 shadow-3 bg-white">
            {contents &&
              contents?.map(
                (item, index) =>
                  index !== sliderActive && (
                    <p
                      className="text-black text-sm font-normal lg:font-medium leading-21 lg:text-[#262626]"
                      key={`${index + Math.random()}`}
                    >{`${index + 1}. ${item.title}`}</p>
                  )
              )}
          </div>
        </div>
        <div>
          <div className="bg-[#00194F] max-w-[528px] px-4 py-2 flex items-start lg:items-center justify-between">
            <div className="flex h-10 lg:h-auto">
              <p className="text-white text-sm font-bold lg:text-base lg:leading-6  leading-21 uppercase">{`${
                sliderActive + 1
              }.`}</p>
              <p className="text-white text-sm lg:text-base font-bold leading-21 lg:leading-6 uppercase ml-1">
                {contents?.[sliderActive]?.title}
              </p>
            </div>
            <div className="ml-3 flex">
              <button
                onClick={onClickSlidePrev}
                className="w-10 h-10 bg-gray-1"
              >
                <FontAwesomeIcon
                  color="white"
                  icon={faChevronLeft}
                  height={24}
                  width={24}
                />
              </button>
              <button
                onClick={onClickSlideNext}
                className="w-10 h-10 bg-gray-1 ml-2"
              >
                <FontAwesomeIcon
                  color="white"
                  icon={faChevronRight}
                  height={24}
                  width={24}
                />
              </button>
            </div>
          </div>
          <div className="pl-4 pt-4 w-full">
            <Swiper
              onBeforeInit={(swiper) => {
                sliderRef.current = swiper;
              }}
              onSlideChange={(x) =>
                setSliderActive(
                  x.realIndex < contents.length
                    ? x.realIndex
                    : x.realIndex - contents.length
                )
              }
              modules={[Autoplay]}
              autoplay={{ delay: 5000 }}
              loop={true}
              slidesPerView={"auto"}
              spaceBetween={12}
            >
              {contents &&
                [...contents, ...Array.from(contents)].map((item, index) => (
                  <SwiperSlide
                    className="w-full max-w-[284px] lg:max-w-[444px] h-auto"
                    key={`${index}`}
                  >
                    <EzImage
                      className=""
                      alt="Group_20_f6c3d48328"
                      src={item.image}
                      width={checkWidthScreen ? 284 : 444}
                      height={checkWidthScreen ? 142 : 222}
                      quality={100}
                    />
                  </SwiperSlide>
                ))}
            </Swiper>
          </div>
          <div className="mt-2 p-4 bg-white shadow-2 max-w-[528px] h-[234px] flex flex-col justify-between">
            <div>
              <p className="text-lg font-bold uppercase leading-27 text-black">
                {contents?.[sliderActive]?.title}
              </p>
              <p
                className={`mt-3 text-black ${
                  lang === "ja" ? "text-base" : "text-sm"
                } font-normal leading-6`}
              >
                {contents?.[sliderActive]?.content}
              </p>
            </div>
          </div>
        </div>
      </div>
    </Element>
  );
};
export default WhyChooseCustom;
