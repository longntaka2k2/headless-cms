import clsx from "clsx";
import { useTranslation } from "next-i18next";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

const BlackList = () => {
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
      className={clsx(
        "tw-p-5 lg:tw-p-10 tw-border tw-border-ic-ink-2 tw-bg-[rgba(255,_255,_255,_0.20)] tw-rounded-2xl tw-h-max tw-mt-auto",
        isVisible ? "tw-animate-showOn lg:tw-animate-leftShow" : "tw-opacity-0",
      )}
    >
      <Image
        src="https://cms-strapi.ichiba.net/uploads/Frame_1171276156_146b21631f.svg"
        width={472}
        height={301}
        alt="#"
        className="-tw-translate-y-10 lg:-tw-translate-y-15 tw-mx-auto"
      />
      <h3 className="tw-text-lg lg:tw-text-2xl tw-font-bold tw-mb-2">
        {crawler("empower.blackList.title")}
      </h3>
      <p className="tw-text-sm lg:tw-text-base">
        {crawler("empower.blackList.content")}
      </p>
    </div>
  );
};
export default BlackList;
