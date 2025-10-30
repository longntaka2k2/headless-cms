import clsx from 'clsx';
import React from 'react';

type MixLabelProps = {
  label: string;
} & JSX.IntrinsicElements['div'];

const MixLabel: React.FC<MixLabelProps> = ({ label, children, className }) => {
  return (
    <div
      className={clsx('tw-flex tw-flex-col tw-gap-5 lg:tw-gap-10', className)}
    >
      <div className="tw-relative">
        <h5 className="tw-text-lg md:tw-text-xl lg:tw-text-2xl tw-font-bold tw-mb-0">
          {label}
        </h5>
        <div className="tw-w-[200px] tw-h-1 tw-bg-brand-primary tw-rounded tw-mt-3" />
      </div>
      {children}
    </div>
  );
};

export default MixLabel;
