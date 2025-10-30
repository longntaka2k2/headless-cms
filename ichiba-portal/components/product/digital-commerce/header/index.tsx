import Image from "next/image";

import logo from "@/public/icons/digital/icon.svg";
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

export default function HeaderDigital() {
  const { t: tPim } = useTranslation("pim");
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
      href: "/products/storefront-layer/overview",
      label: tPim("menu.overview"),
    },
    {
      href: "/products/storefront-layer/features",
      label: tPim("menu.features"),
    },
    {
      href: "/products/storefront-layer/landingpage",
      label: tPim("menu.landingpage"),
    },
  ];

  const activeMenu = menu.find((item) => router.pathname.startsWith(item.href));

  return (
    <>
      <div
        id="header-products"
        className={clsx("!tw-py-4 !tw-shadow-10 tw-sticky tw-top-0 tw-z-[152]")}
        ref={rootRef}
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
                    onClick={() =>
                      router.push("/products/storefront-layer/overview")
                    }
                    style={{ width: "100%", height: "auto" }}
                  />
                  <div className="align-self-center !tw-text-lg md:!tw-text-xl md:!tw-leading-6 fw-9 fs-20 ms-2 tw-font-black">
                    StoreFront Layer
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
                <div className="tw-cursor-pointer" onClick={handleRotate}>
                  <span className="tw-text-sm tw-font-medium">
                    {activeMenu?.label}
                  </span>
                  <FontAwesomeIcon
                    icon={faChevronDown}
                    className="tw-ml-3"
                    size="1x"
                    style={{ transform: rotate, transition: "all 0.2s linear" }}
                  />
                </div>
                <div className={scrollCount < 99 ? "header-lv2-fixed" : ""}>
                  <div
                    className={clsx(
                      "tw-z-50 !tw-bg-white drop-header",
                      classes.mobile__menu,
                      {
                        "tw-hidden": !isOpen,
                      },
                    )}
                  >
                    <div className="tw-px-4 tw-pb-3 tw-pt-2">
                      {menu.map((item, index) => (
                        <div
                          key={index}
                          className="py-2 cursor tw-text-sm tw-relative"
                          onClick={() => router.push(item.href)}
                        >
                          <span
                            className={clsx({
                              "tw-text-primary-6": router.pathname.startsWith(
                                item.href,
                              ),
                            })}
                          >
                            {item.label}
                          </span>
                          <div
                            className={clsx(
                              "tw-absolute tw-bottom-0 tw-inset-x-0 tw-border-b tw-border-ic-ink-1",
                              {
                                "tw-hidden": index === menu.length - 1,
                              },
                            )}
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="d-flex align-items-center gr-button tw-font-medium tw-text-sm tw-gap-4">
              <Link
                href="/contact-sales"
                target="_blank"
                rel="noreferrer canonical"
                className="btn-get-start cursor !tw-px-3 tw-whitespace-nowrap !tw-border-2 tw-no-underline"
              >
                {t("contactSale")}
              </Link>
              <Link
                rel="noreferrer canonical"
                target="_blank"
                href="/book-demo"
                className="!tw-px-3 btn-contact cursor tw-whitespace-nowrap   tw-no-underline"
              >
                {t("bookDemo")}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
