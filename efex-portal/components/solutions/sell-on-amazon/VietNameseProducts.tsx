"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";
import { LegacyRef, useRef, useState } from "react";
import Slider, { Settings } from "react-slick";

const SlideItem = ({
  image,
  title,
  onMouseEnter,
  onMouseLeave,
}: {
  image: string;
  title: string;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}) => (
  <div
    // className={clsx("w-[120px] lg:w-[210px] h-[48px] lg:h-[80px]")}
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}
  >
    <div className="scroll-m-16 w-[60px] lg:w-[180px]">
      <Image
        src={image}
        width={80}
        height={80}
        className="mx-auto w-15 h-15 lg:w-20 lg:h-20"
        alt="image"
      />
      <p className="text-sm lg:text-base mt-2 lg:mt-4 line-clamp-1">{title}</p>
    </div>
  </div>
);

const VietNameseProducts = ({
  lang,
  locale,
}: {
  lang: any;
  locale: string;
}) => {
  const listLogo = [
    {
      url: "https://strapi-efex.ichiba.net/uploads/Group_9f4fa4da43.svg",
      width: 150,
      height: 42,
    },
    {
      url: "https://strapi-efex.ichiba.net/uploads/walmart_seeklogo_01_a5d9ec3961.svg",
      width: 182,
      height: 40,
    },
    {
      url: "https://strapi-efex.ichiba.net/uploads/Group_1_9a3b212640.svg",
      width: 166,
      height: 42,
    },
    {
      url: "https://strapi-efex.ichiba.net/uploads/wayfair_seeklogo_4575cbbd3e.svg",
      width: 182,
      height: 42,
    },
    {
      url: "https://strapi-efex.ichiba.net/uploads/etsy_01_1f492f8ac9.svg",
      width: 88,
      height: 42,
    },
  ];
  const [settings, setSettings] = useState<Settings>({
    dots: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 1500,
    cssEase: "linear",
    arrows: false,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2.8,
        },
      },
    ],
  });
  const refSlider = useRef<Slider>();
  const pauseSlider = () => {
    refSlider.current?.slickPause();
  };

  const resumeSlider = () => {
    refSlider.current?.slickPlay();
  };

  const contents = lang?.products;

  return (
    <div
      className={clsx(
        "bg-[url('https://strapi-efex.ichiba.net/uploads/Frame_1171279941_0a730a83a2.svg')]",
        "lg:bg-[url('https://strapi-efex.ichiba.net/uploads/Group_1171276386_1_78655725c8.svg')]",
        "bg-cover bg-bottom bg-no-repeat px-4"
      )}
    >
      <div className="container p-6 lg:pt-10 lg:pb-20 flex flex-col gap-8 lg:gap-20">
        <div>
          <p className="text-sm lg:text-base text-center pb-6">
            {lang?.label[0]}
            <span className="font-bold">{lang?.label[1]}</span>
            {lang?.label[2]}
            <span className="font-bold">{lang?.label[3]}</span>
            {lang?.label[4]}
          </p>
          <div className="flex overflow-x-auto lg:grid lg:grid-cols-5 items-center gap-2 lg:gap-6 pb-2 no-scrollbar">
            {listLogo.map((item, index) => (
              <div
                key={index}
                className={clsx(
                  "flex-shrink-0 w-[100px] h-10 lg:w-auto lg:h-[82px] flex items-center justify-center",
                  "rounded-xl shadow-[0px_4px_8px_0px_rgba(0,_0,_0,_0.12)]"
                )}
              >
                <Image
                  src={item.url}
                  width={item.width}
                  height={item.height}
                  className="mx-auto h-5 lg:h-[42px]"
                  alt="logo"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-xl lg:text-4xl leading-7 lg:leading-[48px] text-center mb-2">
            {lang?.heading[0]}
            <span className="text-brand-primary">{lang?.heading[1]}</span>
            {lang?.heading[2]}
          </h2>
          <p className="text-sm lg:text-base mb-4 lg:mb-10">
            {lang?.subHeading[0]}
            <span className="font-bold">{lang?.subHeading[1]}</span>
            {lang?.subHeading[2]}
          </p>

          <div className="mb-10">
            <Slider
              {...settings}
              ref={refSlider as LegacyRef<Slider>}
              rtl={true}
            >
              {contents.map((x: any, idx: number) => (
                <SlideItem
                  key={idx}
                  image={x.image}
                  title={x.title}
                  onMouseLeave={() => resumeSlider()}
                  onMouseEnter={() => pauseSlider()}
                />
              ))}
            </Slider>
          </div>

          <div className="hidden lg:block">
            <p className="text-base mb-6">
              {lang?.contact[0]}
              <span className="font-bold">{lang?.contact[1]}</span>
              {lang?.contact[2]}
            </p>
            <Link
              href={`/${locale}/contact-sales`}
              target="_blank"
              className="border-[#AF0000] bg-[#AF0000] text-[#fff] text-center rounded-lg px-6 py-3 hover:bg-[#A30505]"
            >
              {lang?.textBtn}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VietNameseProducts;
