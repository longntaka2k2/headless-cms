"use client";
import shop from "@/public/images/services/siv/shop.svg";
import newVietnam from "@/public/images/services/siv/newVietnam.svg";
import manua from "@/public/images/services/siv/manua.svg";
import exporter from "@/public/images/services/siv/exporter.svg";
import dis from "@/public/images/services/siv/dis.svg";
import retailer from "@/public/images/services/siv/retailer.svg";
import customer from "@/public/images/services/siv/customer.svg";
import importer from "@/public/images/services/siv/importer.svg";
import sellinvietnam from "@/public/images/services/siv/sellinvietnam.webp";
import before from "@/public/images/services/siv/before.webp";
import beforeJp from "@/public/images/services/siv/beforeJp.svg";
import after from "@/public/images/services/siv/after.webp";
import afterJp from "@/public/images/services/siv/afterJp.svg";
import Image from "next/image";
import clsx from "clsx";
import styled from "styled-components";

import {
  ReactCompareSlider,
  ReactCompareSliderHandle,
  ReactCompareSliderImage,
} from "react-compare-slider";
import { useState, useCallback, useEffect } from "react";
import React from "react";
import EzImage from "../commons/EzImage";

const TCheckBox = styled.input.attrs((props) => ({
  type: "checkbox",
}))`
  display: none;
`;
const TCheckBoxWrapper = styled.div<{ checked: boolean }>`
  background: #c5d2ec;
  border-radius: 4rem;
  height: 32px;
  width: 68px;
  position: relative;
  transition: cubic-bezier(0.56, 0, 0.38, 1) 0.3s;
  cursor: pointer;
`;

