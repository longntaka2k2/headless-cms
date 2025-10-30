import { useTranslation } from "next-i18next";
import Bg from "@/public/icons/crossBorder/howItWorkBg.png";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { SimpleSectionProps } from "@/components/shared/simpleSectionRenderer";
import clsx from "clsx";

export default function FreightCost() {
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
          "tw-container tw-py-6 lg:tw-py-20 tw-px-4",
          isVisible ? "tw-animate-showOn" : "tw-opacity-0",
        )}
      >
        <h2
          className={clsx(
            "tw-text-2xl lg:tw-text-4xl tw-font-bold tw-mb-6 lg:tw-mb-10 tw-text-center",
          )}
        >
          {t("freightCost.heading")}
        </h2>

        <div className="tw-grid lg:tw-grid-cols-10 tw-gap-6 lg:tw-gap-10">
          <Image
            src={"https://cms-strapi.ichiba.net/uploads/Image_c16de3baad.svg"}
            width={409}
            height={464}
            className="tw-mx-auto tw-h-full tw-object-cover tw-rounded-xl lg:tw-col-span-4"
            alt="#"
          />
          <div className="lg:tw-col-span-6">
            <div className="tw-grid lg:tw-grid-cols-2 tw-gap-2 lg:tw-gap-6">
              {(
                t(`freightCost.items`, {
                  returnObjects: true,
                }) as string[]
              ).map((value: any, index: number) => (
                <div
                  key={index}
                  className={clsx(
                    "tw-flex tw-flex-col tw-gap-2 lg:tw-gap-4",
                    "tw-p-4 lg:tw-py-5 lg:tw-px-6 tw-border tw-border-ic-ink-2 tw-rounded-xl",
                    index === 2 ? "lg:tw-col-span-2" : "",
                  )}
                >
                  <div className="tw-flex lg:tw-flex-col tw-gap-2 lg:tw-gap-4">
                    <Image
                      src={value.icon}
                      width={48}
                      height={48}
                      className="tw-w-8 tw-h-8 lg:tw-w-12 lg:tw-h-12"
                      alt="icon"
                    />
                    <h3 className="tw-text-base lg:tw-text-xl tw-font-bold tw-mb-0">
                      {value.title}
                    </h3>
                  </div>
                  <p className="tw-text-sm lg:tw-text-base tw-mb-0">
                    {value.subTitle}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
