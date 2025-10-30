"use client";
import Image from "next/image";
import clsx from "clsx";
import { useTranslation } from "next-i18next";
import Link from "next/link";
import useWidth from "@/hooks/useWidth";

const TableDesktop = () => {
  const { t: commerce } = useTranslation("commerce-layer");
  const width = useWidth();

  return (
    <div className="tw-max-w-[1280px] tw-w-full tw-mx-auto lg:tw-mt-8">
      <div
        className={clsx(
          "tw-sticky tw-z-[2] tw-py-4 tw-bg-white",
          width >= 1830 ? "tw-top-[70px]" : "tw-top-[75px]",
        )}
      >
        <div className="tw-grid tw-grid-cols-3 tw-w-full tw-gap-6">
          {(
            commerce(`pricing.subHeader`, {
              returnObjects: true,
            }) as string[]
          ).map((value: any, index: number) => (
            <div
              key={index}
              className={clsx(
                "tw-p-3 tw-rounded-xl tw-border tw-text-center tw-flex tw-flex-col tw-justify-center",
                index === 0
                  ? "tw-bg-green-1 tw-border-green-2"
                  : "tw-bg-blue-1 tw-border-blue-2",
              )}
            >
              <p
                className={clsx(
                  "tw-font-bold tw-text-xl tw-mb-0",
                  index === 0 ? "tw-text-green-6" : "tw-text-blue-6",
                )}
              >
                {value?.title}
              </p>
              <p className="tw-mt-1 tw-text-base tw-line-through tw-mb-0">
                {value?.oldPrice}
              </p>
              <p className="tw-mt-1 tw-text-sm tw-mb-0">{value?.if}</p>
              <h3
                className={clsx(
                  "tw-font-bold tw-mt-1 tw-text-2xl tw-mb-0",
                  index === 0 ? "tw-text-green-6" : "tw-text-blue-6",
                )}
              >
                {value?.value}
              </h3>
              {value.contactUs != "" && (
                <div className="tw-my-3">
                  <Link
                    className="tw-py-2 tw-px-5 tw-font-medium tw-rounded-lg tw-bg-brand-primary tw-text-white tw-no-underline"
                    href="/contact-sales"
                    target="_blank"
                  >
                    {value.contactUs}
                  </Link>
                </div>
              )}
              <p className="tw-mb-0 tw-text-sm">{value?.suitable}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="tw-relative tw-z-[1]">
        <div className="tw-grid tw-grid-cols-10 tw-h-auto tw-items-center tw-sticky tw-top-[165px] tw-bg-white tw-text-base tw-font-bold">
          <div className="tw-col-span-2 tw-w-full tw-h-full tw-p-3 tw-bg-ic-ink-1 tw-border tw-border-r-0 tw-border-ic-ink-2 tw-rounded-tl-xl">
            {commerce("pricing.titleLeft.heading")}
          </div>
          <div className="tw-col-span-2 tw-w-full tw-h-full tw-p-3 tw-bg-ic-ink-1 tw-border tw-border-ic-ink-2">
            {commerce("pricing.functions.heading")}
          </div>
          <div className="tw-col-span-6 tw-grid tw-grid-cols-3 tw-w-full tw-h-full">
            {(
              commerce(`pricing.subHeader`, {
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
        <div className="tw-grid tw-grid-cols-10 tw-h-auto tw-items-center tw-sticky tw-top-[165px] tw-bg-white tw-text-base">
          <div className="tw-col-span-2 tw-w-full tw-h-full tw-p-3 tw-border tw-border-r-0 tw-border-ic-ink-3">
            {commerce("pricing.titleLeft.userManagement")}
          </div>
          <div className="tw-col-span-2 tw-w-full tw-h-full tw-p-3 tw-border tw-border-ic-ink-3">
            {commerce("pricing.functions.userPermissions.title")}
          </div>
          <div className="tw-col-span-6 tw-grid tw-grid-cols-3 tw-w-full tw-h-full">
            {(
              commerce(`pricing.subHeader`, {
                returnObjects: true,
              }) as string[]
            ).map((value: any, index: number) => (
              <div
                key={index}
                className={clsx(
                  "tw-p-3 tw-border tw-border-l-0 tw-border-ic-ink-3 tw-text-center",
                )}
              >
                {value?.itemContent?.userPermissions.value}
              </div>
            ))}
          </div>
        </div>
        <div className="tw-grid tw-grid-cols-10 tw-h-auto tw-items-center tw-sticky tw-top-[165px] tw-bg-white tw-text-base">
          <div className="tw-col-span-2 tw-w-full tw-h-full tw-p-3 tw-border tw-border-r-0 tw-border-ic-ink-3">
            {commerce("pricing.titleLeft.iChiba")}
          </div>
          <div className="tw-col-span-2 tw-w-full tw-h-full tw-p-3 tw-border tw-border-ic-ink-3">
            {commerce("pricing.functions.markets.title")}
          </div>
          <div className="tw-col-span-6 tw-grid tw-grid-cols-3 tw-w-full tw-h-full">
            {(
              commerce(`pricing.subHeader`, {
                returnObjects: true,
              }) as string[]
            ).map((value: any, index: number) => (
              <div
                key={index}
                className={clsx(
                  "tw-p-3 tw-border tw-border-l-0 tw-border-ic-ink-3 tw-text-center",
                )}
              >
                {value?.itemContent?.markets?.value}
              </div>
            ))}
          </div>
        </div>
        <div className="tw-grid tw-grid-cols-10 tw-h-auto tw-items-center tw-sticky tw-top-[165px] tw-bg-white tw-text-base">
          <div className="tw-col-span-2 tw-w-full tw-h-full tw-p-3 tw-border tw-border-r-0 tw-border-ic-ink-3">
            {commerce("pricing.titleLeft.salesChannel")}
          </div>
          <div className="tw-col-span-8 tw-flex tw-flex-col">
            <div className="tw-grid tw-grid-cols-8">
              <div className="tw-col-span-2 tw-w-full tw-h-full tw-p-3 tw-border tw-border-ic-ink-3">
                {commerce("pricing.functions.maximuminStores.title")}
              </div>
              <div className="tw-col-span-6 tw-grid tw-grid-cols-3 tw-w-full tw-h-full">
                {(
                  commerce(`pricing.subHeader`, {
                    returnObjects: true,
                  }) as string[]
                ).map((value: any, index: number) => (
                  <div
                    key={index}
                    className={clsx(
                      "tw-p-3 tw-border tw-border-l-0 tw-border-ic-ink-3 tw-text-center",
                    )}
                  >
                    {value?.itemContent?.maximuminStores?.value}
                  </div>
                ))}
              </div>
            </div>
            <div className="tw-grid tw-grid-cols-8">
              <div className="tw-col-span-2 tw-w-full tw-h-full tw-p-3 tw-border tw-border-ic-ink-3">
                {commerce("pricing.functions.numberFanpages.title")}
              </div>
              <div className="tw-col-span-6 tw-grid tw-grid-cols-3 tw-w-full tw-h-full">
                {(
                  commerce(`pricing.subHeader`, {
                    returnObjects: true,
                  }) as string[]
                ).map((value: any, index: number) => (
                  <div
                    key={index}
                    className={clsx(
                      "tw-p-3 tw-border tw-border-l-0 tw-border-ic-ink-3 tw-text-center",
                    )}
                  >
                    {value?.itemContent?.numberFanpages?.value}
                  </div>
                ))}
              </div>
            </div>
            <div className="tw-grid tw-grid-cols-8">
              <div className="tw-col-span-2 tw-w-full tw-h-full tw-p-3 tw-border tw-border-ic-ink-3">
                {commerce("pricing.functions.pos.title")}
              </div>
              <div className="tw-col-span-6 tw-grid tw-grid-cols-3 tw-w-full tw-h-full">
                {(
                  commerce(`pricing.subHeader`, {
                    returnObjects: true,
                  }) as string[]
                ).map((value: any, index: number) => (
                  <div
                    key={index}
                    className={clsx(
                      "tw-p-3 tw-border tw-border-l-0 tw-border-ic-ink-3 tw-text-center",
                    )}
                  >
                    <p className="tw-mb-0">{value?.itemContent?.pos?.value}</p>
                    <p className="tw-mb-0">{value?.itemContent?.pos?.plus}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="tw-grid tw-grid-cols-8">
              <div className="tw-col-span-2 tw-w-full tw-h-full tw-p-3 tw-border tw-border-ic-ink-3">
                {commerce("pricing.functions.listProducts.title")}
              </div>
              <div className="tw-col-span-6 tw-grid tw-grid-cols-3 tw-w-full tw-h-full">
                {(
                  commerce(`pricing.subHeader`, {
                    returnObjects: true,
                  }) as string[]
                ).map((value: any, index: number) => (
                  <div
                    key={index}
                    className={clsx(
                      "tw-p-3 tw-border tw-border-l-0 tw-border-ic-ink-3 tw-w-full tw-h-full tw-flex tw-items-center",
                    )}
                  >
                    <Image
                      src={value?.itemContent?.listProducts?.image}
                      width={24}
                      height={24}
                      alt=""
                      className={clsx(
                        value?.itemContent?.listProducts?.value != ""
                          ? "tw-w-2 tw-h-[2px]"
                          : "tw-w-6 tw-h-6",
                        "tw-mx-auto",
                      )}
                    />
                  </div>
                ))}
              </div>
            </div>
            <div className="tw-grid tw-grid-cols-8">
              <div className="tw-col-span-2 tw-w-full tw-h-full tw-p-3 tw-border tw-border-ic-ink-3">
                {commerce("pricing.functions.sellingWebsite.title")}
              </div>
              <div className="tw-col-span-6 tw-grid tw-grid-cols-3 tw-w-full tw-h-full">
                {(
                  commerce(`pricing.subHeader`, {
                    returnObjects: true,
                  }) as string[]
                ).map((value: any, index: number) => (
                  <div
                    key={index}
                    className={clsx(
                      "tw-p-3 tw-border tw-border-l-0 tw-border-ic-ink-3 tw-w-full tw-h-full tw-flex tw-items-center",
                    )}
                  >
                    <Image
                      src={value?.itemContent?.sellingWebsite?.image}
                      width={24}
                      height={24}
                      alt=""
                      className={clsx(
                        value?.itemContent?.sellingWebsite?.value != ""
                          ? "tw-w-2 tw-h-[2px]"
                          : "tw-w-6 tw-h-6",
                        "tw-mx-auto",
                      )}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="tw-grid tw-grid-cols-10 tw-h-auto tw-items-center tw-sticky tw-top-[165px] tw-bg-white tw-text-base">
          <div className="tw-col-span-2 tw-w-full tw-h-full tw-p-3 tw-border tw-border-r-0 tw-border-ic-ink-3">
            {commerce("pricing.titleLeft.inventory")}
          </div>
          <div className="tw-col-span-8 tw-flex tw-flex-col">
            <div className="tw-grid tw-grid-cols-8">
              <div className="tw-col-span-2 tw-w-full tw-h-full tw-p-3 tw-border tw-border-ic-ink-3">
                {commerce("pricing.functions.inventoryLocation.title")}
              </div>
              <div className="tw-col-span-6 tw-grid tw-grid-cols-3 tw-w-full tw-h-full">
                {(
                  commerce(`pricing.subHeader`, {
                    returnObjects: true,
                  }) as string[]
                ).map((value: any, index: number) => (
                  <div
                    key={index}
                    className={clsx(
                      "tw-p-3 tw-border tw-border-l-0 tw-border-ic-ink-3 tw-text-center",
                    )}
                  >
                    {value?.itemContent?.inventoryLocation?.value}
                  </div>
                ))}
              </div>
            </div>
            <div className="tw-grid tw-grid-cols-8">
              <div className="tw-col-span-2 tw-w-full tw-h-full tw-p-3 tw-border tw-border-ic-ink-3">
                {commerce("pricing.functions.inventoryAllocation.title")}
              </div>
              <div className="tw-col-span-6 tw-grid tw-grid-cols-3 tw-w-full tw-h-full">
                {(
                  commerce(`pricing.subHeader`, {
                    returnObjects: true,
                  }) as string[]
                ).map((value: any, index: number) => (
                  <div
                    key={index}
                    className={clsx(
                      "tw-p-3 tw-border tw-border-l-0 tw-border-ic-ink-3 tw-w-full tw-h-full tw-flex tw-items-center",
                    )}
                  >
                    <Image
                      src={value?.itemContent?.inventoryAllocation?.image}
                      width={24}
                      height={24}
                      alt=""
                      className={clsx(
                        value?.itemContent?.inventoryAllocation?.value != ""
                          ? "tw-w-2 tw-h-[2px]"
                          : "tw-w-6 tw-h-6",
                        "tw-mx-auto",
                      )}
                    />
                  </div>
                ))}
              </div>
            </div>
            <div className="tw-grid tw-grid-cols-8">
              <div className="tw-col-span-2 tw-w-full tw-h-full tw-p-3 tw-border tw-border-ic-ink-3">
                {commerce("pricing.functions.network.title")}
              </div>
              <div className="tw-col-span-6 tw-grid tw-grid-cols-3 tw-w-full tw-h-full">
                {(
                  commerce(`pricing.subHeader`, {
                    returnObjects: true,
                  }) as string[]
                ).map((value: any, index: number) => (
                  <div
                    key={index}
                    className={clsx(
                      "tw-p-3 tw-border tw-border-l-0 tw-border-ic-ink-3 tw-w-full tw-h-full tw-flex tw-items-center",
                    )}
                  >
                    <Image
                      src={value?.itemContent?.network?.image}
                      width={24}
                      height={24}
                      alt=""
                      className={clsx(
                        value?.itemContent?.network?.value != ""
                          ? "tw-w-2 tw-h-[2px]"
                          : "tw-w-6 tw-h-6",
                        "tw-mx-auto",
                      )}
                    />
                  </div>
                ))}
              </div>
            </div>
            <div className="tw-grid tw-grid-cols-8">
              <div className="tw-col-span-2 tw-w-full tw-h-full tw-p-3 tw-border tw-border-ic-ink-3">
                {commerce("pricing.functions.suppliers.title")}
              </div>
              <div className="tw-col-span-6 tw-grid tw-grid-cols-3 tw-w-full tw-h-full">
                {(
                  commerce(`pricing.subHeader`, {
                    returnObjects: true,
                  }) as string[]
                ).map((value: any, index: number) => (
                  <div
                    key={index}
                    className={clsx(
                      "tw-p-3 tw-border tw-border-l-0 tw-border-ic-ink-3 tw-w-full tw-h-full tw-flex tw-items-center",
                    )}
                  >
                    <Image
                      src={value?.itemContent?.suppliers?.image}
                      width={24}
                      height={24}
                      alt=""
                      className={clsx(
                        value?.itemContent?.suppliers?.value != ""
                          ? "tw-w-2 tw-h-[2px]"
                          : "tw-w-6 tw-h-6",
                        "tw-mx-auto",
                      )}
                    />
                  </div>
                ))}
              </div>
            </div>
            <div className="tw-grid tw-grid-cols-8">
              <div className="tw-col-span-2 tw-w-full tw-h-full tw-p-3 tw-border tw-border-ic-ink-3">
                {commerce("pricing.functions.inbound.title")}
              </div>
              <div className="tw-col-span-6 tw-grid tw-grid-cols-3 tw-w-full tw-h-full">
                {(
                  commerce(`pricing.subHeader`, {
                    returnObjects: true,
                  }) as string[]
                ).map((value: any, index: number) => (
                  <div
                    key={index}
                    className={clsx(
                      "tw-p-3 tw-border tw-border-l-0 tw-border-ic-ink-3 tw-w-full tw-h-full tw-flex tw-items-center",
                    )}
                  >
                    <Image
                      src={value?.itemContent?.inbound?.image}
                      width={24}
                      height={24}
                      alt=""
                      className={clsx(
                        value?.itemContent?.inbound?.value != ""
                          ? "tw-w-2 tw-h-[2px]"
                          : "tw-w-6 tw-h-6",
                        "tw-mx-auto",
                      )}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="tw-grid tw-grid-cols-10 tw-h-auto tw-items-center tw-sticky tw-top-[165px] tw-bg-white tw-text-base">
          <div className="tw-col-span-2 tw-w-full tw-h-full tw-p-3 tw-border tw-border-r-0 tw-border-ic-ink-3">
            {commerce("pricing.titleLeft.orderManagement")}
          </div>
          <div className="tw-col-span-8 tw-flex tw-flex-col">
            <div className="tw-grid tw-grid-cols-8">
              <div className="tw-col-span-2 tw-w-full tw-h-full tw-p-3 tw-border tw-border-ic-ink-3">
                {commerce("pricing.functions.ordersMonth.title")}
              </div>
              <div className="tw-col-span-6 tw-grid tw-grid-cols-3 tw-w-full tw-h-full">
                {(
                  commerce(`pricing.subHeader`, {
                    returnObjects: true,
                  }) as string[]
                ).map((value: any, index: number) => (
                  <div
                    key={index}
                    className={clsx(
                      "tw-p-3 tw-border tw-border-l-0 tw-border-ic-ink-3 tw-text-center",
                    )}
                  >
                    {value?.itemContent?.ordersMonth?.value}
                  </div>
                ))}
              </div>
            </div>
            <div className="tw-grid tw-grid-cols-8">
              <div className="tw-col-span-2 tw-w-full tw-h-full tw-p-3 tw-border tw-border-ic-ink-3">
                {commerce("pricing.functions.return.title")}
              </div>
              <div className="tw-col-span-6 tw-grid tw-grid-cols-3 tw-w-full tw-h-full">
                {(
                  commerce(`pricing.subHeader`, {
                    returnObjects: true,
                  }) as string[]
                ).map((value: any, index: number) => (
                  <div
                    key={index}
                    className={clsx(
                      "tw-p-3 tw-border tw-border-l-0 tw-border-ic-ink-3 tw-w-full tw-h-full tw-flex tw-items-center",
                    )}
                  >
                    <Image
                      src={value?.itemContent?.return?.image}
                      width={24}
                      height={24}
                      alt=""
                      className={clsx(
                        value?.itemContent?.return?.value != ""
                          ? "tw-w-2 tw-h-[2px]"
                          : "tw-w-6 tw-h-6",
                        "tw-mx-auto",
                      )}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="tw-grid tw-grid-cols-10 tw-h-auto tw-items-center tw-sticky tw-top-[165px] tw-bg-white tw-text-base">
          <div className="tw-col-span-2 tw-w-full tw-h-full tw-p-3 tw-border tw-border-r-0 tw-border-ic-ink-3">
            {commerce("pricing.titleLeft.productManagement")}
          </div>
          <div className="tw-col-span-8 tw-flex tw-flex-col">
            <div className="tw-grid tw-grid-cols-8">
              <div className="tw-col-span-2 tw-w-full tw-h-full tw-p-3 tw-border tw-border-ic-ink-3">
                {commerce("pricing.functions.catalog.title")}
              </div>
              <div className="tw-col-span-6 tw-grid tw-grid-cols-3 tw-w-full tw-h-full">
                {(
                  commerce(`pricing.subHeader`, {
                    returnObjects: true,
                  }) as string[]
                ).map((value: any, index: number) => (
                  <div
                    key={index}
                    className={clsx(
                      "tw-p-3 tw-border tw-border-l-0 tw-border-ic-ink-3 tw-w-full tw-h-full tw-flex tw-items-center",
                    )}
                  >
                    <Image
                      src={value?.itemContent?.catalog?.image}
                      width={24}
                      height={24}
                      alt=""
                      className={clsx(
                        value?.itemContent?.catalog?.value != ""
                          ? "tw-w-2 tw-h-[2px]"
                          : "tw-w-6 tw-h-6",
                        "tw-mx-auto",
                      )}
                    />
                  </div>
                ))}
              </div>
            </div>
            <div className="tw-grid tw-grid-cols-8">
              <div className="tw-col-span-2 tw-w-full tw-h-full tw-p-3 tw-border tw-border-ic-ink-3">
                {commerce("pricing.functions.single.title")}
              </div>
              <div className="tw-col-span-6 tw-grid tw-grid-cols-3 tw-w-full tw-h-full">
                {(
                  commerce(`pricing.subHeader`, {
                    returnObjects: true,
                  }) as string[]
                ).map((value: any, index: number) => (
                  <div
                    key={index}
                    className={clsx(
                      "tw-p-3 tw-border tw-border-l-0 tw-border-ic-ink-3 tw-w-full tw-h-full tw-flex tw-items-center",
                    )}
                  >
                    <Image
                      src={value?.itemContent?.single?.image}
                      width={24}
                      height={24}
                      alt=""
                      className={clsx(
                        value?.itemContent?.single?.value != ""
                          ? "tw-w-2 tw-h-[2px]"
                          : "tw-w-6 tw-h-6",
                        "tw-mx-auto",
                      )}
                    />
                  </div>
                ))}
              </div>
            </div>
            <div className="tw-grid tw-grid-cols-8">
              <div className="tw-col-span-2 tw-w-full tw-h-full tw-p-3 tw-border tw-border-ic-ink-3">
                {commerce("pricing.functions.product.title")}
              </div>
              <div className="tw-col-span-6 tw-grid tw-grid-cols-3 tw-w-full tw-h-full">
                {(
                  commerce(`pricing.subHeader`, {
                    returnObjects: true,
                  }) as string[]
                ).map((value: any, index: number) => (
                  <div
                    key={index}
                    className={clsx(
                      "tw-p-3 tw-border tw-border-l-0 tw-border-ic-ink-3 tw-w-full tw-h-full tw-flex tw-items-center",
                    )}
                  >
                    <Image
                      src={value?.itemContent?.product?.image}
                      width={24}
                      height={24}
                      alt=""
                      className={clsx(
                        value?.itemContent?.product?.value != ""
                          ? "tw-w-2 tw-h-[2px]"
                          : "tw-w-6 tw-h-6",
                        "tw-mx-auto",
                      )}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="tw-grid tw-grid-cols-10 tw-h-auto tw-items-center tw-sticky tw-top-[165px] tw-bg-white tw-text-base">
          <div className="tw-col-span-2 tw-w-full tw-h-full tw-p-3 tw-border tw-border-r-0 tw-border-ic-ink-3">
            {commerce("pricing.titleLeft.reports")}
          </div>
          <div className="tw-col-span-8 tw-flex tw-flex-col">
            <div className="tw-grid tw-grid-cols-8">
              <div className="tw-col-span-2 tw-w-full tw-h-full tw-p-3 tw-border tw-border-ic-ink-3">
                {commerce("pricing.functions.standard.title")}
              </div>
              <div className="tw-col-span-6 tw-grid tw-grid-cols-3 tw-w-full tw-h-full">
                {(
                  commerce(`pricing.subHeader`, {
                    returnObjects: true,
                  }) as string[]
                ).map((value: any, index: number) => (
                  <div
                    key={index}
                    className={clsx(
                      "tw-p-3 tw-border tw-border-l-0 tw-border-ic-ink-3 tw-w-full tw-h-full tw-flex tw-items-center",
                    )}
                  >
                    <Image
                      src={value?.itemContent?.standard?.image}
                      width={24}
                      height={24}
                      alt=""
                      className={clsx(
                        value?.itemContent?.standard?.value != ""
                          ? "tw-w-2 tw-h-[2px]"
                          : "tw-w-6 tw-h-6",
                        "tw-mx-auto",
                      )}
                    />
                  </div>
                ))}
              </div>
            </div>
            <div className="tw-grid tw-grid-cols-8">
              <div className="tw-col-span-2 tw-w-full tw-h-full tw-p-3 tw-border tw-border-ic-ink-3">
                {commerce("pricing.functions.advanced.title")}
              </div>
              <div className="tw-col-span-6 tw-grid tw-grid-cols-3 tw-w-full tw-h-full">
                {(
                  commerce(`pricing.subHeader`, {
                    returnObjects: true,
                  }) as string[]
                ).map((value: any, index: number) => (
                  <div
                    key={index}
                    className={clsx(
                      "tw-p-3 tw-border tw-border-l-0 tw-border-ic-ink-3 tw-w-full tw-h-full tw-flex tw-items-center",
                    )}
                  >
                    <Image
                      src={value?.itemContent?.advanced?.image}
                      width={24}
                      height={24}
                      alt=""
                      className={clsx(
                        value?.itemContent?.advanced?.value != ""
                          ? "tw-w-2 tw-h-[2px]"
                          : "tw-w-6 tw-h-6",
                        "tw-mx-auto",
                      )}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="tw-grid tw-grid-cols-10 tw-h-auto tw-items-center tw-sticky tw-top-[165px] tw-bg-white tw-text-base">
          <div className="tw-col-span-2 tw-w-full tw-h-full tw-p-3 tw-border tw-border-r-0 tw-border-ic-ink-3">
            {commerce("pricing.titleLeft.otherSystem")}
          </div>
          <div className="tw-col-span-8 tw-grid tw-grid-cols-8 tw-h-full">
            <div className="tw-col-span-2 tw-w-full tw-h-full tw-p-3 tw-border tw-border-ic-ink-3">
              {commerce("pricing.functions.integration.title")}
            </div>
            <div className="tw-col-span-6 tw-grid tw-grid-cols-3 tw-w-full tw-h-full">
              {(
                commerce(`pricing.subHeader`, {
                  returnObjects: true,
                }) as string[]
              ).map((value: any, index: number) => (
                <div
                  key={index}
                  className={clsx(
                    "tw-p-3 tw-border tw-border-l-0 tw-border-ic-ink-3 tw-w-full tw-h-full tw-flex tw-items-center",
                  )}
                >
                  <Image
                    src={value?.itemContent?.integration?.image}
                    width={24}
                    height={24}
                    alt=""
                    className={clsx(
                      value?.itemContent?.integration?.value != ""
                        ? "tw-w-2 tw-h-[2px]"
                        : "tw-w-6 tw-h-6",
                      "tw-mx-auto",
                    )}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="tw-grid tw-grid-cols-10 tw-h-auto tw-items-center tw-sticky tw-top-[165px] tw-bg-white tw-text-base">
          <div className="tw-col-span-2 tw-w-full tw-h-full tw-p-3 tw-border tw-border-r-0 tw-border-ic-ink-3">
            {commerce("pricing.titleLeft.loyalty")}
          </div>
          <div className="tw-col-span-8 tw-flex tw-flex-col">
            <div className="tw-grid tw-grid-cols-8">
              <div className="tw-col-span-2 tw-w-full tw-h-full tw-p-3 tw-border tw-border-ic-ink-3">
                {commerce("pricing.functions.pointWallet.title")}
              </div>
              <div className="tw-col-span-6 tw-grid tw-grid-cols-3 tw-w-full tw-h-full">
                {(
                  commerce(`pricing.subHeader`, {
                    returnObjects: true,
                  }) as string[]
                ).map((value: any, index: number) => (
                  <div
                    key={index}
                    className={clsx(
                      "tw-p-3 tw-border tw-border-l-0 tw-border-ic-ink-3 tw-w-full tw-h-full tw-flex tw-items-center",
                    )}
                  >
                    <Image
                      src={value?.itemContent?.pointWallet?.image}
                      width={24}
                      height={24}
                      alt=""
                      className={clsx(
                        value?.itemContent?.pointWallet?.value != ""
                          ? "tw-w-2 tw-h-[2px]"
                          : "tw-w-6 tw-h-6",
                        "tw-mx-auto",
                      )}
                    />
                  </div>
                ))}
              </div>
            </div>
            <div className="tw-grid tw-grid-cols-8">
              <div className="tw-col-span-2 tw-w-full tw-h-full tw-p-3 tw-border tw-border-ic-ink-3">
                {commerce("pricing.functions.advanced.title")}
              </div>
              <div className="tw-col-span-6 tw-grid tw-grid-cols-3 tw-w-full tw-h-full">
                {(
                  commerce(`pricing.subHeader`, {
                    returnObjects: true,
                  }) as string[]
                ).map((value: any, index: number) => (
                  <div
                    key={index}
                    className={clsx(
                      "tw-p-3 tw-border tw-border-l-0 tw-border-ic-ink-3 tw-w-full tw-h-full tw-flex tw-items-center",
                    )}
                  >
                    <Image
                      src={value?.itemContent?.advanced?.image}
                      width={24}
                      height={24}
                      alt=""
                      className={clsx(
                        value?.itemContent?.advanced?.value != ""
                          ? "tw-w-2 tw-h-[2px]"
                          : "tw-w-6 tw-h-6",
                        "tw-mx-auto",
                      )}
                    />
                  </div>
                ))}
              </div>
            </div>
            <div className="tw-grid tw-grid-cols-8">
              <div className="tw-col-span-2 tw-w-full tw-h-full tw-p-3 tw-border tw-border-ic-ink-3">
                {commerce("pricing.functions.voucher.title")}
              </div>
              <div className="tw-col-span-6 tw-grid tw-grid-cols-3 tw-w-full tw-h-full">
                {(
                  commerce(`pricing.subHeader`, {
                    returnObjects: true,
                  }) as string[]
                ).map((value: any, index: number) => (
                  <div
                    key={index}
                    className={clsx(
                      "tw-p-3 tw-border tw-border-l-0 tw-border-ic-ink-3 tw-w-full tw-h-full tw-flex tw-items-center",
                    )}
                  >
                    <Image
                      src={value?.itemContent?.voucher?.image}
                      width={24}
                      height={24}
                      alt=""
                      className={clsx(
                        value?.itemContent?.voucher?.value != ""
                          ? "tw-w-2 tw-h-[2px]"
                          : "tw-w-6 tw-h-6",
                        "tw-mx-auto",
                      )}
                    />
                  </div>
                ))}
              </div>
            </div>
            <div className="tw-grid tw-grid-cols-8">
              <div className="tw-col-span-2 tw-w-full tw-h-full tw-p-3 tw-border tw-border-ic-ink-3">
                {commerce("pricing.functions.cashback.title")}
              </div>
              <div className="tw-col-span-6 tw-grid tw-grid-cols-3 tw-w-full tw-h-full">
                {(
                  commerce(`pricing.subHeader`, {
                    returnObjects: true,
                  }) as string[]
                ).map((value: any, index: number) => (
                  <div
                    key={index}
                    className={clsx(
                      "tw-p-3 tw-border tw-border-l-0 tw-border-ic-ink-3 tw-w-full tw-h-full tw-flex tw-items-center",
                    )}
                  >
                    <Image
                      src={value?.itemContent?.cashback?.image}
                      width={24}
                      height={24}
                      alt=""
                      className={clsx(
                        value?.itemContent?.cashback?.value != ""
                          ? "tw-w-2 tw-h-[2px]"
                          : "tw-w-6 tw-h-6",
                        "tw-mx-auto",
                      )}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="tw-grid tw-grid-cols-10 tw-h-auto tw-items-center tw-sticky tw-top-[165px] tw-bg-white tw-text-base">
          <div className="tw-col-span-2 tw-w-full tw-h-full tw-p-3 tw-border tw-border-r-0 tw-border-ic-ink-3">
            {commerce("pricing.titleLeft.support")}
          </div>
          <div className="tw-col-span-8 tw-grid tw-grid-cols-8 tw-h-full">
            <div className="tw-col-span-2 tw-w-full tw-h-full tw-p-3 tw-border tw-border-ic-ink-3">
              {commerce("pricing.functions.support.title")}
            </div>
            <div className="tw-col-span-6 tw-grid tw-grid-cols-3 tw-w-full tw-h-full">
              {(
                commerce(`pricing.subHeader`, {
                  returnObjects: true,
                }) as string[]
              ).map((value: any, index: number) => (
                <div
                  key={index}
                  className={clsx(
                    "tw-p-3 tw-border tw-border-l-0 tw-border-ic-ink-3  tw-w-full tw-h-full tw-flex tw-items-center",
                  )}
                >
                  {value?.itemContent?.support?.value != "" && (
                    <p className="tw-text-center">
                      {value?.itemContent?.support?.value}
                    </p>
                  )}

                  {value?.itemContent?.support?.image != "" && (
                    <Image
                      src={value?.itemContent?.support?.image}
                      width={8}
                      height={2}
                      alt=""
                      className="tw-mx-auto"
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="tw-grid tw-grid-cols-10 tw-h-auto tw-items-center tw-sticky tw-top-[165px] tw-bg-white tw-text-base">
          <div className="tw-col-span-4 tw-h-full tw-p-3 tw-border tw-border-ic-ink-3">
            <span className="tw-font-bold">
              {commerce("pricing.functions.recommendation.title.0")}
            </span>
            {commerce("pricing.functions.recommendation.title.1")}
          </div>
          <div className="tw-col-span-6 tw-w-full tw-h-full tw-p-3 tw-border tw-border-l-0 tw-border-ic-ink-3 tw-text-center">
            {commerce("pricing.functions.recommendation.commonValue")}
          </div>
        </div>
        <div className="tw-grid tw-grid-cols-10 tw-h-auto tw-items-center tw-sticky tw-top-[165px] tw-bg-white tw-text-base">
          <div className="tw-col-span-4 tw-h-full tw-p-3 tw-border tw-border-ic-ink-3 tw-rounded-bl-xl">
            {commerce("pricing.functions.forecast.title")}
          </div>
          <div className="tw-col-span-6 tw-w-full tw-h-full tw-p-3 tw-border tw-border-l-0 tw-border-ic-ink-3 tw-rounded-br-xl tw-text-center">
            {commerce("pricing.functions.recommendation.commonValue")}
          </div>
        </div>
      </div>
    </div>
  );
};
export default TableDesktop;
