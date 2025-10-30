import clsx from "clsx";
import { useTranslation } from "next-i18next";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

const Contact = () => {
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
    <div className="tw-py-6 lg:tw-py-15 px-3 tw-text-white">
      <div
        ref={elementRef}
        className={clsx(
          "tw-container tw-bg-[url(https://cms-strapi.ichiba.net/uploads/Frame_1171275830_afd2793242.svg)] tw-bg-cover",
          "tw-py-6 tw-px-4 lg:tw-py-10 lg:tw-px-20 tw-rounded-2xl",
          isVisible ? "tw-animate-showOn" : "tw-opacity-0",
        )}
      >
        <h2 className="tw-text-2xl lg:tw-text-3xl tw-font-bold tw-mb-2 lg:tw-w-[80%]">
          {tCommerce("contactFeatures.heading")}
        </h2>
        <p className="tw-text-sm lg:tw-text-base tw-mb-8">
          {tCommerce("contactFeatures.subHeading")}
        </p>
        <Link
          target="_blank"
          href={"/contact-sales"}
          className={clsx(
            "tw-no-underline tw-px-6 tw-py-3 tw-rounded-lg tw-bg-[#F57C00] tw-border tw-border-[#F57C00] tw-text-sm lg:tw-text-base",
            "tw-text-center tw-text-white tw-w-max tw-cursor-pointer",
          )}
        >
          {tCommerce("contactFeatures.textBtn")}
        </Link>
      </div>
    </div>
  );
};

export default Contact;
