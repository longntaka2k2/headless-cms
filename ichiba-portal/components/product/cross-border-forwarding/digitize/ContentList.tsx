"use client";
import clsx from "clsx";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import { useState } from "react";

export interface ContentType {
  icon: string | StaticImport;
  title: string;
  subTitle: string;
}

const initActiveItem = 3;

interface ContentItemType {
  icon: string | StaticImport;
  title: string;
  subTitle: string;
}

const ContentItem = ({ icon, title, subTitle }: ContentItemType) => {
  return (
    <div
      className={clsx(
        "tw-flex tw-flex-col tw-flex-[1_1_208px] tw-max-w-[315.5px]",
        "tw-rounded-lg tw-px-3 tw-py-4 lg:tw-py-7 lg:tw-px-8 tw-cursor-pointer",
        "tw-bg-[rgba(144,166,209,0.2)] tw-shadow-[0px_0px_20px_0px_rgba(0,0,0,0.11)]",
        "hover:tw-bg-[linear-gradient(115deg,_rgba(18,_77,_155,_0.90)_13.73%,_rgba(232,_164,_69,_0.90)_107.24%)]",
      )}
    >
      <div
        className={clsx(
          "tw-flex tw-justify-center tw-items-center tw-w-16 tw-h-16 lg:tw-w-20 lg:tw-h-20",
          "tw-rounded-lg tw-bg-[rgba(255,255,255,0.08)]",
        )}
      >
        <Image
          src={icon}
          alt={title}
          width={46}
          height={46}
          className="tw-w-10 tw-h-10 lg:tw-w-[46px] lg:tw-h-[46px]"
          quality={100}
        />
      </div>
      <h3 className="tw-text-base lg:tw-text-xl tw-font-bold tw-text-ic-white-6 tw-mt-4 lg:tw-mt-6 tw-mb-2 lg:tw-mb-3">
        {title}
      </h3>
      <p
        className={clsx(
          "tw-text-sm lg:tw-text-lg tw-leading-6 tw-text-ic-white-6 tw-mb-0",
        )}
      >
        {subTitle}
      </p>
    </div>
  );
};

export const ContentList = ({ list }: { list: ContentType[] }) => {
  const [firstList, secondList] = [list.slice(0, 2), list.slice(2)];

  return (
    <div className="tw-flex tw-gap-4">
      <div className="tw-flex tw-flex-col tw-gap-4 tw-items-center">
        {firstList.map((item, index) => {
          return (
            <ContentItem
              key={index}
              icon={item.icon}
              title={item.title}
              subTitle={item.subTitle}
            />
          );
        })}
      </div>
      <div className="tw-flex tw-flex-col tw-gap-4 tw-items-center tw-translate-y-10 lg:tw-translate-y-[80px]">
        {secondList.map((item, index) => {
          return (
            <ContentItem
              key={index}
              icon={item.icon}
              title={item.title}
              subTitle={item.subTitle}
            />
          );
        })}
      </div>
    </div>
  );
};
