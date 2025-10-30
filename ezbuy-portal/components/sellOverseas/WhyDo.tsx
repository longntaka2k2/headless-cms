"use client";

import clsx from "clsx";
import { useState } from "react";
import EzImage from "../commons/EzImage";
import Slider, { Settings } from "react-slick";

const WhyDo = ({ lang }: any) => {
  const [itemDetail, setItem] = useState(lang.items[0] as any);
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
  return (
    <div className="lg:my-14 my-10 container lg:px-0 px-4">
      <h2 className="lg:text-4xl font-black text-2xl uppercase text-center">
        {lang.title}
      </h2>
      <div className="max-w-[570px] mx-auto rounded-full my-6 grid-cols-2 grid text-center p-1 bg-[#F2F2F2]">
        <div
          onClick={() => setItem(lang.items[0])}
          className={clsx(
            itemDetail.title === lang.items[0].title
              ? "bg-[#00194F] text-white font-bold"
              : " text-[#00194F]",
            "flex py-2 px-6 rounded-full"
          )}
        >
          1.<h3>{lang.items[0].title}</h3>
        </div>
        <div
          onClick={() => setItem(lang.items[1])}
          className={clsx(
            itemDetail.title === lang.items[1].title
              ? "bg-[#00194F] text-white font-bold"
              : " text-[#00194F]",
            "flex py-2 px-6 rounded-full"
          )}
        >
          2.<h3>{lang.items[1].title}</h3>
        </div>
      </div>
      <div
        className={clsx(
          "text-center mb-6",
          itemDetail.subtitle === lang.items[1].subtitle ? "block" : "hidden"
        )}
      >
        {itemDetail.subtitle[0]}{" "}
        <span className="lg:text-3xl text-2xl font-bold">
          {itemDetail?.subtitle[1]}
        </span>{" "}
        {itemDetail?.subtitle[2]}
      </div>
      <div
        className={clsx(
          "text-center mb-6",
          itemDetail.subtitle === lang.items[0].subtitle ? "block" : "hidden"
        )}
      >
        {itemDetail.subtitle}{" "}
      </div>

      <EzImage
        src={"/uploads/Rectangle_6526_53a61927d5.png"}
        alt="/uploads/Rectangle_6526_53a61927d5.png"
        className={clsx(
          itemDetail.title === lang.items[0].title ? "block" : "hidden"
        )}
        width={1200}
        height={360}
        quality={100}
      />
      <EzImage
        src={"/uploads/Rectangle_6526_1_66ef98a522.png"}
        alt="/uploads/Rectangle_6526_1_66ef98a522.png"
        className={clsx(
          itemDetail.title === lang.items[1].title ? "block" : "hidden"
        )}
        width={1200}
        height={360}
        quality={100}
      />
      <div className=" lg:relative bottom-[150px] lg:max-h-[150px] ">
        <div className="mx-auto max-w-[846px]  lg:py-10 my-6 bg-white rounded-[20px] shadow-[0px_8px_16px_0px_rgba(0,_0,_0,_0.05)] px-4 lg:px-0 py-4">
          <div className="flex lg:gap-[46px] gap-7 lg:justify-center lg:max-h-[46px] items-center lg:overflow-visible overflow-x-scroll">
            <EzImage
              src={"/uploads/Visa_Inc_logo_1_5700ab1e38.png"}
              alt="aa"
              width={100}
              height={35}
              className="h-full w-[100px]"
            />
            <EzImage
              src={"/uploads/Mastercard_Logo_1_59d0478848.png"}
              alt="aa"
              width={100}
              height={46}
              className="h-full w-[81px]"
            />
            <EzImage
              src={"/uploads/JCB_logo_1_34b4b893e5.png"}
              alt="a"
              width={100}
              height={46}
              className="h-full w-[59px]"
            />
            <EzImage
              src={
                "/uploads/diners_club_vertical_logo_06_D94_C3_D74_seeklogo_com_1_df374cf030.png"
              }
              alt="a"
              width={100}
              height={46}
              className="h-[46px] w-[64px]"
            />
            <EzImage
              src={"/uploads/American_Express_logo_2018_1_d1cbf64f83.png"}
              alt="a"
              width={100}
              height={46}
              className="h-[46px] w-[46px]"
            />
          </div>
          <div className="flex lg:gap-[46px] lg:justify-center max-h-[46px] items-center lg:mt-10 mt-6 gap-7 lg:overflow-visible overflow-x-scroll">
            <EzImage
              src={
                "/uploads/new_Pay_Pal_Logo_horizontal_full_color_png_1_d27bc6686b.png"
              }
              alt="aa"
              width={152}
              height={40}
              className="lg:h-[40px] h-8 "
            />
            <EzImage
              src={"/uploads/Alipay_logo_2020_3_5285052bdc.png"}
              alt="aa"
              width={158}
              height={40}
              className="lg:h-[40px] h-8 max-w-[158px]"
            />
            <EzImage
              src={"/uploads/Union_Pay_logo_1_a754f84961.png"}
              alt="a"
              width={100}
              height={40}
              className="lg:h-[40px] h-8 w-[64px]"
            />
            <EzImage
              src={"/uploads/2560px_Amazon_Pay_logo_3_011a90cb8e.png"}
              alt="a"
              width={206}
              height={40}
              className="lg:h-[40px] h-8 w-auto"
            />
          </div>
          <div className="flex gap-[46px] lg:justify-center max-h-[46px] items-center lg:mt-10 mt-6 lg:overflow-visible overflow-x-scroll">
            <EzImage
              src={"/uploads/Alipay_HK_1_6cce63f0e5.png"}
              alt="aa"
              width={152}
              height={40}
              className="lg:h-[40px] h-8"
            />
            <EzImage
              src={"/uploads/e_Wallet_RGB_1_5b605efc57.svg"}
              alt="aa"
              width={100}
              height={40}
              className="lg:h-[40px] h-8 w-[46px]"
            />
            <EzImage
              src={"/uploads/American_Express_logo_2018_1_d1cbf64f83.png"}
              alt="a"
              width={100}
              height={40}
              className="lg:h-[40px] h-8 w-[51px]"
            />
            <EzImage
              src={
                "/uploads/329670160_6573064362733266_1692600440497640368_n_5e319db988.png"
              }
              alt="a"
              width={206}
              height={40}
              className="lg:h-[40px] h-8 w-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default WhyDo;
