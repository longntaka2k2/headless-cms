import LottieRenderer from "@/components/common/lottieRenderer";
import clsx from "clsx";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";

const WhatAre = () => {
  const p = useTranslation("proxy-shopping").t;
  const router = useRouter();
  const elementRef = useRef(null);
  const [isVisible, setVisible] = useState(false);
  const content = {
    mobile:
      router.locale === "en"
        ? "https://storage.googleapis.com/ichiba-prod/cms/public/banners/Moblie_EN_Banner.json"
        : "https://storage.googleapis.com/ichiba-prod/cms/public/banners/Moblie_VN_Banner.json",
    desktop:
      router.locale === "en"
        ? "https://storage.googleapis.com/ichiba-prod/cms/public/banners/Web_EN_Banner.json"
        : "https://storage.googleapis.com/ichiba-prod/cms/public/banners/Web_VN_Banner.json",
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
    <div ref={elementRef} className="tw-py-6 tw-px-4 lg:tw-py-15 lg:tw-px-0">
      <div className="lg:tw-container">
        <div className="tw-text-sm tw-uppercase tw-text-[#666] tw-text-center lg:tw-text-lg">
          {p("whatAre.label")}
        </div>
        <h2 className="tw-text-xl tw-font-bold tw-text-center lg:tw-text-[30px] lg:tw-max-w-[900px] lg:tw-mx-auto lg:tw-mt-4">
          {p("whatAre.title")}
        </h2>

        {/* mobile */}
        <div
          className={clsx(
            "lg:tw-hidden tw-mt-5",
            isVisible ? "tw-animate-showOn" : "tw-opacity-0",
          )}
        >
          <LottieRenderer path={content.mobile} />
        </div>
        {/* desktop */}
        <div
          className={clsx(
            "tw-hidden lg:tw-block tw-mt-10",
            isVisible ? "tw-animate-showOn" : "tw-opacity-0",
          )}
        >
          <LottieRenderer path={content.desktop} />
        </div>
      </div>
    </div>
  );
};

export default WhatAre;
