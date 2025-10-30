import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import clsx from "clsx";
import { useTranslation } from "next-i18next";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

const Inbound = () => {
  const { t: tWms } = useTranslation("wms");
  const [active, setActive] = useState(0);
  const [showOn, setShowOn] = useState("");
  const elementRef = useRef(null);
  const [isVisible, setVisible] = useState(false);

  useEffect(() => {
    setShowOn("tw-opacity-0");
    const timeout = setTimeout(() => {
      setShowOn("tw-animate-showOn");
    }, 50);

    return () => clearTimeout(timeout);
  }, [active]);

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
        "tw-relative tw-overflow-hidden tw-mb-5 lg:tw-mb-20 lg:tw-bg-white tw-rounded-2xl tw-z-10",
        isVisible ? "tw-animate-showOn" : "tw-opacity-0",
      )}
    >
      <h3 className="tw-text-2xl tw-font-bold tw-mb-4 tw-hidden lg:tw-block">
        {tWms("yourWarehouse.inbound.title")}
      </h3>
      <div className="lg:tw-hidden tw-p-5 tw-border tw-border-[#B1D1F6] tw-rounded-2xl">
        <h3 className="tw-text-lg tw-font-bold tw-mb-4">
          {tWms("yourWarehouse.inbound.title")}
        </h3>
        <div className="tw-grid tw-gap-4">
          {(
            tWms(`yourWarehouse.inbound.items`, {
              returnObjects: true,
            }) as string[]
          ).map((value: any, index: number) => (
            <div
              key={index}
              onClick={() => setActive(index)}
              className="tw-grid tw-gap-4"
            >
              <div className="tw-flex tw-gap-3 tw-items-center tw-justify-between">
                <div className="tw-flex tw-gap-3 tw-items-center">
                  <Image
                    src={value.icon}
                    alt={value.title}
                    width={40}
                    height={40}
                    className="tw-w-6 tw-h-6"
                  />
                  <div className="tw-font-bold tw-text-sm">{value.title}</div>
                </div>
                <FontAwesomeIcon
                  icon={faAngleDown}
                  className={clsx(
                    "tw-transition-all tw-duration-200",
                    active === index ? "tw-rotate-180" : "tw-rotate-0",
                  )}
                />
              </div>
              <div
                className={clsx(
                  "tw-rounded-lg",
                  active === index ? "tw-animate-showdown" : "tw-hidden",
                )}
              >
                <div className="">
                  <Image
                    src={value.img}
                    alt={value.name}
                    width={540}
                    height={299}
                    className="tw-rounded-xl tw-mx-auto tw-mb-4"
                    unoptimized
                  />
                  <div className="tw-text-sm">{value.content}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="tw-hidden lg:tw-grid tw-grid-cols-2 tw-gap-10 tw-bg-white tw-border tw-border-[#B1D1F6] tw-rounded-2xl tw-px-8">
        <div className={clsx(showOn)}>
          <div className="tw-w-full tw-h-full">
            <Image
              src={tWms(`yourWarehouse.inbound.items.${active}.img`) as string}
              alt={tWms(`yourWarehouse.inbound.items.${active}.title`)}
              width={540}
              height={299}
              className="tw-w-full tw-h-full tw-mx-auto"
            />
          </div>
        </div>
        <div className="tw-grid tw-py-7">
          {(
            tWms(`yourWarehouse.inbound.items`, {
              returnObjects: true,
            }) as string[]
          ).map((value: any, index: number) => (
            <div
              key={index}
              onMouseEnter={() => setActive(index)}
              className={clsx(
                "tw-p-6 tw-cursor-pointer tw-rounded-2xl",
                active === index ? "tw-bg-orange-1" : "",
              )}
            >
              <div className="tw-flex tw-gap-3 lg:tw-gap-5 tw-items-center tw-justify-between">
                <div className="tw-flex tw-gap-3 lg:tw-gap-5 tw-items-center">
                  <Image
                    src={value.icon}
                    alt={value.title}
                    width={40}
                    height={40}
                    className="tw-w-6 tw-h-6 lg:tw-w-10 lg:tw-h-10"
                  />
                  <div className="tw-font-bold tw-text-base">{value.title}</div>
                </div>
                <FontAwesomeIcon
                  icon={faAngleDown}
                  className={clsx(
                    "tw-transition-all tw-duration-200",
                    active === index
                      ? "tw-rotate-180 tw-text-[#F57C00]"
                      : "tw-rotate-0",
                  )}
                />
              </div>
              <div
                className={clsx(
                  "tw-mt-1 !tw-duration-500",
                  active === index ? "tw-animate-fade-in" : "tw-hidden",
                )}
              >
                <div className="tw-text-sm">{value.content}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Inbound;
