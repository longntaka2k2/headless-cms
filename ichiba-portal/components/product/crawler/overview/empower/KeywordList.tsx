import clsx from "clsx";
import { useTranslation } from "next-i18next";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

const KeywordList = () => {
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
    <div ref={elementRef} className="tw-grid lg:tw-grid-cols-2 tw-gap-4 lg:tw-gap-5 tw-items-center">
      <div className={clsx(
        "lg:tw-px-10",
        isVisible
              ? "tw-animate-showOn lg:tw-animate-leftShow"
              : "tw-opacity-0",
      )}>
        <h3 className="tw-text-lg lg:tw-text-2xl tw-font-bold tw-mb-2">
          {crawler("empower.keywordList.title")}
        </h3>
        <p className="tw-text-sm lg:tw-text-base tw-mb-0">
          {crawler("empower.keywordList.content")}
        </p>
      </div>
      <div className={clsx(
        "tw-rounded-2xl tw-overflow-hidden",
        isVisible
              ? "tw-animate-showOn lg:tw-animate-rightShow"
              : "tw-opacity-0",
      )}>
        <Image
          src="https://cms-strapi.ichiba.net/uploads/Frame_1171276160_43cb406b2a.svg"
          width={617}
          height={443}
          alt="#"
          className="tw-w-full tw-h-full"
        />
      </div>
    </div>
  );
};
export default KeywordList;
