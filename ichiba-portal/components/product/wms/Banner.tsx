import { useTranslation } from "next-i18next";
import Image from "next/image";
import classes from "./Styles.module.scss";
import clsx from "clsx";
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const BannerWMS = () => {
  const { t: tWms } = useTranslation("wms");
  let host = typeof window !== "undefined" ? window.location.origin : "";
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
    <div className="tw-relative tw-pt-6 lg:tw-pt-15 tw-px-4" ref={elementRef}>
      <div
        className={clsx(
          "tw-container",
          isVisible ? "tw-animate-showOn" : "tw-opacity-0",
        )}
      >
        <div
          className={clsx(
            "tw-rounded-[40px] tw-py-1 tw-px-3 lg:tw-py-2 lg:tw-px-6 tw-text-blue-6 tw-bg-primary-1",
            "tw-text-xs lg:tw-text-base tw-w-max tw-mb-2",
          )}
        >
          {tWms("banner.label")}
        </div>
        <h1 className="lg:tw-w-[50%] tw-text-2xl lg:tw-text-5xl lg:tw-leading-[56px] tw-font-bold tw-mb-6 lg:tw-mb-10">
          {tWms("banner.heading.0")}
          <span className={clsx(classes.text__gradient__first)}>
            {tWms("banner.heading.1")}
          </span>
          {router.locale === "vi" ? <br /> : ""}
          {tWms("banner.heading.2")}
          <span className={clsx(classes.text__gradient__second)}>
            {tWms("banner.heading.3")}
          </span>
          {tWms("banner.heading.4")}
        </h1>
        <div className="tw-flex tw-justify-center tw-gap-4 lg:tw-mt-10 sm:tw-justify-start">
          <Link
            href={"/contact-sales"}
            target="_blank"
            className={clsx(
              "tw-no-underline tw-border tw-border-[#F57C00] tw-rounded-lg tw-bg-[#F57C00]",
              "tw-py-3 tw-text-sm tw-text-white tw-max-w-[170px] tw-text-center tw-w-full lg:tw-max-w-[200px]",
            )}
          >
            {tWms("textBtn.0")}
          </Link>
          <Link
            href={
              host === "https://ichiba.vn"
                ? "https://api.ichiba.vn/account/login?redirectUrl=https://app.ichiba.net"
                : "https://api.ichiba.net/account/login?redirectUrl=https://app.ichiba.net"
            }
            target="_blank"
            className={clsx(
              "tw-no-underline tw-flex tw-items-center tw-border tw-rounded-lg tw-border-[#F57C00]",
              "tw-py-3 tw-text-sm tw-text-[#F57C00] tw-gap-2 tw-max-w-[170px] lg:tw-max-w-[200px] tw-w-full tw-justify-center",
            )}
          >
            {tWms("textBtn.1")}
          </Link>
        </div>

        <div className="tw-relative tw-w-full tw-h-full -tw-z-1">
          <Image
            src="https://cms-strapi.ichiba.net/uploads/Group_1171275990_3cc7692f13.svg"
            width={1189}
            height={593}
            alt="img-banner"
            className="tw-py-4 lg:tw-py-0 tw-mx-auto lg:-tw-translate-y-6"
          />

          <div
            className={clsx(
              "tw-absolute tw-bottom-15 tw-right-0 tw-hidden",
              "lg:tw-flex tw-items-start tw-gap-4 tw-p-4 tw-rounded-lg tw-shadow-[0px_8px_16px_0px_rgba(0,_0,_0,_0.05)] tw-bg-white",
            )}
          >
            <Image
              src="https://cms-strapi.ichiba.net/uploads/Frame_1171276086_4f5bcc4ae9.svg"
              width={57}
              height={57}
              alt="icon-banner"
            />
            <p className="tw-text-sm tw-mb-0 tw-max-w-[264px]">
              {tWms("banner.content")}
            </p>
          </div>
        </div>
      </div>
      <Image
        src="https://cms-strapi.ichiba.net/uploads/Vector_76f5aadc89.svg"
        width={1345}
        height={848}
        alt="img-banner"
        className="tw-absolute tw-bottom-0 tw-right-0 -tw-z-10"
      />
      <Image
        src="https://cms-strapi.ichiba.net/uploads/Vecto_Er_4ec887379c.svg"
        width={1708}
        height={743}
        alt="img-banner"
        className="tw-absolute tw-bottom-0 tw-left-0 -tw-z-10"
      />
    </div>
  );
};

export default BannerWMS;
