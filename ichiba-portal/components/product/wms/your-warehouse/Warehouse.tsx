import { useTranslation } from "next-i18next";
import clsx from "clsx";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

const Warehouse = () => {
  const { t: tWms } = useTranslation("wms");
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
        "tw-container tw-overflow-x-scroll tw-pb-3 tw-overflow-hidden tw-my-6 lg:tw-my-20",
        isVisible ? "tw-animate-showOn" : "tw-opacity-0",
      )}
    >
      <div className="tw-relative tw-w-[350px] tw-h-[596px] tw-mx-auto lg:tw-hidden">
        <Image
          src="https://cms-strapi.ichiba.net/uploads/Group_8_1_e1da074d30.svg"
          width={360}
          height={596}
          alt="ichiba"
          className="-tw-z-1"
        />

        <div className="tw-absolute tw-top-[90px] tw-left-1 tw-py-2 tw-px-4 tw-rounded-lg tw-shadow-[-8px_4px_20px_0px_rgba(0,_0,_0,_0.16)] tw-bg-white tw-z-10">
          <h3 className="tw-text-sm tw-font-bold tw-mb-1">
            {tWms("yourWarehouse.warehouse.inbound.title")}
          </h3>
          <div className="tw-list-disc tw-grid tw-grid-cols-2 tw-gap-1">
            {(
              tWms(`yourWarehouse.warehouse.inbound.list`, {
                returnObjects: true,
              }) as string[]
            ).map((content, index) => (
              <li key={index} className="tw-text-xs">
                {content}
              </li>
            ))}
          </div>
        </div>

        <div className="tw-absolute tw-bottom-[100px] tw-right-0 tw-py-2 tw-px-4 tw-rounded-lg tw-shadow-[-8px_4px_20px_0px_rgba(0,_0,_0,_0.16)] tw-bg-white tw-z-10">
          <h3 className="tw-text-sm tw-font-bold tw-mb-1">
            {tWms("yourWarehouse.warehouse.outbound.title")}
          </h3>
          <div className="tw-list-disc">
            {(
              tWms(`yourWarehouse.warehouse.outbound.list`, {
                returnObjects: true,
              }) as string[]
            ).map((content, index) => (
              <li key={index} className="tw-text-xs">
                {content}
              </li>
            ))}
          </div>
        </div>
      </div>

      <div className="tw-relative tw-w-[1200px] tw-h-[525px] tw-mx-auto tw-hidden lg:tw-block">
        <Image
          src="https://cms-strapi.ichiba.net/uploads/Frame_1171276690_a0733002b4.svg"
          width={1200}
          height={525}
          alt="ichiba"
          className="-tw-z-1"
        />

        <div className="tw-absolute tw-top-[148px] tw-left-0 tw-py-2 tw-px-4 tw-rounded-lg tw-shadow-[-8px_4px_20px_0px_rgba(0,_0,_0,_0.16)] tw-min-w-[188px] tw-bg-white tw-z-10">
          <h3 className="tw-text-base tw-font-bold tw-mb-1">
            {tWms("yourWarehouse.warehouse.inbound.title")}
          </h3>
          <div className="tw-list-disc">
            {(
              tWms(`yourWarehouse.warehouse.inbound.list`, {
                returnObjects: true,
              }) as string[]
            ).map((content, index) => (
              <li key={index} className="tw-text-sm">
                {content}
              </li>
            ))}
          </div>
        </div>

        <div className="tw-absolute tw-top-[192px] tw-right-0 tw-py-2 tw-px-4 tw-rounded-lg tw-shadow-[-8px_4px_20px_0px_rgba(0,_0,_0,_0.16)] tw-min-w-[188px] tw-bg-white tw-z-10">
          <h3 className="tw-text-base tw-font-bold tw-mb-1">
            {tWms("yourWarehouse.warehouse.outbound.title")}
          </h3>
          <div className="tw-list-disc">
            {(
              tWms(`yourWarehouse.warehouse.outbound.list`, {
                returnObjects: true,
              }) as string[]
            ).map((content, index) => (
              <li key={index} className="tw-text-sm">
                {content}
              </li>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Warehouse;
