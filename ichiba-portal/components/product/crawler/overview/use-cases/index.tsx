/* eslint-disable @next/next/link-passhref */
import clsx from "clsx";
import { useTranslation } from "next-i18next";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import ProxyShopping from "./ProxyShopping";
import Dropshipping from "./Dropshipping";

const UseCases = () => {
  const { t: crawler } = useTranslation("crawler");
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
    <div ref={elementRef} className="tw-px-4 tw-pb-6 lg:tw-pb-10">
      <div className="tw-container">
        <div
          className={clsx(
            "tw-flex lg:tw-justify-center tw-mb-2 lg:tw-mb-4",
            isVisible ? "tw-animate-showOn" : "tw-opacity-0",
          )}
        >
          <div className="tw-bg-blue-1 tw-rounded-[50px] tw-py-2 tw-px-3 tw-flex tw-gap-2 tw-items-center tw-w-max">
            <p className="tw-text-sm tw-mb-0 tw-text-blue-6">
              {crawler("useCases.label")}
            </p>
          </div>
        </div>
        <div className="tw-grid tw-gap-6 lg:tw-gap-10">
          <h2
            className={clsx(
              "tw-text-2xl lg:tw-text-4xl tw-font-bold tw-mb-6 lg:tw-text-center lg:tw-w-[50%] tw-mx-auto",
              isVisible ? "tw-animate-showOn" : "tw-opacity-0",
            )}
          >
            {crawler("useCases.heading")}
          </h2>
          <ProxyShopping />
          <Dropshipping />
        </div>
      </div>
    </div>
  );
};
export default UseCases;
