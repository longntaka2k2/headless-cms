import { clsx } from "clsx";
import { useTranslation } from "next-i18next";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

const List = () => {
  const { t } = useTranslation("commerce-layer");
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
      className="tw-px-4 tw-mt-4 lg:tw-py-10 lg:tw-container lg:tw-px-20"
      ref={elementRef}
    >
      <div
        className={clsx(
          "lg:tw-hidden tw-grid tw-ml-10 before:tw-w-[25px] before:tw-h-[25px] before:tw-absolute before:tw-top-0 before:tw-bg-[url(https://cms-strapi.ichiba.net/uploads/Group_1171275919_15247cbdb2.png)]",
          "before:tw-bg-cover before:tw-bg-no-repeat before:tw-left-[-40px] tw-grid tw-gap-4",
          "tw-relative after:tw-absolute after:tw-w-[6px] after:tw-bg-[url(https://cms-strapi.ichiba.net/uploads/Vector_107_6e75032383.png)] after:tw-h-full after:tw-top-0 after:tw-left-[-30px]",
        )}
      >
        {(
          t(`howWorks.items`, {
            returnObjects: true,
          }) as string[]
        ).map((value: any, index: number) => (
          <div
            key={index}
            className={clsx(
              "tw-relative",
              isVisible ? "tw-animate-rightShow" : "tw-opacity-0",
            )}
          >
            <Image
              src={value.number}
              alt={value.title}
              width={24}
              height={24}
              className="tw-absolute tw-top-4 tw-left-[-12px]"
            />
            <div className="tw-bg-white tw-p-4 tw-rounded-lg tw-shadow-[0px_8px_16px_0px_rgba(0,0,0,0.05)]">
              <div className="tw-font-bold">{value.title}</div>
              <div className="tw-mt-2 tw-text-sm">
                {value.content[0]}
                <span className="tw-font-bold">{value.content[1]}</span>
                <span>{value.content[2]}</span>
              </div>
            </div>
            <Image
              src={value.img}
              alt={value.title}
              width={988}
              height={526}
              className="tw-mt-5 tw-w-full tw-max-w-[400px]"
            />
          </div>
        ))}
      </div>

      <div
        className={clsx(
          "tw-hidden lg:tw-grid tw-gap-10  tw-mx-auto",
          " before:tw-w-[40px] before:tw-h-[40px] before:tw-absolute before:tw-top-0 before:tw-bg-[url(https://cms-strapi.ichiba.net/uploads/Group_1171275919_15247cbdb2.png)]",
          "before:tw-bg-cover before:tw-bg-no-repeat before:tw-left-[49%] ",
          "tw-relative after:tw-absolute after:tw-w-[15px] after:tw-bg-[url(https://cms-strapi.ichiba.net/uploads/Vector_107_6e75032383.png)] after:tw-h-full after:tw-top-0 after:tw-left-[50%]",
        )}
      >
        {(
          t(`howWorks.items`, {
            returnObjects: true,
          }) as string[]
        ).map((value: any, index: number) =>
          index % 2 === 0 ? (
            <div key={index} className={clsx(" tw-flex tw-justify-between ")}>
              <Image
                src={value.img}
                alt={value.title}
                width={988}
                height={526}
                className={clsx(
                  "tw-mt-5 tw-max-w-[326px] lg:tw-min-w-[400px]",
                  isVisible ? "tw-animate-leftShow" : "tw-opacity-0",
                )}
              />
              <div
                className={clsx(
                  "tw-relative tw-bg-white tw-p-6 tw-rounded-lg tw-shadow-[0px_8px_16px_0px_rgba(0,0,0,0.05)] lg:tw-max-w-[390px] tw-w-full tw-h-max",
                  isVisible ? "tw-animate-rightShow" : "tw-opacity-0",
                )}
              >
                <Image
                  src={value.number}
                  alt=""
                  width={36}
                  height={36}
                  className="tw-absolute tw-top-4 tw-left-[-20px] "
                />
                <div className="tw-font-bold tw-text-lg">{value.title}</div>
                <div className="tw-mt-2 ">
                  {value.content[0]}
                  <span className="tw-font-bold">{value.content[1]}</span>
                  <span>{value.content[2]}</span>
                </div>
              </div>
            </div>
          ) : (
            <div key={index} className={clsx(" tw-flex tw-justify-between ")}>
              <div className={clsx(
                "tw-relative tw-bg-white tw-p-6 tw-rounded-lg tw-shadow-[0px_8px_16px_0px_rgba(0,0,0,0.05)] tw-max-w-[390px] tw-w-full tw-h-max",
                isVisible ? "tw-animate-leftShow" : "tw-opacity-0",
              )}>
                <Image
                  src={value.number}
                  alt=""
                  width={36}
                  height={36}
                  className="tw-absolute tw-top-4 tw-right-[-20px]"
                />
                <div className="tw-font-bold tw-text-lg">{value.title}</div>
                <div className="tw-mt-2 ">
                  {value.content[0]}
                  <span className="tw-font-bold">{value.content[1]}</span>
                  <span>{value.content[2]}</span>
                </div>
              </div>
              <Image
                src={value.img}
                alt={value.title}
                width={988}
                height={526}
                className={clsx(
                  "tw-mt-5 lg:tw-w-[400px] tw-ml-[50px]",
                  isVisible ? "tw-animate-rightShow" : "tw-opacity-0",
                )}
              />
            </div>
          ),
        )}
      </div>
    </div>
  );
};

export default List;
