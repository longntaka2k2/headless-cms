"use client";
import React from "react";
import Image from "next/image";
import clsx from "clsx";
import { useState } from "react";
import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const WhyChoose = ({ lang }: { lang: any }) => {
  const [active, setActive] = useState(0);
  return (
    <div className={clsx("py-6 lg:py-20 px-4")}>
      <div className="container">
        <h2 className="text-xl lg:text-4xl leading-7 lg:leading-[48px] mb-8 lg:mb-10 text-center">
          <span className="text-brand-primary">{lang?.heading[0]}</span>
          {lang?.heading[1]}
        </h2>

        <div className="hidden lg:block">
          <div className="grid grid-cols-10 gap-3 text-center">
            <div
              className={clsx(
                "col-span-4 text-lg font-bold p-4 rounded-t-xl",
                "bg-[rgba(0,_0,_0,_0.10)] border-b border-[rgba(0,_0,_0,_0.10)]"
              )}
            >
              {lang?.title[0]}
            </div>
            <div className="col-span-2"></div>
            <div
              className={clsx(
                "col-span-4 text-lg text-white font-bold p-4 rounded-t-xl",
                "bg-brand-secondary border-b border-[rgba(255,_255,_255,_0.25)]"
              )}
            >
              {lang?.title[1]}
            </div>
          </div>

          {lang?.items.map((item: any, index: number) => (
            <div key={index} className="grid grid-cols-10 gap-3">
              <div
                className={clsx(
                  "col-span-4 py-3 px-6 flex items-center gap-3 bg-[#F8F8F8]",
                  index === lang?.items.length - 1 ? "rounded-b-[20px]" : ""
                )}
              >
                <Image
                  src={
                    "https://strapi-efex.ichiba.net/uploads/Frame_48134b09d4.svg"
                  }
                  width={32}
                  height={32}
                  className="w-6 h-6 lg:w-7 lg:h-7"
                  alt="icon-close"
                />
                <span className="text-base">{item.selfManaged}</span>
              </div>
              <div className="text-center col-span-2 py-3 rounded-t-xl bg-[linear-gradient(180deg,_#F2F2F2_67.19%,_#FFF_100%)]">
                <span className="text-base">{item.label}</span>
              </div>
              <div
                className={clsx(
                  "col-span-4 py-3 px-6 flex items-center gap-3 bg-[#111E73] text-white",
                  index === lang?.items.length - 1 ? "rounded-b-[20px]" : ""
                )}
              >
                <Image
                  src={
                    "https://strapi-efex.ichiba.net/uploads/Frame_1_4202f357c9.svg"
                  }
                  width={32}
                  height={32}
                  className="w-6 h-6 lg:w-7 lg:h-7"
                  alt="icon-close"
                />
                <span className="text-base">{item.eFEXbyFromVietnam}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="lg:hidden flex flex-col">
          {lang?.items.map((value: any, index: number) => (
            <div
              key={index}
              onClick={() => setActive(index)}
              className={index !== 0 ? "mt-[-6px]" : ""}
            >
              <div className={clsx("")}>
                <div className="flex items-center justify-between p-[10px] rounded-t-xl bg-[#153065] border-t border-[#D6E4FF]">
                  <div className="text-sm font-medium text-white mb-1 flex items-center gap-2">
                    <Image
                      src={value.icon}
                      alt={value.title}
                      width={28}
                      height={28}
                      className="w-6 h-6 lg:w-7 lg:h-7"
                    />
                    {value.label}
                  </div>

                  <FontAwesomeIcon
                    icon={active === index ? faAngleUp : faAngleDown}
                    width={16}
                    height={16}
                    className={clsx("transition-all duration-200 text-white")}
                  />
                </div>
                <div
                  className={clsx(
                    "!duration-500",
                    active === index ? "animate-fade-in" : "hidden"
                  )}
                >
                  <div className="">
                    <div className="border border-primary-2 grid grid-cols-7 items-center">
                      <div className="col-span-2 px-[5px] text-sm">
                        {lang?.label[0]}
                      </div>
                      <div className="col-span-5 flex px-3 py-4 gap-1 border-l border-primary-2">
                        <Image
                          src={
                            "https://strapi-efex.ichiba.net/uploads/Frame_48134b09d4.svg"
                          }
                          width={32}
                          height={32}
                          className="w-6 h-6"
                          alt="icon-close"
                        />
                        <span className="text-sm mt-[2px]">
                          {value.selfManaged}
                        </span>
                      </div>
                    </div>
                    <div className="border border-primary-2 grid grid-cols-7 items-center">
                      <div className="col-span-2 px-[5px] text-sm">
                        {lang?.label[1]}
                      </div>
                      <div className="col-span-5 flex px-3 py-4 gap-1 border-l border-primary-2">
                        <Image
                          src={
                            "https://strapi-efex.ichiba.net/uploads/Frame_1_4202f357c9.svg"
                          }
                          width={32}
                          height={32}
                          className="w-6 h-6"
                          alt="icon-close"
                        />
                        <span className="text-sm mt-[2px]">
                          {value.eFEXbyFromVietnam}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyChoose;
