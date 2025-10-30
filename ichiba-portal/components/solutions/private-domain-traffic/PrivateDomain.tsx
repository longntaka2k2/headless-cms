/* eslint-disable @next/next/link-passhref */
import { useTranslation } from "next-i18next";
import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";
import { useEffect, useRef, useState } from "react";

export default function PrivateDomain() {
  const { t } = useTranslation("private-domain-traffic");
  const elementRef = useRef(null);
  const [isVisible, setVisible] = useState(false);

  const items = t(`privateDomain.items`, {
    returnObjects: true,
  }) as any[];

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
      className="tw-container tw-pt-15 tw-pb-10 lg:tw-pt-[150px] lg:tw-pb-[50px]"
    >
      <h2 className="tw-text-xl lg:tw-text-4xl tw-mb-10 lg:tw-mb-15 tw-font-bold tw-text-center">
        {t("privateDomain.heading.0")} <br />
        {t("privateDomain.heading.1")}
      </h2>
      <div className="tw-flex tw-flex-col tw-gap-10 lg:tw-gap-20">
        {items.map((item: any, index: number) => (
          <div
            key={index}
            className={clsx(
              "tw-flex tw-flex-col tw-items-center tw-gap-10 lg:tw-gap-15",
              index % 2 === 0 ? "lg:tw-flex-row" : "lg:tw-flex-row-reverse",
              isVisible
                ? index % 2 === 0
                  ? "tw-animate-showOn lg:tw-animate-rightShow"
                  : "tw-animate-showOn lg:tw-animate-leftShow"
                : "tw-opacity-0",
            )}
          >
            <div className="tw-flex-1 tw-flex-col">
              <div className="tw-flex tw-items-center tw-gap-5 tw-mb-4">
                <Image
                  src={item.icon}
                  width={48}
                  height={48}
                  className="tw-w-10 tw-h-10"
                  alt="#"
                />
                <h3 className="tw-text-lg lg:tw-text-2xl tw-font-bold tw-mb-0">
                  {item.title}
                </h3>
              </div>
              <p className="tw-text-sm lg:tw-text-base tw-mb-0">
                {item.subTitle}
              </p>
              <div className="tw-flex tw-flex-col tw-gap-6 tw-my-6">
                {item?.contents?.map((value: string, idx: number) => (
                  <li
                    key={idx}
                    className="tw-flex tw-gap-4 tw-items-start tw-text-sm lg:tw-text-base"
                  >
                    <Image
                      src={
                        "https://cms-strapi.ichiba.net/uploads/Group_1_e51eb6c172.svg"
                      }
                      width={24}
                      height={24}
                      className="tw-w-6 tw-h-6 tw-mt-1"
                      alt="#"
                    />
                    {value}
                  </li>
                ))}
              </div>

              {item.textBtn != "" && (
                <Link
                  href={item.link}
                  className={clsx(
                    "tw-text-center tw-no-underline tw-text-base tw-font-medium tw-bg-brand-primary tw-text-white",
                    "tw-py-[14px] tw-px-5 lg:tw-px-3 tw-w-[180px] lg:tw-w-[200px] tw-rounded-lg tw-mx-auto",
                  )}
                >
                  {item.textBtn}
                </Link>
              )}
            </div>

            <Image
              src={item.image}
              width={540}
              height={360}
              className="tw-mx-auto tw-flex-1"
              alt="#"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
