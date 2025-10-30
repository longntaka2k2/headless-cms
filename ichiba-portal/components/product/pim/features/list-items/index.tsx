import clsx from "clsx";
import Image from "next/image";
import React from "react";

type ListItemsProps = {
  items: Array<{ content: string } | string>;
  classes?: {
    item?: string;
  };
} & JSX.IntrinsicElements["ul"];

const ListItems: React.FC<ListItemsProps> = ({ items, className, classes }) => {
  return (
    <div className={clsx("tw-flex tw-flex-col tw-gap-4", className)}>
      {items.map((item, index) => (
        <div
          className={clsx("tw-flex tw-gap-4 tw-items-start", classes?.item)}
          key={index}
        >
          <Image width={24} height={24} src="/svgs/check.svg" alt="object" />
          <span className="tw-flex-1 tw-text-sm lg:tw-text-base">
            {typeof item === "object" ? item.content : item}
          </span>
        </div>
      ))}
    </div>
  );
};

export default ListItems;
