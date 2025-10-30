import { useTranslation } from "next-i18next";
import clsx from "clsx";
import React, { useEffect, useRef, useState } from "react";
import Management from "./Management";
import Tracking from "./Tracking";
import Counting from "./Counting";
import Planning from "./Planning";
import MultiUnit from "./MultiUnit";
import VisualWarehouse from "./VisualWarehouse";
import RoleBased from "./RoleBased";

const Inventory = () => {
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
    <div className="tw-container tw-grid tw-gap-6 lg:tw-gap-10">
      <div
        className={clsx(
          "tw-bg-[linear-gradient(181deg,_#F8E7DD_5.59%,_#DAD4FE_39.12%,_#FDF8F4_72.65%,_#D7DFFB_106.18%)]",
          "tw-rounded-2xl tw-py-6 tw-px-4 lg:tw-py-10 lg:tw-px-6 tw-grid tw-gap-6",
        )}
      >
        <h3
          ref={elementRef}
          className={clsx(
            "tw-text-lg lg:tw-text-2xl tw-font-bold lg:tw-text-center",
            isVisible ? "tw-animate-showOn" : "tw-opacity-0",
          )}
        >
          {tWms("inventory.heading")}
        </h3>
        <div className="tw-grid lg:tw-grid-cols-3 tw-gap-6">
          <Management />
          <Tracking />
          <Counting />
        </div>
        <Planning />
        <MultiUnit />

        <div className="tw-grid lg:tw-grid-cols-2 tw-gap-6">
          <VisualWarehouse />
          <RoleBased />
        </div>
      </div>
    </div>
  );
};

export default Inventory;
