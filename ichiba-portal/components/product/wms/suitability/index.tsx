import { useTranslation } from "next-i18next";
import clsx from "clsx";
import React, { useEffect, useRef, useState } from "react";
import Logistics from "./Logistics";
import Warehouse from "./Warehouse";

const Suitability = () => {
  const { t: tWms } = useTranslation("wms");
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
    <div className="lg:tw-bg-primary-1 tw-relative tw-py-6 lg:tw-py-10 lg:tw-px-6">
      <div className="tw-container tw-grid tw-gap-6 lg:tw-gap-10">
        <h2
          ref={elementRef}
          className={clsx(
            "tw-text-2xl lg:tw-text-4xl tw-font-bold tw-mb-0 tw-text-center",
            isVisible ? "tw-animate-showOn" : "tw-opacity-0",
          )}
        >
          {tWms("suitability.heading")}
        </h2>
        <Logistics />
        <Warehouse />
      </div>
    </div>
  );
};

export default Suitability;
