"use client";
import Slider, { Settings } from "react-slick";
import EzImage from "../commons/EzImage";
import { RelativeImagePath } from "@/utils/ultils";
import { useState, LegacyRef, useRef } from "react";
import Image from "next/image";
import clsx from "clsx";

const SlideItem = ({
  title,
  url,
  onMouseEnter,
  onMouseLeave,
}: {
  title :string,
  url: string;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}) => (
  <div
    // className={clsx("w-[120px] lg:w-[210px] h-[48px] lg:h-[80px]")}
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}
  >
    <Image
      src={url}
      width={264}
      height={96}
      className={clsx("px-4 my-auto", " ", "w-[200px] lg:w-[2640px] ")}
      alt="partner"
    />
    <div className="md:text-base font-medium text-center mt-2 text-sm">{title}</div>
  </div>
);
const Partner = ({ lang }: any) => {
  const refSlider1 = useRef<Slider>();
  const items1 = [
    {
      title: "Yahoo! Shopping",
      icon: "/uploads/Rectangle_6532_6b90a26a88.png",
    },
    { title: "Yahoo Auction", icon: "/uploads/Rectangle_6533_59ea388fa2.png" },
    { title: "Amazon Japan", icon: "/uploads/Rectangle_6530_cc872610f5.png" },
    { title: "Mercari", icon: "/uploads/Frame_21124_80980273dc.png" },
  ];
  const items2 = [
    // { title: "Rakuten", icon: "/uploads/Rectangle_6531_a8eae09859.png" },
    // { title: "Rakuma", icon: "/uploads/Rectangle_6528_8647d52db0.png" },
    { title: "Zozotown", icon: "/uploads/Rectangle_6529_294eeca812.png" },
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
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 4,
        },
      },
    ],
  });
  const pauseSlider = () => {
    refSlider1.current?.slickPause();
  };

  const resumeSlider = () => {
    refSlider1.current?.slickPlay();
  };

  return (
    <div className="">
      <div className="xl:pt-20 xl:pb-0 py-10">
        <div className="max-w-[776px] mx-auto text-center px-4 lg:px-0">
          <div className="lg:text-5xl font-black text-4xl ">
            {lang.partners.title}
          </div>
          <div className="lg:mt-6 mt-3 text-sm lg:text-lg">
            {lang.partners.subtitle}
          </div>
        </div>
        <EzImage
          src={"/uploads/Rectangle_6526_1151c79022.png"}
          alt="/uploads/Rectangle_6526_1151c79022.png"
          width={1272}
          height={440}
          quality={100}
          className="max-w-[1272px] w-full mx-auto lg:mt-14 mt-6"
        />
        <div className="max-w-[1176px] mx-auto w-full bg-[#F5F5F5] lg:p-6 p-4 xl:relative xl:bottom-[120px] xl:block hidden">
          <div className="grid grid-cols-4 gap-6 ">
            {items1.map((value: any, index: number) => (
              <div key={index}>
                <EzImage
                  src={value.icon}
                  alt={value.icon}
                  width={264}
                  height={96}
                />
                <div className="text-xl font-medium mt-4 text-center">
                  {value.title}
                </div>
              </div>
            ))}
          </div>
          <div className="flex gap-6 mt-8 justify-center">
            {items2.map((value: any, index: number) => (
              <div key={index}>
                <EzImage
                  src={value.icon}
                  alt={value.icon}
                  width={264}
                  height={96}
                />
                <div className="text-xl font-medium mt-4 text-center">
                  {value.title}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="xl:hidden">
          <div className="p-5 bg-[#F5F5F5]">
            <Slider {...settings} ref={refSlider1 as LegacyRef<Slider>}>
              {items1.map((x: any, idx) => (
                <SlideItem
                  key={idx}
                  title={x.title}
                  url={RelativeImagePath(x.icon as any)}
                  onMouseLeave={() => resumeSlider()}
                  onMouseEnter={() => pauseSlider()}
                />
              ))}
              {items2.map((x: any, idx) => (
                <SlideItem
                  key={idx}
                  title={x.title}
                  url={RelativeImagePath(x.icon as any)}
                  onMouseLeave={() => resumeSlider()}
                  onMouseEnter={() => pauseSlider()}
                />
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partner;
