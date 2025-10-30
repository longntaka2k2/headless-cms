import Image from "next/image";

import { useTranslation } from "next-i18next";
import clsx from "clsx";
import Link from "next/link";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useRef, useState } from "react";

export default function GetStarted() {
  const { t: ship4p } = useTranslation("ship4p");
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
      className="lg:tw-mt-6 tw-bg-[url('https://cms-strapi.ichiba.net/uploads/CTA_4f1a1c7a5b.svg')]"
    >
      <div className="tw-relative tw-container tw-px-4 lg:tw-px-0 tw-pt-6 tw-pb-16 lg:tw-py-[120px] tw-text-white">
        <div
          className={clsx(
            "tw-w-[80%] lg:tw-w-[50%]",
            isVisible ? "tw-animate-leftShow" : "tw-opacity-0",
          )}
        >
          <h2 className="tw-text-2xl lg:tw-text-4xl tw-font-bold tw-mb-3 lg:tw-mb-2">
            {ship4p("getStarted.heading")}
          </h2>
          <p className="tw-text-sm lg:tw-text-base tw-mb-6">
            {ship4p("getStarted.subHeading")}
          </p>
          <Link
            href={"https://org.ichiba.net"}
            target="_blank"
            rel="noreferrer noopener canonical"
            className="tw-font-medium tw-text-sm tw-inline-block tw-rounded-lg tw-py-[14px] tw-px-8 tw-text-white tw-no-underline tw-bg-[#F57C00]"
          >
            {ship4p("getStarted.textBtn")}
            <FontAwesomeIcon
              icon={faArrowRight}
              className="tw-pl-2 tw-w-4 tw-h-4 tw-text-white"
            />
          </Link>
        </div>

        <Image
          src={"https://cms-strapi.ichiba.net/uploads/staff_3_ea127d0056.png"}
          width={460}
          height={542}
          alt="#"
          className={clsx(
            "tw-absolute tw-bottom-0 tw-right-0 tw-w-[139px] tw-h-[165px] lg:tw-w-[452px] lg:tw-h-[534px]",
            isVisible ? "tw-animate-rightShow" : "tw-opacity-0",
          )}
        />
      </div>
    </div>
  );
}
