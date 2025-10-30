/* eslint-disable @next/next/link-passhref */
import { useTranslation } from "next-i18next";
import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";
import { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export default function ContactSales() {
  const { t } = useTranslation("private-domain-traffic");

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
      className="tw-container tw-py-10 lg:tw-pt-44 lg:tw-pb-20 tw-bg-[#F0F5FF] lg:tw-bg-white"
    >
      <div
        className={clsx(
          "tw-relative lg:tw-max-h-[360px] tw-rounded-lg lg:tw-rounded-2xl",
          "tw-container tw-bg-[url('https://cms-strapi.ichiba.net/uploads/Group_1171276403_f30b6d9744.svg')]",
          "lg:tw-bg-[url('https://cms-strapi.ichiba.net/uploads/image_6_9d08b3f4e7.svg')] tw-bg-cover tw-bg-no-repeat",
        )}
      >
        <div
          className={clsx(
            "tw-max-w-[273px] sm:tw-max-w-[580px] tw-flex tw-flex-col tw-gap-2 lg:tw-gap-4 tw-text-white",
            "tw-pt-5 tw-pb-9 tw-pl-4 lg:tw-pl-[70px] lg:tw-py-8",
            isVisible
              ? "tw-animate-showOn lg:tw-animate-leftShow"
              : "tw-opacity-0",
          )}
        >
          <h2 className="tw-text-base lg:tw-text-4xl tw-mb-0 tw-font-bold">
            {t("contactSales.heading")}
          </h2>
          <p className="tw-text-xs lg:tw-text-base tw-mb-0 tw-w-[67%] md:tw-w-full">
            {t("contactSales.subHeading")}
          </p>
          <Link
            target="_blank"
            href={`/contact-sales`}
            className={clsx(
              "tw-no-underline tw-px-4 lg:tw-px-6 tw-py-2 lg:tw-py-3 tw-rounded-lg tw-bg-[#F57C00] tw-border tw-border-[#F57C00]",
              "tw-flex tw-items-center tw-gap-1 tw-text-center tw-text-white tw-w-max tw-text-base",
            )}
          >
            {t("contactSales.textBtn")}
            <FontAwesomeIcon
              icon={faArrowRight}
              className="tw-w-5 tw-h-2 tw-text-white"
            />
          </Link>
        </div>

        <Image
          src={"https://cms-strapi.ichiba.net/uploads/image_904_0671774650.png"}
          width={455}
          height={495}
          className={clsx(
            "tw-w-[193px] tw-h-[211px] lg:tw-w-[455px] lg:tw-h-[495px]",
            "tw-absolute tw-bottom-0 -tw-right-4 lg:tw-right-20 tw-z-0",
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
