import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import clsx from "clsx";
import { useTranslation } from "next-i18next";
import { useEffect, useState, useRef } from "react";
import Image from "next/image";
const Outbound = () => {
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

  // Tự động cập nhật active state
  useEffect(() => {
    const interval = setInterval(() => {
      setActive(
        (prevActive) =>
          (prevActive + 1) %
          Object.keys(
            tWms("yourWarehouse.outbound.items", { returnObjects: true }),
          ).length,
      );
    }, 5000); // Thay đổi thời gian chuyển đổi tại đây (5000ms = 5 giây)

    return () => clearInterval(interval);
  }, []);

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
        "tw-relative tw-overflow-hidden tw-border tw-border-[#B1D1F6] tw-rounded-2xl tw-p-5 lg:tw-py-6 lg:tw-px-10 lg:tw-bg-white tw-z-10",
        isVisible ? "tw-animate-showOn" : "tw-opacity-0",
      )}
    >
      <h3 className="tw-text-lg lg:tw-text-2xl tw-font-bold tw-mb-4">
        {tWms("yourWarehouse.outbound.title")}
      </h3>
      <div className="lg:tw-hidden">
        <div className="tw-grid tw-gap-4">
          {(
            tWms(`yourWarehouse.outbound.items`, {
              returnObjects: true,
            }) as string[]
          ).map((value: any, index: number) => (
            <div
              key={index}
              onClick={() => setActive(index)}
              className="tw-grid tw-gap-4"
            >
              <div className="tw-flex tw-gap-3 tw-items-center tw-justify-between">
                <div className="tw-font-bold tw-text-sm">{value.title}</div>
                <FontAwesomeIcon
                  icon={faAngleDown}
                  className={clsx(
                    "tw-transition-all tw-duration-200",
                    active === index ? "tw-rotate-180" : "tw-rotate-0",
                  )}
                />
              </div>
              <div
                className={clsx(
                  "tw-rounded-lg",
                  active === index ? "tw-animate-showdown" : "tw-hidden",
                )}
              >
                <Image
                  src={value.img}
                  alt={value.name}
                  width={540}
                  height={299}
                  className="tw-rounded-xl tw-mx-auto tw-mb-4"
                  unoptimized
                />
                <div className="tw-text-sm">{value.content}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="tw-hidden lg:tw-grid tw-grid-cols-2 tw-gap-10 tw-bg-white">
        <div className="tw-grid">
          {Object.values(
            tWms("yourWarehouse.outbound.items", { returnObjects: true }),
          ).map((value, index) => (
            <div key={index} onClick={() => setActive(index)}>
              <div
                className={clsx(
                  "tw-p-6 tw-cursor-pointer tw-rounded-2xl",
                  active === index ? "tw-bg-orange-1" : "",
                )}
              >
                <div className="tw-flex tw-gap-3 lg:tw-gap-5 tw-items-center tw-justify-between">
                  <div className="tw-font-bold tw-text-base">{value.title}</div>
                  <FontAwesomeIcon
                    icon={faAngleDown}
                    className="-tw-rotate-90"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className={clsx(showOn)}>
          <div className="tw-w-full tw-h-full">
            <Image
              src={
                tWms(
                  `yourWarehouse.outbound.items.${
                    Object.keys(
                      tWms("yourWarehouse.outbound.items", {
                        returnObjects: true,
                      }),
                    )[active]
                  }.img`,
                ) as string
              }
              alt={tWms(
                `yourWarehouse.outbound.items.${
                  Object.keys(
                    tWms("yourWarehouse.outbound.items", {
                      returnObjects: true,
                    }),
                  )[active]
                }.title`,
              )}
              width={540}
              height={299}
              className="tw-mx-auto"
            />
            <div className="tw-text-sm tw-mt-3">
              {tWms(
                `yourWarehouse.outbound.items.${
                  Object.keys(
                    tWms("yourWarehouse.outbound.items", {
                      returnObjects: true,
                    }),
                  )[active]
                }.content`,
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Outbound;
