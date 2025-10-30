import { useTranslation } from "next-i18next";
import Bg from "@/public/icons/crossBorder/howItWorkBg.png";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { SimpleSectionProps } from "@/components/shared/simpleSectionRenderer";
import clsx from "clsx";

export default function HowItWork(props: SimpleSectionProps) {
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
          "tw-pt-12 lg:tw-pt-[156px]",
          isVisible ? "tw-animate-showOn" : "tw-opacity-0",
        )}
        style={{
          backgroundImage: `url(${Bg.src})`,
          backgroundSize: "cover",
        }}
      >
        <div className="container">
          <div className="lg:tw-flex">
            <div
              className={clsx(
                "tw-text-white lg:tw-max-w-[486px]",
                isVisible
                  ? "tw-animate-showOn lg:tw-animate-leftShow"
                  : "tw-opacity-0",
              )}
            >
              <p className="tw-text-sm lg:tw-text-base tw-uppercase tw-mb-2">
                {t("howItWorks.label")}
              </p>
              <h2 className="tw-font-bold tw-text-[24px] lg:tw-text-[36px] tw-mb-4 lg:tw-mb-6">
                {t("howItWorks.heading")}
              </h2>
              <p className="tw-text-sm lg:tw-text-base tw-mb-4 lg:tw-mb-6">
                {t("howItWorks.subHeading")}
              </p>
            </div>
            <div
              className={clsx(
                "tw-max-h-[185px] lg:tw-max-h-[453px]  tw-overflow-hidden tw-rounded-t-2xl tw-mt-6 tw-px-10 lg:tw-px-0 lg:tw-pl-6",
                isVisible
                  ? "tw-animate-showOn lg:tw-animate-rightShow"
                  : "tw-opacity-0",
              )}
            >
              <Image
                src={
                  "https://cms-strapi.ichiba.net/uploads/brand_3_1_fa9f8f3e88.png"
                }
                alt=""
                width={696}
                height={535}
                quality={100}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
