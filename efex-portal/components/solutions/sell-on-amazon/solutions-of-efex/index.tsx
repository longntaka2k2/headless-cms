"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import { LegacyRef, useRef, useState } from "react";
import { Autoplay } from "swiper/modules";
import Slider, { Settings } from "react-slick";
import { RelativeImagePath } from "@/utils/ultils";
import Account from "./Account";
import StoreSetup from "./StoreSetup";
import Operation from "./Operation";
import Implementation from "./Implementation";
import Registration from "./Registration";

const SolutionsOfEfex = ({ lang, locale }: { lang: any; locale: string }) => {
  return (
    <div className={clsx("py-6 lg:py-20 px-4")}>
      <div className="container">
        <h2 className="text-xl lg:text-4xl leading-7 lg:leading-[48px] text-center mb-2">
          {lang?.heading[0]}
          <span className="text-brand-primary">{lang?.heading[1]}</span>
          {lang?.heading[2]}
        </h2>
        <p className="text-sm lg:text-base mb-6 lg:mb-[110px] text-center">
          {lang?.subHeading[0]}
          <span className="font-bold">{lang?.subHeading[1]}</span>
          {lang?.subHeading[2]}
        </p>
        <div className="flex flex-col gap-6 lg:gap-15">
          <Account lang={lang} />
          <StoreSetup lang={lang} />
          <Operation lang={lang} />
          <div className="grid lg:grid-cols-2 gap-6 lg:gap-10">
            <Implementation lang={lang} />
            <Registration lang={lang} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SolutionsOfEfex;
