"use client";
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
import clsx from "clsx";

import mapmobile from "@/public/images/home/whatWeDo/mapmobile.svg";
import dot from "@/public/images/home/whatWeDo/dot.svg";

import Image from "next/image";
import { useEffect, useState } from "react";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Element } from "react-scroll";
import EzImage from "@/components/commons/EzImage";
const OurLocation = ({ lang }: { lang: any }) => {
  const location = [
    {
      stt:0,
      title: "Viet Nam",
      number: "2",
      map: mapvi,
      class: "top-[255px] right-[63px]",
      addres: [
        {
          title: lang.hn.title,
          content: lang.hn.content,
          img: hanoi,
        },
        { title: lang.hcm.title, content: lang.hcm.content, img: hcm },
      ],
    },
    {
      stt:1,
      title: "U.S",
      number: "2",
      map: mapus,
      class: "top-[200px] left-[170px]",
      addres: [
        { title: "Manchester", content: "Manchester", img: manches },
        { title: "Oregon", content: "Oregon", img: oregon },
      ],
    },
    {
      stt:2,
      title: "Tokyo",
      number: "2",
      map: mapjp,
      class: "top-[146px] right-[-10px]",
      addres: [
        { title: "Tokyo", content: "〒136-0075 Tokyo, Koto City, Shinsuna, 3 Chome−10−8, 1F Warehouse 3", img: tokyo },
        { title: "Chiba", content: "Chiba", img: chiba },
      ],
    },
    {
      stt:3,
      title: "Singapore",
      number: "1",
      map: mapsing,
      class: "top-[348px] right-[56px]",
      addres: [{ title: "Singapore", content: "470 North Bridge road, #05-12, Bugis Cube, Singapore", img: sing }],
    },
  ];
  const [item, setItems] = useState(location[0] as any);
  const [address, setAdress] = useState(0 as any);
  useEffect(() => {
    setAdress(0);
  }, [item]);
  return (
    <Element name="locations" className="py-6 xl:py-0 px-4 xl:px-0">
      <h2 className="text-center mb-2">{lang.heading}</h2>
      <p className=" mx-auto text-sm xl:text-lg xl:w-[830px] text-center">
        {lang.subHeading}
      </p>
      <div className="text-[#333] px-4 xl:relative xl:container z-[1]">
        <div className="xl:absolute z-[1] bottom-7 ">
          <Image src={mapmobile} quality={100} alt="efex" className="w-full xl:hidden" />
          <div className="flex justify-between items-center xl:hidden">
          <div className="font-bold text-lg">{item.title} {" "} {`(${item.addres.length})`}</div>
          <div className="flex gap-4">
            <EzImage
              src={"/uploads/Frame_427318531_1df8de5c1a.svg"}
              alt="/uploads/Frame_427318531_1df8de5c1a.svg"
              width={36}
              height={36}
              quality={100}
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
          <div className="mx-auto mt-3 w-full max-w-[320px] xl:ml-[14%] xl:mt-10 rounded-[8px] shadow-[8px_15px_15px_0px_rgba(0,_0,_0,_0.10);] overflow-hidden ">
            <Image
            quality={100}
              src={item?.addres[address]?.img}
              alt="efex"
              className="max-w-[320px] h-[200px]"
            />
            <div className="border-t-[6px] border-[#AF0000] bg-white py-3 relative">
              <div className="flex w-full justify-between absolute px-2">
                <div
                  className={clsx(
                    address === 0 && "pointer-events-none opacity-50",
                    " cursor-pointer"
                  )}
                  onClick={() => setAdress(address - 1)}
                >
                  <FontAwesomeIcon icon={faChevronLeft} />
                </div>
                <div
                  className={clsx(
                    address === item?.addres?.length - 1 &&
                      "pointer-events-none opacity-50",
                    "cursor-pointer"
                  )}
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
        <div
          className={clsx(
            " xl:relative xl:top-10 xl:right-[-103px]",
            "xl:block hidden ",
            "xl:justify-self-end",
            " xl:w-[1109px] w-full mb-16 translate-x-40"
          )}
        >
          <div>
            {location.map((value, index) => (
              <div
                key={index}
                className={clsx(
                  "xl:flex items-center absolute z-[2] cursor-pointer",
                  value.class,
                  item.title !== value.title && "opacity-70"
                )}
                onClick={() => setItems(value as any)}
              >
                <Image src={dot} alt="efex" />
                <div
                  className={clsx(
                    "xl:flex font-bold text-sm items-center px-3 py-2 ml-3 bg-white rounded-[8px]",
                    item.title === value.title
                      ? "shadow-[0px_0px_20px_0px_rgba(0,0,0,0.31)] "
                      : "shadow-[0px_0px_20px_0px_rgba(0,0,0,0.11)]"
                  )}
                >
                  <div className="mr-8">{value.title}</div>
                  <div className="px-[6px] text-white h-max bg-[#00194F] rounded-full">
                    {value.number}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <Image src={item.map} alt="efex" className="" />
        </div>
      </div>
    </Element>
  );
};
export default OurLocation;
