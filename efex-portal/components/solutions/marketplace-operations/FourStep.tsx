"use client";
import React from "react";
import Image from "next/image";
import clsx from "clsx";
import EzImage from "@/components/commons/EzImage";

const Arrow = ({ reflect }: { reflect: boolean }) => (
  <EzImage
    src={"/uploads/Vector_21_4ac4c82e28.svg"}
    className={clsx(
      "hidden lg:block my-auto flex-1",
      reflect && "-scale-y-100"
    )}
    width={65}
    height={12}
    alt=""
  />
);

const FourStep = ({ lang }: { lang: any }) => {
  const images = [
    "/uploads/image_2_ad65d7feb1.svg",
    "/uploads/image_3_a530fa3f8f.svg",
    "/uploads/image_4_b46e374a08.svg",
    "/uploads/image_5_490de439a4.svg",
  ];
  return (
    <div
      className={clsx(
        "bg-[linear-gradient(180deg,_rgba(212,_222,_248,_0.40)_0%,_rgba(255,_231,_230,_0.24)_100%)]",
        "overflow-hidden py-6 lg:py-20 px-4"
      )}
    >
      <div className="container">
        <h2 className="text-lg lg:text-4xl leading-[26px] text-center mb-2">
          {lang?.heading}
        </h2>
        <p className="text-sm lg:text-base text-center mb-6 lg:mb-10">
          {lang?.subHeading}
        </p>

        <div className="flex flex-col lg:flex-row gap-2 lg:gap-0">
          {images.map((x, idx) => (
            <div
              key={idx}
              className={clsx(
                "relative",
                "flex flex-row-reverse flex-1",
                "lg:grid lg:grid-cols-5",
                "gap-x-4 gap-y-0 lg:gap-x-0 lg:gap-y-4",
                "lg:border-b pb-2 lg:pb-0",
                "after:absolute after:content-['•']",
                "after:text-brand-primary after:text-2xl after:-bottom-1.5 after:lg:-bottom-3.5 after:-left-1.5",
                "h-full"
              )}
            >
              <EzImage
                src={images[idx]}
                className="col-span-4 w-[158px] h-[132px] lg:w-[240px] lg:h-[200px] flex-1"
                alt=""
                width={240}
                height={200}
              />
              {images.length != idx + 1 && <Arrow reflect={idx % 2 != 0} />}
              <div
                className={clsx(
                  "flex-1 lg:col-span-4 pl-3",
                  "border-l-dotted border-l-brand-primary border-l-2",
                  "flex flex-col h-full",
                  "lg:min-h-[225px]" // Đảm bảo chiều cao tối thiểu cho border
                )}
              >
                <div className="text-brand-primary font-bold text-sm lg:text-base mb-1">{`${
                  lang.step
                } ${idx + 1}:`}</div>
                <h3 className="lg:text-xl text-base font-bold mb-2">
                  {lang.items[idx].title}
                </h3>
                <p className="text-sm pb-6 lg:pb-5 break-words flex-grow">
                  {lang.items[idx].subTitle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FourStep;
