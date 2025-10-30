import clsx from "clsx";
import { useTranslation } from "next-i18next";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import Multi from "./Multi";
import Omnichannel from "./Omnichannel";
import Distribution from "./Distribution";
import Reserve from "./Reserve";
import SocialMedia from "./SocialMedia";
import Flexible from "./Flexible";
import MultiChannel from "./MultiChannel";
import Bundle from "./Bundle";

const ManageOrders = () => {
  const { t: tCommerce } = useTranslation("commerce-layer");
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
    <div className="tw-pt-6 lg:tw-pt-15">
      <div className="tw-container tw-grid tw-gap-6 lg:tw-gap-10">
        <h2
          ref={elementRef}
          className={clsx(
            "tw-text-2xl lg:tw-text-4xl tw-font-bold tw-mb-0 lg:tw-text-center tw-animate-showOn tw-transition-all tw-duration-300",
            isVisible ? "tw-animate-showOn" : "tw-opacity-0",
          )}
        >
          {tCommerce("manageOrders.heading")}
        </h2>
        <Multi />
        <Omnichannel />
        <div className="tw-grid lg:tw-grid-cols-2 tw-gap-6 lg:tw-gap-10">
          <MultiChannel />
          <Bundle />
        </div>
        <Distribution />
        <div className="tw-grid lg:tw-grid-cols-2 tw-gap-6 lg:tw-gap-10">
          <Reserve />
          <SocialMedia />
        </div>
        <Flexible />
      </div>
    </div>
  );
};

export default ManageOrders;
