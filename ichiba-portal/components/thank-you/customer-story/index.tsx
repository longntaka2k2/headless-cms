import Image from "next/image";

import { useTranslation } from "next-i18next";
import clsx from "clsx";
import Link from "next/link";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ListStories from "./ListStories";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";

export default function CustomerStory() {
  const { t } = useTranslation("thank-you");
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
      className={clsx(
        "tw-relative tw-overflow-hidden",
        isVisible ? "tw-animate-showOn" : "tw-opacity-0",
      )}
    >
      <div className="tw-container tw-py-6 lg:tw-py-16 tw-px-4 xl:tw-px-0">
        <div>
          <h2 className="tw-text-2xl lg:tw-text-4xl tw-font-bold tw-mb-2 tw-text-center">
            {t("customerStories.heading")}
          </h2>
          <p className="tw-text-sm lg:tw-text-base tw-text-ic-black-5 tw-mb-6 lg:tw-mb-10 tw-text-center">
            {t("customerStories.subHeading")}
          </p>

          <ListStories />

          {/* <div className="tw-flex tw-items-center tw-justify-center tw-mt-6 lg:tw-mt-10">
            <Link
              href={"#"}
              className="tw-font-medium tw-text-sm tw-inline-block tw-rounded-lg tw-py-[14px] tw-px-8 tw-text-white tw-no-underline tw-bg-[#F57C00]"
            >
              {t("customerStories.textBtn")}
              <FontAwesomeIcon
                icon={faArrowRight}
                className="tw-pl-2 tw-w-4 tw-h-4 tw-text-white"
              />
            </Link>
          </div> */}
        </div>
      </div>

      <Image
        src={"https://cms-strapi.ichiba.net/uploads/Ellipse_518_8b6eb54d35.svg"}
        width={1920}
        height={671}
        alt="#"
        className="tw-absolute tw-bottom-0 tw-w-full tw-h-full -tw-z-1"
      />
    </div>
  );
}
