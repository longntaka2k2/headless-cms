/* eslint-disable @next/next/link-passhref */
import { useTranslation } from "next-i18next";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import clsx from "clsx";

const Banner = () => {
  const { t } = useTranslation("boost-and-customer");
  const elementRef = useRef(null);
  const [isVisible, setVisible] = useState(false);
  const router = useRouter();

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
        "tw-bg-[linear-gradient(314deg,_rgba(255,_242,_228,_0.30)_4.74%,_rgba(255,_156,_61,_0.00)_93.91%)]",
        "lg:tw-bg-[#F0F5FF] tw-py-6 lg:tw-py-20 tw-px-4 tw-overflow-hidden",
        isVisible ? "tw-animate-showOn" : "tw-opacity-0",
      )}
    >
      <div className="tw-container tw-grid lg:tw-grid-cols-2 tw-gap-6 lg:tw-gap-5 lg:tw-items-center">
        <div className="tw-flex tw-flex-col tw-gap-4">
          <h1 className="tw-mb-0 tw-text-2xl lg:tw-text-5xl lg:tw-leading-[58px] xl:tw-w-[90%] tw-font-bold">
            {t("banner.heading")}
          </h1>
          <p className="tw-mb-3 tw-text-sm lg:tw-text-base xl:tw-w-[90%]">
            {t("banner.subHeading")}
          </p>
          <Link
            href={"/contact-sales"}
            target="_blank"
            className="tw-no-underline tw-px-8 tw-py-3 tw-text-white tw-text-sm tw-w-max tw-bg-brand-primary tw-rounded-lg"
          >
            {t("banner.textBtn")}
          </Link>
        </div>

        <Image
          src={
            "https://cms-strapi.ichiba.net/uploads/Group_1171276311_e7f996855d.svg"
          }
          width={627}
          height={528}
          className=""
          alt="Image"
        />
      </div>
    </div>
  );
};

export default Banner;
