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
      url: "https://strapi-efex.ichiba.net/uploads/amazon_svg_5e5973abfd.svg",
      width: 168,
      height: 86,
    },
    {
      url: "https://strapi-efex.ichiba.net/uploads/ebay_svg_60ffbea3db.svg",
      width: 168,
      height: 86,
    },
    {
      url: "https://strapi-efex.ichiba.net/uploads/etsy_svg_deaf686149.svg",
      width: 168,
      height: 86,
    },
    {
      url: "https://strapi-efex.ichiba.net/uploads/walmart_svg_c33bdd0145.svg",
      width: 168,
      height: 86,
    },
    {
      url: "https://strapi-efex.ichiba.net/uploads/wayfair_svg_5e8a31af81.svg",
      width: 168,
      height: 86,
    },
    {
      url: "https://strapi-efex.ichiba.net/uploads/shopify_svg_62feee3959.svg",
      width: 168,
      height: 86,
    },
    {
      url: "https://strapi-efex.ichiba.net/uploads/tiktokshop_6680afecca.svg",
      width: 168,
      height: 86,
    },
  ];
  const [settings, setSettings] = useState<Settings>({
    dots: false,
    infinite: true,
    slidesToShow: 9.5,
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
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 650,
        settings: {
          slidesToShow: 6.8,
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
      <div className="p-6 lg:py-20 flex flex-col gap-8 lg:gap-20">
        <div className="container">
          <p className="text-sm lg:text-base text-center pb-6">
            <span className="text-brand-primary">{lang?.label[0]}</span>
            {lang?.label[1]}
            <br />
            {lang?.label[2]}
          </p>
          <div className="w-full overflow-x-auto">
            <div className="flex min-w-max items-center gap-2 lg:gap-6 mb-2">
              {listLogo.map((item, index) => (
                <div
                  key={index}
                  className={clsx(
                    "flex-shrink-0 w-[78px] h-[40px] md:w-[168px] md:h-[86px] rounded-xl overflow-hidden"
                  )}
                >
                  <Image
                    src={item.url}
                    width={item.width}
                    height={item.height}
                    className="mx-auto"
                    alt="logo"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="text-center">
          <div className="container">
            <h2 className="text-xl lg:text-4xl leading-7 lg:leading-[48px] text-center mb-2">
              {lang?.heading[0]}
              <span className="text-brand-primary">{lang?.heading[1]}</span>
              {lang?.heading[2]}
            </h2>
            <p className="text-sm lg:text-base mb-4 lg:mb-10">
              <span className="font-bold">{lang?.subHeading[0]}</span>
              {lang?.subHeading[1]}
            </p>
          </div>

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

          <Link
            href={`/${locale}/contact-sales`}
            target="_blank"
            className="border border-[#AF0000] text-brand-primary text-center rounded-lg px-6 py-3 hover:opacity-80"
          >
            {lang?.textBtn}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default VietNameseProducts;
