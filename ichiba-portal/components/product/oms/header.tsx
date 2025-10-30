import Image from "next/image";

import logo from "@/public/icons/oms/logoHeader.svg";
import { useEffect, useState } from "react";
import { faChevronDown, faGlobe } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Dropdown } from "react-bootstrap";
import React from "react";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import Link from "next/link";
import { clsx } from "clsx";

function useScrollCount() {
  const [scrollCount, setScrollCount] = useState(0);

  useEffect(() => {
    function handleScroll() {
      const scrollTop =
        document.documentElement.scrollTop || document.body.scrollTop;
      setScrollCount(scrollTop);
    }

    window.addEventListener("scroll", handleScroll);
  }, []);

  return scrollCount;
}
interface MyComponentProps {
  children?: any;
  onClick?: () => void;
  className?: string;
  // Các props khác
}

// eslint-disable-next-line react/display-name
const CustomToggle = React.forwardRef<null, MyComponentProps>((props, ref) => (
  // Dùng props.children và props.onClick ở đây
  <span className=" " onClick={props.onClick}>
    {props.children}
  </span>
));

export default function HeaderOms() {
  const { t } = useTranslation("common");
  const [rotateChevron, setRotateChevron] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
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
        <div className="container">
          <div className="d-flex justify-content-between">
            <div className="d-flex">
              <div className="" style={{ minWidth: "40px" }}>
                <Image
                  src={logo}
                  alt="logo"
                  className="cursor header-logo"
                  style={{ width: "100%", height: "auto" }}
                />
              </div>
              <div className="align-self-center fw-7 fs-20 ms-2">OMS</div>
              <div className="align-self-center ps-lg-3 res-pc fs-14">
                <div>{t("ship.overview.header.overView")}</div>
                <div
                  className={
                    router?.pathname === "/products/oms/features"
                      ? "header-items color-hl-tab d-inline-block px-3 cursor"
                      : "header-items d-inline-block px-3 cursor"
                  }
                  onClick={() => router.push("/products/oms/features")}
                >
                  {t("ship.overview.header.features")}
                </div>
                <div
                  className={
                    router?.pathname === "/products/oms/pricing"
                      ? " color-hl-tab d-inline-block px-3 cursor"
                      : "d-inline-block px-3 cursor"
                  }
                  onClick={() => router.push("/products/oms/pricing")}
                >
                  {t("oms.pricing.title")}
                </div>
              </div>
              <div className="res-mobile align-self-center ms-4">
                <div className={scrollCount < 99 ? "header-lv2-fixed" : ""}>
                  <div
                    className={isOpen ? "drop-header " : "drop-header d-none"}
                  >
                    <div className="tw-p-4 tw-shadow-xl">
                      <div className="tw-hidden max-[420px]:tw-flex tw-gap-3 align-self-center tw-pb-4 tw-border-b">
                        <Link
                          href="/contact-sales"
                          target="_blank"
                          rel="noreferrer canonical"
                          className={clsx(
                            "cursor tw-whitespace-nowrap !tw-border b tw-border-brand-primary tw-no-underline",
                            "tw-rounded-lg tw-p-2 tw-text-brand-primary",
                          )}
                        >
                          {t("contactSale")}
                        </Link>
                        <Link
                          rel="noreferrer canonical"
                          target="_blank"
                          href="/book-demo"
                          className={clsx(
                            "cursor tw-whitespace-nowrap tw-no-underline !tw-text-white tw-bg-brand-primary",
                            "tw-p-2 tw-rounded-lg !tw-border tw-border-brand-primary",
                          )}
                        >
                          {t("bookDemo")}
                        </Link>
                      </div>
                      <div className="tw-flex tw-gap-3 tw-py-2">
                        <div className="tw-mt-0 max-[544px]:tw-mt-2 cursor">
                          {t("ship.overview.header.overView")}
                        </div>
                        <div
                          className="tw-mt-0 max-[544px]:tw-mt-2 cursor tw-border-l tw-border-gray-300 tw-pl-2"
                          onClick={() => router.push("/products/oms/features")}
                        >
                          <a
                            className={
                              router?.pathname === "/products/oms/features"
                                ? "text-decoration-none color-hl-tab"
                                : "text-decoration-none tw-text-ic-black-5"
                            }
                          >
                            {t("ship.overview.header.features")}
                          </a>
                        </div>
                        <div
                          className="tw-mt-0 max-[544px]:tw-mt-2 cursor tw-border-l tw-border-gray-300 tw-pl-2"
                          onClick={() => router.push("/products/oms/pricing")}
                        >
                          <a
                            className={
                              router?.pathname === "/products/oms/pricing"
                                ? "text-decoration-none color-hl-tab"
                                : "text-decoration-none tw-text-ic-black-5"
                            }
                          >
                            {t("oms.pricing.title")}
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="tw-flex tw-gap-2 tw-items-center">
              <div className="max-[420px]:tw-hidden tw-flex align-self-center tw-items-center tw-gap-4 fs-14">
                <Link
                  href="/contact-sales"
                  target="_blank"
                  rel="noreferrer canonical"
                  className={clsx(
                    "cursor tw-whitespace-nowrap !tw-border-2 b tw-border-brand-primary tw-no-underline",
                    "tw-rounded-lg tw-p-2 tw-text-brand-primary",
                  )}
                >
                  {t("contactSale")}
                </Link>
                <Link
                  rel="noreferrer canonical"
                  target="_blank"
                  href="/book-demo"
                  className={clsx(
                    "cursor tw-whitespace-nowrap tw-no-underline tw-text-white tw-bg-brand-primary",
                    " tw-p-2 tw-rounded-lg !tw-border-2 b tw-border-brand-primary",
                  )}
                >
                  {t("bookDemo")}
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
