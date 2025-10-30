import { useTranslation } from "next-i18next";
import clsx from "clsx";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export default function SayGoodbye() {
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
        "tw-py-6 lg:tw-py-20 tw-px-4 tw-overflow-hidden",
        isVisible ? "tw-animate-showOn" : "tw-opacity-0",
      )}
    >
      <div className={clsx("tw-container")}>
        <h2
          className={clsx(
            "tw-text-2xl lg:tw-text-4xl tw-font-bold tw-text-center tw-mb-4 lg:tw-mb-6",
          )}
        >
          {ship4p("sayGoodbye.heading")}
        </h2>
        <p className="tw-text-base lg:tw-text-lg tw-mb-2 lg:tw-mb-4 tw-text-center">
          {ship4p("sayGoodbye.subHeading")}
        </p>

        <div className="tw-grid md:tw-grid-cols-2 lg:tw-grid-cols-3 tw-gap-6">
          {(
            ship4p(`sayGoodbye.items`, {
              returnObjects: true,
            }) as string[]
          ).map((content: any, index: number) => (
            <div
              key={index}
              className={clsx(
                "tw-flex tw-flex-col tw-items-center tw-gap-4",
                "tw-p-4 tw-bg-white tw-rounded-2xl tw-text-center",
                "tw-shadow-[0px_4px_8px_0px_rgba(0,_0,_0,_0.12)]",
              )}
            >
              <Image
                src={content.icon}
                width={40}
                height={40}
                alt="IChiba"
                className="tw-w-8 tw-h-8 lg:tw-w-10 lg:tw-h-10"
              />
              <h3 className="tw-text-base lg:tw-text-xl tw-font-bold tw-mb-0">
                {content.title}
              </h3>
              <p className="tw-text-sm lg:tw-text-base tw-mb-0">
                {content.subTitle}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
