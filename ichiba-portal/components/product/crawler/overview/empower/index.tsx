import clsx from "clsx";
import { useTranslation } from "next-i18next";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import Subscribed from "./Subscribed";
import ProductFinter from "./ProductFinder";
import SourcePage from "./SourcePage";
import Catalog from "./Catalog";
import KeywordList from "./KeywordList";
import BlackList from "./BlackList";
import SellerList from "./SellerList";
import Bidding from "./Bidding";

const Empower = () => {
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
    <div className="tw-container tw-py-6 lg:tw-py-10 tw-px-3 tw-grid tw-gap-6 lg:tw-gap-10">
      <h2
        ref={elementRef}
        className={clsx(
          "tw-text-2xl lg:tw-text-4xl tw-font-bold tw-mb-0 lg:tw-text-center",
          isVisible ? "tw-animate-showOn" : "tw-opacity-0",
        )}
      >
        {crawler("empower.heading.0")}
        <br />
        {crawler("empower.heading.1")}
      </h2>
      <Subscribed />
      <ProductFinter />
      <div className="tw-grid lg:tw-grid-cols-2 tw-gap-15">
        <SourcePage />
        <Catalog />
      </div>
      <KeywordList />
      <div className="tw-grid lg:tw-grid-cols-2 tw-gap-6 lg:tw-gap-15 tw-mt-5 lg:tw-mt-0">
        <BlackList />
        <SellerList />
      </div>
      <Bidding />
    </div>
  );
};
export default Empower;
