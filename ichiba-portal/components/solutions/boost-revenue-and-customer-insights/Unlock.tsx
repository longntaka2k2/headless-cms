/* eslint-disable @next/next/link-passhref */
import { useTranslation } from "next-i18next";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import clsx from "clsx";

const Unlock = () => {
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
        "tw-bg-[linear-gradient(274deg,_#FDE9D3_26.95%,_rgba(233,_238,_255,_0.60)_90%)]",
        "tw-py-10 lg:tw-py-15 tw-overflow-hidden",
      )}
    >
      <div className="tw-container">
        <h2 className="tw-text-2xl lg:tw-text-[40px] tw-font-bold tw-leading-8 lg:tw-leading-[48px] tw-mb-6 lg:tw-mb-12 tw-text-center">
          {t("unlock.heading")}
        </h2>

        <div className="tw-grid lg:tw-grid-cols-6 tw-justify-center tw-gap-6">
          {(
            t(`unlock.items`, {
              returnObjects: true,
            }) as string[]
          ).map((item: any, index: number) => (
            <div
              key={index}
              className={clsx(
                "tw-bg-white tw-p-4 tw-rounded-lg",
                index >= 3 ? "lg:tw-col-span-3" : "lg:tw-col-span-2",
              )}
            >
              <Image
                src={item.imagePC}
                width={index >= 3 ? 558 : 352}
                height={218}
                alt="image"
                className={clsx(
                  "tw-hidden lg:tw-block",
                  index >= 3 ? "tw-w-[352px] lg:tw-w-full" : "",
                )}
              />
              <Image
                src={item.imageMB}
                width={352}
                height={218}
                alt="image"
                className={clsx("lg:tw-hidden")}
              />
              <h3 className="tw-text-base lg:tw-text-lg tw-font-bold tw-mt-6 tw-mb-0 tw-text-center tw-w-[320px] lg:tw-w-full tw-mx-auto">
                {item.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Unlock;
