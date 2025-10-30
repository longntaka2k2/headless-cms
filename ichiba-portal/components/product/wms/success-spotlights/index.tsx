"use client";
import React, { useEffect, useRef, useState } from "react";
import { useTranslation } from "next-i18next";
import clsx from "clsx";
import ListStories from "./ListStories";

const SuccessSpotlights = () => {
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
    <div
      className="tw-py-6 lg:tw-py-15 tw-bg-primary-1 tw-overflow-hidden"
      ref={elementRef}
    >
      <div className="tw-container">
        <div className={clsx(isVisible ? "tw-animate-showOn" : "tw-opacity-0")}>
          <h3 className="tw-font-bold tw-text-2xl lg:tw-text-4xl lg:tw-leading-[48px] tw-mb-6 lg:tw-mb-8 lg:tw-text-center">
            <span className="tw-text-brand-primary">
              {tWms("successSpotlights.heading.0")}
            </span>
            {tWms("successSpotlights.heading.1")}
          </h3>
        </div>

        <ListStories />
      </div>
    </div>
  );
};
export default SuccessSpotlights;
