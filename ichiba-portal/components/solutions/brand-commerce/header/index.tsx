import Image from "next/image";

import { useRef } from "react";
import React from "react";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import clsx from "clsx";
import Link from "next/link";
import { LocaleNamespace } from "@/const/locale";

const HeaderBrand = () => {
  const { t } = useTranslation(LocaleNamespace.BrandCommerce);
  const rootRef = useRef<HTMLDivElement | null>(null);

  return (
    <>
      <div
        id="header-products"
        className={clsx(
          "!tw-py-3 !tw-shadow-10 tw-sticky tw-top-0 tw-z-[100] tw-hidden md:tw-block",
        )}
        ref={rootRef}
      >
        <div className="container">
          <div className="d-flex justify-content-between tw-gap-2">
            <div className="d-flex tw-justify-between tw-w-full">
              <div className="tw-flex tw-flex-1">
                <div className="tw-flex tw-items-center">
                  <Image
                    src={"/icons/brand-commerce/logo.svg"}
                    width={32}
                    height={32}
                    alt="logo"
                  />
                  <div className="align-self-center !tw-text-lg md:!tw-text-xl md:!tw-leading-6 fw-7 fs-20 ms-2 tw-font-black">
                    {t("eCommerceFulfillment")}
                  </div>
                </div>
              </div>
            </div>
            <div className="d-flex align-items-center tw-font-medium tw-text-sm tw-gap-4">
              <Link
                href="/contact-sales"
                target="_blank"
                rel="noreferrer canonical"
                className="btn-get-start cursor !tw-px-3 tw-whitespace-nowrap !tw-border-2 tw-no-underline"
              >
                {t("getStarted")}
              </Link>
              <Link
                rel="noreferrer canonical"
                target="_blank"
                href="/contact-sales"
                className="!tw-px-3 btn-contact cursor tw-whitespace-nowrap tw-no-underline"
              >
                {t("contactSales")}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeaderBrand;
