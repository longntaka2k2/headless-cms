import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import clsx from "clsx";
import { useTranslation } from "next-i18next";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const Flexible = () => {
  const b = useTranslation("invoice-and-billing").t;
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
      ref={elementRef}
      className={clsx(
        "tw-container tw-px-4 tw-py-6 tw-relative lg:tw-pt-[60px] lg:tw-pb-[80px] tw-overflow-hidden",
        isVisible ? "tw-animate-showOn" : "tw-opacity-0",
      )}
    >
      <h1 className="tw-font-bold tw-text-xl tw-leading-7 lg:tw-text-[40px] lg:tw-leading-[48px] tw-mb-6 lg:tw-mb-10 tw-text-center">
        <span className="tw-text-brand-primary">{b("flexible.heading.0")}</span>
        {b("flexible.heading.1")}
        <br />
        {b("flexible.heading.2")}
      </h1>
      <div className="lg:tw-hidden tw-grid tw-gap-4 tw-mt-4">
        {(
          b(`flexible.items`, {
            returnObjects: true,
          }) as string[]
        ).map((value: any, index: number) => (
          <div key={index} onClick={() => setActive(index)}>
            <div
              className={clsx(
                "tw-px-5 tw-py-4 tw-rounded-xl",
                active === index
                  ? "tw-shadow-[0px_0px_8px_0px_rgba(0,_0,_0,_0.24)]"
                  : "tw-bg-[#FFF9ED]",
              )}
            >
              <div className="tw-flex tw-justify-between">
                <div className="tw-font-bold tw-flex tw-items-center tw-gap-3">
                  <Image
                    src={value.brand}
                    alt={value.title}
                    width={24}
                    height={24}
                  />
                  <span className="tw-text-lg">{value.title}</span>
                </div>
                <div
                  className={clsx(
                    "tw-min-w-[40px] tw-h-10 tw-flex tw-items-center tw-justify-center tw-rounded-full tw-bg-[#FFE7BA]",
                    active === index ? "tw-hidden" : "tw-block",
                  )}
                >
                  <FontAwesomeIcon
                    icon={faAngleDown}
                    className={clsx(
                      "tw-transition-all tw-duration-200",
                      active === index
                        ? "tw-rotate-180 tw-text-[#F57C00]"
                        : "tw-rotate-0",
                    )}
                  />
                </div>
              </div>
              <div
                className={clsx(
                  "tw-mt-6 !tw-duration-500 tw-grid tw-gap-4",
                  active === index ? "tw-animate-fade-in" : "tw-hidden",
                )}
              >
                {value.content.map((item: any, index: number) => (
                  <div key={index} className="tw-flex tw-gap-3">
                    <Image
                      src={
                        "https://cms-strapi.ichiba.net/uploads/Group_1_79183829a3.svg"
                      }
                      width={24}
                      height={24}
                      className="tw-w-6 tw-h-6"
                      alt="icon-check"
                    />
                    <span className="tw-text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div
              className={clsx(
                active === index ? "tw-animate-showdown" : "tw-hidden",
              )}
            >
              <Image
                src={value.img}
                alt={value.title}
                width={334}
                height={334}
                className="tw-mt-4 tw-rounded-xl tw-shadow-[0px_0px_13.182px_0px_#FBDCB4] tw-mx-auto"
              />
            </div>
          </div>
        ))}
      </div>

      <div className="tw-hidden lg:tw-grid tw-grid-cols-2 tw-gap-10 lg:tw-container">
        <div className="tw-grid tw-gap-6">
          {(
            b(`flexible.items`, {
              returnObjects: true,
            }) as string[]
          ).map((value: any, index: number) => (
            <div key={index} onClick={() => setActive(index)}>
              <div
                className={clsx(
                  "tw-py-6 tw-px-5 tw-cursor-pointer",
                  active === index
                    ? "tw-rounded-2xl tw-bg-white tw-shadow-[0px_0px_8px_0px_rgba(0,_0,_0,_0.24)]"
                    : "tw-rounded-xl tw-bg-[#FFF9ED]",
                )}
              >
                <div className="tw-flex tw-items-center tw-justify-between">
                  <div className="tw-font-bold tw-text-xl tw-flex tw-items-center tw-gap-4">
                    <Image
                      src={value.brand}
                      alt={value.title}
                      width={35}
                      height={35}
                    />
                    {value.title}
                  </div>
                  <div
                    className={clsx(
                      "tw-w-10 tw-h-10 tw-flex tw-items-center tw-justify-center tw-rounded-full tw-bg-[#FFE7BA]",
                      active === index ? "tw-hidden" : "tw-block",
                    )}
                  >
                    <FontAwesomeIcon
                      icon={faAngleDown}
                      className={clsx(
                        "tw-transition-all tw-duration-200 tw-text-[#F57C00]",
                      )}
                    />
                  </div>
                </div>
                <div
                  className={clsx(
                    "tw-mt-6 !tw-duration-500 tw-grid tw-gap-4",
                    active === index ? "tw-animate-fade-in" : "tw-hidden",
                  )}
                >
                  {value.content.map((item: any, index: number) => (
                    <div key={index} className="tw-flex tw-gap-4">
                      <Image
                        src={
                          "https://cms-strapi.ichiba.net/uploads/Group_1_79183829a3.svg"
                        }
                        width={24}
                        height={24}
                        className="tw-w-6 tw-h-6"
                        alt="icon-check"
                      />
                      <span className="tw-text-base">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className={clsx(showOn)}>
          <Image
            src={b(`flexible.items.${active}.img`) as string}
            alt={b(`flexible.items.${active}.title`)}
            width={550}
            height={550}
            className="tw-rounded-3xl tw-shadow-[0px_0px_13.182px_0px_#FBDCB4]"
          />
        </div>
      </div>
    </div>
  );
};
export default Flexible;
