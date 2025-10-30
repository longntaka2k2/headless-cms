import clsx from "clsx";
import { useTranslation } from "next-i18next";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

const ProductFinter = () => {
  const { t: crawler } = useTranslation("crawler");
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
        className="tw-flex tw-flex-col tw-gap-6 lg:tw-flex-row lg:tw-relative"
      >
        <div
          className={clsx(
            "lg:tw-p-15 lg:tw-absolute tw-top-0 tw-right-0 lg:tw-bg-white lg:tw-rounded-2xl lg:tw-w-[55%]",
            isVisible
              ? "tw-animate-showOn lg:tw-animate-rightShow"
              : "tw-opacity-0",
          )}
        >
          <Image
            src="https://cms-strapi.ichiba.net/uploads/Frame_1171276102_465bdf2910.svg"
            width={56}
            height={56}
            alt="#"
          />
          <h3 className="tw-text-lg lg:tw-text-2xl tw-font-bold tw-my-2">
            {crawler("empower.product.title")}
          </h3>
          <p className="tw-text-sm lg:tw-text-base tw-mb-0">
            {crawler("empower.product.content")}
          </p>
        </div>
        <div
          className={clsx(
            "tw-rounded-2xl tw-overflow-hidden tw-max-w-[734px] lg:tw-w-[65%] tw-mx-auto",
            isVisible
              ? "tw-animate-showOn lg:tw-animate-leftShow"
              : "tw-opacity-0",
          )}
        >
          <Image
            src="https://cms-strapi.ichiba.net/uploads/improve_with_actionable_insights_2_d580197116.svg"
            width={734}
            height={491}
            alt="#"
            className="tw-w-full tw-h-full"
          />
        </div>
        <div
          className={clsx(
            "tw-rounded-2xl tw-overflow-hidden tw-max-w-[446px]  lg:tw-w-[35%] tw-mt-auto tw-mx-auto",
            isVisible
              ? "tw-animate-showOn lg:tw-animate-rightShow"
              : "tw-opacity-0",
          )}
        >
          <Image
            src="https://cms-strapi.ichiba.net/uploads/Group_1171275988_32f080b651.svg"
            width={446}
            height={222}
            alt="#"
            className="tw-w-full tw-h-full"
          />
        </div>
      </div>
  );
};
export default ProductFinter;
