/* eslint-disable @next/next/no-html-link-for-pages */
import Image from "next/image";
import logo from "@/public/icons/products/wms.svg";
import { useEffect, useState } from "react";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import clsx from "clsx";
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

export default function HeaderCommerceLayer() {
  const { t: tWms } = useTranslation("wms");
  const { t } = useTranslation("common");
  const [rotateChevron, setRotateChevron] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  let host = typeof window !== "undefined" ? window.location.origin : "";

  const handleRotate = async () => {
    await setRotateChevron(!rotateChevron);
    setIsOpen(!isOpen);
  };
  const rotate = rotateChevron === true ? "rotate(180deg)" : "rotate(0)";
  const scrollCount = useScrollCount();

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
                    width={24}
                    height={24}
                    alt="logo"
                    className="cursor header-logo !tw-w-6 !tw-h-6"
                    onClick={() =>
                      router.push("/products/commerce-layer/overview")
                    }
                    style={{ width: "100%", height: "auto" }}
                  />
                  <div className="align-self-center !tw-text-lg md:!tw-text-xl md:!tw-leading-6 fw-7 fs-20 ms-2 tw-font-black">
                    {tWms("wms")}
                  </div>
                </div>
              </div>
              <div className="res-mobile align-self-center ms-4">
                <div className={scrollCount < 99 ? "header-lv2-fixed" : ""}>
                  <div
                    className={isOpen ? "drop-header " : "drop-header d-none"}
                  >
                    <div className="tw-px-4 tw-pb-3 tw-pt-2 tw-shadow-xl">
                      <div className="tw-hidden max-[640px]:tw-flex tw-gap-3 align-self-center tw-border-b tw-pb-2">
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

                        <Link
                          rel="noreferrer canonical"
                          target="_blank"
                          href={
                            host === "https://ichiba.vn"
                              ? "https://api.ichiba.vn/account/login?redirectUrl=https://app.ichiba.net"
                              : "https://api.ichiba.net/account/login?redirectUrl=https://app.ichiba.net"
                          }
                          className={clsx(
                            "cursor tw-whitespace-nowrap tw-no-underline !tw-text-brand-primary tw-bg-white",
                            "tw-p-2 tw-rounded-lg !tw-border tw-border-brand-primary",
                          )}
                        >
                          {t("getStart")}
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="tw-flex tw-gap-2 tw-items-center">
              <div className="max-[640px]:tw-hidden tw-flex align-self-center tw-items-center tw-gap-4 fs-14">
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

                <Link
                  rel="noreferrer canonical"
                  target="_blank"
                  href={
                    host === "https://ichiba.vn"
                      ? "https://api.ichiba.vn/account/login?redirectUrl=https://app.ichiba.net"
                      : "https://api.ichiba.net/account/login?redirectUrl=https://app.ichiba.net"
                  }
                  className={clsx(
                    "cursor tw-whitespace-nowrap tw-no-underline tw-text-brand-primary tw-bg-white",
                    " tw-p-2 tw-rounded-lg !tw-border-2 b tw-border-brand-primary",
                  )}
                >
                  {t("getStart")}
                </Link>
              </div>
              <div className="sm:tw-hidden">
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
