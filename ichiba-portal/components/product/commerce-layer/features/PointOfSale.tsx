import clsx from "clsx";
import { useTranslation } from "next-i18next";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

const PointOfSale = () => {
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
    <div className="tw-mb-6 lg:tw-mb-15">
      <div className="tw-container" ref={elementRef}>
        <h2
          className={clsx(
            "tw-text-2xl lg:tw-text-4xl tw-font-bold tw-mb-6 lg:tw-mb-10 lg:tw-text-center",
            isVisible ? "tw-animate-showOn" : "tw-opacity-0",
          )}
        >
          {tCommerce("pos.heading")}
        </h2>
        <div className="tw-flex tw-flex-col lg:tw-flex-row tw-gap-4 lg:tw-gap-10 tw-items-center">
          <Image
            src="https://cms-strapi.ichiba.net/uploads/Frame_1171276646_fb4df9b4e2.svg"
            width={504}
            height={417}
            alt={tCommerce("pos.heading")}
            className={clsx(
              isVisible
                ? "tw-animate-showOn lg:tw-animate-leftShow"
                : "tw-opacity-0",
            )}
          />
          <div>
            <div className="tw-grid lg:tw-grid-cols-2 tw-gap-4 lg:tw-gap-10">
              {(
                tCommerce(`pos.contents`, {
                  returnObjects: true,
                }) as string[]
              ).map((value: any, index) => (
                <>
                  <div
                    key={index}
                    className={clsx(
                      isVisible ? "tw-animate-showOn" : "tw-opacity-0",
                    )}
                  >
                    <h3 className="tw-text-lg lg:tw-text-xl tw-font-bold tw-mb-3">
                      {value.title}
                    </h3>
                    <p className="tw-text-sm lg:tw-text-base tw-mb-0">
                      {value.content}
                    </p>
                  </div>
                </>
              ))}
            </div>
            <div
              className={clsx(
                "tw-mt-4 lg:tw-mt-8",
                isVisible ? "tw-animate-showOn" : "tw-opacity-0",
              )}
            >
              <Link
                target="_blank"
                href={"/products/pos/overview"}
                className={clsx(
                  "tw-no-underline tw-px-6 tw-py-3 tw-rounded-lg tw-bg-[#F57C00] tw-border tw-border-[#F57C00] tw-text-sm lg:tw-text-base",
                  "tw-text-center tw-text-white tw-w-max tw-cursor-pointer",
                )}
              >
                {tCommerce("pos.textBtn")}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PointOfSale;
