"use client";
import { useState } from "react";
import Image from "next/image";
import clsx from "clsx";
import { useTranslation } from "next-i18next";
import Link from "next/link";

const TableMobile = () => {
  const { t } = useTranslation("pricing");
  return (
    <>
      <div className="tw-mt-5 tw-rounded-lg tw-shadow-[0px_0px_20px_0px_rgba(0,_0,_0,_0.11)] tw-p-3">
        <div className="tw-flex tw-justify-between tw-items-center">
          <span className="tw-text-base tw-font-bold tw-text-[#00194F]">
            {t("listTablePrice.4.subHeader.0.title")}
          </span>
          <div className="tw-my-3">
            <Link
              className="tw-py-2 tw-px-5 tw-font-medium tw-text-sm tw-rounded-lg tw-bg-brand-primary tw-text-white tw-no-underline"
              href="/contact-sales"
              target="_blank"
            >
              {t("contact")}
            </Link>
          </div>
        </div>

        <div className="tw-py-2 tw-grid tw-grid-cols-2 tw-text-sm tw-border-b-2 tw-items-center">
          <p className="tw-font-medium tw-mb-0">
            {t("listTablePrice.4.functions.monthly.title")}
          </p>
          <div className="tw-text-center">
            {t("listTablePrice.4.subHeader.0.itemContent.monthly.value") !=
              "" && t("listTablePrice.4.subHeader.0.itemContent.monthly.value")}
            {t("listTablePrice.4.subHeader.0.itemContent.monthly.image") !=
              "" && (
              <Image
                src={
                  t(
                    "listTablePrice.4.subHeader.0.itemContent.monthly.image",
                  ) as string
                }
                width={24}
                height={24}
                alt=""
                className={clsx("tw-mx-auto")}
              />
            )}
          </div>
        </div>
        <div className="tw-py-2 tw-grid tw-grid-cols-2 tw-text-sm tw-border-b-2 tw-items-center">
          <p className="tw-font-medium tw-mb-0">
            {t("listTablePrice.4.functions.annual.title")}
          </p>
          <div className="tw-text-center">
            {t("listTablePrice.4.subHeader.0.itemContent.annual.value") != "" &&
              t("listTablePrice.4.subHeader.0.itemContent.annual.value")}
            {t("listTablePrice.4.subHeader.0.itemContent.annual.image") !=
              "" && (
              <Image
                src={
                  t(
                    "listTablePrice.4.subHeader.0.itemContent.annual.image",
                  ) as string
                }
                width={24}
                height={24}
                alt=""
                className={clsx("tw-mx-auto")}
              />
            )}
          </div>
        </div>

        <div className="tw-font-medium tw-text-brand-secondary tw-mt-4">
          {t("listTablePrice.4.titleLeft.invoice")}
        </div>

        <div className="tw-py-2 tw-grid tw-grid-cols-2 tw-text-sm tw-border-b-2 tw-items-center">
          <p className="tw-font-medium tw-mb-0">
            {t("listTablePrice.4.functions.invoice.title")}
          </p>
          <div className="tw-text-center">
            {t("listTablePrice.4.subHeader.0.itemContent.invoice.value") !=
              "" && t("listTablePrice.4.subHeader.0.itemContent.invoice.value")}
            {t("listTablePrice.4.subHeader.0.itemContent.invoice.image") !=
              "" && (
              <Image
                src={
                  t(
                    "listTablePrice.4.subHeader.0.itemContent.invoice.image",
                  ) as string
                }
                width={24}
                height={24}
                alt=""
                className={clsx("tw-mx-auto")}
              />
            )}
          </div>
        </div>
        <div className="tw-py-2 tw-grid tw-grid-cols-2 tw-text-sm tw-items-center">
          <p className="tw-font-medium tw-mb-0">
            {t("listTablePrice.4.functions.transaction.title")}
          </p>
          <div className="tw-text-center">
            {t("listTablePrice.4.subHeader.0.itemContent.transaction.value") !=
              "" &&
              t("listTablePrice.4.subHeader.0.itemContent.transaction.value")}
            {t("listTablePrice.4.subHeader.0.itemContent.transaction.image") !=
              "" && (
              <Image
                src={
                  t(
                    "listTablePrice.4.subHeader.0.itemContent.transaction.image",
                  ) as string
                }
                width={24}
                height={24}
                alt=""
                className={clsx("tw-mx-auto")}
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
};
export default TableMobile;
