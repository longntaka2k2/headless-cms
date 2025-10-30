import clsx from "clsx";
import { useTranslation } from "next-i18next";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

const Flexible = () => {
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
      className="tw-flex tw-flex-col lg:tw-flex-row tw-items-center tw-gap-4 lg:tw-gap-10"
    >
      <div
        className={clsx(
          isVisible
            ? "tw-animate-showOn lg:tw-animate-leftShow"
            : "tw-opacity-0",
        )}
      >
        <div className="tw-flex tw-gap-4 tw-items-center tw-mb-3 lg:tw-mb-6">
          <div className="tw-min-w-[40px] tw-h-10 tw-rounded-lg tw-bg-red-2 tw-flex tw-items-center tw-justify-center">
            <Image
              src={tCommerce("manageOrders.flexible.icon") as string}
              width={24}
              height={24}
              alt={tCommerce("manageOrders.flexible.title")}
            />
          </div>
          <h3 className="tw-text-lg lg:tw-text-xl tw-font-bold tw-mb-0">
            {tCommerce("manageOrders.flexible.title")}
          </h3>
        </div>
        <div className="tw-grid tw-gap-4 lg:tw-gap-8">
          <ul className="tw-list-disc tw-grid tw-gap-4 tw-mb-0">
            {(
              tCommerce(`manageOrders.flexible.contents`, {
                returnObjects: true,
              }) as string[]
            ).map((content, index) => (
              <li key={index}>{content}</li>
            ))}
          </ul>
          <Link
            target="_blank"
            href={"/products/integrations"}
            className={clsx(
              "tw-no-underline tw-px-6 tw-py-3 tw-rounded-lg tw-bg-[#F57C00] tw-border tw-border-[#F57C00] tw-text-sm lg:tw-text-base",
              "tw-text-center tw-text-white tw-w-max tw-cursor-pointer",
            )}
          >
            {tCommerce("manageOrders.textBtn")}
          </Link>
        </div>
      </div>
      <Image
        src={tCommerce("manageOrders.flexible.image") as string}
        width={674}
        height={452}
        alt={tCommerce("manageOrders.flexible.title")}
        className={clsx(
          "tw-mx-auto",
          isVisible
            ? "tw-animate-showOn lg:tw-animate-rightShow"
            : "tw-opacity-0",
        )}
      />
    </div>
  );
};

export default Flexible;
