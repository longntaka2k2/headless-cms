import { useTranslation } from "next-i18next";
import React, { useEffect, useRef, useState } from "react";
import ThirdParty from "./ThirdParty";
import Warehouse from "./Warehouse";
import WMSReport from "./WMSReport";
import clsx from "clsx";

const Configuration = () => {
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
    <div className="tw-container tw-relative tw-pt-6 lg:tw-pt-10 tw-grid tw-gap-6 lg:tw-gap-10">
      <div className="lg:tw-px-6 lg:tw-py-10 lg:tw-border tw-rounded-2xl">
        <h3
          ref={elementRef}
          className={clsx(
            "tw-text-lg lg:tw-text-2xl tw-font-bold tw-text-center tw-mb-10",
            isVisible ? "tw-animate-showOn" : "tw-opacity-0",
          )}
        >
          {tWms("configuration.heading")}
        </h3>
        <div className="tw-grid lg:tw-grid-cols-2 tw-gap-6 lg:tw-gap-10">
          <ThirdParty />
          <Warehouse />
        </div>
      </div>
      {/* <WMSReport /> */}
    </div>
  );
};

export default Configuration;
