"use client";
import React from "react";
import Image from "next/image";
import clsx from "clsx";
import { useState } from "react";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Delivers = ({ lang, locale }: { lang: any; locale: string }) => {
  const [active, setActive] = useState(0);

  return (
    <div
      className={clsx(
        "bg-[url('https://strapi-efex.ichiba.net/uploads/Frame_1171279947_8d2cb8fda5.svg')]",
        "lg:bg-[url('https://strapi-efex.ichiba.net/uploads/FBA_1_7884011473.svg')]",
        "bg-cover bg-no-repeat py-6 lg:pt-20 lg:pb-15 px-4 rounded-lg lg:rounded-none"
      )}
    >
      <div className="container grid gap-6 lg:gap-15 text-white">
        <div className="text-center">
          <h2 className="text-xl lg:text-4xl leading-7 lg:leading-[48px] mb-3">
            {lang?.heading}
          </h2>
          <p className="text-sm lg:text-base">{lang?.subHeading}</p>
        </div>

        <div className="grid lg:grid-cols-2 items-center gap-10 lg:gap-16">
          <div>
            <h3 className="text-base lg:text-2xl mb-2">
              {lang?.warehouse?.label}
            </h3>
            <p className="text-sm lg:text-base mb-6">
              {lang?.warehouse?.subLabel}
            </p>
            <div className="flex flex-col gap-3">
              {lang?.warehouse?.items.map((item: any, index: number) => (
                <div
                  key={index}
                  className={clsx(
                    "bg-[#153065] p-2 lg:px-3 lg:py-4 rounded-xl border flex gap-2 lg:gap-4",
                    index % 2 === 0
                      ? "border-[rgba(23,_58,_180,_0.40)]"
                      : "border-[rgba(212,_227,_255,_0.90)]"
                  )}
                >
                  <Image
                    src={item.icon}
                    width={28}
                    height={28}
                    className="w-6 h-6 lg:w-7 lg:h-7"
                    alt="logo"
                  />
                  <div>
                    <p className="text-sm lg:text-lg font-bold mb-1">
                      {item.title}
                    </p>
                    {item.content.map((value: any, idx: number) => (
                      <p key={idx} className="text-sm lg:text-base">
                        {value}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <Image
              src={
                "https://strapi-efex.ichiba.net/uploads/Isolation_Mode_8eea3b9061.svg"
              }
              width={425}
              height={414}
              className="mx-auto"
              alt="logo"
            />
            <div className="grid grid-cols-3 gap-3">
              {lang?.warehouse?.itemsInfo.map((item: any, index: number) => (
                <div key={index} className="flex gap-2">
                  <div className="max-w-[4px] w-full rounded-lg bg-primary-3 h-full"></div>
                  <div>
                    <p className="text-xl lg:text-xl font-bold">{item.title}</p>
                    <p className="text-sm lg:text-base">{item.subTitle}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div
          className={clsx(
            "px-3 py-4 lg:px-6 lg:py-10 rounded-3xl",
            "bg-[linear-gradient(97deg,_rgba(44,_97,_204,_0.20)_5.46%,_rgba(69,_93,_211,_0.20)_76.8%)]",
            "grid lg:grid-cols-2 items-center gap-4 lg:gap-16"
          )}
        >
          <Image
            src={
              locale === "en"
                ? "https://strapi-efex.ichiba.net/uploads/Illus_cec8539664.svg"
                : "https://strapi-efex.ichiba.net/uploads/Iamge_e9b2c4a499.svg"
            }
            alt="image"
            width={574}
            height={440}
            className="mx-auto"
          />
          <div>
            <h3 className="text-base lg:text-2xl mb-2">
              {lang?.omnichannel?.label}
            </h3>
            <p className="text-sm lg:text-base mb-6">
              {lang?.omnichannel?.subLabel}
            </p>
            <div className="grid gap-6">
              {lang?.omnichannel.items.map((value: any, index: number) => (
                <div key={index} onClick={() => setActive(index)}>
                  <div
                    className={clsx(
                      "py-6 px-5 cursor-pointer rounded-xl bg-[#153065]",
                      active === index ? "border border-[#173AB4]" : ""
                    )}
                  >
                    <div className="flex items-center justify-between">
                      <div className="text-sm lg:text-lg font-bold mb-1 flex items-center gap-2 lg:gap-4">
                        <Image
                          src={value.icon}
                          alt={value.title}
                          width={28}
                          height={28}
                          className="w-6 h-6 lg:w-7 lg:h-7"
                        />
                        {value.title}
                      </div>

                      <FontAwesomeIcon
                        icon={active === index ? faMinus : faPlus}
                        width={16}
                        height={16}
                        className={clsx("transition-all duration-200")}
                      />
                    </div>
                    <div
                      className={clsx(
                        "mt-6 !duration-500 grid gap-4",
                        active === index ? "animate-fade-in" : "hidden"
                      )}
                    >
                      {value.content.map((item: any, index: number) => (
                        <div key={index} className="flex gap-2">
                          <Image
                            src={
                              "https://strapi-efex.ichiba.net/uploads/Groupw_0400a66184.svg"
                            }
                            width={14}
                            height={10}
                            className="w-[14px] h-[10px] mt-2"
                            alt="icon-check"
                          />
                          <span className="text-sm lg:text-base">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Delivers;
