import { useRouter } from "next/router";
import Image from "next/image";

import logo from "@/public/icons/crossBorder/logoHeader.svg";
import { useState } from "react";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useTranslation } from "next-i18next";
import Link from "next/link";
import useScrollCount from "@/hooks/useScrollCount";
import clsx from "clsx";

export default function HeaderCrossBorder(props?: any) {
  const [rotateChevron, setRotateChevron] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation("common");
  const { t: tCross } = useTranslation("cross-border-forwarding");
  const router = useRouter();
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
        <div className="container ">
          <div className="d-flex justify-content-between">
            <div className="d-flex align-items-center">
              <div className="">
                <Image
                  src={logo}
                  alt="logo"
                  className="cursor header-logo"
                  onClick={() =>
                    router.push("/products/cross-border-forwarding/overview")
                  }
                  style={{ width: "auto", height: "auto" }}
                />
              </div>
              <div className="fw-7 fs-20 ms-2 align-self-center">
                {tCross("smartCrossBorder")}
              </div>
              <div className="align-self-center ps-lg-3 res-pc fs-14">
                <Link
                  href={"/products/cross-border-forwarding/overview"}
                  rel="canonical"
                  className={
                    router?.pathname === "/products/cross-border-forwarding/overview"
                      ? " color-hl-tab d-inline-block px-3 cursor text-decoration-none color-black"
                      : "d-inline-block px-3 cursor text-decoration-none color-black"
                  }
                >
                  {tCross("menu.overview")}
                </Link>
                <Link
                  href={"#"}
                  rel="canonical"
                  className={
                    router?.pathname === "#"
                      ? " color-hl-tab d-inline-block px-3 cursor  text-decoration-none color-black"
                      : " text-decoration-none color-black d-inline-block px-3 cursor"
                  }
                >
                  {tCross("menu.pricing")}
                </Link>
              </div>
              <div className="res-mobile align-self-center ms-4">
                <div className={scrollCount < 99 ? "header-lv2-fixed" : ""}>
                  <div
                    className={isOpen ? "drop-header " : "drop-header d-none"}
                  >
                    <div className="tw-p-3 tw-shadow-xl">
                      <div className="tw-hidden max-[544px]:tw-flex tw-gap-3 align-self-center tw-pb-4 tw-border-b">
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
                      <div className="tw-flex tw-gap-3 tw-py-2">
                        <div
                          className="tw-mt-0 max-[544px]:tw-mt-2 cursor"
                          onClick={() =>
                            router.push("/products/cross-border-forwarding/overview")
                          }
                        >
                          <a
                            className={clsx(
                              router?.pathname ===
                                "/products/cross-border-forwarding/overview"
                                ? "text-decoration-none color-hl-tab"
                                : "text-decoration-none tw-text-ic-black-5",
                            )}
                          >
                            {tCross("menu.overview")}
                          </a>
                        </div>
                        <div
                          className="tw-mt-0 max-[544px]:tw-mt-2 cursor tw-border-l tw-border-gray-300 tw-pl-2"
                          onClick={() => router.push("#")}
                        >
                          <a
                            className={clsx(
                              router?.pathname === "#"
                                ? "text-decoration-none color-hl-tab"
                                : "text-decoration-none tw-text-ic-black-5",
                            )}
                          >
                            {tCross("menu.pricing")}
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="tw-flex tw-gap-2 tw-items-center">
              <div className="max-[544px]:tw-hidden tw-flex align-self-center tw-items-center tw-gap-4 fs-14">
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
