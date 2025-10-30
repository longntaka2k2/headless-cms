import React from "react";

interface StepperProps {
  steps: { title: string; content: string }[];
}

const Stepper: React.FC<StepperProps> = ({ steps }) => {
  return (
    <div className="tw-flex tw-flex-col tw-gap-8 tw-relative">
      {steps?.map((step, index) => (
        <div key={index} className="tw-flex tw-gap-4">
          <div className="tw-flex tw-items-center tw-z-10 tw-justify-center tw-h-7 tw-w-7 tw-rounded-full tw-text-white tw-font-bold tw-bg-brand-secondary">
            {index + 1}
          </div>
          <div className="tw-flex tw-flex-col tw-gap-3 tw-flex-1">
            <p className="tw-mb-0 tw-text-lg tw-leading-6 tw-font-bold tw-text-brand-secondary">
              {step.title}
            </p>
            <p className="tw-mb-0">{step.content}</p>
          </div>
        </div>
      ))}
      <div className="tw-absolute tw-inset-y-0 tw-border-l tw-border-dashed tw-border-brand-secondary tw-left-3.5"></div>
    </div>
  );
};

export default Stepper;
