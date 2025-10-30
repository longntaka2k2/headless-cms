"use client";
import clsx from "clsx";
import { useState } from "react";

export const ReasonList = ({
  contents,
}: {
  contents: {
    title: string;
    description: string;
  }[];
}) => {
  const [activeItem, setActiveItem] = useState(0);

  return (
    <ul className="flex flex-col gap-2">
      {contents.map((item, index) => {
        const isActive = activeItem === index;
        return (
          <li
            key={index}
            className={clsx(
              "py-3 px-4 lg:py-6 lg:px-7 cursor-pointer",
              isActive &&
                "pl-3 lg:pl-5 rounded-r-lg border-l-4 lg:border-l-8 border-l-brand-primary bg-white shadow-[0px_8px_16px_0px_rgba(0,0,0,0.05)]"
            )}
            onClick={() => setActiveItem(index)}
          >
            <h3 className="font-bold lg:text-xl text-base">{item.title}</h3>
            <p className="mt-1 text-sm lg:mt-2 lg:text-base">
              {item.description}
            </p>
          </li>
        );
      })}
    </ul>
  );
};
