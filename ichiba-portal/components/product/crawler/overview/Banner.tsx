/* eslint-disable @next/next/link-passhref */
import clsx from "clsx";
import { useTranslation } from "next-i18next";
import Image from "next/image";
import Link from "next/link";
import classes from "./Crawler.module.scss";
import React, { useEffect, useRef, useState } from "react";

const Banner = () => {
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
      ref={elementRef}
      className="tw-bg-[url(https://cms-strapi.ichiba.net/uploads/Hero_banner_5dc37ec891.svg)] tw-bg-cover tw-py-6 lg:tw-py-15 tw-px-3 tw-overflow-hidden"
    >
      <div className="tw-container tw-flex tw-flex-col lg:tw-flex-row tw-gap-6 lg:tw-gap-8">
        <div
          className={clsx(
            "lg:tw-min-w-[35%] xl:tw-min-w-[40%]",
            isVisible
              ? "tw-animate-showOn lg:tw-animate-leftShow"
              : "tw-opacity-0",
          )}
        >
          <h1 className="tw-text-2xl lg:tw-text-5xl tw-mb-2 tw-font-bold">
            {crawler("banner.heading.0")}
            <span className={clsx(classes.text__gradient)}>
              {crawler("banner.heading.1")}
            </span>
            {crawler("banner.heading.2")}
          </h1>
          <h2 className="tw-text-base tw-mb-4 lg:tw-mb-10">
            {crawler("banner.subHeading")}
          </h2>
          <Link
            href={"/contact-sales"}
            className="tw-no-underline tw-text-white"
          >
            <button
              className={clsx(
                "tw-w-[171px] tw-py-3 tw-text-sm tw-bg-[#F57C00]",
                "lg:tw-w-[200px] lg:tw-py-[14px] lg:tw-text-base tw-rounded-lg",
              )}
            >
              {crawler("banner.textBtn")}
            </button>
          </Link>
        </div>
        <Image
          src="https://cms-strapi.ichiba.net/uploads/Group_1171275970_3e6ceabfb4.svg"
          width={860}
          height={696}
          alt="#"
          className={clsx(
            "tw-mx-auto tw-w-full tw-h-full",
            isVisible
              ? "tw-animate-showOn lg:tw-animate-rightShow"
              : "tw-opacity-0",
          )}
        />
      </div>
    </div>
  );
};
export default Banner;
