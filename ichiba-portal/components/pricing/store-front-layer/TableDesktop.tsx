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
      <div className="tw-mb-[10px] tw-w-full tw-h-full tw-bg-white tw-z-1 tw-sticky tw-top-[148px] tw-py-2">
        <h2 className="tw-text-2xl tw-font-bold">
          {commerce("listTablePrice.3.items.0.title")}
        </h2>
      </div>
      <div className="tw-grid tw-grid-cols-10 tw-h-auto tw-items-center tw-sticky tw-z-1 tw-top-[190px] tw-bg-white tw-text-base tw-font-bold">
        <div className="tw-col-span-4 tw-w-full tw-h-full tw-p-3 tw-bg-ic-ink-1 tw-border tw-border-r-0 tw-border-ic-ink-2 tw-text-center tw-rounded-tl-xl">
          {commerce("listTablePrice.3.items.0.titleLeft.heading")}
        </div>
        <div className="tw-col-span-6 tw-grid tw-grid-cols-3 tw-w-full tw-h-full">
          {(
            commerce(`listTablePrice.3.items.0.subHeader`, {
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
                index === 2 ? "tw-rounded-tr-xl" : "",
              )}
            >
              {value?.title}
            </div>
          ))}
        </div>
      </div>
      <div className="tw-grid tw-grid-cols-10 tw-h-auto tw-items-center tw-sticky tw-bg-white tw-text-base">
        <div className="tw-col-span-2 tw-font-semibold tw-w-full tw-h-full tw-p-3 tw-border tw-border-r-0 tw-border-ic-ink-3">
          {commerce("listTablePrice.3.items.0.titleLeft.buildingWebsite")}
        </div>
        <div className="tw-col-span-2 tw-w-full tw-h-full tw-p-3 tw-border tw-border-ic-ink-3">
          {commerce("listTablePrice.3.items.0.functions.usingFree.title")}
        </div>
        <div className="tw-col-span-6 tw-grid tw-grid-cols-3 tw-w-full tw-h-full">
          {(
            commerce(`listTablePrice.3.items.0.subHeader`, {
              returnObjects: true,
            }) as string[]
          ).map((value: any, index: number) => (
            <div
              key={index}
              className={clsx(
                "tw-p-3 tw-border tw-border-l-0 tw-border-ic-ink-3 tw-text-center",
              )}
            >
              {value?.itemContent?.usingFree.value != "" &&
                value?.itemContent?.usingFree.value}
              {value?.itemContent?.usingFree.image != "" && (
                <Image
                  src={value?.itemContent?.usingFree.image}
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
          {commerce("listTablePrice.3.items.0.functions.usingPro.title")}
        </div>
        <div className="tw-col-span-6 tw-grid tw-grid-cols-3 tw-w-full tw-h-full">
          {(
            commerce(`listTablePrice.3.items.0.subHeader`, {
              returnObjects: true,
            }) as string[]
          ).map((value: any, index: number) => (
            <div
              key={index}
              className={clsx(
                "tw-p-3 tw-border tw-border-l-0 tw-border-ic-ink-3 tw-text-center",
              )}
            >
              {value?.itemContent?.usingPro.value != "" &&
                value?.itemContent?.usingPro.value}
              {value?.itemContent?.usingPro.image != "" && (
                <Image
                  src={value?.itemContent?.usingPro.image}
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
        <div className="tw-col-span-4 tw-font-semibold tw-w-full tw-h-full tw-p-3 tw-border tw-border-ic-ink-3">
          {commerce("listTablePrice.3.items.0.titleLeft.landingPage")}
        </div>
        <div className="tw-col-span-6 tw-grid tw-grid-cols-3 tw-w-full tw-h-full">
          {(
            commerce(`listTablePrice.3.items.0.subHeader`, {
              returnObjects: true,
            }) as string[]
          ).map((value: any, index: number) => (
            <div
              key={index}
              className={clsx(
                "tw-p-3 tw-border tw-border-l-0 tw-border-ic-ink-3 tw-text-center",
              )}
            >
              {value?.itemContent?.landingPage.value != "" &&
                value?.itemContent?.landingPage.value}
              {value?.itemContent?.landingPage.image != "" && (
                <Image
                  src={value?.itemContent?.landingPage.image}
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
        <div className="tw-col-span-4 tw-font-semibold tw-w-full tw-h-full tw-p-3 tw-border tw-border-ic-ink-3">
          {commerce("listTablePrice.3.items.0.titleLeft.annual")}
        </div>
        <div className="tw-col-span-6 tw-grid tw-grid-cols-3 tw-w-full tw-h-full">
          {(
            commerce(`listTablePrice.3.items.0.subHeader`, {
              returnObjects: true,
            }) as string[]
          ).map((value: any, index: number) => (
            <div
              key={index}
              className={clsx(
                "tw-p-3 tw-border tw-border-l-0 tw-border-ic-ink-3 tw-text-center",
              )}
            >
              {value?.itemContent?.annual.value != "" &&
                value?.itemContent?.annual.value}
              {value?.itemContent?.annual.image != "" && (
                <Image
                  src={value?.itemContent?.annual.image}
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
        <div className="tw-col-span-4 tw-font-semibold tw-w-full tw-h-full tw-p-3 tw-border tw-border-ic-ink-3">
          {commerce("listTablePrice.3.items.0.titleLeft.managing")}
        </div>
        <div className="tw-col-span-6">
          <div className="tw-grid tw-grid-cols-3 tw-w-full tw-h-full">
            {(
              commerce(`listTablePrice.3.items.0.subHeader`, {
                returnObjects: true,
              }) as string[]
            ).map((value: any, index: number) => (
              <div
                key={index}
                className={clsx(
                  "tw-p-3 tw-border tw-border-l-0 tw-border-ic-ink-3 tw-text-center",
                )}
              >
                {value?.itemContent?.managingTrading.value != "" &&
                  value?.itemContent?.managingTrading.value}
                {value?.itemContent?.managingTrading.image != "" && (
                  <Image
                    src={value?.itemContent?.managingTrading.image}
                    width={24}
                    height={24}
                    alt=""
                    className={clsx("tw-mx-auto")}
                  />
                )}
              </div>
            ))}
          </div>
          <div className="tw-grid tw-grid-cols-3 tw-w-full tw-h-full">
            <div
              className={clsx(
                "tw-p-3 tw-border tw-border-l-0 tw-border-ic-ink-3 tw-text-center",
              )}
            >
              {commerce(
                "listTablePrice.3.items.0.subHeader.0.itemContent.managing.value",
              ) != "" && (
                <>
                  {(
                    commerce(
                      `listTablePrice.3.items.0.subHeader.0.itemContent.managing.value`,
                      {
                        returnObjects: true,
                      },
                    ) as string[]
                  ).map((item: string, idx: number) => (
                    <div key={idx}>{item}</div>
                  ))}
                </>
              )}
              {commerce(
                "listTablePrice.3.items.0.subHeader.0.itemContent.managing.image",
              ) != "" && (
                <Image
                  src={
                    commerce(
                      "listTablePrice.3.items.0.subHeader.0.itemContent.managing.image",
                    ) as string
                  }
                  width={24}
                  height={24}
                  alt=""
                  className={clsx("tw-mx-auto")}
                />
              )}
            </div>
            <div
              className={clsx(
                "tw-p-3 tw-border tw-border-l-0 tw-border-ic-ink-3 tw-text-center",
              )}
            >
              {commerce(
                "listTablePrice.3.items.0.subHeader.1.itemContent.managing.value",
              ) != "" &&
                commerce(
                  "listTablePrice.3.items.0.subHeader.1.itemContent.managing.value",
                )}
              {commerce(
                "listTablePrice.3.items.0.subHeader.1.itemContent.managing.image",
              ) != "" && (
                <Image
                  src={
                    commerce(
                      "listTablePrice.3.items.0.subHeader.1.itemContent.managing.image",
                    ) as string
                  }
                  width={24}
                  height={24}
                  alt=""
                  className={clsx("tw-mx-auto")}
                />
              )}
            </div>
            <div
              className={clsx(
                "tw-p-3 tw-border tw-border-l-0 tw-border-ic-ink-3 tw-text-center",
              )}
            >
              {commerce(
                "listTablePrice.3.items.0.subHeader.2.itemContent.managing.value",
              ) != "" &&
                commerce(
                  "listTablePrice.3.items.0.subHeader.2.itemContent.managing.value",
                )}
              {commerce(
                "listTablePrice.3.items.0.subHeader.2.itemContent.managing.image",
              ) != "" && (
                <Image
                  src={
                    commerce(
                      "listTablePrice.3.items.0.subHeader.2.itemContent.managing.image",
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
      </div>
      <div className="tw-grid tw-grid-cols-10 tw-h-auto tw-items-center tw-sticky tw-bg-white tw-text-base">
        <div className="tw-col-span-4 tw-font-semibold tw-w-full tw-h-full tw-p-3 tw-border tw-border-ic-ink-3">
          {commerce("listTablePrice.3.items.0.titleLeft.custom")}
        </div>
        <div className="tw-col-span-6 tw-grid tw-grid-cols-3 tw-w-full tw-h-full">
          {(
            commerce(`listTablePrice.3.items.0.subHeader`, {
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
        <div className="tw-col-span-4 tw-font-semibold tw-w-full tw-h-full tw-p-3 tw-border tw-border-ic-ink-3">
          {commerce("listTablePrice.3.items.0.titleLeft.product")}
        </div>
        <div className="tw-col-span-6 tw-grid tw-grid-cols-3 tw-w-full tw-h-full">
          {(
            commerce(`listTablePrice.3.items.0.subHeader`, {
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
        <div className="tw-col-span-4 tw-font-semibold tw-w-full tw-h-full tw-p-3 tw-border tw-border-ic-ink-3 tw-rounded-bl-xl">
          {commerce("listTablePrice.3.items.0.titleLeft.additionalServices")}
        </div>
        <div className="tw-col-span-6 tw-grid tw-grid-cols-3 tw-w-full tw-h-full">
          {(
            commerce(`listTablePrice.3.items.0.subHeader`, {
              returnObjects: true,
            }) as string[]
          ).map((value: any, index: number) => (
            <div
              key={index}
              className={clsx(
                "tw-p-3 tw-border tw-border-l-0 tw-border-ic-ink-3 tw-text-center",
                index === 2 && "tw-rounded-br-xl",
              )}
            >
              {value?.itemContent?.additional.value != "" &&
                value?.itemContent?.additional.value}
              {value?.itemContent?.additional.image != "" && (
                <Image
                  src={value?.itemContent?.additional.image}
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

      <div className="tw-w-full tw-h-full tw-bg-white tw-z-1 tw-sticky tw-top-[148px] tw-py-2 tw-mt-10">
        <h2 className="tw-text-2xl tw-font-bold">
          {commerce("listTablePrice.3.items.1.title")}
        </h2>
      </div>
      <div className="tw-grid tw-grid-cols-10 tw-h-auto tw-items-center tw-sticky tw-z-1 tw-top-[190px] tw-bg-white tw-text-base tw-font-bold">
        <div className="tw-col-span-4 tw-w-full tw-h-full tw-p-3 tw-bg-ic-ink-1 tw-border tw-border-r-0 tw-border-ic-ink-2 tw-text-center tw-rounded-tl-xl">
          {commerce("listTablePrice.3.items.1.titleLeft.heading")}
        </div>
        <div className="tw-col-span-6 tw-grid tw-grid-cols-3 tw-w-full tw-h-full">
          {(
            commerce(`listTablePrice.3.items.1.subHeader`, {
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
                index === 2 ? "tw-rounded-tr-xl" : "",
              )}
            >
              {value?.title}
            </div>
          ))}
        </div>
      </div>
      <div className="tw-grid tw-grid-cols-10 tw-h-auto tw-items-center tw-sticky tw-bg-white tw-text-base">
        <div className="tw-col-span-4 tw-font-semibold tw-w-full tw-h-full tw-p-3 tw-border tw-border-ic-ink-3">
          {commerce("listTablePrice.3.items.1.titleLeft.development")}
        </div>
        <div className="tw-col-span-6 tw-grid tw-grid-cols-3 tw-w-full tw-h-full">
          {(
            commerce(`listTablePrice.3.items.1.subHeader`, {
              returnObjects: true,
            }) as string[]
          ).map((value: any, index: number) => (
            <div
              key={index}
              className={clsx(
                "tw-p-3 tw-border tw-border-l-0 tw-border-ic-ink-3 tw-text-center",
              )}
            >
              {value?.itemContent?.development.value != "" &&
                value?.itemContent?.development.value}
              {value?.itemContent?.development.image != "" && (
                <Image
                  src={value?.itemContent?.development.image}
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
        <div className="tw-col-span-4 tw-font-semibold tw-w-full tw-h-full tw-p-3 tw-border tw-border-ic-ink-3">
          {commerce("listTablePrice.3.items.1.titleLeft.managing")}
        </div>
        <div className="tw-col-span-6">
          <div className="tw-grid tw-grid-cols-3 tw-w-full tw-h-full">
            {(
              commerce(`listTablePrice.3.items.1.subHeader`, {
                returnObjects: true,
              }) as string[]
            ).map((value: any, index: number) => (
              <div
                key={index}
                className={clsx(
                  "tw-p-3 tw-border tw-border-l-0 tw-border-ic-ink-3 tw-text-center",
                )}
              >
                {value?.itemContent?.managingTrading.value != "" &&
                  value?.itemContent?.managingTrading.value}
                {value?.itemContent?.managingTrading.image != "" && (
                  <Image
                    src={value?.itemContent?.managingTrading.image}
                    width={24}
                    height={24}
                    alt=""
                    className={clsx("tw-mx-auto")}
                  />
                )}
              </div>
            ))}
          </div>
          <div className="tw-grid tw-grid-cols-3 tw-w-full tw-h-full">
            <div
              className={clsx(
                "tw-p-3 tw-border tw-border-l-0 tw-border-ic-ink-3 tw-text-center",
              )}
            >
              {commerce(
                "listTablePrice.3.items.1.subHeader.0.itemContent.managing.value",
              ) != "" && (
                <>
                  {(
                    commerce(
                      `listTablePrice.3.items.1.subHeader.0.itemContent.managing.value`,
                      {
                        returnObjects: true,
                      },
                    ) as string[]
                  ).map((item: string, idx: number) => (
                    <div key={idx}>{item}</div>
                  ))}
                </>
              )}
              {commerce(
                "listTablePrice.3.items.1.subHeader.0.itemContent.managing.image",
              ) != "" && (
                <Image
                  src={
                    commerce(
                      "listTablePrice.3.items.1.subHeader.0.itemContent.managing.image",
                    ) as string
                  }
                  width={24}
                  height={24}
                  alt=""
                  className={clsx("tw-mx-auto")}
                />
              )}
            </div>
            <div
              className={clsx(
                "tw-p-3 tw-border tw-border-l-0 tw-border-ic-ink-3 tw-text-center",
              )}
            >
              {commerce(
                "listTablePrice.3.items.1.subHeader.1.itemContent.managing.value",
              ) != "" &&
                commerce(
                  "listTablePrice.3.items.1.subHeader.1.itemContent.managing.value",
                )}
              {commerce(
                "listTablePrice.3.items.1.subHeader.1.itemContent.managing.image",
              ) != "" && (
                <Image
                  src={
                    commerce(
                      "listTablePrice.3.items.1.subHeader.1.itemContent.managing.image",
                    ) as string
                  }
                  width={24}
                  height={24}
                  alt=""
                  className={clsx("tw-mx-auto")}
                />
              )}
            </div>
            <div
              className={clsx(
                "tw-p-3 tw-border tw-border-l-0 tw-border-ic-ink-3 tw-text-center",
              )}
            >
              {commerce(
                "listTablePrice.3.items.1.subHeader.2.itemContent.managing.value",
              ) != "" &&
                commerce(
                  "listTablePrice.3.items.1.subHeader.2.itemContent.managing.value",
                )}
              {commerce(
                "listTablePrice.3.items.1.subHeader.2.itemContent.managing.image",
              ) != "" && (
                <Image
                  src={
                    commerce(
                      "listTablePrice.3.items.1.subHeader.2.itemContent.managing.image",
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
      </div>
      <div className="tw-grid tw-grid-cols-10 tw-h-auto tw-items-center tw-sticky tw-bg-white tw-text-base">
        <div className="tw-col-span-4 tw-font-semibold tw-w-full tw-h-full tw-p-3 tw-border tw-border-ic-ink-3">
          {commerce("listTablePrice.3.items.1.titleLeft.custom")}
        </div>
        <div className="tw-col-span-6 tw-grid tw-grid-cols-3 tw-w-full tw-h-full">
          {(
            commerce(`listTablePrice.3.items.1.subHeader`, {
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
        <div className="tw-col-span-4 tw-font-semibold tw-w-full tw-h-full tw-p-3 tw-border tw-border-ic-ink-3">
          {commerce("listTablePrice.3.items.1.titleLeft.product")}
        </div>
        <div className="tw-col-span-6 tw-grid tw-grid-cols-3 tw-w-full tw-h-full">
          {(
            commerce(`listTablePrice.3.items.1.subHeader`, {
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
        <div className="tw-col-span-4 tw-font-semibold tw-w-full tw-h-full tw-p-3 tw-border tw-border-ic-ink-3 tw-rounded-bl-xl">
          {commerce("listTablePrice.3.items.1.titleLeft.annual")}
        </div>
        <div className="tw-col-span-6 tw-grid tw-grid-cols-3 tw-w-full tw-h-full">
          {(
            commerce(`listTablePrice.3.items.1.subHeader`, {
              returnObjects: true,
            }) as string[]
          ).map((value: any, index: number) => (
            <div
              key={index}
              className={clsx(
                "tw-p-3 tw-border tw-border-l-0 tw-border-ic-ink-3 tw-text-center",
                index === 2 && "tw-rounded-br-xl",
              )}
            >
              {value?.itemContent?.annual.value != "" &&
                value?.itemContent?.annual.value}
              {value?.itemContent?.annual.image != "" && (
                <Image
                  src={value?.itemContent?.annual.image}
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

      <div className="tw-w-full tw-h-full tw-bg-white tw-z-1 tw-sticky tw-top-[148px] tw-py-2 tw-mt-10">
        <h2 className="tw-text-2xl tw-font-bold">
          {commerce("listTablePrice.3.items.2.title")}
        </h2>
      </div>
      <div className="tw-grid tw-grid-cols-10 tw-h-auto tw-items-center tw-sticky tw-z-1 tw-top-[190px] tw-bg-white tw-text-base tw-font-bold">
        <div className="tw-col-span-2 tw-w-full tw-h-full tw-p-3 tw-bg-ic-ink-1 tw-border tw-border-r-0 tw-border-ic-ink-2 tw-rounded-tl-xl">
          {commerce("listTablePrice.3.items.2.titleLeft.heading")}
        </div>
        <div className="tw-col-span-2 tw-w-full tw-h-full tw-p-3 tw-bg-ic-ink-1 tw-border tw-border-ic-ink-2">
          {commerce("listTablePrice.3.items.2.functions.heading")}
        </div>
        <div className="tw-col-span-6 tw-grid tw-grid-cols-3 tw-w-full tw-h-full">
          {(
            commerce(`listTablePrice.3.items.2.subHeader`, {
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
                index === 2 ? "tw-rounded-tr-xl" : "",
              )}
            >
              {value?.title}
            </div>
          ))}
        </div>
      </div>
      <div className="tw-grid tw-grid-cols-10 tw-h-auto tw-items-center tw-bg-white tw-text-base">
        <div className="tw-col-span-6 tw-grid tw-w-full tw-h-full">
          <div className="tw-grid tw-grid-cols-3">
            <div className="tw-col-span-1 tw-font-semibold tw-w-full tw-h-full tw-p-3 tw-border tw-border-r-0 tw-border-ic-ink-3">
              {commerce("listTablePrice.3.items.2.titleLeft.japan")}
            </div>
            <div className="tw-col-span-1 tw-w-full tw-h-full tw-p-3 tw-border tw-border-ic-ink-3">
              {commerce("listTablePrice.3.items.2.functions.mercari.title")}
            </div>
            <div
              className={clsx(
                "tw-col-span-1 tw-p-3 tw-border tw-border-l-0 tw-border-ic-ink-3 tw-text-center",
              )}
            >
              {commerce(
                "listTablePrice.3.items.2.subHeader.0.itemContent.mercari.value",
              ) != "" &&
                commerce(
                  "listTablePrice.3.items.2.subHeader.0.itemContent.mercari.value",
                )}
              {commerce(
                "listTablePrice.3.items.2.subHeader.0.itemContent.mercari.image",
              ) != "" && (
                <Image
                  src={
                    commerce(
                      "listTablePrice.3.items.2.subHeader.0.itemContent.mercari.image",
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
          <div className="tw-grid tw-grid-cols-3">
            <div className="tw-col-span-1 tw-font-semibold tw-w-full tw-h-full tw-p-3 tw-border tw-border-r-0 tw-border-ic-ink-3"></div>
            <div className="tw-col-span-1 tw-w-full tw-h-full tw-p-3 tw-border tw-border-ic-ink-3">
              {commerce("listTablePrice.3.items.2.functions.yahoo.title")}
            </div>
            <div
              className={clsx(
                "tw-col-span-1 tw-p-3 tw-border tw-border-l-0 tw-border-ic-ink-3 tw-text-center",
              )}
            >
              {commerce(
                "listTablePrice.3.items.2.subHeader.0.itemContent.yahoo.value",
              ) != "" &&
                commerce(
                  "listTablePrice.3.items.2.subHeader.0.itemContent.yahoo.value",
                )}
              {commerce(
                "listTablePrice.3.items.2.subHeader.0.itemContent.yahoo.image",
              ) != "" && (
                <Image
                  src={
                    commerce(
                      "listTablePrice.3.items.2.subHeader.0.itemContent.yahoo.image",
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
          <div className="tw-grid tw-grid-cols-3">
            <div className="tw-col-span-1 tw-font-semibold tw-w-full tw-h-full tw-p-3 tw-border tw-border-r-0 tw-border-ic-ink-3"></div>
            <div className="tw-col-span-1 tw-w-full tw-h-full tw-p-3 tw-border tw-border-ic-ink-3">
              {commerce("listTablePrice.3.items.2.functions.amazon.title")}
            </div>
            <div
              className={clsx(
                "tw-col-span-1 tw-p-3 tw-border tw-border-l-0 tw-border-ic-ink-3 tw-text-center",
              )}
            >
              {commerce(
                "listTablePrice.3.items.2.subHeader.0.itemContent.amazon.value",
              ) != "" &&
                commerce(
                  "listTablePrice.3.items.2.subHeader.0.itemContent.amazon.value",
                )}
              {commerce(
                "listTablePrice.3.items.2.subHeader.0.itemContent.amazon.image",
              ) != "" && (
                <Image
                  src={
                    commerce(
                      "listTablePrice.3.items.2.subHeader.0.itemContent.amazon.image",
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
          <div className="tw-grid tw-grid-cols-3">
            <div className="tw-col-span-1 tw-font-semibold tw-w-full tw-h-full tw-p-3 tw-border tw-border-r-0 tw-border-ic-ink-3"></div>
            <div className="tw-col-span-1 tw-w-full tw-h-full tw-p-3 tw-border tw-border-ic-ink-3">
              {commerce("listTablePrice.3.items.2.functions.ponpareMall.title")}
            </div>
            <div
              className={clsx(
                "tw-col-span-1 tw-p-3 tw-border tw-border-l-0 tw-border-ic-ink-3 tw-text-center",
              )}
            >
              {commerce(
                "listTablePrice.3.items.2.subHeader.0.itemContent.ponpareMall.value",
              ) != "" &&
                commerce(
                  "listTablePrice.3.items.2.subHeader.0.itemContent.ponpareMall.value",
                )}
              {commerce(
                "listTablePrice.3.items.2.subHeader.0.itemContent.ponpareMall.image",
              ) != "" && (
                <Image
                  src={
                    commerce(
                      "listTablePrice.3.items.2.subHeader.0.itemContent.ponpareMall.image",
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
          <div className="tw-grid tw-grid-cols-3">
            <div className="tw-col-span-1 tw-font-semibold tw-w-full tw-h-full tw-p-3 tw-border tw-border-r-0 tw-border-ic-ink-3">
              {commerce("listTablePrice.3.items.2.titleLeft.us")}
            </div>
            <div className="tw-col-span-1 tw-w-full tw-h-full tw-p-3 tw-border tw-border-ic-ink-3">
              {commerce("listTablePrice.3.items.2.functions.ebay.title")}
            </div>
            <div
              className={clsx(
                "tw-col-span-1 tw-p-3 tw-border tw-border-l-0 tw-border-ic-ink-3 tw-text-center",
              )}
            >
              {commerce(
                "listTablePrice.3.items.2.subHeader.0.itemContent.ebay.value",
              ) != "" &&
                commerce(
                  "listTablePrice.3.items.2.subHeader.0.itemContent.ebay.value",
                )}
              {commerce(
                "listTablePrice.3.items.2.subHeader.0.itemContent.ebay.image",
              ) != "" && (
                <Image
                  src={
                    commerce(
                      "listTablePrice.3.items.2.subHeader.0.itemContent.ebay.image",
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
          <div className="tw-grid tw-grid-cols-3">
            <div className="tw-col-span-1 tw-font-semibold tw-w-full tw-h-full tw-p-3 tw-border tw-border-r-0 tw-border-ic-ink-3"></div>
            <div className="tw-col-span-1 tw-w-full tw-h-full tw-p-3 tw-border tw-border-ic-ink-3">
              {commerce("listTablePrice.3.items.2.functions.macy.title")}
            </div>
            <div
              className={clsx(
                "tw-col-span-1 tw-p-3 tw-border tw-border-l-0 tw-border-ic-ink-3 tw-text-center",
              )}
            >
              {commerce(
                "listTablePrice.3.items.2.subHeader.0.itemContent.macy.value",
              ) != "" &&
                commerce(
                  "listTablePrice.3.items.2.subHeader.0.itemContent.macy.value",
                )}
              {commerce(
                "listTablePrice.3.items.2.subHeader.0.itemContent.macy.image",
              ) != "" && (
                <Image
                  src={
                    commerce(
                      "listTablePrice.3.items.2.subHeader.0.itemContent.macy.image",
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
          <div className="tw-grid tw-grid-cols-3">
            <div className="tw-col-span-1 tw-font-semibold tw-w-full tw-h-full tw-p-3 tw-border tw-border-r-0 tw-border-ic-ink-3">
              {commerce("listTablePrice.3.items.2.titleLeft.korea")}
            </div>
            <div className="tw-col-span-1 tw-w-full tw-h-full tw-p-3 tw-border tw-border-ic-ink-3">
              {commerce("listTablePrice.3.items.2.functions.gmarket.title")}
            </div>
            <div
              className={clsx(
                "tw-col-span-1 tw-p-3 tw-border tw-border-l-0 tw-border-ic-ink-3 tw-text-center",
              )}
            >
              {commerce(
                "listTablePrice.3.items.2.subHeader.0.itemContent.gmarket.value",
              ) != "" &&
                commerce(
                  "listTablePrice.3.items.2.subHeader.0.itemContent.gmarket.value",
                )}
              {commerce(
                "listTablePrice.3.items.2.subHeader.0.itemContent.gmarket.image",
              ) != "" && (
                <Image
                  src={
                    commerce(
                      "listTablePrice.3.items.2.subHeader.0.itemContent.gmarket.image",
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
          <div className="tw-grid tw-grid-cols-3">
            <div className="tw-col-span-1 tw-font-semibold tw-w-full tw-h-full tw-p-3 tw-border tw-border-r-0 tw-border-ic-ink-3 tw-rounded-bl-xl"></div>
            <div className="tw-col-span-1 tw-w-full tw-h-full tw-p-3 tw-border tw-border-ic-ink-3">
              {commerce("listTablePrice.3.items.2.functions.taobao.title")}
            </div>
            <div
              className={clsx(
                "tw-col-span-1 tw-p-3 tw-border tw-border-l-0 tw-border-ic-ink-3 tw-text-center",
              )}
            >
              {commerce(
                "listTablePrice.3.items.2.subHeader.0.itemContent.taobao.value",
              ) != "" &&
                commerce(
                  "listTablePrice.3.items.2.subHeader.0.itemContent.taobao.value",
                )}
              {commerce(
                "listTablePrice.3.items.2.subHeader.0.itemContent.taobao.image",
              ) != "" && (
                <Image
                  src={
                    commerce(
                      "listTablePrice.3.items.2.subHeader.0.itemContent.taobao.image",
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
        <div className="tw-col-span-2 tw-p-3 tw-border tw-border-l-0 tw-border-ic-ink-3 tw-text-center tw-w-full tw-h-full tw-flex tw-items-center tw-justify-center">
          {commerce("listTablePrice.3.items.2.subHeader.1.valueCommon")}
        </div>
        <div className="tw-col-span-2 tw-p-3 tw-border tw-border-l-0 tw-border-ic-ink-3 tw-text-center tw-w-full tw-h-full tw-flex tw-items-center tw-justify-center tw-rounded-br-xl">
          {commerce("listTablePrice.3.items.2.subHeader.2.valueCommon")}
        </div>
      </div>

      <div className="tw-w-full tw-h-full tw-bg-white tw-z-1 tw-sticky tw-top-[148px] tw-py-2 tw-mt-10">
        <h2 className="tw-text-xl tw-italic">
          *{commerce("listTablePrice.3.items.3.title")}
        </h2>
      </div>
      <div className="tw-grid tw-grid-cols-10 tw-h-auto tw-items-center tw-sticky tw-z-1 tw-top-[190px] tw-bg-white tw-text-base tw-font-bold">
        <div className="tw-col-span-4 tw-w-full tw-h-full tw-p-3 tw-bg-ic-ink-1 tw-border tw-border-r-0 tw-border-ic-ink-2 tw-rounded-tl-xl">
          {commerce("listTablePrice.3.items.3.titleLeft.heading")}
        </div>
        <div className="tw-col-span-6 tw-grid tw-grid-cols-3 tw-w-full tw-h-full">
          {(
            commerce(`listTablePrice.3.items.3.subHeader`, {
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
                index === 2 ? "tw-rounded-tr-xl" : "",
              )}
            >
              {value?.title}
            </div>
          ))}
        </div>
      </div>
      <div className="tw-grid tw-grid-cols-10 tw-h-auto tw-items-center tw-sticky tw-bg-white tw-text-base">
        <div className="tw-col-span-4 tw-font-semibold tw-w-full tw-h-full tw-p-3 tw-border tw-border-ic-ink-3">
          {commerce("listTablePrice.3.items.3.titleLeft.monthly")}
        </div>
        <div className="tw-col-span-6 tw-grid tw-grid-cols-3 tw-w-full tw-h-full">
          {(
            commerce(`listTablePrice.3.items.3.subHeader`, {
              returnObjects: true,
            }) as string[]
          ).map((value: any, index: number) => (
            <div
              key={index}
              className={clsx(
                "tw-p-3 tw-border tw-border-l-0 tw-border-ic-ink-3 tw-text-center",
              )}
            >
              {value?.itemContent?.monthly.value != "" &&
                value?.itemContent?.monthly.value}
              {value?.itemContent?.monthly.image != "" && (
                <Image
                  src={value?.itemContent?.monthly.image}
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
        <div className="tw-col-span-4 tw-font-semibold tw-w-full tw-h-full tw-p-3 tw-border tw-border-ic-ink-3">
          {commerce("listTablePrice.3.items.3.titleLeft.annual")}
        </div>
        <div className="tw-col-span-6 tw-grid tw-grid-cols-3 tw-w-full tw-h-full">
          {(
            commerce(`listTablePrice.3.items.3.subHeader`, {
              returnObjects: true,
            }) as string[]
          ).map((value: any, index: number) => (
            <div
              key={index}
              className={clsx(
                "tw-p-3 tw-border tw-border-l-0 tw-border-ic-ink-3 tw-text-center",
              )}
            >
              {value?.itemContent?.annual.value != "" &&
                value?.itemContent?.annual.value}
              {value?.itemContent?.annual.image != "" && (
                <Image
                  src={value?.itemContent?.annual.image}
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
        <div className="tw-col-span-4 tw-font-semibold tw-w-full tw-h-full tw-p-3 tw-border tw-border-ic-ink-3">
          {commerce("listTablePrice.3.items.3.titleLeft.auctionManagement")}
        </div>
        <div className="tw-col-span-6 tw-grid tw-grid-cols-3 tw-w-full tw-h-full">
          {(
            commerce(`listTablePrice.3.items.3.subHeader`, {
              returnObjects: true,
            }) as string[]
          ).map((value: any, index: number) => (
            <div
              key={index}
              className={clsx(
                "tw-p-3 tw-border tw-border-l-0 tw-border-ic-ink-3 tw-text-center",
              )}
            >
              {value?.itemContent?.auctionManagement.value != "" &&
                value?.itemContent?.auctionManagement.value}
              {value?.itemContent?.auctionManagement.image != "" && (
                <Image
                  src={value?.itemContent?.auctionManagement.image}
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
        <div className="tw-col-span-4 tw-font-semibold tw-w-full tw-h-full tw-p-3 tw-border tw-border-ic-ink-3 tw-rounded-bl-xl">
          {commerce(
            "listTablePrice.3.items.3.titleLeft.auctionOrderManagement",
          )}
        </div>
        <div className="tw-col-span-6 tw-grid tw-grid-cols-3 tw-w-full tw-h-full">
          {(
            commerce(`listTablePrice.3.items.3.subHeader`, {
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
              {value?.itemContent?.auctionOrderManagement.value != "" &&
                value?.itemContent?.auctionOrderManagement.value}
              {value?.itemContent?.auctionOrderManagement.image != "" && (
                <Image
                  src={value?.itemContent?.auctionOrderManagement.image}
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
