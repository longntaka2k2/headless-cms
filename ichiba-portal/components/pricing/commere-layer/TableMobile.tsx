"use client";
import { useState } from "react";
import Image from "next/image";
import clsx from "clsx";
import { useTranslation } from "next-i18next";
import Link from "next/link";

const TableMobile = () => {
  const { t } = useTranslation("pricing");

  const listItem = [
    {
      title: t("listTablePrice.0.subHeader.0.title"),
      value: "$0/month",
      itemContent: {
        title: t("listTablePrice.0.subHeader.0.itemContent.title"),
        priceMonth: {
          value: t("listTablePrice.0.subHeader.0.itemContent.priceMonth.value"),
          image: t("listTablePrice.0.subHeader.0.itemContent.priceMonth.image"),
        },
        priceYear: {
          value: t("listTablePrice.0.subHeader.0.itemContent.priceYear.value"),
          image: t("listTablePrice.0.subHeader.0.itemContent.priceYear.image"),
        },
        userManagement: {
          value: t(
            "listTablePrice.0.subHeader.0.itemContent.userManagement.value",
          ),
          image: t(
            "listTablePrice.0.subHeader.0.itemContent.userManagement.image",
          ),
        },
        markets: {
          value: t("listTablePrice.0.subHeader.0.itemContent.markets.value"),
          image: t("listTablePrice.0.subHeader.0.itemContent.markets.image"),
        },
        inventoryLocation: {
          value: t(
            "listTablePrice.0.subHeader.0.itemContent.inventoryLocation.value",
          ),
          image: t(
            "listTablePrice.0.subHeader.0.itemContent.inventoryLocation.image",
          ),
        },
        inventoryAllocation: {
          value: t(
            "listTablePrice.0.subHeader.0.itemContent.inventoryAllocation.value",
          ),
          image: t(
            "listTablePrice.0.subHeader.0.itemContent.inventoryAllocation.image",
          ),
        },
        network: {
          value: t("listTablePrice.0.subHeader.0.itemContent.network.value"),
          image: t("listTablePrice.0.subHeader.0.itemContent.network.image"),
        },
        inventoryForecasting: {
          value: t(
            "listTablePrice.0.subHeader.0.itemContent.inventoryForecasting.value",
          ),
          image: t(
            "listTablePrice.0.subHeader.0.itemContent.inventoryForecasting.image",
          ),
        },
        suppliers: {
          value: t("listTablePrice.0.subHeader.0.itemContent.suppliers.value"),
          image: t("listTablePrice.0.subHeader.0.itemContent.suppliers.image"),
        },
        inboundProcessing: {
          value: t(
            "listTablePrice.0.subHeader.0.itemContent.inboundProcessing.value",
          ),
          image: t(
            "listTablePrice.0.subHeader.0.itemContent.inboundProcessing.image",
          ),
        },
        cost: {
          value: t("listTablePrice.0.subHeader.0.itemContent.cost.value"),
          image: t("listTablePrice.0.subHeader.0.itemContent.cost.image"),
        },
        purchasing: {
          value: t("listTablePrice.0.subHeader.0.itemContent.purchasing.value"),
          image: t("listTablePrice.0.subHeader.0.itemContent.purchasing.image"),
        },
        inboundReports: {
          value: t(
            "listTablePrice.0.subHeader.0.itemContent.inboundReports.value",
          ),
          image: t(
            "listTablePrice.0.subHeader.0.itemContent.inboundReports.image",
          ),
        },
        maximum: {
          value: t("listTablePrice.0.subHeader.0.itemContent.maximum.value"),
          image: t("listTablePrice.0.subHeader.0.itemContent.maximum.image"),
        },
        return: {
          value: t("listTablePrice.0.subHeader.0.itemContent.return.value"),
          image: t("listTablePrice.0.subHeader.0.itemContent.return.image"),
        },
        single: {
          value: t("listTablePrice.0.subHeader.0.itemContent.single.value"),
          image: t("listTablePrice.0.subHeader.0.itemContent.single.image"),
        },
        catalog: {
          value: t("listTablePrice.0.subHeader.0.itemContent.catalog.value"),
          image: t("listTablePrice.0.subHeader.0.itemContent.catalog.image"),
        },
        documentation: {
          value: t(
            "listTablePrice.0.subHeader.0.itemContent.documentation.value",
          ),
          image: t(
            "listTablePrice.0.subHeader.0.itemContent.documentation.image",
          ),
        },
        standard: {
          value: t("listTablePrice.0.subHeader.0.itemContent.standard.value"),
          image: t("listTablePrice.0.subHeader.0.itemContent.standard.image"),
        },
        advanced: {
          value: t("listTablePrice.0.subHeader.0.itemContent.advanced.value"),
          image: t("listTablePrice.0.subHeader.0.itemContent.advanced.image"),
        },
        integration: {
          value: t(
            "listTablePrice.0.subHeader.0.itemContent.integration.value",
          ),
          image: t(
            "listTablePrice.0.subHeader.0.itemContent.integration.image",
          ),
        },
        maximumStores: {
          value: t(
            "listTablePrice.0.subHeader.0.itemContent.maximumStores.value",
          ),
          image: t(
            "listTablePrice.0.subHeader.0.itemContent.maximumStores.image",
          ),
        },
        munberOfIntegrated: {
          value: t(
            "listTablePrice.0.subHeader.0.itemContent.munberOfIntegrated.value",
          ),
          image: t(
            "listTablePrice.0.subHeader.0.itemContent.munberOfIntegrated.image",
          ),
        },
        product: {
          value: t("listTablePrice.0.subHeader.0.itemContent.product.value"),
          image: t("listTablePrice.0.subHeader.0.itemContent.product.image"),
        },
        storefront: {
          value: t("listTablePrice.0.subHeader.0.itemContent.storefront.value"),
          image: t("listTablePrice.0.subHeader.0.itemContent.storefront.image"),
        },
        broadcast: {
          value: t("listTablePrice.0.subHeader.0.itemContent.broadcast.value"),
          image: t("listTablePrice.0.subHeader.0.itemContent.broadcast.image"),
        },
        campaign: {
          value: t("listTablePrice.0.subHeader.0.itemContent.campaign.value"),
          image: t("listTablePrice.0.subHeader.0.itemContent.campaign.image"),
        },
        integrationCDP: {
          value: t(
            "listTablePrice.0.subHeader.0.itemContent.integrationCDP.value",
          ),
          image: t(
            "listTablePrice.0.subHeader.0.itemContent.integrationCDP.image",
          ),
        },
        pointWallet: {
          value: t(
            "listTablePrice.0.subHeader.0.itemContent.pointWallet.value",
          ),
          image: t(
            "listTablePrice.0.subHeader.0.itemContent.pointWallet.image",
          ),
        },
        discount: {
          value: t("listTablePrice.0.subHeader.0.itemContent.discount.value"),
          image: t("listTablePrice.0.subHeader.0.itemContent.discount.image"),
        },
        voucher: {
          value: t("listTablePrice.0.subHeader.0.itemContent.voucher.value"),
          image: t("listTablePrice.0.subHeader.0.itemContent.voucher.image"),
        },
        cashback: {
          value: t("listTablePrice.0.subHeader.0.itemContent.cashback.value"),
          image: t("listTablePrice.0.subHeader.0.itemContent.cashback.image"),
        },
        customerData: {
          value: t(
            "listTablePrice.0.subHeader.0.itemContent.customerData.value",
          ),
          image: t(
            "listTablePrice.0.subHeader.0.itemContent.customerData.image",
          ),
        },
        support: {
          value: t("listTablePrice.0.subHeader.0.itemContent.support.value"),
          image: t("listTablePrice.0.subHeader.0.itemContent.support.image"),
        },
        recommendation: {
          value: t(
            "listTablePrice.0.subHeader.0.itemContent.recommendation.value",
          ),
          image: t(
            "listTablePrice.0.subHeader.0.itemContent.recommendation.image",
          ),
        },
      },
    },
    {
      title: t("listTablePrice.0.subHeader.1.title"),
      value: "$199/month",
      itemContent: {
        title: t("listTablePrice.0.subHeader.1.itemContent.title"),
        priceMonth: {
          value: t("listTablePrice.0.subHeader.1.itemContent.priceMonth.value"),
          image: t("listTablePrice.0.subHeader.1.itemContent.priceMonth.image"),
        },
        priceYear: {
          value: t("listTablePrice.0.subHeader.1.itemContent.priceYear.value"),
          image: t("listTablePrice.0.subHeader.1.itemContent.priceYear.image"),
        },
        userManagement: {
          value: t(
            "listTablePrice.0.subHeader.1.itemContent.userManagement.value",
          ),
          image: t(
            "listTablePrice.0.subHeader.1.itemContent.userManagement.image",
          ),
        },
        markets: {
          value: t("listTablePrice.0.subHeader.1.itemContent.markets.value"),
          image: t("listTablePrice.0.subHeader.1.itemContent.markets.image"),
        },
        inventoryLocation: {
          value: t(
            "listTablePrice.0.subHeader.1.itemContent.inventoryLocation.value",
          ),
          image: t(
            "listTablePrice.0.subHeader.1.itemContent.inventoryLocation.image",
          ),
        },
        inventoryAllocation: {
          value: t(
            "listTablePrice.0.subHeader.1.itemContent.inventoryAllocation.value",
          ),
          image: t(
            "listTablePrice.0.subHeader.1.itemContent.inventoryAllocation.image",
          ),
        },
        network: {
          value: t("listTablePrice.0.subHeader.1.itemContent.network.value"),
          image: t("listTablePrice.0.subHeader.1.itemContent.network.image"),
        },
        inventoryForecasting: {
          value: t(
            "listTablePrice.0.subHeader.1.itemContent.inventoryForecasting.value",
          ),
          image: t(
            "listTablePrice.0.subHeader.1.itemContent.inventoryForecasting.image",
          ),
        },
        suppliers: {
          value: t("listTablePrice.0.subHeader.1.itemContent.suppliers.value"),
          image: t("listTablePrice.0.subHeader.1.itemContent.suppliers.image"),
        },
        inboundProcessing: {
          value: t(
            "listTablePrice.0.subHeader.1.itemContent.inboundProcessing.value",
          ),
          image: t(
            "listTablePrice.0.subHeader.1.itemContent.inboundProcessing.image",
          ),
        },
        cost: {
          value: t("listTablePrice.0.subHeader.1.itemContent.cost.value"),
          image: t("listTablePrice.0.subHeader.1.itemContent.cost.image"),
        },
        purchasing: {
          value: t("listTablePrice.0.subHeader.1.itemContent.purchasing.value"),
          image: t("listTablePrice.0.subHeader.1.itemContent.purchasing.image"),
        },
        inboundReports: {
          value: t(
            "listTablePrice.0.subHeader.1.itemContent.inboundReports.value",
          ),
          image: t(
            "listTablePrice.0.subHeader.1.itemContent.inboundReports.image",
          ),
        },
        maximum: {
          value: t("listTablePrice.0.subHeader.1.itemContent.maximum.value"),
          image: t("listTablePrice.0.subHeader.1.itemContent.maximum.image"),
        },
        return: {
          value: t("listTablePrice.0.subHeader.1.itemContent.return.value"),
          image: t("listTablePrice.0.subHeader.1.itemContent.return.image"),
        },
        single: {
          value: t("listTablePrice.0.subHeader.1.itemContent.single.value"),
          image: t("listTablePrice.0.subHeader.1.itemContent.single.image"),
        },
        catalog: {
          value: t("listTablePrice.0.subHeader.1.itemContent.catalog.value"),
          image: t("listTablePrice.0.subHeader.1.itemContent.catalog.image"),
        },
        documentation: {
          value: t(
            "listTablePrice.0.subHeader.1.itemContent.documentation.value",
          ),
          image: t(
            "listTablePrice.0.subHeader.1.itemContent.documentation.image",
          ),
        },
        standard: {
          value: t("listTablePrice.0.subHeader.1.itemContent.standard.value"),
          image: t("listTablePrice.0.subHeader.1.itemContent.standard.image"),
        },
        advanced: {
          value: t("listTablePrice.0.subHeader.1.itemContent.advanced.value"),
          image: t("listTablePrice.0.subHeader.1.itemContent.advanced.image"),
        },
        integration: {
          value: t(
            "listTablePrice.0.subHeader.1.itemContent.integration.value",
          ),
          image: t(
            "listTablePrice.0.subHeader.1.itemContent.integration.image",
          ),
        },
        maximumStores: {
          value: t(
            "listTablePrice.0.subHeader.1.itemContent.maximumStores.value",
          ),
          image: t(
            "listTablePrice.0.subHeader.1.itemContent.maximumStores.image",
          ),
        },
        munberOfIntegrated: {
          value: t(
            "listTablePrice.0.subHeader.1.itemContent.munberOfIntegrated.value",
          ),
          image: t(
            "listTablePrice.0.subHeader.1.itemContent.munberOfIntegrated.image",
          ),
        },
        product: {
          value: t("listTablePrice.0.subHeader.1.itemContent.product.value"),
          image: t("listTablePrice.0.subHeader.1.itemContent.product.image"),
        },
        storefront: {
          value: t("listTablePrice.0.subHeader.1.itemContent.storefront.value"),
          image: t("listTablePrice.0.subHeader.1.itemContent.storefront.image"),
        },
        broadcast: {
          value: t("listTablePrice.0.subHeader.1.itemContent.broadcast.value"),
          image: t("listTablePrice.0.subHeader.1.itemContent.broadcast.image"),
        },
        campaign: {
          value: t("listTablePrice.0.subHeader.1.itemContent.campaign.value"),
          image: t("listTablePrice.0.subHeader.1.itemContent.campaign.image"),
        },
        integrationCDP: {
          value: t(
            "listTablePrice.0.subHeader.1.itemContent.integrationCDP.value",
          ),
          image: t(
            "listTablePrice.0.subHeader.1.itemContent.integrationCDP.image",
          ),
        },
        pointWallet: {
          value: t(
            "listTablePrice.0.subHeader.1.itemContent.pointWallet.value",
          ),
          image: t(
            "listTablePrice.0.subHeader.1.itemContent.pointWallet.image",
          ),
        },
        discount: {
          value: t("listTablePrice.0.subHeader.1.itemContent.discount.value"),
          image: t("listTablePrice.0.subHeader.1.itemContent.discount.image"),
        },
        voucher: {
          value: t("listTablePrice.0.subHeader.1.itemContent.voucher.value"),
          image: t("listTablePrice.0.subHeader.1.itemContent.voucher.image"),
        },
        cashback: {
          value: t("listTablePrice.0.subHeader.1.itemContent.cashback.value"),
          image: t("listTablePrice.0.subHeader.1.itemContent.cashback.image"),
        },
        customerData: {
          value: t(
            "listTablePrice.0.subHeader.1.itemContent.customerData.value",
          ),
          image: t(
            "listTablePrice.0.subHeader.1.itemContent.customerData.image",
          ),
        },
        support: {
          value: t("listTablePrice.0.subHeader.1.itemContent.support.value"),
          image: t("listTablePrice.0.subHeader.1.itemContent.support.image"),
        },
        recommendation: {
          value: t(
            "listTablePrice.0.subHeader.1.itemContent.recommendation.value",
          ),
          image: t(
            "listTablePrice.0.subHeader.1.itemContent.recommendation.image",
          ),
        },
      },
    },
    {
      title: t("listTablePrice.0.subHeader.2.title"),
      value: "Contact us",
      itemContent: {
        title: t("listTablePrice.0.subHeader.2.itemContent.title"),
        priceMonth: {
          value: t("listTablePrice.0.subHeader.2.itemContent.priceMonth.value"),
          image: t("listTablePrice.0.subHeader.2.itemContent.priceMonth.image"),
        },
        priceYear: {
          value: t("listTablePrice.0.subHeader.2.itemContent.priceYear.value"),
          image: t("listTablePrice.0.subHeader.2.itemContent.priceYear.image"),
        },
        userManagement: {
          value: t(
            "listTablePrice.0.subHeader.2.itemContent.userManagement.value",
          ),
          image: t(
            "listTablePrice.0.subHeader.2.itemContent.userManagement.image",
          ),
        },
        markets: {
          value: t("listTablePrice.0.subHeader.2.itemContent.markets.value"),
          image: t("listTablePrice.0.subHeader.2.itemContent.markets.image"),
        },
        inventoryLocation: {
          value: t(
            "listTablePrice.0.subHeader.2.itemContent.inventoryLocation.value",
          ),
          image: t(
            "listTablePrice.0.subHeader.2.itemContent.inventoryLocation.image",
          ),
        },
        inventoryAllocation: {
          value: t(
            "listTablePrice.0.subHeader.2.itemContent.inventoryAllocation.value",
          ),
          image: t(
            "listTablePrice.0.subHeader.2.itemContent.inventoryAllocation.image",
          ),
        },
        network: {
          value: t("listTablePrice.0.subHeader.2.itemContent.network.value"),
          image: t("listTablePrice.0.subHeader.2.itemContent.network.image"),
        },
        inventoryForecasting: {
          value: t(
            "listTablePrice.0.subHeader.2.itemContent.inventoryForecasting.value",
          ),
          image: t(
            "listTablePrice.0.subHeader.2.itemContent.inventoryForecasting.image",
          ),
        },
        suppliers: {
          value: t("listTablePrice.0.subHeader.2.itemContent.suppliers.value"),
          image: t("listTablePrice.0.subHeader.2.itemContent.suppliers.image"),
        },
        inboundProcessing: {
          value: t(
            "listTablePrice.0.subHeader.2.itemContent.inboundProcessing.value",
          ),
          image: t(
            "listTablePrice.0.subHeader.2.itemContent.inboundProcessing.image",
          ),
        },
        cost: {
          value: t("listTablePrice.0.subHeader.2.itemContent.cost.value"),
          image: t("listTablePrice.0.subHeader.2.itemContent.cost.image"),
        },
        purchasing: {
          value: t("listTablePrice.0.subHeader.2.itemContent.purchasing.value"),
          image: t("listTablePrice.0.subHeader.2.itemContent.purchasing.image"),
        },
        inboundReports: {
          value: t(
            "listTablePrice.0.subHeader.2.itemContent.inboundReports.value",
          ),
          image: t(
            "listTablePrice.0.subHeader.2.itemContent.inboundReports.image",
          ),
        },
        maximum: {
          value: t("listTablePrice.0.subHeader.2.itemContent.maximum.value"),
          image: t("listTablePrice.0.subHeader.2.itemContent.maximum.image"),
        },
        return: {
          value: t("listTablePrice.0.subHeader.2.itemContent.return.value"),
          image: t("listTablePrice.0.subHeader.2.itemContent.return.image"),
        },
        single: {
          value: t("listTablePrice.0.subHeader.2.itemContent.single.value"),
          image: t("listTablePrice.0.subHeader.2.itemContent.single.image"),
        },
        catalog: {
          value: t("listTablePrice.0.subHeader.2.itemContent.catalog.value"),
          image: t("listTablePrice.0.subHeader.2.itemContent.catalog.image"),
        },
        documentation: {
          value: t(
            "listTablePrice.0.subHeader.2.itemContent.documentation.value",
          ),
          image: t(
            "listTablePrice.0.subHeader.2.itemContent.documentation.image",
          ),
        },
        standard: {
          value: t("listTablePrice.0.subHeader.2.itemContent.standard.value"),
          image: t("listTablePrice.0.subHeader.2.itemContent.standard.image"),
        },
        advanced: {
          value: t("listTablePrice.0.subHeader.2.itemContent.advanced.value"),
          image: t("listTablePrice.0.subHeader.2.itemContent.advanced.image"),
        },
        integration: {
          value: t(
            "listTablePrice.0.subHeader.2.itemContent.integration.value",
          ),
          image: t(
            "listTablePrice.0.subHeader.2.itemContent.integration.image",
          ),
        },
        maximumStores: {
          value: t(
            "listTablePrice.0.subHeader.2.itemContent.maximumStores.value",
          ),
          image: t(
            "listTablePrice.0.subHeader.2.itemContent.maximumStores.image",
          ),
        },
        munberOfIntegrated: {
          value: t(
            "listTablePrice.0.subHeader.2.itemContent.munberOfIntegrated.value",
          ),
          image: t(
            "listTablePrice.0.subHeader.2.itemContent.munberOfIntegrated.image",
          ),
        },
        product: {
          value: t("listTablePrice.0.subHeader.2.itemContent.product.value"),
          image: t("listTablePrice.0.subHeader.2.itemContent.product.image"),
        },
        storefront: {
          value: t("listTablePrice.0.subHeader.2.itemContent.storefront.value"),
          image: t("listTablePrice.0.subHeader.2.itemContent.storefront.image"),
        },
        broadcast: {
          value: t("listTablePrice.0.subHeader.2.itemContent.broadcast.value"),
          image: t("listTablePrice.0.subHeader.2.itemContent.broadcast.image"),
        },
        campaign: {
          value: t("listTablePrice.0.subHeader.2.itemContent.campaign.value"),
          image: t("listTablePrice.0.subHeader.2.itemContent.campaign.image"),
        },
        integrationCDP: {
          value: t(
            "listTablePrice.0.subHeader.2.itemContent.integrationCDP.value",
          ),
          image: t(
            "listTablePrice.0.subHeader.2.itemContent.integrationCDP.image",
          ),
        },
        pointWallet: {
          value: t(
            "listTablePrice.0.subHeader.2.itemContent.pointWallet.value",
          ),
          image: t(
            "listTablePrice.0.subHeader.2.itemContent.pointWallet.image",
          ),
        },
        discount: {
          value: t("listTablePrice.0.subHeader.2.itemContent.discount.value"),
          image: t("listTablePrice.0.subHeader.2.itemContent.discount.image"),
        },
        voucher: {
          value: t("listTablePrice.0.subHeader.2.itemContent.voucher.value"),
          image: t("listTablePrice.0.subHeader.2.itemContent.voucher.image"),
        },
        cashback: {
          value: t("listTablePrice.0.subHeader.2.itemContent.cashback.value"),
          image: t("listTablePrice.0.subHeader.2.itemContent.cashback.image"),
        },
        customerData: {
          value: t(
            "listTablePrice.0.subHeader.2.itemContent.customerData.value",
          ),
          image: t(
            "listTablePrice.0.subHeader.2.itemContent.customerData.image",
          ),
        },
        support: {
          value: t("listTablePrice.0.subHeader.2.itemContent.support.value"),
          image: t("listTablePrice.0.subHeader.2.itemContent.support.image"),
        },
        recommendation: {
          value: t(
            "listTablePrice.0.subHeader.2.itemContent.recommendation.value",
          ),
          image: t(
            "listTablePrice.0.subHeader.2.itemContent.recommendation.image",
          ),
        },
      },
    },
  ];

  const [item, setItemActive] = useState(listItem[0]);
  return (
    <>
      <div className="tw-grid tw-grid-cols-3 tw-gap-3 tw-py-2 tw-sticky tw-top-[125px] md:tw-top-[135px] tw-bg-white tw-px-2">
        {listItem.map((value: any, index: number) => (
          <div
            onClick={() => setItemActive(value)}
            key={index}
            className={clsx(
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
            <div
              className={clsx(
                index === 0 ? "tw-text-green-6" : "tw-text-blue-6",
                "tw-text-sm tw-font-bold",
              )}
            >
              {value?.title}
            </div>
          </div>
        ))}
      </div>
      <div className="tw-mt-5 tw-rounded-lg tw-shadow-[0px_0px_20px_0px_rgba(0,_0,_0,_0.11)] tw-p-3">
        <div className="tw-flex tw-justify-between tw-items-center">
          <span className="tw-text-base tw-font-bold tw-text-[#00194F]">
            {item?.itemContent?.title}
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
            {t("listTablePrice.0.functions.priceMonth.title")}
          </p>
          <div className="tw-text-center">
            {item?.itemContent?.priceMonth?.value != "" &&
              item?.itemContent?.priceMonth?.value}
            {item?.itemContent?.priceMonth?.image != "" && (
              <Image
                src={item?.itemContent?.priceMonth?.image}
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
            {t("listTablePrice.0.functions.priceYear.title")}
          </p>
          <div className="tw-text-center">
            {item?.itemContent?.priceYear?.value != "" &&
              item?.itemContent?.priceYear?.value}
            {item?.itemContent?.priceYear?.image != "" && (
              <Image
                src={item?.itemContent?.priceYear?.image}
                width={24}
                height={24}
                alt=""
                className={clsx("tw-mx-auto")}
              />
            )}
          </div>
        </div>

        <div className="tw-font-medium tw-text-brand-secondary tw-mt-4">
          {t("listTablePrice.0.titleLeft.userManagement")}
        </div>
        <div className="tw-py-2 tw-grid tw-grid-cols-2 tw-text-sm tw-border-b-2 tw-items-center">
          <p className="tw-font-medium tw-mb-0">
            {t("listTablePrice.0.functions.userManagement.title")}
          </p>
          <div className="tw-text-center">
            {item?.itemContent?.userManagement?.value != "" &&
              item?.itemContent?.userManagement?.value}
            {item?.itemContent?.userManagement?.image != "" && (
              <Image
                src={item?.itemContent?.userManagement?.image}
                width={24}
                height={24}
                alt=""
                className={clsx("tw-mx-auto")}
              />
            )}
          </div>
        </div>

        <div className="tw-font-medium tw-text-brand-secondary tw-mt-4">
          {t("listTablePrice.0.titleLeft.iChiba")}
        </div>
        <div className="tw-py-2 tw-grid tw-grid-cols-2 tw-text-sm tw-border-b-2 tw-items-center">
          <p className="tw-font-medium tw-mb-0">
            {t("listTablePrice.0.functions.markets.title")}
          </p>
          <div className="tw-text-center">
            {item?.itemContent?.markets?.value != "" &&
              item?.itemContent?.markets?.value}
            {item?.itemContent?.markets?.image != "" && (
              <Image
                src={item?.itemContent?.markets?.image}
                width={24}
                height={24}
                alt=""
                className={clsx("tw-mx-auto")}
              />
            )}
          </div>
        </div>

        <div className="tw-font-medium tw-text-brand-secondary tw-mt-4">
          {t("listTablePrice.0.titleLeft.inventory")}
        </div>
        <div className="tw-py-2 tw-grid tw-grid-cols-2 tw-text-sm tw-border-b-2 tw-items-center">
          <p className="tw-font-medium tw-mb-0">
            {t("listTablePrice.0.functions.inventoryLocation.title")}
          </p>
          <div className="tw-text-center">
            {item?.itemContent?.inventoryLocation?.value != "" &&
              item?.itemContent?.inventoryLocation?.value}
            {item?.itemContent?.inventoryLocation?.image != "" && (
              <Image
                src={item?.itemContent?.inventoryLocation?.image}
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
            {t("listTablePrice.0.functions.inventoryAllocation.title")}
          </p>
          <div className="tw-text-center">
            {item?.itemContent?.inventoryAllocation?.value != "" &&
              item?.itemContent?.inventoryAllocation?.value}
            {item?.itemContent?.inventoryAllocation?.image != "" && (
              <Image
                src={item?.itemContent?.inventoryAllocation?.image}
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
            {t("listTablePrice.0.functions.network.title")}
          </p>
          <div className="tw-text-center">
            {item?.itemContent?.network?.value != "" &&
              item?.itemContent?.network?.value}
            {item?.itemContent?.network?.image != "" && (
              <Image
                src={item?.itemContent?.network?.image}
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
            {t("listTablePrice.0.functions.inventoryForecasting.title")}
          </p>
          <div className="tw-text-center">
            {item?.itemContent?.inventoryForecasting?.value != "" &&
              item?.itemContent?.inventoryForecasting?.value}
            {item?.itemContent?.inventoryForecasting?.image != "" && (
              <Image
                src={item?.itemContent?.inventoryForecasting?.image}
                width={24}
                height={24}
                alt=""
                className={clsx("tw-mx-auto")}
              />
            )}
          </div>
        </div>

        <div className="tw-font-medium tw-text-brand-secondary tw-mt-4">
          {t("listTablePrice.0.titleLeft.purchaseOrder")}
        </div>
        <div className="tw-py-2 tw-grid tw-grid-cols-2 tw-text-sm tw-border-b-2 tw-items-center">
          <p className="tw-font-medium tw-mb-0">
            {t("listTablePrice.0.functions.suppliers.title")}
          </p>
          <div className="tw-text-center">
            {item?.itemContent?.suppliers?.value != "" &&
              item?.itemContent?.suppliers?.value}
            {item?.itemContent?.suppliers?.image != "" && (
              <Image
                src={item?.itemContent?.suppliers?.image}
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
            {t("listTablePrice.0.functions.inboundProcessing.title")}
          </p>
          <div className="tw-text-center">
            {item?.itemContent?.inboundProcessing?.value != "" &&
              item?.itemContent?.inboundProcessing?.value}
            {item?.itemContent?.inboundProcessing?.image != "" && (
              <Image
                src={item?.itemContent?.inboundProcessing?.image}
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
            {t("listTablePrice.0.functions.cost.title")}
          </p>
          <div className="tw-text-center">
            {item?.itemContent?.cost?.value != "" &&
              item?.itemContent?.cost?.value}
            {item?.itemContent?.cost?.image != "" && (
              <Image
                src={item?.itemContent?.cost?.image}
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
            {t("listTablePrice.0.functions.purchasing.title")}
          </p>
          <div className="tw-text-center">
            {item?.itemContent?.purchasing?.value != "" &&
              item?.itemContent?.purchasing?.value}
            {item?.itemContent?.purchasing?.image != "" && (
              <Image
                src={item?.itemContent?.purchasing?.image}
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
            {t("listTablePrice.0.functions.inboundReports.title")}
          </p>
          <div className="tw-text-center">
            {item?.itemContent?.inboundReports?.value != "" &&
              item?.itemContent?.inboundReports?.value}
            {item?.itemContent?.inboundReports?.image != "" && (
              <Image
                src={item?.itemContent?.inboundReports?.image}
                width={24}
                height={24}
                alt=""
                className={clsx("tw-mx-auto")}
              />
            )}
          </div>
        </div>

        <div className="tw-font-medium tw-text-brand-secondary tw-mt-4">
          {t("listTablePrice.0.titleLeft.saleOrder")}
        </div>
        <div className="tw-py-2 tw-grid tw-grid-cols-2 tw-text-sm tw-border-b-2 tw-items-center">
          <p className="tw-font-medium tw-mb-0">
            {t("listTablePrice.0.functions.maximum.title")}
          </p>
          <div className="tw-text-center">
            {item?.itemContent?.maximum?.value != "" &&
              item?.itemContent?.maximum?.value}
            {item?.itemContent?.maximum?.image != "" && (
              <Image
                src={item?.itemContent?.maximum?.image}
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
            {t("listTablePrice.0.functions.return.title")}
          </p>
          <div className="tw-text-center">
            {item?.itemContent?.return?.value != "" &&
              item?.itemContent?.return?.value}
            {item?.itemContent?.return?.image != "" && (
              <Image
                src={item?.itemContent?.return?.image}
                width={24}
                height={24}
                alt=""
                className={clsx("tw-mx-auto")}
              />
            )}
          </div>
        </div>

        <div className="tw-font-medium tw-text-brand-secondary tw-mt-4">
          {t("listTablePrice.0.titleLeft.product")}
        </div>
        <div className="tw-py-2 tw-grid tw-grid-cols-2 tw-text-sm tw-border-b-2 tw-items-center">
          <p className="tw-font-medium tw-mb-0">
            {t("listTablePrice.0.functions.single.title")}
          </p>
          <div className="tw-text-center">
            {item?.itemContent?.single?.value != "" &&
              item?.itemContent?.single?.value}
            {item?.itemContent?.single?.image != "" && (
              <Image
                src={item?.itemContent?.single?.image}
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
            {t("listTablePrice.0.functions.catalog.title")}
          </p>
          <div className="tw-text-center">
            {item?.itemContent?.catalog?.value != "" &&
              item?.itemContent?.catalog?.value}
            {item?.itemContent?.catalog?.image != "" && (
              <Image
                src={item?.itemContent?.catalog?.image}
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
            {t("listTablePrice.0.functions.documentation.title")}
          </p>
          <div className="tw-text-center">
            {item?.itemContent?.documentation?.value != "" &&
              item?.itemContent?.documentation?.value}
            {item?.itemContent?.documentation?.image != "" && (
              <Image
                src={item?.itemContent?.documentation?.image}
                width={24}
                height={24}
                alt=""
                className={clsx("tw-mx-auto")}
              />
            )}
          </div>
        </div>

        <div className="tw-font-medium tw-text-brand-secondary tw-mt-4">
          {t("listTablePrice.0.titleLeft.reportAnalytics")}
        </div>
        <div className="tw-py-2 tw-grid tw-grid-cols-2 tw-text-sm tw-border-b-2 tw-items-center">
          <p className="tw-font-medium tw-mb-0">
            {t("listTablePrice.0.functions.standard.title")}
          </p>
          <div className="tw-text-center">
            {item?.itemContent?.standard?.value != "" &&
              item?.itemContent?.standard?.value}
            {item?.itemContent?.standard?.image != "" && (
              <Image
                src={item?.itemContent?.standard?.image}
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
            {t("listTablePrice.0.functions.advanced.title")}
          </p>
          <div className="tw-text-center">
            {item?.itemContent?.advanced?.value != "" &&
              item?.itemContent?.advanced?.value}
            {item?.itemContent?.advanced?.image != "" && (
              <Image
                src={item?.itemContent?.advanced?.image}
                width={24}
                height={24}
                alt=""
                className={clsx("tw-mx-auto")}
              />
            )}
          </div>
        </div>

        <div className="tw-font-medium tw-text-brand-secondary tw-mt-4">
          {t("listTablePrice.0.titleLeft.systemIntegration")}
        </div>
        <div className="tw-py-2 tw-grid tw-grid-cols-2 tw-text-sm tw-border-b-2 tw-items-center">
          <p className="tw-font-medium tw-mb-0">
            {t("listTablePrice.0.functions.integration.title")}
          </p>
          <div className="tw-text-center">
            {item?.itemContent?.integration?.value != "" &&
              item?.itemContent?.integration?.value}
            {item?.itemContent?.integration?.image != "" && (
              <Image
                src={item?.itemContent?.integration?.image}
                width={24}
                height={24}
                alt=""
                className={clsx("tw-mx-auto")}
              />
            )}
          </div>
        </div>

        <div className="tw-font-medium tw-text-brand-secondary tw-mt-4">
          {t("listTablePrice.0.titleLeft.salesChannelIntegration")}
        </div>
        <div className="tw-py-2 tw-grid tw-grid-cols-2 tw-text-sm tw-border-b-2 tw-items-center">
          <p className="tw-font-medium tw-mb-0">
            {t("listTablePrice.0.functions.maximumStores.title")}
          </p>
          <div className="tw-text-center">
            {item?.itemContent?.maximumStores?.value != "" &&
              item?.itemContent?.maximumStores?.value}
            {item?.itemContent?.maximumStores?.image != "" && (
              <Image
                src={item?.itemContent?.maximumStores?.image}
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
            {t("listTablePrice.0.functions.munberOfIntegrated.title")}
          </p>
          <div className="tw-text-center">
            {item?.itemContent?.munberOfIntegrated?.value != "" &&
              item?.itemContent?.munberOfIntegrated?.value}
            {item?.itemContent?.munberOfIntegrated?.image != "" && (
              <Image
                src={item?.itemContent?.munberOfIntegrated?.image}
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
            {t("listTablePrice.0.functions.product.title")}
          </p>
          <div className="tw-text-center">
            {item?.itemContent?.product?.value != "" &&
              item?.itemContent?.product?.value}
            {item?.itemContent?.product?.image != "" && (
              <Image
                src={item?.itemContent?.product?.image}
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
            {t("listTablePrice.0.functions.storefront.title")}
          </p>
          <div className="tw-text-center">
            {item?.itemContent?.storefront?.value != "" &&
              item?.itemContent?.storefront?.value}
            {item?.itemContent?.storefront?.image != "" && (
              <Image
                src={item?.itemContent?.storefront?.image}
                width={24}
                height={24}
                alt=""
                className={clsx("tw-mx-auto")}
              />
            )}
          </div>
        </div>

        <div className="tw-font-medium tw-text-brand-secondary tw-mt-4">
          {t("listTablePrice.0.titleLeft.marketingAutomation")}
        </div>
        <div className="tw-py-2 tw-grid tw-grid-cols-2 tw-text-sm tw-border-b-2 tw-items-center">
          <p className="tw-font-medium tw-mb-0">
            {t("listTablePrice.0.functions.broadcast.title")}
          </p>
          <div className="tw-text-center">
            {item?.itemContent?.broadcast?.value != "" &&
              item?.itemContent?.broadcast?.value}
            {item?.itemContent?.broadcast?.image != "" && (
              <Image
                src={item?.itemContent?.broadcast?.image}
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
            {t("listTablePrice.0.functions.campaign.title")}
          </p>
          <div className="tw-text-center">
            {item?.itemContent?.campaign?.value != "" &&
              item?.itemContent?.campaign?.value}
            {item?.itemContent?.campaign?.image != "" && (
              <Image
                src={item?.itemContent?.campaign?.image}
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
            {t("listTablePrice.0.functions.integrationCDP.title")}
          </p>
          <div className="tw-text-center">
            {item?.itemContent?.integrationCDP?.value != "" &&
              item?.itemContent?.integrationCDP?.value}
            {item?.itemContent?.integrationCDP?.image != "" && (
              <Image
                src={item?.itemContent?.integrationCDP?.image}
                width={24}
                height={24}
                alt=""
                className={clsx("tw-mx-auto")}
              />
            )}
          </div>
        </div>

        <div className="tw-font-medium tw-text-brand-secondary tw-mt-4">
          {t("listTablePrice.0.titleLeft.loyaltyProgram")}
        </div>
        <div className="tw-py-2 tw-grid tw-grid-cols-2 tw-text-sm tw-border-b-2 tw-items-center">
          <p className="tw-font-medium tw-mb-0">
            {t("listTablePrice.0.functions.pointWallet.title")}
          </p>
          <div className="tw-text-center">
            {item?.itemContent?.pointWallet?.value != "" &&
              item?.itemContent?.pointWallet?.value}
            {item?.itemContent?.pointWallet?.image != "" && (
              <Image
                src={item?.itemContent?.pointWallet?.image}
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
            {t("listTablePrice.0.functions.discount.title")}
          </p>
          <div className="tw-text-center">
            {item?.itemContent?.discount?.value != "" &&
              item?.itemContent?.discount?.value}
            {item?.itemContent?.discount?.image != "" && (
              <Image
                src={item?.itemContent?.discount?.image}
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
            {t("listTablePrice.0.functions.voucher.title")}
          </p>
          <div className="tw-text-center">
            {item?.itemContent?.voucher?.value != "" &&
              item?.itemContent?.voucher?.value}
            {item?.itemContent?.voucher?.image != "" && (
              <Image
                src={item?.itemContent?.voucher?.image}
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
            {t("listTablePrice.0.functions.cashback.title")}
          </p>
          <div className="tw-text-center">
            {item?.itemContent?.cashback?.value != "" &&
              item?.itemContent?.cashback?.value}
            {item?.itemContent?.cashback?.image != "" && (
              <Image
                src={item?.itemContent?.cashback?.image}
                width={24}
                height={24}
                alt=""
                className={clsx("tw-mx-auto")}
              />
            )}
          </div>
        </div>

        <div className="tw-font-medium tw-text-brand-secondary tw-mt-4">
          {t("listTablePrice.0.titleLeft.cdp")}
        </div>
        <div className="tw-py-2 tw-grid tw-grid-cols-2 tw-text-sm tw-border-b-2 tw-items-center">
          <p className="tw-font-medium tw-mb-0">
            {t("listTablePrice.0.functions.customerData.title")}
          </p>
          <div className="tw-text-center">
            {item?.itemContent?.customerData?.value != "" &&
              item?.itemContent?.customerData?.value}
            {item?.itemContent?.customerData?.image != "" && (
              <Image
                src={item?.itemContent?.customerData?.image}
                width={24}
                height={24}
                alt=""
                className={clsx("tw-mx-auto")}
              />
            )}
          </div>
        </div>

        <div className="tw-font-medium tw-text-brand-secondary tw-mt-4">
          {t("listTablePrice.0.titleLeft.support")}
        </div>
        <div className="tw-py-2 tw-grid tw-grid-cols-2 tw-text-sm tw-border-b-2 tw-items-center">
          <p className="tw-font-medium tw-mb-0">
            {t("listTablePrice.0.functions.support.title")}
          </p>
          <div className="tw-text-center">
            {item?.itemContent?.support?.value != "" &&
              item?.itemContent?.support?.value}
            {item?.itemContent?.support?.image != "" && (
              <Image
                src={item?.itemContent?.support?.image}
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
            <span className="tw-font-bold">
              {t("listTablePrice.0.functions.recommendation.title.0")}
            </span>
            {t("listTablePrice.0.functions.recommendation.title.1")}
          </p>
          <p className="tw-text-center">
            {item?.itemContent?.recommendation?.value != "" &&
              item?.itemContent?.recommendation?.value}
            {item?.itemContent?.recommendation?.image != "" && (
              <Image
                src={item?.itemContent?.recommendation?.image}
                width={24}
                height={24}
                alt=""
                className={clsx("tw-mx-auto")}
              />
            )}
          </p>
        </div>
      </div>
    </>
  );
};
export default TableMobile;
