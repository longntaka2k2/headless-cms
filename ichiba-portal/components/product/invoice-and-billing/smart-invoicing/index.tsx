import { useTranslation } from "next-i18next";
import clsx from "clsx";
import Management from "./Management";
import PricingModel from "./PricingModel";
import Transaction from "./Transaction";
import PaymentProvider from "./PaymentProvider";
import Income from "./Income";
import React, { useEffect, useRef, useState } from "react";

export default function SmartInvoicing() {
  const { t: tInvoice } = useTranslation("invoice-and-billing");
  const elementRef = useRef(null);
  const [isVisible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 1 / 3 },
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }
    return () => {
      if (elementRef.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        observer.unobserve(elementRef.current);
      }
    };
  }, []);
  return (
    <div ref={elementRef} className="tw-bg-[linear-gradient(359deg,_rgba(87,_170,_253,_0.20)_0.84%,_#F6FBFF_17.85%,_#F6FBFF_99.13%)]">
      <div
        className={clsx(
          "tw-container tw-px-4 tw-py-10 lg:tw-py-20",
          isVisible ? "tw-animate-showOn" : "tw-opacity-0",
        )}
      >
        <h1 className="tw-text-center tw-text-2xl lg:tw-text-[40px] tw-leading-8 lg:tw-leading-[48px] tw-font-bold tw-mb-4 lg:tw-mb-6">
          <span className="tw-text-brand-primary">
            {tInvoice("smartInvoicing.heading.0")}
          </span>
          <br />
          {tInvoice("smartInvoicing.heading.1")}
        </h1>
        <p className="tw-text-sm lg:tw-text-base tw-mb-6 lg:tw-mb-10 lg:tw-w-[50%] tw-mx-auto tw-text-center">
          {tInvoice("smartInvoicing.subHeading")}
        </p>

        <div className="tw-flex tw-flex-col tw-gap-6 lg:tw-hidden">
          <Management />
          <Transaction />
          <PricingModel />
          <PaymentProvider />
          <Income />
        </div>

        <div className="tw-hidden lg:tw-flex tw-flex-col lg:tw-gap-10">
          <Management />
          <div className="tw-grid tw-grid-cols-2 tw-gap-10">
            <div className="tw-flex tw-flex-col tw-gap-10 tw-h-full">
              <PricingModel />
              <PaymentProvider />
            </div>
            <div className="tw-flex tw-flex-col tw-gap-10 tw-h-full">
              <Transaction />
              <Income />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
