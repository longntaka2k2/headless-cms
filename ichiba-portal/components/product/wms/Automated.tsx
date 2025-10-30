import { useTranslation } from "next-i18next";
import Image from "next/image";
import clsx from "clsx";
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";

const Automated = () => {
  const { t: tWms } = useTranslation("wms");
  let host = typeof window !== "undefined" ? window.location.origin : "";

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
    <div className="tw-relative tw-py-6 lg:tw-py-12 tw-px-4" ref={elementRef}>
      <div className="tw-container">
        <div className={clsx(isVisible ? "tw-animate-showOn" : "tw-opacity-0")}>
          <h2 className="tw-text-2xl lg:tw-text-4xl tw-font-bold tw-mb-2 lg:tw-text-center">
            {tWms("automated.heading")}
          </h2>
          <p className="tw-text-sm lg:tw-text-base tw-mb-4 lg:tw-mb-6 lg:tw-text-center">
            {tWms("automated.subHeading")}
          </p>
          <div className="tw-flex lg:tw-justify-center tw-justify-start tw-mb-6 lg:tw-mb-10">
            <Link
              target="_blank"
              href={
                host === "https://ichiba.vn"
                  ? "https://api.ichiba.vn/account/login?redirectUrl=https://app.ichiba.net"
                  : "https://api.ichiba.net/account/login?redirectUrl=https://app.ichiba.net"
              }
              className={clsx(
                "tw-no-underline tw-px-6 tw-py-3 tw-rounded-lg tw-bg-[#F57C00] tw-border tw-border-[#F57C00] tw-text-sm lg:tw-text-base",
                "tw-text-center tw-text-white",
              )}
            >
              {tWms("automated.textBtn")}
            </Link>
          </div>
        </div>

        <div
          className={clsx(
            "tw-relative tw-w-full tw-h-full tw-group tw-cursor-pointer",
            isVisible ? "tw-animate-showOn" : "tw-opacity-0",
          )}
        >
          <Image
            src="https://cms-strapi.ichiba.net/uploads/Video_2c90fc042d.svg"
            width={832}
            height={468}
            alt="video"
            className="tw-mx-auto"
          />
          <div
            className={clsx(
              "tw-absolute tw-top-[50%] tw-translate-y-[-50%] tw-left-[50%] tw-translate-x-[-50%]",
              "tw-w-[84px] tw-h-[84px] tw-flex tw-items-center tw-justify-center group-hover:tw-opacity-80",
              "tw-bg-[rgba(255,_255,_255,_0.65)] tw-rounded-full tw-border-2 tw-border-white",
            )}
          >
            <Image
              src="https://cms-strapi.ichiba.net/uploads/Vector_8_919d84b0ff.svg"
              width={25}
              height={32}
              alt="video"
              className="tw-mx-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Automated;
