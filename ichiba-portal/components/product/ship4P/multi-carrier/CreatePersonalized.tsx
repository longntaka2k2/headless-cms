import { useTranslation } from "next-i18next";
import clsx from "clsx";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export default function CreatePersonalized() {
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
      className={clsx(isVisible ? "tw-animate-showOn" : "tw-opacity-0")}
    >
      {/* mobile */}
      <div className="lg:tw-hidden">
        <h3 className="tw-mb-2 tw-text-lg tw-font-bold">
          {ship4p("multiCarrier.createPersonalized.title")}
        </h3>
        <div className="tw-flex tw-flex-col tw-gap-2 tw-mb-3">
          {(
            ship4p(`multiCarrier.createPersonalized.contents`, {
              returnObjects: true,
            }) as string[]
          ).map((content, index) => (
            <div key={index} className="tw-flex tw-items-center tw-gap-3">
              <Image
                src={
                  "https://cms-strapi.ichiba.net/uploads/Check_color_24_8255072f2e.svg"
                }
                width={24}
                height={24}
                alt="IChiba"
                className="tw-w-4 tw-h-4"
              />
              <p className="tw-text-sm tw-mb-0">{content}</p>
            </div>
          ))}
        </div>
        <Image
          src="https://cms-strapi.ichiba.net/uploads/Group_1171276388_8dc02620ed.svg"
          width={358}
          height={213}
          alt="#"
          className="tw-mx-auto"
        />
      </div>

      {/* desktop */}
      <div className="tw-relative tw-hidden max-tw-w-[1200px] tw-h-auto tw-mx-auto lg:tw-block">
        <Image
          src="https://cms-strapi.ichiba.net/uploads/Group_1171276308_128cdd2f15.svg"
          width={1200}
          height={470}
          alt="#"
        />

        <div className="tw-absolute tw-top-0 tw-left-0 tw-w-[52%]">
          <h3 className="tw-mb-6 tw-text-2xl tw-font-bold">
            {ship4p("multiCarrier.createPersonalized.title")}
          </h3>
          <div className="tw-flex tw-flex-col tw-gap-3">
            {(
              ship4p(`multiCarrier.createPersonalized.contents`, {
                returnObjects: true,
              }) as string[]
            ).map((content, index) => (
              <div key={index} className="tw-flex tw-items-center tw-gap-4">
                <Image
                  src={
                    "https://cms-strapi.ichiba.net/uploads/Check_color_24_8255072f2e.svg"
                  }
                  width={24}
                  height={24}
                  alt="IChiba"
                  className="tw-w-6 tw-h-6"
                />
                <p className="tw-text-base tw-mb-0">{content}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
