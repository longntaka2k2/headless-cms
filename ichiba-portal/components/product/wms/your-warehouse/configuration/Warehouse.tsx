import { useTranslation } from "next-i18next";
import Image from "next/image";
import { useRouter } from "next/router";
import classes from "./Styles.module.scss";
import clsx from "clsx";
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";

const Warehouse = () => {
  const { t: tWms } = useTranslation("wms");
  let host = typeof window !== "undefined" ? window.location.origin : "";

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
        "tw-flex tw-flex-col tw-gap-4 lg:tw-gap-10 tw-border tw-border-ic-ink-2 lg:tw-border-none",
        "tw-p-3 lg:tw-p-0 tw-rounded-2xl",
        isVisible ? "tw-animate-showOn lg:tw-animate-rightShow" : "tw-opacity-0",
      )}
    >
      <Image
        src="https://cms-strapi.ichiba.net/uploads/portrait_asian_woman_business_f4f2e744be.svg"
        width={556}
        height={281}
        alt="ichiba"
        className="tw-mx-auto"
      />
      <div>
        <h4 className="tw-text-sm lg:tw-text-xl tw-font-bold tw-mb-3">
          {tWms("configuration.items.1.title")}
        </h4>
        <p className="tw-text-sm lg:tw-text-base tw-mb-0">
          {tWms("configuration.items.1.subTitle")}
        </p>
      </div>
    </div>
  );
};

export default Warehouse;
