"use client";
import React, { useEffect, useRef, useState } from "react";
import { useTranslation } from "next-i18next";
import Link from "next/link";
import clsx from "clsx";
import classes from "../OverView.module.scss";
import ListStories from "./ListStories";

const VoicesOfSuccess = () => {
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
    <div
      className="tw-py-6 lg:tw-py-15 tw-bg-primary-1 tw-overflow-hidden"
      ref={elementRef}
    >
      <div className="tw-container">
        <div className={clsx(isVisible ? "tw-animate-showOn" : "tw-opacity-0")}>
          <h2 className="tw-font-bold tw-text-2xl lg:tw-text-4xl lg:tw-leading-[48px] tw-mb-2 lg:tw-text-center">
            {commerce("voicesOfSuccess.heading.0")}
            <span className={clsx(classes.text__gradient__system)}>
              {commerce("voicesOfSuccess.heading.1")}
            </span>
          </h2>
          <p className="tw-mb-6 lg:tw-mb-8 tw-text-sm lg:tw-text-base lg:tw-w-[70%] tw-mx-auto lg:tw-text-center">
            {commerce("voicesOfSuccess.subHeading")}
          </p>
          <div className="tw-flex lg:tw-justify-center tw-justify-start tw-my-6 lg:tw-my-8">
            <Link
              target="_blank"
              href={"/case-studies"}
              className={clsx(
                "tw-no-underline tw-px-6 tw-py-3 tw-rounded-lg tw-bg-[#F57C00] tw-border tw-border-[#F57C00] tw-text-sm lg:tw-text-base",
                "tw-text-center tw-text-white",
              )}
            >
              {commerce("voicesOfSuccess.textBtn")}
            </Link>
          </div>
        </div>

        <ListStories />
      </div>
    </div>
  );
};
export default VoicesOfSuccess;
