import clsx from "clsx";
import { useTranslation } from "next-i18next";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

export default function BuildStoreFront() {
  const { t: commerce } = useTranslation("commerce-layer");
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
    <div className="tw-bg-[url(https://cms-strapi.ichiba.net/uploads/More_than_just_picking_packing_and_shipping_5eefcc9ff7.svg)] tw-bg-cover">
      <div
        className="tw-container tw-pt-6 tw-pb-7 lg:tw-py-15"
        ref={elementRef}
      >
        <div className={clsx(isVisible ? "tw-animate-showOn" : "tw-opacity-0")}>
          <h2 className="tw-font-bold tw-text-2xl lg:tw-text-center lg:tw-text-4xl lg:tw-leading-[48px] tw-mb-2 tw-text-white">
            {commerce("buildStoreFront.heading")}
          </h2>
          <p
            style={{ color: "rgba(255, 255, 255, 0.80)" }}
            className="tw-text-sm lg:tw-text-base tw-mb-0 lg:tw-w-[75%] tw-mx-auto lg:tw-text-center"
          >
            {commerce("buildStoreFront.subHeading")}
          </p>
          <div className="tw-flex lg:tw-justify-center tw-justify-start tw-my-6 lg:tw-my-8">
            <Link
              target="_blank"
              href={"/products/storefront-layer/overview"}
              className={clsx(
                "tw-no-underline tw-px-6 tw-py-3 tw-rounded-lg tw-bg-[#F57C00] tw-border tw-border-[#F57C00] tw-text-sm lg:tw-text-base",
                "tw-text-center tw-text-white",
              )}
            >
              {commerce("buildStoreFront.textBtn")}
            </Link>
          </div>
        </div>
        <div className="tw-flex tw-flex-col lg:tw-flex-row tw-gap-6">
          {(
            commerce(`buildStoreFront.items`, {
              returnObjects: true,
            }) as string[]
          ).map((value: any, index) => (
            <>
              <div
                key={index}
                style={{ boxShadow: "0px 8px 16px 0px rgba(0, 0, 0, 0.05)" }}
                className={clsx(
                  "tw-p-6 tw-rounded-xl tw-bg-white tw-w-full tw-border tw-border-[#F5F5F5]",
                  isVisible ? "tw-animate-showOn" : "tw-opacity-0",
                )}
              >
                <div className="tw-flex tw-gap-6 tw-items-center tw-mb-6">
                  <div className="tw-w-[72px] tw-h-[72px] tw-bg-[#F0F5FF] tw-rounded-full tw-flex tw-items-center tw-justify-center">
                    <Image src={value.icon} width={40} height={40} alt="icon" />
                  </div>
                  <h3 className="tw-text-xl tw-font-bold tw-mb-0 tw-text-brand-secondary">
                    {value.title}
                  </h3>
                </div>
                <Image
                  src={value.image}
                  width={336}
                  height={171}
                  alt="image"
                  className="tw-mx-auto"
                />
              </div>
            </>
          ))}
        </div>
      </div>
    </div>
  );
}
