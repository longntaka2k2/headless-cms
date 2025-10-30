import { useTranslation } from "next-i18next";
import clsx from "clsx";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export default function MyCarrier() {
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
        "tw-flex tw-flex-col lg:tw-flex-row-reverse lg:tw-items-center tw-gap-6 lg:tw-gap-12",
        isVisible ? "tw-animate-showOn" : "tw-opacity-0",
      )}
    >
      <div className="lg:tw-w-3/5">
        <h3 className="tw-mb-6 tw-text-lg lg:tw-text-2xl tw-font-bold">
          {ship4p("multiCarrier.myCarrier.title")}
        </h3>
        <div className="tw-flex tw-flex-col tw-gap-2 tw-mb-3">
          {(
            ship4p(`multiCarrier.myCarrier.contents`, {
              returnObjects: true,
            }) as string[]
          ).map((content, index) => (
            <div
              key={index}
              className={clsx(
                "tw-flex tw-items-center tw-gap-3 tw-p-4 lg:tw-pl-10 lg:tw-pr-6 lg:tw-py-5 tw-rounded tw-cursor-pointer",
                "hover:tw-bg-[#F3F7FE] hover:tw-shadow-[0px_8px_16px_0px_rgba(0,_0,_0,_0.05)] tw-transition-all tw-duration-200",
              )}
            >
              <Image
                src={
                  "https://cms-strapi.ichiba.net/uploads/Check_color_24_8255072f2e.svg"
                }
                width={24}
                height={24}
                alt="IChiba"
                className="tw-w-4 tw-h-4 lg:tw-w-6 lg:tw-h-6"
              />
              <p className="tw-text-sm lg:tw-text-base tw-mb-0">{content}</p>
            </div>
          ))}
        </div>
      </div>
      <Image
        src="https://cms-strapi.ichiba.net/uploads/Illus_00f3958292.svg"
        width={515}
        height={361}
        alt="#"
        className="tw-mx-auto lg:tw-w-2/5"
      />
    </div>
  );
}
