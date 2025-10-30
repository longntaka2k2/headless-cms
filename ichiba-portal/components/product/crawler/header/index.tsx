import Image from "next/image";

import logo from "@/public/icons/products/crawler.svg";
import { useEffect, useRef, useState } from "react";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import clsx from "clsx";
import classes from "./Header.module.scss";
import Link from "next/link";

function useScrollCount() {
  const [scrollCount, setScrollCount] = useState(0);

  useEffect(() => {
    function handleScroll() {
      const scrollTop =
        document.documentElement.scrollTop || document.body.scrollTop;
      setScrollCount(scrollTop);
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return scrollCount;
}

export default function HeaderCrawler() {
  const { t: crawler } = useTranslation("crawler");
  const { t } = useTranslation("common");
  const [rotateChevron, setRotateChevron] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const rootRef = useRef<HTMLDivElement | null>(null);

  const handleRotate = async () => {
    await setRotateChevron(!rotateChevron);
    setIsOpen(!isOpen);
  };
  const rotate = rotateChevron === true ? "rotate(180deg)" : "rotate(0)";
  const scrollCount = useScrollCount();

  const menu = [
    {
      href: "/products/crawler/overview",
      label: crawler("menu.overview"),
    },
    {
      // href: "/products/crawler/pricing",
      href: "#",
      label: crawler("menu.pricing"),
    },
  ];

  const activeMenu = menu.find((item) => router.pathname.startsWith(item.href));

  return (
    <>
      <div
        id="header-products"
        className={clsx("!tw-py-4", scrollCount > 99 ? "header-fixed" : "")}
      >
        <div className="container">
          <div className="d-flex justify-content-between tw-gap-2">
            <div className="d-flex tw-justify-between tw-w-full">
              <div className="tw-flex tw-flex-1">
                <div className="tw-flex tw-items-center">
                  <Image
                    src={logo}
                    width={32}
                    height={32}
                    alt="logo"
                    className="cursor header-logo !tw-w-8 !tw-h-8"
                    onClick={() => router.push("/products/crawler/overview")}
                    style={{ width: "100%", height: "auto" }}
                  />
                  <div className="align-self-center !tw-text-lg md:!tw-text-xl md:!tw-leading-6 fw-9 fs-20 ms-2 tw-font-bold">
                    {crawler("crawler")}
                  </div>
                </div>
                <div className="align-self-center ps-lg-3 res-pc">
                  {menu.map((item, index) => (
                    <div
                      key={index}
                      className={clsx(
                        "d-inline-block px-3 cursor tw-text-sm tw-text-ic-ink-5",
                        {
                          "tw-font-medium !tw-text-primary-6":
                            router.pathname.startsWith(item.href),
                          "header-items": index !== menu.length - 1,
                        },
                      )}
                      onClick={() => router.push(item.href)}
                    >
                      {item.label}
                    </div>
                  ))}
                </div>
              </div>
              <div className="res-mobile align-self-center ms-4">
                <div className={scrollCount < 99 ? "header-lv2-fixed" : ""}>
                  <div
                    className={isOpen ? "drop-header " : "drop-header d-none"}
                  >
                    <div className="tw-px-4 tw-pb-3 tw-pt-2 tw-shadow-xl">
                      <div className="tw-hidden max-[495px]:tw-flex tw-gap-3 align-self-center tw-border-b tw-pb-2">
                        <Link
                          rel="noreferrer canonical"
                          target="_blank"
                          href="/contact-sales"
                          className={clsx(
                            "cursor tw-whitespace-nowrap tw-no-underline !tw-text-white tw-bg-brand-primary",
                            "tw-p-2 tw-rounded-lg !tw-border tw-border-brand-primary",
                          )}
                        >
                          {t("contactSale")}
                        </Link>
                      </div>
                      <div
                        className={clsx(
                          "tw-flex tw-gap-3 tw-py-2",
                          "md:tw-w-max tw-overflow-x-scroll md:tw-overflow-visible tw-mx-auto tw-no-scrollbar",
                        )}
                      >
                        {menu.map((item, index) => (
                          <div
                            key={index}
                            className={clsx(
                              "tw-mt-0 max-[473px]:tw-mt-2 cursor tw-text-sm tw-relative",
                              {
                                "tw-border-l tw-border-gray-300 tw-pl-2":
                                  index !== 0,
                              },
                            )}
                            onClick={() => router.push(item.href)}
                          >
                            <span
                              className={clsx("tw-line-clamp-1 tw-w-max", {
                                "tw-text-primary-6": router.pathname.startsWith(
                                  item.href,
                                ),
                              })}
                            >
                              {item.label}
                            </span>
                            <div
                              className={clsx(
                                "tw-absolute tw-bottom-0 tw-inset-x-0",
                                { "tw-hidden": index === menu.length - 1 },
                              )}
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="tw-flex tw-gap-2 tw-items-center">
              <div className="max-[495px]:tw-hidden tw-flex align-self-center tw-items-center tw-gap-4 fs-14">
                <Link
                  rel="noreferrer canonical"
                  target="_blank"
                  href="/contact-sales"
                  className={clsx(
                    "cursor tw-whitespace-nowrap tw-no-underline tw-text-white tw-bg-brand-primary",
                    " tw-p-2 tw-rounded-lg !tw-border-2 b tw-border-brand-primary",
                  )}
                >
                  {t("contactSale")}
                </Link>
              </div>
              <div className="xl:tw-hidden">
                <FontAwesomeIcon
                  icon={faChevronDown}
                  style={{ transform: rotate, transition: "all 0.2s linear" }}
                  onClick={() => handleRotate()}
                  className="tw-text-base tw-font-bold"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
