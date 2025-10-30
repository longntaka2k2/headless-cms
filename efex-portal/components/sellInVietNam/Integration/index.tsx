"use client";
import clsx from "clsx";
import { LegacyRef, useRef, useState } from "react";
import Slider, { Settings } from "react-slick";
import Image from "next/image";
import { RelativeImagePath } from "@/utils/ultils";

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
      quality={100}
      className={clsx(
        "mx-auto my-auto",
        "object-cover  rounded-2xl ",
        "w-[120px] lg:w-[210px] h-[48px] lg:h-[80px]"
      )}
      alt="partner"
    />
  </div>
);

const Integration = ({ lang }: any) => {
  const refSlider1 = useRef<Slider>();
  const refSlider2 = useRef<Slider>();
  const refSlider3 = useRef<Slider>();
  const contents = [
    {
      label: lang.third,
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
    {
      label: lang.market,
      icons: [
        [
          "/uploads/Logo_merchant_1_90db5e7ce5.svg",
          "/uploads/Logo_merchant_4_304fc2b57a.svg",
          "/uploads/Logo_merchant_3_a9107d2ae5.svg",
          "/uploads/Logo_merchant_2_d58aa14947.svg",
          "/uploads/Logo_merchant_810ec9bb46.svg",
          "/uploads/Logo_merchant_3_a9107d2ae5.svg",
          "/uploads/Logo_merchant_4_304fc2b57a.svg",
          "/uploads/Logo_merchant_1_90db5e7ce5.svg",
          "/uploads/Logo_merchant_810ec9bb46.svg",
          "/uploads/Logo_merchant_2_d58aa14947.svg",
        ],
        [
          "/uploads/Logo_merchant_810ec9bb46.svg",
          "/uploads/Logo_merchant_3_a9107d2ae5.svg",
          "/uploads/Logo_merchant_4_304fc2b57a.svg",
          "/uploads/Logo_merchant_1_90db5e7ce5.svg",
          "/uploads/Logo_merchant_2_d58aa14947.svg",
          "/uploads/Logo_merchant_3_a9107d2ae5.svg",
          "/uploads/Logo_merchant_2_d58aa14947.svg",
          "/uploads/Logo_merchant_810ec9bb46.svg",
          "/uploads/Logo_merchant_3_a9107d2ae5.svg",
          "/uploads/Logo_merchant_4_304fc2b57a.svg",
        ],
      ],
    },
    {
      label: lang.social,
      icons: [
        [
          "/uploads/Logo_merchant_2_883b91993f.png",
          "/uploads/Logo_merchant_1_5ef1918815.png",
          "/uploads/Logo_merchant_f2a707eba8.png",
          "/uploads/Logo_merchant_6_97ddf3689c.png",
          "/uploads/Logo_merchant_5_dcabc1bf8b.png",
          "/uploads/Logo_merchant_8_d1489fbe63.png",
          "/uploads/Logo_merchant_3_c899d3f54d.png",
          "/uploads/Logo_merchant_7_f69b63ef16.png",
          "/uploads/Logo_merchant_4_e413e8f32f.png",
          "/uploads/Logo_merchant_1_ed06e5aa96.svg",
          "/uploads/Logo_merchant_2_775380407c.svg",
          "/uploads/Logo_merchant_3_cb846081e7.svg",
          "/uploads/Logo_merchant_a29d8a2883.svg",
        ],
        [
          "/uploads/Logo_merchant_3_c899d3f54d.png",
          "/uploads/Logo_merchant_7_f69b63ef16.png",
          "/uploads/Logo_merchant_4_e413e8f32f.png",
          "/uploads/Logo_merchant_1_ed06e5aa96.svg",
          "/uploads/Logo_merchant_2_775380407c.svg",
          "/uploads/Logo_merchant_3_cb846081e7.svg",
          "/uploads/Logo_merchant_a29d8a2883.svg",
          "/uploads/Logo_merchant_2_883b91993f.png",
          "/uploads/Logo_merchant_1_5ef1918815.png",
          "/uploads/Logo_merchant_f2a707eba8.png",
          "/uploads/Logo_merchant_6_97ddf3689c.png",
          "/uploads/Logo_merchant_5_dcabc1bf8b.png",
          "/uploads/Logo_merchant_8_d1489fbe63.png",
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
    <section className="flex flex-col lg:flex-row gap-5 w-full py-6 lg:py-10 justify-end">
      <div className="">
        <h2 className="font-bold text-2xl lg:text-4xl px-4 lg:px-0">
          {lang.title}
        </h2>
        <div
          className={clsx(
            "flex gap-3 flex-nowrap lg:flex-col lg:items-start",
            "py-4 lg:py-5  w-full overflow-x-auto no-scrollbar"
          )}
        >
          {contents.map((x, idx) => (
            <div
              role="button"
              key={idx}
              className={clsx(
                "relative z-[1]",
                "text-black bg-white rounded-[40px]",
                "border-2 border-solid border-transparent",
                "after:absolute after:-left-0.5 after:-top-0.5 after:-right-0.5 after:-bottom-0.5 after:z-[1] after:rounded-[42px]",
                active.label == x.label
                  ? "after:bg-linear"
                  : "after:bg-[#EBEEFA]"
              )}
              onClick={() => setActive(x)}
            >
              <div
                className={clsx(
                  "relative z-[2]  ",
                  "px-5 py-2 bg-white hover:bg-transparent rounded-[19px] transition duration-100 ease-linear min-w-max",
                  active.label == x.label
                    ? "hover:text-white"
                    : "text-brand-secondary",
                  "text-sm lg:text-base"
                )}
              >
                {x.label}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="lg:w-[60%] flex flex-col justify-center">
        <div
          className={clsx(
            "relative z-1",
            "lg:[mask-image:linear-gradient(-90deg,#FFF_96%,rgba(255,-255,255,0)_97%,rgba(255,255,255,0.32)_110%)]",
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

export default Integration;
