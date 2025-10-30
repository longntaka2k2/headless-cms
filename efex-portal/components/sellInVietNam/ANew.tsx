"use client";
import efex from "@/public/images/sell-in-vietnam/efex.svg";
import shop from "@/public/images/sell-in-vietnam/shop.svg";
import newVietnam from "@/public/images/sell-in-vietnam/newVietnam.svg";
import manua from "@/public/images/sell-in-vietnam/manua.svg";
import exporter from "@/public/images/sell-in-vietnam/exporter.svg";
import dis from "@/public/images/sell-in-vietnam/dis.svg";
import retailer from "@/public/images/sell-in-vietnam/retailer.svg";
import customer from "@/public/images/sell-in-vietnam/customer.svg";
import importer from "@/public/images/sell-in-vietnam/importer.svg";
import sellinvietnam from "@/public/images/sell-in-vietnam/sellinvietnam.webp";
import before from "@/public/images/sell-in-vietnam/before.webp";
import after from "@/public/images/sell-in-vietnam/after.webp";
import Image from "next/image";
import clsx from "clsx";
import styled from "styled-components";

import {
  ReactCompareSlider,
  ReactCompareSliderHandle,
  ReactCompareSliderImage,
} from "react-compare-slider";
import style from "styled-jsx/style";
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
const New = ({ lang,locale , ...props }: any) => {

  const items = [
    {
      title: lang.newWay.manufa.title,
      icon: manua,
    },
    {
      title: lang.newWay.exporter.title,
      content:lang.newWay.exporter.content,
      icon: exporter,
    },
    {
      title: lang.newWay.importer.title,
      content:lang.newWay.importer.content,
      icon: importer,
    },
    {
      title: lang.newWay.distri.title,
      content:lang.newWay.distri.content,
      icon: dis,
    },
    {
      title: lang.newWay.retailer.title,
      content:lang.newWay.retailer.content,
      icon: retailer,
    },
    {
      title: lang.newWay.custom.title,
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
        <div className="font-bold text-2xl max-w-[248px] mx-auto text-center">
          <span>
            {lang.newWay.title}
            <Image
              src={efex}
              alt="efex"
              className="inline-block ml-2 pb-2"
              width={80}
              height={25}
              quality={100}
            />
          </span>
        </div>
        <div className="sell-cross relative">
          <div className="flex items-center text-sm  ">
            <Image src={shop} alt="" className="relative z-[2]" quality={100} />
            <div className="ml-3 text-[#333] font-bold">
            {lang.newWay.sellCross}
            </div>
          </div>
          <div className="items overflow-x-scroll px-2 pt-4 pb-5 bg-white rounded-lg mt-3 relative z-[2] ">
            <div className="flex ">
              {items.map((value: any, index: number) => (
                <div className="mr-4 last:mr-0 " key={index}>
                  <div className="w-[122px] text-center ">
                    <div className="relative">
                      <div
                        className={clsx(
                          "mx-auto font-bold text-center text-xs pt-1 text-white rounded-full bg-[#00194F] w-[24px] h-[24px] number",
                          `${index === 5 ? "after:!w-[0px]" : ""}`
                        )}
                      >
                        {index + 1}
                      </div>
                    </div>
                    <div className="mt-3">
                      <Image
                        src={value.icon}
                        quality={100}
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
              quality={100}
            />
            <div className="ml-3 text-[#333] font-bold">
            {lang.newWay.sellvn}
            </div>
          </div>
          <div className="relative z-[2] bg-white px-3 py-4 rounded-lg mt-3">
            <EzImage src={locale === 'en' ? '/uploads/Group_19753_dffa12a01e.png' : '/uploads/Group_19753_031ab5c429.png'} alt="sellinvietnam" width={358} height={279} quality={100} />
          </div>
        </div>
      </div>
      <div className="bg-[#EFF4FA] lg:block hidden py-[60px]">
        <div className="container ">
          <div className="font-bold text-4xl mx-auto text-center">
            <span>
            {lang.newWay.title}
              <Image
              quality={100}
                src={efex}
                alt="efex"
                className="inline-block ml-2 pb-2"
                width={117}
                height={37}
              />
            </span>
          </div>
          <div className="flex justify-center text-xl font-bold mb-10 mt-6">
            <div className={`${!checked ? "text-[#00194F]" : ""} mr-4`}>
            {lang.newWay.sellCross}
            </div>
            <ToggleCheckbox checked={checked} onChange={toggle} className="" />
            <div className={`${checked ? "text-[#00194F]" : ""} ml-4`}>
            {lang.newWay.sellvn}
            </div>
          </div>
          <div className="">
            <ReactCompareSlider
              className=" bg-white h-[613px] rounded-[20px] shadow-[0px_8px_16px_0px_rgba(0,_0,_0,_0.05);] "
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
                    src={locale ==='en' ? before.src : 'https://strapi-efex.ichiba.net/uploads/Image_1_ba24a58712.svg' as any}
                    className="w-full h-auto bg-white pt-[50px] pb-[29px] "
                    alt="one"
                  />
                </div>
              }
              itemTwo={
                <div className=" ">
                  <ReactCompareSliderImage
                    src={locale ==='en' ? after.src : 'https://strapi-efex.ichiba.net/uploads/Group_19753_94ea6491ff.svg' as any}
                    style={{}}
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
