import { useTranslation } from "next-i18next";
import clsx from "clsx";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Warehouse from "./Warehouse";
import Inventory from "./inventory";
import Configuration from "./configuration";
import Inbound from "./Inbound";
import Outbound from "./Outbound";

const YourWarehouse = () => {
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
    <div className="tw-pb-6 lg:tw-py-10">
      <div className="tw-relative tw-bg-[#F9F5EF] lg:tw-bg-white tw-py-6 lg:tw-py-0">
        <div className="tw-container">
          <h2
            ref={elementRef}
            className={clsx(
              "tw-text-2xl lg:tw-text-4xl tw-font-bold tw-mb-5 lg:tw-w-[60%] tw-mx-auto lg:tw-mb-10 lg:tw-text-center",
              isVisible ? "tw-animate-showOn" : "tw-opacity-0",
            )}
          >
            {tWms("yourWarehouse.heading")}
          </h2>
          <Inbound />
          <Outbound />
        </div>
        <Image
          src="https://cms-strapi.ichiba.net/uploads/Background_1028de85be.svg"
          width={783}
          height={363}
          alt="ichiba"
          className="tw-absolute tw-right-0 tw-top-[50%] tw-translate-y-[-50%] tw-hidden lg:tw-block tw-z-0"
        />
      </div>
      <div className="tw-grid tw-gap-6 lg:tw-gap-20">
        <Warehouse />
      </div>
      <Inventory />
      <Configuration />
    </div>
  );
};

export default YourWarehouse;
