/* eslint-disable @next/next/link-passhref */
import clsx from "clsx";
import { useTranslation } from "next-i18next";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

const IChibaStoreFront = () => {
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
    <div
      style={{
        background:
          "linear-gradient(270deg, rgba(235, 238, 250, 0.00) 0.05%, rgba(172, 190, 255, 0.50) 99.96%)",
      }}
      className="tw-px-4 tw-py-6 lg:tw-pt-20 lg:tw-pb-0"
      ref={elementRef}
    >
      <div className="tw-container">
        <div
          className={clsx(
            "lg:tw-w-[65%] tw-mx-auto lg:tw-text-center",
            isVisible ? "tw-animate-showOn" : "tw-opacity-0",
          )}
        >
          <h2 className="tw-text-2xl lg:tw-text-4xl tw-font-bold tw-mb-[10px] lg:tw-text-center">
            {crawler("iChibaStoreFront.heading")}
          </h2>
          <p className="tw-text-sm lg:tw-text-base tw-mb-0">
            {crawler("iChibaStoreFront.subHeading")}
          </p>
        </div>
        <div
          className={clsx(
            "tw-flex lg:tw-justify-center tw-justify-start tw-my-6 lg:tw-my-10",
            isVisible ? "tw-animate-showOn" : "tw-opacity-0",
          )}
        >
          <Link
            target="_blank"
            href={"/products/storefront-layer/overview"}
            className={clsx(
              "tw-no-underline tw-px-6 tw-py-3 tw-rounded-lg tw-bg-[#F57C00] tw-border tw-border-[#F57C00] tw-text-sm lg:tw-text-base",
              "tw-text-center tw-text-white",
            )}
          >
            {crawler("iChibaStoreFront.textBtn")}
          </Link>
        </div>
        <Image
          src="https://cms-strapi.ichiba.net/uploads/Group_19881_1_aeb59fcf5c.svg"
          width={1200}
          height={700}
          alt="#"
          className={clsx(
            "tw-w-full tw-h-full",
            isVisible ? "tw-animate-showOn" : "tw-opacity-0",
          )}
        />
      </div>
    </div>
  );
};
export default IChibaStoreFront;
