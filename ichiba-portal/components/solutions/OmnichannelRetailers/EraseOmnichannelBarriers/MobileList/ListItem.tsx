import SvgIcon from "@/components/common/SvgIcon";
import AspectRatio from "@/components/core/aspect-ratio";
import Collapse from "@/components/core/collapse";
import ListItems from "@/components/product/pim/features/list-items";
import clsx from "clsx";
import Image from "next/image";
import React, { useState } from "react";

interface ListItemProps {
  item: {
    title: string;
    contents: string[];
    image: string;
  };
  defaultExpanded?: boolean;
  index: number;
}

const ListItem = ({ item, defaultExpanded, index }: ListItemProps) => {
  const [expanded, setExpanded] = useState(defaultExpanded || false);

  const toogleExpand = () => setExpanded((prevState) => !prevState);

  return (
    <div
      className={clsx("tw-flex tw-flex-col tw-px-4", {
        "tw-bg-ic-ink-1": expanded,
      })}
    >
      <button
        onClick={toogleExpand}
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
          <Image
            src={item.image}
            alt=""
            sizes="100%"
            width={0}
            height={0}
            className="tw-w-full tw-h-auto"
          />
          <ListItems items={item.contents} />
        </div>
      </Collapse>
    </div>
  );
};

export default ListItem;
