import React from "react";
import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";

const Banner = ({ lang, locale }: { lang: any; locale: string }) => {
  return (
    <div
      className={clsx(
        "bg-[url('https://strapi-efex.ichiba.net/uploads/Group_1171276383_e588ad5141.png')]",
        "lg:bg-[url('https://strapi-efex.ichiba.net/uploads/Group_1171276385_4557acfcae.svg')]",
        "bg-cover bg-bottom lg:bg-right bg-no-repeat px-4"
      )}
    >
      <div
        className={clsx(
          "container pt-3 pb-4 lg:pt-[50px] lg:pb-15",
          "grid lg:grid-cols-2 lg:items-center gap-10 lg:gap-35"
        )}
      >
        <div className="flex flex-col gap-5 lg:gap-10">
          <div className="flex gap-4 lg:gap-6 items-end">
            <Image
              src={
                "https://strapi-efex.ichiba.net/uploads/Frame_427318804_1_f7f422bb29.png"
              }
              width={235}
              height={75}
              className="w-[100px] h-[34px] lg:w-[140px] lg:h-[45px]"
              alt="logo"
            />
            <span className="font-bold text-2xl text-white">X</span>
            <Image
              src={
                "https://strapi-efex.ichiba.net/uploads/Logo_with_name_f4ae71c860.svg"
              }
              width={108}
              height={34}
              className="w-[134px] h-[36px] lg:w-[166px] lg:h-[45px]"
              alt="logo"
            />
          </div>
          <div className="text-white">
            <p className="text-sm lg:text-base font-medium mb-2 lg:mb-6">
              {lang?.label}
            </p>
            <h1 className="text-xl lg:text-4xl uppercase font-bold leading-7 lg:leading-[48px] mb-2 lg:mb-5">
              {lang?.heading[0]}
              <span className="text-[#E0B171]">{lang?.heading[1]}</span>
              <br />
              {lang?.heading[2]}
              <span className="text-[#E0B171]">{lang?.heading[3]}</span>
              <br />
              {lang?.heading[4]}
              <br />
              {lang?.heading[5]}
            </h1>
            <p className="text-sm lg:text-base">{lang?.subHeading}</p>
          </div>
          <Link
            href={`/${locale}/contact-sales`}
            target="_blank"
            className="border-[#AF0000] bg-[#AF0000] text-[#fff] text-center rounded-lg w-[200px] py-4 hover:bg-[#A30505]"
          >
            {lang?.textBtn}
          </Link>
        </div>
        <div>
          <Image
            src={
              "https://strapi-efex.ichiba.net/uploads/Group_1171276384_53adf1a3a8.svg"
            }
            width={478}
            height={466}
            className="mx-auto"
            alt="efex"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
