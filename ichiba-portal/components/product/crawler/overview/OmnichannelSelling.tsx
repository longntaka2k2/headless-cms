/* eslint-disable @next/next/link-passhref */
import clsx from "clsx";
import { useTranslation } from "next-i18next";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

const OmnichannelSelling = () => {
  const { t: crawler } = useTranslation("crawler");
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
    <div ref={elementRef} className="tw-px-4 tw-py-6 lg:tw-py-10">
      <div className="tw-container">
        <div
          className={clsx(
            "tw-flex lg:tw-justify-center tw-mb-2",
            isVisible ? "tw-animate-showOn" : "tw-opacity-0",
          )}
        >
          <div className="tw-bg-orange-1 tw-rounded-[50px] tw-py-2 tw-px-3 tw-flex tw-gap-2 tw-items-center tw-w-max">
            <Image
              src="https://cms-strapi.ichiba.net/uploads/Logo_4f58e7dfe8.svg"
              width={25}
              height={25}
              alt="#"
            />
            <p className="tw-text-sm tw-mb-0 tw-text-brand-primary">
              {crawler("omnichannelSelling.label")}
            </p>
          </div>
        </div>
        <h2
          className={clsx(
            "tw-text-2xl lg:tw-text-4xl tw-font-bold tw-mb-6 lg:tw-text-center",
            isVisible ? "tw-animate-showOn" : "tw-opacity-0",
          )}
        >
          {crawler("omnichannelSelling.heading")}
        </h2>

        <div className="tw-relative tw-flex tw-flex-col lg:tw-flex-row tw-gap-6 lg:tw-gap-20 lg:tw-py-14 lg:tw-px-10 tw-items-center">
          <div
            className={clsx(
              isVisible
                ? "tw-animate-showOn lg:tw-animate-leftShow"
                : "tw-opacity-0",
            )}
          >
            <Image
              src="https://cms-strapi.ichiba.net/uploads/Frame_1171276102_98244ba7d9.svg"
              width={56}
              height={57}
              alt="#"
              className="tw-mb-2 lg:tw-mb-6"
            />
            <h3 className="tw-text-lg lg:tw-text-2xl tw-font-bold tw-mb-2">
              {crawler("omnichannelSelling.subHeading")}
            </h3>
            <p className="tw-text-sm lg:tw-text-base tw-mb-2">
              {crawler("omnichannelSelling.content.title")}
            </p>
            <div className="tw-list-disc tw-grid tw-gap-2 lg:tw-gap-4 tw-mb-6 lg:tw-mb-10">
              {(
                crawler(`omnichannelSelling.content.list`, {
                  returnObjects: true,
                }) as string[]
              ).map((content, index) => (
                <p
                  key={index}
                  className="tw-flex tw-gap-4 tw-items-center tw-text-sm lg:tw-text-base tw-mb-0"
                >
                  <Image
                    src="https://cms-strapi.ichiba.net/uploads/Check_color_24_9de3e666d9.svg"
                    width={24}
                    height={24}
                    alt="#"
                  />
                  {content}
                </p>
              ))}
            </div>
            <Link
              href={"/products/commerce-layer/overview"}
              target="_blank"
              className="tw-text-white"
            >
              <button className="tw-bg-[#F57C00] tw-py-3 tw-px-3 tw-w-[200px] tw-text-sm tw-font-medium tw-rounded-lg">
                {crawler("omnichannelSelling.textBtn")}
              </button>
            </Link>
          </div>
          <Image
            src="https://cms-strapi.ichiba.net/uploads/Group_1171275972_0df2eb78d2.svg"
            width={501}
            height={528}
            alt="#"
            className={clsx(
              "tw-mx-auto",
              isVisible
                ? "tw-animate-showOn lg:tw-animate-rightShow"
                : "tw-opacity-0",
            )}
          />

          <Image
            src="https://cms-strapi.ichiba.net/uploads/Group_1171275971_3d08124233.svg"
            width={768}
            height={743}
            alt="#"
            className="tw-absolute tw-right-0 tw-bottom-0 -tw-z-1"
          />
        </div>
      </div>
    </div>
  );
};
export default OmnichannelSelling;
