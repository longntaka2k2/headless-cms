"use client";
import { removeAccent } from "@/utils/ultils";
import Image from "next/image";
import React from "react";

const WarehouseFulfillment = ({ lang }: any) => {
  const data = [
    {
      title: "11460-11462 Pagemill Rd, Dallas, TX 75243 Texas",
      img: "https://strapi-efex.ichiba.net/uploads/image_c491b52dcf.svg",
    },
    {
      title: "10832 Capital Ave Unit 5A, Garden Grove, CA 92843 California",
      img: "https://strapi-efex.ichiba.net/uploads/image_2_e72ed5cd6d.svg",
    },
    {
      title: "5839 W Montrose Ave, Chicago, IL, 60634 Illinois",
      img: "https://strapi-efex.ichiba.net/uploads/image_1_c3a0189a91.svg",
    },
  ];
  return (
    <div id={removeAccent(lang?.label)} className="px-4 py-10 lg:py-20">
      <div className="container grid lg:grid-cols-2 gap-6 lg:gap-[50px]">
        <div className="lg:relavite">
          <div className="lg:sticky top-[200px]">
            <p className="text-base lg:text-lg mb-2 lg:mb-5">{lang?.label}</p>
            <h3 className="text-xl lg:text-3xl font-semibold">
              <span className="text-brand-primary">#2</span> {lang?.title}
            </h3>
            <div className="w-full h-[1px] bg-[linear-gradient(269deg,_#959DB9_0%,_#AF0000_102.05%)] my-4"></div>
            <div className="grid gap-4">
              {lang?.items.map((value: any, index: number) => (
                <div key={index} className="flex items-center gap-3">
                  <Image
                    src={
                      "https://strapi-efex.ichiba.net/uploads/Checkbox_ba7579b941.svg"
                    }
                    alt="icon-check"
                    width={40}
                    height={40}
                    className="w-7 h-7"
                  />
                  <span className="text-sm lg:text-base">{value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="grid gap-4">
          {data?.map((value: any, index: number) => (
            <div
              key={index}
              className="bg-white rounded-xl lg:overflow-hidden lg:sticky top-[95px] shadow-[0px_8px_16px_0px_rgba(0,_0,_0,_0.05)]"
            >
              <Image
                src={value.img}
                alt={value.title}
                width={532}
                height={285}
                className="w-full"
              />
              <div className="p-4 text-sm font-medium">
                {value.title}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default WarehouseFulfillment;
