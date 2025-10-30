import { useTranslation } from "next-i18next";
import clsx from "clsx";
import Image from "next/image";
import item from "@/components/layout/header/profileItem";
import { useEffect, useRef, useState } from "react";

const OurCustomers = () => {
  const { t } = useTranslation("digital-landingpage");
  const strapiDomain = "https://cms-strapi.ichiba.net";
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

  const listCustomers1 = [
    { image: "/uploads/Group0_3c260e864d.svg" },
    { image: "/uploads/artwork_79ffcebf34.svg" },
    { image: "/uploads/The_North_Face_logo_1_494c4024b1.png" },
    { image: "/uploads/logo_kickers_1_661628b0bf.png" },
    { image: "/uploads/Group0_3c260e864d.svg" },
    { image: "/uploads/Logo_6ab8b5a184.svg" },
    { image: "/uploads/artwork_79ffcebf34.svg" },
    { image: "/uploads/The_North_Face_logo_1_494c4024b1.png" },
    { image: "/uploads/Group0_3c260e864d.svg" },
    { image: "/uploads/logo_kickers_1_661628b0bf.png" },
  ];

  const listCustomers2 = [
    { image: "/uploads/artwork_79ffcebf34.svg" },
    { image: "/uploads/The_North_Face_logo_1_494c4024b1.png" },
    { image: "/uploads/surface1_89297f7f91.svg" },
    { image: "/uploads/logo_kickers_1_661628b0bf.png" },
    { image: "/uploads/Group0_3c260e864d.svg" },
    { image: "/uploads/artwork_79ffcebf34.svg" },
    { image: "/uploads/The_North_Face_logo_1_494c4024b1.png" },
    { image: "/uploads/logo_kickers_1_661628b0bf.png" },
    { image: "/uploads/Group0_3c260e864d.svg" },
  ];

  const listCustomers3 = [
    { image: "/uploads/Logo_6ab8b5a184.svg" },
    { image: "/uploads/Group0_3c260e864d.svg" },
    { image: "/uploads/The_North_Face_logo_1_494c4024b1.png" },
    { image: "/uploads/surface1_89297f7f91.svg" },
    { image: "/uploads/Logo_6ab8b5a184.svg" },
    { image: "/uploads/logo_kickers_1_661628b0bf.png" },
    { image: "/uploads/Logo_6ab8b5a184.svg" },
    { image: "/uploads/Group0_3c260e864d.svg" },
    { image: "/uploads/The_North_Face_logo_1_494c4024b1.png" },
    { image: "/uploads/surface1_89297f7f91.svg" },
    { image: "/uploads/Logo_6ab8b5a184.svg" },
    { image: "/uploads/logo_kickers_1_661628b0bf.png" },
  ];

  return (
    <section
      className="inf-slider lg:tw-flex container tw-items-center tw-justify-between tw-gap-5 tw-translate-y-[-30%] lg:tw-translate-y-[-25%]"
      ref={elementRef}
    >
      <div
        className={clsx(
          "lg:tw-w-[35%]",
          isVisible
            ? "tw-animate-showOn lg:tw-animate-leftShow"
            : "tw-opacity-0",
        )}
      >
        <div className="tw-flex tw-gap-3">
          <p className="tw-text-[#1135A8] tw-text-sm tw-mb-2 lg:tw-text-base">
            {t("ourCustomers.title")}
          </p>
          <Image
            src={`${strapiDomain}` + "/uploads/Path_cfc6a252b1.svg"}
            alt={`${strapiDomain}` + "/uploads/Path_cfc6a252b1.svg"}
            width={13}
            height={13}
            quality={100}
            className="tw-max-w-[13px] tw-max-h-[13px] lg:tw-max-w-[22px] lg:tw-max-h-[22px] tw-w-full tw-h-full"
          />
        </div>
        <p className="tw-text-2xl lg:tw-text-3xl tw-mb-5 tw-font-bold">
          {t("ourCustomers.trusted")}
          <span className="tw-text-[#F57C00]">{t("ourCustomers.number")}</span>
          {t("ourCustomers.customWith")}
        </p>
      </div>
      <div
        className={clsx(
          "slider lg:tw-w-[65%] tw-blur-l-sm tw-relative",
          isVisible
            ? "tw-animate-showOn lg:tw-animate-rightShow"
            : "tw-opacity-0",
        )}
      >
        <div className="slide-track">
          {listCustomers1.map((item: any, index: number) => (
            <>
              <div className="slide tw-mr-4">
                <div
                  className="tw-border tw-border-[#ddd] tw-rounded-2xl 
                                        tw-py-3 tw-px-3 lg:tw-py-5 lg:tw-px-6"
                >
                  <Image
                    src={`${strapiDomain}` + item.image}
                    height={100}
                    width={250}
                    alt="slide"
                  />
                </div>
              </div>
            </>
          ))}
        </div>
        <div className="slide-track">
          {listCustomers2.map((item: any, index: number) => (
            <>
              <div className="slide tw-mr-4">
                <div
                  className="tw-border tw-border-[#ddd] tw-rounded-2xl 
                                        tw-py-3 tw-px-3 lg:tw-py-5 lg:tw-px-6"
                >
                  <Image
                    src={`${strapiDomain}` + item.image}
                    height={100}
                    width={250}
                    alt="slide"
                  />
                </div>
              </div>
            </>
          ))}
        </div>
        <div className="slide-track">
          {listCustomers3.map((item: any, index: number) => (
            <>
              <div className="slide tw-mr-4">
                <div
                  className="tw-border tw-border-[#ddd] tw-rounded-2xl 
                                        tw-py-3 tw-px-3 lg:tw-py-5 lg:tw-px-6"
                >
                  <Image
                    src={`${strapiDomain}` + item.image}
                    height={100}
                    width={250}
                    alt="slide"
                  />
                </div>
              </div>
            </>
          ))}
        </div>

        <div className="tw-absolute tw-w-[15%] tw-h-full tw-left-[-5%] tw-bottom-0 tw-bg-white tw-blur-lg tw-hidden lg:tw-block"></div>
      </div>
    </section>
  );
};

export default OurCustomers;
