import { useTranslation } from "next-i18next";
import Image from "next/image";
import clsx from "clsx";
import React, { useEffect, useRef, useState } from "react";

const MultiUnit = () => {
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
        "tw-px-3 lg:tw-px-0 tw-py-4 lg:tw-py-0 tw-bg-white tw-rounded-2xl tw-overflow-hidden",
        "tw-flex tw-flex-col lg:tw-flex-row tw-gap-8 lg:tw-gap-5",
        isVisible ? "tw-animate-showOn" : "tw-opacity-0",
      )}
    >
      <div className="lg:tw-px-10 lg:tw-py-6">
        <h4 className="tw-text-sm lg:tw-text-xl tw-font-bold tw-mb-3">
          {tWms("inventory.multiUnit.title")}
        </h4>
        <div className="tw-flex tw-flex-col tw-gap-2">
          {(
            tWms(`inventory.multiUnit.contents`, {
              returnObjects: true,
            }) as string[]
          ).map((value: any, index: number) => (
            <div key={index} className="tw-flex tw-items-center tw-gap-3">
              <Image
                src={
                  "https://cms-strapi.ichiba.net/uploads/Group_85645f8d9b.svg"
                }
                width={14}
                height={10}
                alt="IChiba"
                className="tw-w-3 tw-h-3 lg:tw-w-4 lg:tw-h-4"
              />
              <p className="tw-text-sm lg:tw-text-base tw-mb-0">{value}</p>
            </div>
          ))}
        </div>
      </div>
      <Image
        src="https://cms-strapi.ichiba.net/uploads/Group_1171276380_8d816f5f68.svg"
        width={479}
        height={297}
        alt="ichiba"
        className="tw-h-full tw-hidden lg:tw-block"
      />
      <Image
        src="https://cms-strapi.ichiba.net/uploads/Group_1171276378_f4d53235e9.svg"
        width={348}
        height={289}
        alt="ichiba"
        className="tw-mx-auto tw-h-full lg:tw-hidden"
      />
    </div>
  );
};

export default MultiUnit;
