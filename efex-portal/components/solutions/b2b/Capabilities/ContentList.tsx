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

export const MobileContentList = ({ list }: { list: ContentType[] }) => {
  const [activeItem, setActiveItem] = useState(initActiveItem);

  const handleHover = (index: number) => {
    setActiveItem(index);
  };

  return (
    <ul className="flex flex-wrap gap-4">
      {list.map((item, index) => {
        const isActive = activeItem === index;
        return (
          <li
            key={index}
            className={clsx(
              "flex flex-col items-center gap-4 rounded-lg p-4 flex-[1_1_calc((100%-48px)/2)] cursor-pointer",
              isActive
                ? "bg-[linear-gradient(106deg,#0A237A_-17.1%,#C02626_121.58%)] shadow-[0px_0px_20px_0px_rgba(0,0,0,0.11)]"
                : "bg-[rgba(144,166,209,0.2)]"
            )}
            onClick={() => handleHover(index)}
          >
            <div className="flex justify-center items-center w-12 h-12 rounded-lg bg-[rgba(255,255,255,0.08)]">
              <Image src={item.icon} alt={item.description} width={46} height={46} quality={100} />
            </div>
            <p className="text-sm font-medium text-ic-white-6 text-center">
              {item.description}
            </p>
          </li>
        );
      })}
    </ul>
  );
};

interface DesktopContentItemType {
  icon: string | StaticImport;
  description: string;
  isActive: boolean;
  onHover: () => void;
}

const DesktopContentItem = ({
  icon,
  description,
  isActive,
  onHover,
}: DesktopContentItemType) => {
  return (
    <li
      className={clsx(
        "flex flex-col items-center justify-between flex-[1_1_208px] max-w-[315.5px] max-h-[208px] rounded-lg px-7 py-7 cursor-pointer",
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
      <p className="text-lg leading-6 font-medium text-ic-white-6 text-center">
        {description}
      </p>
    </li>
  );
};

export const DesktopContentList = ({ list }: { list: ContentType[] }) => {
  const [activeItem, setActiveItem] = useState(initActiveItem);
  const [firstList, secondList] = [list.slice(0, 2), list.slice(2)];

  const handleHover = (index: number) => {
    setActiveItem(index);
  };

  return (
    <div className="flex gap-4 max-w-[647px] h-[656px]">
      <ul className="flex flex-col gap-4 justify-center items-center">
        {firstList.map((item, index) => {
          const isActive = activeItem === index;

          return (
            <DesktopContentItem
              key={index}
              icon={item.icon}
              description={item.description}
              isActive={isActive}
              onHover={() => handleHover(index)}
            />
          );
        })}
      </ul>
      <ul className="flex flex-col gap-4 justify-between items-center">
        {secondList.map((item, index) => {
          const itemIndex = index + 2;
          const isActive = activeItem === itemIndex;
          return (
            <DesktopContentItem
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
