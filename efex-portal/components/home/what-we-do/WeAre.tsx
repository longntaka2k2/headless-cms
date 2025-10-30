"use client";
import map from "@/public/images/home/whatWeDo/map.svg";
import mapvi from "@/public/images/home/whatWeDo/vietnam.svg";
import mapjp from "@/public/images/home/whatWeDo/tokyo.svg";
import mapus from "@/public/images/home/whatWeDo/america.svg";
import mapsing from "@/public/images/home/whatWeDo/singapore.svg";
import manches from "@/public/images/home/whatWeDo/manchester.webp";
import oregon from "@/public/images/home/whatWeDo/oregon.webp";
import tokyo from "@/public/images/home/whatWeDo/tokyo.webp";
import chiba from "@/public/images/home/whatWeDo/chiba.webp";
import hcm from "@/public/images/home/whatWeDo/hcm.webp";
import hanoi from "@/public/images/home/whatWeDo/hanoi.webp";
import sing from "@/public/images/home/whatWeDo/sing.webp";

import mapmobile from "@/public/images/home/whatWeDo/mapmobile.svg";
import image1 from "@/public/images/home/whatWeDo/image1.webp";
import dot from "@/public/images/home/whatWeDo/dot.svg";
import { LottiePlayer } from "@lottiefiles/lottie-player";

import Image from "next/image";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import EzImage from "@/components/commons/EzImage";
import clsx from "clsx";
const WeAre = ({ lang }: { lang: any }) => {
  const location = [
    {
      stt:0,
      title: "Viet Nam",
      number: "2",
      map: mapvi,
      class: "top-[255px] right-[63px]",
      addres: [
        {
          title: "Le Quang Dao, Ha Noi",
          content: lang?.footer?.addressDetail,
          img: hanoi,
        },
        {
          title: lang.homePage.hcm.title,
          content: lang.homePage.hcm.content,
          img: hcm,
        },
      ],
    },
    {
      stt:1,
      title: "U.S",
      number: "1",
      map: mapus,
      class: "top-[200px] left-[170px]",
      addres: [{ title: "Manchester", content: "Manchester", img: manches }],
    },
    {
      stt:2,
      title: "Tokyo",
      number: "3",
      map: mapjp,
      class: "top-[146px] right-[-10px]",
      addres: [
        {
          title: "Tokyo",
          content:
            "〒136-0075 Tokyo, Koto City, Shinsuna, 3 Chome−10−8, 1F Warehouse 3",
          img: tokyo,
        },
        { title: "Oregon", content: "Oregon", img: oregon },
        { title: "Chiba", content: "Chiba", img: chiba },
      ],
    },
    {
      stt:3,
      title: "Singapore",
      number: "1",
      map: mapsing,
      class: "top-[348px] right-[56px]",
      addres: [
        {
          title: "Singapore",
          content: "470 North Bridge road, #05-12, Bugis Cube, Singapore",
          img: sing,
        },
      ],
    },
  ];
  const [item, setItems] = useState(location[0] as any);
  const [address, setAdress] = useState(0 as any);
  useEffect(() => {
    setAdress(0);
  }, [item]);
  return (
    <div className="mt-10 text-[#333] px-4 lg:relative z-[1]">
      <div className="lg:relative z-[1] lg:container lg:pt-[120px] lg:mt-[70px]">
        <div className="text-2xl lg:text-4xl font-bold mx-auto lg:mx-0 max-w-[309px]  lg:max-w-[463px] mb-3  ">
          {lang?.homePage?.weAre}
          <div>{lang?.homePage?.yourBusiness}</div>
        </div>
        <EzImage src={'/uploads/Frame_427318518_565108ef80.svg'} unoptimized quality={100}  width={500} height={300} alt="efex" className="w-full lg:hidden" />
        <div className="flex justify-between items-center lg:hidden">
          <div className="font-bold text-lg">{item.title} {" "} {`(${item.addres.length})`}</div>
          <div className="flex gap-4">
            <EzImage
              src={"/uploads/Frame_427318531_1df8de5c1a.svg"}
              alt="/uploads/Frame_427318531_1df8de5c1a.svg"
              width={36}
              quality={100}
              height={36}
              className={clsx(item.stt === 0 ? 'pointer-events-none opacity-50' : '')}
              onClick={() => setItems(location[item.stt - 1])}
            />
            <EzImage
              src={"/uploads/Frame_427318532_a8bb84fcc9.svg"}
              alt="/uploads/Frame_427318532_a8bb84fcc9.svg"
              width={36}
              height={36}
              quality={100}
              className={clsx(item.stt === 3 ? 'pointer-events-none opacity-50' : '')}
              onClick={() => setItems(location[item.stt + 1])}
            />
          </div>
        </div>
        <div className="mx-auto mt-3 w-full max-w-[320px] lg:ml-[14%] lg:mt-10 rounded-[8px] shadow-[8px_15px_15px_0px_rgba(0,_0,_0,_0.10);] overflow-hidden ">
          <Image
            src={item?.addres[address]?.img}
            alt="efex"
            quality={100}
            className="max-w-[320px] h-[200px]"
          />
          <div className="border-t-[6px] border-[#AF0000] bg-white py-3 relative">
            <div className="flex w-full justify-between absolute px-2">
              <div
                className={`${
                  address === 0 ? "pointer-events-none opacity-50" : ""
                } cursor-pointer`}
                onClick={() => setAdress(address - 1)}
              >
                <FontAwesomeIcon icon={faChevronLeft} />
              </div>
              <div
                className={`${
                  address === item?.addres?.length - 1
                    ? "pointer-events-none opacity-50"
                    : ""
                } cursor-pointer`}
                onClick={() => setAdress(address + 1)}
              >
                <FontAwesomeIcon icon={faChevronRight} />
              </div>
            </div>
            <div className=" px-8 pb-3">
              <div className="font-bold">{item?.addres[address]?.title}</div>
              <div className="text-sm text-[#666] mt-2 h-10">
                {item?.addres[address]?.content}
              </div>
            </div>
            <div className="text-right text-xs text-[#666] pr-3">
              {address + 1}/{item?.addres?.length}
            </div>
          </div>
        </div>
      </div>
      <div className="lg:justify-self-end lg:w-[1109px] h-full w-full lg:h-[641px] lg:block hidden lg:absolute lg:top-0 lg:right-[43px]">
        <div>
          {location.map((value, index) => (
            <div
              key={index}
              className={`lg:flex items-center absolute z-[2] cursor-pointer ${
                value.class
              } ${item.title === value.title ? "" : "opacity-70"}`}
              onClick={() => setItems(value as any)}
            >
              <Image src={dot} alt="efex" />
              <div
                className={`lg:flex font-bold text-sm items-center px-3 py-2 ml-3 bg-white rounded-[8px] ${
                  item.title === value.title
                    ? "shadow-[0px_0px_20px_0px_rgba(0,_0,_0,_0.31)] "
                    : "shadow-[0px_0px_20px_0px_rgba(0,_0,_0,_0.11)]"
                }`}
              >
                <div className="mr-8">{value.title}</div>
                <div className="px-[6px] text-white h-max bg-[#00194F] rounded-full">
                  {value.number}
                </div>
              </div>
            </div>
          ))}
        </div>
        <Image src={item.map} alt="efex" className="" quality={100} />
      </div>
    </div>
  );
};
export default WeAre;
