"use client";
import clsx from "clsx";
import "react-phone-input-2/lib/style.css";
import "react-toastify/dist/ReactToastify.css";
import { Cta } from "../commons/Cta";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Link from "next/link";
import PhoneInput from "react-phone-input-2";
import { useEffect, useRef, useState } from "react";
import Select from "react-select";

const OnlyFor = ({ lang }: any) => {
  return (
    <div className="bg-[url('https://strapi-efex.ichiba.net/uploads/Background_dacc06efc4.svg')] bg-[#E4E9F4] bg-cover bg-center bg-no-repeat mb-16 lg:mb-20">
      <div className="container relative flex flex-col lg:flex-row gap-6 lg:gap-14 px-4 lg:px-0 py-6 lg:py-12">
        <div className="lg:w-[40%]">
          <h2 className="text-2xl lg:text-4xl font-bold lg:leading-12 mb-4 lg:mb-6">
            {lang.heading[0]}
            <span className="text-brand-primary-active">{lang.heading[1]}</span>
            {lang.heading[2]}
          </h2>
          <div className="flex items-center justify-between">
            <Link
              href={``}
              className="block w-max rounded-[8px] text-sm lg:text-base bg-contact text-white py-2 px-3 lg:px-3 hover:bg-[#A30505]"
            >
              {lang?.textBtn}
              <FontAwesomeIcon
                icon={faArrowRight}
                className="ml-2"
                width={24}
                height={24}
              />
            </Link>

            <Image
              src={
                "https://strapi-efex.ichiba.net/uploads/Group_21_633e81a61f.svg"
              }
              width={51}
              height={24}
              alt="EFEX"
              className="w-[50px] h-6 lg:w-[75px] lg:h-9"
            />
          </div>
        </div>
        <div className="lg:w-[60%]">
          <div className="grid grid-cols-3 gap-2 lg:gap-6">
            {lang.items.map((item: any, index: number) => (
              <div key={index} className="relative">
                <Image
                  src={item.image}
                  width={114}
                  height={154}
                  alt="EFEX"
                  className="rounded w-full h-full"
                />

                <div
                  className={clsx(
                    "absolute w-[90%] lg:w-[80%] bottom-3 lg:bottom-4 left-[50%] translate-x-[-50%]",
                    "bg-[rgba(255,_255,_255,_0.40)] rounded py-1 px-4 lg:rounded-lg lg:py-2 lg:px-6",
                    "text-xs lg:text-base font-bold text-center"
                  )}
                >
                  {item.country}
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-3 lg:mt-8">
            <p className="text-base lg:text-2xl font-bold mb-[2px]">
              {lang.title[0]}
              <span className="text-brand-primary">{lang.title[1]}</span>
            </p>
            <p className="text-sm lg:text-lg mb-[100px] xl:mb-0">
              {lang.subTitle}
            </p>
          </div>
        </div>

        <Image
          src={"https://strapi-efex.ichiba.net/uploads/Image_1_4b2b6c5b36.svg"}
          width={306}
          height={320}
          alt="EFEX"
          className="absolute left-4 lg:left-0 -bottom-16 lg:-bottom-20 w-[160px] h-[168px] lg:w-[306px] lg:h-[320px]"
        />
      </div>
    </div>
  );
};

export default OnlyFor;
