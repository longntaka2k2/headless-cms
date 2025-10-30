import Image from "next/image";

import logo from "@/public/icons/ship4p/ship4p.svg";
import { useEffect, useState } from "react";
import { faChevronDown, faGlobe } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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

export default function HeaderShip4p() {
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
          <div className="d-flex justify-content-between">
            <div className="tw-flex">
              <div className="">
                <Image
                  src={logo}
                  alt="logo"
                  className="cursor header-logo"
                  onClick={() => router.push("/products/ship4p/overview")}
                  loading="lazy"
                  style={{ width: "auto", height: "40px" }}
                />
              </div>
              <div className="fw-9 fs-20 ms-2 align-self-center">Ship4P</div>
              <div className="align-self-center ps-lg-3 res-pc fs-14">
                <Link
                  className={
                    router?.pathname === "/products/ship4p/overview"
                      ? "header-items d-inline-block px-3 cursor color-hl-tab text-decoration-none color-black"
                      : "header-items d-inline-block px-3 cursor text-decoration-none color-black"
                  }
                  href={"/products/ship4p/overview"}
                  rel="canonical"
                >
                  {t("ship.overview.header.overView")}
                </Link>
                <Link
                  className={
                    router?.pathname === "/products/ship4p/features"
                      ? " color-hl-tab d-inline-block px-3 cursor text-decoration-none color-black"
                      : "text-decoration-none color-black d-inline-block px-3 cursor"
                  }
                  href={"/products/ship4p/features"}
                  rel="canonical"
                >
                  {t("ship.overview.header.features")}
                </Link>
              </div>
              <div className="res-mobile align-self-center ms-4">
                <div className={scrollCount < 99 ? "header-lv2-fixed" : ""}>
                  <div
                    className={isOpen ? "drop-header " : "drop-header d-none"}
                  >
                    <div className="tw-p-3 tw-shadow-xl">
                      <div className="tw-hidden max-[420px]:tw-flex tw-gap-3 align-self-center tw-border-b tw-pb-4">
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
                            router.push("/products/ship4p/overview")
                          }
                        >
                          <a
                            className={clsx(
                              router?.pathname === "/products/ship4p/overview"
                                ? "text-decoration-none color-hl-tab"
                                : "text-decoration-none tw-text-ic-black-5",
                            )}
                          >
                            {t("ship.overview.header.overView")}
                          </a>
                        </div>
                        <div
                          className="tw-mt-0 max-[544px]:tw-mt-2 cursor tw-border-l tw-border-gray-300 tw-pl-2"
                          onClick={() =>
                            router.push("/products/ship4p/features")
                          }
                        >
                          <a
                            className={clsx(
                              router?.pathname === "/products/ship4p/features"
                                ? "text-decoration-none color-hl-tab"
                                : "text-decoration-none tw-text-ic-black-5",
                            )}
                          >
                            {t("ship.overview.header.features")}
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
