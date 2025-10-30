"use client";

import clsx from "clsx";
import { DisplayRate } from "./DisplayRate";

const RevenueStory = ({ lang }: { lang: any }) => {
  return (
    <section className="container p-4 lg:flex lg:justify-center text-ic-ink-6 mt-5">
      <div className="lg:flex lg:justify-center lg:gap-[60px]">
        <div className="lg:order-1 lg:w-[475px]">
          <span
            className={clsx(
              "rounded-[20px] border border-brand-secondary text-[10px] leading-[14px] px-3 py-1 text-brand-secondary",
              "lg:text-sm"
            )}
          >
            {lang.title}
          </span>
          <h2 className="text-xl font-bold mt-2 lg:text-4xl lg:leading-[48px]">
            <span className="text-brand-primary">{lang.increaase}</span>
            <p className="text-lg font-medium lg:mt-1 lg:text-2xl">
              {lang.saleRevenue}
            </p>
          </h2>
          <p className="text-sm mt-3 lg:mt-4 lg:text-base">
            {lang.description}
          </p>
        </div>
        <DisplayRate lang={lang} />
      </div>
    </section>
  );
};

export default RevenueStory;
