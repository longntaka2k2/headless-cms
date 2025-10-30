"use client";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import CountUp from "react-countup";

const WhyChoose = ({ lang, onButtonClick }: any) => {
  const [startCounting, setStartCounting] = useState(false);
  const countRef = useRef<HTMLDivElement | null>(null); // Xác định kiểu cho ref

  const handleScroll = () => {
    if (countRef.current) {
      const rect = countRef.current.getBoundingClientRect();
      if (rect.top < window.innerHeight && !startCounting) {
        setStartCounting(true);
        window.removeEventListener("scroll", handleScroll); // Dừng lắng nghe sau khi đã đếm
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll); // Dọn dẹp listener
    };
  }, [startCounting]);

  return (
    <>
      <div  className="py-6 lg:py-[54px]">
        <div className="container px-4 lg:px-0">
          <div className="text-center mb-6 lg:mb-10">
            <h2 className="container px-4 lg:px-0 text-2xl lg:text-4xl font-bold lg:leading-12">
              {lang.heading}
              <span className="inline-flex items-center">
                <Image
                  src="https://strapi-efex.ichiba.net/uploads/Group_1_8315320315.svg"
                  width={114}
                  height={36}
                  alt="EFEX"
                  className="w-[78px] h-[25px] lg:w-[110px] lg:h-9 ml-2"
                />
              </span>{" "}
              ?
            </h2>
            <p className="text-base lg:text-lg">{lang.subHeading}</p>
          </div>

          <div className="flex flex-col lg:flex-row items-center gap-4 lg:gap-10 mb-4 lg:mb-10">
            <div className="lg:w-[40%]">
              <h3 className="text-lg lg:text-2xl font-bold mb-3 lg:mb-6">
                {lang.optimize.title}
              </h3>
              <div className="grid gap-3">
                {lang.optimize.items.map((item: any, index: number) => (
                  <div key={index} className="flex gap-3 items-center">
                    <Image
                      src={
                        "https://strapi-efex.ichiba.net/uploads/Group_3edbb01e62.svg"
                      }
                      width={28}
                      height={28}
                      alt="icon-check"
                      className="w-6 h-6 lg:w-7 lg:h-7"
                    />
                    <p className="text-sm lg:text-lg">
                      {item.content[0]}
                      <span className="font-bold">{item.content[1]}</span>
                      {item.content[2]}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative lg:w-[60%]">
              <Image
                src={
                  "https://strapi-efex.ichiba.net/uploads/Group_19471_9c02a04397.svg"
                }
                width={672}
                height={406}
                alt="EFEX"
                className=""
              />

              <div className="absolute top-[50%] translate-y-[-50%] right-0 w-[50%] h-full bg-[#00194F] rounded-2xl -z-1"></div>
            </div>
          </div>

          <div ref={countRef} className="bg-primary-1 rounded-xl flex flex-col lg:flex-row items-center gap-6 lg:gap-20 px-4 lg:px-10 py-6 lg:py-0 lg:mb-16">
            <div className="relative px-4 pt-4 lg:px-10 lg:pt-0">
              <Image
                src={
                  "https://strapi-efex.ichiba.net/uploads/Image_2_05ee8a46f6.svg"
                }
                width={470}
                height={343}
                alt="EFEX"
                className="rounded-xl object-cover w-[278px] h-[202px] lg:w-[470px] lg:h-[343px] lg:translate-y-16"
              />
              <div
                className={clsx(
                  "absolute bottom-4 lg:bottom-10 left-0",
                  "w-[70px] lg:w-[120px] p-[6px] rounded-xl border-2 border-white",
                  "bg-[rgba(255,_255,_255,_0.80)] shadow-[0px_4px_16px_0px_rgba(0,_0,_0,_0.08)]"
                )}
              >
                <Image
                  src={lang.saving.percentBox[0].icon}
                  width={40}
                  height={40}
                  alt="icon"
                  className="w-6 h-6 lg:w-10 lg:h-10 mx-auto"
                />
                <div className="flex items-center justify-center gap-2 mt-2 lg:mt-3">
                  <Image
                    src={lang.saving.percentBox[0].vector}
                    width={14}
                    height={10}
                    alt="icon"
                    className="w-3 h-[6px] lg:w-[18px] lg:h-[10px]"
                  />
                  {startCounting && (
                    <CountUp
                      className="font-bold text-xs text-brand-secondary lg:text-lg"
                      start={0}
                      end={lang.saving.percentBox[0].percent}
                      duration={2}
                      suffix="%"
                    />
                  )}
                </div>

                <p className="text-[8px] lg:text-sm text-center">
                  {lang.saving.percentBox[0].label}
                </p>
              </div>
              <div
                className={clsx(
                  "absolute top-0 lg:top-10 right-0",
                  "w-[70px] lg:w-[120px] p-[6px] rounded-xl border-2 border-white",
                  "bg-[rgba(255,_255,_255,_0.80)] shadow-[0px_4px_16px_0px_rgba(0,_0,_0,_0.08)]"
                )}
              >
                <Image
                  src={lang.saving.percentBox[1].icon}
                  width={40}
                  height={40}
                  alt="icon"
                  className="w-6 h-6 lg:w-10 lg:h-10 mx-auto"
                />
                <div className="flex items-center justify-center gap-2 mt-2 lg:mt-3">
                  <Image
                    src={lang.saving.percentBox[1].vector}
                    width={14}
                    height={10}
                    alt="icon"
                    className="w-3 h-[6px] lg:w-[18px] lg:h-[10px]"
                  />

                  {startCounting && (
                    <CountUp
                      className="font-bold text-xs text-green-700 lg:text-lg"
                      start={0}
                      end={lang.saving.percentBox[1].percent}
                      duration={2}
                      suffix="%"
                    />
                  )}
                </div>

                <p className="text-[8px] lg:text-sm text-center">
                  {lang.saving.percentBox[1].label}
                </p>
              </div>
            </div>

            <div className="lg:py-10">
              <h3 className="text-lg lg:text-2xl font-bold mb-3 lg:mb-6">
                {lang.saving.title}
              </h3>
              <div className="grid gap-3">
                {lang.saving.items.map((item: any, index: number) => (
                  <div key={index} className="flex gap-3 items-center">
                    <Image
                      src={
                        "https://strapi-efex.ichiba.net/uploads/Group_3edbb01e62.svg"
                      }
                      width={28}
                      height={28}
                      alt="icon-check"
                      className="w-6 h-6 lg:w-7 lg:h-7"
                    />
                    <p className="text-sm lg:text-lg">
                      {item.content[0]}
                      <span className="font-bold">{item.content[1]}</span>
                      {item.content[2]}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="hidden lg:flex justify-center mt-10">
            <div
              onClick={onButtonClick}
              className="py-2 px-3 lg:py-3 lg:px-5 text-sm rounded-lg bg-brand-primary text-white cursor-pointer"
            >
              {lang.textBtn}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhyChoose;
