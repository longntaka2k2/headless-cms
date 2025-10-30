import clsx from "clsx";
import { useTranslation } from "next-i18next";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

const DataCrawler = () => {
  const { t: tCommerce } = useTranslation("commerce-layer");
  const [active, setActive] = useState(0);
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
  useEffect(() => {
    const contents = tCommerce(`dataCrawler.contents`, {
      returnObjects: true,
    }) as string[];
    
    const interval = setInterval(() => {
      setActive((current) => (current + 1) % contents.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [tCommerce]);

  return (
    <div className="tw-mb-6 lg:tw-mb-15">
      <div className="tw-container" ref={elementRef}>
        <h2
          className={clsx(
            "tw-text-2xl lg:tw-text-4xl tw-font-bold tw-mb-6 lg:tw-mb-10 lg:tw-text-center",
            isVisible ? "tw-animate-showOn" : "tw-opacity-0",
          )}
        >
          {tCommerce("dataCrawler.heading")}
        </h2>
        <Image
          src={
            "https://cms-strapi.ichiba.net/uploads/Frame_1171276518_7df4bc74b4.svg"
          }
          width={1200}
          height={361}
          alt="#"
        />
        <div className="tw-grid lg:tw-grid-cols-3 tw-mt-4 lg:tw-mt-7">
          {(
            tCommerce(`dataCrawler.contents`, {
              returnObjects: true,
            }) as string[]
          )?.map((value: any, index: number) => (
            <div
              key={index}
              className={clsx(
                "tw-border-l-[6px] lg:tw-border-t-[6px] lg:tw-border-l-0 tw-pl-4 lg:tw-pl-0 lg:tw-pt-4 tw-pb-4 lg:tw-pb-0 tw-cursor-pointer",
                active === index ? "tw-border-[#0F62FE]" : "",
              )}
              onClick={() => setActive(index)}
            >
              <div
                className={clsx(
                  "tw-w-7 tw-h-3 lg:tw-w-8 lg:tw-h-4 tw-rounded-2xl",
                  active === index ? "tw-bg-brand-primary" : "tw-bg-[#D9D9D9]",
                )}
              ></div>
              <div className="tw-text-sm tw-mt-1 lg:tw-mt-4 lg:tw-text-base">
                {value}
              </div>
            </div>
          ))}
        </div>

        <div className="tw-mt-7 lg:tw-mt-9 tw-flex tw-justify-center">
          <Link
            target="_blank"
            href={"/products/crawler/overview"}
            className="tw-bg-brand-primary tw-p-3 tw-text-white tw-rounded-lg tw-w-max tw-no-underline tw-text-sm lg:tw-text-base"
          >
            {tCommerce("dataCrawler.textBtn")}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DataCrawler;
