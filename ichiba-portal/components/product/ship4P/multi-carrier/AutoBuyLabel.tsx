import { useTranslation } from "next-i18next";
import Bg from "@/public/icons/crossBorder/howItWorkBg.png";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { SimpleSectionProps } from "@/components/shared/simpleSectionRenderer";
import clsx from "clsx";

export default function AutoBuyLabel() {
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
    <>
      <div
        ref={elementRef}
        className={clsx(isVisible ? "tw-animate-showOn" : "tw-opacity-0")}
      >
        <h2
          className={clsx(
            "tw-text-2xl lg:tw-text-4xl tw-font-bold tw-mb-6 lg:tw-mb-8",
          )}
        >
          {t("multiCarrier.autoBuyLabel.title")}
        </h2>

        <div className="tw-flex tw-flex-col lg:tw-flex-row-reverse tw-items-center tw-gap-4 lg:tw-gap-6">
          <div className="lg:tw-w-3/5 tw-grid lg:tw-grid-cols-2 tw-gap-4 lg:tw-gap-6 tw-h-full">
            {(
              t(`multiCarrier.autoBuyLabel.contents`, {
                returnObjects: true,
              }) as string[]
            ).map((value: any, index: number) => (
              <div
                key={index}
                className={clsx(
                  "tw-flex tw-flex-col tw-gap-2 lg:tw-gap-4 tw-bg-white",
                  "tw-p-4 lg:tw-py-5 lg:tw-px-6 tw-border tw-border-ic-ink-2 tw-rounded-xl",
                  index === 2 ? "lg:tw-col-span-2" : "",
                )}
              >
                <Image
                  src={value.icon}
                  width={48}
                  height={48}
                  className="tw-w-8 tw-h-8 lg:tw-w-12 lg:tw-h-12"
                  alt="icon"
                />
                <p className="tw-text-sm lg:tw-text-base tw-mb-0">
                  {value.value}
                </p>
              </div>
            ))}
          </div>
          <Image
            src="https://cms-strapi.ichiba.net/uploads/Frame_1171276311_cf473067a1.svg"
            width={476}
            height={420}
            className="lg:tw-w-2/5 tw-mx-auto tw-h-full tw-w-full tw-object-cover tw-rounded-xl"
            alt="#"
          />
        </div>
      </div>
    </>
  );
}
