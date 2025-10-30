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
        <div className="tw-col-span-2 tw-font-semibold tw-w-full tw-h-full tw-p-3 tw-border tw-border-ic-ink-3">
          {commerce("listTablePrice.1.titleLeft.deploymentCosts")}
        </div>
        <div className="tw-col-span-3 tw-w-full tw-h-full tw-p-3 tw-border tw-border-ic-ink-3"></div>
        <div className="tw-col-span-5 tw-grid tw-grid-cols-2 tw-w-full tw-h-full">
          <div
            className={clsx(
              "tw-p-3 tw-border tw-border-l-0 tw-border-ic-ink-3 tw-text-center",
            )}
          >
            {commerce("listTablePrice.1.unit")}
          </div>
          <div
            className={clsx(
              "tw-p-3 tw-border tw-border-l-0 tw-border-ic-ink-3 tw-text-center",
            )}
          ></div>
        </div>
      </div>
      <div className="tw-grid tw-grid-cols-10 tw-h-auto tw-items-center tw-sticky tw-bg-white tw-text-base">
        <div className="tw-col-span-2 tw-font-semibold tw-w-full tw-h-full tw-p-3 tw-border tw-border-r-0 tw-border-ic-ink-3"></div>
        <div className="tw-col-span-3 tw-w-full tw-h-full tw-p-3 tw-border tw-border-ic-ink-3">
          {commerce("listTablePrice.1.functions.solution.title")}
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
                "tw-p-3 tw-border tw-border-l-0 tw-border-ic-ink-3 tw-text-center",
              )}
            >
              {value?.itemContent?.solution.value != "" &&
                value?.itemContent?.solution.value}
              {value?.itemContent?.solution.image != "" && (
                <Image
                  src={value?.itemContent?.solution.image}
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
          {commerce("listTablePrice.1.functions.trainning.title")}
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
                "tw-p-3 tw-border tw-border-l-0 tw-border-ic-ink-3 tw-text-center",
              )}
            >
              {value?.itemContent?.trainning.value != "" &&
                value?.itemContent?.trainning.value}
              {value?.itemContent?.trainning.image != "" && (
                <Image
                  src={value?.itemContent?.trainning.image}
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
          {commerce("listTablePrice.1.functions.system.title")}
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
                "tw-p-3 tw-border tw-border-l-0 tw-border-ic-ink-3 tw-text-center",
              )}
            >
              {value?.itemContent?.system.value != "" &&
                value?.itemContent?.system.value}
              {value?.itemContent?.system.image != "" && (
                <Image
                  src={value?.itemContent?.system.image}
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
        <div className="tw-col-span-5 tw-font-semibold tw-w-full tw-h-full tw-p-3 tw-border tw-border-ic-ink-3">
          {commerce("listTablePrice.1.titleLeft.warehouseLocation")}
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
                "tw-p-3 tw-border tw-border-l-0 tw-border-ic-ink-3 tw-text-center",
              )}
            ></div>
          ))}
        </div>
      </div>
      <div className="tw-grid tw-grid-cols-10 tw-h-auto tw-items-center tw-sticky tw-bg-white tw-text-base">
        <div className="tw-col-span-2 tw-font-semibold tw-w-full tw-h-full tw-p-3 tw-border tw-border-r-0 tw-border-ic-ink-3"></div>
        <div className="tw-col-span-3 tw-w-full tw-h-full tw-p-3 tw-border tw-border-ic-ink-3">
          {commerce("listTablePrice.1.functions.warehouse.title")}
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
                "tw-p-3 tw-border tw-border-l-0 tw-border-ic-ink-3 tw-text-center",
              )}
            >
              {value?.itemContent?.warehouse.value != "" &&
                value?.itemContent?.warehouse.value}
              {value?.itemContent?.warehouse.image != "" && (
                <Image
                  src={value?.itemContent?.warehouse.image}
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
        <div className="tw-col-span-5 tw-font-semibold tw-w-full tw-h-full tw-p-3 tw-border tw-border-ic-ink-3">
          {commerce("listTablePrice.1.titleLeft.userManagement")}
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
                "tw-p-3 tw-border tw-border-l-0 tw-border-ic-ink-3 tw-text-center",
              )}
            ></div>
          ))}
        </div>
      </div>
      <div className="tw-grid tw-grid-cols-10 tw-h-auto tw-items-center tw-sticky tw-bg-white tw-text-base">
        <div className="tw-col-span-2 tw-font-semibold tw-w-full tw-h-full tw-p-3 tw-border tw-border-r-0 tw-border-ic-ink-3"></div>
        <div className="tw-col-span-3 tw-w-full tw-h-full tw-p-3 tw-border tw-border-ic-ink-3">
          {commerce("listTablePrice.1.functions.user.title")}
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
                "tw-p-3 tw-border tw-border-l-0 tw-border-ic-ink-3 tw-text-center",
              )}
            >
              {value?.itemContent?.user.value != "" &&
                value?.itemContent?.user.value}
              {value?.itemContent?.user.image != "" && (
                <Image
                  src={value?.itemContent?.user.image}
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
        <div className="tw-col-span-5 tw-font-semibold tw-w-full tw-h-full tw-p-3 tw-border tw-border-ic-ink-3">
          {commerce("listTablePrice.1.titleLeft.inboundManagement")}
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
                "tw-p-3 tw-border tw-border-l-0 tw-border-ic-ink-3 tw-text-center",
              )}
            ></div>
          ))}
        </div>
      </div>
      <div className="tw-grid tw-grid-cols-10 tw-h-auto tw-items-center tw-sticky tw-bg-white tw-text-base">
        <div className="tw-col-span-2 tw-font-semibold tw-w-full tw-h-full tw-p-3 tw-border tw-border-r-0 tw-border-ic-ink-3"></div>
        <div className="tw-col-span-3 tw-w-full tw-h-full tw-p-3 tw-border tw-border-ic-ink-3">
          {commerce("listTablePrice.1.functions.inboundRequest.title")}
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
                "tw-p-3 tw-border tw-border-l-0 tw-border-ic-ink-3 tw-text-center",
              )}
            >
              {value?.itemContent?.inboundRequest.value != "" &&
                value?.itemContent?.inboundRequest.value}
              {value?.itemContent?.inboundRequest.image != "" && (
                <Image
                  src={value?.itemContent?.inboundRequest.image}
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
          {commerce("listTablePrice.1.functions.inboundReceiving.title")}
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
                "tw-p-3 tw-border tw-border-l-0 tw-border-ic-ink-3 tw-text-center",
              )}
            >
              {value?.itemContent?.inboundReceiving.value != "" &&
                value?.itemContent?.inboundReceiving.value}
              {value?.itemContent?.inboundReceiving.image != "" && (
                <Image
                  src={value?.itemContent?.inboundReceiving.image}
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
          {commerce("listTablePrice.1.functions.autoSuggestion.title")}
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
                "tw-p-3 tw-border tw-border-l-0 tw-border-ic-ink-3 tw-text-center",
              )}
            >
              {value?.itemContent?.autoSuggestion.value != "" &&
                value?.itemContent?.autoSuggestion.value}
              {value?.itemContent?.autoSuggestion.image != "" && (
                <Image
                  src={value?.itemContent?.autoSuggestion.image}
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
        <div className="tw-col-span-5 tw-font-semibold tw-w-full tw-h-full tw-p-3 tw-border tw-border-ic-ink-3">
          {commerce("listTablePrice.1.titleLeft.outboundManagement")}
        </div>
        <div className="tw-col-span-5 tw-grid tw-grid-cols-2 tw-w-full tw-h-full">
          <div
            className={clsx(
              "tw-p-3 tw-border tw-border-l-0 tw-border-ic-ink-3 tw-text-center",
            )}
          >
            {commerce("listTablePrice.1.uom.0")}
          </div>
          <div
            className={clsx(
              "tw-p-3 tw-border tw-border-l-0 tw-border-ic-ink-3 tw-text-center",
            )}
          >
            {commerce("listTablePrice.1.uom.1")}
          </div>
        </div>
      </div>
      <div className="tw-grid tw-grid-cols-10 tw-h-auto tw-items-center tw-sticky tw-bg-white tw-text-base">
        <div className="tw-col-span-2 tw-font-semibold tw-w-full tw-h-full tw-p-3 tw-border tw-border-r-0 tw-border-ic-ink-3"></div>
        <div className="tw-col-span-3 tw-w-full tw-h-full tw-p-3 tw-border tw-border-ic-ink-3">
          {commerce("listTablePrice.1.functions.outbound.title")}
        </div>
        <div className="tw-col-span-5 tw-grid tw-grid-cols-2 tw-w-full tw-h-full">
          <div>
            {(
              commerce(
                `listTablePrice.1.subHeader.0.itemContent.outbound.value`,
                {
                  returnObjects: true,
                },
              ) as string[]
            ).map((value: any, index: number) => (
              <div
                key={index}
                className={clsx(
                  "tw-p-3 tw-border tw-border-ic-ink-3 tw-text-center",
                )}
              >
                {value}
              </div>
            ))}
          </div>
          <div>
            {(
              commerce(
                `listTablePrice.1.subHeader.1.itemContent.outbound.value`,
                {
                  returnObjects: true,
                },
              ) as string[]
            ).map((value: any, index: number) => (
              <div
                key={index}
                className={clsx(
                  "tw-p-3 tw-border tw-border-ic-ink-3 tw-text-center",
                )}
              >
                {value}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="tw-grid tw-grid-cols-10 tw-h-auto tw-items-center tw-sticky tw-bg-white tw-text-base">
        <div className="tw-col-span-2 tw-font-semibold tw-w-full tw-h-full tw-p-3 tw-border tw-border-r-0 tw-border-ic-ink-3"></div>
        <div className="tw-col-span-3 tw-w-full tw-h-full tw-p-3 tw-border tw-border-ic-ink-3">
          {commerce("listTablePrice.1.functions.multiplePicking.title")}
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
                "tw-p-3 tw-border tw-border-l-0 tw-border-ic-ink-3 tw-text-center",
              )}
            >
              {value?.itemContent?.multiplePicking.value != "" &&
                value?.itemContent?.multiplePicking.value}
              {value?.itemContent?.multiplePicking.image != "" && (
                <Image
                  src={value?.itemContent?.multiplePicking.image}
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
          {commerce("listTablePrice.1.functions.multipleOutbound.title")}
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
                "tw-p-3 tw-border tw-border-l-0 tw-border-ic-ink-3 tw-text-center",
              )}
            >
              {value?.itemContent?.multipleOutbound.value != "" &&
                value?.itemContent?.multipleOutbound.value}
              {value?.itemContent?.multipleOutbound.image != "" && (
                <Image
                  src={value?.itemContent?.multipleOutbound.image}
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
          {commerce("listTablePrice.1.functions.flexible.title")}
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
                "tw-p-3 tw-border tw-border-l-0 tw-border-ic-ink-3 tw-text-center",
              )}
            >
              {value?.itemContent?.flexible.value != "" &&
                value?.itemContent?.flexible.value}
              {value?.itemContent?.flexible.image != "" && (
                <Image
                  src={value?.itemContent?.flexible.image}
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
          {commerce("listTablePrice.1.functions.automated.title")}
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
                "tw-p-3 tw-border tw-border-l-0 tw-border-ic-ink-3 tw-text-center",
              )}
            >
              {value?.itemContent?.automated.value != "" &&
                value?.itemContent?.automated.value}
              {value?.itemContent?.automated.image != "" && (
                <Image
                  src={value?.itemContent?.automated.image}
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
          {commerce("listTablePrice.1.functions.multiCarrier.title")}
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
                "tw-p-3 tw-border tw-border-l-0 tw-border-ic-ink-3 tw-text-center",
              )}
            >
              {value?.itemContent?.multiCarrier.value != "" &&
                value?.itemContent?.multiCarrier.value}
              {value?.itemContent?.multiCarrier.image != "" && (
                <Image
                  src={value?.itemContent?.multiCarrier.image}
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
        <div className="tw-col-span-5 tw-font-semibold tw-w-full tw-h-full tw-p-3 tw-border tw-border-r-0 tw-border-ic-ink-3">
          {commerce("listTablePrice.1.titleLeft.inventory")}
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
                "tw-p-3 tw-border tw-border-ic-ink-3 tw-text-center",
              )}
            ></div>
          ))}
        </div>
      </div>
      <div className="tw-grid tw-grid-cols-10 tw-h-auto tw-items-center tw-sticky tw-bg-white tw-text-base">
        <div className="tw-col-span-2 tw-font-semibold tw-w-full tw-h-full tw-p-3 tw-border tw-border-r-0 tw-border-ic-ink-3"></div>
        <div className="tw-col-span-3 tw-w-full tw-h-full tw-p-3 tw-border tw-border-ic-ink-3">
          {commerce("listTablePrice.1.functions.product.title")}
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
        <div className="tw-col-span-3 tw-w-full tw-h-full tw-p-3 tw-border tw-border-ic-ink-3">
          {commerce("listTablePrice.1.functions.location.title")}
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
                "tw-p-3 tw-border tw-border-l-0 tw-border-ic-ink-3 tw-text-center",
              )}
            >
              {value?.itemContent?.location.value != "" &&
                value?.itemContent?.location.value}
              {value?.itemContent?.location.image != "" && (
                <Image
                  src={value?.itemContent?.location.image}
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
          {commerce("listTablePrice.1.functions.stocktaking.title")}
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
                "tw-p-3 tw-border tw-border-l-0 tw-border-ic-ink-3 tw-text-center",
              )}
            >
              {value?.itemContent?.stocktaking.value != "" &&
                value?.itemContent?.stocktaking.value}
              {value?.itemContent?.stocktaking.image != "" && (
                <Image
                  src={value?.itemContent?.stocktaking.image}
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
          {commerce("listTablePrice.1.functions.warehouseFacilities.title")}
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
                "tw-p-3 tw-border tw-border-l-0 tw-border-ic-ink-3 tw-text-center",
              )}
            >
              {value?.itemContent?.warehouseFacilities.value != "" &&
                value?.itemContent?.warehouseFacilities.value}
              {value?.itemContent?.warehouseFacilities.image != "" && (
                <Image
                  src={value?.itemContent?.warehouseFacilities.image}
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
          {commerce("listTablePrice.1.functions.operational.title")}
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
                "tw-p-3 tw-border tw-border-l-0 tw-border-ic-ink-3 tw-text-center",
              )}
            >
              {value?.itemContent?.operational.value != "" &&
                value?.itemContent?.operational.value}
              {value?.itemContent?.operational.image != "" && (
                <Image
                  src={value?.itemContent?.operational.image}
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
          {commerce("listTablePrice.1.functions.integrationSales.title")}
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
                "tw-p-3 tw-border tw-border-l-0 tw-border-ic-ink-3 tw-text-center",
              )}
            >
              {value?.itemContent?.integrationSales.value != "" &&
                value?.itemContent?.integrationSales.value}
              {value?.itemContent?.integrationSales.image != "" && (
                <Image
                  src={value?.itemContent?.integrationSales.image}
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
          {commerce("listTablePrice.1.functions.integrationLogistics.title")}
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
                "tw-p-3 tw-border tw-border-l-0 tw-border-ic-ink-3 tw-text-center",
              )}
            >
              {value?.itemContent?.integrationLogistics.value != "" &&
                value?.itemContent?.integrationLogistics.value}
              {value?.itemContent?.integrationLogistics.image != "" && (
                <Image
                  src={value?.itemContent?.integrationLogistics.image}
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
        <div className="tw-col-span-5 tw-font-semibold tw-w-full tw-h-full tw-p-3 tw-border tw-border-r-0 tw-border-ic-ink-3">
          {commerce("listTablePrice.1.titleLeft.report")}
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
                "tw-p-3 tw-border tw-border-ic-ink-3 tw-text-center",
              )}
            ></div>
          ))}
        </div>
      </div>
      <div className="tw-grid tw-grid-cols-10 tw-h-auto tw-items-center tw-sticky tw-bg-white tw-text-base">
        <div className="tw-col-span-2 tw-font-semibold tw-w-full tw-h-full tw-p-3 tw-border tw-border-r-0 tw-border-ic-ink-3"></div>
        <div className="tw-col-span-3 tw-w-full tw-h-full tw-p-3 tw-border tw-border-ic-ink-3">
          {commerce("listTablePrice.1.functions.inventoryReports.title")}
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
                "tw-p-3 tw-border tw-border-l-0 tw-border-ic-ink-3 tw-text-center",
              )}
            >
              {value?.itemContent?.inventoryReports.value != "" &&
                value?.itemContent?.inventoryReports.value}
              {value?.itemContent?.inventoryReports.image != "" && (
                <Image
                  src={value?.itemContent?.inventoryReports.image}
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
          {commerce("listTablePrice.1.functions.operationalPerformance.title")}
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
                "tw-p-3 tw-border tw-border-l-0 tw-border-ic-ink-3 tw-text-center",
              )}
            >
              {value?.itemContent?.operationalPerformance.value != "" &&
                value?.itemContent?.operationalPerformance.value}
              {value?.itemContent?.operationalPerformance.image != "" && (
                <Image
                  src={value?.itemContent?.operationalPerformance.image}
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
          {commerce("listTablePrice.1.functions.shipping.title")}
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
                "tw-p-3 tw-border tw-border-l-0 tw-border-ic-ink-3 tw-text-center",
              )}
            >
              {value?.itemContent?.shipping.value != "" &&
                value?.itemContent?.shipping.value}
              {value?.itemContent?.shipping.image != "" && (
                <Image
                  src={value?.itemContent?.shipping.image}
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
        <div className="tw-col-span-5 tw-font-semibold tw-w-full tw-h-full tw-p-3 tw-border tw-border-r-0 tw-border-ic-ink-3">
          {commerce("listTablePrice.1.titleLeft.additionalServices")}
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
                "tw-p-3 tw-border tw-border-ic-ink-3 tw-text-center",
              )}
            ></div>
          ))}
        </div>
      </div>
      <div className="tw-grid tw-grid-cols-10 tw-h-auto tw-items-center tw-sticky tw-bg-white tw-text-base">
        <div className="tw-col-span-2 tw-font-semibold tw-w-full tw-h-full tw-p-3 tw-border tw-border-r-0 tw-border-ic-ink-3"></div>
        <div className="tw-col-span-3 tw-w-full tw-h-full tw-p-3 tw-border tw-border-ic-ink-3">
          {commerce("listTablePrice.1.functions.onSite.title")}
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
                "tw-p-3 tw-border tw-border-l-0 tw-border-ic-ink-3 tw-text-center",
              )}
            >
              {value?.itemContent?.onSite.value != "" &&
                value?.itemContent?.onSite.value}
              {value?.itemContent?.onSite.image != "" && (
                <Image
                  src={value?.itemContent?.onSite.image}
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
        <div className="tw-col-span-2 tw-font-semibold tw-w-full tw-h-full tw-p-3 tw-border tw-border-r-0 tw-border-ic-ink-3 tw-rounded-bl-xl"></div>
        <div className="tw-col-span-3 tw-w-full tw-h-full tw-p-3 tw-border tw-border-ic-ink-3">
          {commerce("listTablePrice.1.functions.outOfScope.title")}
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
                "tw-p-3 tw-border tw-border-l-0 tw-border-ic-ink-3 tw-text-center",
                index === 1 ? "tw-rounded-br-xl" : "",
              )}
            >
              {value?.itemContent?.outOfScope.value != "" &&
                value?.itemContent?.outOfScope.value}
              {value?.itemContent?.outOfScope.image != "" && (
                <Image
                  src={value?.itemContent?.outOfScope.image}
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
