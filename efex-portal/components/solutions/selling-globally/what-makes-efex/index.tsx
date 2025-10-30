"use client";
import clsx from "clsx";
import { Circle } from "./Circle";
import Image from "next/image";
import { faArrowDown, faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { useEffect, useState } from "react";
import { useTransition } from "react-spring";
import { YouTubeEvent, YouTubeProps } from "react-youtube";
import { usePathname } from "next/navigation";

var cElement: YouTubeEvent = { data: null, target: null };

const WhatMakesEFEX = ({ lang }: any) => {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const items = [
    {
      key: 0,
      efex: lang?.content[0]?.efex,
      other: lang?.content[0]?.other,
      icon: lang?.content[0]?.icon,
      special: lang?.content[0]?.special,
    },
    {
      key: 1,
      efex: lang?.content[1]?.efex,
      other: lang?.content[1]?.other,
      icon: lang?.content[1]?.icon,
      special: lang?.content[1]?.special,
    },
    {
      key: 2,
      efex: lang?.content[2]?.efex,
      other: lang?.content[2]?.other,
      icon: lang?.content[2]?.icon,
      special: lang?.content[2]?.special,
    },
    {
      key: 3,
      efex: lang?.content[3]?.efex,
      other: lang?.content[3]?.other,
      icon: lang?.content[3]?.icon,
      special: lang?.content[3]?.special,
    },
  ];

  const [active, setActive] = useState(items[0].key as number);
  const [prevActive, setPrevActive] = useState(items.length);

  useEffect(() => {
    let selectedProductIndex = items.findIndex((item) => item.key === active);
    if (selectedProductIndex === -1) {
      selectedProductIndex = 0; // Nếu không tìm thấy, đặt lại về phần tử đầu tiên
    } else {
      selectedProductIndex++;
      if (selectedProductIndex === items.length) {
        selectedProductIndex = 0; // Nếu đã đạt cuối danh sách, quay lại phần tử đầu tiên
      }
    }
    const timeoutID = setTimeout(() => {
      setActive(items[selectedProductIndex]?.key);
      if (selectedProductIndex === 0) {
        setPrevActive(items.length - 1);
      } else {
        setPrevActive(selectedProductIndex - 1);
      }
    }, 5000);
    return () => {
      clearTimeout(timeoutID);
    };
  }, [active, items]);

  const [up, setUp] = useState(true);

  const handleNextSlide = () => {
    setUp(true);
    setActive((prevSlide) => (prevSlide + 1) % items.length);
  };

  const handlePrevSlide = () => {
    setUp(false);
    setActive((prevSlide) => (prevSlide - 1 + items.length) % items.length);
  };

  return (
    <div
      className={clsx(
        "bg-[url(https://strapi-efex.ichiba.net/uploads/Frame_1171276632_ff389af972.svg)] py-6 bg-center overflow-hidden",
        "lg:py-15 lg:bg-[url(https://strapi-efex.ichiba.net/uploads/Frame_1171276574_cf808b4f7b.png)] bg-no-repeat bg-cover"
      )}
    >
      <div className="container px-3">
        <p className="text-sm lg:text-base text-white lg:text-center">
          {lang.title[0]}
          <span className="text-2xl lg:text-4xl font-bold">
            {lang.title[1]}
          </span>
          {lang.title[2]}
        </p>
        <h2 className="titleGradient text-2xl lg:text-4xl lg:leading-12 font-bold lg:text-center mb-6 lg:mb-10">
          {lang.heading[0]} {lang.heading[1]}
          {lang.heading[2]}
        </h2>
      </div>

      {/* Mobile */}
      <div className="lg:hidden flex justify-between container px-3 relative">
        <div className="flex flex-col -translate-x-9 items-center w-[25%]">
          <div>
            <Circle
              className="bg-[#4EF0BA]"
              content={lang.efex}
              textColor="text-[#4EF0BA]"
            />
          </div>
          <div className="w-1 h-full bg-[linear-gradient(0deg,#FE313B_0%,_#4EF0BA_100.62%)]" />
          <div>
            <Circle
              className="bg-[#FE313B]"
              content={lang.otherCompanies}
              textColor="text-[#FE313B]"
            />
          </div>
        </div>

        <div className="w-[60%]">
          {items.map((value: any, index: number) => (
            <div
              className={clsx(
                active === index ? "" : "hidden",
                "rounded-2xl text-[#333]"
              )}
              key={index}
            >
              <div className="grid justify-between">
                <div
                  style={{
                    background: "rgba(78, 240, 186, 0.10)",
                  }}
                  className={clsx(
                    active === index ? "flex fadein_items" : "",
                    "flex gap-4 py-3 px-4 rounded-2xl items-center h-[90px] w-[200px]"
                  )}
                >
                  <Image
                    src="https://strapi-efex.ichiba.net/uploads/Group_de4fdc3985.svg"
                    alt="efex"
                    width={24}
                    height={24}
                  />
                  <p className="text-sm font-medium text-white">{value.efex}</p>
                </div>
                <div
                  className={clsx(
                    "absolute top-[50%] translate-y-[-50%] left-[4px] sm:left-[6%]",
                    "bg-[linear-gradient(89deg,_#959DB9_0%,_#AF0000_100.62%)] w-[120px] px-1 py-2 rounded-[50px] mx-auto",
                    "flex items-center gap-1"
                  )}
                >
                  <Image
                    src={value.icon}
                    alt="efex"
                    width={24}
                    height={24}
                    className={clsx(
                      active === index ? "flex fadein_items" : "",
                      "mx-auto w-4 h-4 lg:w-6 lg:h-6"
                    )}
                  />
                  <p
                    className={clsx(
                      active === index ? "flex fadein_items" : "",
                      "text-transition text-xs font-bold text-white"
                    )}
                  >
                    {value.special}
                  </p>
                </div>
                <div className="h-14"></div>
                <div
                  style={{
                    background: "rgba(188, 80, 101, 0.13)",
                  }}
                  className={clsx(
                    active === index ? "flex fadein_items" : "",
                    "flex gap-4 py-3 px-4 rounded-2xl items-center h-[90px] w-[200px]"
                  )}
                >
                  <Image
                    src="https://strapi-efex.ichiba.net/uploads/Group_2_fa2d77585a.svg"
                    alt="efex"
                    width={24}
                    height={24}
                  />
                  <p className="text-sm font-medium text-white">
                    {value.other}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col justify-end items-center w-[10%]">
          {items.map((value: any, index: number) => (
            <div
              key={index}
              className={`rounded-[4px] w-1  my-[3px] mx-auto ${
                active === index
                  ? "h-8 bg-white"
                  : "h-2 bg-[rgba(255,_255,_255,_0.4)]"
              }`}
            ></div>
          ))}
          <div className="my-4 ">
            <FontAwesomeIcon
              icon={faArrowUp}
              className={`rounded-full border px-[10px] py-[8px] text-white`}
              onClick={() => handlePrevSlide()}
            />
          </div>
          <div>
            <FontAwesomeIcon
              icon={faArrowDown}
              className={`rounded-full border px-[10px] py-[8px] text-white`}
              onClick={() => handleNextSlide()}
            />
          </div>
        </div>
      </div>

      {/* Desktop */}
      <div
        style={{
          background:
            "linear-gradient(180deg, rgba(255, 255, 255, 0.10) 0%, rgba(153, 153, 153, 0.00) 111.37%)",
        }}
        className="hidden lg:block px-15 pt-12 pb-15 rounded-2xl container"
      >
        <div
          className={clsx(
            "relative mb-[72px] ",
            "flex items-center justify-center",
            "container rotate-0 origin-[10%_5%] translate-y-0"
          )}
        >
          <Circle
            className="bg-[#4EF0BA]"
            content={lang.efex}
            textColor="text-[#4EF0BA]"
          />
          <div className="w-1/2 h-1 lg:h-2 bg-[linear-gradient(89deg,#4EF0BA_0%,_#FE313B_100.62%)]" />
          <Circle
            className="bg-[#FE313B]"
            content={lang.otherCompanies}
            textColor="text-[#FE313B]"
          />

          <p className="absolute top-16 left-[50%] translate-x-[-50%] text-2xl font-bold text-white hidden lg:block">
            VS
          </p>
        </div>

        <div className="grid gap-2">
          {lang.content.map((item: any, index: number) => {
            return (
              <div key={index} className="flex items-center">
                <div
                  style={{
                    background: "rgba(78, 240, 186, 0.10)",
                  }}
                  className="w-[35%] flex gap-4 py-6 px-7 rounded-2xl items-center h-[100px]"
                >
                  <Image
                    src="https://strapi-efex.ichiba.net/uploads/Group_de4fdc3985.svg"
                    alt="efex"
                    width={24}
                    height={24}
                  />
                  <p className="text-base font-medium text-white">
                    {item.efex}
                  </p>
                </div>
                <div className="w-[30%]">
                  <div className="bg-[linear-gradient(89deg,_#959DB9_0%,_#AF0000_100.62%)] w-14 py-2 rounded-[50px] mx-auto mb-2">
                    <Image
                      src={item.icon}
                      alt="efex"
                      width={24}
                      height={24}
                      className="mx-auto"
                    />
                  </div>
                  <p className="text-base font-bold text-center text-white">
                    {item.special}
                  </p>
                </div>
                <div
                  style={{
                    background: "rgba(188, 80, 101, 0.13)",
                  }}
                  className="w-[35%] flex gap-4 py-6 px-7 rounded-2xl items-center h-[100px]"
                >
                  <Image
                    src="https://strapi-efex.ichiba.net/uploads/Group_2_fa2d77585a.svg"
                    alt="efex"
                    width={24}
                    height={24}
                  />
                  <p className="text-base font-medium text-white">
                    {item.other}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default WhatMakesEFEX;
