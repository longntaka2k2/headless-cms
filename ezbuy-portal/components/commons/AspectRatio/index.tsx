import React from "react";

import clsx from "clsx";

type AspectRatioProps = {
  x?: number;
  y?: number;
} & JSX.IntrinsicElements["div"];

const AspectRatio: React.FC<AspectRatioProps> = ({
  x = 1,
  y = 1,
  children,
  className,
  ...props
}) => {
  return (
    <div
      className={clsx("w-full overflow-hidden relative", className)}
      style={{
        paddingBottom: `${(y / x) * 100}%`,
      }}
      {...props}
    >
      <div className="absolute inset-0">
        <div className="relative w-full h-full">{children}</div>
      </div>
    </div>
  );
};

export default AspectRatio;
