/* eslint-disable @next/next/link-passhref */
import { useTranslation } from "next-i18next";
import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";

export default function BuildYourCustomer() {
  const { t } = useTranslation("private-domain-traffic");
  const router = useRouter();

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
      className="tw-bg-[#FFFBF0] tw-py-7 lg:tw-py-20 tw-px-4"
    >
      <div className="tw-container tw-grid lg:tw-grid-cols-2 tw-gap-10 lg:tw-gap-[50px] lg:tw-items-center">
        <div
          className={clsx(
            "tw-flex tw-flex-col tw-gap-6",
            isVisible
              ? "tw-animate-showOn lg:tw-animate-leftShow"
              : "tw-opacity-0",
          )}
        >
          <h1 className="tw-text-2xl lg:tw-text-4xl tw-font-bold tw-leading-8 lg:tw-leading-[48px] tw-mb-0">
            {t("buildYourCustomer.heading")}
          </h1>
          <p className="tw-text-sm lg:tw-text-base tw-mb-0">
            {t("buildYourCustomer.subHeading")}
          </p>
          <Link
            href={"/contact-sales"}
            className="tw-no-underline tw-text-sm tw-text-white lg:tw-px-8 lg:tw-py-4 tw-bg-[#F57C00] tw-rounded-lg lg:tw-text-base lg:tw-gap-3 tw-w-max tw-p-3 tw-mt-6 tw-flex tw-gap-2 tw-items-center tw-whitespace-nowrap"
          >
            {t("buildYourCustomer.textBtn")}
          </Link>
        </div>
        <Image
          src={
            router.locale === "en"
              ? "https://cms-strapi.ichiba.net/uploads/Group_1171276404_b7044e1b3b.svg"
              : "https://cms-strapi.ichiba.net/uploads/Group_1171276387_1d1110cf41.svg"
          }
          width={689}
          height={530}
          className={clsx(
            isVisible
              ? "tw-animate-showOn lg:tw-animate-rightShow"
              : "tw-opacity-0",
          )}
          alt="#"
        />
      </div>
    </div>
  );
}
