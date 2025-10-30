import { useTranslation } from "next-i18next";
import Image from "next/image";
import { useRouter } from "next/router";
import classes from "./Styles.module.scss";
import clsx from "clsx";
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";

const WMSReport = () => {
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
    <div
      className={clsx(
        "tw-flex tw-flex-col-reverse tw-gap-4 tw-rounded-2xl tw-p-3 tw-border tw-border-ic-ink-2",
        "lg:tw-grid lg:tw-grid-cols-2 lg:tw-gap-0 tw-items-center lg:tw-py-6 lg:tw-px-10",
        "lg:tw-bg-[linear-gradient(270deg,_rgba(235,_238,_250,_0.00)_0.05%,_rgba(172,_190,_255,_0.50)_99.96%)]",
      )}
      ref={elementRef}
    >
      <div
        className={clsx(
          isVisible
            ? "tw-animate-showOn lg:tw-animate-leftShow"
            : "tw-opacity-0",
        )}
      >
        <h4 className="tw-text-sm lg:tw-text-xl tw-font-bold tw-mb-3">
          {tWms("configuration.items.2.title")}
        </h4>
        <p className="tw-text-sm lg:tw-text-base tw-mb-0">
          {tWms("configuration.items.2.subTitle")}
        </p>
      </div>
      <Image
        src="https://cms-strapi.ichiba.net/uploads/Rectangle_52692_9ed0c97b9d.svg"
        width={556}
        height={266}
        alt="ichiba"
        className={clsx(
          "lg:tw-pl-10",
          isVisible
            ? "tw-animate-showOn lg:tw-animate-rightShow"
            : "tw-opacity-0",
        )}
      />
    </div>
  );
};

export default WMSReport;
