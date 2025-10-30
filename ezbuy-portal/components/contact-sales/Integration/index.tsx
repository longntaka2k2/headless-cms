"use client";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
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
  const refSlider4 = useRef<Slider>();
  const contents = [
    {
      icons: [
        [
          "/uploads/Rectangle_29_cf70fb3ecc.png",
          "/uploads/Rectangle_29_1_68e669b2e0.png",
          "/uploads/Rectangle_30_339a895ddb.png",
          "/uploads/Rectangle_29_2_a7603d9311.png",
          "/uploads/Rectangle_29_3_4a745473ee.png",
          "/uploads/Rectangle_30_1_d9a30f5879.png",
          "/uploads/Rectangle_29_4_0e97607e14.png",
          "/uploads/Rectangle_29_5_51b69c5fed.png",
          "/uploads/Rectangle_30_2_1eeb38234e.png",
          "/uploads/Rectangle_29_6_ebc7023ef8.png",
          "/uploads/Rectangle_30_3_4da7e710ad.png",
        ],
        [
          "/uploads/Rectangle_29_5_51b69c5fed.png",
          "/uploads/Rectangle_30_2_1eeb38234e.png",
          "/uploads/Rectangle_29_4_0e97607e14.png",
          "/uploads/Rectangle_29_6_ebc7023ef8.png",
          "/uploads/Rectangle_30_1_d9a30f5879.png",
          "/uploads/Rectangle_29_3_4a745473ee.png",
          "/uploads/Rectangle_30_3_4da7e710ad.png",
          "/uploads/Rectangle_29_2_a7603d9311.png",
          "/uploads/Rectangle_30_339a895ddb.png",
          "/uploads/Rectangle_29_1_68e669b2e0.png",
          "/uploads/Rectangle_29_cf70fb3ecc.png",
        ],
      ],
    },
    {
      icons: [
        [
          "/uploads/Rectangle_30_339a895ddb.png",
          "/uploads/Rectangle_30_2_1eeb38234e.png",
          "/uploads/Rectangle_29_4_0e97607e14.png",
          "/uploads/Rectangle_29_3_4a745473ee.png",
          "/uploads/Rectangle_29_6_ebc7023ef8.png",
          "/uploads/Rectangle_30_1_d9a30f5879.png",
          "/uploads/Rectangle_30_3_4da7e710ad.png",
          "/uploads/Rectangle_29_cf70fb3ecc.png",
          "/uploads/Rectangle_29_2_a7603d9311.png",
          "/uploads/Rectangle_29_5_51b69c5fed.png",
          "/uploads/Rectangle_29_1_68e669b2e0.png",
        ],
        [
          "/uploads/Rectangle_29_4_0e97607e14.png",
          "/uploads/Rectangle_30_2_1eeb38234e.png",
          "/uploads/Rectangle_29_3_4a745473ee.png",
          "/uploads/Rectangle_29_6_ebc7023ef8.png",
          "/uploads/Rectangle_30_1_d9a30f5879.png",
          "/uploads/Rectangle_29_1_68e669b2e0.png",
          "/uploads/Rectangle_30_3_4da7e710ad.png",
          "/uploads/Rectangle_29_2_a7603d9311.png",
          "/uploads/Rectangle_30_339a895ddb.png",
          "/uploads/Rectangle_29_5_51b69c5fed.png",
          "/uploads/Rectangle_29_cf70fb3ecc.png",
        ],
      ],
    },
  ];
  const [active, setActive] = useState(contents[0]);
  const [settings, setSettings] = useState<Settings>({
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3500,
    autoplaySpeed: 2500,
    cssEase: "linear",
    arrows: false,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3.8,
        },
      },
    ],
  });

  const pauseSlider = () => {
    refSlider1.current?.slickPause();
    refSlider2.current?.slickPause();
  };

  const resumeSlider = () => {
    refSlider1.current?.slickPlay();
    refSlider2.current?.slickPlay();
  };

  return (
    <section className="flex flex-col lg:flex-row gap-5 px-4 lg:px-0 w-full py-6 lg:py-10 justify-end">
      <div className="lg:max-w-[395px]">
        <h2 className="font-bold text-xl lg:text-3xl mb-4">
          {lang.contactSale.collaborate}
        </h2>
        <Link
          href={lang.contactSale.linkIntegration}
          className="text-[#F5222D] text-sm lg:text-base group  block"
        >
          <span>{lang.contactSale.viewAllIntegration}</span>
          <FontAwesomeIcon
            icon={faArrowRight}
            width={24}
            height={24}
            className="ml-2 group-hover:ml-3 transition-all"
          />
        </Link>
      </div>
      <div className="lg:w-[60%] flex flex-col  justify-center">
        <div
          className={clsx(
            "relative z-10",
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
        </div>
      </div>
    </section>
  );
};

export default Integration;
