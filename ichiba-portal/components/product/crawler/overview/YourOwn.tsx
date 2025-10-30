import React, { useEffect, useRef, useState } from "react";
import uncheckedCircle from "@/public/solutions/uncheckedCircle.svg";
import checkedCircle from "@/public/solutions/checkedCircle.svg";
import Image from "next/image";
import { useTranslation } from "next-i18next";
import clsx from "clsx";

const YourOwn = () => {
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

  const BuildACrawler = [
    {
      title: crawler("yourOwn.buildACrawler.content.0.title"),
    },
    {
      title: crawler("yourOwn.buildACrawler.content.1.title"),
    },
    {
      title: crawler("yourOwn.buildACrawler.content.2.title"),
    },
    {
      title: crawler("yourOwn.buildACrawler.content.3.title"),
    },
  ];

  const WithIChiba = [
    {
      title: crawler("yourOwn.aFewMinutes.content.0.title"),
    },
    {
      title: crawler("yourOwn.aFewMinutes.content.1.title"),
    },
    {
      title: crawler("yourOwn.aFewMinutes.content.2.title"),
    },
    {
      title: crawler("yourOwn.aFewMinutes.content.3.title"),
    },
  ];
  return (
    <section
      className="tw-container tw-px-4 tw-py-6 lg:tw-py-10"
      ref={elementRef}
    >
      <div className="tw-text-center">
        <h2
          className={clsx(
            "tw-text-2xl tw-font-bold tw-text-center lg:tw-text-4xl tw-mb-6 lg:tw-mb-10",
            isVisible
              ? "tw-animate-showOn"
              : "tw-opacity-0",
          )}
        >
          {crawler("yourOwn.heading")}
        </h2>
      </div>

      <div className="tw-flex tw-flex-col tw-gap-3 lg:tw-flex-row lg:tw-gap-6">
        <div
          className={clsx(
            "lg:tw-flex lg:tw-flex-col lg:tw-w-[40%]",
            isVisible
              ? "tw-animate-showOn lg:tw-animate-leftShow"
              : "tw-opacity-0",
          )}
        >
          <div className="tw-rounded-t-3xl tw-bg-ic-ink-2 tw-py-5 lg:tw-flex-1 lg:tw-py-7 tw-relative">
            <h3 className="tw-font-bold tw-text-lg tw-leading-6 tw-text-center lg:tw-text-2xl">
              {crawler("yourOwn.buildACrawler.title")}
            </h3>
            <div
              className={clsx(
                "tw-absolute -tw-top-3 tw-left-[50%] tw-translate-x-[-50%]",
                "tw-text-sm tw-py-[2px] tw-px-5 tw-rounded-3xl tw-bg-[#909090] tw-text-white",
              )}
            >
              {crawler("yourOwn.buildACrawler.label")}
            </div>
          </div>
          <div className="tw-rounded-b-3xl tw-bg-ic-ink-1 tw-p-4 tw-flex tw-flex-col tw-gap-5 lg:tw-px-10 lg:tw-py-7 lg:tw-gap-10 lg:tw-flex-1">
            {BuildACrawler.map((item, index) => (
              <div key={index} className="tw-flex">
                <Image
                  src={uncheckedCircle}
                  alt="uncheckedCircle"
                  width={32}
                  height={32}
                  className="tw-w-6 tw-h-6 tw-mt-[2px] lg:tw-w-8 lg:tw-h-8"
                  quality={100}
                />
                <div className="tw-ml-3 lg:tw-ml-4">
                  <h4 className="tw-font-bold lg:tw-text-lg lg:tw-leading-6">
                    {item.title}
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className={clsx(
            "lg:tw-flex lg:tw-flex-col lg:tw-w-[60%]",
            isVisible
              ? "tw-animate-showOn lg:tw-animate-rightShow"
              : "tw-opacity-0",
        )}>
          <div className="tw-rounded-t-[20px] tw-bg-[#F6840E] tw-py-5 lg:tw-py-7 tw-relative">
            <h3 className="tw-font-bold tw-text-lg tw-leading-6 tw-text-center tw-text-white lg:tw-text-2xl">
              {crawler("yourOwn.aFewMinutes.title")}
            </h3>
            <div
              className={clsx(
                "tw-absolute -tw-top-3 tw-left-[50%] tw-translate-x-[-50%]",
                "tw-text-sm tw-py-[2px] tw-px-5 tw-rounded-3xl tw-bg-[#CC6301] tw-text-white",
              )}
            >
              {crawler("yourOwn.aFewMinutes.label")}
            </div>
          </div>
          <div className="tw-rounded-b-3xl tw-bg-[#FFF9ED] tw-p-4 tw-flex tw-flex-col tw-gap-5 lg:tw-px-10 lg:tw-py-7 lg:tw-gap-10 lg:tw-flex-1">
            {WithIChiba.map((item, index) => (
              <div key={index} className="tw-flex">
                <Image
                  src={checkedCircle}
                  alt="checkedCircle"
                  width={32}
                  height={32}
                  className="tw-w-6 tw-h-6 tw-mt-[2px] lg:tw-w-8 lg:tw-h-8"
                  quality={100}
                />
                <div className="tw-ml-3 lg:tw-ml-4">
                  <h4 className="tw-font-bold lg:tw-text-lg lg:tw-leading-6">
                    {item.title}
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default YourOwn;
