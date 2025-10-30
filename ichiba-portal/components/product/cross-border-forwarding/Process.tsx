/* eslint-disable react-hooks/exhaustive-deps */
import { useTranslation } from "next-i18next";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import clsx from "clsx";

// Custom hook for cycling through values
const useCycle = (
  values: number[],
  interval: number,
  startOnVisible = false,
) => {
  const [index, setIndex] = useState(0);
  const [isActive, setIsActive] = useState(!startOnVisible);

  useEffect(() => {
    if (!isActive) return;

    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % values.length);
    }, interval);

    return () => clearInterval(timer);
  }, [isActive, interval, values.length]);

  return {
    value: values[index],
    start: () => setIsActive(true),
  };
};

export default function Process() {
  const { t } = useTranslation("cross-border-forwarding");
  const elementRef = useRef(null);
  const [isVisible, setVisible] = useState(false);
  const [active, setActive] = useState(0);

  // Using the custom hook with 3 values (0, 1, 2)
  const { value: loop, start } = useCycle([0, 1, 2], 3000, true);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            start(); // Start the cycle when component becomes visible
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

  const items = (
    t(`process.contents`, {
      returnObjects: true,
    }) as string[]
  ).map((x: any) => ({
    label: x.label as string,
    items: x.items as string[],
  }));
  
  // Add a new cycle hook for tab switching - moved after items is defined
  const { value: autoActiveTab, start: startTabCycle } = useCycle(
    Array.from({ length: items.length }, (_, i) => i),
    4000,
    true
  );
  
  // Update active state when autoActiveTab changes
  useEffect(() => {
    if (isVisible) {
      setActive(autoActiveTab);
    }
  }, [autoActiveTab, isVisible]);
  
  const [showOn, setShowOn] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            startTabCycle(); // Start the tab cycling when component becomes visible
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
  useEffect(() => {
    setShowOn("tw-opacity-0");
    const timeout = setTimeout(() => {
      setShowOn("tw-animate-showOn");
    }, 50);

    return () => clearTimeout(timeout); // Clear timeout nếu active thay đổi trước khi timeout được kích hoạt
  }, [active]);
  const renderContent = () => {
    return (
      <div
        className={clsx(
          "tw-bg-[rgba(255,_255,_255,_0.80)] tw-rounded-xl tw-p-4 lg:tw-rounded-2xl lg:tw-p-8",
          "tw-grid lg:tw-grid-cols-3 tw-gap-6 tw-relative",
          showOn,
        )}
      >
        {/* Vertical dotted lines */}
        <div className="tw-hidden lg:tw-block tw-absolute tw-left-1/3 tw-top-4 tw-bottom-4 tw-border-l tw-border-dashed tw-border-gray-300"></div>
        <div className="tw-hidden lg:tw-block tw-absolute tw-left-2/3 tw-top-4 tw-bottom-4 tw-border-l tw-border-dashed tw-border-gray-300"></div>
        
        {/* Horizontal dotted line */}
        <div className="tw-hidden lg:tw-block tw-absolute tw-left-4 tw-right-4 tw-top-1/2 tw-border-t tw-border-dashed tw-border-gray-300 tw-z-10"></div>
        
        {items[active].items.map((value: any, index: number) => (
          <div key={index} className="tw-flex tw-flex-col tw-gap-2 lg:tw-gap-3 tw-relative">
            {/* Horizontal dotted line for mobile view */}
            {index > 0 && index < items[active].items.length && (
              <div className="lg:tw-hidden tw-absolute -tw-top-3 tw-left-0 tw-right-0 tw-border-t tw-border-dashed tw-border-gray-300"></div>
            )}
            
            <div className="tw-flex lg:tw-flex-col tw-items-center lg:tw-items-start tw-gap-3 lg:tw-gap-4">
              <div
                className={clsx(
                  active === 0 ? "tw-bg-[#F0F5FF]" : "tw-bg-[#FFF7E6]",
                  "tw-flex tw-items-center tw-justify-center",
                  "tw-min-w-[32px] tw-min-h-[32px] lg:tw-min-w-[40px] lg:tw-min-h-[40px]",
                  "tw-rounded tw-text-base lg:tw-text-xl tw-font-black",
                )}
              >
                <span
                  className={
                    active === 0
                      ? "number-gradient-blue"
                      : "number-gradient-orange"
                  }
                >
                  {value.stt}
                </span>
              </div>
              <h3 className="tw-text-sm lg:tw-text-lg tw-font-bold tw-mb-0">
                {value.title}
              </h3>
            </div>
            <ul className={clsx(active === 0 ? "tw-list-disc" : "tw-pl-1")}>
              {value.subTitle.map((item: any, idx: number) => (
                <li
                  key={idx}
                  className={clsx(
                    active === 0 ? "" : "tw-flex tw-items-start tw-gap-4",
                    "tw-text-sm lg:tw-text-base",
                  )}
                >
                  {active != 0 && (
                    <Image
                      src={
                        "https://cms-strapi.ichiba.net/uploads/Group_dfd97ea7c2.svg"
                      }
                      width={24}
                      height={24}
                      className="tw-w-6 tw-h-6"
                      alt="#"
                    />
                  )}
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    );
  };
  useEffect(() => {
    renderContent();
  }, [active, renderContent]);

  return (
    <>
      <div
        ref={elementRef}
        className={clsx(
          "tw-px-4",
          isVisible ? "tw-animate-showOn" : "tw-opacity-0",
        )}
      >
        <div className="tw-container tw-p-4 lg:tw-p-15 tw-rounded-xl lg:tw-rounded-2xl tw-bg-[#E2E8FF]">
          <Image
            src={
              "https://cms-strapi.ichiba.net/uploads/Diagrams_910b64b537.svg"
            }
            width={1200}
            height={520}
            className="tw-mx-auto tw-mb-6 lg:tw-mb-12"
            alt="#"
          />
          <h2
            className={clsx(
              "tw-text-2xl lg:tw-text-4xl tw-font-bold tw-mb-4 lg:tw-mb-6 tw-text-center",
            )}
          >
            <span className="tw-text-brand-primary">
              {t(`process.headingLoop.${loop}`)}
            </span>
            {t("process.heading")}
          </h2>

          <div
            className={clsx(
              "tw-flex tw-gap-2 tw-bg-white tw-p-1 tw-rounded-[50px] tw-mb-6 lg:tw-mb-12",
              "min-[442px]:tw-w-max tw-overflow-x-scroll tw-no-scrollbar md:tw-overflow-visible tw-mx-auto",
            )}
          >
            {items.map((value: any, index: number) => (
              <div
                className={clsx(
                  active === index
                    ? "tw-bg-gradient-to-b tw-from-[#FAC286] tw-to-[#F57C00]"
                    : "",
                  "tw-rounded-[50px] tw-py-[10px] tw-px-4 tw-cursor-pointer tw-transition-colors tw-duration-500 tw-ease",
                  isVisible ? "tw-animate-showOn" : "tw-opacity-0 ",
                )}
                key={index}
                onClick={() => setActive(index)}
              >
                <p
                  className={clsx(
                    active === index ? "tw-text-white" : "",
                    "tw-line-clamp-1 tw-w-max tw-mb-0 tw-font-bold",
                    "tw-text-sm tw-leading-5 lg:tw-text-lg lg:tw-leading-6",
                  )}
                >
                  {value.label}
                </p>
              </div>
            ))}
          </div>

          {isVisible && renderContent()}
        </div>
      </div>
    </>
  );
}
