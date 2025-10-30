import clsx from "clsx";
import { useTranslation } from "next-i18next";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

const Subscribed = () => {
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
      className={clsx(
        "tw-flex tw-flex-col lg:tw-flex-row tw-gap-4 lg:tw-gap-12 tw-items-center",
        "tw-bg-primary-1 tw-p-5 lg:tw-pl-10 lg:tw-py-0 lg:tw-pr-0 tw-rounded-2xl tw-overflow-hidden",
      )}
    >
      <div
        className={clsx(
          isVisible
            ? "tw-animate-showOn lg:tw-animate-leftShow"
            : "tw-opacity-0",
        )}
      >
        <h3 className="tw-text-lg lg:tw-text-2xl tw-font-bold tw-mb-2">
          {crawler("empower.subscribed.title")}
        </h3>
        <p className="tw-text-sm lg:tw-text-base tw-mb-0">
          {crawler("empower.subscribed.content")}
        </p>
      </div>
      <Image
        src="https://cms-strapi.ichiba.net/uploads/Group_1171275987_2a4ead845e.svg"
        width={520}
        height={314}
        alt="#"
        className={clsx(
          isVisible
            ? "tw-animate-showOn lg:tw-animate-rightShow"
            : "tw-opacity-0",
        )}
      />
    </div>
  );
};
export default Subscribed;
