"use client";
import EzImage from "@/components/commons/EzImage";
import clsx from "clsx";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import React from "react";
import CountUp, { CountUpProps } from "react-countup";

export const Card = ({
  icon, className, content, prefix, suffix, start, end,
}: {
  icon: StaticImport;
  className?: string;
  content: string;
} & CountUpProps) => (
  <div
    className={clsx(
      "flex flex-col lg:flex-row gap-4 lg:gap-5",
      "p-3 lg:px-5 lg:py-4 rounded-2xl lg:max-w-[320px]",
      className
    )}
  >
    <div className="p-2 lg:p-4 rounded-lg shadow-3 bg-white w-fit">
      <EzImage src={icon} alt="" className="w-7 max-w-fit lg:w-11" quality={100} />
    </div>
    <div>
      <CountUp
        end={end}
        prefix={prefix}
        suffix={suffix}
        start={start}
        className="font-bold text-lg lg:text-2xl" />
      <p className="font-medium text-sm lg:text-base">{content}</p>
    </div>
  </div>
);
