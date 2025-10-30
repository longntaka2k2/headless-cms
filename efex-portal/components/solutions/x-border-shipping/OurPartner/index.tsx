"use client";
import { RelativeImagePath } from "@/utils/ultils";
import clsx from "clsx";
import Image from "next/image";
import { LegacyRef, useRef, useState } from "react";
import Slider, { Settings } from "react-slick";

const SlideItem = ({
  url,
  onMouseEnter,
  onMouseLeave,
}: {
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
      width={180}
      height={60}
      className={clsx(
        "mx-auto my-auto",
        "object-cover  rounded-2xl ",
        "w-[120px] lg:w-[210px] h-[48px] lg:h-[80px]"
      )}
      alt="partner"
    />
  </div>
);

const OurPartners = ({ lang }: any) => {
  const refSlider1 = useRef<Slider>();
  const refSlider2 = useRef<Slider>();
  const refSlider3 = useRef<Slider>();
  const contents = [
    {
      label: "Third party logistics",
      icons: [
        [
          "/uploads/Logo_merchant_11_7857f6c39a.svg",
          "/uploads/Logo_merchant_7_871d37d0be.svg",
          "/uploads/Logo_merchant_10_9a34ac7adb.svg",
          "/uploads/Logo_merchant_5_21748a34c7.svg",
          "/uploads/Logo_merchant_9_29c29b99ca.svg",
          "/uploads/Logo_merchant_8_b89efb9440.svg",
          "/uploads/Logo_merchant_3_e43dacd0ea.svg",
          "/uploads/Logo_merchant_6_4a8de2afaa.svg",
          "/uploads/Logo_merchant_4_ace2f7ffe7.svg",
          "/uploads/Logo_merchant_2_03fd2b7c94.svg",
          "/uploads/Logo_merchant_c27170b7c3.svg",
          "/uploads/Logo_merchant_1_473c4d68c5.svg",
        ],
        [
          "/uploads/Logo_merchant_10_9a34ac7adb.svg",
          "/uploads/Logo_merchant_5_21748a34c7.svg",
          "/uploads/Logo_merchant_9_29c29b99ca.svg",
          "/uploads/Logo_merchant_8_b89efb9440.svg",
          "/uploads/Logo_merchant_3_e43dacd0ea.svg",
          "/uploads/Logo_merchant_6_4a8de2afaa.svg",
          "/uploads/Logo_merchant_4_ace2f7ffe7.svg",
          "/uploads/Logo_merchant_2_03fd2b7c94.svg",
          "/uploads/Logo_merchant_c27170b7c3.svg",
          "/uploads/Logo_merchant_1_473c4d68c5.svg",
        ],
        [
          "/uploads/Logo_merchant_4_ace2f7ffe7.svg",
          "/uploads/Logo_merchant_2_03fd2b7c94.svg",
          "/uploads/Logo_merchant_c27170b7c3.svg",
          "/uploads/Logo_merchant_1_473c4d68c5.svg",
          "/uploads/Logo_merchant_7_871d37d0be.svg",
          "/uploads/Logo_merchant_10_9a34ac7adb.svg",
          "/uploads/Logo_merchant_5_21748a34c7.svg",
          "/uploads/Logo_merchant_9_29c29b99ca.svg",
          "/uploads/Logo_merchant_8_b89efb9440.svg",
          "/uploads/Logo_merchant_3_e43dacd0ea.svg",
        ],
      ],
    },
  ];
  const [active, setActive] = useState(contents[0]);
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

  const pauseSlider = () => {
    refSlider1.current?.slickPause();
    refSlider2.current?.slickPause();
    refSlider3.current?.slickPause();
  };

  const resumeSlider = () => {
    refSlider1.current?.slickPlay();
    refSlider2.current?.slickPlay();
    refSlider3.current?.slickPlay();
  };

  return (
    <section className="lg:relative flex flex-col lg:flex-row gap-5 px-4 lg:px-0 w-full py-6 lg:py-10 justify-end lg:items-center">
      <div
        className={clsx(
          "lg:absolute z-20 top-0 bottom-0 left-0 right-0",
          "flex items-center container"
        )}
      >
        <div className="lg:w-[30%]">
          <h2 className="font-bold text-2xl lg:text-4xl mb-2">
            {lang.heading}
          </h2>
          <p className="text-sm lg:text-lg">{lang.subHeading}</p>
        </div>
      </div>
      <div className="lg:w-[60%] flex flex-col  justify-center lg:self-end">
        <div
          className={clsx(
            "lg:relative z-1",
            "lg:[mask-image:linear-gradient(-90deg,_#FFF_96%,_rgba(_255,-255,_255,_0)_97%,_rgba(_255,_255,_255,_0.32)_110%)]",
            "flex flex-col gap-4 lg:gap-7"
          )}
        >
          {/* slider1 */}
          <Slider {...settings} ref={refSlider1 as LegacyRef<Slider>}>
            {active.icons[0].map((x, idx) => (
              <SlideItem
                key={idx}
                url={RelativeImagePath(x)}
                onMouseLeave={() => resumeSlider()}
                onMouseEnter={() => pauseSlider()}
              />
            ))}
          </Slider>
          {/* slider2 */}
          {active.icons[1] && (
            <Slider
              {...settings}
              ref={refSlider2 as LegacyRef<Slider>}
              rtl={true}
            >
              {active.icons[1].map((x, idx) => (
                <SlideItem
                  key={idx}
                  url={RelativeImagePath(x)}
                  onMouseLeave={() => resumeSlider()}
                  onMouseEnter={() => pauseSlider()}
                />
              ))}
            </Slider>
          )}
          {/* slider3 */}
          {active.icons[2] && (
            <Slider {...settings} ref={refSlider3 as LegacyRef<Slider>}>
              {active.icons[2].map((x, idx) => (
                <SlideItem
                  key={idx}
                  url={RelativeImagePath(x)}
                  onMouseLeave={() => resumeSlider()}
                  onMouseEnter={() => pauseSlider()}
                />
              ))}
            </Slider>
          )}
        </div>
      </div>
    </section>
  );
};

export default OurPartners;
