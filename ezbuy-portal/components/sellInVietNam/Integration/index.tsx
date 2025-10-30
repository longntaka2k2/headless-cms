"use client";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import clsx from "clsx";
import { LegacyRef, useRef, useState } from "react";
import Slider, { Settings } from "react-slick";
import EzImage from "@/components/commons/EzImage";

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
    <EzImage
      src={url}
      width={180}
      height={60}
      className={clsx(
        "mx-auto my-2",
        "object-contain  rounded-2xl shadow-sm hover:shadow-5 scale-90"
      )}
      quality={100}
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
      label: lang.tpl,
      icons: [
        [
          "/uploads/GHN_3ce768ef3e.png",
          "/uploads/ahamove_daae26d19c.png",
          "/uploads/VN_Post_02357c90a3.png",
          "/uploads/ship60_37a4a4e15a.png",
          "/uploads/ninjavan_4a2acc1e8f.png",
          "/uploads/DHL_bffb02baa5.png",
          "/uploads/lalamove_18ee9945d7.png",
          "/uploads/EMS_88cc033bbf.png",
          "/uploads/fedex_baf9b10747.png",
          "/uploads/sagawa_66b04eab98.png",
        ],
        [
          "/uploads/VN_Post_02357c90a3.png",
          "/uploads/ship60_37a4a4e15a.png",
          "/uploads/ninjavan_4a2acc1e8f.png",
          "/uploads/DHL_bffb02baa5.png",
          "/uploads/lalamove_18ee9945d7.png",
          "/uploads/EMS_88cc033bbf.png",
          "/uploads/fedex_baf9b10747.png",
          "/uploads/sagawa_66b04eab98.png",
          "/uploads/best_express_ebcecdb95e.png",
          "/uploads/Viettel_post_2dd061a137.png",
        ],
        [
          "/uploads/Viettel_post_2dd061a137.png",
          "/uploads/VN_Post_02357c90a3.png",
          "/uploads/ship60_37a4a4e15a.png",
          "/uploads/sagawa_66b04eab98.png",
          "/uploads/ninjavan_4a2acc1e8f.png",
          "/uploads/lalamove_18ee9945d7.png",
          "/uploads/GHN_3ce768ef3e.png",
          "/uploads/fedex_baf9b10747.png",
          "/uploads/EMS_88cc033bbf.png",
          "/uploads/DHL_bffb02baa5.png",
        ],
      ],
    },
    {
      label: lang.market,
      icons: [
        [
          "/uploads/Janbox_37edfeb9a4.png",
          "/uploads/lazada_c3639de5c9.png",
          "/uploads/zozotown_f1ec29516f.png",
          "/uploads/ebay_3a46c69dad.png",
          "/uploads/rakuma_d3dd1e527f.png",
          "/uploads/mercari_b6ba3ba3b0.png",
          "/uploads/amazon_9c897f5f59.png",
          "/uploads/shopback_659c0da1c9.png",
          "/uploads/rakuten_9eed9193db.png",
          "/uploads/seno_bf72d41362.png",
          "/uploads/tiki_cef027752c.png",
          "/uploads/shopee_b6c5939885.png",
        ],
        [
          "/uploads/ebay_3a46c69dad.png",
          "/uploads/zozotown_f1ec29516f.png",
          "/uploads/shopback_659c0da1c9.png",
          "/uploads/rakuten_9eed9193db.png",
          "/uploads/lazada_c3639de5c9.png",
          "/uploads/mercari_b6ba3ba3b0.png",
          "/uploads/rakuma_d3dd1e527f.png",
          "/uploads/Janbox_37edfeb9a4.png",
          "/uploads/shopee_b6c5939885.png",
          "/uploads/amazon_9c897f5f59.png",
          "/uploads/seno_bf72d41362.png",
        ],
      ],
    },
    {
      label: lang.social,
      icons: [
        [
          "/uploads/linkedin_5931f6ae71.png",
          "/uploads/twitter_ce46e72c9a.png",
          "/uploads/instagram_615d679d98.png",
          "/uploads/facebook_696eee823f.png",
          "/uploads/tiktok_ca591c9c4d.png",
          "/uploads/linkedin_5931f6ae71.png",
          "/uploads/twitter_ce46e72c9a.png",
          "/uploads/instagram_615d679d98.png",
          "/uploads/facebook_696eee823f.png",
          "/uploads/tiktok_ca591c9c4d.png",
        ],
        [
          "/uploads/instagram_615d679d98.png",
          "/uploads/tiktok_ca591c9c4d.png",
          "/uploads/instagram_615d679d98.png",
          "/uploads/twitter_ce46e72c9a.png",
          "/uploads/linkedin_5931f6ae71.png",
          "/uploads/twitter_ce46e72c9a.png",
          "/uploads/linkedin_5931f6ae71.png",
          "/uploads/facebook_696eee823f.png",
          "/uploads/tiktok_ca591c9c4d.png",
          "/uploads/facebook_696eee823f.png",
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
    autoplaySpeed: 1000,
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
    <section className="flex flex-col lg:flex-row gap-5 px-4 lg:px-0 w-full py-6 lg:py-10 justify-end">
      <div className="">
        <h2 className="font-bold text-2xl lg:text-4xl">
          {lang.heading}
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
                "relative z-10",
                "text-black bg-white rounded-[40px]",
                "border-2 border-solid border-transparent",
                "after:absolute after:-left-0.5 after:-top-0.5 after:-right-0.5 after:-bottom-0.5 after:z-[1] after:rounded-[42px]",
                active.label == x.label
                  ? "after:bg-[linear-gradient(89deg,_#00194F_0%,_#AF0000_84.37%)]"
                  : "after:bg-[#EBEEFA]"
              )}
              onClick={() => setActive(x)}
            >
              <div
                className={clsx(
                  "relative z-[10]  ",
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
        <Link
          href={""}
          className="text-brand-secondary hover:text-brand-secondary-active text-sm lg:text-base group "
        >
          <span>{lang.viewAll}</span>{" "}
          <FontAwesomeIcon
            icon={faArrowRight}
            className="ml-2 group-hover:ml-3 transition-all"
          />
        </Link>
      </div>
      <div className="lg:w-[60%] flex flex-col  justify-center">
        <div
          className={clsx(
            "lg:[mask-image:linear-gradient(-90deg,_#FFF_96%,_rgba(_255,-255,_255,_0)_100%,_rgba(_255,_255,_255,_0.32)_110%)]",
            "flex flex-col gap-4 lg:gap-7 w-full overflow-hidden"
          )}
        >
          {/* slider1 */}
          <Slider {...settings} ref={refSlider1 as LegacyRef<Slider>}>
            {active.icons[0].map((x, idx) => (
              <SlideItem
                key={idx}
                url={x}
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
                  url={x}
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
                  url={x}
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
