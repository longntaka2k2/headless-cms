"use client";
import { useState, useRef } from "react";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Swiper, SwiperSlide, SwiperClass } from "swiper/react";
import Image from "next/image";
import { Element } from "react-scroll";

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

const OurStrengths = ({ aboutUs }: { aboutUs: any }) => {
  const [sliderActive, setSliderActive] = useState<number>(0);
  const sliderRef = useRef<SwiperClass>();
  const listOurStr = [
    aboutUs.highDensityLogisticsNetwork,
    aboutUs.realTimeOrderTracking,
    aboutUs.flexibleWholesaleECommerce,
    aboutUs.smoothFastCustomsClearance,
    aboutUs.sameDayOrderFulfillment,
    aboutUs.sellInJapan,
  ];

  const onHandleChangeSlider = (event: SwiperClass) => {
    setSliderActive(event.activeIndex);
  };

  return (
    <Element className="mt-14" id="ourStrengths" name="ourStrengths">
      <div>
        <div className="px-4">
          <p className="text-2xl text-gray-10 font-black leading-9 uppercase not-italic">
            {aboutUs.ourStrengths}
          </p>
          <p className="mt-2 text-sm font-normal leading-21 text-gray-10 not-italic">
            {aboutUs.contentOurStrengths}
          </p>
        </div>
        <div className="p-4 grid grid-cols-2 gap-x-6 gap-y-4">
          {listOurStr.map((item, index) => (
            <p
              className="text-black text-sm font-normal leading-21"
              key={item}
            >{`${index + 2}. ${item}`}</p>
          ))}
        </div>
      </div>
      <div>
        <div className="bg-[#00194F] w-full px-4 py-2 flex items-start justify-between">
          <div className="flex h-10">
            <p className="text-white text-sm font-bold leading-21 uppercase">{`${
              sliderActive + 1
            }.`}</p>
            <p className="text-white text-sm font-bold leading-21 uppercase ml-1">
              {listSlider(aboutUs)[sliderActive].title}
            </p>
          </div>
          <div className="ml-3 flex">
            <button
              onClick={() => sliderRef.current?.slidePrev()}
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
              onClick={() => sliderRef.current?.slideNext()}
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
            slidesPerView={"auto"}
            spaceBetween={12}
            onSlideChange={onHandleChangeSlider}
          >
            {listSlider(aboutUs).map((item) => (
              <SwiperSlide
                className="w-full max-w-[284px] h-auto"
                key={`${item.id}`}
              >
                <Image
                  className="w-auto h-auto"
                  alt="Group_20_f6c3d48328"
                  src={`https://strapi-efex.ichiba.net${item.image}`}
                  width={284}
                  height={142}
                  quality={100}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="mt-2 p-4 bg-white shadow-2 w-[85%] h-[264px] flex flex-col justify-between">
          <div>
            <p className="text-lg font-bold uppercase leading-27 text-black">
              {listSlider(aboutUs)[sliderActive].title}
            </p>
            <p className="mt-3 text-black text-sm font-normal leading-21">
              {listSlider(aboutUs)[sliderActive].content}
            </p>
          </div>
          <div className="flex items-center mb-2">
            {listSlider(aboutUs).map((item, index) => (
              <div
                key={item.id}
                className={`w-6 h-[2px] mr-2 ${
                  index === sliderActive ? "bg-[#00194F]" : "bg-[#C2C8D5]"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </Element>
  );
};
export default OurStrengths;
