import { useTranslation } from "next-i18next";
import Image from "next/image";
import clsx from "clsx";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

export default function GetStarted() {
  const { t } = useTranslation("common");
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
        "tw-bg-[url('https://cms-strapi.ichiba.net/uploads/Section_1_dfcc5e2b28.svg')]",
        "lg:tw-bg-[url('https://cms-strapi.ichiba.net/uploads/Section_ab8d84983f.svg')]",
        "tw-bg-cover tw-bg-no-repeat",
      )}
    >
      <div className="tw-container tw-flex tw-items-center tw-px-4 tw-pt-4 lg:tw-pt-6">
        <Image
          src={"https://cms-strapi.ichiba.net/uploads/image_876_a1f736bc1b.svg"}
          width={420}
          height={566}
          className={clsx(
            "tw-w-[148px] tw-h-[200px] lg:tw-w-[420px] lg:tw-h-[566px] tw-mx-auto tw-mt-auto",
            isVisible
              ? "tw-animate-showOn lg:tw-animate-leftShow"
              : "tw-opacity-0",
          )}
          alt="image"
        />
        <div
          className={clsx(
            "tw-text-center tw-pb-3",
            isVisible
              ? "tw-animate-showOn lg:tw-animate-rightShow"
              : "tw-opacity-0",
          )}
        >
          <h1
            className={clsx(
              "tw-text-center tw-text-2xl tw-leading-8 tw-font-bold tw-mb-4 tw-text-white",
              "lg:tw-text-5xl lg:tw-leading-[56px] lg:tw-mb-10 lg:tw-font-medium",
            )}
          >
            {tInvoice("getStarted.heading.0")}
            <br />
            {tInvoice("getStarted.heading.1")}
          </h1>
          <div className="tw-flex tw-flex-col tw-justify-center lg:tw-flex-row tw-gap-3 lg:tw-gap-6">
            <Link href={"/contact-sales"} target="_blannk">
              <button
                className={clsx(
                  "tw-border tw-border-[#fff] tw-rounded-lg",
                  "tw-w-[148px] tw-h-[40px] tw-text-sm tw-font-medium",
                  "lg:tw-w-[160px] lg:tw-h-[48px] tw-text-[#fff]",
                )}
              >
                {t("contactSale")}
              </button>
            </Link>
            <Link href={"https://org.ichiba.net"}>
              <button
                className={clsx(
                  "tw-w-[148px] tw-h-[40px] tw-text-sm tw-font-medium tw-rounded-lg",
                  "lg:tw-w-[160px] lg:tw-h-[48px] tw-bg-[#fff] tw-text-[#F57C00]",
                )}
              >
                {t("tryForFree")}
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
