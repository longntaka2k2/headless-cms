"use client";
import clsx from "clsx";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import { useState } from "react";

export interface ContentType {
  icon: string | StaticImport;
  description: string;
}

const initActiveItem = 3;

interface ContentItemType {
  icon: string | StaticImport;
  description: string;
  isActive: boolean;
  onHover: () => void;
}

const ContentItem = ({
  icon,
  description,
  isActive,
  onHover,
}: ContentItemType) => {
  return (
    <li
      className={clsx(
        "flex flex-col items-center justify-between flex-[1_1_208px] max-w-[315.5px] rounded-lg px-4 py-6 lg:py-7 lg:px-10 cursor-pointer",
        isActive
          ? "bg-[linear-gradient(106deg,#0A237A_-17.1%,#C02626_121.58%)] shadow-[0px_0px_20px_0px_rgba(0,0,0,0.11)]"
          : "bg-[rgba(144,166,209,0.2)]"
      )}
      onClick={onHover}
    >
      <div className="flex justify-center items-center w-20 h-20 rounded-lg bg-[rgba(255,255,255,0.08)]">
        <Image
          src={icon}
          alt={description}
          width={40}
          height={40}
          className="w-10 h-10"
          quality={100}
        />
      </div>
      <p
        className={clsx(
          "text-sm lg:text-lg leading-6 text-ic-white-6 text-center mt-4 lg:mt-6"
        )}
      >
        {description}
      </p>
    </li>
  );
};

export const ContentList = ({ list }: { list: ContentType[] }) => {
  const [activeItem, setActiveItem] = useState(initActiveItem);
  const [firstList, secondList] = [list.slice(0, 2), list.slice(2)];

  const handleHover = (index: number) => {
    setActiveItem(index);
  };

  return (
    <div className="flex gap-4">
      <ul className="flex flex-col gap-4 items-center">
        {firstList.map((item, index) => {
          const isActive = activeItem === index;

          return (
            <ContentItem
              key={index}
              icon={item.icon}
              description={item.description}
              isActive={isActive}
              onHover={() => handleHover(index)}
            />
          );
        })}
      </ul>
      <ul className="flex flex-col gap-4 items-center translate-y-10 lg:translate-y-[70px]">
        {secondList.map((item, index) => {
          const itemIndex = index + 2;
          const isActive = activeItem === itemIndex;
          return (
            <ContentItem
              key={index}
              icon={item.icon}
              description={item.description}
              isActive={isActive}
              onHover={() => handleHover(itemIndex)}
            />
          );
        })}
      </ul>
    </div>
  );
};
