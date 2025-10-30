import LottieRenderer from "@/components/common/lottieRenderer";
import clsx from "clsx";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import BoxContent from "./BoxContent";

const NotJustBuild = () => {
  const { t } = useTranslation("dropshipping");
  const router = useRouter();
  const elementRef = useRef(null);
  const [isVisible, setVisible] = useState(false);
  const content = {
    mobile:
      router.locale === "en"
        ? "https://storage.googleapis.com/ichiba-prod/cms/public/banners/Moblie_EN_Banner.json"
        : "https://storage.googleapis.com/ichiba-prod/cms/public/banners/Moblie_VN_Banner.json",
    desktop:
      router.locale === "en"
        ? "https://storage.googleapis.com/ichiba-prod/cms/public/banners/Web_EN_Banner.json"
        : "https://storage.googleapis.com/ichiba-prod/cms/public/banners/Web_VN_Banner.json",
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
    <div ref={elementRef} className="tw-container tw-py-6 lg:tw-py-15">
      <h2 className="tw-mb-0 tw-text-center tw-text-2xl lg:tw-text-4xl tw-font-bold">
        {t("notJustBuild.title.0")} <br /> {t("notJustBuild.title.1")}
      </h2>
      {/* <Image
        src="https://cms-strapi.ichiba.net/uploads/Group_1171275972_7405dce380.svg"
        alt=""
        width={1196}
        height={623}
        className="tw-mb-12 lg:tw-mb-14"
      /> */}

      {/* mobile */}
      <div
        className={clsx(
          "lg:tw-hidden tw-mt-5",
          isVisible ? "tw-animate-showOn" : "tw-opacity-0",
        )}
      >
        <LottieRenderer path={content.mobile} />
      </div>
      {/* desktop */}
      <div
        className={clsx(
          "tw-hidden lg:tw-block tw-mt-10",
          isVisible ? "tw-animate-showOn" : "tw-opacity-0",
        )}
      >
        <LottieRenderer path={content.desktop} />
      </div>

      <BoxContent />
    </div>
  );
};

export default NotJustBuild;
