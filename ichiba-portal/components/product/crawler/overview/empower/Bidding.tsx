import clsx from "clsx";
import { useTranslation } from "next-i18next";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

const Bidding = () => {
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
    <div
      ref={elementRef}
      className="tw-grid lg:tw-grid-cols-2 tw-items-center tw-gap-4 lg:tw-gap-0 tw-p-5 lg:tw-px-10 lg:tw-py-6 tw-border tw-border-ic-ink-2 tw-rounded-2xl"
    >
      <div
        className={clsx(
          isVisible
            ? "tw-animate-showOn lg:tw-animate-leftShow"
            : "tw-opacity-0",
        )}
      >
        <h3 className="tw-text-lg lg:tw-text-2xl tw-font-bold tw-mb-2">
          {crawler("empower.bidding.title")}
        </h3>
        <p className="tw-text-sm lg:tw-text-base tw-mb-0">
          {crawler("empower.bidding.content")}
        </p>
      </div>
      <div
        className={clsx(
          "lg:tw-pl-10 tw-rounded-2xl tw-overflow-hidden",
          isVisible
            ? "tw-animate-showOn lg:tw-animate-rightShow"
            : "tw-opacity-0",
        )}
      >
        <Image
          src="https://cms-strapi.ichiba.net/uploads/Rectangle_52692_a3c49e8f36.svg"
          width={528}
          height={226}
          alt="#"
          className="tw-w-full tw-h-full"
        />
      </div>
    </div>
  );
};
export default Bidding;
