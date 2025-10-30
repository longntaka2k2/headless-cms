"use client";
import Image from "next/image";
import clsx from "clsx";
import { useTranslation } from "next-i18next";
import Link from "next/link";
import useWidth from "@/hooks/useWidth";

const TableDesktop = () => {
  const { t: commerce } = useTranslation("pricing");
  const width = useWidth();

  return (
    <div className="tw-max-w-[1280px] tw-mt-4 tw-w-full tw-mx-auto tw-bg-white">
      <div className="tw-grid tw-grid-cols-10 tw-h-auto tw-items-center tw-sticky tw-z-1 tw-bg-white tw-text-base tw-font-bold">
        <div className="tw-col-span-2 tw-w-full tw-h-full tw-p-3 tw-bg-ic-ink-1 tw-border tw-border-r-0 tw-border-ic-ink-2 tw-rounded-tl-xl">
          {commerce("listTablePrice.4.titleLeft.heading")}
        </div>
        <div className="tw-col-span-4 tw-w-full tw-h-full tw-p-3 tw-bg-ic-ink-1 tw-border tw-border-ic-ink-2">
          {commerce("listTablePrice.4.functions.heading")}
        </div>
        <div
          className={clsx(
            "tw-col-span-4 tw-grid tw-grid-cols-3 tw-w-full tw-h-full",
            "tw-p-3 tw-border tw-border-l-0 tw-text-center",
            "tw-bg-green-1 tw-border-green-2 tw-text-green-6 tw-rounded-tr-xl",
          )}
        >
          {commerce("listTablePrice.4.subHeader.0.itemContent.title")}
        </div>
      </div>

      <div className="tw-grid tw-grid-cols-10 tw-h-auto tw-items-center tw-sticky tw-bg-white tw-text-base">
        <div className="tw-col-span-2 tw-font-semibold tw-w-full tw-h-full tw-p-3 tw-border tw-border-r-0 tw-border-ic-ink-3"></div>
        <div className="tw-col-span-4 tw-w-full tw-h-full tw-p-3 tw-border tw-border-ic-ink-3">
          {commerce("listTablePrice.4.functions.monthly.title")}
        </div>
        <div className="tw-col-span-4 tw-grid tw-grid-cols-3 tw-w-full tw-h-full tw-p-3 tw-border tw-border-l-0 tw-border-ic-ink-3 tw-text-center">
          {commerce("listTablePrice.4.subHeader.0.itemContent.monthly.value") !=
            "" &&
            commerce("listTablePrice.4.subHeader.0.itemContent.monthly.value")}
          {commerce("listTablePrice.4.subHeader.0.itemContent.monthly.image") !=
            "" && (
            <Image
              src={
                commerce(
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
      <div className="tw-grid tw-grid-cols-10 tw-h-auto tw-items-center tw-sticky tw-bg-white tw-text-base">
        <div className="tw-col-span-2 tw-font-semibold tw-w-full tw-h-full tw-p-3 tw-border tw-border-r-0 tw-border-ic-ink-3"></div>
        <div className="tw-col-span-4 tw-w-full tw-h-full tw-p-3 tw-border tw-border-ic-ink-3">
          {commerce("listTablePrice.4.functions.annual.title")}
        </div>
        <div className="tw-col-span-4 tw-grid tw-grid-cols-3 tw-w-full tw-h-full tw-p-3 tw-border tw-border-l-0 tw-border-ic-ink-3 tw-text-center">
          {commerce("listTablePrice.4.subHeader.0.itemContent.annual.value") !=
            "" &&
            commerce("listTablePrice.4.subHeader.0.itemContent.annual.value")}
          {commerce("listTablePrice.4.subHeader.0.itemContent.annual.image") !=
            "" && (
            <Image
              src={
                commerce(
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

      <div className="tw-grid tw-grid-cols-10 tw-h-auto tw-items-center tw-sticky tw-bg-white tw-text-base">
        <div className="tw-col-span-2 tw-font-semibold tw-w-full tw-h-full tw-p-3 tw-border tw-border-r-0 tw-border-ic-ink-3">
          {commerce("listTablePrice.4.titleLeft.invoice")}
        </div>
        <div className="tw-col-span-4 tw-w-full tw-h-full tw-p-3 tw-border tw-border-ic-ink-3">
          {commerce("listTablePrice.4.functions.invoice.title")}
        </div>
        <div className="tw-col-span-4 tw-grid tw-grid-cols-3 tw-w-full tw-h-full tw-p-3 tw-border tw-border-l-0 tw-border-ic-ink-3 tw-text-center">
          {commerce("listTablePrice.4.subHeader.0.itemContent.invoice.value") !=
            "" &&
            commerce("listTablePrice.4.subHeader.0.itemContent.invoice.value")}
          {commerce("listTablePrice.4.subHeader.0.itemContent.invoice.image") !=
            "" && (
            <Image
              src={
                commerce(
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
      <div className="tw-grid tw-grid-cols-10 tw-h-auto tw-items-center tw-sticky tw-bg-white tw-text-base">
        <div className="tw-col-span-2 tw-font-semibold tw-w-full tw-h-full tw-p-3 tw-border tw-border-r-0 tw-border-ic-ink-3 tw-rounded-bl-xl"></div>
        <div className="tw-col-span-4 tw-w-full tw-h-full tw-p-3 tw-border tw-border-ic-ink-3">
          {commerce("listTablePrice.4.functions.transaction.title")}
        </div>
        <div className="tw-col-span-4 tw-grid tw-grid-cols-3 tw-w-full tw-h-full tw-p-3 tw-border tw-border-l-0 tw-border-ic-ink-3 tw-text-center tw-rounded-br-xl">
          {commerce(
            "listTablePrice.4.subHeader.0.itemContent.transaction.value",
          ) != "" &&
            commerce(
              "listTablePrice.4.subHeader.0.itemContent.transaction.value",
            )}
          {commerce(
            "listTablePrice.4.subHeader.0.itemContent.transaction.image",
          ) != "" && (
            <Image
              src={
                commerce(
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
  );
};
export default TableDesktop;
