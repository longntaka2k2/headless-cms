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
      className={clsx(
        "tw-p-0 lg:tw-p-6 tw-flex tw-flex-col lg:tw-flex-row-reverse tw-gap-6 lg:tw-gap-0",
      )}
      ref={elementRef}
    >
      <div
        className={clsx(
          "tw-w-full tw-h-full lg:tw-bg-white lg:tw-rounded-2xl lg:tw-py-6 lg:tw-px-10 tw-flex tw-flex-col tw-gap-3 lg:tw-gap-6",
          isVisible
            ? "tw-animate-showOn lg:tw-animate-rightShow"
            : "tw-opacity-0",
        )}
      >
        <div className="tw-flex tw-gap-3 tw-items-center">
          <Image
            src={tWms("suitability.items.1.icon") as string}
            width={40}
            height={40}
            alt="ichiba"
            className="tw-w-6 tw-h-6 lg:tw-w-10 lg:tw-h-10"
          />
          <h3 className="tw-text-lg lg:tw-text-2xl tw-font-bold tw-mb-0 tw-text-[#00194F]">
            {tWms("suitability.items.1.title")}
          </h3>
        </div>
        <p className="tw-text-sm lg:tw-text-base tw-mb-0">
          {tWms("suitability.items.1.content")}
        </p>
        <div className="tw-grid tw-gap-2 lg:tw-gap-4">
          {(
            tWms(`suitability.items.1.list`, {
              returnObjects: true,
            }) as string[]
          ).map((content, index) => (
            <div key={index} className="tw-flex tw-gap-4 tw-items-center">
              <Image
                src="https://cms-strapi.ichiba.net/uploads/Check_color_24_e79b3ed3bc.svg"
                width={33}
                height={33}
                alt="#"
                className="tw-w-6 tw-h-6 lg:tw-w-8 lg:tw-h-8"
              />
              <p className="tw-text-sm lg:tw-text-base tw-mb-0">{content}</p>
            </div>
          ))}
        </div>
      </div>
      <Image
        src="https://cms-strapi.ichiba.net/uploads/Left_610b37ddf5.svg"
        width={550}
        height={368}
        alt="ichiba"
        className={clsx(
          "lg:tw-pr-6 tw-mx-auto",
          isVisible
            ? "tw-animate-showOn lg:tw-animate-leftShow"
            : "tw-opacity-0",
        )}
      />
    </div>
  );
};

export default Warehouse;
