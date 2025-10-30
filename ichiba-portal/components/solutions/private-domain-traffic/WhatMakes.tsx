/* eslint-disable @next/next/link-passhref */
import { useTranslation } from "next-i18next";
import Image from "next/image";
import clsx from "clsx";
import { useEffect, useRef, useState } from "react";

export default function WhatMakes() {
  const { t } = useTranslation("private-domain-traffic");
  const elementRef = useRef(null);
  const [isVisible, setVisible] = useState(false);

  const items = t(`whatMakes.items`, {
    returnObjects: true,
  }) as any[];

  const results = t(`whatMakes.results`, {
    returnObjects: true,
  }) as any[];

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
      className="tw-container tw-py-10 lg:tw-pt-20 lg:tw-pb-52"
    >
      <h2
        className={clsx(
          "tw-text-xl lg:tw-text-4xl tw-mb-10 lg:tw-mb-15 tw-font-bold tw-text-center",
          isVisible ? "tw-animate-showOn" : "tw-opacity-0",
        )}
      >
        {t("whatMakes.heading")}
      </h2>
      <div className="tw-grid lg:tw-grid-cols-3 tw-items-center">
        <div
          className={clsx(
            isVisible
              ? "tw-animate-showOn lg:tw-animate-leftShow"
              : "tw-opacity-0",
          )}
        >
          {items.map((item: any, index: number) => (
            <div key={index}>
              <div
                className={clsx(
                  "tw-flex tw-gap-2 tw-items-start tw-px-2 tw-py-4",
                  "tw-shadow-[0px_0px_13.182px_0px_#FBDCB4] tw-bg-white",
                  "lg:tw-px-4 lg:tw-py-6 lg:tw-text-lg tw-rounded-lg",
                )}
              >
                <Image src={item.icon} width={48} height={48} alt="#" />
                <div>
                  <h3 className="tw-text-base tw-font-bold tw-mb-2">
                    {item.title}
                  </h3>
                  <p className="tw-text-sm lg:tw-text-base tw-mb-0">
                    {item.subTitle}
                  </p>
                </div>
              </div>

              {items.length != index + 1 && (
                <Image
                  src={
                    "https://cms-strapi.ichiba.net/uploads/mage_double_arrow_down_0996fa2360.svg"
                  }
                  width={40}
                  height={40}
                  className="tw-mx-auto tw-my-1"
                  alt="#"
                />
              )}
            </div>
          ))}
        </div>
        <div className={clsx(isVisible ? "tw-animate-showOn" : "tw-opacity-0")}>
          <Image
            src={
              "https://cms-strapi.ichiba.net/uploads/Group_1171276393_1_388c4ed714.svg"
            }
            width={166}
            height={273}
            className="tw-mx-auto lg:tw-hidden"
            alt="#"
          />
          <Image
            src={
              "https://cms-strapi.ichiba.net/uploads/Group_1171276393_32ad0f0216.svg"
            }
            width={433}
            height={373}
            className="tw-mx-auto tw-hidden lg:tw-block"
            alt="#"
          />
        </div>
        <div
          className={clsx(
            "tw-p-4 lg:tw-py-6 tw-grid tw-gap-2 tw-rounded-2xl tw-shadow-[0px_0px_13.182px_0px_#B1CCFF]",
            isVisible
              ? "tw-animate-showOn lg:tw-animate-rightShow"
              : "tw-opacity-0",
          )}
        >
          {results.map((content, index) => (
            <li
              key={index}
              className="tw-flex tw-gap-[10px] tw-text-sm lg:tw-text-base tw-text-brand-secondary"
            >
              <Image
                src={
                  "https://cms-strapi.ichiba.net/uploads/Group_1_e51eb6c172.svg"
                }
                width={24}
                height={24}
                alt="#"
              />
              {content}
            </li>
          ))}
        </div>
      </div>
    </div>
  );
}
