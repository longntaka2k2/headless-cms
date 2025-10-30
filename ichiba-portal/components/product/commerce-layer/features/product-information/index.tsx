import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

import clsx from "clsx";
import { useTranslation } from "next-i18next";

import Unified from "./Unified";
import ManageProduct from "./ManageProduct";
import Advanced from "./Advanced";
import Localization from "./Localization";
import BetterProduct from "./BetterProduct";

const ProductInformation = () => {
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
    <div className="tw-py-6 lg:tw-py-15 tw-overflow-hidden">
      <h2
        ref={elementRef}
        className={clsx(
          "tw-container tw-text-2xl lg:tw-text-4xl tw-font-bold tw-mb-0 lg:tw-text-center",
          isVisible ? "tw-animate-showOn" : "tw-opacity-0",
        )}
      >
        {t("productInformation.heading")}
      </h2>
      <Unified />
      <ManageProduct />
      <Advanced />
      <Localization />
      <BetterProduct />
    </div>
  );
};

export default ProductInformation;
