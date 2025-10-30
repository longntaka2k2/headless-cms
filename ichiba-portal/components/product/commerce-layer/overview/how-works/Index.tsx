import { useTranslation } from "next-i18next";
import List from "./List";
import React, { useEffect, useRef, useState } from "react";
import clsx from "clsx";

const HowWorks = () => {
  const { t } = useTranslation("commerce-layer");
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
    <div className="tw-overflow-hidden">
      <div
        className={clsx(
          "tw-mt-10 lg:tw-mt-15 tw-mx-4 lg:tw-container lg:tw-text-center",
          isVisible ? "tw-animate-showOn" : "tw-opacity-0",
        )}
        ref={elementRef}
      >
        <h2 className="tw-text-2xl lg:tw-text-4xl tw-font-bold">
          {t("howWorks.heading")}
        </h2>
        <div className="tw-text-sm lg:tw-text-lg tw-mt-2">
          {t("howWorks.subHeading")}
        </div>
      </div>
      <List />
    </div>
  );
};
export default HowWorks;
