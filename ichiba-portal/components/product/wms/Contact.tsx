import Image from "next/image";
import { useTranslation } from "next-i18next";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import clsx from "clsx";

const Contact = () => {
  const { t } = useTranslation("common");
  const { t: tWms } = useTranslation("wms");
  const elementRef = useRef(null);
  const [isVisible, setVisible] = useState(false);
  let host = typeof window !== "undefined" ? window.location.origin : "";

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
    <div className="tw-pt-10 tw-pb-6 lg:tw-py-15" ref={elementRef}>
      <div
        className={clsx(
          "lg:tw-container tw-relative tw-rounded-2xl tw-bg-[url(https://cms-strapi.ichiba.net/uploads/Frame_1171275830_1113054ad4.svg)] tw-bg-cover",
          "tw-mx-4 tw-py-6 tw-px-4 lg:tw-py-10 lg:tw-px-20",
          isVisible ? "tw-animate-showOn" : "tw-opacity-0",
        )}
      >
        <p className="tw-text-sm lg:tw-text-lg tw-font-medium tw-text-white tw-mb-0">
          {tWms("contact.label")}
        </p>
        <h2 className="tw-text-2xl lg:tw-text-3xl tw-font-bold tw-text-white tw-my-2 lg:tw-w-[95%]">
          {tWms("contact.heading")}
        </h2>
        <p className="tw-text-sm lg:tw-text-base tw-mb-6 lg:tw-mb-8 tw-text-white">
          {tWms("contact.subHeading")}
        </p>
        <div className="tw-flex tw-justify-center tw-gap-4 lg:tw-mt-10 sm:tw-justify-start">
          <Link
            href={
             host === "https://ichiba.vn"
                  ? "https://api.ichiba.vn/account/login?redirectUrl=https://app.ichiba.net"
                  : "https://api.ichiba.net/account/login?redirectUrl=https://app.ichiba.net"
            }
            target="_blank"
            className={clsx(
              "tw-no-underline tw-flex tw-items-center tw-border tw-rounded-lg tw-border-[#F57C00] tw-bg-[#F57C00]",
              "tw-py-3 tw-text-sm tw-text-white tw-gap-2 tw-max-w-[170px] lg:tw-max-w-[200px] tw-w-full tw-justify-center",
            )}
          >
            {tWms("textBtn.1")}
          </Link>
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
        </div>

        <Image
          src="https://cms-strapi.ichiba.net/uploads/sf_1de1f3ed7c.svg"
          width={76}
          height={78}
          alt="#"
          className="tw-absolute -tw-top-3 lg:-tw-top-7 tw-left-[30%] tw-w-8 tw-h-8 lg:tw-w-[76px] lg:tw-h-[76px]"
        />
        <Image
          src="https://cms-strapi.ichiba.net/uploads/sd_31f95a7cad.svg"
          width={114}
          height={125}
          alt="#"
          className="tw-absolute -tw-top-7 lg:-tw-top-10 tw-right-[15%] tw-w-[52px] tw-h-[59px] lg:tw-w-[114px] lg:tw-h-[125px]"
        />
        <Image
          src="https://cms-strapi.ichiba.net/uploads/fwa_a0fec339fd.svg"
          width={125}
          height={140}
          alt="#"
          className="tw-absolute -tw-bottom-7 lg:-tw-bottom-10 tw-left-[40%] tw-w-[62px] tw-h-[72px] lg:tw-w-[125px] lg:tw-h-[140px]"
        />
      </div>
    </div>
  );
};
export default Contact;
