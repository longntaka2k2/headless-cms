import clsx from "clsx";
import { useTranslation } from "next-i18next";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

const TryIChibaCommerceLayer = () => {
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
    <div className="tw-py-6 lg:tw-py-15" ref={elementRef}>
      <div className="tw-container">
        <h2
          className={clsx(
            "tw-text-2xl lg:tw-text-center lg:tw-text-4xl tw-font-bold tw-mb-10 lg:tw-w-[90%] tw-mx-auto",
            isVisible ? "tw-animate-showOn" : "tw-opacity-0",
          )}
        >
          {tCommerce("tryIChibaCommerceLayer.heading")}
        </h2>
        <div
          className={clsx(
            "tw-grid md:tw-grid-cols-3 tw-gap-6",
            isVisible ? "tw-animate-showOn" : "tw-opacity-0",
          )}
        >
          {(
            tCommerce(`tryIChibaCommerceLayer.items`, {
              returnObjects: true,
            }) as string[]
          ).map((item: any, index: number) => (
            <div
              key={index}
              className={clsx(
                "tw-p-3 tw-rounded-xl tw-border tw-flex tw-flex-col tw-justify-between",
                " hover:tw-shadow-10 tw-cursor-pointer lg:hover:-tw-translate-y-2 tw-transition-all tw-ease-linear tw-duration-200",
                index === 0
                  ? "tw-bg-green-1 tw-border-green-2"
                  : "tw-bg-blue-1 tw-border-blue-2",
              )}
            >
              <p
                className={clsx(
                  "tw-font-bold tw-text-xl tw-mb-0  tw-text-center",
                  index === 0 ? "tw-text-green-6" : "tw-text-blue-6",
                )}
              >
                {item?.title}
              </p>
              <div className="tw-text-center">
                <p className="tw-mt-1 tw-text-base tw-line-through tw-mb-0">
                  {item?.oldPrice}
                </p>
                {item?.if != "" && (
                  <div
                    className={clsx(
                      index === 0 ? "tw-bg-green-6" : "tw-bg-blue-6",
                      "tw-mt-1 tw-max-w-max tw-mx-auto tw-py-1 tw-px-3 tw-rounded-lg",
                    )}
                  >
                    <p className="tw-text-sm tw-mb-0 tw-text-white">
                      {item?.if}
                    </p>
                  </div>
                )}
                <p
                  className={clsx(
                    "tw-font-bold tw-mt-1 tw-text-xl lg:tw-text-2xl tw-mb-0",
                    index === 0 ? "tw-text-green-6" : "tw-text-blue-6",
                  )}
                >
                  {item?.value}
                </p>
                {item?.contactUs != "" && (
                  <div className="tw-my-3">
                    <Link
                      className="tw-font-bold tw-text-2xl tw-text-blue-6 tw-no-underline hover:tw-opacity-75"
                      href="/contact-sales"
                      target="_blank"
                    >
                      {item?.contactUs}
                    </Link>
                  </div>
                )}
              </div>
              <div className="tw-mt-3">
                <p
                  className={clsx(
                    index === 0 ? "tw-text-green-6" : "tw-text-blue-6",
                    "tw-text-sm tw-font-semibold tw-mb-3 tw-text-center",
                  )}
                >
                  {item?.suitable}
                </p>
                <ul className="tw-list-disc">
                  <li className="tw-mb-1 tw-text-sm">
                    {item?.markets?.[0]}
                    <span className="tw-font-bold">{item?.markets?.[1]}</span>
                    {item?.markets?.[2]}
                  </li>
                  <li className="tw-mb-1 tw-text-sm">
                    {item?.stores?.[0]}
                    <span className="tw-font-bold">{item?.stores?.[1]}</span>
                    {item?.stores?.[2]}
                  </li>
                  <li className="tw-mb-1 tw-text-sm">
                    {item?.integrate[0]}
                    <span className="tw-font-bold">{item?.integrate?.[1]}</span>
                    {item?.integrate?.[2]}
                  </li>
                  <li className="tw-mb-1 tw-text-sm">
                    {item?.warehouse[0]}
                    <span className="tw-font-bold">{item?.warehouse?.[1]}</span>
                    {item?.warehouse?.[2]}
                  </li>
                  <li className="tw-mb-1 tw-text-sm">
                    {item?.orders[0]}
                    <span className="tw-font-bold">{item?.orders?.[1]}</span>
                    {item?.orders?.[2]}
                  </li>
                  <li className="tw-mb-1 tw-text-sm">{item?.products}</li>
                  <li className="tw-mb-1 tw-text-sm">{item?.analytic}</li>
                  <li className="tw-mb-1 tw-text-sm">{item?.loyalty}</li>
                  {item?.support != "" && (
                    <li className="tw-mb-1 tw-text-sm">{item?.support}</li>
                  )}
                  {item?.recommendation != "" && (
                    <li className="tw-mb-1 tw-text-sm">
                      {item?.recommendation}
                    </li>
                  )}
                  {item?.inventory != "" && (
                    <li className="tw-mb-1 tw-text-sm">{item?.inventory}</li>
                  )}
                </ul>
              </div>

              <Link
                className={clsx(
                  "tw-py-2 tw-px-5 tw-font-medium tw-rounded-[50px] tw-border-2 tw-no-underline tw-text-center",
                  index === 0
                    ? "tw-border-green-6 tw-text-green-6 tw-bg-green-2 hover:tw-opacity-75"
                    : "tw-border-blue-6 tw-text-blue-6 tw-bg-blue-2 hover:tw-opacity-75",
                )}
                href="https://org.ichiba.net"
                target="_blank"
                rel="noreferrer noopener nofollow"
              >
                {item?.textBtn}
              </Link>
            </div>
          ))}
        </div>

        <div
          className={clsx(
            "tw-flex tw-justify-center tw-mt-6 lg:tw-mt-10",
            isVisible ? "tw-animate-showOn" : "tw-opacity-0",
          )}
        >
          <Link
            target="_blank"
            href={"/products/commerce-layer/pricing"}
            className={clsx(
              "tw-no-underline tw-px-6 tw-py-3 tw-rounded-lg tw-bg-[#F57C00] tw-border tw-border-[#F57C00] tw-text-sm lg:tw-text-base",
              "tw-text-center tw-text-white",
            )}
          >
            {tCommerce("tryIChibaCommerceLayer.textBtn")}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TryIChibaCommerceLayer;
