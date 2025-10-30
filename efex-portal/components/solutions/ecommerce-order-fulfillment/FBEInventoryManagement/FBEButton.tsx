"use client";

import clsx from "clsx";

export interface FBEButtonProps {
  title: string;
  index: number;
  isActive: boolean;
  onClick: (index: number) => void;
}

export const FBEButton = ({
  title,
  index,
  isActive,
  onClick,
}: FBEButtonProps) => {
  return (
    <button
      key={title}
      className={clsx(
        "w-fit shrink-0 p-[2px] rounded-[40px] border border-ic-ink-5",
        isActive && "bg-[linear-gradient(to_left,#AF0000,#959DB9)] border-none"
      )}
      onClick={() => onClick(index)}
    >
      <span
        className={clsx(
          "py-2 px-5 flex w-full rounded-[40px]",
          isActive && "bg-[rgba(38,_55,_89,_0.90)]"
        )}
      >
        <p
          className={clsx(
            "text-sm font-bold text-ic-white-5",
            isActive && "text-white"
          )}
        >
          {title}
        </p>
      </span>
    </button>
  );
};
