"use client";
import boost from "@/public/images/services/siv/countless/boost.svg";
import boostActive from "@/public/images/services/siv/countless/boostActive.svg";
import boostImg from "@/public/images/services/siv/countless/boostImg.webp";
import grow from "@/public/images/services/siv/countless/grow.svg";
import growActive from "@/public/images/services/siv/countless/growActive.svg";
import growImg from "@/public/images/services/siv/countless/growImg.webp";
import market from "@/public/images/services/siv/countless/market.svg";
import marketActive from "@/public/images/services/siv/countless/marketActive.svg";
import marketImg from "@/public/images/services/siv/countless/marketImg.webp";
import optimize from "@/public/images/services/siv/countless/optimize.svg";
import optimizeActive from "@/public/images/services/siv/countless/optimizeActive.svg";
import optimizeImg from "@/public/images/services/siv/countless/optimizeImg.webp";
import clsx from "clsx";
import Image from "next/image";
import { useState } from "react";

interface Item {
  title: string;
  label: string;
  content: string;
  icon: any;
  iconActive: any;
  img: any;
  free?: boolean;
}
const CountLess = ({ lang }: { lang: any }) => {
  const item = [
    {
      title: lang.items[0].title,
      label: lang.items[0].label,
      content: lang.items[0].content,
      icon: market,
      iconActive: marketActive,
      img: marketImg,
      free: false,
    },
    {
      title: lang.items[1].title,
      label: lang.items[1].label,
      content: lang.items[1].content,
      icon: boost,
      iconActive: boostActive,
      img: boostImg,
      free: false,
    },
    {
      title: lang.items[2].title,
      label: lang.items[2].label,
      content: lang.items[2].content,
      icon: optimize,
      iconActive: optimizeActive,
      img: optimizeImg,
      free: false,
    },
    {
      title: lang.items[3].title,
      label: lang.items[3].label,
      content: lang.items[3].content,
      icon: grow,
      iconActive: growActive,
      img: growImg,
      free: true,
    },
  ];
  const [itemDetail, setItem] = useState(item[0] as Item);

  return (
    <div className="text-[#333] px-4 pt-4 lg:pt-0 lg:pb-[80px] pb-10 bg-[linear-gradient(0deg,_#E9EFF5_9.28%,_rgba(233,_239,_245,_0.00)_84.82%);]">
      <div className="font-bold text-2xl lg:text-4xl text-center mb-5 lg:mb-[60px] lg:w-1/2 mx-auto">
        <div>{lang.heading}</div>
      </div>
      <div className="lg:container">
        <div className="lg:flex justify-between ">
          <div
            className={clsx(
              "hidden lg:flex",
              "shadow-[0px_17px_30px_0px_rgba(0,_0,_0,_0.07)]",
              "items-center bg-white lg:max-h-[360px] lg:max-w-[768px] lg:rounded-[20px] lg:overflow-hidden "
            )}
          >
            <Image
              src={itemDetail.img}
              alt={itemDetail.title}
              className="h-[360px] object-cover w-full"
            />
            <div className="px-3 pt-3 pb-5 bg-white lg:px-5">
              <div className="font-bold lg:text-2xl ">
                <span>{itemDetail.title}</span>
                {itemDetail.free && (
                  <span className="ml-1 rounded px-2 py-1 text-sm font-bold bg-[#E6F3FF] text-[#0F62FE]">
                    {lang.free}
                  </span>
                )}
              </div>
              <div className="mt-6">{itemDetail.content}</div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-2 lg:gap-4 lg:max-h-[312px] lg:ml-10">
            {item.map((value: any, index: number) => (
              <div
                key={index}
                className={clsx(
                  "relative hover:border-[2px] border-solid ",
                  ` py-3 text-center border border-[#D6E4FF] bg-white rounded-xl lg:h-full lg:max-h-[148px] lg:px-4 lg:pt-7 `,
                  value.label === itemDetail.label &&
                    "border-[1.5px] border-solid border-transparent bg-clip-padding " +
                      "after:absolute after:rounded-xl after:bg-[linear-gradient(89deg,_#00194F_0%,_#AF0000_84.37%)] after:z-[-1] " +
                      "after:top-[-1.5px] after:bottom-[-2.5px] after:left-[-2.5px] after:right-[-1.5px] " +
                      "lg:after:top-[-2px] lg:after:bottom-[-2px] lg:after:left-[-2px] lg:after:right-[-2px] "
                )}
                onClick={() => setItem(value)}
              >
                <Image
                  src={
                    value.label === itemDetail.label
                      ? value.iconActive
                      : value.icon
                  }
                  alt={value.title}
                  className="mx-auto lg:mb-2"
                />
                <div
                  className={`py-2 text-sm font-bold  ${
                    value.label !== itemDetail.label
                      ? "text-brand-primary "
                      : "text-brand-secondary"
                  }`}
                >
                  <div className="py-auto ">{value.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="lg:hidden  bg-[0px_17px_30px_0px_rgba(0,_0,_0,_0.07)] mt-4 rounded-xl overflow-hidden">
          <Image
            src={itemDetail.img}
            alt={itemDetail.title}
            className="h-[220px] object-cover w-full"
          />
          <div className="px-3 pt-3 pb-5 bg-white">
            <div className="font-bold text-lg">{itemDetail.title}</div>
            <div className="lg:text-lg text-[14px] mt-2">
              {itemDetail.content}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CountLess;
