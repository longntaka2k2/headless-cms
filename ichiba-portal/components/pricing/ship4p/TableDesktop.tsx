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
        <div className="tw-col-span-5 tw-w-full tw-h-full tw-p-3 tw-bg-ic-ink-1 tw-border tw-border-r-0 tw-border-ic-ink-2 tw-rounded-tl-xl tw-text-center">
          {commerce("listTablePrice.1.titleLeft.heading")}
        </div>

        <div className="tw-col-span-5 tw-grid tw-grid-cols-2 tw-w-full tw-h-full">
          {(
            commerce(`listTablePrice.1.subHeader`, {
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
        <div className="tw-col-span-3 tw-w-full tw-h-full tw-p-3 tw-border tw-border-ic-ink-3">
          {commerce("listTablePrice.2.functions.recurringMonth.title")}
        </div>
        <div className="tw-col-span-5 tw-grid tw-grid-cols-2 tw-w-full tw-h-full">
          {(
            commerce(`listTablePrice.2.subHeader`, {
              returnObjects: true,
            }) as string[]
          ).map((value: any, index: number) => (
            <div
              key={index}
              className={clsx(
                "tw-p-3 tw-border tw-border-l-0 tw-border-ic-ink-3 tw-text-center",
              )}
            >
              {value?.itemContent?.recurringMonth.value != "" &&
                value?.itemContent?.recurringMonth.value}
              {value?.itemContent?.recurringMonth.image != "" && (
                <Image
                  src={value?.itemContent?.recurringMonth.image}
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
        <div className="tw-col-span-3 tw-w-full tw-h-full tw-p-3 tw-border tw-border-ic-ink-3">
          {commerce("listTablePrice.2.functions.recurringYear.title")}
        </div>
        <div className="tw-col-span-5 tw-grid tw-grid-cols-2 tw-w-full tw-h-full">
          {(
            commerce(`listTablePrice.2.subHeader`, {
              returnObjects: true,
            }) as string[]
          ).map((value: any, index: number) => (
            <div
              key={index}
              className={clsx(
                "tw-p-3 tw-border tw-border-l-0 tw-border-ic-ink-3 tw-text-center",
              )}
            >
              {value?.itemContent?.recurringYear.value != "" &&
                value?.itemContent?.recurringYear.value}
              {value?.itemContent?.recurringYear.image != "" && (
                <Image
                  src={value?.itemContent?.recurringYear.image}
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
        <div className="tw-col-span-2 tw-font-semibold tw-w-full tw-h-full tw-p-3 tw-border tw-border-ic-ink-3">
          {commerce("listTablePrice.2.titleLeft.packageManagement")}
        </div>
        <div className="tw-col-span-3 tw-w-full tw-h-full tw-p-3 tw-border tw-border-ic-ink-3">
          {commerce("listTablePrice.2.functions.packageManagement.title")}
        </div>
        <div className="tw-col-span-5 tw-grid tw-grid-cols-2 tw-w-full tw-h-full">
          {(
            commerce(`listTablePrice.2.subHeader`, {
              returnObjects: true,
            }) as string[]
          ).map((value: any, index: number) => (
            <div
              key={index}
              className={clsx(
                "tw-p-3 tw-border tw-border-l-0 tw-border-ic-ink-3 tw-text-center",
              )}
            >
              {value?.itemContent?.packageManagement.value != "" &&
                value?.itemContent?.packageManagement.value}
              {value?.itemContent?.packageManagement.image != "" && (
                <Image
                  src={value?.itemContent?.packageManagement.image}
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
        <div className="tw-col-span-2 tw-font-semibold tw-w-full tw-h-full tw-p-3 tw-border tw-border-ic-ink-3"></div>
        <div className="tw-col-span-3 tw-w-full tw-h-full tw-p-3 tw-border tw-border-ic-ink-3">
          {commerce("listTablePrice.2.functions.packageMannula.title")}
        </div>
        <div className="tw-col-span-5 tw-grid tw-grid-cols-2 tw-w-full tw-h-full">
          {(
            commerce(`listTablePrice.2.subHeader`, {
              returnObjects: true,
            }) as string[]
          ).map((value: any, index: number) => (
            <div
              key={index}
              className={clsx(
                "tw-p-3 tw-border tw-border-l-0 tw-border-ic-ink-3 tw-text-center",
              )}
            >
              {value?.itemContent?.packageMannula.value != "" &&
                value?.itemContent?.packageMannula.value}
              {value?.itemContent?.packageMannula.image != "" && (
                <Image
                  src={value?.itemContent?.packageMannula.image}
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
        <div className="tw-col-span-2 tw-font-semibold tw-w-full tw-h-full tw-p-3 tw-border tw-border-ic-ink-3"></div>
        <div className="tw-col-span-3 tw-w-full tw-h-full tw-p-3 tw-border tw-border-ic-ink-3">
          {commerce("listTablePrice.2.functions.packageConsolidation.title")}
        </div>
        <div className="tw-col-span-5 tw-grid tw-grid-cols-2 tw-w-full tw-h-full">
          {(
            commerce(`listTablePrice.2.subHeader`, {
              returnObjects: true,
            }) as string[]
          ).map((value: any, index: number) => (
            <div
              key={index}
              className={clsx(
                "tw-p-3 tw-border tw-border-l-0 tw-border-ic-ink-3 tw-text-center",
              )}
            >
              {value?.itemContent?.packageConsolidation.value != "" &&
                value?.itemContent?.packageConsolidation.value}
              {value?.itemContent?.packageConsolidation.image != "" && (
                <Image
                  src={value?.itemContent?.packageConsolidation.image}
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
        <div className="tw-col-span-2 tw-font-semibold tw-w-full tw-h-full tw-p-3 tw-border tw-border-ic-ink-3">
          {commerce("listTablePrice.2.titleLeft.shipmentManagement")}
        </div>
        <div className="tw-col-span-3 tw-w-full tw-h-full tw-p-3 tw-border tw-border-ic-ink-3">
          {commerce("listTablePrice.2.functions.shipmentDomestic.title")}
        </div>
        <div className="tw-col-span-5 tw-grid tw-grid-cols-2 tw-w-full tw-h-full">
          {(
            commerce(`listTablePrice.2.subHeader`, {
              returnObjects: true,
            }) as string[]
          ).map((value: any, index: number) => (
            <div
              key={index}
              className={clsx(
                "tw-p-3 tw-border tw-border-l-0 tw-border-ic-ink-3 tw-text-center",
              )}
            >
              {value?.itemContent?.shipmentDomestic.value != "" &&
                value?.itemContent?.shipmentDomestic.value}
              {value?.itemContent?.shipmentDomestic.image != "" && (
                <Image
                  src={value?.itemContent?.shipmentDomestic.image}
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
        <div className="tw-col-span-2 tw-font-semibold tw-w-full tw-h-full tw-p-3 tw-border tw-border-ic-ink-3"></div>
        <div className="tw-col-span-3 tw-w-full tw-h-full tw-p-3 tw-border tw-border-ic-ink-3">
          {commerce("listTablePrice.2.functions.shipmentInternational.title")}
        </div>
        <div className="tw-col-span-5 tw-grid tw-grid-cols-2 tw-w-full tw-h-full">
          {(
            commerce(`listTablePrice.2.subHeader`, {
              returnObjects: true,
            }) as string[]
          ).map((value: any, index: number) => (
            <div
              key={index}
              className={clsx(
                "tw-p-3 tw-border tw-border-l-0 tw-border-ic-ink-3 tw-text-center",
              )}
            >
              {value?.itemContent?.shipmentInternational.value != "" &&
                value?.itemContent?.shipmentInternational.value}
              {value?.itemContent?.shipmentInternational.image != "" && (
                <Image
                  src={value?.itemContent?.shipmentInternational.image}
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
        <div className="tw-col-span-2 tw-font-semibold tw-w-full tw-h-full tw-p-3 tw-border tw-border-ic-ink-3"></div>
        <div className="tw-col-span-3 tw-w-full tw-h-full tw-p-3 tw-border tw-border-ic-ink-3">
          {commerce("listTablePrice.2.functions.carrier.title")}
        </div>
        <div className="tw-col-span-5 tw-grid tw-grid-cols-2 tw-w-full tw-h-full">
          {(
            commerce(`listTablePrice.2.subHeader`, {
              returnObjects: true,
            }) as string[]
          ).map((value: any, index: number) => (
            <div
              key={index}
              className={clsx(
                "tw-p-3 tw-border tw-border-l-0 tw-border-ic-ink-3 tw-text-center",
              )}
            >
              {value?.itemContent?.carrier.value != "" &&
                value?.itemContent?.carrier.value}
              {value?.itemContent?.carrier.image != "" && (
                <Image
                  src={value?.itemContent?.carrier.image}
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
        <div className="tw-col-span-2 tw-font-semibold tw-w-full tw-h-full tw-p-3 tw-border tw-border-ic-ink-3"></div>
        <div className="tw-col-span-3 tw-w-full tw-h-full tw-p-3 tw-border tw-border-ic-ink-3">
          {commerce("listTablePrice.2.functions.generate.title")}
        </div>
        <div className="tw-col-span-5 tw-grid tw-grid-cols-2 tw-w-full tw-h-full">
          {(
            commerce(`listTablePrice.2.subHeader`, {
              returnObjects: true,
            }) as string[]
          ).map((value: any, index: number) => (
            <div
              key={index}
              className={clsx(
                "tw-p-3 tw-border tw-border-l-0 tw-border-ic-ink-3 tw-text-center",
              )}
            >
              {value?.itemContent?.generate.value != "" &&
                value?.itemContent?.generate.value}
              {value?.itemContent?.generate.image != "" && (
                <Image
                  src={value?.itemContent?.generate.image}
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
        <div className="tw-col-span-2 tw-font-semibold tw-w-full tw-h-full tw-p-3 tw-border tw-border-ic-ink-3"></div>
        <div className="tw-col-span-3 tw-w-full tw-h-full tw-p-3 tw-border tw-border-ic-ink-3">
          {commerce("listTablePrice.2.functions.shipment.title")}
        </div>
        <div className="tw-col-span-5 tw-grid tw-grid-cols-2 tw-w-full tw-h-full">
          {(
            commerce(`listTablePrice.2.subHeader`, {
              returnObjects: true,
            }) as string[]
          ).map((value: any, index: number) => (
            <div
              key={index}
              className={clsx(
                "tw-p-3 tw-border tw-border-l-0 tw-border-ic-ink-3 tw-text-center",
              )}
            >
              {value?.itemContent?.shipment.value != "" &&
                value?.itemContent?.shipment.value}
              {value?.itemContent?.shipment.image != "" && (
                <Image
                  src={value?.itemContent?.shipment.image}
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
        <div className="tw-col-span-2 tw-font-semibold tw-w-full tw-h-full tw-p-3 tw-border tw-border-ic-ink-3">
          {commerce("listTablePrice.2.titleLeft.createPersonalCarrier")}
        </div>
        <div className="tw-col-span-3 tw-w-full tw-h-full tw-p-3 tw-border tw-border-ic-ink-3">
          {commerce("listTablePrice.2.functions.create.title")}
        </div>
        <div className="tw-col-span-5 tw-grid tw-grid-cols-2 tw-w-full tw-h-full">
          {(
            commerce(`listTablePrice.2.subHeader`, {
              returnObjects: true,
            }) as string[]
          ).map((value: any, index: number) => (
            <div
              key={index}
              className={clsx(
                "tw-p-3 tw-border tw-border-l-0 tw-border-ic-ink-3 tw-text-center",
              )}
            >
              {value?.itemContent?.create.value != "" &&
                value?.itemContent?.create.value}
              {value?.itemContent?.create.image != "" && (
                <Image
                  src={value?.itemContent?.create.image}
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
        <div className="tw-col-span-2 tw-font-semibold tw-w-full tw-h-full tw-p-3 tw-border tw-border-ic-ink-3">
          {commerce("listTablePrice.2.titleLeft.storefrontIntegration")}
        </div>
        <div className="tw-col-span-3 tw-w-full tw-h-full tw-p-3 tw-border tw-border-ic-ink-3">
          {commerce("listTablePrice.2.functions.storefront.title")}
        </div>
        <div className="tw-col-span-5 tw-grid tw-grid-cols-2 tw-w-full tw-h-full">
          {(
            commerce(`listTablePrice.2.subHeader`, {
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
        <div className="tw-col-span-2 tw-font-semibold tw-w-full tw-h-full tw-p-3 tw-border tw-border-ic-ink-3">
          {commerce("listTablePrice.2.titleLeft.fareManagement")}
        </div>
        <div className="tw-col-span-3 tw-w-full tw-h-full tw-p-3 tw-border tw-border-ic-ink-3">
          {commerce("listTablePrice.2.functions.packageBased.title")}
        </div>
        <div className="tw-col-span-5 tw-grid tw-grid-cols-2 tw-w-full tw-h-full">
          {(
            commerce(`listTablePrice.2.subHeader`, {
              returnObjects: true,
            }) as string[]
          ).map((value: any, index: number) => (
            <div
              key={index}
              className={clsx(
                "tw-p-3 tw-border tw-border-l-0 tw-border-ic-ink-3 tw-text-center",
              )}
            >
              {value?.itemContent?.packageBased.value != "" &&
                value?.itemContent?.packageBased.value}
              {value?.itemContent?.packageBased.image != "" && (
                <Image
                  src={value?.itemContent?.packageBased.image}
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
        <div className="tw-col-span-2 tw-font-semibold tw-w-full tw-h-full tw-p-3 tw-border tw-border-ic-ink-3"></div>
        <div className="tw-col-span-3 tw-w-full tw-h-full tw-p-3 tw-border tw-border-ic-ink-3">
          {commerce("listTablePrice.2.functions.multiRoute.title")}
        </div>
        <div className="tw-col-span-5 tw-grid tw-grid-cols-2 tw-w-full tw-h-full">
          {(
            commerce(`listTablePrice.2.subHeader`, {
              returnObjects: true,
            }) as string[]
          ).map((value: any, index: number) => (
            <div
              key={index}
              className={clsx(
                "tw-p-3 tw-border tw-border-l-0 tw-border-ic-ink-3 tw-text-center",
              )}
            >
              {value?.itemContent?.multiRoute.value != "" &&
                value?.itemContent?.multiRoute.value}
              {value?.itemContent?.multiRoute.image != "" && (
                <Image
                  src={value?.itemContent?.multiRoute.image}
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
        <div className="tw-col-span-2 tw-font-semibold tw-w-full tw-h-full tw-p-3 tw-border tw-border-ic-ink-3"></div>
        <div className="tw-col-span-3 tw-w-full tw-h-full tw-p-3 tw-border tw-border-ic-ink-3">
          {commerce("listTablePrice.2.functions.custom.title")}
        </div>
        <div className="tw-col-span-5 tw-grid tw-grid-cols-2 tw-w-full tw-h-full">
          {(
            commerce(`listTablePrice.2.subHeader`, {
              returnObjects: true,
            }) as string[]
          ).map((value: any, index: number) => (
            <div
              key={index}
              className={clsx(
                "tw-p-3 tw-border tw-border-l-0 tw-border-ic-ink-3 tw-text-center",
              )}
            >
              {value?.itemContent?.custom.value != "" &&
                value?.itemContent?.custom.value}
              {value?.itemContent?.custom.image != "" && (
                <Image
                  src={value?.itemContent?.custom.image}
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
        <div className="tw-col-span-2 tw-font-semibold tw-w-full tw-h-full tw-p-3 tw-border tw-border-ic-ink-3">
          {commerce("listTablePrice.2.titleLeft.carrierConnection")}
        </div>
        <div className="tw-col-span-3 tw-w-full tw-h-full tw-p-3 tw-border tw-border-ic-ink-3">
          {commerce("listTablePrice.2.functions.connectMerchant.title")}
        </div>
        <div className="tw-col-span-5 tw-grid tw-grid-cols-2 tw-w-full tw-h-full">
          {(
            commerce(`listTablePrice.2.subHeader`, {
              returnObjects: true,
            }) as string[]
          ).map((value: any, index: number) => (
            <div
              key={index}
              className={clsx(
                "tw-p-3 tw-border tw-border-l-0 tw-border-ic-ink-3 tw-text-center",
              )}
            >
              {value?.itemContent?.connectMerchant.value != "" &&
                value?.itemContent?.connectMerchant.value}
              {value?.itemContent?.connectMerchant.image != "" && (
                <Image
                  src={value?.itemContent?.connectMerchant.image}
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
        <div className="tw-col-span-2 tw-font-semibold tw-w-full tw-h-full tw-p-3 tw-border tw-border-ic-ink-3"></div>
        <div className="tw-col-span-3 tw-w-full tw-h-full tw-p-3 tw-border tw-border-ic-ink-3">
          {commerce("listTablePrice.2.functions.connectShip4p.title")}
        </div>
        <div className="tw-col-span-5 tw-grid tw-grid-cols-2 tw-w-full tw-h-full">
          {(
            commerce(`listTablePrice.2.subHeader`, {
              returnObjects: true,
            }) as string[]
          ).map((value: any, index: number) => (
            <div
              key={index}
              className={clsx(
                "tw-p-3 tw-border tw-border-l-0 tw-border-ic-ink-3 tw-text-center",
              )}
            >
              {value?.itemContent?.connectShip4p.value != "" &&
                value?.itemContent?.connectShip4p.value}
              {value?.itemContent?.connectShip4p.image != "" && (
                <Image
                  src={value?.itemContent?.connectShip4p.image}
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
        <div className="tw-col-span-2 tw-font-semibold tw-w-full tw-h-full tw-p-3 tw-border tw-border-ic-ink-3">
          {commerce("listTablePrice.2.titleLeft.taxDocument")}
        </div>
        <div className="tw-col-span-3 tw-w-full tw-h-full tw-p-3 tw-border tw-border-ic-ink-3">
          {commerce("listTablePrice.2.functions.tax.title")}
        </div>
        <div className="tw-col-span-5 tw-grid tw-grid-cols-2 tw-w-full tw-h-full">
          {(
            commerce(`listTablePrice.2.subHeader`, {
              returnObjects: true,
            }) as string[]
          ).map((value: any, index: number) => (
            <div
              key={index}
              className={clsx(
                "tw-p-3 tw-border tw-border-l-0 tw-border-ic-ink-3 tw-text-center",
              )}
            >
              {value?.itemContent?.tax.value != "" &&
                value?.itemContent?.tax.value}
              {value?.itemContent?.tax.image != "" && (
                <Image
                  src={value?.itemContent?.tax.image}
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
        <div className="tw-col-span-2 tw-font-semibold tw-w-full tw-h-full tw-p-3 tw-border tw-border-ic-ink-3"></div>
        <div className="tw-col-span-3 tw-w-full tw-h-full tw-p-3 tw-border tw-border-ic-ink-3">
          {commerce("listTablePrice.2.functions.document.title")}
        </div>
        <div className="tw-col-span-5 tw-grid tw-grid-cols-2 tw-w-full tw-h-full">
          {(
            commerce(`listTablePrice.2.subHeader`, {
              returnObjects: true,
            }) as string[]
          ).map((value: any, index: number) => (
            <div
              key={index}
              className={clsx(
                "tw-p-3 tw-border tw-border-l-0 tw-border-ic-ink-3 tw-text-center",
              )}
            >
              {value?.itemContent?.document.value != "" &&
                value?.itemContent?.document.value}
              {value?.itemContent?.document.image != "" && (
                <Image
                  src={value?.itemContent?.document.image}
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
        <div className="tw-col-span-2 tw-font-semibold tw-w-full tw-h-full tw-p-3 tw-border tw-border-r-0 tw-border-ic-ink-3 tw-rounded-bl-xl">
          {commerce("listTablePrice.2.titleLeft.reports")}
        </div>
        <div className="tw-col-span-3 tw-w-full tw-h-full tw-p-3 tw-border tw-border-ic-ink-3">
          {commerce("listTablePrice.2.functions.shippingReports.title")}
        </div>
        <div className="tw-col-span-5 tw-grid tw-grid-cols-2 tw-w-full tw-h-full">
          {(
            commerce(`listTablePrice.2.subHeader`, {
              returnObjects: true,
            }) as string[]
          ).map((value: any, index: number) => (
            <div
              key={index}
              className={clsx(
                "tw-p-3 tw-border tw-border-l-0 tw-border-ic-ink-3 tw-text-center",
                index === 1 ? "tw-rounded-br-xl" : "",
              )}
            >
              {value?.itemContent?.shippingReports.value != "" &&
                value?.itemContent?.shippingReports.value}
              {value?.itemContent?.shippingReports.image != "" && (
                <Image
                  src={value?.itemContent?.shippingReports.image}
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
