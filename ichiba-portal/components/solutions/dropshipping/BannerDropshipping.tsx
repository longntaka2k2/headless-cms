/* eslint-disable @next/next/link-passhref */
import { useTranslation } from "next-i18next";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import LottieRenderer from "@/components/common/lottieRenderer";
import clsx from "clsx";

const BannerDropshipping = () => {
  const { t } = useTranslation("dropshipping");
  const elementRef = useRef(null);
  const [isVisible, setVisible] = useState(false);
  const router = useRouter();
  const content = {
    mobile:
      router.locale === "en"
        ? "https://cms-strapi.ichiba.net/uploads/Moblie_EN_4db610beed.json"
        : "https://cms-strapi.ichiba.net/uploads/Moblie_VN_91811020b2.json",
    desktop:
      router.locale === "en"
        ? "https://cms-strapi.ichiba.net/uploads/web_EN_902ae23b13.json"
        : "https://cms-strapi.ichiba.net/uploads/web_VN_16e7effe94.json",
  };

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
      className="tw-bg-[url(https://cms-strapi.ichiba.net/uploads/Rectangle_7243_8054395563.png)] tw-bg-cover tw-py-6 lg:tw-py-20"
    >
      <div className="tw-container">
        <div className="tw-text-center">
          <h1 className="tw-mb-4 tw-text-2xl lg:tw-text-5xl lg:tw-leading-[58px] tw-font-bold lg:tw-w-[80%] tw-mx-auto">
            {t("bannerDropshipping.heading.0")}
            <span className="tw-text-brand-primary">
              {t("bannerDropshipping.heading.1")}
            </span>{" "}
            {t("bannerDropshipping.heading.2")}
          </h1>
          <p className="tw-mb-4 lg:tw-mb-6 tw-text-base lg:tw-w-[55%] tw-mx-auto">
            {t("bannerDropshipping.subHeading")}
          </p>
          <Link
            href={"/contact-sales"}
            target="_blank"
            className="tw-no-underline"
          >
            <div className="tw-px-8 tw-py-3 tw-text-white tw-text-sm tw-w-[170px] lg:tw-w-[200px] lg:tw-mx-auto tw-bg-brand-primary tw-rounded-lg tw-mt-4">
              {t("bannerDropshipping.contactSales")}
            </div>
          </Link>

          {/* <Image
            src="https://cms-strapi.ichiba.net/uploads/Frame_1171276071_7c48500303.svg"
            alt=""
            width={1226}
            height={628}
            className="tw-mt-8 lg:tw-mt-12"
          /> */}
          <div
            className={clsx(
              "tw-bg-white tw-mt-6 lg:tw-mt-10 tw-rounded-xl tw-shadow-xl tw-p-4 lg:tw-p-6",
              isVisible ? "tw-animate-showOn" : "tw-opacity-0",
            )}
          >
            <LottieRenderer
              path={content.mobile}
              className="tw-mx-auto xl:tw-hidden"
            />
            <LottieRenderer
              path={content.desktop}
              className="tw-mx-auto tw-hidden xl:tw-block"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerDropshipping;
