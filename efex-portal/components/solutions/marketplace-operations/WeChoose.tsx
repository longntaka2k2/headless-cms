"use client";
import React from "react";
import Image from "next/image";
import clsx from "clsx";

const WeChoose = ({ lang }: { lang: any }) => {
  return (
    <div className={clsx("overflow-hidden pt-10 lg:pt-20 px-4")}>
      <div className="container">
        <div className="hidden lg:block mb-10">
          <h2 className="text-4xl leading-[26px] text-center mb-2">
            {lang?.heading}
          </h2>
          <p className="text-base text-center">{lang?.subHeading}</p>
        </div>
        <div className="grid lg:grid-cols-3 gap-5 lg:gap-[50px]">
          <div className="lg:col-span-1">
            <Image
              src={
                "https://strapi-efex.ichiba.net/uploads/er6t_1_0f7336bfca.svg"
              }
              alt="#"
              width={432}
              height={576}
              className="w-[208px] h-[277px] lg:w-[432px] lg:h-[576px] lg:mt-auto lg:translate-y-[80px]"
            />
            <div className="lg:hidden mb-5">
              <h2 className="text-lg leading-[26px]">{lang?.heading}</h2>
              <p className="text-sm">{lang?.subHeading}</p>
            </div>
          </div>
          <div className="lg:col-span-2 grid lg:grid-cols-2 gap-4 lg:gap-6 mb-6 lg:mb-20">
            {lang?.items.map((item: any, idx: number) => (
              <div
                key={idx}
                className="p-4 rounded-2xl flex flex-col gap-4 shadow-[0px_8px_16px_0px_rgba(0,_0,_0,_0.05)]"
              >
                <Image
                  src={item.icon}
                  alt="#"
                  width={60}
                  height={60}
                  className=""
                />
                <div>
                  <h3 className="text-base lg:text-lg mb-2">{item.title}</h3>
                  <p className="text-sm lg:text-base">{item.content}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeChoose;