const TCheckBoxToggle = styled.div<{ checked: boolean }>`
  background: #1f4094;
  border-radius: 4rem;
  height: 26px;
  width: 26px;
  top: 3px;
  left: ${(p) => (p.checked ? "38px" : "4px")};
  position: absolute;
  transition: cubic-bezier(0.56, 0, 0.38, 1) 0.3s;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.05);
`;
const ToggleCheckbox = (props: any) => {
  return (
    <TCheckBoxWrapper checked={props.checked} onClick={props.onChange}>
      <TCheckBoxToggle checked={props.checked} />
      <TCheckBox {...props} />
    </TCheckBoxWrapper>
  );
};
const New = ({ lang, style, locale, ...props }: any) => {
  const items = [
    {
      title: lang.items[0].title,
      icon: manua,
    },
    {
      title: lang.items[1].title,
      content: lang.items[1].content,
      icon: exporter,
    },
    {
      title: lang.items[2].title,
      content: lang.items[2].content,
      icon: importer,
    },
    {
      title: lang.items[3].title,
      content: lang.items[3].content,
      icon: dis,
    },
    {
      title: lang.items[4].title,
      content: lang.items[4].content,
      icon: retailer,
    },
    {
      title: lang.items[5].title,
      icon: customer,
    },
  ];
  const [prortrait, setPortrait] = useState(5);
  const [posi, setPosi] = useState(95);
  const [animationId, setAnimationId] = useState(null);
  // const handlePositionChange = useCallback(
  //   (position: any) => setPortrait(Number(position)),
  //   []
  // );

  const [checked, setChecked] = React.useState(false);
  const handlePositionChange = useCallback(
    (position: any) => setPosi(Number(position)),
    []
  );
  const toggle = () => {
    setChecked(!checked);
    if (!checked) {
      setPosi(5);
    } else {
      setPosi(95);
    }
  };
  const getAfterImage = () => {
    switch (locale) {
      case "ja":
        return afterJp.src;
      case "vi":
        return "https://strapi-ezbuy.ichiba.net/uploads/Body_3_3926838147.png";
      default:
        return after.src;
    }
  };

  const getBeforeImage = () => {
    switch (locale) {
      case "vi":
        return "https://strapi-ezbuy.ichiba.net/uploads/Body_2_2f526f7349.png";
      case "ja":
        return beforeJp.src;
      default:
        return before.src;
    }
  };

  useEffect(() => {
    if (posi > 50) {
      setChecked(false);
    } else {
      setChecked(true);
    }
  }, [posi]);
  return (
    <div className="new">
      <div className="lg:hidden px-4 py-6 bg-[#EFF4FA]">
        <div className="font-black text-2xl max-w-[248px] mx-auto text-center">
          <span>{lang.heading}</span>
        </div>
        <div
          className={clsx(
            "relative",
            "after:absolute after:h-full after:w-[1px] after:left-5 after:z-[1] after:top-0 after:min-w-[2px]",
            "after:bg-[linear-gradient(107deg,#173AB4_0%,rgba(141,177,246,_.9)_45.25%,rgba(188,211,255,.9)_54.69%,rgba(212,227,255,.9)_62.5%)]"
          )}
        >
          <div className="flex items-center text-sm  ">
            <Image src={shop} alt={lang.heading} className="relative z-[2]" />
            <div className="ml-3 text-[#333] font-bold">{lang.subHeading}</div>
          </div>
          <div className="overflow-x-scroll px-2 pt-4 pb-5 bg-white rounded-lg mt-3 relative z-[2] ">
            <div className="flex ">
              {items.map((value: any, index: number) => (
                <div className="mr-4 last:mr-0 " key={index}>
                  <div className="w-[122px] text-center ">
                    <div className="relative">
                      <div
                        className={clsx(
                          "mx-auto pt-1 w-6 h-6",
                          "font-bold text-center text-xs  text-white rounded-full bg-[#00194F] ",
                          "after:absolute after:w-[105%] after:z-[3] after:h-[7px] after:border after:border-dashed after:border-[#00194F] after:top-2",
                          index === 5 && "after:!w-[0px]"
                        )}
                      >
                        {index + 1}
                      </div>
                    </div>
                    <div className="mt-3">
                      <Image
                        src={value.icon}
                        alt="icon"
                        className="h-full w-auto mx-auto"
                      />
                    </div>
                    <div className="text-sm font-bold">{value.title}</div>
                    <div className="text-xs">{value?.content}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex items-center text-sm mt-4 ">
            <Image
              src={newVietnam}
              alt="newVietnam"
              className="relative z-[2]"
            />
            <div className="ml-3 text-[#333] font-bold">{lang.subHeading1}</div>
          </div>
          <div className="relative z-[2] bg-white px-3 py-4 rounded-lg mt-3">
            <EzImage
              src={
                locale == "ja"
                  ? afterJp
                  : "/uploads/Isolation_Mode_4ae0061c6d.png"
              }
              width={500}
              height={250}
              alt="sellinvietnam"
            />
          </div>
        </div>
      </div>
      <div className="bg-[#EFF4FA] lg:block hidden py-[60px]">
        <div className="container ">
          <div className="font-black text-4xl mx-auto text-center uppercase">
            <span>{lang.heading}</span>
          </div>
          <div className="flex justify-center text-xl font-bold mb-10 mt-6">
            <div className={clsx(!checked && "text-[#00194F]", "mr-4")}>
              {lang.subHeading}
            </div>
            <ToggleCheckbox checked={checked} onChange={toggle} className="" />
            <div className={clsx(checked && "text-[#00194F]", " ml-4")}>
              {lang.subHeading1}
            </div>
          </div>
          <div className="">
            <ReactCompareSlider
              className="bg-white h-[613px] rounded-[20px] shadow-[0_8_16_0_rgba(0,0,0,.05)]"
              {...props}
              handle={
                <ReactCompareSliderHandle
                  buttonStyle={{
                    width: "0px",
                    height: "0px",
                    border: 0,
                    color: "rgb(51 51 51 / 0%)",
                    transition: "transform 1s ease",
                  }}
                />
              }
              itemOne={
                <div className="">
                  <ReactCompareSliderImage
                    src={getBeforeImage()}
                    className="w-full h-auto bg-white pt-[50px] pb-[29px] "
                    alt="one"
                  />
                </div>
              }
              itemTwo={
                <div className=" ">
                  <ReactCompareSliderImage
                    src={getAfterImage()}
                    className="w-full h-auto pt-[95px] px-[39px]"
                    alt="two"
                  />
                </div>
              }
              onPositionChange={handlePositionChange}
              position={posi}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default New;
