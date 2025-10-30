import clsx from "clsx";
import { useTranslation } from "next-i18next";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

const SocialMedia = () => {
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
        "tw-bg-[#F1F9EA] tw-rounded-xl lg:tw-rounded-2xl tw-p-5 lg:tw-py-8 lg:tw-px-10",
        "tw-flex tw-flex-col tw-gap-4 lg:tw-gap-10",
        isVisible
          ? "tw-animate-showOn lg:tw-animate-rightShow"
          : "tw-opacity-0",
      )}
    >
      <div>
        <div className="tw-flex tw-gap-4 tw-items-center tw-mb-3 lg:tw-mb-6">
          <div className="tw-min-w-[40px] tw-h-10 tw-rounded-lg tw-bg-green-2 tw-flex tw-items-center tw-justify-center">
            <Image
              src={tCommerce("manageOrders.social.icon") as string}
              width={24}
              height={24}
              alt={tCommerce("manageOrders.social.title")}
            />
          </div>
          <h3 className="tw-text-lg lg:tw-text-xl tw-font-bold tw-mb-0">
            {tCommerce("manageOrders.social.title")}
          </h3>
        </div>
        <div>
          <ul className="tw-list-disc tw-grid tw-gap-4 tw-mb-0">
            {(
              tCommerce(`manageOrders.social.contents`, {
                returnObjects: true,
              }) as string[]
            ).map((content, index) => (
              <li key={index}>{content}</li>
            ))}
          </ul>
        </div>
      </div>
      <Image
        src={tCommerce("manageOrders.social.image") as string}
        width={532}
        height={431}
        alt={tCommerce("manageOrders.social.title")}
        className="tw-mx-auto"
      />
    </div>
  );
};

export default SocialMedia;
