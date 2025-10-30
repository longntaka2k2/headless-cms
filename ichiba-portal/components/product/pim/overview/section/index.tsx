import clsx from "clsx";
import React from "react";

type PimSectionProps = {
  title: string;
  subTitle?: string;
} & JSX.IntrinsicElements["section"];

const PimSection: React.FC<PimSectionProps> = ({
  title,
  subTitle,
  children,
  className,
}) => {
  return (
    <section
      className={clsx(
        "tw-text-ic-ink-6 tw-text-base tw-py-6 md:tw-py-16 tw-flex tw-flex-col tw-gap-10",
        className,
      )}
    >
      <div className="container">
        <div className="tw-text-center">
          <h3 className="tw-text-2xl md:tw-text-4xl tw-font-bold tw-mb-0 tw-px-3">
            {title}
          </h3>
          {!!subTitle && (
            <h6 className="tw-mt-3 tw-mb-0 tw-px-3 tw-text-sm md:tw-text-base tw-font-normal">
              {subTitle}
            </h6>
          )}
        </div>
      </div>
      {children}
    </section>
  );
};

export default PimSection;
