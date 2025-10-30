import { useTranslation } from "next-i18next";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import clsx from "clsx";

export default function Overview() {
  const { t: tInvoice } = useTranslation("invoice-and-billing");
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
        "tw-container tw-px-4 tw-py-10 lg:tw-py-20",
        isVisible ? "tw-animate-showOn" : "tw-opacity-0",
      )}
    >
      <h1 className="tw-text-center tw-text-2xl lg:tw-text-[40px] tw-leading-8 lg:tw-leading-[48px] tw-font-bold tw-mb-4 lg:tw-mb-6">
        {tInvoice("overview.heading.0")}
        <span className="tw-text-brand-primary">
          {tInvoice("overview.heading.1")}
        </span>
        {tInvoice("overview.heading.2")}
      </h1>
      <p className="tw-text-sm lg:tw-text-base tw-mb-4 lg:tw-mb-10 tw-text-center lg:tw-w-[50%] tw-mx-auto">
        {tInvoice("overview.subHeading")}
      </p>

      <Image
        src={"https://cms-strapi.ichiba.net/uploads/image_eb73ebe790.png"}
        width={1488}
        height={839}
        className="tw-mx-auto"
        alt="video"
      />
    </div>
  );
}
