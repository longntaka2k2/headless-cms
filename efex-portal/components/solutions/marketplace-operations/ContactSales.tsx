"use client";
import React from "react";
import Image from "next/image";
import clsx from "clsx";
import Link from "next/link";

const FourStep = ({ lang, locale }: { lang: any; locale: string }) => {
  return (
    <div className="py-10 lg:py-20 px-4">
      <div
        className={clsx(
          "relative bg-[url('https://strapi-efex.ichiba.net/uploads/image_11_3676fee50f.svg')]",
          "lg:bg-[url('https://strapi-efex.ichiba.net/uploads/image_10_0da2f32c6d.svg')]",
          "container overflow-hidden rounded-2xl bg-no-repeat bg-cover",
          "flex lg:gap-10 justify-between lg:pl-[175px] lg:pr-[114px]"
        )}
      >
        <Image
          src={
            "https://strapi-efex.ichiba.net/uploads/image_889_1_eb66da0edf.png"
          }
          width={401}
          height={554}
          className="hidden lg:block w-[266px] h-[372px] mt-auto"
          alt="#"
        />
        <Image
          src={
            "https://strapi-efex.ichiba.net/uploads/image_889_1_eb66da0edf.png"
          }
          width={401}
          height={554}
          className={clsx(
            "lg:hidden w-[144px] h-[202px] mt-auto",
            "absolute bottom-0 left-0"
          )}
          alt="#"
        />
        <div
          className={clsx(
            "w-[80%] lg:w-full ml-auto",
            "flex flex-col gap-2 lg:gap-6 text-white pt-9 pr-5 pb-[100px] lg:pb-0 lg:pt-[45px] text-right lg:text-left"
          )}
        >
          <p className="text-xs lg:text-base">{lang?.label}</p>
          <h2 className="text-base lg:text-4xl font-bold leading-[26px]">
            {lang?.heading[0]}
            <span className="text-[#E0B171]">{lang?.heading[1]}</span>
            <br />
            <span className="text-[#E0B171]">{lang?.heading[2]}</span>
            {lang?.heading[3]}
          </h2>
          <Link
            href={`/${locale}/contact-sales`}
            target="_blank"
            className={clsx(
              "border-[#AF0000] text-sm lg:text-base bg-[#AF0000] text-[#fff] text-center",
              "rounded-lg py-[10px] ml-auto lg:ml-0 lg:py-3 px-3 lg:px-10 w-max hover:bg-[#A30505]"
            )}
          >
            {lang?.textBtn}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FourStep;
