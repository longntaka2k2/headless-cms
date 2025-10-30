import { useTranslation } from "next-i18next";
import Image from "next/image";
import clsx from "clsx";
import { useEffect, useRef, useState } from "react";

export default function Management() {
  const { t } = useTranslation("invoice-and-billing");

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
        "tw-bg-[#EBF7FF] lg:tw-bg-[url('https://cms-strapi.ichiba.net/uploads/Group_1171276313_d76bebe894.png')] tw-overflow-hidden",
        "tw-rounded-xl lg:tw-rounded-3xl tw-grid lg:tw-grid-cols-2 tw-shadow-[0px_0px_20px_0px_rgba(0,_0,_0,_0.11)]",
        "tw-border-2 lg:tw-border-[3px] tw-border-white"
      )}
    >
      <div
        className={clsx(
          "tw-px-4 tw-pt-6 lg:tw-pt-12 lg:tw-pl-12 lg:tw-pr-0",
          isVisible
            ? "tw-animate-showOn lg:tw-animate-leftShow"
            : "tw-opacity-0",
        )}
      >
        <p className="tw-text-lg lg:tw-text-xl tw-font-bold tw-mb-2">
          {t("smartInvoicing.items.0.title")}
        </p>
        <div className="tw-w-[135px] tw-h-1 lg:tw-h-2 tw-rounded tw-bg-[linear-gradient(0deg,_#FF7400_-0.66%,_#FFAB52_99.49%)] tw-mb-6"></div>
        <div className="tw-flex tw-flex-col tw-gap-4">
          {(
            t(`smartInvoicing.items.0.content`, {
              returnObjects: true,
            }) as string[]
          ).map((item: any, index) => (
            <div key={index} className="tw-flex tw-gap-2 lg:tw-gap-4">
              <Image
                src={
                  "https://cms-strapi.ichiba.net/uploads/Group_1_79183829a3.svg"
                }
                width={24}
                height={24}
                className="tw-w-6 tw-h-6"
                alt="icon-check"
              />
              <p className="tw-text-sm xl:tw-text-base tw-mb-0">{item}</p>
            </div>
          ))}
        </div>
      </div>
      <Image
        src={
          "https://cms-strapi.ichiba.net/uploads/Group_1171276313_1_5ea06d36c6.png"
        }
        width={612}
        height={416}
        alt="IChiba"
        className={clsx(
          "tw-ml-auto",
          isVisible
            ? "tw-animate-showOn lg:tw-animate-rightShow"
            : "tw-opacity-0",
        )}
      />
    </div>
  );
}
