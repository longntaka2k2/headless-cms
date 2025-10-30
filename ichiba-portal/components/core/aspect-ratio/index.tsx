import React from 'react';

import clsx from 'clsx';

type IAspectRatioProps = {
  x?: number;
  y?: number;
} & JSX.IntrinsicElements['div'];

const AspectRatio: React.FC<IAspectRatioProps> = ({
  x = 1,
  y = 1,
  children,
  className,
  style,
  ...props
}) => {
  return (
    <div
      className={clsx(
        'tw-w-full tw-h-max tw-overflow-hidden tw-relative',
        className,
      )}
      style={{
        paddingBottom: `${(y / x) * 100}%`,
        ...style,
      }}
      {...props}
    >
      <div className="tw-absolute tw-inset-0">{children}</div>
    </div>
  );
};

export default AspectRatio;
