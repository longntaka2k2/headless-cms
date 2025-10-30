import { useTranslation } from "next-i18next";
import clsx from "clsx";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

const Logistics = () => {
  const { t: tWms } = useTranslation("wms");
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
      className={clsx(
        "tw-bg-[linear-gradient(335deg,_#FDE9D3_24.54%,_rgba(233,_238,_255,_0.60)_80.58%)] tw-rounded-2xl",
        "lg:tw-bg-[linear-gradient(91deg,_#B1D1F6_24.67%,_#C5C8FD_77.28%)]",
        "tw-p-5 lg:tw-p-6 tw-grid lg:tw-grid-cols-2 tw-gap-6 lg:tw-gap-20",
      )}
      ref={elementRef}
    >
      <div
        className={clsx(
          "tw-w-full tw-h-full lg:tw-bg-white lg:tw-rounded-2xl lg:tw-p-6 tw-flex tw-flex-col tw-gap-3 lg:tw-gap-6",
          isVisible
            ? "tw-animate-showOn lg:tw-animate-leftShow"
            : "tw-opacity-0",
        )}
      >
        <div className="tw-flex tw-gap-3 tw-items-center">
          <Image
            src={tWms("suitability.items.0.icon") as string}
            width={40}
            height={40}
            alt="ichiba"
            className="tw-w-6 tw-h-6 lg:tw-w-10 lg:tw-h-10"
          />
          <h3 className="tw-text-lg lg:tw-text-2xl tw-font-bold tw-mb-0 tw-text-[#00194F]">
            {tWms("suitability.items.0.title")}
          </h3>
        </div>
        <p className="tw-text-sm lg:tw-text-base tw-mb-0">
          {tWms("suitability.items.0.content")}
        </p>
        <div className="tw-grid tw-gap-2 lg:tw-gap-4">
          {(
            tWms(`suitability.items.0.list`, {
              returnObjects: true,
            }) as string[]
          ).map((content, index) => (
            <div key={index} className="tw-flex tw-gap-4 tw-items-center">
              <Image
                src="https://cms-strapi.ichiba.net/uploads/Check_color_24_e79b3ed3bc.svg"
                width={33}
                height={33}
                alt="#"
                className="tw-w-6 tw-h-6 lg:tw-w-8 lg:tw-h-8"
              />
              <p className="tw-text-sm lg:tw-text-base tw-mb-0">{content}</p>
            </div>
          ))}
        </div>
      </div>
      <Image
        src="https://cms-strapi.ichiba.net/uploads/Group_1171275972_482b80d06f.svg"
        width={495}
        height={488}
        alt="ichiba"
        className={clsx(
          "tw-mx-auto",
          isVisible
            ? "tw-animate-showOn lg:tw-animate-rightShow"
            : "tw-opacity-0",
        )}
      />
    </div>
  );
};

export default Logistics;
