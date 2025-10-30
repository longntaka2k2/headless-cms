import { useTranslation } from "next-i18next";
import Image from "next/image";
import clsx from "clsx";
import React, { useEffect, useRef, useState } from "react";

const Planning = () => {
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
        "tw-py-6 tw-px-4 tw-bg-white tw-rounded-2xl tw-border tw-border-ic-ink-2 tw-overflow-hidden",
        isVisible ? "tw-animate-showOn" : "tw-opacity-0",
      )}
    >
      <h4 className="tw-text-sm lg:tw-text-xl tw-font-bold tw-mb-3">
        {tWms("inventory.planning.title")}
      </h4>
      <p className="tw-text-sm lg:tw-text-base tw-mb-6 lg:tw-mb-10">
        {tWms("inventory.planning.subTitle")}
      </p>
      <div className="tw-overflow-x-scroll tw-pb-3">
        <div className="tw-relative tw-w-[303px] tw-h-[405px] tw-mx-auto lg:tw-hidden">
          <Image
            src="https://cms-strapi.ichiba.net/uploads/PROCESS_8c89eb74e1.svg"
            width={303}
            height={405}
            alt="ichiba"
          />

          <div className="tw-absolute tw-top-0 tw-right-3 tw-max-w-[170px]">
            <p className="tw-text-sm tw-font-bold tw-mb-1">
              {tWms("inventory.planning.items.0.title")}
            </p>
            <p className="tw-text-xs tw-mb-0">
              {tWms("inventory.planning.items.0.subTitle")}
            </p>
          </div>

          <div className="tw-absolute tw-top-[155px] tw-right-3 tw-max-w-[170px]">
            <p className="tw-text-sm tw-font-bold tw-mb-1">
              {tWms("inventory.planning.items.1.title")}
            </p>
            <p className="tw-text-xs tw-mb-0">
              {tWms("inventory.planning.items.1.subTitle")}
            </p>
          </div>

          <div className="tw-absolute tw-bottom-0 tw-right-3 tw-max-w-[170px]">
            <p className="tw-text-sm tw-font-bold tw-mb-1">
              {tWms("inventory.planning.items.2.title")}
            </p>
            <p className="tw-text-xs tw-mb-0">
              {tWms("inventory.planning.items.2.subTitle")}
            </p>
          </div>
        </div>

        <div className="tw-relative tw-w-[1046px] tw-h-[298px] tw-mx-auto tw-hidden lg:tw-block tw-text-center">
          <Image
            src="https://cms-strapi.ichiba.net/uploads/PROCES_Spx_e4e9ecf2aa.svg"
            width={1046}
            height={298}
            alt="ichiba"
          />
          <div className="tw-absolute tw-top-[150px] tw-left-[27px] tw-max-w-[290px]">
            <p className="lg:tw-text-base tw-font-bold tw-mb-1">
              {tWms("inventory.planning.items.0.title")}
            </p>
            <p className="lg:tw-text-sm tw-mb-0">
              {tWms("inventory.planning.items.0.subTitle")}
            </p>
          </div>

          <div className="tw-absolute tw-top-[150px] tw-left-[50%] tw-translate-x-[-50%] tw-max-w-[290px]">
            <p className="lg:tw-text-base tw-font-bold tw-mb-1">
              {tWms("inventory.planning.items.1.title")}
            </p>
            <p className="lg:tw-text-sm tw-mb-0">
              {tWms("inventory.planning.items.1.subTitle")}
            </p>
          </div>

          <div className="tw-absolute tw-top-[150px] tw-right-[27px] tw-max-w-[290px]">
            <p className="lg:tw-text-base tw-font-bold tw-mb-1">
              {tWms("inventory.planning.items.2.title")}
            </p>
            <p className="lg:tw-text-sm tw-mb-0">
              {tWms("inventory.planning.items.2.subTitle")}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Planning;
