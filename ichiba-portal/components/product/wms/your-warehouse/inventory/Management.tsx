import { useTranslation } from "next-i18next";
import Image from "next/image";
import { useRouter } from "next/router";
import classes from "./Styles.module.scss";
import clsx from "clsx";
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";

const Management = () => {
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
        "tw-py-6 lg:tw-pt-8 lg:tw-pb-0 tw-px-4 tw-bg-white tw-rounded-2xl tw-border tw-border-ic-ink-2 tw-overflow-hidden",
        isVisible ? "tw-animate-showOn lg:tw-animate-leftShow" : "tw-opacity-0",
      )}
    >
      <h4 className="tw-text-sm lg:tw-text-xl tw-font-bold tw-mb-3">
        {tWms("inventory.management.title")}
      </h4>
      <p className="tw-text-sm lg:tw-text-base tw-mb-6 lg:tw-mb-0">
        {tWms("inventory.management.subTitle")}
      </p>
      <Image
        src="https://cms-strapi.ichiba.net/uploads/Group_1171275929_1f5b445974.svg"
        width={446}
        height={239}
        alt="ichiba"
        className="lg:tw-translate-x-8 lg:tw-translate-y-10 tw-mx-auto"
      />
    </div>
  );
};

export default Management;
