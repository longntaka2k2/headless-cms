"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Opportunity = ({ lang, locale }: { lang: any; locale: string }) => {
  return (
    <div
      className={clsx(
        "bg-[url('https://strapi-efex.ichiba.net/uploads/Frame_1171279969_879745007d.svg')]",
        "lg:bg-[url('https://strapi-efex.ichiba.net/uploads/image_9fd7d8110a.svg')]",
        "bg-cover bg-no-repeat px-4"
      )}
    >
      <div className="container grid lg:grid-cols-2 items-center gap-8 lg:gap-10 py-8 lg:py-0 px-4">
        <div className="flex flex-col gap-4 lg:gap-5 text-white lg:py-6">
          <p className="text-sm lg:text-base">{lang?.label}</p>
          <h2 className="text-lg lg:text-4xl leading-[26px]">
            <span className="text-[#E0B171]">{lang?.heading[0]}</span>
            {lang?.heading[1]}
          </h2>
          <Link
            href={`/${locale}/contact-sales`}
            target="_blank"
            className="border-[#AF0000] bg-[#AF0000] text-[#fff] text-center w-max rounded-lg px-6 py-3 hover:bg-[#A30505] flex items-center gap-1"
          >
            {lang?.textBtn}
            <FontAwesomeIcon icon={faArrowRight} />
          </Link>
        </div>
        <Image
          src={
            "https://strapi-efex.ichiba.net/uploads/Group_1171276320_f0071ac82b.svg"
          }
          alt="#"
          width={601}
          height={333}
          className="mx-auto hidden lg:block"
        />
        <Image
          src={
            "https://strapi-efex.ichiba.net/uploads/Group_1171276320_18b3140f33.svg"
          }
          alt="#"
          width={357}
          height={289}
          className="mx-auto lg:hidden"
        />
      </div>
    </div>
  );
};

export default Opportunity;
