import SvgIcon from "@/components/common/SvgIcon";
import Collapse from "@/components/core/collapse";
import ListItems from "@/components/product/pim/features/list-items";
import clsx from "clsx";
import Image from "next/image";
import React, { useState } from "react";

type GroupItemsProps = {
  items: { title: string; contents: string[]; image: string }[];
} & JSX.IntrinsicElements["div"];

const GroupItems = ({ items, className }: GroupItemsProps) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const toogleExpand = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <div className={clsx("tw-flex", className)}>
      <div className="tw-flex-1">
        <Image
          alt=""
          width={0}
          height={0}
          sizes="100%"
          className="tw-w-full tw-h-auto"
          src={items[activeIndex]?.image}
        />
      </div>
      <div className="tw-flex tw-flex-col tw-flex-1">
        {items.map((item, index) => {
          const expanded = index === activeIndex;

          return (
            <div
              className={clsx("tw-flex tw-flex-col tw-px-10", {
                "tw-bg-ic-ink-1": expanded,
              })}
              key={index}
            >
              <button
                onClick={() => toogleExpand(index)}
                className="tw-text-left tw-flex tw-items-center tw-gap-2 tw-py-6"
              >
                <span className="tw-flex-1 tw-text-base tw-font-bold">
                  #{index + 1}. {item.title}
                </span>
                <SvgIcon
                  icon="arrow-1"
                  className={clsx(
                    { "tw-rotate-180": expanded },
                    "tw-transition-transform",
                  )}
                />
              </button>
              <Collapse orientation="vertical" in={expanded}>
                <div className="tw-pb-6 tw-flex tw-flex-col tw-gap-4">
                  <ListItems items={item.contents} />
                </div>
              </Collapse>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default GroupItems;
