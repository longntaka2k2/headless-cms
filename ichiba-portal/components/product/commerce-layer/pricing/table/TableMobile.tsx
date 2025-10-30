"use client";
import { useState } from "react";
import Image from "next/image";
import clsx from "clsx";
import { useTranslation } from "next-i18next";
import Link from "next/link";

const TableMobile = () => {
  const { t: commerce } = useTranslation("commerce-layer");

  const listItem = [
    {
      title: commerce("pricing.subHeader.0.title"),
      oldPrice: commerce("pricing.subHeader.0.oldPrice"),
      if: commerce("pricing.subHeader.0.if"),
      value: commerce("pricing.subHeader.0.value"),
      contactUs: commerce("pricing.subHeader.0.contactUs"),
      suitable: commerce("pricing.subHeader.0.suitable"),
      itemContent: {
        title: commerce("pricing.subHeader.0.itemContent.title"),
        userPermissions: {
          value: commerce(
            "pricing.subHeader.0.itemContent.userPermissions.value",
          ),
        },
        markets: {
          value: commerce("pricing.subHeader.0.itemContent.markets.value"),
        },
        maximuminStores: {
          value: commerce(
            "pricing.subHeader.0.itemContent.maximuminStores.value",
          ),
        },
        numberFanpages: {
          value: commerce(
            "pricing.subHeader.0.itemContent.numberFanpages.value",
          ),
        },
        pos: {
          value: commerce("pricing.subHeader.0.itemContent.pos.value"),
          plus: commerce("pricing.subHeader.0.itemContent.pos.plus"),
        },
        listProducts: {
          value: commerce("pricing.subHeader.0.itemContent.listProducts.value"),
          image: commerce("pricing.subHeader.0.itemContent.listProducts.image"),
        },
        sellingWebsite: {
          value: commerce(
            "pricing.subHeader.0.itemContent.sellingWebsite.value",
          ),
          image: commerce(
            "pricing.subHeader.0.itemContent.sellingWebsite.image",
          ),
        },
        inventoryLocation: {
          value: commerce(
            "pricing.subHeader.0.itemContent.inventoryLocation.value",
          ),
        },
        inventoryAllocation: {
          value: commerce(
            "pricing.subHeader.0.itemContent.inventoryAllocation.value",
          ),
          image: commerce(
            "pricing.subHeader.0.itemContent.inventoryAllocation.image",
          ),
        },
        network: {
          value: commerce("pricing.subHeader.0.itemContent.network.value"),
          image: commerce("pricing.subHeader.0.itemContent.network.image"),
        },
        suppliers: {
          value: commerce("pricing.subHeader.0.itemContent.suppliers.value"),
          image: commerce("pricing.subHeader.0.itemContent.suppliers.image"),
        },
        inbound: {
          value: commerce("pricing.subHeader.0.itemContent.inbound.value"),
          image: commerce("pricing.subHeader.0.itemContent.inbound.image"),
        },
        ordersMonth: {
          value: commerce("pricing.subHeader.0.itemContent.ordersMonth.value"),
        },
        return: {
          value: commerce("pricing.subHeader.0.itemContent.return.value"),
          image: commerce("pricing.subHeader.0.itemContent.return.image"),
        },
        catalog: {
          value: commerce("pricing.subHeader.0.itemContent.catalog.value"),
          image: commerce("pricing.subHeader.0.itemContent.catalog.image"),
        },
        single: {
          value: commerce("pricing.subHeader.0.itemContent.single.value"),
          image: commerce("pricing.subHeader.0.itemContent.single.image"),
        },
        product: {
          value: commerce("pricing.subHeader.0.itemContent.product.value"),
          image: commerce("pricing.subHeader.0.itemContent.product.image"),
        },
        standard: {
          value: commerce("pricing.subHeader.0.itemContent.standard.value"),
          image: commerce("pricing.subHeader.0.itemContent.standard.image"),
        },
        advanced: {
          value: commerce("pricing.subHeader.0.itemContent.advanced.value"),
          image: commerce("pricing.subHeader.0.itemContent.advanced.image"),
        },
        integration: {
          value: commerce("pricing.subHeader.0.itemContent.integration.value"),
          image: commerce("pricing.subHeader.0.itemContent.integration.image"),
        },
        pointWallet: {
          value: commerce("pricing.subHeader.0.itemContent.pointWallet.value"),
          image: commerce("pricing.subHeader.0.itemContent.pointWallet.image"),
        },
        discount: {
          value: commerce("pricing.subHeader.0.itemContent.discount.value"),
          image: commerce("pricing.subHeader.0.itemContent.discount.image"),
        },
        voucher: {
          value: commerce("pricing.subHeader.0.itemContent.voucher.value"),
          image: commerce("pricing.subHeader.0.itemContent.voucher.image"),
        },
        cashback: {
          value: commerce("pricing.subHeader.0.itemContent.cashback.value"),
          image: commerce("pricing.subHeader.0.itemContent.cashback.image"),
        },
        support: {
          value: commerce("pricing.subHeader.0.itemContent.support.value"),
          image: commerce("pricing.subHeader.0.itemContent.support.image"),
        },
      },
    },
    {
      title: commerce("pricing.subHeader.1.title"),
      oldPrice: commerce("pricing.subHeader.1.oldPrice"),
      if: commerce("pricing.subHeader.1.if"),
      value: commerce("pricing.subHeader.1.value"),
      contactUs: commerce("pricing.subHeader.1.contactUs"),
      suitable: commerce("pricing.subHeader.1.suitable"),
      itemContent: {
        title: commerce("pricing.subHeader.1.itemContent.title"),
        userPermissions: {
          value: commerce(
            "pricing.subHeader.1.itemContent.userPermissions.value",
          ),
        },
        markets: {
          value: commerce("pricing.subHeader.1.itemContent.markets.value"),
        },
        maximuminStores: {
          value: commerce(
            "pricing.subHeader.1.itemContent.maximuminStores.value",
          ),
        },
        numberFanpages: {
          value: commerce(
            "pricing.subHeader.1.itemContent.numberFanpages.value",
          ),
        },
        pos: {
          value: commerce("pricing.subHeader.1.itemContent.pos.value"),
          plus: commerce("pricing.subHeader.1.itemContent.pos.plus"),
        },
        listProducts: {
          value: commerce("pricing.subHeader.1.itemContent.listProducts.value"),
          image: commerce("pricing.subHeader.1.itemContent.listProducts.image"),
        },
        sellingWebsite: {
          value: commerce(
            "pricing.subHeader.1.itemContent.sellingWebsite.value",
          ),
          image: commerce(
            "pricing.subHeader.1.itemContent.sellingWebsite.image",
          ),
        },
        inventoryLocation: {
          value: commerce(
            "pricing.subHeader.1.itemContent.inventoryLocation.value",
          ),
        },
        inventoryAllocation: {
          value: commerce(
            "pricing.subHeader.1.itemContent.inventoryAllocation.value",
          ),
          image: commerce(
            "pricing.subHeader.1.itemContent.inventoryAllocation.image",
          ),
        },
        network: {
          value: commerce("pricing.subHeader.1.itemContent.network.value"),
          image: commerce("pricing.subHeader.1.itemContent.network.image"),
        },
        suppliers: {
          value: commerce("pricing.subHeader.1.itemContent.suppliers.value"),
          image: commerce("pricing.subHeader.1.itemContent.suppliers.image"),
        },
        inbound: {
          value: commerce("pricing.subHeader.1.itemContent.inbound.value"),
          image: commerce("pricing.subHeader.1.itemContent.inbound.image"),
        },
        ordersMonth: {
          value: commerce("pricing.subHeader.1.itemContent.ordersMonth.value"),
        },
        return: {
          value: commerce("pricing.subHeader.1.itemContent.return.value"),
          image: commerce("pricing.subHeader.1.itemContent.return.image"),
        },
        catalog: {
          value: commerce("pricing.subHeader.1.itemContent.catalog.value"),
          image: commerce("pricing.subHeader.1.itemContent.catalog.image"),
        },
        single: {
          value: commerce("pricing.subHeader.1.itemContent.single.value"),
          image: commerce("pricing.subHeader.1.itemContent.single.image"),
        },
        product: {
          value: commerce("pricing.subHeader.1.itemContent.product.value"),
          image: commerce("pricing.subHeader.1.itemContent.product.image"),
        },
        standard: {
          value: commerce("pricing.subHeader.1.itemContent.standard.value"),
          image: commerce("pricing.subHeader.1.itemContent.standard.image"),
        },
        advanced: {
          value: commerce("pricing.subHeader.1.itemContent.advanced.value"),
          image: commerce("pricing.subHeader.1.itemContent.advanced.image"),
        },
        integration: {
          value: commerce("pricing.subHeader.1.itemContent.integration.value"),
          image: commerce("pricing.subHeader.1.itemContent.integration.image"),
        },
        pointWallet: {
          value: commerce("pricing.subHeader.1.itemContent.pointWallet.value"),
          image: commerce("pricing.subHeader.1.itemContent.pointWallet.image"),
        },
        discount: {
          value: commerce("pricing.subHeader.1.itemContent.discount.value"),
          image: commerce("pricing.subHeader.1.itemContent.discount.image"),
        },
        voucher: {
          value: commerce("pricing.subHeader.1.itemContent.voucher.value"),
          image: commerce("pricing.subHeader.1.itemContent.voucher.image"),
        },
        cashback: {
          value: commerce("pricing.subHeader.1.itemContent.cashback.value"),
          image: commerce("pricing.subHeader.1.itemContent.cashback.image"),
        },
        support: {
          value: commerce("pricing.subHeader.1.itemContent.support.value"),
          image: commerce("pricing.subHeader.1.itemContent.support.image"),
        },
      },
    },
    {
      title: commerce("pricing.subHeader.2.title"),
      oldPrice: commerce("pricing.subHeader.2.oldPrice"),
      if: commerce("pricing.subHeader.2.if"),
      value: commerce("pricing.subHeader.2.value"),
      contactUs: commerce("pricing.subHeader.2.contactUs"),
      suitable: commerce("pricing.subHeader.2.suitable"),
      itemContent: {
        title: commerce("pricing.subHeader.2.itemContent.title"),
        userPermissions: {
          value: commerce(
            "pricing.subHeader.2.itemContent.userPermissions.value",
          ),
        },
        markets: {
          value: commerce("pricing.subHeader.2.itemContent.markets.value"),
        },
        maximuminStores: {
          value: commerce(
            "pricing.subHeader.2.itemContent.maximuminStores.value",
          ),
        },
        numberFanpages: {
          value: commerce(
            "pricing.subHeader.2.itemContent.numberFanpages.value",
          ),
        },
        pos: {
          value: commerce("pricing.subHeader.2.itemContent.pos.value"),
          plus: commerce("pricing.subHeader.2.itemContent.pos.plus"),
        },
        listProducts: {
          value: commerce("pricing.subHeader.2.itemContent.listProducts.value"),
          image: commerce("pricing.subHeader.2.itemContent.listProducts.image"),
        },
        sellingWebsite: {
          value: commerce(
            "pricing.subHeader.2.itemContent.sellingWebsite.value",
          ),
          image: commerce(
            "pricing.subHeader.2.itemContent.sellingWebsite.image",
          ),
        },
        inventoryLocation: {
          value: commerce(
            "pricing.subHeader.2.itemContent.inventoryLocation.value",
          ),
        },
        inventoryAllocation: {
          value: commerce(
            "pricing.subHeader.2.itemContent.inventoryAllocation.value",
          ),
          image: commerce(
            "pricing.subHeader.2.itemContent.inventoryAllocation.image",
          ),
        },
        network: {
          value: commerce("pricing.subHeader.2.itemContent.network.value"),
          image: commerce("pricing.subHeader.2.itemContent.network.image"),
        },
        suppliers: {
          value: commerce("pricing.subHeader.2.itemContent.suppliers.value"),
          image: commerce("pricing.subHeader.2.itemContent.suppliers.image"),
        },
        inbound: {
          value: commerce("pricing.subHeader.2.itemContent.inbound.value"),
          image: commerce("pricing.subHeader.2.itemContent.inbound.image"),
        },
        ordersMonth: {
          value: commerce("pricing.subHeader.2.itemContent.ordersMonth.value"),
        },
        return: {
          value: commerce("pricing.subHeader.2.itemContent.return.value"),
          image: commerce("pricing.subHeader.2.itemContent.return.image"),
        },
        catalog: {
          value: commerce("pricing.subHeader.2.itemContent.catalog.value"),
          image: commerce("pricing.subHeader.2.itemContent.catalog.image"),
        },
        single: {
          value: commerce("pricing.subHeader.2.itemContent.single.value"),
          image: commerce("pricing.subHeader.2.itemContent.single.image"),
        },
        product: {
          value: commerce("pricing.subHeader.2.itemContent.product.value"),
          image: commerce("pricing.subHeader.2.itemContent.product.image"),
        },
        standard: {
          value: commerce("pricing.subHeader.2.itemContent.standard.value"),
          image: commerce("pricing.subHeader.2.itemContent.standard.image"),
        },
        advanced: {
          value: commerce("pricing.subHeader.2.itemContent.advanced.value"),
          image: commerce("pricing.subHeader.2.itemContent.advanced.image"),
        },
        integration: {
          value: commerce("pricing.subHeader.2.itemContent.integration.value"),
          image: commerce("pricing.subHeader.2.itemContent.integration.image"),
        },
        pointWallet: {
          value: commerce("pricing.subHeader.2.itemContent.pointWallet.value"),
          image: commerce("pricing.subHeader.2.itemContent.pointWallet.image"),
        },
        discount: {
          value: commerce("pricing.subHeader.2.itemContent.discount.value"),
          image: commerce("pricing.subHeader.2.itemContent.discount.image"),
        },
        voucher: {
          value: commerce("pricing.subHeader.2.itemContent.voucher.value"),
          image: commerce("pricing.subHeader.2.itemContent.voucher.image"),
        },
        cashback: {
          value: commerce("pricing.subHeader.2.itemContent.cashback.value"),
          image: commerce("pricing.subHeader.2.itemContent.cashback.image"),
        },
        support: {
          value: commerce("pricing.subHeader.2.itemContent.support.value"),
          image: commerce("pricing.subHeader.2.itemContent.support.image"),
        },
      },
    },
  ];

  const [item, setItemActive] = useState(listItem[0]);
  return (
    <>
      <div className="tw-grid tw-grid-cols-2 tw-gap-3 tw-mt-6 tw-py-4 tw-sticky tw-top-[50px] md:tw-top-[70px] tw-bg-white tw-px-4 lg:tw-px-0 ">
        {listItem.map((value: any, index: number) => (
          <div
            onClick={() => setItemActive(value)}
            key={index}
            className={clsx(
              "tw-min-h-[75px]",
              index === 0
                ? "tw-bg-green-1 tw-border-green-2"
                : "tw-bg-blue-1 tw-border-blue-2",
              value?.title === item?.title
                ? clsx(
                    index === 0
                      ? "tw-bg-green-2 tw-border-green-3"
                      : "tw-bg-blue-2 tw-border-blue-3",
                    "tw-relative tw-border tw-border-transparent tw-bg-clip-padding tw-rounded-lg tw-px-2 tw-py-3",
                    "after:tw-absolute after:tw-bg-orange-1 after:tw-z-[-1] after:tw-rounded-lg ",
                    "after:tw-top-[-2px] after:tw-bottom-[-2px] after:tw-left-[-2px] after:tw-right-[-2px]",
                  )
                : "tw-border tw-border-[#D6E4FF] tw-rounded-lg tw-px-2 tw-py-3",
            )}
          >
            <div className="tw-flex tw-justify-between tw-items-center">
              <div
                className={clsx(
                  index === 0 ? "tw-text-green-6" : "tw-text-blue-6",
                  "tw-text-sm tw-font-bold",
                )}
              >
                {value?.title}
              </div>
              <p className="tw-mt-1 tw-text-base tw-line-through tw-mb-0">
                {value?.oldPrice}
              </p>
            </div>
            <h3
              className={clsx(
                "tw-font-bold tw-mt-1 tw-text-base tw-mb-0 tw-ml-1",
                index === 0 ? "tw-text-green-6" : "tw-text-blue-6",
              )}
            >
              {value?.value}
            </h3>
          </div>
        ))}
      </div>
      <div className="tw-mt-5 tw-rounded-lg tw-shadow-[0px_0px_20px_0px_rgba(0,_0,_0,_0.11)] tw-p-3 tw-mx-4 lg:tw-mx-0 ">
        <div className="tw-flex tw-justify-between tw-items-center">
          <span className="tw-text-base tw-font-bold tw-text-[#00194F]">
            {item?.itemContent?.title}
          </span>
          {item.contactUs != "" && (
            <div className="tw-my-3">
              <Link
                className="tw-py-2 tw-px-5 tw-font-medium tw-text-sm tw-rounded-lg tw-bg-brand-primary tw-text-white tw-no-underline"
                href="/contact-sales"
                target="_blank"
              >
                {item.contactUs}
              </Link>
            </div>
          )}
        </div>
        <div className="tw-flex tw-items-center">
          {item?.if != "" && (
            <p className="tw-mt-1 tw-text-sm tw-mb-0 tw-mr-3">{item?.if}</p>
          )}
          <p className="tw-mt-1 tw-text-base tw-font-bold tw-text-brand-secondary tw-mb-0">
            {item?.value}
          </p>
        </div>
        <p className="tw-mb-4 tw-text-sm">{item?.suitable}</p>

        <div className="tw-font-medium tw-text-brand-secondary">
          {commerce("pricing.titleLeft.userManagement")}
        </div>
        <div className="tw-py-2 tw-grid tw-grid-cols-2 tw-text-sm tw-border-b-2 tw-items-center">
          <p className="tw-font-medium tw-mb-0">
            {commerce("pricing.functions.userPermissions.title")}
          </p>
          <div className="tw-text-center">
            {item?.itemContent?.userPermissions?.value}
          </div>
        </div>

        <div className="tw-font-medium tw-text-brand-secondary tw-mt-4">
          {commerce("pricing.titleLeft.iChiba")}
        </div>
        <div className="tw-py-2 tw-grid tw-grid-cols-2 tw-text-sm tw-border-b-2 tw-items-center">
          <p className="tw-font-medium tw-mb-0">
            {commerce("pricing.functions.markets.title")}
          </p>
          <div className="tw-text-center">
            {item?.itemContent?.markets?.value}
          </div>
        </div>

        <div className="tw-font-medium tw-text-brand-secondary tw-mt-4">
          {commerce("pricing.titleLeft.salesChannel")}
        </div>
        <div className="tw-py-2 tw-grid tw-grid-cols-2 tw-text-sm tw-border-b-2 tw-items-center">
          <p className="tw-font-medium tw-mb-0">
            {commerce("pricing.functions.maximuminStores.title")}
          </p>
          <div className="tw-text-center">
            {item?.itemContent?.maximuminStores?.value}
          </div>
        </div>
        <div className="tw-py-2 tw-grid tw-grid-cols-2 tw-text-sm tw-border-b-2 tw-items-center">
          <p className="tw-font-medium tw-mb-0">
            {commerce("pricing.functions.numberFanpages.title")}
          </p>
          <div className="tw-text-center">
            {item?.itemContent?.numberFanpages?.value}
          </div>
        </div>
        <div className="tw-py-2 tw-grid tw-grid-cols-2 tw-text-sm tw-border-b-2 tw-items-center">
          <p className="tw-font-medium tw-mb-0">
            {commerce("pricing.functions.pos.title")}
          </p>
          <div className="tw-text-center">
            <p className="tw-mb-0">{item?.itemContent?.pos?.value}</p>
            {item?.itemContent?.pos?.plus != "" && (
              <p className="tw-mb-0">{item?.itemContent?.pos?.plus}</p>
            )}
          </div>
        </div>
        <div className="tw-py-2 tw-grid tw-grid-cols-2 tw-text-sm tw-border-b-2 tw-items-center">
          <p className="tw-font-medium tw-mb-0">
            {commerce("pricing.functions.listProducts.title")}
          </p>
          <div>
            <Image
              src={item?.itemContent?.listProducts?.image}
              width={24}
              height={24}
              alt=""
              className={clsx(
                (item?.itemContent?.listProducts?.value as string) != ""
                  ? "tw-w-2 tw-h-[2px]"
                  : "tw-w-6 tw-h-6",
                "tw-mx-auto",
              )}
            />
          </div>
        </div>
        <div className="tw-py-2 tw-grid tw-grid-cols-2 tw-text-sm tw-border-b-2 tw-items-center">
          <p className="tw-font-medium tw-mb-0">
            {commerce("pricing.functions.sellingWebsite.title")}
          </p>
          <div>
            <Image
              src={item?.itemContent?.sellingWebsite?.image}
              width={24}
              height={24}
              alt=""
              className={clsx(
                (item?.itemContent?.sellingWebsite?.value as string) != ""
                  ? "tw-w-2 tw-h-[2px]"
                  : "tw-w-6 tw-h-6",
                "tw-mx-auto",
              )}
            />
          </div>
        </div>

        <div className="tw-font-medium tw-text-brand-secondary tw-mt-4">
          {commerce("pricing.titleLeft.inventory")}
        </div>
        <div className="tw-py-2 tw-grid tw-grid-cols-2 tw-text-sm tw-border-b-2 tw-items-center">
          <p className="tw-font-medium tw-mb-0">
            {commerce("pricing.functions.inventoryLocation.title")}
          </p>
          <div className="tw-text-center">
            {item?.itemContent?.inventoryLocation?.value}
          </div>
        </div>
        <div className="tw-py-2 tw-grid tw-grid-cols-2 tw-text-sm tw-border-b-2 tw-items-center">
          <p className="tw-font-medium tw-mb-0">
            {commerce("pricing.functions.inventoryAllocation.title")}
          </p>
          <div>
            <Image
              src={item?.itemContent?.inventoryAllocation?.image}
              width={24}
              height={24}
              alt=""
              className={clsx(
                (item?.itemContent?.inventoryAllocation?.value as string) != ""
                  ? "tw-w-2 tw-h-[2px]"
                  : "tw-w-6 tw-h-6",
                "tw-mx-auto",
              )}
            />
          </div>
        </div>
        <div className="tw-py-2 tw-grid tw-grid-cols-2 tw-text-sm tw-border-b-2 tw-items-center">
          <p className="tw-font-medium tw-mb-0">
            {commerce("pricing.functions.network.title")}
          </p>
          <div>
            <Image
              src={item?.itemContent?.network?.image}
              width={24}
              height={24}
              alt=""
              className={clsx(
                (item?.itemContent?.network?.value as string) != ""
                  ? "tw-w-2 tw-h-[2px]"
                  : "tw-w-6 tw-h-6",
                "tw-mx-auto",
              )}
            />
          </div>
        </div>
        <div className="tw-py-2 tw-grid tw-grid-cols-2 tw-text-sm tw-border-b-2 tw-items-center">
          <p className="tw-font-medium tw-mb-0">
            {commerce("pricing.functions.suppliers.title")}
          </p>
          <div>
            <Image
              src={item?.itemContent?.suppliers?.image}
              width={24}
              height={24}
              alt=""
              className={clsx(
                (item?.itemContent?.suppliers?.value as string) != ""
                  ? "tw-w-2 tw-h-[2px]"
                  : "tw-w-6 tw-h-6",
                "tw-mx-auto",
              )}
            />
          </div>
        </div>
        <div className="tw-py-2 tw-grid tw-grid-cols-2 tw-text-sm tw-border-b-2 tw-items-center">
          <p className="tw-font-medium tw-mb-0">
            {commerce("pricing.functions.inbound.title")}
          </p>
          <div>
            <Image
              src={item?.itemContent?.inbound?.image}
              width={24}
              height={24}
              alt=""
              className={clsx(
                (item?.itemContent?.inbound?.value as string) != ""
                  ? "tw-w-2 tw-h-[2px]"
                  : "tw-w-6 tw-h-6",
                "tw-mx-auto",
              )}
            />
          </div>
        </div>

        <div className="tw-font-medium tw-text-brand-secondary tw-mt-4">
          {commerce("pricing.titleLeft.orderManagement")}
        </div>
        <div className="tw-py-2 tw-grid tw-grid-cols-2 tw-text-sm tw-border-b-2 tw-items-center">
          <p className="tw-font-medium tw-mb-0">
            {commerce("pricing.functions.ordersMonth.title")}
          </p>
          <div className="tw-text-center">
            {item?.itemContent?.ordersMonth?.value}
          </div>
        </div>
        <div className="tw-py-2 tw-grid tw-grid-cols-2 tw-text-sm tw-border-b-2 tw-items-center">
          <p className="tw-font-medium tw-mb-0">
            {commerce("pricing.functions.return.title")}
          </p>
          <div>
            <Image
              src={item?.itemContent?.return?.image}
              width={24}
              height={24}
              alt=""
              className={clsx(
                (item?.itemContent?.return?.value as string) != ""
                  ? "tw-w-2 tw-h-[2px]"
                  : "tw-w-6 tw-h-6",
                "tw-mx-auto",
              )}
            />
          </div>
        </div>

        <div className="tw-font-medium tw-text-brand-secondary tw-mt-4">
          {commerce("pricing.titleLeft.productManagement")}
        </div>
        <div className="tw-py-2 tw-grid tw-grid-cols-2 tw-text-sm tw-border-b-2 tw-items-center">
          <p className="tw-font-medium tw-mb-0">
            {commerce("pricing.functions.catalog.title")}
          </p>
          <div>
            <Image
              src={item?.itemContent?.catalog?.image}
              width={24}
              height={24}
              alt=""
              className={clsx(
                (item?.itemContent?.catalog?.value as string) != ""
                  ? "tw-w-2 tw-h-[2px]"
                  : "tw-w-6 tw-h-6",
                "tw-mx-auto",
              )}
            />
          </div>
        </div>
        <div className="tw-py-2 tw-grid tw-grid-cols-2 tw-text-sm tw-border-b-2 tw-items-center">
          <p className="tw-font-medium tw-mb-0">
            {commerce("pricing.functions.single.title")}
          </p>
          <div>
            <Image
              src={item?.itemContent?.single?.image}
              width={24}
              height={24}
              alt=""
              className={clsx(
                (item?.itemContent?.single?.value as string) != ""
                  ? "tw-w-2 tw-h-[2px]"
                  : "tw-w-6 tw-h-6",
                "tw-mx-auto",
              )}
            />
          </div>
        </div>
        <div className="tw-py-2 tw-grid tw-grid-cols-2 tw-text-sm tw-border-b-2 tw-items-center">
          <p className="tw-font-medium tw-mb-0">
            {commerce("pricing.functions.product.title")}
          </p>
          <div>
            <Image
              src={item?.itemContent?.product?.image}
              width={24}
              height={24}
              alt=""
              className={clsx(
                (item?.itemContent?.product?.value as string) != ""
                  ? "tw-w-2 tw-h-[2px]"
                  : "tw-w-6 tw-h-6",
                "tw-mx-auto",
              )}
            />
          </div>
        </div>

        <div className="tw-font-medium tw-text-brand-secondary tw-mt-4">
          {commerce("pricing.titleLeft.reports")}
        </div>
        <div className="tw-py-2 tw-grid tw-grid-cols-2 tw-text-sm tw-border-b-2 tw-items-center">
          <p className="tw-font-medium tw-mb-0">
            {commerce("pricing.functions.standard.title")}
          </p>
          <div>
            <Image
              src={item?.itemContent?.standard?.image}
              width={24}
              height={24}
              alt=""
              className={clsx(
                (item?.itemContent?.standard?.value as string) != ""
                  ? "tw-w-2 tw-h-[2px]"
                  : "tw-w-6 tw-h-6",
                "tw-mx-auto",
              )}
            />
          </div>
        </div>
        <div className="tw-py-2 tw-grid tw-grid-cols-2 tw-text-sm tw-border-b-2 tw-items-center">
          <p className="tw-font-medium tw-mb-0">
            {commerce("pricing.functions.advanced.title")}
          </p>
          <div>
            <Image
              src={item?.itemContent?.advanced?.image}
              width={24}
              height={24}
              alt=""
              className={clsx(
                (item?.itemContent?.advanced?.value as string) != ""
                  ? "tw-w-2 tw-h-[2px]"
                  : "tw-w-6 tw-h-6",
                "tw-mx-auto",
              )}
            />
          </div>
        </div>

        <div className="tw-font-medium tw-text-brand-secondary tw-mt-4">
          {commerce("pricing.titleLeft.otherSystem")}
        </div>
        <div className="tw-py-2 tw-grid tw-grid-cols-2 tw-text-sm tw-border-b-2 tw-items-center">
          <p className="tw-font-medium tw-mb-0">
            {commerce("pricing.functions.integration.title")}
          </p>
          <div>
            <Image
              src={item?.itemContent?.integration?.image}
              width={24}
              height={24}
              alt=""
              className={clsx(
                (item?.itemContent?.integration?.value as string) != ""
                  ? "tw-w-2 tw-h-[2px]"
                  : "tw-w-6 tw-h-6",
                "tw-mx-auto",
              )}
            />
          </div>
        </div>

        <div className="tw-font-medium tw-text-brand-secondary tw-mt-4">
          {commerce("pricing.titleLeft.loyalty")}
        </div>
        <div className="tw-py-2 tw-grid tw-grid-cols-2 tw-text-sm tw-border-b-2 tw-items-center">
          <p className="tw-font-medium tw-mb-0">
            {commerce("pricing.functions.pointWallet.title")}
          </p>
          <div>
            <Image
              src={item?.itemContent?.pointWallet?.image}
              width={24}
              height={24}
              alt=""
              className={clsx(
                (item?.itemContent?.pointWallet?.value as string) != ""
                  ? "tw-w-2 tw-h-[2px]"
                  : "tw-w-6 tw-h-6",
                "tw-mx-auto",
              )}
            />
          </div>
        </div>
        <div className="tw-py-2 tw-grid tw-grid-cols-2 tw-text-sm tw-border-b-2 tw-items-center">
          <p className="tw-font-medium tw-mb-0">
            {commerce("pricing.functions.discount.title")}
          </p>
          <div>
            <Image
              src={item?.itemContent?.discount?.image}
              width={24}
              height={24}
              alt=""
              className={clsx(
                (item?.itemContent?.discount?.value as string) != ""
                  ? "tw-w-2 tw-h-[2px]"
                  : "tw-w-6 tw-h-6",
                "tw-mx-auto",
              )}
            />
          </div>
        </div>
        <div className="tw-py-2 tw-grid tw-grid-cols-2 tw-text-sm tw-border-b-2 tw-items-center">
          <p className="tw-font-medium tw-mb-0">
            {commerce("pricing.functions.voucher.title")}
          </p>
          <div>
            <Image
              src={item?.itemContent?.voucher?.image}
              width={24}
              height={24}
              alt=""
              className={clsx(
                (item?.itemContent?.voucher?.value as string) != ""
                  ? "tw-w-2 tw-h-[2px]"
                  : "tw-w-6 tw-h-6",
                "tw-mx-auto",
              )}
            />
          </div>
        </div>
        <div className="tw-py-2 tw-grid tw-grid-cols-2 tw-text-sm tw-border-b-2 tw-items-center">
          <p className="tw-font-medium tw-mb-0">
            {commerce("pricing.functions.cashback.title")}
          </p>
          <div>
            <Image
              src={item?.itemContent?.cashback?.image}
              width={24}
              height={24}
              alt=""
              className={clsx(
                (item?.itemContent?.cashback?.value as string) != ""
                  ? "tw-w-2 tw-h-[2px]"
                  : "tw-w-6 tw-h-6",
                "tw-mx-auto",
              )}
            />
          </div>
        </div>

        <div className="tw-font-medium tw-text-brand-secondary tw-mt-4">
          {commerce("pricing.titleLeft.support")}
        </div>
        <div className="tw-py-2 tw-grid tw-grid-cols-2 tw-text-sm tw-border-b-2 tw-items-center">
          <p className="tw-font-medium tw-mb-0">
            {commerce("pricing.functions.pointWallet.title")}
          </p>
          <div>
            {item?.itemContent?.support?.value != "" && (
              <p className="tw-text-center">
                {item?.itemContent?.support?.value}
              </p>
            )}

            {item?.itemContent?.support?.image != "" && (
              <Image
                src={item?.itemContent?.support?.image}
                width={8}
                height={2}
                alt=""
                className="tw-mx-auto"
              />
            )}
          </div>
        </div>

        <div className="tw-font-medium tw-text-brand-secondary tw-mt-4">
          {commerce("pricing.titleLeft.support")}
        </div>
        <div className="tw-py-2 tw-grid tw-grid-cols-2 tw-text-sm tw-border-b-2 tw-items-center">
          <p className="tw-font-medium tw-mb-0">
            <span className="tw-font-bold">
              {commerce("pricing.functions.recommendation.title.0")}
            </span>
            {commerce("pricing.functions.recommendation.title.1")}
          </p>
          <p className="tw-text-center">
            {commerce("pricing.functions.recommendation.commonValue")}
          </p>
        </div>
        <div className="tw-py-2 tw-grid tw-grid-cols-2 tw-text-sm tw-border-b-2 tw-items-center">
          <p className="tw-font-medium tw-mb-0">
            {commerce("pricing.functions.forecast.title")}
          </p>
          <p className="tw-text-center">
            {commerce("pricing.functions.forecast.commonValue")}
          </p>
        </div>
      </div>
    </>
  );
};
export default TableMobile;
