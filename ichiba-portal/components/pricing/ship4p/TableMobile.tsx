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
      title: t("listTablePrice.2.subHeader.0.title"),
      itemContent: {
        title: t("listTablePrice.2.subHeader.0.itemContent.title"),
        recurringMonth: {
          value: t(
            "listTablePrice.2.subHeader.0.itemContent.recurringMonth.value",
          ),
          image: t(
            "listTablePrice.2.subHeader.0.itemContent.recurringMonth.image",
          ),
        },
        recurringYear: {
          value: t(
            "listTablePrice.2.subHeader.0.itemContent.recurringYear.value",
          ),
          image: t(
            "listTablePrice.2.subHeader.0.itemContent.recurringYear.image",
          ),
        },
        packageManagement: {
          value: t(
            "listTablePrice.2.subHeader.0.itemContent.packageManagement.value",
          ),
          image: t(
            "listTablePrice.2.subHeader.0.itemContent.packageManagement.image",
          ),
        },
        packageMannula: {
          value: t(
            "listTablePrice.2.subHeader.0.itemContent.packageMannula.value",
          ),
          image: t(
            "listTablePrice.2.subHeader.0.itemContent.packageMannula.image",
          ),
        },
        packageConsolidation: {
          value: t(
            "listTablePrice.2.subHeader.0.itemContent.packageConsolidation.value",
          ),
          image: t(
            "listTablePrice.2.subHeader.0.itemContent.packageConsolidation.image",
          ),
        },
        shipmentDomestic: {
          value: t(
            "listTablePrice.2.subHeader.0.itemContent.shipmentDomestic.value",
          ),
          image: t(
            "listTablePrice.2.subHeader.0.itemContent.shipmentDomestic.image",
          ),
        },
        shipmentInternational: {
          value: t(
            "listTablePrice.2.subHeader.0.itemContent.shipmentInternational.value",
          ),
          image: t(
            "listTablePrice.2.subHeader.0.itemContent.shipmentInternational.image",
          ),
        },
        carrier: {
          value: t("listTablePrice.2.subHeader.0.itemContent.carrier.value"),
          image: t("listTablePrice.2.subHeader.0.itemContent.carrier.image"),
        },
        generate: {
          value: t("listTablePrice.2.subHeader.0.itemContent.generate.value"),
          image: t("listTablePrice.2.subHeader.0.itemContent.generate.image"),
        },
        shipment: {
          value: t("listTablePrice.2.subHeader.0.itemContent.shipment.value"),
          image: t("listTablePrice.2.subHeader.0.itemContent.shipment.image"),
        },
        create: {
          value: t("listTablePrice.2.subHeader.0.itemContent.create.value"),
          image: t("listTablePrice.2.subHeader.0.itemContent.create.image"),
        },
        storefront: {
          value: t("listTablePrice.2.subHeader.0.itemContent.storefront.value"),
          image: t("listTablePrice.2.subHeader.0.itemContent.storefront.image"),
        },
        packageBased: {
          value: t(
            "listTablePrice.2.subHeader.0.itemContent.packageBased.value",
          ),
          image: t(
            "listTablePrice.2.subHeader.0.itemContent.packageBased.image",
          ),
        },
        multiRoute: {
          value: t("listTablePrice.2.subHeader.0.itemContent.multiRoute.value"),
          image: t("listTablePrice.2.subHeader.0.itemContent.multiRoute.image"),
        },
        custom: {
          value: t("listTablePrice.2.subHeader.0.itemContent.custom.value"),
          image: t("listTablePrice.2.subHeader.0.itemContent.custom.image"),
        },
        connectMerchant: {
          value: t(
            "listTablePrice.2.subHeader.0.itemContent.connectMerchant.value",
          ),
          image: t(
            "listTablePrice.2.subHeader.0.itemContent.connectMerchant.image",
          ),
        },
        connectShip4p: {
          value: t(
            "listTablePrice.2.subHeader.0.itemContent.connectShip4p.value",
          ),
          image: t(
            "listTablePrice.2.subHeader.0.itemContent.connectShip4p.image",
          ),
        },
        tax: {
          value: t("listTablePrice.2.subHeader.0.itemContent.tax.value"),
          image: t("listTablePrice.2.subHeader.0.itemContent.tax.image"),
        },
        document: {
          value: t("listTablePrice.2.subHeader.0.itemContent.document.value"),
          image: t("listTablePrice.2.subHeader.0.itemContent.document.image"),
        },
        shippingReports: {
          value: t(
            "listTablePrice.2.subHeader.0.itemContent.shippingReports.value",
          ),
          image: t(
            "listTablePrice.2.subHeader.0.itemContent.shippingReports.image",
          ),
        },
      },
    },
    {
      title: t("listTablePrice.2.subHeader.1.title"),
      itemContent: {
        title: t("listTablePrice.2.subHeader.1.itemContent.title"),
        recurringMonth: {
          value: t(
            "listTablePrice.2.subHeader.1.itemContent.recurringMonth.value",
          ),
          image: t(
            "listTablePrice.2.subHeader.1.itemContent.recurringMonth.image",
          ),
        },
        recurringYear: {
          value: t(
            "listTablePrice.2.subHeader.1.itemContent.recurringYear.value",
          ),
          image: t(
            "listTablePrice.2.subHeader.1.itemContent.recurringYear.image",
          ),
        },
        packageManagement: {
          value: t(
            "listTablePrice.2.subHeader.1.itemContent.packageManagement.value",
          ),
          image: t(
            "listTablePrice.2.subHeader.1.itemContent.packageManagement.image",
          ),
        },
        packageMannula: {
          value: t(
            "listTablePrice.2.subHeader.1.itemContent.packageMannula.value",
          ),
          image: t(
            "listTablePrice.2.subHeader.1.itemContent.packageMannula.image",
          ),
        },
        packageConsolidation: {
          value: t(
            "listTablePrice.2.subHeader.1.itemContent.packageConsolidation.value",
          ),
          image: t(
            "listTablePrice.2.subHeader.1.itemContent.packageConsolidation.image",
          ),
        },
        shipmentDomestic: {
          value: t(
            "listTablePrice.2.subHeader.1.itemContent.shipmentDomestic.value",
          ),
          image: t(
            "listTablePrice.2.subHeader.1.itemContent.shipmentDomestic.image",
          ),
        },
        shipmentInternational: {
          value: t(
            "listTablePrice.2.subHeader.1.itemContent.shipmentInternational.value",
          ),
          image: t(
            "listTablePrice.2.subHeader.1.itemContent.shipmentInternational.image",
          ),
        },
        carrier: {
          value: t("listTablePrice.2.subHeader.1.itemContent.carrier.value"),
          image: t("listTablePrice.2.subHeader.1.itemContent.carrier.image"),
        },
        generate: {
          value: t("listTablePrice.2.subHeader.1.itemContent.generate.value"),
          image: t("listTablePrice.2.subHeader.1.itemContent.generate.image"),
        },
        shipment: {
          value: t("listTablePrice.2.subHeader.1.itemContent.shipment.value"),
          image: t("listTablePrice.2.subHeader.1.itemContent.shipment.image"),
        },
        create: {
          value: t("listTablePrice.2.subHeader.1.itemContent.create.value"),
          image: t("listTablePrice.2.subHeader.1.itemContent.create.image"),
        },
        storefront: {
          value: t("listTablePrice.2.subHeader.1.itemContent.storefront.value"),
          image: t("listTablePrice.2.subHeader.1.itemContent.storefront.image"),
        },
        packageBased: {
          value: t(
            "listTablePrice.2.subHeader.1.itemContent.packageBased.value",
          ),
          image: t(
            "listTablePrice.2.subHeader.1.itemContent.packageBased.image",
          ),
        },
        multiRoute: {
          value: t("listTablePrice.2.subHeader.1.itemContent.multiRoute.value"),
          image: t("listTablePrice.2.subHeader.1.itemContent.multiRoute.image"),
        },
        custom: {
          value: t("listTablePrice.2.subHeader.1.itemContent.custom.value"),
          image: t("listTablePrice.2.subHeader.1.itemContent.custom.image"),
        },
        connectMerchant: {
          value: t(
            "listTablePrice.2.subHeader.1.itemContent.connectMerchant.value",
          ),
          image: t(
            "listTablePrice.2.subHeader.1.itemContent.connectMerchant.image",
          ),
        },
        connectShip4p: {
          value: t(
            "listTablePrice.2.subHeader.1.itemContent.connectShip4p.value",
          ),
          image: t(
            "listTablePrice.2.subHeader.1.itemContent.connectShip4p.image",
          ),
        },
        tax: {
          value: t("listTablePrice.2.subHeader.1.itemContent.tax.value"),
          image: t("listTablePrice.2.subHeader.1.itemContent.tax.image"),
        },
        document: {
          value: t("listTablePrice.2.subHeader.1.itemContent.document.value"),
          image: t("listTablePrice.2.subHeader.1.itemContent.document.image"),
        },
        shippingReports: {
          value: t(
            "listTablePrice.2.subHeader.1.itemContent.shippingReports.value",
          ),
          image: t(
            "listTablePrice.2.subHeader.1.itemContent.shippingReports.image",
          ),
        },
      },
    },
  ];

  const [item, setItemActive] = useState(listItem[0]);
  return (
    <>
      <div className="tw-grid tw-grid-cols-2 tw-gap-3 tw-py-2 tw-sticky tw-top-[125px] md:tw-top-[140px] tw-bg-white tw-px-4">
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
      <div className="tw-mt-5 tw-rounded-lg tw-shadow-[0px_0px_20px_0px_rgba(0,_0,_0,_0.11)] tw-p-3 tw-mx-4 lg:tw-mx-0 ">
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
            {t("listTablePrice.2.functions.recurringMonth.title")}
          </p>
          <div className="tw-text-center">
            {item?.itemContent?.recurringMonth?.value != "" &&
              item?.itemContent?.recurringMonth?.value}
            {item?.itemContent?.recurringMonth?.image != "" && (
              <Image
                src={item?.itemContent?.recurringMonth?.image}
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
            {t("listTablePrice.2.functions.recurringYear.title")}
          </p>
          <div className="tw-text-center">
            {item?.itemContent?.recurringYear?.value != "" &&
              item?.itemContent?.recurringYear?.value}
            {item?.itemContent?.recurringYear?.image != "" && (
              <Image
                src={item?.itemContent?.recurringYear?.image}
                width={24}
                height={24}
                alt=""
                className={clsx("tw-mx-auto")}
              />
            )}
          </div>
        </div>
        <div className="tw-font-medium tw-text-brand-secondary tw-mt-4">
          {t("listTablePrice.2.titleLeft.packageManagement")}
        </div>
        <div className="tw-py-2 tw-grid tw-grid-cols-2 tw-text-sm tw-border-b-2 tw-items-center">
          <p className="tw-font-medium tw-mb-0">
            {t("listTablePrice.2.functions.packageManagement.title")}
          </p>
          <div className="tw-text-center">
            {item?.itemContent?.packageManagement?.value != "" &&
              item?.itemContent?.packageManagement?.value}
            {item?.itemContent?.packageManagement?.image != "" && (
              <Image
                src={item?.itemContent?.packageManagement?.image}
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
            {t("listTablePrice.2.functions.packageMannula.title")}
          </p>
          <div className="tw-text-center">
            {item?.itemContent?.packageMannula?.value != "" &&
              item?.itemContent?.packageMannula?.value}
            {item?.itemContent?.packageMannula?.image != "" && (
              <Image
                src={item?.itemContent?.packageMannula?.image}
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
            {t("listTablePrice.2.functions.packageConsolidation.title")}
          </p>
          <div className="tw-text-center">
            {item?.itemContent?.packageConsolidation?.value != "" &&
              item?.itemContent?.packageConsolidation?.value}
            {item?.itemContent?.packageConsolidation?.image != "" && (
              <Image
                src={item?.itemContent?.packageConsolidation?.image}
                width={24}
                height={24}
                alt=""
                className={clsx("tw-mx-auto")}
              />
            )}
          </div>
        </div>
        <div className="tw-font-medium tw-text-brand-secondary tw-mt-4">
          {t("listTablePrice.2.titleLeft.shipmentManagement")}
        </div>
        <div className="tw-py-2 tw-grid tw-grid-cols-2 tw-text-sm tw-border-b-2 tw-items-center">
          <p className="tw-font-medium tw-mb-0">
            {t("listTablePrice.2.functions.shipmentDomestic.title")}
          </p>
          <div className="tw-text-center">
            {item?.itemContent?.shipmentDomestic?.value != "" &&
              item?.itemContent?.shipmentDomestic?.value}
            {item?.itemContent?.shipmentDomestic?.image != "" && (
              <Image
                src={item?.itemContent?.shipmentDomestic?.image}
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
            {t("listTablePrice.2.functions.shipmentInternational.title")}
          </p>
          <div className="tw-text-center">
            {item?.itemContent?.shipmentInternational?.value != "" &&
              item?.itemContent?.shipmentInternational?.value}
            {item?.itemContent?.shipmentInternational?.image != "" && (
              <Image
                src={item?.itemContent?.shipmentInternational?.image}
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
            {t("listTablePrice.2.functions.carrier.title")}
          </p>
          <div className="tw-text-center">
            {item?.itemContent?.carrier?.value != "" &&
              item?.itemContent?.carrier?.value}
            {item?.itemContent?.carrier?.image != "" && (
              <Image
                src={item?.itemContent?.carrier?.image}
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
            {t("listTablePrice.2.functions.generate.title")}
          </p>
          <div className="tw-text-center">
            {item?.itemContent?.generate?.value != "" &&
              item?.itemContent?.generate?.value}
            {item?.itemContent?.generate?.image != "" && (
              <Image
                src={item?.itemContent?.generate?.image}
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
            {t("listTablePrice.2.functions.shipment.title")}
          </p>
          <div className="tw-text-center">
            {item?.itemContent?.shipment?.value != "" &&
              item?.itemContent?.shipment?.value}
            {item?.itemContent?.shipment?.image != "" && (
              <Image
                src={item?.itemContent?.shipment?.image}
                width={24}
                height={24}
                alt=""
                className={clsx("tw-mx-auto")}
              />
            )}
          </div>
        </div>
        <div className="tw-font-medium tw-text-brand-secondary tw-mt-4">
          {t("listTablePrice.2.titleLeft.createPersonalCarrier")}
        </div>
        <div className="tw-py-2 tw-grid tw-grid-cols-2 tw-text-sm tw-border-b-2 tw-items-center">
          <p className="tw-font-medium tw-mb-0">
            {t("listTablePrice.2.functions.create.title")}
          </p>
          <div className="tw-text-center">
            {item?.itemContent?.create?.value != "" &&
              item?.itemContent?.create?.value}
            {item?.itemContent?.create?.image != "" && (
              <Image
                src={item?.itemContent?.create?.image}
                width={24}
                height={24}
                alt=""
                className={clsx("tw-mx-auto")}
              />
            )}
          </div>
        </div>
        <div className="tw-font-medium tw-text-brand-secondary tw-mt-4">
          {t("listTablePrice.2.titleLeft.storefrontIntegration")}
        </div>
        <div className="tw-py-2 tw-grid tw-grid-cols-2 tw-text-sm tw-border-b-2 tw-items-center">
          <p className="tw-font-medium tw-mb-0">
            {t("listTablePrice.2.functions.storefront.title")}
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
          {t("listTablePrice.2.titleLeft.fareManagement")}
        </div>
        <div className="tw-py-2 tw-grid tw-grid-cols-2 tw-text-sm tw-border-b-2 tw-items-center">
          <p className="tw-font-medium tw-mb-0">
            {t("listTablePrice.2.functions.packageBased.title")}
          </p>
          <div className="tw-text-center">
            {item?.itemContent?.packageBased?.value != "" &&
              item?.itemContent?.packageBased?.value}
            {item?.itemContent?.packageBased?.image != "" && (
              <Image
                src={item?.itemContent?.packageBased?.image}
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
            {t("listTablePrice.2.functions.multiRoute.title")}
          </p>
          <div className="tw-text-center">
            {item?.itemContent?.multiRoute?.value != "" &&
              item?.itemContent?.multiRoute?.value}
            {item?.itemContent?.multiRoute?.image != "" && (
              <Image
                src={item?.itemContent?.multiRoute?.image}
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
            {t("listTablePrice.2.functions.custom.title")}
          </p>
          <div className="tw-text-center">
            {item?.itemContent?.custom?.value != "" &&
              item?.itemContent?.custom?.value}
            {item?.itemContent?.custom?.image != "" && (
              <Image
                src={item?.itemContent?.custom?.image}
                width={24}
                height={24}
                alt=""
                className={clsx("tw-mx-auto")}
              />
            )}
          </div>
        </div>
        <div className="tw-font-medium tw-text-brand-secondary tw-mt-4">
          {t("listTablePrice.2.titleLeft.carrierConnection")}
        </div>
        <div className="tw-py-2 tw-grid tw-grid-cols-2 tw-text-sm tw-border-b-2 tw-items-center">
          <p className="tw-font-medium tw-mb-0">
            {t("listTablePrice.2.functions.connectMerchant.title")}
          </p>
          <div className="tw-text-center">
            {item?.itemContent?.connectMerchant?.value != "" &&
              item?.itemContent?.connectMerchant?.value}
            {item?.itemContent?.connectMerchant?.image != "" && (
              <Image
                src={item?.itemContent?.connectMerchant?.image}
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
            {t("listTablePrice.2.functions.connectShip4p.title")}
          </p>
          <div className="tw-text-center">
            {item?.itemContent?.connectShip4p?.value != "" &&
              item?.itemContent?.connectShip4p?.value}
            {item?.itemContent?.connectShip4p?.image != "" && (
              <Image
                src={item?.itemContent?.connectShip4p?.image}
                width={24}
                height={24}
                alt=""
                className={clsx("tw-mx-auto")}
              />
            )}
          </div>
        </div>
        <div className="tw-font-medium tw-text-brand-secondary tw-mt-4">
          {t("listTablePrice.2.titleLeft.taxDocument")}
        </div>
        <div className="tw-py-2 tw-grid tw-grid-cols-2 tw-text-sm tw-border-b-2 tw-items-center">
          <p className="tw-font-medium tw-mb-0">
            {t("listTablePrice.2.functions.tax.title")}
          </p>
          <div className="tw-text-center">
            {item?.itemContent?.tax?.value != "" &&
              item?.itemContent?.tax?.value}
            {item?.itemContent?.tax?.image != "" && (
              <Image
                src={item?.itemContent?.tax?.image}
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
            {t("listTablePrice.2.functions.document.title")}
          </p>
          <div className="tw-text-center">
            {item?.itemContent?.document?.value != "" &&
              item?.itemContent?.document?.value}
            {item?.itemContent?.document?.image != "" && (
              <Image
                src={item?.itemContent?.document?.image}
                width={24}
                height={24}
                alt=""
                className={clsx("tw-mx-auto")}
              />
            )}
          </div>
        </div>
        <div className="tw-font-medium tw-text-brand-secondary tw-mt-4">
          {t("listTablePrice.2.titleLeft.reports")}
        </div>
        <div className="tw-py-2 tw-grid tw-grid-cols-2 tw-text-sm tw-border-b-2 tw-items-center">
          <p className="tw-font-medium tw-mb-0">
            {t("listTablePrice.2.functions.shippingReports.title")}
          </p>
          <div className="tw-text-center">
            {item?.itemContent?.shippingReports?.value != "" &&
              item?.itemContent?.shippingReports?.value}
            {item?.itemContent?.shippingReports?.image != "" && (
              <Image
                src={item?.itemContent?.shippingReports?.image}
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
