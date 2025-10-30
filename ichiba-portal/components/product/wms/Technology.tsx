import { useTranslation } from "next-i18next";
import clsx from "clsx";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

const Technology = () => {
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
    <div className="tw-container tw-pt-4 tw-pb-6 lg:tw-py-20" ref={elementRef}>
      <h2
        className={clsx(
          "tw-text-2xl lg:tw-text-4xl tw-font-bold tw-mb-8 lg:tw-mb-20 tw-text-center",
          isVisible ? "tw-animate-showOn" : "tw-opacity-0",
        )}
      >
        {tWms("technology.heading")}
      </h2>

      <div
        className={clsx(
          "tw-grid lg:tw-grid-cols-2 tw-gap-6",
          isVisible ? "tw-animate-showOn" : "tw-opacity-0",
        )}
      >
        {(
          tWms(`technology.items`, { 
            returnObjects: true,
          }) as string[]
        ).map((value: any, index) => (
          <div
            key={index}
            className="tw-py-3 lg:tw-py-0 tw-px-3 lg:tw-px-5 tw-grid tw-grid-cols-3 lg:tw-grid-cols-2 tw-items-center tw-gap-4 lg:tw-gap-6 tw-bg-[#FAF4E5] tw-rounded-2xl"
          >
            <Image
              src={value.image}
              width={257}
              height={241}
              alt={value.title}
              className="-tw-translate-y-5 tw-col-span-1"
            />
            <div className="tw-col-span-2 lg:tw-col-span-1">
              <p className="tw-text-base lg:tw-text-xl tw-font-bold tw-mb-1">
                {value.title}
              </p>
              <p className="tw-text-sm lg:tw-text-base tw-mb-0">
                {value.subTitle}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Technology;
