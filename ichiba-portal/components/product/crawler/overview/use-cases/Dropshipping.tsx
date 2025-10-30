/* eslint-disable @next/next/link-passhref */
import clsx from "clsx";
import { useTranslation } from "next-i18next";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

const Dropshipping = () => {
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
      className="tw-bg-white tw-flex tw-flex-col lg:tw-flex-row-reverse tw-rounded-2xl tw-gap-6 lg:tw-gap-5 tw-items-center tw-overflow-hidden tw-shadow-[0px_8px_16px_0px_rgba(0,_0,_0,_0.05)]"
    >
      <div
        className={clsx(
          "tw-pt-5 tw-px-5 lg:tw-pl-0 lg:tw-pr-10",
          isVisible
            ? "tw-animate-showOn lg:tw-animate-rightShow"
            : "tw-opacity-0",
        )}
      >
        <h3 className="tw-text-lg lg:tw-text-2xl tw-font-bold tw-mb-2">
          {crawler("useCases.contents.1.title")}
        </h3>
        <p className="tw-text-sm lg:tw-text-base tw-mb-2">
          {crawler("useCases.contents.1.des")}
        </p>
        <Link
          href={"/solutions/dropshipping"}
          target="_blank"
          className="tw-text-white"
        >
          <button className="tw-bg-[#F57C00] tw-py-3 tw-px-3 tw-w-[200px] tw-text-sm tw-font-medium tw-rounded-lg">
            {crawler("useCases.textBtn")}
          </button>
        </Link>
      </div>

      <Image
        src="https://cms-strapi.ichiba.net/uploads/image_850_2a913cbd8c.svg"
        width={617}
        height={444}
        alt="#"
        className={clsx(
          isVisible
            ? "tw-animate-showOn lg:tw-animate-leftShow"
            : "tw-opacity-0",
        )}
      />
    </div>
  );
};
export default Dropshipping;
