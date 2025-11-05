import React from "react";
import clsx from "clsx";

type LabelTagProps = {
  value: string;
  className?: string;
  background?: string;
  borderGradient?: boolean;
};

const LabelTag: React.FC<LabelTagProps> = ({ value, className = "", borderGradient, background = "" }) => {
  if (borderGradient) {
    // Border gradient version
    return (
      <div
        className={clsx(
          "relative w-max text-sm lg:text-base text-primary-7 font-medium py-[6px] px-3",
          className
        )}
      >
        <span className="relative z-10 px-3 py-2 lg:py-[6px]">{value}</span>
        <div className="absolute inset-0 rounded-[100px] p-[2px] bg-gradient-to-r from-[#98B2EF] to-[#ffffff]">
          <div className={clsx(
            "w-full h-full rounded-[100px] overflow-hidden",
            background ? background : "bg-white",
          )}></div>
        </div>
      </div>
    );
  }

  const hasCustomBorder = /\bborder\b/.test(className);

  return (
    <div
      className={clsx(
        "w-max py-[6px] px-3 rounded-[100px]",
        "text-sm lg:text-base text-primary-7 font-medium",
        hasCustomBorder ? "" : "border border-[#98B2EF]",
        className
      )}
    >
      {value}
    </div>
  );
};

export default LabelTag;
