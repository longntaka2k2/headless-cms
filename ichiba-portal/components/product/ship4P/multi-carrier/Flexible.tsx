import { useTranslation } from "next-i18next";
import Bg from "@/public/icons/crossBorder/howItWorkBg.png";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";

export default function Flexible() {
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
        "tw-py-6 tw-px-4 lg:tw-px-6 tw-grid tw-gap-4 lg:tw-gap-9 tw-border tw-border-[#DDEBF8]",
        "tw-bg-[linear-gradient(180deg,_rgba(192,_222,_255,_0.10)_22.77%,_rgba(225,_239,_255,_0.60)_100%)] tw-rounded-lg",
        isVisible ? "tw-animate-showOn" : "tw-opacity-0",
      )}
    >
      <Image
        src="https://cms-strapi.ichiba.net/uploads/Group_1171276384_33077d1492.svg"
        width={522}
        height={275}
        className="tw-mx-auto"
        alt="#"
      />
      <div>
        <h3 className="tw-mb-2 lg:tw-mb-3 tw-text-lg lg:tw-text-2xl tw-font-bold">
          {t("multiCarrier.flexible.title")}
        </h3>
        <div className="tw-flex tw-flex-col tw-gap-4">
          {(
            t(`multiCarrier.flexible.contents`, {
              returnObjects: true,
            }) as string[]
          ).map((content, index) => (
            <div key={index} className="tw-flex tw-items-center tw-gap-3">
              <Image
                src={
                  "https://cms-strapi.ichiba.net/uploads/Group_85645f8d9b.svg"
                }
                width={14}
                height={10}
                alt="IChiba"
                className="tw-w-3 tw-h-3 lg:tw-w-4 lg:tw-h-4"
              />
              <p className="tw-text-sm lg:tw-text-base tw-mb-0">{content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
