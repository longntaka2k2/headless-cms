import clsx from "clsx";
import { useTranslation } from "next-i18next";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

const Suitability = () => {
  const { t: tCommerce } = useTranslation("commerce-layer");
  const [isActive, setIsActice] = useState(true);
  const [tabsTitle, setTabsTitle] = useState("compantTypes");
  const elementRef = useRef(null);
  const [isVisible, setVisible] = useState(false);

  useEffect(() => {}, []);

  const handleActive = () => {
    setIsActice(!isActive);
  };

  useEffect(() => {
    if (isActive) {
      setTabsTitle("compantTypes");
    } else {
      setTabsTitle("companyIndustries");
    }
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
  }, [isActive]);

  return (
    <div className="tw-bg-[#F0F5FF] tw-py-6 lg:tw-py-15" ref={elementRef}>
      <div className="tw-container">
        <div className={clsx(isVisible ? "tw-animate-showOn" : "tw-opacity-0")}>
          <h2 className="tw-font-bold tw-text-2xl lg:tw-text-center lg:tw-text-4xl lg:tw-leading-[48px] tw-mb-2">
            {tCommerce("suitability.heading")}
          </h2>
          <p className="tw-text-sm lg:tw-text-base tw-mb-6 tw-mx-auto lg:tw-text-center">
            {tCommerce("suitability.subHeading")}
          </p>
        </div>

        <div className="tw-flex tw-gap-5 tw-items-center tw-justify-center tw-mb-6 lg:tw-mb-10">
          <h3
            className={clsx(
              "tw-text-sm lg:tw-text-lg tw-font-bold tw-text-center",
              isActive ? "tw-text-brand-secondary" : "tw-text-ic-ink-3",
              isVisible ? "tw-animate-leftShow" : "tw-opacity-0",
            )}
          >
            {tCommerce("suitability.tabs.0")}
          </h3>
          <div
            onClick={handleActive}
            className={clsx(
              "tw-cursor-pointer hover:tw-opacity-70",
              isVisible ? "tw-animate-showOn" : "tw-opacity-0",
            )}
          >
            <Image
              src="https://cms-strapi.ichiba.net/uploads/Switch_bae66ac908.svg"
              width={98}
              height={52}
              alt="icon-switch"
              className={clsx(!isActive ? "tw-rotate-180" : "")}
            />
          </div>
          <h3
            className={clsx(
              "tw-text-sm lg:tw-text-lg tw-font-bold tw-text-center",
              isActive ? "tw-text-ic-ink-3 " : "tw-text-brand-secondary",
              isVisible ? "tw-animate-rightShow" : "tw-opacity-0",
            )}
          >
            {tCommerce("suitability.tabs.1")}
          </h3>
        </div>

        <div
          style={{
            background:
              "linear-gradient(91deg, #B1D1F6 24.67%, #C5C8FD 77.28%)",
          }}
          className="tw-p-6 tw-rounded-2xl tw-grid lg:tw-grid-cols-2"
        >
          <div
            className={clsx(
              "tw-grid gap-4 tw-bg-white tw-rounded-2xl tw-p-6",
              isVisible ? "tw-animate-leftShow" : "tw-opacity-0",
            )}
          >
            {(
              tCommerce(`suitability.${tabsTitle}.items`, {
                returnObjects: true,
              }) as string[]
            ).map((value: any, index) => (
              <>
                <div
                  key={index}
                  className={clsx(
                    "tw-flex tw-gap-4",
                    isVisible ? "tw-animate-showOn" : "tw-opacity-0",
                  )}
                >
                  <div
                    style={{
                      background:
                        "linear-gradient(207deg, #537CD7 41.34%, rgba(83, 124, 215, 0.00) 136.97%)",
                    }}
                    className="tw-min-w-[40px] tw-h-10 tw-rounded-lg tw-flex tw-items-center tw-justify-center"
                  >
                    <Image src={value.icon} width={24} height={24} alt="icon" />
                  </div>
                  <div>
                    <h3 className="tw-text-sm lg:tw-text-base tw-font-bold tw-mb-2 tw-text-brand-secondary">
                      {value.title}
                    </h3>
                    <p className="tw-text-sm lg:tw-text-base tw-mb-0">
                      {value.des}
                    </p>
                  </div>
                </div>
              </>
            ))}
          </div>
          <div className={clsx(
            "tw-w-full tw-h-full tw-p-6",
            isVisible
              ? "tw-animate-rightShow"
              : "tw-opacity-0",
          )}>
            <Image
              src={
                tCommerce(`suitability.${tabsTitle}.image`) as
                  | string
                  | StaticImport
              }
              width={577}
              height={402}
              alt="image"
              className="tw-w-full tw-h-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Suitability;
