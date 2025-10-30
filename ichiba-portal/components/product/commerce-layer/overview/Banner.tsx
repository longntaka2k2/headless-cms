import { useTranslation } from "next-i18next";
import Image from "next/image";
import { useRouter } from "next/router";
import classes from "./OverView.module.scss";
import clsx from "clsx";
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";

const BannerCommerce = () => {
  const { t: tCommon } = useTranslation("common");
  const { t: tCommerce } = useTranslation("commerce-layer");
  const router = useRouter();

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
    <div className="tw-relative tw-py-6 lg:tw-py-0" ref={elementRef}>
      <div className="tw-container">
        <div
          className={clsx(
            "lg:tw-w-[58%] lg:tw-translate-y-[60px] tw-h-full",
            isVisible
              ? "tw-animate-showOn lg:tw-animate-leftShow"
              : "tw-opacity-0",
          )}
        >
          <h1 className="tw-text-2xl lg:tw-text-5xl lg:tw-leading-[56px] tw-font-bold tw-mb-4 lg:mb-2">
            {tCommerce("banner.heading.0")}
            <span className={clsx(classes.text__gradient)}>
              {tCommerce("banner.heading.1")}
            </span>
            <span className="tw-text-brand-primary">
              {tCommerce("banner.heading.2")}
            </span>
            {tCommerce("banner.heading.3")}
          </h1>
          <p className="tw-text-sm lg:tw-text-base tw-mb-2">
            {tCommerce("banner.subHeading.0")}
          </p>
          <p className="tw-text-sm lg:tw-text-base tw-font-bold tw-mb-4 lg:tw-mb-10">
            {tCommerce("banner.subHeading.1")}
          </p>
          <Link
            href={"/contact-sales"}
            target="_blank"
            className="tw-bg-brand-primary tw-p-3 tw-no-underline tw-text-white tw-rounded-lg tw-min-w-[200px] tw-cursor-pointer"
          >
            {tCommon("contactSale")}
          </Link>
        </div>
        <Image
          src="https://cms-strapi.ichiba.net/uploads/Group_1171275969_711af8df91.svg"
          width={899}
          height={631}
          alt="video"
          className={clsx(
            "tw-ml-auto lg:-tw-translate-y-[60px] -tw-z-1",
            isVisible
              ? "tw-animate-showOn lg:tw-animate-rightShow"
              : "tw-opacity-0",
          )}
        />
      </div>
      <Image
        src="https://cms-strapi.ichiba.net/uploads/Vecto222r_93b7cef722.svg"
        width={1823}
        height={719}
        alt="video"
        className="tw-absolute tw-bottom-0 tw-left-0 -tw-z-1"
      />
      <Image
        src="https://cms-strapi.ichiba.net/uploads/Vector_2e286042f6.svg"
        width={1345}
        height={848}
        alt="video"
        className="tw-absolute tw-bottom-0 tw-right-0 -tw-z-1"
      />
    </div>
  );
};

export default BannerCommerce;
