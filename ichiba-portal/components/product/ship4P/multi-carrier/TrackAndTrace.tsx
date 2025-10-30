import { useTranslation } from "next-i18next";
import Bg from "@/public/icons/crossBorder/howItWorkBg.png";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";

export default function TrackAndTrace() {
  const { t } = useTranslation("ship4p");
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
        "tw-grid lg:tw-grid-cols-2 tw-items-center tw-gap-4 lg:tw-gap-24 lg:tw-p-6",
        "lg:tw-bg-[linear-gradient(337deg,_rgba(218,_255,_198,_0.00)_10%,_rgba(255,_225,_216,_0.64)_18.22%,_rgba(226,_238,_255,_0.80)_67.94%)] tw-rounded-lg",
        isVisible ? "tw-animate-showOn" : "tw-opacity-0",
      )}
    >
      <div>
        <h3 className="tw-mb-6 tw-text-lg lg:tw-text-2xl tw-font-bold">
          {t("multiCarrier.trackAndTrace.title")}
        </h3>
        <div className="tw-flex tw-flex-col tw-gap-4">
          {(
            t(`multiCarrier.trackAndTrace.contents`, {
              returnObjects: true,
            }) as string[]
          ).map((value: any, index: number) => (
            <div
              key={index}
              className={clsx(
                "tw-rounded-lg tw-overflow-hidden",
                "tw-py-3 tw-px-5 lg:tw-py-5 lg:tw-px-6 tw-border tw-relative tw-bg-white",
              )}
            >
              <p className="tw-text-sm lg:tw-text-base tw-mb-0 tw-line-clamp-3">
                {value}
              </p>
              <div className="tw-absolute tw-h-full tw-w-[6px] tw-bg-gradient-to-t tw-from-[#3B4DAB] tw-to-[#5DBFDE] tw-top-0 tw-left-0"></div>
            </div>
          ))}
        </div>
      </div>
      <Image
        src="https://cms-strapi.ichiba.net/uploads/Group_1171276387_602feded6b.png"
        width={872}
        height={532}
        className="tw-mx-auto"
        alt="#"
      />
    </div>
  );
}
