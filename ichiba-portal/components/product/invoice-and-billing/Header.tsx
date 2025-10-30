/* eslint-disable @next/next/no-html-link-for-pages */
import Image from "next/image";
import logo from "@/public/icons/products/invoice-and-selling.svg";
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

export default function HeaderInvoiceSelling() {
  const { t: tInvoice } = useTranslation("invoice-and-billing");
  const router = useRouter();
  const scrollCount = useScrollCount();

  return (
    <>
      <div
        id="header-products"
        className={clsx(
          "!tw-py-4 lg:tw-hidden",
          scrollCount > 99 ? "header-fixed" : "",
        )}
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
                      router.push("/products/commerce-layer/overview")
                    }
                    style={{ width: "100%", height: "auto" }}
                  />
                  <div className="align-self-center !tw-text-base fw-7 fs-20 ms-2 tw-font-black">
                    {tInvoice("invoice")}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
