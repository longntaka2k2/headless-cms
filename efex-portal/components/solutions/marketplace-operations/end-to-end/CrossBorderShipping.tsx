"use client";
import { removeAccent } from "@/utils/ultils";
import Image from "next/image";
import React from "react";

const ManagementSoftware = ({ lang }: any) => {
  return (
    <div
      id={removeAccent(lang?.label)}
      className="px-4 py-6 lg:py-15 bg-[linear-gradient(274deg,_#FFF5EA_26.95%,_#E9EEFF_90%)]"
    >
      <div className="container">
        <p className="text-base lg:text-lg mb-2 lg:mb-5 text-center">
          {lang?.label}
        </p>
        <h3 className="text-xl lg:text-3xl font-semibold text-center mb-6 lg:mb-[70px]">
          <span className="text-brand-primary">#3</span> {lang?.title}
        </h3>

        <div className="flex flex-col gap-6 lg:gap-11">
          <div className="grid lg:grid-cols-2 lg:items-center gap-6 lg:gap-[50px]">
            <Image
              src={lang?.items[0].image}
              alt="#"
              width={615}
              height={370}
              className="w-full"
            />
            <div className="lg:pl-[50px]">
              <h3 className="text-base lg:text-2xl font-bold mb-6">
                {lang?.items[0].title}
              </h3>
              <div className="flex flex-col gap-4">
                {lang?.items[0]?.content.map((value: any, index: number) => (
                  <div
                    key={index}
                    className="flex items-center gap-[6px] lg:gap-3"
                  >
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
          <div className="flex flex-col lg:flex-row-reverse lg:items-center gap-6 lg:gap-2">
            <Image
              src={lang?.items[1].image}
              alt="#"
              width={615}
              height={370}
              className="w-full lg:w-7/12"
            />
            <div className="">
              <h3 className="text-base lg:text-2xl font-bold mb-6">
                {lang?.items[1].title}
              </h3>
              <div className="flex flex-col gap-4">
                {lang?.items[1]?.content.map((value: any, index: number) => (
                  <div
                    key={index}
                    className="flex items-center gap-[6px] lg:gap-3"
                  >
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
        </div>
      </div>
    </div>
  );
};
export default ManagementSoftware;
