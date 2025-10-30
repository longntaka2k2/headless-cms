/* eslint-disable @next/next/link-passhref */
import { useTranslation } from "next-i18next";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import clsx from "clsx";

const Leveraging = () => {
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
        "tw-bg-white tw-pt-10 lg:tw-pt-[70px] tw-px-4 tw-overflow-hidden",
        isVisible ? "tw-animate-showOn" : "tw-opacity-0",
      )}
    >
      <div className="tw-container">
        <div className="tw-flex tw-flex-col lg:tw-flex-row lg:tw-items-center tw-gap-5 lg:tw-gap-15">
          <div className="lg:tw-w-3/5">
            <h3 className="tw-text-2xl tw-font-bold tw-mb-5 lg:tw-mb-6">
              {t("leveraging.title")}
            </h3>
            <div className="tw-flex tw-flex-col tw-gap-2 lg:tw-gap-6">
              {(
                t(`leveraging.items`, {
                  returnObjects: true,
                }) as string[]
              ).map((value: any, index: number) => (
                <div
                  key={index}
                  className={clsx(
                    "tw-flex tw-gap-2 lg:tw-gap-4 tw-items-center",
                  )}
                >
                  <Image
                    src={
                      "https://cms-strapi.ichiba.net/uploads/Times_Close_Delete_3f207183e2.svg"
                    }
                    width={24}
                    height={24}
                    alt="icon-close"
                    className={clsx("")}
                  />
                  <p className="tw-mb-0 tw-text-sm lg:tw-text-base">{value}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:tw-w-2/5">
            <Image
              src={
                "https://cms-strapi.ichiba.net/uploads/image_sad_office_girl_c5019f4c43.png"
              }
              height={588}
              width={758}
              className="tw-mx-auto tw-w-[246px] tw-h-[318px] lg:tw-w-[392px] lg:tw-h-[505px]"
              alt="Ichiba OnePlatform"
            />
          </div>
        </div>
        <div className="tw-relative tw-flex tw-flex-col lg:tw-flex-row-reverse tw-gap-5 lg:tw-gap-0 tw-pt-15 lg:tw-pt-40">
          <div className="lg:tw-w-4/6 lg:tw-pt-20">
            <p className="tw-text-sm lg:tw-text-base tw-mb-2">
              {t("leveraging.label")}
            </p>
            <h2 className="tw-text-2xl lg:tw-text-[40px] tw-font-bold tw-leading-8 lg:tw-leading-[48px] tw-mb-0">
              {t("leveraging.heading.0")}
              <span className="tw-text-brand-primary">
                {t("leveraging.heading.1")}
              </span>
              {t("leveraging.heading.2")}
              <span className="tw-text-brand-primary">
                {t("leveraging.heading.3")}
              </span>
            </h2>
          </div>
          <div className="lg:tw-w-2/6">
            <Image
              src={
                "https://cms-strapi.ichiba.net/uploads/image1_d808b4b1ec.png"
              }
              height={650}
              width={900}
              className="tw-mx-auto tw-w-[248px] tw-h-[343px] lg:tw-w-[434px] lg:tw-h-[600px]"
              alt="Ichiba OnePlatform"
            />
          </div>
          <Image
            src={"https://cms-strapi.ichiba.net/uploads/image2_3dd6210924.svg"}
            height={234}
            width={234}
            className="tw-absolute -tw-top-5 tw-right-7 lg:tw-top-5 lg:tw-right-24 tw-w-20 tw-h-20 lg:tw-h-56 lg:tw-w-56"
            alt="Ichiba OnePlatform"
          />
          <Image
            src={
              "https://cms-strapi.ichiba.net/uploads/Background_8465047c23.svg"
            }
            height={175}
            width={229}
            className="tw-absolute tw-top-[50%] tw-translate-y-[-50%] tw-right-0 lg:-tw-right-[95px] tw-w-[94px] tw-h-[44px] lg:tw-w-[255px] lg:tw-h-[118px]"
            alt="Ichiba OnePlatform"
          />
        </div>
      </div>
    </div>
  );
};

export default Leveraging;
