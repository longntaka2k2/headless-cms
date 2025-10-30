import { useTranslation } from "next-i18next";
import Image from "next/image";
import { useRouter } from "next/router";
import classes from "./Styles.module.scss";
import clsx from "clsx";
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";

const Tracking = () => {
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
      ref={elementRef}
      className={clsx(
        "tw-py-6 lg:tw-pt-8 lg:tw-pb-0 tw-px-4 tw-bg-white tw-rounded-2xl tw-border tw-border-ic-ink-2",
        isVisible ? "tw-animate-showOn" : "tw-opacity-0",
      )}
    >
      <Image
        src="https://cms-strapi.ichiba.net/uploads/Frame_1171276674_ca6199129d.svg"
        width={320}
        height={193}
        alt="ichiba"
        className="tw-mx-auto tw-hidden lg:tw-block"
      />
      <div className="lg:tw-mt-6 tw-mb-6 lg:tw-mb-0">
        <h4 className="tw-text-sm lg:tw-text-xl tw-font-bold tw-mb-3">
          {tWms("inventory.tracking.title")}
        </h4>
        <p className="tw-text-sm lg:tw-text-base tw-mb-0">
          {tWms("inventory.tracking.subTitle")}
        </p>
      </div>
      <Image
        src="https://cms-strapi.ichiba.net/uploads/Frame_1171276674_ca6199129d.svg"
        width={320}
        height={193}
        alt="ichiba"
        className="tw-mx-auto lg:tw-hidden"
      />
    </div>
  );
};

export default Tracking;
