import { useTranslation } from "next-i18next";
import Bg from "@/public/icons/crossBorder/howItWorkBg.png";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { SimpleSectionProps } from "@/components/shared/simpleSectionRenderer";
import clsx from "clsx";

export default function Integration() {
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
    <>
      <div
        ref={elementRef}
        className={clsx(
          "tw-py-6 lg:tw-py-20 tw-px-4 tw-bg-[#FFFCF9]",
          isVisible ? "tw-animate-showOn" : "tw-opacity-0",
        )}
      >
        <div className="tw-container tw-grid tw-gap-6 lg:tw-gap-12">
          <h2
            className={clsx(
              "tw-text-2xl lg:tw-text-4xl tw-font-bold tw-mb-0 tw-text-center",
            )}
          >
            {t("integration.heading")}
          </h2>

          <div className="tw-grid tw-gap-4 lg:tw-gap-6">
            <div className="tw-grid lg:tw-grid-cols-3 tw-gap-4 lg:tw-gap-6">
              <div
                className={clsx(
                  "tw-flex tw-flex-col tw-gap-6 tw-border tw-border-ic-ink-2 tw-rounded-xl lg:tw-rounded-2xl",
                  "hover:tw-bg-[rgba(255,_255,_255,_0.80)] hover:tw-border-[#DDD]",
                  "hover:tw-shadow-[0px_8px_16px_0px_rgba(0,_0,_0,_0.05)] tw-overflow-hidden",
                )}
              >
                <div className="tw-pt-6 tw-px-5 lg:tw-px-6">
                  <h3 className="tw-text-base lg:tw-text-xl tw-font-bold tw-mb-2 lg:tw-mb-4">
                    {t("integration.items.0.title")}
                  </h3>
                  <p className="tw-text-sm lg:tw-text-base tw-mb-0">
                    {t("integration.items.0.subTitle")}
                  </p>
                </div>
                <Image
                  src={
                    "https://cms-strapi.ichiba.net/uploads/Frame_1171276802_3bdd1cf0f9.svg"
                  }
                  width={384}
                  height={417}
                  className="tw-object-contain tw-mt-auto"
                  alt="#"
                />
              </div>
              <div className="lg:tw-col-span-2 tw-grid tw-gap-4 lg:tw-gap-6">
                <div className="tw-grid lg:tw-grid-cols-2 tw-gap-4 lg:tw-gap-6">
                  <div
                    className={clsx(
                      "tw-flex tw-flex-col tw-gap-6 tw-border tw-border-ic-ink-2 tw-rounded-xl lg:tw-rounded-2xl",
                      "hover:tw-bg-[rgba(255,_255,_255,_0.80)] hover:tw-border-[#DDD]",
                      "hover:tw-shadow-[0px_8px_16px_0px_rgba(0,_0,_0,_0.05)] tw-overflow-hidden",
                    )}
                  >
                    <div className="tw-pt-5 lg:tw-pt-6 tw-px-5 lg:tw-px-6">
                      <h3 className="tw-text-base lg:tw-text-xl tw-font-bold tw-mb-2 lg:tw-mb-4">
                        {t("integration.items.1.title")}
                      </h3>
                      <p className="tw-text-sm lg:tw-text-base tw-mb-0">
                        {t("integration.items.1.subTitle")}
                      </p>
                    </div>
                    <Image
                      src={
                        "https://cms-strapi.ichiba.net/uploads/Image_6b21c9e8e6.svg"
                      }
                      width={359}
                      height={186}
                      className="tw-ml-auto tw-mt-auto"
                      alt="#"
                    />
                  </div>
                  <div
                    className={clsx(
                      "tw-flex tw-flex-col tw-gap-6 tw-border tw-border-ic-ink-2 tw-rounded-xl lg:tw-rounded-2xl",
                      "hover:tw-bg-[rgba(255,_255,_255,_0.80)] hover:tw-border-[#DDD]",
                      "hover:tw-shadow-[0px_8px_16px_0px_rgba(0,_0,_0,_0.05)] tw-overflow-hidden",
                    )}
                  >
                    <div className="tw-pt-5 lg:tw-pt-6 tw-px-5 lg:tw-px-6">
                      <h3 className="tw-text-base lg:tw-text-xl tw-font-bold tw-mb-2 lg:tw-mb-4">
                        {t("integration.items.2.title")}
                      </h3>
                      <p className="tw-text-sm lg:tw-text-base tw-mb-0">
                        {t("integration.items.2.subTitle")}
                      </p>
                    </div>
                    <Image
                      src={
                        "https://cms-strapi.ichiba.net/uploads/Image2_7068ff587e.svg"
                      }
                      width={384}
                      height={200}
                      className="tw-mx-auto"
                      alt="#"
                    />
                  </div>
                </div>
                <div
                  className={clsx(
                    "tw-grid lg:tw-grid-cols-2 lg:tw-items-center tw-gap-6 lg:tw-gap-15 tw-p-5 lg:tw-p-6",
                    "tw-border tw-border-ic-ink-2 tw-rounded-xl lg:tw-rounded-2xl",
                    "hover:tw-bg-[rgba(255,_255,_255,_0.80)] hover:tw-border-[#DDD]",
                    "hover:tw-shadow-[0px_8px_16px_0px_rgba(0,_0,_0,_0.05)] tw-overflow-hidden",
                  )}
                >
                  <div>
                    <h3 className="tw-text-base lg:tw-text-xl tw-font-bold tw-mb-2 lg:tw-mb-4">
                      {t("integration.items.3.title")}
                    </h3>
                    <p className="tw-text-sm lg:tw-text-base tw-mb-0">
                      {t("integration.items.3.subTitle")}
                    </p>
                  </div>
                  <Image
                    src={
                      "https://cms-strapi.ichiba.net/uploads/Image_fc50f90962.svg"
                    }
                    width={307}
                    height={234}
                    alt="#"
                  />
                </div>
              </div>
            </div>
            <div className="tw-grid lg:tw-grid-cols-2 tw-gap-4 lg:tw-gap-6">
              <div
                className={clsx(
                  "tw-flex tw-flex-col tw-gap-6 tw-border tw-border-ic-ink-2 tw-rounded-xl lg:tw-rounded-2xl",
                  "hover:tw-bg-[rgba(255,_255,_255,_0.80)] hover:tw-border-[#DDD]",
                  "hover:tw-shadow-[0px_8px_16px_0px_rgba(0,_0,_0,_0.05)] tw-overflow-hidden",
                )}
              >
                <div className="tw-pt-5 lg:tw-pt-6 tw-px-5 lg:tw-px-6">
                  <h3 className="tw-text-base lg:tw-text-xl tw-font-bold tw-mb-2 lg:tw-mb-4">
                    {t("integration.items.4.title")}
                  </h3>
                  <p className="tw-text-sm lg:tw-text-base tw-mb-0">
                    {t("integration.items.4.subTitle")}
                  </p>
                </div>
                <Image
                  src={
                    "https://cms-strapi.ichiba.net/uploads/Asset_1_1_5e473e5d93.svg"
                  }
                  width={588}
                  height={177}
                  className="tw-mt-auto"
                  alt="#"
                />
              </div>
              <div
                className={clsx(
                  "tw-flex tw-flex-col tw-gap-6 tw-border tw-border-ic-ink-2 tw-rounded-xl lg:tw-rounded-2xl",
                  "hover:tw-bg-[rgba(255,_255,_255,_0.80)] hover:tw-border-[#DDD]",
                  "hover:tw-shadow-[0px_8px_16px_0px_rgba(0,_0,_0,_0.05)] tw-overflow-hidden",
                )}
              >
                <div className="tw-pt-5 lg:tw-pt-6 tw-px-5 lg:tw-px-6">
                  <h3 className="tw-text-base lg:tw-text-xl tw-font-bold tw-mb-2 lg:tw-mb-4">
                    {t("integration.items.5.title")}
                  </h3>
                  <p className="tw-text-sm lg:tw-text-base tw-mb-0">
                    {t("integration.items.5.subTitle")}
                  </p>
                </div>
                <Image
                  src={
                    "https://cms-strapi.ichiba.net/uploads/Frame_1171276803_5fee52a563.svg"
                  }
                  width={588}
                  height={192}
                  className="tw-mt-auto"
                  alt="#"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
