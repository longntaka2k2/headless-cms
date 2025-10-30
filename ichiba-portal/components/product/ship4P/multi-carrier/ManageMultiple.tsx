import Image from "next/image";

import { useTranslation } from "next-i18next";
import clsx from "clsx";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";

export default function ManageMultiple() {
  const { t: ship4p } = useTranslation("ship4p");
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
        "tw-grid lg:tw-grid-cols-2 lg:tw-items-center tw-gap-6 lg:tw-gap-10 lg:tw-pl-6 lg:tw-py-6",
        "lg:tw-bg-[linear-gradient(342deg,_rgba(198,_221,_255,_0.64)_-7.69%,_rgba(255,_237,_216,_0.80)_76.08%,_rgba(255,_255,_255,_0.80)_100.06%)] tw-rounded-lg",
      )}
    >
      <div
        className={clsx(
          isVisible
            ? "tw-animate-showOn lg:tw-animate-leftShow"
            : "tw-opacity-0",
        )}
      >
        <p className="tw-text-lg lg:tw-text-xl tw-font-bold tw-mb-2">
          {ship4p("multiCarrier.manageMultiple.label")}
        </p>
        <div className="tw-w-[135px] tw-h-1 lg:tw-h-2 tw-rounded tw-bg-[linear-gradient(0deg,_#FF7400_-0.66%,_#FFAB52_99.49%)]"></div>

        <div className="tw-grid tw-gap-4 lg:tw-gap-5 tw-mt-6 lg:tw-mt-7">
          {(
            ship4p(`multiCarrier.manageMultiple.contents`, {
              returnObjects: true,
            }) as string[]
          ).map((item: any, index) => (
            <div
              key={index}
              className="tw-mx-auto tw-flex tw-items-center tw-justify-center"
            >
              <div
                className={clsx(
                  "tw-w-full tw-rounded-lg tw-bg-gradient-to-r tw-p-[2px]",
                  index === 0
                    ? "tw-from-white tw-to-[#FC7D25]"
                    : "tw-from-[#FC7D25] tw-to-white",
                )}
              >
                <div
                  className={clsx(
                    "tw-grid tw-h-full tw-w-full tw-items-center tw-justify-center tw-bg-white",
                    "tw-rounded-lg tw-p-4 lg:tw-px-7 lg:tw-py-6",
                  )}
                >
                  <p className="tw-text-base lg:tw-text-lg tw-font-bold tw-mb-2 lg:tw-mb-3">
                    {item.title}
                  </p>
                  <p className="tw-text-sm lg:tw-text-base tw-mb-0">
                    {item.subTitle}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Image
        src={
          "https://cms-strapi.ichiba.net/uploads/Group_1171275950_e0e41d973a.png"
        }
        width={896}
        height={746}
        alt="IChiba"
        className={clsx(
          "tw-mx-auto tw-hidden lg:tw-block",
          isVisible
            ? "tw-animate-showOn lg:tw-animate-rightShow"
            : "tw-opacity-0",
        )}
      />
      <Image
        src={
          "https://cms-strapi.ichiba.net/uploads/Group_1171275969_8748f3c568.svg"
        }
        width={390}
        height={242}
        alt="IChiba"
        className={clsx(
          "tw-mx-auto  lg:tw-hidden",
          isVisible
            ? "tw-animate-showOn lg:tw-animate-rightShow"
            : "tw-opacity-0",
        )}
      />
    </div>
  );
}
