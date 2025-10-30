"use-client";

import LottieRenderer from "@/components/common/lottieRenderer";
import clsx from "clsx";
import { useTranslation } from "next-i18next";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useRef, useState } from "react";

export default function MultiChannel() {
  const { t: common } = useTranslation("common");
  const { t: commerce } = useTranslation("commerce-layer");
  const elementRef = useRef(null);
  const [isVisible, setVisible] = useState(false);
  const router = useRouter();
  const content = {
    mobile:
      router.locale === "en"
        ? "https://cms-strapi.ichiba.net/uploads/moblie_EN_76ef288e9e_60f58dc112.json"
        : "https://cms-strapi.ichiba.net/uploads/mobile_tv_f181804914_e1952ce4ad.json",
    desktop:
      router.locale === "en"
        ? "https://cms-strapi.ichiba.net/uploads/web_TA_85e6cbe451_933941aedf.json"
        : "https://cms-strapi.ichiba.net/uploads/web_tv_0567eab2f4_7e563d349d.json",
  };

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
      className="tw-container tw-flex tw-flex-col tw-items-center tw-gap-6 tw-py-6 lg:tw-py-10 lg:tw-gap-8"
      ref={elementRef}
    >
      <div className={clsx(isVisible ? "tw-animate-showOn" : "tw-opacity-0")}>
        <h2 className="tw-font-bold tw-text-2xl lg:tw-text-center lg:tw-text-4xl lg:tw-leading-[48px] tw-mb-2">
          {common("multiChannelFulfillment")}
        </h2>
        <p className="tw-text-sm lg:tw-text-base tw-mb-0 lg:tw-w-[75%] tw-mx-auto lg:tw-text-center">
          {commerce("multiChannel.des")}
        </p>
      </div>
      <Link
        href={"/solutions/order-fulfillment-by-efex"}
        target="_blank"
        className={clsx(
          "tw-text-ic-white-6 tw-py-3 tw-px-3 tw-rounded-lg tw-bg-brand-primary tw-mb-6 lg:tw-mb-8 tw-text-sm lg:tw-text-base tw-no-underline",
          isVisible ? "tw-animate-showOn" : "tw-opacity-0",
        )}
      >
        {commerce("multiChannel.textBtn")}
      </Link>
      {/* mobile */}
      <div
        className={clsx(
          "lg:tw-hidden",
          isVisible ? "tw-animate-showOn" : "tw-opacity-0",
        )}
      >
        <LottieRenderer path={content.mobile} />
      </div>
      {/* desktop */}
      <div
        className={clsx(
          "tw-hidden lg:tw-block",
          isVisible ? "tw-animate-showOn" : "tw-opacity-0",
        )}
      >
        <LottieRenderer path={content.desktop} />
      </div>
    </div>
  );
}
