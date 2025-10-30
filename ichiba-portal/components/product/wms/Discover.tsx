import { useTranslation } from "next-i18next";
import clsx from "clsx";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

const Discover = () => {
  const { t: tWms } = useTranslation("wms");
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
    <div
      className="tw-py-6 lg:tw-py-15 tw-bg-[linear-gradient(270deg,_rgba(235,_238,_250,_0.00)_0.05%,_rgba(172,_190,_255,_0.50)_99.96%)]"
      ref={elementRef}
    >
      <div className="tw-container">
        <h2
          className={clsx(
            "tw-text-2xl lg:tw-text-4xl tw-font-bold tw-mb-6 lg:tw-mb-10 tw-text-center",
            isVisible ? "tw-animate-showOn" : "tw-opacity-0",
          )}
        >
          {tWms("discover.heading")}
        </h2>

        <div
          className={clsx(
            "tw-grid lg:tw-grid-cols-2 tw-gap-10 lg:tw-bg-[linear-gradient(91deg,_#B1D1F6_24.67%,_#C5C8FD_77.28%)]",
            "lg:tw-p-6 tw-rounded-2xl",
            isVisible ? "tw-animate-showOn" : "tw-opacity-0",
          )}
        >
          <div className="tw-flex tw-flex-row lg:tw-flex-col tw-gap-2 lg:gap-4 tw-overflow-x-scroll tw-w-full tw-no-scrollbar">
            {Object.values(tWms("discover.items", { returnObjects: true })).map(
              (value, index) => (
                <Link
                  href={value.link}
                  target="_blank"
                  className="tw-no-underline tw-text-ic-ink-6"
                  key={index}
                  onClick={() => setActive(index)}
                >
                  <div
                    className={clsx(
                      "tw-px-6 tw-py-3 tw-cursor-pointer tw-rounded-2xl tw-w-max lg:tw-w-full",
                      active === index ? "tw-bg-orange-1" : "tw-bg-white",
                    )}
                  >
                    <div className="tw-flex tw-gap-3 lg:tw-gap-5 tw-items-center tw-justify-between">
                      <div className="tw-flex tw-gap-3 lg:tw-gap-5 tw-items-center">
                        <Image
                          src={active === index ? value.iconActive : value.icon}
                          alt={value.title}
                          width={64}
                          height={64}
                          className="tw-w-10 tw-h-10 lg:tw-w-16 lg:tw-h-16"
                        />
                        <div className="tw-font-bold tw-text-base tw-w-max">
                          {value.title}
                        </div>
                      </div>
                      <div className="tw-hidden lg:tw-block">
                        <FontAwesomeIcon
                          icon={faAngleDown}
                          className="-tw-rotate-90"
                        />
                      </div>
                    </div>
                  </div>
                </Link>
              ),
            )}
          </div>

          <div className={(clsx(showOn), "tw-overflow-hidden")}>
            <div className="tw-w-full tw-h-full lg:tw-h-[392px] tw-mx-auto">
              <Image
                src={
                  tWms(
                    `discover.items.${
                      Object.keys(
                        tWms("discover.items", {
                          returnObjects: true,
                        }),
                      )[active]
                    }.image`,
                  ) as string
                }
                alt={tWms(
                  `discover.items.${
                    Object.keys(
                      tWms("discover.items", {
                        returnObjects: true,
                      }),
                    )[active]
                  }.title`,
                )}
                width={562}
                height={392}
                className="tw-w-full tw-h-full tw-mx-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Discover;
