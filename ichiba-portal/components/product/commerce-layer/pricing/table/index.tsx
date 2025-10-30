"use client";
import { useTranslation } from "next-i18next";
import TableDesktop from "./TableDesktop";
import TableMobile from "./TableMobile";
import { useEffect, useRef, useState } from "react";
import clsx from "clsx";

const PriceList = () => {
  const { t: commerce } = useTranslation("commerce-layer");
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
    <div ref={elementRef} className="tw-container tw-px-3 tw-py-6 lg:tw-py-10">
      <h1 className="tw-text-2xl lg:tw-text-4xl tw-font-bold tw-mb-[10px] lg:tw-text-center">
        {commerce("pricing.heading")}
      </h1>
      <p className="tw-text-sm lg:tw-text-base tw-mb-0 lg:tw-text-center">
        {commerce("pricing.subHeading")}
      </p>
      <div
        className={clsx(
          "tw-hidden lg:tw-block",
          isVisible ? "tw-animate-showOn" : "tw-opacity-0",
        )}
      >
        <TableDesktop />
      </div>
      <div
        className={clsx(
          "lg:tw-hidden",
          isVisible ? "tw-animate-showOn" : "tw-opacity-0",
        )}
      >
        <TableMobile />
      </div>
    </div>
  );
};
export default PriceList;
