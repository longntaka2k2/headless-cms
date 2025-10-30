"use client";
import React, { useEffect, useRef, useState } from "react";
import { useTranslation } from "next-i18next";
import clsx from "clsx";
import ListStories from "./ListStories";

const CustomerSuccess = () => {
  const { t } = useTranslation("cross-border-forwarding");
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
      className="tw-py-6 lg:tw-pt-20 lg:tw-pb-15 tw-px-4 tw-overflow-hidden"
      ref={elementRef}
    >
      <div
        className={clsx(
          "tw-container",
          isVisible ? "tw-animate-showOn" : "tw-opacity-0",
        )}
      >
        <h2 className="tw-font-bold tw-text-2xl lg:tw-text-4xl lg:tw-leading-[48px] tw-mb-2 lg:tw-text-center">
          {t("customerSuccess.heading")}
        </h2>
        <p className="tw-mb-6 lg:tw-mb-8 tw-text-sm lg:tw-text-base lg:tw-w-[70%] tw-mx-auto lg:tw-text-center">
          {t("customerSuccess.subHeading")}
        </p>
      </div>

      <ListStories />
    </div>
  );
};
export default CustomerSuccess;
