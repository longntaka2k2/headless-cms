import { useTranslation } from "next-i18next";
import Bg from "@/public/icons/crossBorder/howItWorkBg.png";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { SimpleSectionProps } from "@/components/shared/simpleSectionRenderer";
import clsx from "clsx";

export default function FourObstacles() {
  const { t } = useTranslation("cross-border-forwarding");
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
        className={clsx(
          "tw-py-6 lg:tw-py-20 tw-px-4",
          isVisible ? "tw-animate-showOn" : "tw-opacity-0",
        )}
      >
        <div className="tw-container tw-grid lg:tw-grid-cols-2 lg:tw-items-center tw-gap-6 lg:tw-gap-10">
          <h2
            className={clsx("tw-text-2xl lg:tw-text-4xl tw-font-bold tw-mb-0")}
          >
            {t("fourObstacles.heading")}
          </h2>
          <div className="tw-grid tw-grid-cols-2 tw-gap-2 lg:tw-gap-6">
            {(
              t(`fourObstacles.items`, {
                returnObjects: true,
              }) as string[]
            ).map((value: any, index: number) => (
              <div
                key={index}
                className={clsx(
                  "tw-p-3 tw-bg-ic-ink-1 tw-rounded-xl lg:tw-p-6 lg:tw-rounded-2xl tw-text-sm lg:tw-text-base",
                )}
              >
                {value}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
