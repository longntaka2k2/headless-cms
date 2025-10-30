import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import clsx from "clsx";
import { useTranslation } from "next-i18next";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
const MultiChannel = () => {
  const b = useTranslation("build-store-front").t;
  const ship4p = useTranslation("ship4p").t;
  const [active, setActive] = useState(0);
  const [showOn, setShowOn] = useState("");
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
        "tw-bg-[url('https://cms-strapi.ichiba.net/uploads/How_Ship4_P_60632abb7f.svg')]",
        "lg:tw-bg-[url('https://cms-strapi.ichiba.net/uploads/How_Ship4_P_b0228e2ca8.svg')]",
        "tw-bg-cover tw-px-4 tw-py-6 lg:tw-pt-20 lg:tw-pb-[300px] tw-overflow-hidden",
      )}
    >
      <div className="container">
        <h2 className="tw-text-2xl lg:tw-text-4xl tw-font-bold tw-text-center tw-mb-8">
          {ship4p("multiChannel.heading")}
        </h2>
        <div className="tw-grid tw-grid-cols-1 lg:tw-grid-cols-2 tw-gap-6 lg:tw-gap-20">
          {(
            ship4p(`multiChannel.contents`, {
              returnObjects: true,
            }) as string[]
          ).map((value: any, index: number) => (
            <div
              key={index}
              className={clsx(
                "tw-bg-white tw-rounded-xl tw-p-4 lg:tw-p-5 tw-shadow-[0px_8px_16px_0px_rgba(0,_0,_0,_0.05)]",
                "tw-grid tw-content-start tw-gap-4 lg:tw-gap-5",
                "tw-h-fit",
                index === 1 || index === 3 ? "lg:tw-translate-y-[250px]" : "",
              )}
            >
              <Image
                src={value.image}
                alt="Carrier Setup"
                width={521}
                height={345}
                className="tw-object-contain tw-mx-auto"
              />
              <div className="tw-h-fit">
                <p className="tw-bg-brand-primary tw-text-sm tw-text-white tw-px-4 tw-py-1 tw-w-max tw-rounded-full tw-mb-3">
                  {value.step}
                </p>
                <h3 className="tw-text-base lg:tw-text-2xl tw-font-bold tw-mb-2">
                  {value.title}
                </h3>
                <div>
                  <p className="tw-mb-4">{value.subTitle}</p>
                  {value.items && (
                    <div className="tw-space-y-2">
                      {value.items.map((item: any, index: number) => (
                        <ul key={index} className="tw-flex tw-gap-2 tw-list-disc">
                          <li className="tw-text-sm lg:tw-text-base">
                            <span className="tw-font-medium tw-pr-1">{item.title}</span>
                            {item.subTitle}
                          </li>
                        </ul>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default MultiChannel;
