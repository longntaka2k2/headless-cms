import { useTranslation } from "next-i18next";
import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";
import { useEffect, useRef, useState } from "react";

export default function Banner() {
  const { t } = useTranslation("common");
  const { t: tInvoice } = useTranslation("invoice-and-billing");

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
    <>
      <div
        ref={elementRef}
        className="tw-bg-[linear-gradient(102deg,_rgba(255,_255,_255,_0.50)_31.06%,_#FFF2E4_90.82%)]"
      >
        <div
          className={clsx(
            "tw-container tw-pt-2 lg:tw-pt-[132px] tw-grid lg:tw-grid-cols-2 tw-gap-6 lg:tw-gap-0",
          )}
        >
          <div
            className={clsx(
              "tw-flex tw-flex-col tw-gap-6",
              isVisible
                ? "tw-animate-showOn lg:tw-animate-leftShow"
                : "tw-opacity-0",
            )}
          >
            <h3 className="tw-text-2xl tw-font-medium tw-leading-8 tw-hidden lg:tw-block tw-mb-0">
              {tInvoice("banner.label.0")}
              <span className="tw-text-brand-primary">
                {tInvoice("banner.label.1")}
              </span>
              {tInvoice("banner.label.2")}
              <span className="tw-text-brand-primary">
                {tInvoice("banner.label.3")}
              </span>
            </h3>
            <h1 className="tw-text-2xl lg:tw-text-[40px] tw-leading-8 lg:tw-leading-[48px] tw-font-bold tw-mb-0">
              {tInvoice("banner.heading")}
            </h1>
            <p className="tw-text-sm lg:tw-text-base tw-mb-0">
              {tInvoice("banner.subHeading")}
            </p>
            <div className="tw-flex tw-gap-4 lg:tw-gap-6">
              <Link href={"https://org.ichiba.net"}>
                <button
                  className={clsx(
                    "tw-w-[160px] tw-h-[48px] tw-text-sm tw-font-medium tw-rounded-lg",
                    "lg:tw-w-[200px] lg:tw-h-[52px] lg:tw-text-base tw-bg-[#F57C00] tw-text-white",
                  )}
                >
                  {t("tryItFree")}
                </button>
              </Link>

              <Link href={"/contact-sales"} target="_blannk">
                <button
                  className={clsx(
                    "tw-border tw-border-[#F57C00] tw-rounded-lg",
                    "tw-w-[160px] tw-h-[48px] tw-text-sm tw-font-medium",
                    "lg:tw-w-[200px] lg:tw-h-[52px] lg:tw-text-base tw-text-[#F57C00]",
                  )}
                >
                  {t("contactSale")}
                </button>
              </Link>
            </div>
          </div>
          <Image
            src={
              "https://cms-strapi.ichiba.net/uploads/Group_1171275988_1_d3f9c2bafd.png"
            }
            width={1106}
            height={973}
            alt="image"
            className={clsx(
              "tw-mx-auto",
              isVisible
                ? "tw-animate-showOn lg:tw-animate-rightShow"
                : "tw-opacity-0",
            )}
          />
        </div>
      </div>
      <div
        className={clsx(
          "tw-bg-[linear-gradient(277deg,_rgba(245,_124,_0,_0.80)_6.79%,_rgba(250,_194,_134,_0.80)_70.58%)]",
          "tw-py-4 lg:tw-py-8 tw-px-1",
        )}
      >
        <div className="tw-container tw-grid tw-grid-cols-3 tw-gap-2 lg:tw-gap-6">
          {(
            tInvoice(`banner.items`, {
              returnObjects: true,
            }) as string[]
          ).map((value: any, index: number) => (
            <div
              key={index}
              className={clsx(
                "tw-px-2 tw-py-3 tw-rounded-xl tw-shadow-[0px_0px_12px_0px_rgba(54,_50,_46,_0.08)]",
                "lg:tw-px-4 lg:tw-py-5 tw-bg-white tw-flex tw-gap-1 lg:tw-gap-3",
                isVisible ? "tw-animate-showOn" : "tw-opacity-0",
              )}
            >
              <div
                className={clsx(
                  "tw-max-w-[6px] tw-w-full tw-rounded-md tw-h-7 lg:tw-h-full",
                  index === 0
                    ? "tw-bg-[linear-gradient(0deg,_#FF7400_-0.66%,_#FFAB52_99.49%)]"
                    : index === 1
                    ? "tw-bg-[linear-gradient(180deg,_#5E79FF_13.02%,_#1D39C4_100%)]"
                    : "tw-bg-[linear-gradient(180deg,_#81F450_0%,_#2B9200_100%)]",
                )}
              ></div>
              <div>
                <p className="tw-text-lg lg:tw-text-3xl tw-font-bold tw-mb-1">
                  {value.title}
                </p>
                <p className="tw-text-xs lg:tw-text-sm tw-mb-0">
                  {value.subTitle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
