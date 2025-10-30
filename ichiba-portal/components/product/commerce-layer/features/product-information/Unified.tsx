import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import clsx from "clsx";
import { useTranslation } from "next-i18next";

const Unified = () => {
  const { t } = useTranslation("commerce-layer");
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
      className="tw-grid tw-gap-6 lg:tw-gap-10 tw-my-6 lg:tw-my-10"
      ref={elementRef}
    >
      <div className="tw-relative lg:tw-py-15 tw-px-3">
        <div
          className={clsx(
            "tw-relative tw-container tw-flex tw-flex-col lg:tw-flex-row lg:tw-gap-[100px] tw-items-center",
            "tw-border tw-border-orange-2 lg:tw-border-none tw-rounded-2xl tw-p-5 lg:tw-p-0",
          )}
        >
          <div
            className={clsx(
              isVisible
                ? "tw-animate-showOn lg:tw-animate-leftShow"
                : "tw-opacity-0",
            )}
          >
            <h3 className="tw-text-lg lg:tw-text-xl tw-font-bold tw-mb-7">
              {t("productInformation.unified.title")}
            </h3>
            <div className="tw-bg-[#F2F4F8] tw-rounded-2xl tw-py-5 tw-px-6">
              <Image
                src={t("productInformation.unified.icon") as string}
                width={60}
                height={60}
                alt={t("productInformation.unified.title")}
              />
              <p className="tw-text-sm lg:tw-text-base tw-mt-5 tw-mb-0">
                {t("productInformation.unified.content")}
              </p>
            </div>
          </div>
          <Image
            src={t("productInformation.unified.image") as string}
            width={444}
            height={258}
            alt={t("productInformation.unified.title")}
            className={clsx(
              "lg:tw-bg-white tw-rounded-2xl lg:tw-p-4",
              isVisible
                ? "tw-animate-showOn lg:tw-animate-rightShow"
                : "tw-opacity-0",
            )}
          />
          <Image
            src="https://cms-strapi.ichiba.net/uploads/Vectorr_10_36f0d6d07d.svg"
            width={764}
            height={47}
            alt="#"
            className="tw-hidden lg:tw-block tw-h-[40px] tw-absolute -tw-bottom-[98px] tw-right-[20%]"
          />
        </div>
        <div className="tw-hidden lg:tw-block tw-absolute tw-w-[35%] tw-h-full tw-rounded-l-2xl tw-right-0 tw-top-0 tw-bg-orange-2 -tw-z-1"></div>
      </div>
    </div>
  );
};

export default Unified;
