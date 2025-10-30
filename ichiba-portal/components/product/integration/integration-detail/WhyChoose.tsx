import clsx from "clsx";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "next-i18next";

const WhyChoose = ({ data }: any) => {
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
        "lg:tw-relative tw-overflow-hidden",
        "tw-bg-[url('https://cms-strapi.ichiba.net/uploads/Seller_2fdd6b6a43.svg')]",
        "tw-bg-cover tw-bg-no-repeat tw-py-6 lg:tw-py-16",
      )}
    >
      <div className="tw-container tw-px-4 lg:tw-px-0">
        <h2
          className={clsx(
            "tw-text-2xl lg:tw-text-4xl tw-font-bold tw-mb-6 lg:tw-mb-10 lg:tw-text-center",
            isVisible ? "tw-animate-showOn" : "tw-opacity-0",
          )}
        >
          {data?.heading}
        </h2>
        <div className="tw-grid sm:tw-grid-cols-2 lg:tw-grid-cols-4 tw-gap-4 lg:tw-gap-6">
          {data?.items.map((item: any, index: number) => (
            <div key={index} className="tw-bg-white tw-rounded-xl tw-p-6">
              <div className="tw-flex tw-gap-4 tw-items-center tw-mb-4">
                <Image
                  src={
                    item?.icon?.data?.attributes?.url
                      ? `https://cms-strapi.ichiba.net${item?.icon?.data?.attributes?.url}`
                      : "#"
                  }
                  width={48}
                  height={48}
                  alt="IChiba"
                />
                <h3 className="tw-text-base tw-font-bold tw-mb-0">
                  {item.title}
                </h3>
              </div>
              <div className="tw-w-full tw-h-full tw-rounded-xl">
                <Image
                  src={
                    item?.image?.data?.attributes?.url
                      ? `https://cms-strapi.ichiba.net${item?.image?.data?.attributes?.url}`
                      : "#"
                  }
                  width={237}
                  height={150}
                  alt="IChiba"
                  className="tw-mx-auto"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default WhyChoose;
