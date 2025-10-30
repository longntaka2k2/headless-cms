"use client";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { useRef, useState } from "react";
import { Element } from "react-scroll";
import { Swiper as SwiperType } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { useWindowSize } from "usehooks-ts";

const listSlider = (lang: any) => {
  return [
    {
      id: 1,
      title: lang.slider.fastCrossBorderForwarding,
      content: lang.slider.contentFastCrossBorderForwarding,
      image: "/uploads/Rectangle_9_f2b34e44c0.webp",
    },
    {
      id: 2,
      title: lang.slider.highDensityLogisticsNetwork,
      content: lang.slider.contentHighDensityLogisticsNetwork,
      image: "/uploads/Rectangle_15_4a1ce30c93.webp",
    },
    {
      id: 3,
      title: lang.slider.realTimeOrderTracking,
      content: lang.slider.contentRealTimeOrderTracking,
      image: "/uploads/Rectangle_18_194f7a4df7.webp",
    },
    {
      id: 4,
      title: lang.slider.flexibleWholesaleECommerce,
      content: lang.slider.contentFlexibleWholesaleECommerce,
      image: "/uploads/Rectangle_11_24d305e065.webp",
    },
    {
      id: 5,
      title: lang.slider.smoothFastCustomsClearance,
      content: lang.slider.contentSmoothFastCustomsClearance,
      image: "/uploads/Rectangle_11_1_0fd9e02676.webp",
    },
    {
      id: 6,
      title: lang.slider.sameDayOrderFulfillment,
      content: lang.slider.contentSameDayOrderFulfillment,
      image: "/uploads/Rectangle_10_cce767bf2c.webp",
    },
    {
      id: 7,
      title: lang.slider.sellInJapan,
      content: lang.slider.contentSellInJapan,
      image: "/uploads/Rectangle_10_cf730ba452.webp",
    },
  ];
};

const OurStrengths = ({ aboutUs, lang }: { aboutUs: any; lang: string }) => {
  const [sliderActive, setSliderActive] = useState<number>(0);
  const sliderRef = useRef<SwiperType>();
  const screen = useWindowSize();
  const checkWidthScreen = screen.width < 1024;
  const listOurStr = [
    aboutUs.fastCrossBorderForwarding,
    aboutUs.highDensityLogisticsNetwork,
    aboutUs.realTimeOrderTracking,
    aboutUs.flexibleWholesaleECommerce,
    aboutUs.smoothFastCustomsClearance,
    aboutUs.sameDayOrderFulfillment,
    aboutUs.sellInJapan,
  ];

  const onClickSlidePrev = () => {
    sliderRef.current?.slidePrev();

    if (sliderActive === 0) {
      setSliderActive(listSlider(aboutUs).length - 1);
    } else {
      setSliderActive((prev) => prev - 1);
    }
  };

  const onClickSlideNext = () => {
    sliderRef.current?.slideNext();

    if (sliderActive < listSlider(aboutUs).length - 1) {
      setSliderActive((prev) => prev + 1);
    } else {
      setSliderActive(0);
    }
  };

  return (
    <Element
      className="mt-14 lg:mt-[120px] flex lg:justify-center"
      id="ourStrengths"
      name="ourStrengths"
    >
      <div className="container">
        <div>
          <div className="px-4 lg:px-0">
            <p className="text-2xl lg:text-4xl text-gray-10 font-black leading-9 lg:leading-54 uppercase not-italic">
              {aboutUs.ourStrengths}
            </p>
            <p className="mt-2 lg:mt-4 text-sm lg:text-lg font-normal leading-21 lg:leading-27 text-gray-10 not-italic lg:max-w-[600px]">
              {aboutUs.contentOurStrengths}
            </p>
          </div>
          <div className="p-4 lg:p-8 grid grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-4 shadow-3">
            {listOurStr.map((item, index) => {
              if (index !== sliderActive) {
                return (
                  <p
                    className="text-black text-sm font-normal lg:font-medium leading-21 lg:text-[#262626]"
                    key={`${index + Math.random()}`}
                  >{`${index + 1}. ${item}`}</p>
                );
              }
              return <></>;
            })}
          </div>
        </div>
        <div>
          <div className="bg-[#00194F] max-w-[528px] px-4 py-2 flex items-start lg:items-center justify-between">
            <div className="flex h-10 lg:h-auto">
              <p className="text-white text-sm font-bold lg:text-base lg:leading-6  leading-21 uppercase">{`${
                sliderActive + 1
              }.`}</p>
              <p className="text-white text-sm lg:text-base font-bold leading-21 lg:leading-6 uppercase ml-1">
                {listSlider(aboutUs)[sliderActive].title}
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
              loop={true}
              slidesPerView={"auto"}
              spaceBetween={12}
            >
              {listSlider(aboutUs).map((item, index) => (
                <SwiperSlide
                  className="w-full max-w-[284px] lg:max-w-[444px] h-auto"
                  key={`${index}`}
                >
                  <Image
                    className="w-auto h-auto lg:w-[444px] lg:h-[222px]"
                    alt="Group_20_f6c3d48328"
                    src={`https://strapi-ezbuy.ichiba.net${item.image}`}
                    width={checkWidthScreen ? 284 : 444}
                    height={checkWidthScreen ? 142 : 222}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className="mt-2 p-4 bg-white shadow-2 max-w-[528px] h-[234px] flex flex-col justify-between">
            <div>
              <p className="text-lg font-bold uppercase leading-27 text-black">
                {listSlider(aboutUs)[sliderActive].title}
              </p>
              <p
                className={`mt-3 text-black ${
                  lang === "ja" ? "text-base" : "text-sm"
                } font-normal leading-6`}
              >
                {listSlider(aboutUs)[sliderActive].content}
              </p>
            </div>
          </div>
        </div>
      </div>
    </Element>
  );
};
export default OurStrengths;
