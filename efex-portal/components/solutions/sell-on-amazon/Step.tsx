"use client";
import React from "react";
import Image from "next/image";
import clsx from "clsx";

const Step = ({ lang, locale }: { lang: any; locale: string }) => {
  return (
    <div className={clsx("py-6 lg:pt-[120px] lg:pb-20 px-4")}>
      <div className="relative container">
        <h2
          className={clsx(
            "lg:absolute lg:-top-20 lg:right-0 lg:w-[568px] text-center",
            "text-xl lg:text-4xl leading-7 lg:leading-[48px] mb-2 lg:mb-10 text-center"
          )}
        >
          {lang?.heading[0]}
          <span className="text-brand-primary">{lang?.heading[1]}</span>
          {lang?.heading[2]}
        </h2>
        <p className="text-sm lg:text-base mb-8 text-center lg:hidden">
          {lang?.subHeading}
        </p>
        <Image
          src={
            locale === "en"
              ? "https://strapi-efex.ichiba.net/uploads/Process_1_2178980de3.svg"
              : "https://strapi-efex.ichiba.net/uploads/Process_f4ef412380.svg"
          }
          width={1039}
          height={811}
          className="mx-auto"
          alt="image"
        />
      </div>
    </div>
  );
};

export default Step;
