import React from "react";
import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";

const Management = ({ lang, locale }: { lang: any; locale: string }) => {
  return (
    <div
      className={clsx(
        "bg-[url('https://strapi-efex.ichiba.net/uploads/Frame_1171279935_1_545ac98843.svg')]",
        "lg:bg-[url('https://strapi-efex.ichiba.net/uploads/Group_1171276386_3739655e1e.svg')]",
        "bg-cover bg-bottom lg:bg-right bg-no-repeat px-4"
      )}
    >
      <div
        className={clsx(
          "container pt-3 pb-4 lg:pt-[50px] lg:pb-15",
          "grid lg:grid-cols-2 lg:items-center gap-10 lg:gap-35"
        )}
      >
        <div className="flex flex-col gap-4 lg:gap-6">
          <div className="flex items-end gap-4">
            <Image
              src="https://strapi-efex.ichiba.net/uploads/unnamed_1_336d024f0a.png"
              alt="EFEX"
              width={1920}
              height={654}
              className="w-[100px] h-[34px] lg:w-[140px] lg:h-[45px]"
            />
            <span className="font-bold text-2xl">X</span>
            <Image
              src={
                "https://strapi-efex.ichiba.net/uploads/Group_e110c47ee3.svg"
              }
              width={166}
              height={45}
              className="w-[134px] h-[36px] lg:w-[166px] lg:h-[45px]"
              alt="logo"
            />
          </div>
          <div className="relative">
            <h1 className="text-xl lg:text-4xl text-brand-secondary uppercase font-bold leading-7 lg:leading-[48px] mb-2 lg:mb-5">
              {lang?.heading[0]}
              <span className="text-brand-primary">{lang?.heading[1]}</span>
            </h1>
            <p className="text-xs lg:text-lg font-medium uppercase text-brand-secondary">
              {lang?.subHeading}
            </p>
            <Image
              src={
                "https://strapi-efex.ichiba.net/uploads/Group_1171276354_ef561658fe.svg"
              }
              width={76}
              height={21}
              className={clsx(
                "w-[22px] h-[9px] lg:w-[76px] lg:h-[21px]",
                "absolute top-[22px] lg:top-10 left-10 lg:left-10"
              )}
              alt="logo"
            />
          </div>
          <div className="grid gap-4 text-brand-secondary">
            {lang?.items.map((item: any, index: number) => (
              <div
                key={index}
                className={clsx(
                  "flex items-start gap-3 p-3 lg:px-6 rounded-xl border border-[#537CD7] lg:max-w-[446px]",
                  "bg-[linear-gradient(270deg,_#EEEFFC_26.38%,_rgba(223,_231,_246,_0.41)_54.93%,_rgba(249,_250,_251,_0.00)_97.01%)]"
                )}
              >
                <Image
                  src={item.icon}
                  width={24}
                  height={24}
                  className=""
                  alt="icon"
                />
                <div className="">
                  <h3 className="text-sm lg:text-lg mb-[3px] font-bold">
                    {item.title}
                  </h3>
                  <p className="text-sm lg:text-base">{item.subTitle}</p>
                </div>
              </div>
            ))}
          </div>
          <Link
            href={`/${locale}/contact-sales`}
            target="_blank"
            className="border-[#AF0000] bg-[#AF0000] text-[#fff] text-center rounded-lg w-[200px] py-4 hover:bg-[#A30505]"
          >
            {lang?.textLink}
          </Link>
        </div>
        <div>
          <Image
            src={
              "https://strapi-efex.ichiba.net/uploads/Group_1171276385_174acc226a.png"
            }
            width={879}
            height={699}
            className="hidden lg:block mx-auto hover:scale-105 transition-all duration-300 cursor-pointer"
            alt="efex"
          />

          <Image
            src={"https://strapi-efex.ichiba.net/uploads/Map_0d98c1005c.svg"}
            width={390}
            height={374}
            className="lg:hidden mx-auto hover:scale-105 transition-all duration-300 cursor-pointer"
            alt="efex"
          />
        </div>
      </div>
    </div>
  );
};

export default Management;
