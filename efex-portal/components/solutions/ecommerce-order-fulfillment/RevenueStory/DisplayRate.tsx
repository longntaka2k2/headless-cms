"use client";

import decreaseArrow from "@/public/images/icons/solutions/decreaseArrow.svg";
import decreaseChart from "@/public/images/icons/solutions/decreaseChart.svg";
import increaseArrow from "@/public/images/icons/solutions/increaseArrow.svg";
import increaseChart from "@/public/images/icons/solutions/increaseChart.svg";
import clsx from "clsx";
import Image from "next/image";
import CountUp from "react-countup";

export const DisplayRate = ({ lang }: { lang: any }) => {
  return (
    <div className="mt-6 flex justify-between gap-[14px] lg:gap-[21px] lg:w-[483px]">
      <div className="flex-1">
        <div
          className={clsx(
            "rounded-xl h-[196px] bg-[linear-gradient(to_bottom,#C4C4C4,#C4C4C400)] p-[1px]",
            "lg:w-[231px]"
          )}
        >
          <div
            className={clsx(
              "px-3 pt-4 pb-2 flex flex-col item-center rounded-xl w-full h-full bg-white",
              "lg:px-7 lg:py-6"
            )}
          >
            <div className="flex justify-center items-center">
              <Image
                src={decreaseChart}
                alt="increaseChart"
                width={80}
                height={80}
                className="w-[60px] h-[60px] lg:w-20 lg:h-20"
                quality={100}
              />
            </div>
            <div className="mt-4 flex justify-center items-center gap-2 lg:mt-5">
              <Image
                src={decreaseArrow}
                alt="increaseArrow"
                width={27}
                height={14.5}
                className="w-5 h-5 g:w-[27px] lg:h-[14.5px]"
              />
              <CountUp
                className="font-bold text-xl text-brand-secondary lg:text-3xl lg:leading-[38px]"
                start={100}
                end={69}
                duration={2}
                suffix="%"
              />
            </div>
            <p className="mt-[2px] font-medium text-sm text-center lg:text-xl lg:leading-7">
              {lang.customerSupport}
            </p>
          </div>
        </div>
      </div>
      <div className="flex-1">
        <div
          className={clsx(
            "rounded-xl mt-6 h-[184px] bg-[linear-gradient(to_bottom,#C4C4C4,#C4C4C400)] p-[1px]",
            "lg:w-[231px] lg:h-[254px]"
          )}
        >
          <div
            className={clsx(
              "px-3 pt-4 pb-2 flex flex-col item-center rounded-xl w-full h-full bg-white",
              "lg:px-7 lg:py-6"
            )}
          >
            <div className="flex justify-center items-center">
              <Image
                src={increaseChart}
                alt="increaseChart"
                width={80}
                height={80}
                className="w-[60px] h-[60px] lg:w-20 lg:h-20"
                quality={100}
              />
            </div>
            <div className="mt-4 flex justify-center items-center gap-2 lg:mt-5">
              <Image
                src={increaseArrow}
                alt="increaseArrow"
                width={27}
                height={14.5}
                className="w-5 h-5 lg:w-[27px] lg:h-[14.5px]"
                quality={100}
              />
              <CountUp
                className="font-bold text-xl text-brand-secondary lg:text-3xl lg:leading-[38px]"
                start={0}
                end={30}
                duration={2}
                suffix="%"
              />
            </div>
            <p className="mt-[2px] w-32 mx-auto font-medium text-sm text-center lg:text-xl lg:leading-7">
              {lang.conversionRates}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
