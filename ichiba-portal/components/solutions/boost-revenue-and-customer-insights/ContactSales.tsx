/* eslint-disable @next/next/link-passhref */
import { useTranslation } from "next-i18next";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import clsx from "clsx";

const ContactSales = () => {
  const { t } = useTranslation("boost-and-customer");
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
        "tw-bg-white tw-py-10 lg:tw-py-15 tw-px-4",
        isVisible ? "tw-animate-showOn" : "tw-opacity-0",
      )}
    >
      <div
        className={clsx(
          "tw-container tw-bg-[url('https://cms-strapi.ichiba.net/uploads/Frame_1171275830_1_16122de338.svg')] tw-rounded-lg",
          "lg:tw-bg-[url('https://cms-strapi.ichiba.net/uploads/Frame_1171275830_2_f13627afff.svg')] lg:tw-rounded-2xl",
          "tw-bg-cover tw-bg-no-repeat tw-px-4 lg:tw-px-20 tw-py-10 lg:tw-py-15 tw-text-white tw-overflow-hidden",
        )}
      >
        <p className="tw-text-sm lg:tw-text-lg tw-font-medium tw-mb-2">
          {t("contactSales.label")}
        </p>
        <h2 className="tw-text-xl lg:tw-text-3xl tw-font-bold tw-mb-2">
          {t("contactSales.heading")}
        </h2>
        <p className="tw-text-sm lg:tw-text-base tw-mb-4 lg:tw-mb-8">
          {t("contactSales.subHeading")}
        </p>
        <Link
          href={"/contact-sales"}
          target="_blank"
          className="tw-no-underline tw-px-8 tw-py-3 tw-text-white tw-text-sm tw-w-max tw-bg-brand-primary tw-rounded-lg"
        >
          {t("contactSales.textBtn")}
        </Link>
      </div>
    </div>
  );
};

export default ContactSales;
