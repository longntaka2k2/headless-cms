import clsx from "clsx";
import { useTranslation } from "next-i18next";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

const Reserve = () => {
  const { t: tCommerce } = useTranslation("commerce-layer");
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
        "tw-flex tw-flex-col tw-gap-4 lg:tw-gap-10",
        isVisible ? "tw-animate-showOn lg:tw-animate-leftShow" : "tw-opacity-0",
      )}
    >
      <div>
        <div className="tw-flex tw-gap-4 tw-items-center tw-mb-4 lg:tw-mb-6">
          <div className="tw-min-w-[40px] tw-h-10 tw-rounded-lg tw-bg-blue-2 tw-flex tw-items-center tw-justify-center">
            <Image
              src={tCommerce("manageOrders.reserve.icon") as string}
              width={24}
              height={24}
              alt={tCommerce("manageOrders.reserve.title")}
            />
          </div>
          <h3 className="tw-text-lg lg:tw-text-xl tw-font-bold tw-mb-0">
            {tCommerce("manageOrders.reserve.title")}
          </h3>
        </div>
        <div>
          <ul className="tw-list-disc tw-grid tw-gap-4 tw-mb-0">
            {(
              tCommerce(`manageOrders.reserve.contents`, {
                returnObjects: true,
              }) as string[]
            ).map((content, index) => (
              <li key={index}>{content}</li>
            ))}
          </ul>
        </div>
      </div>
      <Image
        src={tCommerce("manageOrders.reserve.image") as string}
        width={542}
        height={445}
        alt={tCommerce("manageOrders.reserve.title")}
        className="tw-mx-auto"
      />
    </div>
  );
};

export default Reserve;
