"use client";
import React, { useEffect, useRef, useState } from "react";
import { useTranslation } from "next-i18next";
import clsx from "clsx";
import ListStories from "./ListStories";
import Link from "next/link";

const HelpsSellers = () => {
  const { t } = useTranslation("private-domain-traffic");
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
            {t("helpsSellers.heading")}
          </h3>
        </div>

        <div className="tw-flex tw-flex-col lg:tw-flex-col-reverse tw-gap-6 lg:tw-gap-8">
          <ListStories />

          <Link
            target="_blank"
            href={`/case-studies`}
            className={clsx(
              "tw-no-underline tw-px-6 tw-py-3 tw-rounded-lg tw-bg-[#F57C00] tw-border tw-border-[#F57C00]",
              "tw-text-center tw-text-white tw-w-max tw-text-sm lg:tw-text-base lg:tw-mx-auto",
            )}
          >
            {t("helpsSellers.textBtn")}
          </Link>
        </div>
      </div>
    </div>
  );
};
export default HelpsSellers;
