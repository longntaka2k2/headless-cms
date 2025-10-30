import clsx from "clsx";
import { useTranslation } from "next-i18next";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

const MasterOmniChannel = () => {
  const { t: tCommerce } = useTranslation("commerce-layer");
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
      className="tw-bg-[url(https://cms-strapi.ichiba.net/uploads/Frame_1171276591_fd46674925.svg)] tw-bg-cover tw-py-6 lg:tw-py-15"
      ref={elementRef}
    >
      <div className="tw-container">
        <h2
          className={clsx(
            "tw-text-2xl lg:tw-text-4xl tw-font-bold tw-mb-10 tw-text-white lg:tw-text-center lg:tw-w-[90%] tw-mx-auto",
            isVisible ? "tw-animate-showOn" : "tw-opacity-0",
          )}
        >
          {tCommerce("masterOminichannel.heading")}
        </h2>

        <div className="tw-grid lg:tw-grid-cols-3 tw-gap-6" ref={elementRef}>
          {(
            tCommerce(`masterOminichannel.items`, {
              returnObjects: true,
            }) as string[]
          ).map((value: any, index: number) => (
            <div
              style={{ background: "rgba(255, 255, 255, 0.08)" }}
              key={index}
              className={clsx(
                "tw-rounded-2xl tw-h-full lg:tw-min-h-[248px] tw-border tw-border-[#333333] hover:tw-border-[#B1D1F6]",
                index === 4
                  ? "lg:tw-col-span-2 tw-grid lg:tw-grid-cols-2 tw-gap-6"
                  : "",
                index === 8
                  ? "lg:tw-col-span-2 tw-row-span-2 tw-grid tw-gap-6"
                  : "",
                index === 11
                  ? "lg:tw-col-span-3 tw-row-span-2 tw-grid lg:tw-grid-cols-2 lg:tw-items-center tw-gap-6"
                  : "",
              )}
            >
              <div className="tw-flex tw-gap-6 tw-p-6">
                <div
                  style={{
                    boxShadow: "0px 0px 16px 0px rgba(72, 112, 172, 0.70)",
                  }}
                  className={clsx(
                    "tw-flex tw-items-center tw-justify-center",
                    "tw-min-w-[56px] tw-h-14 lg:tw-min-w-[72px] lg:tw-h-[72px] tw-rounded-full tw-border tw-border-[rgba(225, 234, 251, 0.69)]",
                  )}
                >
                  <Image
                    src={value.icon}
                    width={40}
                    height={40}
                    alt="icon"
                    className="tw-w-7 tw-h-7 lg:tw-w-10 lg:tw-h-10"
                  />
                </div>
                <div>
                  <h3 className="tw-text-lg tw-font-bold tw-mb-2 tw-text-white">
                    {value.title}
                  </h3>
                  <p
                    style={{ color: "rgba(255, 255, 255, 0.80)" }}
                    className="tw-text-sm xl:tw-text-base tw-mb-0"
                  >
                    {value.des}
                  </p>
                </div>
              </div>
              {index === 4 && (
                <div className="tw-w-full tw-h-full">
                  <Image
                    src={
                      "https://cms-strapi.ichiba.net/uploads/Frame_1171276577_ccf238f8a4.svg"
                    }
                    width={375}
                    height={210}
                    alt="#"
                    className="tw-h-full tw-ml-auto"
                  />
                </div>
              )}
              {index === 8 && (
                <div className="tw-w-full tw-h-full">
                  <Image
                    src={
                      "https://cms-strapi.ichiba.net/uploads/Image_4e380aedb1.svg"
                    }
                    width={593}
                    height={355}
                    className="tw-mx-auto"
                    alt="IChiba"
                  />
                </div>
              )}
              {index === 11 && (
                <div className="tw-w-full tw-h-full">
                  <Image
                    src={
                      "https://cms-strapi.ichiba.net/uploads/Frame_1171276687_af0b6e6aeb.svg"
                    }
                    width={593}
                    height={355}
                    className="tw-mx-auto"
                    alt="IChiba"
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MasterOmniChannel;
