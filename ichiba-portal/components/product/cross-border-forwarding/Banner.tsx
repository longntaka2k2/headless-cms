import clsx from "clsx";
import { useTranslation } from "next-i18next";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

export default function Banner() {
  const { t } = useTranslation("cross-border-forwarding");
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
    <div ref={elementRef}>
      <div className="tw-py-6 lg:tw-pt-10 lg:tw-pb-14 tw-bg-cover lg:tw-bg-[url(https://cms-strapi.ichiba.net/uploads/Section_1_9087349a66.svg)]">
        <div className="container">
          <div
            className={clsx(
              "lg:tw-text-center tw-mb-6 tw-grid tw-gap-2",
              isVisible ? "tw-animate-showOn" : "tw-opacity-0",
            )}
          >
            <h1 className="lg:tw-text-center tw-font-bold tw-text-[24px] lg:tw-text-[36px] tw-mb-0">
              {t("banner.heading")}
            </h1>
            <h2 className="tw-text-xl lg:tw-text-[24px] tw-mb-0">{t("banner.title")}</h2>
           
          </div>
          <div className="tw-flex lg:tw-justify-center tw-mt-6 lg:tw-mx-auto">
            <Link
              href={"https://org.ichiba.net"}
              className={clsx(
                "hover:tw-opacity-80 tw-w-[167px] lg:tw-w-[200px] tw-rounded-lg tw-bg-[#F57C00] tw-no-underline tw-text-white text-center tw-py-3",
                isVisible
                  ? "tw-animate-showOn lg:tw-animate-leftShow"
                  : "tw-opacity-0",
              )}
              target="_blank"
            >
              {t("banner.freeTrial")}
            </Link>
          </div>
        </div>
      </div>
      <div
        className={clsx(
          "tw-py-4 lg:tw-py-[80px] tw-overflow-x-scroll scroll scroll-1 tw-flex tw-items-center",
          "lg:tw-bg-[linear-gradient(270deg,_rgba(235,_238,_250,_0.00)_0.05%,_rgba(172,_190,_255,_0.50)_99.96%)]",
          isVisible ? "tw-animate-showOn" : "tw-opacity-0",
        )}
      >
        <Image
          src={"https://cms-strapi.ichiba.net/uploads/brand_3_1_fa9f8f3e88.png"}
          alt=""
          width={560}
          height={400}
          quality={100}
          className="tw-max-w-[290px] tw-max-h-[223px] lg:tw-max-w-[520px] lg:tw-max-h-[400px] w-full tw-px-2 lg:tw-px-3"
        />
        <Image
          src={
            "https://cms-strapi.ichiba.net/uploads/Group_19795_ed49977604.png"
          }
          alt=""
          width={560}
          height={400}
          quality={100}
          className="tw-max-w-[290px] tw-max-h-[223px] lg:tw-max-w-[520px] lg:tw-max-h-[400px] tw-w-full tw-px-2 lg:tw-px-3"
        />
        <Image
          src={
            "https://cms-strapi.ichiba.net/uploads/Group_19790_d4bb45c1c8.png"
          }
          alt=""
          width={560}
          height={400}
          quality={100}
          className="tw-max-w-[290px] tw-max-h-[223px] lg:tw-max-w-[520px] lg:tw-max-h-[400px] tw-w-full tw-px-2 lg:tw-px-3"
        />
        <Image
          src={
            "https://cms-strapi.ichiba.net/uploads/Group_19794_e4d7f25922.png"
          }
          alt=""
          width={560}
          height={400}
          quality={100}
          className="tw-max-w-[290px] tw-max-h-[223px] lg:tw-max-w-[520px] lg:tw-max-h-[400px] tw-w-full tw-px-2 lg:tw-px-3"
        />
      </div>
    </div>
  );
}
