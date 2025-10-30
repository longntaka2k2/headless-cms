import { LocaleNamespace } from "@/const/locale";
import React, { useEffect, useState } from "react";
import { useTranslation } from "next-i18next";
import Link from "next/link";
import clsx from "clsx";
import SvgIcon from "@/components/common/SvgIcon";
import classes from "./CustomerStories.module.scss";

const CustomerStories = () => {
  const { t } = useTranslation(LocaleNamespace.OmnichannelRetailers);

  const [activeIndex, setActiveIndex] = useState(0);

  const items = t(`customerStories.items`, {
    returnObjects: true,
  }) as { author: string; content: string; position?: string[] }[];

  const prevIndex =
    activeIndex === items.length - 1
      ? [activeIndex - 2, activeIndex - 1]
      : [activeIndex - 1];

  const nextIndex =
    activeIndex === 0 ? [activeIndex + 2, activeIndex + 1] : [activeIndex + 1];

  const slideNext = () =>
    setActiveIndex((prevState) =>
      prevState === items.length - 1 ? 0 : prevState + 1,
    );

  const slideToIndex = (index: number) => {
    setActiveIndex(index);
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      slideNext();
    }, 3000);
    return () => {
      clearTimeout(timeout);
    };
  }, [activeIndex]);

  const images = [
    "https://cms-strapi.ichiba.net/uploads/customer_1_2c4e5c3df1.webp",
    "https://cms-strapi.ichiba.net/uploads/customer_2_8a4b00f004.webp",
    "https://cms-strapi.ichiba.net/uploads/customer_3_14cec74364.webp",
    "https://cms-strapi.ichiba.net/uploads/customer_4_39c17f9c5f.webp",
    "https://cms-strapi.ichiba.net/uploads/customer_5_7e28d137f9.webp",
    "https://cms-strapi.ichiba.net/uploads/customer_6_c57f5b4703.webp",
    "https://cms-strapi.ichiba.net/uploads/customer_7_fac487e8ea.webp",
    "https://cms-strapi.ichiba.net/uploads/customer_8_d8bf68e32e.webp",
  ];

  return (
    <div className="tw-py-6 xl:tw-py-10">
      <div className="container">
        <div className="tw-max-w-[792px] tw-mx-auto tw-text-center">
          <h3 className="tw-mb-2 tw-text-2xl xl:tw-text-4xl tw-font-bold">
            {t("customerStories.title")}
          </h3>
        </div>
        <div className="tw-flex tw-flex-col">
          <div
            className={clsx(
              "tw-py-6 tw-flex tw-gap-4 tw-justify-center",
              "xl:tw-py-8 xl:tw-gap-6",
            )}
          >
            <Link
              className="tw-no-underline tw-text-brand-primary tw-border tw-border-current tw-p-3 tw-rounded-lg tw-font-medium tw-w-[200px] tw-flex tw-items-center tw-justify-center tw-gap-2 tw-max-w-full"
              href="/contact-sales"
              passHref
              target="_blank"
            >
              {t("contactSales")}
            </Link>
            <Link
              className="tw-no-underline tw-text-white tw-bg-brand-primary tw-p-3 tw-rounded-lg tw-font-medium tw-w-[200px] tw-flex tw-items-center tw-justify-center tw-gap-2 tw-max-w-full"
              href="/contact-sales"
              passHref
              target="_blank"
            >
              {t("bookDemo")}
            </Link>
          </div>
        </div>
      </div>
      <div
        className={clsx(
          "tw-flex tw-flex-col tw-gap-5",
          "xl:tw-gap-8 xl:tw-flex-col-reverse",
        )}
      >
        <div className="container">
          <div className="tw-flex tw-items-center tw-justify-between">
            <div className={classes.scroll}>
              <div className="tw-px-1 lg:tw-px-3 tw-flex tw-gap-4 xl:tw-gap-6">
                {items.map((_, index) => (
                  <div
                    className={clsx("tw-flex tw-items-end tw-gap-1.5")}
                    key={index}
                  >
                    <span
                      className={clsx(
                        "tw-text-base tw-font-bold tw-leading-none",
                        index === activeIndex
                          ? "tw-text-primary-6"
                          : "tw-text-ic-ink-4",
                      )}
                    >
                      {index + 1}.
                    </span>
                    <div
                      className={clsx(
                        "tw-h-1",
                        "tw-w-15",
                        index === activeIndex
                          ? "tw-bg-primary-6"
                          : "tw-bg-ic-ink-3",
                      )}
                    />
                  </div>
                ))}
              </div>
            </div>
            <Link
              href="#"
              passHref
              target="_blank"
              className={clsx(
                "tw-no-underline tw-items-center tw-gap-1 tw-text-base tw-font-medium tw-hidden",
                "xl:tw-flex",
              )}
            >
              {t("viewMore")}
              <SvgIcon icon="arrow" />
            </Link>
          </div>
        </div>
        <div className="container !tw-px-0 sm:!tw-px-3">
          <div className="tw-overflow-hidden">
            <div className="tw-flex tw-h-full">
              {items.map((item, index) => {
                const isVisible =
                  index === activeIndex ||
                  prevIndex.includes(index) ||
                  nextIndex.includes(index);

                return (
                  <div
                    key={index}
                    className={clsx(
                      "tw-flex tw-text-white tw-transition-all tw-cursor-pointer",

                      {
                        "!tw-w-0": !isVisible,
                      },
                      index === activeIndex
                        ? "tw-flex-1"
                        : "tw-w-6 lg:tw-w-[104px]",
                    )}
                    onClick={() => slideToIndex(index)}
                  >
                    <div
                      className={clsx(
                        "tw-px-1 lg:tw-px-3 tw-overflow-hidden tw-w-full tw-relative",
                      )}
                    >
                      <div
                        className={clsx(
                          "tw-w-full tw-gap-10 !tw-bg-no-repeat !tw-bg-cover tw-rounded-xl tw-grid tw-grid-cols-1 lg:tw-grid-cols-2 tw-h-[400px] !tw-bg-[74%]",
                        )}
                        style={{
                          background:
                            index === activeIndex
                              ? `url('${images[index]}'), lightgray 50% / cover no-repeat`
                              : `linear-gradient(0deg, rgba(2, 70, 175, 0.40) 0%, rgba(2, 70, 175, 0.40) 100%), url('${images[index]}'), lightgray 50% / cover no-repeat`,
                        }}
                      />

                      <div
                        className={clsx(
                          "tw-inset-0 tw-px-0 sm:tw-px-1 lg:tw-px-3 tw-relative tw-text-ic-ink-6",
                          "sm:tw-absolute sm:tw-text-white",
                          {
                            "tw-hidden": index !== activeIndex,
                          },
                        )}
                      >
                        <div
                          className={clsx(
                            "tw-w-full tw-h-full",
                            "tw-grid tw-grid-cols-1 md:tw-grid-cols-2",
                          )}
                        >
                          <div className="tw-relative tw-flex tw-flex-col tw-py-4 sm:tw-px-10 sm:tw-pt-10 sm:tw-pb-5 tw-h-full tw-gap-6">
                            <div className="tw-flex-1 tw-flex tw-items-center tw-z-1">
                              {item.content}
                            </div>
                            <div className="tw-flex tw-gap-2 tw-items-center tw-z-1">
                              <div className="tw-w-0.5 tw-h-12 tw-rounded tw-bg-current" />
                              <div className="tw-flex tw-flex-col">
                                <span className="tw-font-bold">
                                  {item.author}
                                </span>
                                <span>{item.position}</span>
                              </div>
                            </div>
                            <div
                              className={clsx(
                                "tw-absolute tw-inset-0 tw-rounded-xl tw-hidden",
                                "sm:tw-block",
                              )}
                              style={{
                                background:
                                  "linear-gradient(0deg, rgba(0, 0, 0, 0.30) 0%, rgba(0, 0, 0, 0.30) 100%), #1D39C4",
                                opacity: 0.7,
                              }}
                            />
                          </div>
                        </div>
                        <div
                          className={clsx(
                            "tw-flex tw-justify-end",
                            "sm:tw-hidden",
                          )}
                        >
                          <Link
                            href="#"
                            passHref
                            className={clsx(
                              "tw-no-underline tw-flex tw-items-center tw-gap-1 tw-text-base tw-font-medium",
                            )}
                          >
                            {t("viewMore")}
                            <SvgIcon icon="arrow" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerStories;
