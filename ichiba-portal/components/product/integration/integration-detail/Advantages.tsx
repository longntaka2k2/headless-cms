import { useTranslation } from "next-i18next";
import clsx from "clsx";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

const Advantages = ({ data }: any) => {
  const { t: tWms } = useTranslation("integration");
  const [active, setActive] = useState(0);
  const [showOn, setShowOn] = useState("");
  const elementRef = useRef(null);
  const [isVisible, setVisible] = useState(false);

  useEffect(() => {
    setShowOn("tw-opacity-0");
    const timeout = setTimeout(() => {
      setShowOn("tw-animate-showOn");
    }, 50);

    return () => clearTimeout(timeout);
  }, [active]);

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
    <div className="tw-py-6 lg:tw-py-15" ref={elementRef}>
      <div className="tw-container">
        <h2
          className={clsx(
            "tw-text-2xl lg:tw-text-4xl tw-font-bold tw-mb-6 lg:tw-mb-10 lg:tw-w-[70%]",
            isVisible ? "tw-animate-showOn" : "tw-opacity-0",
          )}
        >
          {data.heading}
        </h2>

        <div
          className={clsx(
            "tw-grid lg:tw-grid-cols-2 tw-gap-10 tw-items-center",
            isVisible ? "tw-animate-showOn" : "tw-opacity-0",
          )}
        >
          <div className="tw-grid tw-gap-2 lg:gap-4">
            {data?.items.map((value: any, index: number) => (
              <div
                className="tw-text-ic-ink-6"
                key={index}
                onClick={() => setActive(index)}
              >
                <div
                  className={clsx(
                    "tw-p-4 lg:tw-p-7 tw-cursor-pointer tw-w-full",
                    active === index
                      ? "tw-bg-white tw-border-l-4 lg:tw-border-l-[6px] tw-border-brand-primary tw-rounded-r-xl lg:tw-rounded-r-3xl tw-shadow-[0px_4px_16px_0px_rgba(0,_0,_0,_0.08)]"
                      : "",
                  )}
                >
                  <div className="tw-flex tw-gap-3 lg:tw-gap-5 tw-items-center">
                    {value?.iconActive?.data?.attributes?.url &&
                      value?.icon?.data?.attributes?.url && (
                        <img
                          src={
                            active === index
                              ? `https://cms-strapi.ichiba.net${value.iconActive.data.attributes.url}`
                              : `https://cms-strapi.ichiba.net${value.icon.data.attributes.url}`
                          }
                          alt={value.title}
                          width={32}
                          height={32}
                          className="tw-w-6 tw-h-6 lg:tw-w-8 lg:tw-h-8"
                        />
                      )}
                    <div className="tw-font-bold tw-text-base">
                      {value.content}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className={(clsx(showOn), "tw-overflow-hidden")}>
            <img
              src={`https://cms-strapi.ichiba.net${data?.items[active]?.image?.data?.attributes?.url}`}
              alt={data[active]?.content}
              width={935}
              height={700}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Advantages;
