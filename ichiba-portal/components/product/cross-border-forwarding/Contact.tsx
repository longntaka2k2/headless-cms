import { useTranslation } from "next-i18next";
import Bg from "@/public/icons/crossBorder/howItWorkBg.png";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { SimpleSectionProps } from "@/components/shared/simpleSectionRenderer";
import clsx from "clsx";

export default function Contact() {
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
          "tw-py-6 lg:tw-py-15 tw-mx-4",
          isVisible ? "tw-animate-showOn" : "tw-opacity-0",
        )}
      >
        <div
          className={clsx(
            "tw-container tw-bg-[url(https://cms-strapi.ichiba.net/uploads/Frame_1171275830_f51ad3ad7f.svg)] tw-bg-cover tw-bg-no-repeat",
            "tw-rounded-2xl tw-text-white tw-px-4 tw-py-6 lg:tw-py-10 lg:tw-px-20 lg:tw-h-[328px] tw-flex tw-items-center",
          )}
        >
          <div>
            <div className="tw-font-bold tw-text-2xl lg:tw-text-3xl tw-mb-2">
              {t("contact.heading")}
            </div>
            <p className="tw-text-sm lg:tw-text-base tw-mb-8">
              {t("contact.subHeading")}
            </p>
            <Link
              target="_blank"
              href={"/contact-sales"}
              className="tw-bg-brand-primary tw-p-3 tw-text-white tw-rounded-lg tw-min-w-[200px] tw-no-underline tw-text-sm lg:tw-text-base"
            >
              {t("contact.textBtn")}
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
