import { useTranslation } from "next-i18next";
import Bg from "@/public/icons/crossBorder/howItWorkBg.png";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";

export default function BeforeAfter() {
  const { t } = useTranslation("cross-border-forwarding");
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
    <>
      <div
        ref={elementRef}
        className={clsx(
          "tw-py-6 lg:tw-py-20 tw-px-4",
          isVisible ? "tw-animate-showOn" : "tw-opacity-0",
        )}
      >
        <div className="tw-container tw-relative tw-grid lg:tw-grid-cols-2 lg:tw-items-center tw-gap-24 lg:tw-gap-[104px]">
          {(
            t(`beforeAfter`, {
              returnObjects: true,
            }) as string[]
          ).map((value: any, index: number) => (
            <div
              key={index}
              className={clsx(
                "tw-relative tw-border tw-rounded-2xl",
                index === 0
                  ? "tw-border-ic-ink-2 tw-bg-[#F9F9F9]"
                  : "tw-border-[#B1D1F6] tw-bg-white",
              )}
            >
              <div className="tw-pt-10 tw-px-6 tw-pb-4 lg:tw-pt-15 lg:tw-px-10 lg:tw-pb-6">
                <div
                  className={clsx(
                    "tw-flex tw-items-center",
                    "tw-absolute -tw-top-5 lg:tw-top-[-27px] tw-left-[50%] tw-translate-x-[-50%]",
                  )}
                >
                  <Image
                    src={
                      index === 0
                        ? "https://cms-strapi.ichiba.net/uploads/Group_531fe0d509.svg"
                        : "https://cms-strapi.ichiba.net/uploads/Objects_3b6fe655a5.svg"
                    }
                    width={54}
                    height={54}
                    className="tw-w-10 tw-h-10 lg:tw-w-[54px] lg:tw-h-[54px] tw-translate-x-4"
                    alt="icon"
                  />
                  <div
                    className={clsx(
                      "tw-w-max tw-px-8 tw-py-1 lg:tw-py-2 lg:tw-px-10 tw-rounded-lg",
                      "tw-text-base lg:tw-text-lg tw-text-brand-primary tw-font-bold tw-mb-0",
                      index === 0 ? "tw-bg-[#F0EEEE]" : "tw-bg-[#E6F3FF]",
                    )}
                  >
                    {value.label}
                  </div>
                </div>

                <h3
                  className={clsx(
                    "tw-text-lg lg:tw-text-xl tw-font-bold tw-mb-0 text-center",
                    index === 0 ? "tw-text-ic-ink-5" : "tw-text-ic-ink-6",
                  )}
                >
                  {value.title}
                </h3>
                <hr className="tw-mb-0" />
              </div>
              <div className="tw-grid tw-gap-6 tw-pt-4 tw-px-4 tw-pb-6 lg:tw-pt-6 lg:tw-px-10 lg:tw-pb-12">
                {value.contents.map((content: any, idx: number) => (
                  <div
                    key={idx}
                    className="tw-flex tw-items-start tw-gap-3 lg:tw-gap-4"
                  >
                    <Image
                      src={
                        index === 0
                          ? "https://cms-strapi.ichiba.net/uploads/Times_Close_Delete_962701edf1.svg"
                          : "https://cms-strapi.ichiba.net/uploads/Group_65326651bd.svg"
                      }
                      width={24}
                      height={24}
                      className="tw-w-6 tw-h-6"
                      alt="icon"
                    />
                    <p
                      className={clsx(
                        "tw-text-sm lg:tw-text-base tw-mb-0",
                        index === 0 ? "tw-text-ic-ink-5" : "tw-text-ic-ink-6",
                      )}
                    >
                      {content}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}

          <Image
            src={"https://cms-strapi.ichiba.net/uploads/Arrow_07481fc6c2.svg"}
            width={42}
            height={42}
            className={clsx(
              "tw-w-10 tw-h-10 lg:tw-w-[42px] lg:tw-h-[42px]",
              "tw-absolute tw-top-[50%] tw-translate-y-[-50%] tw-left-[50%] tw-translate-x-[-50%]",
            )}
            alt="#"
          />
        </div>
      </div>
    </>
  );
}
