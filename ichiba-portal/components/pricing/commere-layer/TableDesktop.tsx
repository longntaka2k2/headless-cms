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
      <div className="tw-grid tw-grid-cols-10 tw-h-auto tw-items-center tw-sticky tw-z-1 tw-top-[148px] tw-bg-white tw-text-base tw-font-bold">
        <div className="tw-col-span-2 tw-w-full tw-h-full tw-p-3 tw-bg-ic-ink-1 tw-border tw-border-r-0 tw-border-ic-ink-2 tw-rounded-tl-xl">
          {commerce("listTablePrice.0.titleLeft.heading")}
        </div>
        <div className="tw-col-span-2 tw-w-full tw-h-full tw-p-3 tw-bg-ic-ink-1 tw-border tw-border-ic-ink-2">
          {commerce("listTablePrice.0.functions.heading")}
        </div>
        <div className="tw-col-span-6 tw-grid tw-grid-cols-3 tw-w-full tw-h-full">
          {(
            commerce(`listTablePrice.0.subHeader`, {
              returnObjects: true,
            }) as string[]
          ).map((value: any, index: number) => (
            <div
              key={index}
              className={clsx(
                "tw-p-3 tw-border tw-border-l-0 tw-text-center",
                index === 0
                  ? "tw-bg-green-1 tw-border-green-2 tw-text-green-6"
                  : "tw-bg-blue-1 tw-border-blue-2 tw-text-blue-6",
                index === 3 ? "tw-rounded-tr-xl" : "",
              )}
            >
              {value?.itemContent?.title}
            </div>
          ))}
        </div>
      </div>
      <div className="tw-grid tw-grid-cols-10 tw-h-auto tw-items-center tw-sticky tw-bg-white tw-text-base">
        <div className="tw-col-span-2 tw-font-semibold tw-w-full tw-h-full tw-p-3 tw-border tw-border-r-0 tw-border-ic-ink-3"></div>
        <div className="tw-col-span-2 tw-w-full tw-h-full tw-p-3 tw-border tw-border-ic-ink-3">
          {commerce("listTablePrice.0.functions.priceMonth.title")}
        </div>
        <div className="tw-col-span-6 tw-grid tw-grid-cols-3 tw-w-full tw-h-full">
          {(
            commerce(`listTablePrice.0.subHeader`, {
              returnObjects: true,
            }) as string[]
          ).map((value: any, index: number) => (
            <div
              key={index}
              className={clsx(
                "tw-p-3 tw-border tw-border-l-0 tw-border-ic-ink-3 tw-text-center",
              )}
            >
              {value?.itemContent?.priceMonth.value != "" &&
                value?.itemContent?.priceMonth.value}
              {value?.itemContent?.priceMonth.image != "" && (
                <Image
                  src={value?.itemContent?.priceMonth.image}
                  width={24}
                  height={24}
                  alt=""
                  className={clsx("tw-mx-auto")}
                />
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="tw-grid tw-grid-cols-10 tw-h-auto tw-items-center tw-sticky tw-bg-white tw-text-base">
        <div className="tw-col-span-2 tw-font-semibold tw-w-full tw-h-full tw-p-3 tw-border tw-border-r-0 tw-border-ic-ink-3"></div>
        <div className="tw-col-span-2 tw-w-full tw-h-full tw-p-3 tw-border tw-border-ic-ink-3">
          {commerce("listTablePrice.0.functions.priceYear.title")}
        </div>
        <div className="tw-col-span-6 tw-grid tw-grid-cols-3 tw-w-full tw-h-full">
          {(
            commerce(`listTablePrice.0.subHeader`, {
              returnObjects: true,
            }) as string[]
          ).map((value: any, index: number) => (
            <div
              key={index}
              className={clsx(
                "tw-p-3 tw-border tw-border-l-0 tw-border-ic-ink-3 tw-text-center",
              )}
            >
              {value?.itemContent?.priceYear.value != "" &&
                value?.itemContent?.priceYear.value}
              {value?.itemContent?.priceYear.image != "" && (
                <Image
                  src={value?.itemContent?.priceYear.image}
                  width={24}
                  height={24}
                  alt=""
                  className={clsx("tw-mx-auto")}
                />
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="tw-grid tw-grid-cols-10 tw-h-auto tw-items-center tw-sticky tw-bg-white tw-text-base">
        <div className="tw-col-span-2 tw-font-semibold tw-w-full tw-h-full tw-p-3 tw-border tw-border-r-0 tw-border-ic-ink-3">
          {commerce("listTablePrice.0.titleLeft.userManagement")}
        </div>
        <div className="tw-col-span-2 tw-w-full tw-h-full tw-p-3 tw-border tw-border-ic-ink-3">
          {commerce("listTablePrice.0.functions.userManagement.title")}
        </div>
        <div className="tw-col-span-6 tw-grid tw-grid-cols-3 tw-w-full tw-h-full">
          {(
            commerce(`listTablePrice.0.subHeader`, {
              returnObjects: true,
            }) as string[]
          ).map((value: any, index: number) => (
            <div
              key={index}
              className={clsx(
                "tw-p-3 tw-border tw-border-l-0 tw-border-ic-ink-3 tw-text-center",
              )}
            >
              {value?.itemContent?.userManagement.value != "" &&
                value?.itemContent?.userManagement.value}
              {value?.itemContent?.userManagement.image != "" && (
                <Image
                  src={value?.itemContent?.userManagement.image}
                  width={24}
                  height={24}
                  alt=""
                  className={clsx("tw-mx-auto")}
                />
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="tw-grid tw-grid-cols-10 tw-h-auto tw-items-center tw-sticky tw-bg-white tw-text-base">
        <div className="tw-col-span-2 tw-font-semibold tw-w-full tw-h-full tw-p-3 tw-border tw-border-r-0 tw-border-ic-ink-3">
          {commerce("listTablePrice.0.titleLeft.iChiba")}
        </div>
        <div className="tw-col-span-2 tw-w-full tw-h-full tw-p-3 tw-border tw-border-ic-ink-3">
          {commerce("listTablePrice.0.functions.markets.title")}
        </div>
        <div className="tw-col-span-6 tw-grid tw-grid-cols-3 tw-w-full tw-h-full">
          {(
            commerce(`listTablePrice.0.subHeader`, {
              returnObjects: true,
            }) as string[]
          ).map((value: any, index: number) => (
            <div
              key={index}
              className={clsx(
                "tw-p-3 tw-border tw-border-l-0 tw-border-ic-ink-3 tw-text-center",
              )}
            >
              {value?.itemContent?.markets.value != "" &&
                value?.itemContent?.markets.value}
              {value?.itemContent?.markets.image != "" && (
                <Image
                  src={value?.itemContent?.markets.image}
                  width={24}
                  height={24}
                  alt=""
                  className={clsx("tw-mx-auto")}
                />
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="tw-grid tw-grid-cols-10 tw-h-auto tw-items-center tw-sticky tw-bg-white tw-text-base">
        <div className="tw-col-span-2 tw-font-semibold tw-w-full tw-h-full tw-p-3 tw-border tw-border-r-0 tw-border-ic-ink-3">
          {commerce("listTablePrice.0.titleLeft.inventory")}
        </div>
        <div className="tw-col-span-2 tw-w-full tw-h-full tw-p-3 tw-border tw-border-ic-ink-3">
          {commerce("listTablePrice.0.functions.inventoryLocation.title")}
        </div>
        <div className="tw-col-span-6 tw-grid tw-grid-cols-3 tw-w-full tw-h-full">
          {(
            commerce(`listTablePrice.0.subHeader`, {
              returnObjects: true,
            }) as string[]
          ).map((value: any, index: number) => (
            <div
              key={index}
              className={clsx(
                "tw-p-3 tw-border tw-border-l-0 tw-border-ic-ink-3 tw-text-center",
              )}
            >
              {value?.itemContent?.inventoryLocation.value != "" &&
                value?.itemContent?.inventoryLocation.value}
              {value?.itemContent?.inventoryLocation.image != "" && (
                <Image
                  src={value?.itemContent?.inventoryLocation.image}
                  width={24}
                  height={24}
                  alt=""
                  className={clsx("tw-mx-auto")}
                />
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="tw-grid tw-grid-cols-10 tw-h-auto tw-items-center tw-sticky tw-bg-white tw-text-base">
        <div className="tw-col-span-2 tw-font-semibold tw-w-full tw-h-full tw-p-3 tw-border tw-border-r-0 tw-border-ic-ink-3"></div>
        <div className="tw-col-span-2 tw-w-full tw-h-full tw-p-3 tw-border tw-border-ic-ink-3">
          {commerce("listTablePrice.0.functions.inventoryAllocation.title")}
        </div>
        <div className="tw-col-span-6 tw-grid tw-grid-cols-3 tw-w-full tw-h-full">
          {(
            commerce(`listTablePrice.0.subHeader`, {
              returnObjects: true,
            }) as string[]
          ).map((value: any, index: number) => (
            <div
              key={index}
              className={clsx(
                "tw-p-3 tw-border tw-border-l-0 tw-border-ic-ink-3 tw-text-center",
              )}
            >
              {value?.itemContent?.inventoryAllocation.value != "" &&
                value?.itemContent?.inventoryAllocation.value}
              {value?.itemContent?.inventoryAllocation.image != "" && (
                <Image
                  src={value?.itemContent?.inventoryAllocation.image}
                  width={24}
                  height={24}
                  alt=""
                  className={clsx("tw-mx-auto")}
                />
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="tw-grid tw-grid-cols-10 tw-h-auto tw-items-center tw-sticky tw-bg-white tw-text-base">
        <div className="tw-col-span-2 tw-font-semibold tw-w-full tw-h-full tw-p-3 tw-border tw-border-r-0 tw-border-ic-ink-3"></div>
        <div className="tw-col-span-2 tw-w-full tw-h-full tw-p-3 tw-border tw-border-ic-ink-3">
          {commerce("listTablePrice.0.functions.network.title")}
        </div>
        <div className="tw-col-span-6 tw-grid tw-grid-cols-3 tw-w-full tw-h-full">
          {(
            commerce(`listTablePrice.0.subHeader`, {
              returnObjects: true,
            }) as string[]
          ).map((value: any, index: number) => (
            <div
              key={index}
              className={clsx(
                "tw-p-3 tw-border tw-border-l-0 tw-border-ic-ink-3 tw-text-center",
              )}
            >
              {value?.itemContent?.network.value != "" &&
                value?.itemContent?.network.value}
              {value?.itemContent?.network.image != "" && (
                <Image
                  src={value?.itemContent?.network.image}
                  width={24}
                  height={24}
                  alt=""
                  className={clsx("tw-mx-auto")}
                />
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="tw-grid tw-grid-cols-10 tw-h-auto tw-items-center tw-sticky tw-bg-white tw-text-base">
        <div className="tw-col-span-2 tw-font-semibold tw-w-full tw-h-full tw-p-3 tw-border tw-border-r-0 tw-border-ic-ink-3"></div>
        <div className="tw-col-span-2 tw-w-full tw-h-full tw-p-3 tw-border tw-border-ic-ink-3">
          {commerce("listTablePrice.0.functions.inventoryForecasting.title")}
        </div>
        <div className="tw-col-span-6 tw-grid tw-grid-cols-3 tw-w-full tw-h-full">
          {(
            commerce(`listTablePrice.0.subHeader`, {
              returnObjects: true,
            }) as string[]
          ).map((value: any, index: number) => (
            <div
              key={index}
              className={clsx(
                "tw-p-3 tw-border tw-border-l-0 tw-border-ic-ink-3 tw-text-center",
              )}
            >
              {value?.itemContent?.inventoryForecasting.value != "" &&
                value?.itemContent?.inventoryForecasting.value}
              {value?.itemContent?.inventoryForecasting.image != "" && (
                <Image
                  src={value?.itemContent?.inventoryForecasting.image}
                  width={24}
                  height={24}
                  alt=""
                  className={clsx("tw-mx-auto")}
                />
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="tw-grid tw-grid-cols-10 tw-h-auto tw-items-center tw-sticky tw-bg-white tw-text-base">
        <div className="tw-col-span-2 tw-font-semibold tw-w-full tw-h-full tw-p-3 tw-border tw-border-r-0 tw-border-ic-ink-3">
          {commerce("listTablePrice.0.titleLeft.purchaseOrder")}
        </div>
        <div className="tw-col-span-2 tw-w-full tw-h-full tw-p-3 tw-border tw-border-ic-ink-3">
          {commerce("listTablePrice.0.functions.suppliers.title")}
        </div>
        <div className="tw-col-span-6 tw-grid tw-grid-cols-3 tw-w-full tw-h-full">
          {(
            commerce(`listTablePrice.0.subHeader`, {
              returnObjects: true,
            }) as string[]
          ).map((value: any, index: number) => (
            <div
              key={index}
              className={clsx(
                "tw-p-3 tw-border tw-border-l-0 tw-border-ic-ink-3 tw-text-center",
              )}
            >
              {value?.itemContent?.suppliers.value != "" &&
                value?.itemContent?.suppliers.value}
              {value?.itemContent?.suppliers.image != "" && (
                <Image
                  src={value?.itemContent?.suppliers.image}
                  width={24}
                  height={24}
                  alt=""
                  className={clsx("tw-mx-auto")}
                />
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="tw-grid tw-grid-cols-10 tw-h-auto tw-items-center tw-sticky tw-bg-white tw-text-base">
        <div className="tw-col-span-2 tw-font-semibold tw-w-full tw-h-full tw-p-3 tw-border tw-border-r-0 tw-border-ic-ink-3"></div>
        <div className="tw-col-span-2 tw-w-full tw-h-full tw-p-3 tw-border tw-border-ic-ink-3">
          {commerce("listTablePrice.0.functions.inboundProcessing.title")}
        </div>
        <div className="tw-col-span-6 tw-grid tw-grid-cols-3 tw-w-full tw-h-full">
          {(
            commerce(`listTablePrice.0.subHeader`, {
              returnObjects: true,
            }) as string[]
          ).map((value: any, index: number) => (
            <div
              key={index}
              className={clsx(
                "tw-p-3 tw-border tw-border-l-0 tw-border-ic-ink-3 tw-text-center",
              )}
            >
              {value?.itemContent?.inboundProcessing.value != "" &&
                value?.itemContent?.inboundProcessing.value}
              {value?.itemContent?.inboundProcessing.image != "" && (
                <Image
                  src={value?.itemContent?.inboundProcessing.image}
                  width={24}
                  height={24}
                  alt=""
                  className={clsx("tw-mx-auto")}
                />
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="tw-grid tw-grid-cols-10 tw-h-auto tw-items-center tw-sticky tw-bg-white tw-text-base">
        <div className="tw-col-span-2 tw-font-semibold tw-w-full tw-h-full tw-p-3 tw-border tw-border-r-0 tw-border-ic-ink-3"></div>
        <div className="tw-col-span-2 tw-w-full tw-h-full tw-p-3 tw-border tw-border-ic-ink-3">
          {commerce("listTablePrice.0.functions.cost.title")}
        </div>
        <div className="tw-col-span-6 tw-grid tw-grid-cols-3 tw-w-full tw-h-full">
          {(
            commerce(`listTablePrice.0.subHeader`, {
              returnObjects: true,
            }) as string[]
          ).map((value: any, index: number) => (
            <div
              key={index}
              className={clsx(
                "tw-p-3 tw-border tw-border-l-0 tw-border-ic-ink-3 tw-text-center",
              )}
            >
              {value?.itemContent?.cost.value != "" &&
                value?.itemContent?.cost.value}
              {value?.itemContent?.cost.image != "" && (
                <Image
                  src={value?.itemContent?.cost.image}
                  width={24}
                  height={24}
                  alt=""
                  className={clsx("tw-mx-auto")}
                />
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="tw-grid tw-grid-cols-10 tw-h-auto tw-items-center tw-sticky tw-bg-white tw-text-base">
        <div className="tw-col-span-2 tw-font-semibold tw-w-full tw-h-full tw-p-3 tw-border tw-border-r-0 tw-border-ic-ink-3"></div>
        <div className="tw-col-span-2 tw-w-full tw-h-full tw-p-3 tw-border tw-border-ic-ink-3">
          {commerce("listTablePrice.0.functions.purchasing.title")}
        </div>
        <div className="tw-col-span-6 tw-grid tw-grid-cols-3 tw-w-full tw-h-full">
          {(
            commerce(`listTablePrice.0.subHeader`, {
              returnObjects: true,
            }) as string[]
          ).map((value: any, index: number) => (
            <div
              key={index}
              className={clsx(
                "tw-p-3 tw-border tw-border-l-0 tw-border-ic-ink-3 tw-text-center",
              )}
            >
              {value?.itemContent?.purchasing.value != "" &&
                value?.itemContent?.purchasing.value}
              {value?.itemContent?.purchasing.image != "" && (
                <Image
                  src={value?.itemContent?.purchasing.image}
                  width={24}
                  height={24}
                  alt=""
                  className={clsx("tw-mx-auto")}
                />
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="tw-grid tw-grid-cols-10 tw-h-auto tw-items-center tw-sticky tw-bg-white tw-text-base">
        <div className="tw-col-span-2 tw-font-semibold tw-w-full tw-h-full tw-p-3 tw-border tw-border-r-0 tw-border-ic-ink-3"></div>
        <div className="tw-col-span-2 tw-w-full tw-h-full tw-p-3 tw-border tw-border-ic-ink-3">
          {commerce("listTablePrice.0.functions.inboundReports.title")}
        </div>
        <div className="tw-col-span-6 tw-grid tw-grid-cols-3 tw-w-full tw-h-full">
          {(
            commerce(`listTablePrice.0.subHeader`, {
              returnObjects: true,
            }) as string[]
          ).map((value: any, index: number) => (
            <div
              key={index}
              className={clsx(
                "tw-p-3 tw-border tw-border-l-0 tw-border-ic-ink-3 tw-text-center",
              )}
            >
              {value?.itemContent?.inboundReports.value != "" &&
                value?.itemContent?.inboundReports.value}
              {value?.itemContent?.inboundReports.image != "" && (
                <Image
                  src={value?.itemContent?.inboundReports.image}
                  width={24}
                  height={24}
                  alt=""
                  className={clsx("tw-mx-auto")}
                />
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="tw-grid tw-grid-cols-10 tw-h-auto tw-items-center tw-sticky tw-bg-white tw-text-base">
        <div className="tw-col-span-2 tw-font-semibold tw-w-full tw-h-full tw-p-3 tw-border tw-border-r-0 tw-border-ic-ink-3">
          {commerce("listTablePrice.0.titleLeft.saleOrder")}
        </div>
        <div className="tw-col-span-2 tw-w-full tw-h-full tw-p-3 tw-border tw-border-ic-ink-3">
          {commerce("listTablePrice.0.functions.maximum.title")}
        </div>
        <div className="tw-col-span-6 tw-grid tw-grid-cols-3 tw-w-full tw-h-full">
          {(
            commerce(`listTablePrice.0.subHeader`, {
              returnObjects: true,
            }) as string[]
          ).map((value: any, index: number) => (
            <div
              key={index}
              className={clsx(
                "tw-p-3 tw-border tw-border-l-0 tw-border-ic-ink-3 tw-text-center",
              )}
            >
              {value?.itemContent?.maximum.value != "" &&
                value?.itemContent?.maximum.value}
              {value?.itemContent?.maximum.image != "" && (
                <Image
                  src={value?.itemContent?.maximum.image}
                  width={24}
                  height={24}
                  alt=""
                  className={clsx("tw-mx-auto")}
                />
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="tw-grid tw-grid-cols-10 tw-h-auto tw-items-center tw-sticky tw-bg-white tw-text-base">
        <div className="tw-col-span-2 tw-font-semibold tw-w-full tw-h-full tw-p-3 tw-border tw-border-r-0 tw-border-ic-ink-3"></div>
        <div className="tw-col-span-2 tw-w-full tw-h-full tw-p-3 tw-border tw-border-ic-ink-3">
          {commerce("listTablePrice.0.functions.return.title")}
        </div>
        <div className="tw-col-span-6 tw-grid tw-grid-cols-3 tw-w-full tw-h-full">
          {(
            commerce(`listTablePrice.0.subHeader`, {
              returnObjects: true,
            }) as string[]
          ).map((value: any, index: number) => (
            <div
              key={index}
              className={clsx(
                "tw-p-3 tw-border tw-border-l-0 tw-border-ic-ink-3 tw-text-center",
              )}
            >
              {value?.itemContent?.return.value != "" &&
                value?.itemContent?.return.value}
              {value?.itemContent?.return.image != "" && (
                <Image
                  src={value?.itemContent?.return.image}
                  width={24}
                  height={24}
                  alt=""
                  className={clsx("tw-mx-auto")}
                />
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="tw-grid tw-grid-cols-10 tw-h-auto tw-items-center tw-sticky tw-bg-white tw-text-base">
        <div className="tw-col-span-2 tw-font-semibold tw-w-full tw-h-full tw-p-3 tw-border tw-border-r-0 tw-border-ic-ink-3">
          {commerce("listTablePrice.0.titleLeft.product")}
        </div>
        <div className="tw-col-span-2 tw-w-full tw-h-full tw-p-3 tw-border tw-border-ic-ink-3">
          {commerce("listTablePrice.0.functions.single.title")}
        </div>
        <div className="tw-col-span-6 tw-grid tw-grid-cols-3 tw-w-full tw-h-full">
          {(
            commerce(`listTablePrice.0.subHeader`, {
              returnObjects: true,
            }) as string[]
          ).map((value: any, index: number) => (
            <div
              key={index}
              className={clsx(
                "tw-p-3 tw-border tw-border-l-0 tw-border-ic-ink-3 tw-text-center",
              )}
            >
              {value?.itemContent?.single.value != "" &&
                value?.itemContent?.single.value}
              {value?.itemContent?.single.image != "" && (
                <Image
                  src={value?.itemContent?.single.image}
                  width={24}
                  height={24}
                  alt=""
                  className={clsx("tw-mx-auto")}
                />
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="tw-grid tw-grid-cols-10 tw-h-auto tw-items-center tw-sticky tw-bg-white tw-text-base">
        <div className="tw-col-span-2 tw-font-semibold tw-w-full tw-h-full tw-p-3 tw-border tw-border-r-0 tw-border-ic-ink-3"></div>
        <div className="tw-col-span-2 tw-w-full tw-h-full tw-p-3 tw-border tw-border-ic-ink-3">
          {commerce("listTablePrice.0.functions.catalog.title")}
        </div>
        <div className="tw-col-span-6 tw-grid tw-grid-cols-3 tw-w-full tw-h-full">
          {(
            commerce(`listTablePrice.0.subHeader`, {
              returnObjects: true,
            }) as string[]
          ).map((value: any, index: number) => (
            <div
              key={index}
              className={clsx(
                "tw-p-3 tw-border tw-border-l-0 tw-border-ic-ink-3 tw-text-center",
              )}
            >
              {value?.itemContent?.catalog.value != "" &&
                value?.itemContent?.catalog.value}
              {value?.itemContent?.catalog.image != "" && (
                <Image
                  src={value?.itemContent?.catalog.image}
                  width={24}
                  height={24}
                  alt=""
                  className={clsx("tw-mx-auto")}
                />
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="tw-grid tw-grid-cols-10 tw-h-auto tw-items-center tw-sticky tw-bg-white tw-text-base">
        <div className="tw-col-span-2 tw-font-semibold tw-w-full tw-h-full tw-p-3 tw-border tw-border-r-0 tw-border-ic-ink-3"></div>
        <div className="tw-col-span-2 tw-w-full tw-h-full tw-p-3 tw-border tw-border-ic-ink-3">
          {commerce("listTablePrice.0.functions.documentation.title")}
        </div>
        <div className="tw-col-span-6 tw-grid tw-grid-cols-3 tw-w-full tw-h-full">
          {(
            commerce(`listTablePrice.0.subHeader`, {
              returnObjects: true,
            }) as string[]
          ).map((value: any, index: number) => (
            <div
              key={index}
              className={clsx(
                "tw-p-3 tw-border tw-border-l-0 tw-border-ic-ink-3 tw-text-center",
              )}
            >
              {value?.itemContent?.documentation.value != "" &&
                value?.itemContent?.documentation.value}
              {value?.itemContent?.documentation.image != "" && (
                <Image
                  src={value?.itemContent?.documentation.image}
                  width={24}
                  height={24}
                  alt=""
                  className={clsx("tw-mx-auto")}
                />
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="tw-grid tw-grid-cols-10 tw-h-auto tw-items-center tw-sticky tw-bg-white tw-text-base">
        <div className="tw-col-span-2 tw-font-semibold tw-w-full tw-h-full tw-p-3 tw-border tw-border-r-0 tw-border-ic-ink-3">
          {commerce("listTablePrice.0.titleLeft.reportAnalytics")}
        </div>
        <div className="tw-col-span-2 tw-w-full tw-h-full tw-p-3 tw-border tw-border-ic-ink-3">
          {commerce("listTablePrice.0.functions.standard.title")}
        </div>
        <div className="tw-col-span-6 tw-grid tw-grid-cols-3 tw-w-full tw-h-full">
          {(
            commerce(`listTablePrice.0.subHeader`, {
              returnObjects: true,
            }) as string[]
          ).map((value: any, index: number) => (
            <div
              key={index}
              className={clsx(
                "tw-p-3 tw-border tw-border-l-0 tw-border-ic-ink-3 tw-text-center",
              )}
            >
              {value?.itemContent?.standard.value != "" &&
                value?.itemContent?.standard.value}
              {value?.itemContent?.standard.image != "" && (
                <Image
                  src={value?.itemContent?.standard.image}
                  width={24}
                  height={24}
                  alt=""
                  className={clsx("tw-mx-auto")}
                />
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="tw-grid tw-grid-cols-10 tw-h-auto tw-items-center tw-sticky tw-bg-white tw-text-base">
        <div className="tw-col-span-2 tw-font-semibold tw-w-full tw-h-full tw-p-3 tw-border tw-border-r-0 tw-border-ic-ink-3"></div>
        <div className="tw-col-span-2 tw-w-full tw-h-full tw-p-3 tw-border tw-border-ic-ink-3">
          {commerce("listTablePrice.0.functions.advanced.title")}
        </div>
        <div className="tw-col-span-6 tw-grid tw-grid-cols-3 tw-w-full tw-h-full">
          {(
            commerce(`listTablePrice.0.subHeader`, {
              returnObjects: true,
            }) as string[]
          ).map((value: any, index: number) => (
            <div
              key={index}
              className={clsx(
                "tw-p-3 tw-border tw-border-l-0 tw-border-ic-ink-3 tw-text-center",
              )}
            >
              {value?.itemContent?.advanced.value != "" &&
                value?.itemContent?.advanced.value}
              {value?.itemContent?.advanced.image != "" && (
                <Image
                  src={value?.itemContent?.advanced.image}
                  width={24}
                  height={24}
                  alt=""
                  className={clsx("tw-mx-auto")}
                />
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="tw-grid tw-grid-cols-10 tw-h-auto tw-items-center tw-sticky tw-bg-white tw-text-base">
        <div className="tw-col-span-2 tw-font-semibold tw-w-full tw-h-full tw-p-3 tw-border tw-border-r-0 tw-border-ic-ink-3">
          {commerce("listTablePrice.0.titleLeft.systemIntegration")}
        </div>
        <div className="tw-col-span-2 tw-w-full tw-h-full tw-p-3 tw-border tw-border-ic-ink-3">
          {commerce("listTablePrice.0.functions.integration.title")}
        </div>
        <div className="tw-col-span-6 tw-grid tw-grid-cols-3 tw-w-full tw-h-full">
          {(
            commerce(`listTablePrice.0.subHeader`, {
              returnObjects: true,
            }) as string[]
          ).map((value: any, index: number) => (
            <div
              key={index}
              className={clsx(
                "tw-p-3 tw-border tw-border-l-0 tw-border-ic-ink-3 tw-text-center",
              )}
            >
              {value?.itemContent?.integration.value != "" &&
                value?.itemContent?.integration.value}
              {value?.itemContent?.integration.image != "" && (
                <Image
                  src={value?.itemContent?.integration.image}
                  width={24}
                  height={24}
                  alt=""
                  className={clsx("tw-mx-auto")}
                />
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="tw-grid tw-grid-cols-10 tw-h-auto tw-items-center tw-sticky tw-bg-white tw-text-base">
        <div className="tw-col-span-2 tw-font-semibold tw-w-full tw-h-full tw-p-3 tw-border tw-border-r-0 tw-border-ic-ink-3">
          {commerce("listTablePrice.0.titleLeft.salesChannelIntegration")}
        </div>
        <div className="tw-col-span-2 tw-w-full tw-h-full tw-p-3 tw-border tw-border-ic-ink-3">
          {commerce("listTablePrice.0.functions.maximumStores.title")}
        </div>
        <div className="tw-col-span-6 tw-grid tw-grid-cols-3 tw-w-full tw-h-full">
          {(
            commerce(`listTablePrice.0.subHeader`, {
              returnObjects: true,
            }) as string[]
          ).map((value: any, index: number) => (
            <div
              key={index}
              className={clsx(
                "tw-p-3 tw-border tw-border-l-0 tw-border-ic-ink-3 tw-text-center",
              )}
            >
              {value?.itemContent?.maximumStores.value != "" &&
                value?.itemContent?.maximumStores.value}
              {value?.itemContent?.maximumStores.image != "" && (
                <Image
                  src={value?.itemContent?.maximumStores.image}
                  width={24}
                  height={24}
                  alt=""
                  className={clsx("tw-mx-auto")}
                />
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="tw-grid tw-grid-cols-10 tw-h-auto tw-items-center tw-sticky tw-bg-white tw-text-base">
        <div className="tw-col-span-2 tw-font-semibold tw-w-full tw-h-full tw-p-3 tw-border tw-border-r-0 tw-border-ic-ink-3"></div>
        <div className="tw-col-span-2 tw-w-full tw-h-full tw-p-3 tw-border tw-border-ic-ink-3">
          {commerce("listTablePrice.0.functions.munberOfIntegrated.title")}
        </div>
        <div className="tw-col-span-6 tw-grid tw-grid-cols-3 tw-w-full tw-h-full">
          {(
            commerce(`listTablePrice.0.subHeader`, {
              returnObjects: true,
            }) as string[]
          ).map((value: any, index: number) => (
            <div
              key={index}
              className={clsx(
                "tw-p-3 tw-border tw-border-l-0 tw-border-ic-ink-3 tw-text-center",
              )}
            >
              {value?.itemContent?.munberOfIntegrated.value != "" &&
                value?.itemContent?.munberOfIntegrated.value}
              {value?.itemContent?.munberOfIntegrated.image != "" && (
                <Image
                  src={value?.itemContent?.munberOfIntegrated.image}
                  width={24}
                  height={24}
                  alt=""
                  className={clsx("tw-mx-auto")}
                />
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="tw-grid tw-grid-cols-10 tw-h-auto tw-items-center tw-sticky tw-bg-white tw-text-base">
        <div className="tw-col-span-2 tw-font-semibold tw-w-full tw-h-full tw-p-3 tw-border tw-border-r-0 tw-border-ic-ink-3"></div>
        <div className="tw-col-span-2 tw-w-full tw-h-full tw-p-3 tw-border tw-border-ic-ink-3">
          {commerce("listTablePrice.0.functions.product.title")}
        </div>
        <div className="tw-col-span-6 tw-grid tw-grid-cols-3 tw-w-full tw-h-full">
          {(
            commerce(`listTablePrice.0.subHeader`, {
              returnObjects: true,
            }) as string[]
          ).map((value: any, index: number) => (
            <div
              key={index}
              className={clsx(
                "tw-p-3 tw-border tw-border-l-0 tw-border-ic-ink-3 tw-text-center",
              )}
            >
              {value?.itemContent?.product.value != "" &&
                value?.itemContent?.product.value}
              {value?.itemContent?.product.image != "" && (
                <Image
                  src={value?.itemContent?.product.image}
                  width={24}
                  height={24}
                  alt=""
                  className={clsx("tw-mx-auto")}
                />
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="tw-grid tw-grid-cols-10 tw-h-auto tw-items-center tw-sticky tw-bg-white tw-text-base">
        <div className="tw-col-span-2 tw-font-semibold tw-w-full tw-h-full tw-p-3 tw-border tw-border-r-0 tw-border-ic-ink-3"></div>
        <div className="tw-col-span-2 tw-w-full tw-h-full tw-p-3 tw-border tw-border-ic-ink-3">
          {commerce("listTablePrice.0.functions.storefront.title")}
        </div>
        <div className="tw-col-span-6 tw-grid tw-grid-cols-3 tw-w-full tw-h-full">
          {(
            commerce(`listTablePrice.0.subHeader`, {
              returnObjects: true,
            }) as string[]
          ).map((value: any, index: number) => (
            <div
              key={index}
              className={clsx(
                "tw-p-3 tw-border tw-border-l-0 tw-border-ic-ink-3 tw-text-center",
              )}
            >
              {value?.itemContent?.storefront.value != "" &&
                value?.itemContent?.storefront.value}
              {value?.itemContent?.storefront.image != "" && (
                <Image
                  src={value?.itemContent?.storefront.image}
                  width={24}
                  height={24}
                  alt=""
                  className={clsx("tw-mx-auto")}
                />
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="tw-grid tw-grid-cols-10 tw-h-auto tw-items-center tw-sticky tw-bg-white tw-text-base">
        <div className="tw-col-span-2 tw-font-semibold tw-w-full tw-h-full tw-p-3 tw-border tw-border-r-0 tw-border-ic-ink-3">
          {commerce("listTablePrice.0.titleLeft.marketingAutomation")}
        </div>
        <div className="tw-col-span-2 tw-w-full tw-h-full tw-p-3 tw-border tw-border-ic-ink-3">
          {commerce("listTablePrice.0.functions.broadcast.title")}
        </div>
        <div className="tw-col-span-6 tw-grid tw-grid-cols-3 tw-w-full tw-h-full">
          {(
            commerce(`listTablePrice.0.subHeader`, {
              returnObjects: true,
            }) as string[]
          ).map((value: any, index: number) => (
            <div
              key={index}
              className={clsx(
                "tw-p-3 tw-border tw-border-l-0 tw-border-ic-ink-3 tw-text-center",
              )}
            >
              {value?.itemContent?.broadcast.value != "" &&
                value?.itemContent?.broadcast.value}
              {value?.itemContent?.broadcast.image != "" && (
                <Image
                  src={value?.itemContent?.broadcast.image}
                  width={24}
                  height={24}
                  alt=""
                  className={clsx("tw-mx-auto")}
                />
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="tw-grid tw-grid-cols-10 tw-h-auto tw-items-center tw-sticky tw-bg-white tw-text-base">
        <div className="tw-col-span-2 tw-font-semibold tw-w-full tw-h-full tw-p-3 tw-border tw-border-r-0 tw-border-ic-ink-3"></div>
        <div className="tw-col-span-2 tw-w-full tw-h-full tw-p-3 tw-border tw-border-ic-ink-3">
          {commerce("listTablePrice.0.functions.campaign.title")}
        </div>
        <div className="tw-col-span-6 tw-grid tw-grid-cols-3 tw-w-full tw-h-full">
          {(
            commerce(`listTablePrice.0.subHeader`, {
              returnObjects: true,
            }) as string[]
          ).map((value: any, index: number) => (
            <div
              key={index}
              className={clsx(
                "tw-p-3 tw-border tw-border-l-0 tw-border-ic-ink-3 tw-text-center",
              )}
            >
              {value?.itemContent?.campaign.value != "" &&
                value?.itemContent?.campaign.value}
              {value?.itemContent?.campaign.image != "" && (
                <Image
                  src={value?.itemContent?.campaign.image}
                  width={24}
                  height={24}
                  alt=""
                  className={clsx("tw-mx-auto")}
                />
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="tw-grid tw-grid-cols-10 tw-h-auto tw-items-center tw-sticky tw-bg-white tw-text-base">
        <div className="tw-col-span-2 tw-font-semibold tw-w-full tw-h-full tw-p-3 tw-border tw-border-r-0 tw-border-ic-ink-3"></div>
        <div className="tw-col-span-2 tw-w-full tw-h-full tw-p-3 tw-border tw-border-ic-ink-3">
          {commerce("listTablePrice.0.functions.integrationCDP.title")}
        </div>
        <div className="tw-col-span-6 tw-grid tw-grid-cols-3 tw-w-full tw-h-full">
          {(
            commerce(`listTablePrice.0.subHeader`, {
              returnObjects: true,
            }) as string[]
          ).map((value: any, index: number) => (
            <div
              key={index}
              className={clsx(
                "tw-p-3 tw-border tw-border-l-0 tw-border-ic-ink-3 tw-text-center",
              )}
            >
              {value?.itemContent?.integrationCDP.value != "" &&
                value?.itemContent?.integrationCDP.value}
              {value?.itemContent?.integrationCDP.image != "" && (
                <Image
                  src={value?.itemContent?.integrationCDP.image}
                  width={24}
                  height={24}
                  alt=""
                  className={clsx("tw-mx-auto")}
                />
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="tw-grid tw-grid-cols-10 tw-h-auto tw-items-center tw-sticky tw-bg-white tw-text-base">
        <div className="tw-col-span-2 tw-font-semibold tw-w-full tw-h-full tw-p-3 tw-border tw-border-r-0 tw-border-ic-ink-3">
          {commerce("listTablePrice.0.titleLeft.loyaltyProgram")}
        </div>
        <div className="tw-col-span-2 tw-w-full tw-h-full tw-p-3 tw-border tw-border-ic-ink-3">
          {commerce("listTablePrice.0.functions.pointWallet.title")}
        </div>
        <div className="tw-col-span-6 tw-grid tw-grid-cols-3 tw-w-full tw-h-full">
          {(
            commerce(`listTablePrice.0.subHeader`, {
              returnObjects: true,
            }) as string[]
          ).map((value: any, index: number) => (
            <div
              key={index}
              className={clsx(
                "tw-p-3 tw-border tw-border-l-0 tw-border-ic-ink-3 tw-text-center",
              )}
            >
              {value?.itemContent?.pointWallet.value != "" &&
                value?.itemContent?.pointWallet.value}
              {value?.itemContent?.pointWallet.image != "" && (
                <Image
                  src={value?.itemContent?.pointWallet.image}
                  width={24}
                  height={24}
                  alt=""
                  className={clsx("tw-mx-auto")}
                />
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="tw-grid tw-grid-cols-10 tw-h-auto tw-items-center tw-sticky tw-bg-white tw-text-base">
        <div className="tw-col-span-2 tw-font-semibold tw-w-full tw-h-full tw-p-3 tw-border tw-border-r-0 tw-border-ic-ink-3"></div>
        <div className="tw-col-span-2 tw-w-full tw-h-full tw-p-3 tw-border tw-border-ic-ink-3">
          {commerce("listTablePrice.0.functions.discount.title")}
        </div>
        <div className="tw-col-span-6 tw-grid tw-grid-cols-3 tw-w-full tw-h-full">
          {(
            commerce(`listTablePrice.0.subHeader`, {
              returnObjects: true,
            }) as string[]
          ).map((value: any, index: number) => (
            <div
              key={index}
              className={clsx(
                "tw-p-3 tw-border tw-border-l-0 tw-border-ic-ink-3 tw-text-center",
              )}
            >
              {value?.itemContent?.discount.value != "" &&
                value?.itemContent?.discount.value}
              {value?.itemContent?.discount.image != "" && (
                <Image
                  src={value?.itemContent?.discount.image}
                  width={24}
                  height={24}
                  alt=""
                  className={clsx("tw-mx-auto")}
                />
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="tw-grid tw-grid-cols-10 tw-h-auto tw-items-center tw-sticky tw-bg-white tw-text-base">
        <div className="tw-col-span-2 tw-font-semibold tw-w-full tw-h-full tw-p-3 tw-border tw-border-r-0 tw-border-ic-ink-3"></div>
        <div className="tw-col-span-2 tw-w-full tw-h-full tw-p-3 tw-border tw-border-ic-ink-3">
          {commerce("listTablePrice.0.functions.voucher.title")}
        </div>
        <div className="tw-col-span-6 tw-grid tw-grid-cols-3 tw-w-full tw-h-full">
          {(
            commerce(`listTablePrice.0.subHeader`, {
              returnObjects: true,
            }) as string[]
          ).map((value: any, index: number) => (
            <div
              key={index}
              className={clsx(
                "tw-p-3 tw-border tw-border-l-0 tw-border-ic-ink-3 tw-text-center",
              )}
            >
              {value?.itemContent?.voucher.value != "" &&
                value?.itemContent?.voucher.value}
              {value?.itemContent?.voucher.image != "" && (
                <Image
                  src={value?.itemContent?.voucher.image}
                  width={24}
                  height={24}
                  alt=""
                  className={clsx("tw-mx-auto")}
                />
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="tw-grid tw-grid-cols-10 tw-h-auto tw-items-center tw-sticky tw-bg-white tw-text-base">
        <div className="tw-col-span-2 tw-font-semibold tw-w-full tw-h-full tw-p-3 tw-border tw-border-r-0 tw-border-ic-ink-3"></div>
        <div className="tw-col-span-2 tw-w-full tw-h-full tw-p-3 tw-border tw-border-ic-ink-3">
          {commerce("listTablePrice.0.functions.cashback.title")}
        </div>
        <div className="tw-col-span-6 tw-grid tw-grid-cols-3 tw-w-full tw-h-full">
          {(
            commerce(`listTablePrice.0.subHeader`, {
              returnObjects: true,
            }) as string[]
          ).map((value: any, index: number) => (
            <div
              key={index}
              className={clsx(
                "tw-p-3 tw-border tw-border-l-0 tw-border-ic-ink-3 tw-text-center",
              )}
            >
              {value?.itemContent?.cashback.value != "" &&
                value?.itemContent?.cashback.value}
              {value?.itemContent?.cashback.image != "" && (
                <Image
                  src={value?.itemContent?.cashback.image}
                  width={24}
                  height={24}
                  alt=""
                  className={clsx("tw-mx-auto")}
                />
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="tw-grid tw-grid-cols-10 tw-h-auto tw-items-center tw-sticky tw-bg-white tw-text-base">
        <div className="tw-col-span-2 tw-font-semibold tw-w-full tw-h-full tw-p-3 tw-border tw-border-r-0 tw-border-ic-ink-3">
          {commerce("listTablePrice.0.titleLeft.cdp")}
        </div>
        <div className="tw-col-span-2 tw-w-full tw-h-full tw-p-3 tw-border tw-border-ic-ink-3">
          {commerce("listTablePrice.0.functions.customerData.title")}
        </div>
        <div className="tw-col-span-6 tw-grid tw-grid-cols-3 tw-w-full tw-h-full">
          {(
            commerce(`listTablePrice.0.subHeader`, {
              returnObjects: true,
            }) as string[]
          ).map((value: any, index: number) => (
            <div
              key={index}
              className={clsx(
                "tw-p-3 tw-border tw-border-l-0 tw-border-ic-ink-3 tw-text-center",
              )}
            >
              {value?.itemContent?.customerData.value != "" &&
                value?.itemContent?.customerData.value}
              {value?.itemContent?.customerData.image != "" && (
                <Image
                  src={value?.itemContent?.customerData.image}
                  width={24}
                  height={24}
                  alt=""
                  className={clsx("tw-mx-auto")}
                />
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="tw-grid tw-grid-cols-10 tw-h-auto tw-items-center tw-sticky tw-bg-white tw-text-base">
        <div className="tw-col-span-2 tw-font-semibold tw-w-full tw-h-full tw-p-3 tw-border tw-border-r-0 tw-border-ic-ink-3">
          {commerce("listTablePrice.0.titleLeft.support")}
        </div>
        <div className="tw-col-span-2 tw-w-full tw-h-full tw-p-3 tw-border tw-border-ic-ink-3">
          {commerce("listTablePrice.0.functions.support.title")}
        </div>
        <div className="tw-col-span-6 tw-grid tw-grid-cols-3 tw-w-full tw-h-full">
          {(
            commerce(`listTablePrice.0.subHeader`, {
              returnObjects: true,
            }) as string[]
          ).map((value: any, index: number) => (
            <div
              key={index}
              className={clsx(
                "tw-p-3 tw-border tw-border-l-0 tw-border-ic-ink-3 tw-text-center",
              )}
            >
              {value?.itemContent?.support.value != "" &&
                value?.itemContent?.support.value}
              {value?.itemContent?.support.image != "" && (
                <Image
                  src={value?.itemContent?.support.image}
                  width={24}
                  height={24}
                  alt=""
                  className={clsx("tw-mx-auto")}
                />
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="tw-grid tw-grid-cols-10 tw-h-auto tw-items-center tw-sticky tw-bg-white tw-text-base">
        <div className="tw-col-span-2 tw-w-full tw-h-full tw-p-3 tw-border tw-border-r-0 tw-border-ic-ink-3 tw-rounded-bl-xl"></div>
        <div className="tw-col-span-2 tw-h-full tw-p-3 tw-border tw-border-ic-ink-3">
          <span className="tw-font-bold">
            {commerce("listTablePrice.0.functions.recommendation.title.0")}
          </span>
          {commerce("listTablePrice.0.functions.recommendation.title.1")}
        </div>
        <div className="tw-col-span-6 tw-grid tw-grid-cols-3 tw-w-full tw-h-full tw-rounded-br-xl">
          {(
            commerce(`listTablePrice.0.subHeader`, {
              returnObjects: true,
            }) as string[]
          ).map((value: any, index: number) => (
            <div
              key={index}
              className={clsx(
                "tw-p-3 tw-border tw-border-l-0 tw-border-ic-ink-3 tw-text-center",
                index === 2 ? "tw-rounded-br-xl" : "",
              )}
            >
              {value?.itemContent?.recommendation.value != "" &&
                value?.itemContent?.recommendation.value}
              {value?.itemContent?.recommendation.image != "" && (
                <Image
                  src={value?.itemContent?.recommendation.image}
                  width={24}
                  height={24}
                  alt=""
                  className={clsx("tw-mx-auto")}
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default TableDesktop;
