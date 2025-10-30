"use client";
import before from "@/public/images/home/cutCost/after.webp";
import after from "@/public/images/home/cutCost/before.webp";
import button from "@/public/images/home/cutCost/button.svg";
import background from "@/public/images/home/cutCost/background.svg";
import React, { useRef } from "react";
import { useCallback, useEffect, useState } from "react";
import {
  ReactCompareSlider,
  ReactCompareSliderHandle,
  ReactCompareSliderImage,
} from "react-compare-slider";
import { usePathname } from "next/navigation";
import clsx from "clsx";

export const CustomHandle = ({ lang, style, ...props }: any) => {
  const [prortrait, setPortrait] = useState(0);
  const [posi, setPosi] = useState(90);
  const locale = usePathname().split("/")[1];

  const handlePositionChange = useCallback(
    (position: any) => setPortrait(Number(position)),
    []
  );
  const WithoutEfex = useCallback((position: any) => setPosi(10), []);
  const WithEfex = useCallback((position: any) => setPosi(90), []);

  return (
    <div>
      <div className="text-sm lg:text-lg mt-5 w-max flex mx-auto justify-around mb-[30px] rounded-full bg-[rgba(242,_244,_248,_0.70);] p-1 font-bold">
        <div
          className={`${
            prortrait < 49 ? "bg-linear text-white" : "text-[#162544]"
          } rounded-full py-[10px] px-[20px] lg:px-[32px] cursor-pointer `}
          onClick={WithoutEfex}
        >
          {lang?.homePage?.cutCost?.without}
        </div>
        <div
          className={`${
            prortrait > 51 ? "bg-linear text-white" : "text-[#162544]"
          } rounded-full py-[10px] px-[20px] lg:px-[32px] cursor-pointer`}
          onClick={WithEfex}
        >
          {lang?.homePage?.cutCost?.withEfex}
        </div>
      </div>
      <ReactCompareSlider
        {...props}
        handle={
          <ReactCompareSliderHandle
            buttonStyle={{
              backdropFilter: undefined,
              backgroundImage: `url(${button.src})`,
              backgroundSize: "cover",
              border: 0,
              color: "rgb(51 51 51 / 0%)",
            }}
          />
        }
        itemOne={
          <div className="!bg-white h-full w-full py-[10px] lg:py-[47px]">
            <div className="text-center font-bold mb-6 lg:text-lg text-sm">
              {lang?.homePage?.cutCost?.allInOne}
            </div>
            <ReactCompareSliderImage
              src={
                locale === "en"
                  ? before.src
                  : ("https://strapi-efex.ichiba.net/uploads/Comp_2_1_2_3e80a70951.png" as any)
              }
              className="max-w-[732px] object-contain max-h-[465px] lg:!w-auto !h-[179px]  lg:!h-full  mx-auto "
              alt="one"
            />
          </div>
        }
        itemTwo={
          <div className="h-full w-full bg-[#D6DAE4] py-[10px] pr-[10px] lg:py-[47px]">
            <div className="text-center font-bold mb-6 lg:text-lg text-sm">
              {lang?.homePage?.cutCost?.compli}
            </div>
            <ReactCompareSliderImage
              src={
                locale === "en"
                  ? after.src
                  : ("https://strapi-efex.ichiba.net/uploads/Comp_2_1_3_f61b7782c3.png" as any)
              }
              style={{}}
              className="!w-auto mx-auto object-contain max-w-[667px] max-h-[484px] !h-[179px] lg:!h-full  "
              alt="two"
            />
          </div>
        }
        onPositionChange={handlePositionChange}
        position={posi}
        style={{
          maxWidth: "1044px",
          display: "flex",
          width: "100%",
          ...style,
        }}
      />
    </div>
  );
};
const CutCost = ({ lang }: { lang: any }) => {
  const [isVisible, setVisible] = React.useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 1 / 3 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        observer.unobserve(elementRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={elementRef}
      className={clsx(
        " transition-all duration-200 delay-100",
        isVisible ? "opacity-100" : "opacity-0 "
      )}
    >
      <div
        className=" lg:py-[80px] py-[24px] bg-cover"
        style={{ backgroundImage: `url(${background.src})` }}
      >
        <div
          className={clsx(
            "container px-4 lg:px-0",
            "transition-all duration-200 delay-200",
            isVisible ? "translate-y-0 opacity-100" : "translate-y-7 opacity-0"
          )}
        >
          <h2
            className={clsx(
              "text-center text-white text-2xl lg:text-4xl font-bold w-[300px] lg:w-full mx-auto"
            )}
          >
            {lang?.homePage?.cutCost?.title}
          </h2>
          <CustomHandle className="lg:mx-auto rounded-xl" lang={lang} />
        </div>
      </div>
    </div>
  );
};

export default CutCost;
