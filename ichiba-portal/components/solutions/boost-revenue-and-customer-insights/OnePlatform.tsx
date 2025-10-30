/* eslint-disable @next/next/link-passhref */
import { useTranslation } from "next-i18next";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import clsx from "clsx";

const OnePlatform = () => {
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
        "tw-bg-[linear-gradient(270deg,_rgba(235,_238,_250,_0.00)_0.09%,_rgba(172,_190,_255,_0.50)_131.97%)]",
        "tw-py-10 lg:tw-py-15 tw-overflow-hidden",
      )}
    >
      <div className="tw-container">
        <h2 className="tw-text-2xl lg:tw-text-[40px] tw-font-bold tw-leading-8 lg:tw-leading-[48px] tw-mb-6 lg:tw-mb-[70px] tw-text-center">
          {t("onePlatform.heading.0")}
          <br />
          <span className="tw-text-brand-primary">
            {t("onePlatform.heading.1")}
          </span>
        </h2>

        <div className="tw-grid tw-gap-6 lg:tw-gap-11">
          {(
            t(`onePlatform.items`, {
              returnObjects: true,
            }) as string[]
          ).map((item: any, index: number) => (
            <div
              key={index}
              className={clsx(
                "tw-flex tw-flex-col tw-gap-6 lg:tw-gap-10 tw-items-center",
                index % 2 === 0 ? "lg:tw-flex-row" : "lg:tw-flex-row-reverse",
              )}
            >
              <Image
                src={item.image}
                width={600}
                height={400}
                alt="image"
                className="tw-mx-auto"
              />
              <div>
                <h3 className="tw-text-base lg:tw-text-2xl tw-font-bold tw-mb-4 lg:tw-mb-6">
                  {item.title}
                </h3>
                <p className="tw-text-sm lg:tw-text-base tw-mb-0">
                  {item.content}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OnePlatform;
