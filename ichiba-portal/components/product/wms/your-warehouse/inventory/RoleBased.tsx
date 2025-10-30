import { useTranslation } from "next-i18next";
import Image from "next/image";
import clsx from "clsx";
import React, { useEffect, useRef, useState } from "react";

const RoleBased = () => {
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
        "tw-p-4 lg:tw-p-6 tw-bg-white tw-rounded-2xl tw-overflow-hidden",
        "tw-flex tw-flex-col tw-gap-4 lg:tw-gap-6",
        isVisible ? "tw-animate-showOn" : "tw-opacity-0",
      )}
    >
      <Image
        src="https://cms-strapi.ichiba.net/uploads/Rectangle_52692_4969a344e2.png"
        width={774}
        height={496}
        alt="ichiba"
        className="tw-h-full tw-mx-auto"
      />
      <div>
        <h4 className="tw-text-sm lg:tw-text-xl tw-font-bold tw-mb-3">
          {tWms("inventory.roleBased.title")}
        </h4>
        <div className="tw-flex tw-flex-col tw-gap-2">
          {(
            tWms(`inventory.roleBased.contents`, {
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
    </div>
  );
};

export default RoleBased;
