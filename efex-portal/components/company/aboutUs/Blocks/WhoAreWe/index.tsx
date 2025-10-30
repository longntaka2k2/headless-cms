"use client";
import clsx from "clsx";
import React, { ReactNode } from "react";
import { Element } from "react-scroll";

import iconEmployee from "@/public/images/aboutUs/whoAreWe/employees.svg";
import iconCustomer from "@/public/images/aboutUs/whoAreWe/customers.svg";
import iconOrder from "@/public/images/aboutUs/whoAreWe/orderShipped.svg";
import iconWarehouse from "@/public/images/aboutUs/whoAreWe/warehouseWorldwide.svg";
import { Card } from "./Card";

const WhoAreWe = ({ lang }: any) => {
  return (
    <Element
      name={lang.anchors[0].id}
      className={clsx(
        "flex flex-col lg:flex-row lg:items-center gap-4 justify-between",
        "container px-4 lg:px-0 lg:mx-auto pt-4 pb-6 lg:py-0"
      )}
    >
      <div className="lg:w-[457px]">
        <div className="mb-4 lg:mb-6">
          <h2 className="pb-1 lg:pb-2">{lang.whoAreWe.heading}</h2>
          <p
            className={clsx(
              "bg-gradient-red-1 bg-clip-text ",
              "text-transparent font-lora font-medium leading-6 lg:text-xl lg:leading-[26px]"
            )}
          >
            {lang.whoAreWe.subHeading}
          </p>
        </div>
        <p className="text-sm lg:text-base">{lang.whoAreWe.content}</p>
      </div>
      <div className="grid grid-cols-2 grid-rows-2 gap-2 lg:gap-6 grid-flow-col lg:grid-flow-row">
        <Card
          className="bg-[#FFFDEB]"
          content={lang.whoAreWe.contents[0]}
          end={500}
          icon={iconEmployee}
          prefix=">"
        />
        <Card
          className="bg-[#E5F1F9]"
          content={lang.whoAreWe.contents[1]}
          end={8900}
          icon={iconCustomer}
          prefix=">"
          suffix="+"
        />
        <Card
          className="bg-[#F3FFEF]"
          content={lang.whoAreWe.contents[2]}
          end={100000}
          icon={iconOrder}
          suffix="+"
        />
        <Card
          className="bg-[#FFF5EB]"
          content={lang.whoAreWe.contents[3]}
          end={25}
          icon={iconWarehouse}
          suffix="+"
        />
      </div>
    </Element>
  );
};
export default WhoAreWe;
