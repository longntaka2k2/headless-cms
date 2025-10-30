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
      title: t("listTablePrice.1.subHeader.0.title"),
      unit: t("listTablePrice.1.unit"),
      uom: t("listTablePrice.1.uom.0"),
      itemContent: {
        title: t("listTablePrice.1.subHeader.0.itemContent.title"),
        solution: {
          value: t("listTablePrice.1.subHeader.0.itemContent.solution.value"),
          image: t("listTablePrice.1.subHeader.0.itemContent.solution.image"),
        },
        trainning: {
          value: t("listTablePrice.1.subHeader.0.itemContent.trainning.value"),
          image: t("listTablePrice.1.subHeader.0.itemContent.trainning.image"),
        },
        system: {
          value: t("listTablePrice.1.subHeader.0.itemContent.system.value"),
          image: t("listTablePrice.1.subHeader.0.itemContent.system.image"),
        },
        warehouse: {
          value: t("listTablePrice.1.subHeader.0.itemContent.warehouse.value"),
          image: t("listTablePrice.1.subHeader.0.itemContent.warehouse.image"),
        },
        user: {
          value: t("listTablePrice.1.subHeader.0.itemContent.user.value"),
          image: t("listTablePrice.1.subHeader.0.itemContent.user.image"),
        },
        inboundRequest: {
          value: t(
            "listTablePrice.1.subHeader.0.itemContent.inboundRequest.value",
          ),
          image: t(
            "listTablePrice.1.subHeader.0.itemContent.inboundRequest.image",
          ),
        },
        inboundReceiving: {
          value: t(
            "listTablePrice.1.subHeader.0.itemContent.inboundReceiving.value",
          ),
          image: t(
            "listTablePrice.1.subHeader.0.itemContent.inboundReceiving.image",
          ),
        },
        autoSuggestion: {
          value: t(
            "listTablePrice.1.subHeader.0.itemContent.autoSuggestion.value",
          ),
          image: t(
            "listTablePrice.1.subHeader.0.itemContent.autoSuggestion.image",
          ),
        },
        outbound: {
          value: [
            t("listTablePrice.1.subHeader.0.itemContent.outbound.value.0"),
            t("listTablePrice.1.subHeader.0.itemContent.outbound.value.1"),
            t("listTablePrice.1.subHeader.0.itemContent.outbound.value.2"),
            t("listTablePrice.1.subHeader.0.itemContent.outbound.value.3"),
          ],
          image: t("listTablePrice.1.subHeader.0.itemContent.outbound.image"),
        },
        multiplePicking: {
          vvalue: t(
            "listTablePrice.1.subHeader.0.itemContent.multiplePicking.value",
          ),
          image: t(
            "listTablePrice.1.subHeader.0.itemContent.multiplePicking.image",
          ),
        },
        multipleOutbound: {
          value: t(
            "listTablePrice.1.subHeader.0.itemContent.multipleOutbound.value",
          ),
          image: t(
            "listTablePrice.1.subHeader.0.itemContent.multipleOutbound.image",
          ),
        },
        flexible: {
          value: t("listTablePrice.1.subHeader.0.itemContent.flexible.value"),
          image: t("listTablePrice.1.subHeader.0.itemContent.flexible.image"),
        },
        automated: {
          value: t("listTablePrice.1.subHeader.0.itemContent.automated.value"),
          image: t("listTablePrice.1.subHeader.0.itemContent.automated.image"),
        },
        multiCarrier: {
          value: t(
            "listTablePrice.1.subHeader.0.itemContent.multiCarrier.value",
          ),
          image: t(
            "listTablePrice.1.subHeader.0.itemContent.multiCarrier.image",
          ),
        },
        product: {
          value: t("listTablePrice.1.subHeader.0.itemContent.product.value"),
          image: t("listTablePrice.1.subHeader.0.itemContent.product.image"),
        },
        location: {
          value: t("listTablePrice.1.subHeader.0.itemContent.location.value"),
          image: t("listTablePrice.1.subHeader.0.itemContent.location.image"),
        },
        stocktaking: {
          value: t(
            "listTablePrice.1.subHeader.0.itemContent.stocktaking.value",
          ),
          image: t(
            "listTablePrice.1.subHeader.0.itemContent.stocktaking.image",
          ),
        },
        warehouseFacilities: {
          value: t(
            "listTablePrice.1.subHeader.0.itemContent.warehouseFacilities.value",
          ),
          image: t(
            "listTablePrice.1.subHeader.0.itemContent.warehouseFacilities.image",
          ),
        },
        operational: {
          value: t(
            "listTablePrice.1.subHeader.0.itemContent.operational.value",
          ),
          image: t(
            "listTablePrice.1.subHeader.0.itemContent.operational.image",
          ),
        },
        integrationSales: {
          value: t(
            "listTablePrice.1.subHeader.0.itemContent.integrationSales.value",
          ),
          image: t(
            "listTablePrice.1.subHeader.0.itemContent.integrationSales.image",
          ),
        },
        integrationLogistics: {
          value: t(
            "listTablePrice.1.subHeader.0.itemContent.integrationLogistics.value",
          ),
          image: t(
            "listTablePrice.1.subHeader.0.itemContent.integrationLogistics.image",
          ),
        },
        inventoryReports: {
          value: t(
            "listTablePrice.1.subHeader.0.itemContent.inventoryReports.value",
          ),
          image: t(
            "listTablePrice.1.subHeader.0.itemContent.inventoryReports.image",
          ),
        },
        operationalPerformance: {
          value: t(
            "listTablePrice.1.subHeader.0.itemContent.operationalPerformance.value",
          ),
          image: t(
            "listTablePrice.1.subHeader.0.itemContent.operationalPerformance.image",
          ),
        },
        shipping: {
          value: t("listTablePrice.1.subHeader.0.itemContent.shipping.value"),
          image: t("listTablePrice.1.subHeader.0.itemContent.shipping.image"),
        },
        onSite: {
          value: t("listTablePrice.1.subHeader.0.itemContent.onSite.value"),
          image: t("listTablePrice.1.subHeader.0.itemContent.onSite.image"),
        },
        outOfScope: {
          value: t("listTablePrice.1.subHeader.0.itemContent.outOfScope.value"),
          image: t("listTablePrice.1.subHeader.0.itemContent.outOfScope.image"),
        },
      },
    },
    {
      title: t("listTablePrice.1.subHeader.1.title"),
      unit: t("listTablePrice.1.unit"),
      uom: t("listTablePrice.1.uom.1"),
      itemContent: {
        title: t("listTablePrice.1.subHeader.1.itemContent.title"),
        solution: {
          value: t("listTablePrice.1.subHeader.1.itemContent.solution.value"),
          image: t("listTablePrice.1.subHeader.1.itemContent.solution.image"),
        },
        trainning: {
          value: t("listTablePrice.1.subHeader.1.itemContent.trainning.value"),
          image: t("listTablePrice.1.subHeader.1.itemContent.trainning.image"),
        },
        system: {
          value: t("listTablePrice.1.subHeader.1.itemContent.system.value"),
          image: t("listTablePrice.1.subHeader.1.itemContent.system.image"),
        },
        warehouse: {
          value: t("listTablePrice.1.subHeader.1.itemContent.warehouse.value"),
          image: t("listTablePrice.1.subHeader.1.itemContent.warehouse.image"),
        },
        user: {
          value: t("listTablePrice.1.subHeader.1.itemContent.user.value"),
          image: t("listTablePrice.1.subHeader.1.itemContent.user.image"),
        },
        inboundRequest: {
          value: t(
            "listTablePrice.1.subHeader.1.itemContent.inboundRequest.value",
          ),
          image: t(
            "listTablePrice.1.subHeader.1.itemContent.inboundRequest.image",
          ),
        },
        inboundReceiving: {
          value: t(
            "listTablePrice.1.subHeader.1.itemContent.inboundReceiving.value",
          ),
          image: t(
            "listTablePrice.1.subHeader.1.itemContent.inboundReceiving.image",
          ),
        },
        autoSuggestion: {
          value: t(
            "listTablePrice.1.subHeader.1.itemContent.autoSuggestion.value",
          ),
          image: t(
            "listTablePrice.1.subHeader.1.itemContent.autoSuggestion.image",
          ),
        },
        outbound: {
          value: [
            t("listTablePrice.1.subHeader.1.itemContent.outbound.value.0"),
            t("listTablePrice.1.subHeader.1.itemContent.outbound.value.1"),
            t("listTablePrice.1.subHeader.1.itemContent.outbound.value.2"),
            t("listTablePrice.1.subHeader.1.itemContent.outbound.value.3"),
          ],
          image: t("listTablePrice.1.subHeader.1.itemContent.outbound.image"),
        },
        multiplePicking: {
          value: t(
            "listTablePrice.1.subHeader.1.itemContent.multiplePicking.value",
          ),
          image: t(
            "listTablePrice.1.subHeader.1.itemContent.multiplePicking.image",
          ),
        },
        multipleOutbound: {
          value: t(
            "listTablePrice.1.subHeader.1.itemContent.multipleOutbound.value",
          ),
          image: t(
            "listTablePrice.1.subHeader.1.itemContent.multipleOutbound.image",
          ),
        },
        flexible: {
          value: t("listTablePrice.1.subHeader.1.itemContent.flexible.value"),
          image: t("listTablePrice.1.subHeader.1.itemContent.flexible.image"),
        },
        automated: {
          value: t("listTablePrice.1.subHeader.1.itemContent.automated.value"),
          image: t("listTablePrice.1.subHeader.1.itemContent.automated.image"),
        },
        multiCarrier: {
          value: t(
            "listTablePrice.1.subHeader.1.itemContent.multiCarrier.value",
          ),
          image: t(
            "listTablePrice.1.subHeader.1.itemContent.multiCarrier.image",
          ),
        },
        product: {
          value: t("listTablePrice.1.subHeader.1.itemContent.product.value"),
          image: t("listTablePrice.1.subHeader.1.itemContent.product.image"),
        },
        location: {
          value: t("listTablePrice.1.subHeader.1.itemContent.location.value"),
          image: t("listTablePrice.1.subHeader.1.itemContent.location.image"),
        },
        stocktaking: {
          value: t(
            "listTablePrice.1.subHeader.1.itemContent.stocktaking.value",
          ),
          image: t(
            "listTablePrice.1.subHeader.1.itemContent.stocktaking.image",
          ),
        },
        warehouseFacilities: {
          value: t(
            "listTablePrice.1.subHeader.1.itemContent.warehouseFacilities.value",
          ),
          image: t(
            "listTablePrice.1.subHeader.1.itemContent.warehouseFacilities.image",
          ),
        },
        operational: {
          value: t(
            "listTablePrice.1.subHeader.1.itemContent.operational.value",
          ),
          image: t(
            "listTablePrice.1.subHeader.1.itemContent.operational.image",
          ),
        },
        integrationSales: {
          value: t(
            "listTablePrice.1.subHeader.1.itemContent.integrationSales.value",
          ),
          image: t(
            "listTablePrice.1.subHeader.1.itemContent.integrationSales.image",
          ),
        },
        integrationLogistics: {
          value: t(
            "listTablePrice.1.subHeader.1.itemContent.integrationLogistics.value",
          ),
          image: t(
            "listTablePrice.1.subHeader.1.itemContent.integrationLogistics.image",
          ),
        },
        inventoryReports: {
          value: t(
            "listTablePrice.1.subHeader.1.itemContent.inventoryReports.value",
          ),
          image: t(
            "listTablePrice.1.subHeader.1.itemContent.inventoryReports.image",
          ),
        },
        operationalPerformance: {
          value: t(
            "listTablePrice.1.subHeader.1.itemContent.operationalPerformance.value",
          ),
          image: t(
            "listTablePrice.1.subHeader.1.itemContent.operationalPerformance.image",
          ),
        },
        shipping: {
          value: t("listTablePrice.1.subHeader.1.itemContent.shipping.value"),
          image: t("listTablePrice.1.subHeader.1.itemContent.shipping.image"),
        },
        onSite: {
          value: t("listTablePrice.1.subHeader.1.itemContent.onSite.value"),
          image: t("listTablePrice.1.subHeader.1.itemContent.onSite.image"),
        },
        outOfScope: {
          value: t("listTablePrice.1.subHeader.1.itemContent.outOfScope.value"),
          image: t("listTablePrice.1.subHeader.1.itemContent.outOfScope.image"),
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
        <div className="tw-py-2 tw-grid tw-grid-cols-2 tw-text-sm tw-border-b-2 tw-items-center tw-mt-4">
          <div className="tw-font-medium tw-text-brand-secondary">
            {t("listTablePrice.1.titleLeft.deploymentCosts")}
          </div>
          <p className="tw-font-medium tw-mb-0 tw-text-center">
            {t("listTablePrice.1.unit")}
          </p>
        </div>
        <div className="tw-py-2 tw-grid tw-grid-cols-2 tw-text-sm tw-border-b-2 tw-items-center">
          <p className="tw-font-medium tw-mb-0">
            {t("listTablePrice.1.functions.solution.title")}
          </p>
          <div className="tw-text-center">
            {item?.itemContent?.solution?.value != "" &&
              item?.itemContent?.solution?.value}
            {item?.itemContent?.solution?.image != "" && (
              <Image
                src={item?.itemContent?.solution?.image}
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
            {t("listTablePrice.1.functions.trainning.title")}
          </p>
          <div className="tw-text-center">
            {item?.itemContent?.trainning?.value != "" &&
              item?.itemContent?.trainning?.value}
            {item?.itemContent?.trainning?.image != "" && (
              <Image
                src={item?.itemContent?.trainning?.image}
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
            {t("listTablePrice.1.functions.system.title")}
          </p>
          <div className="tw-text-center">
            {item?.itemContent?.system?.value != "" &&
              item?.itemContent?.system?.value}
            {item?.itemContent?.system?.image != "" && (
              <Image
                src={item?.itemContent?.system?.image}
                width={24}
                height={24}
                alt=""
                className={clsx("tw-mx-auto")}
              />
            )}
          </div>
        </div>
        <div className="tw-font-medium tw-text-brand-secondary tw-mt-4">
          {t("listTablePrice.1.titleLeft.warehouseLocation")}
        </div>
        <div className="tw-py-2 tw-grid tw-grid-cols-2 tw-text-sm tw-border-b-2 tw-items-center">
          <p className="tw-font-medium tw-mb-0">
            {t("listTablePrice.1.functions.warehouse.title")}
          </p>
          <div className="tw-text-center">
            {item?.itemContent?.warehouse?.value != "" &&
              item?.itemContent?.warehouse?.value}
            {item?.itemContent?.warehouse?.image != "" && (
              <Image
                src={item?.itemContent?.warehouse?.image}
                width={24}
                height={24}
                alt=""
                className={clsx("tw-mx-auto")}
              />
            )}
          </div>
        </div>
        <div className="tw-font-medium tw-text-brand-secondary tw-mt-4">
          {t("listTablePrice.1.titleLeft.userManagement")}
        </div>
        <div className="tw-py-2 tw-grid tw-grid-cols-2 tw-text-sm tw-border-b-2 tw-items-center">
          <p className="tw-font-medium tw-mb-0">
            {t("listTablePrice.1.functions.user.title")}
          </p>
          <div className="tw-text-center">
            {item?.itemContent?.user?.value != "" &&
              item?.itemContent?.user?.value}
            {item?.itemContent?.user?.image != "" && (
              <Image
                src={item?.itemContent?.user?.image}
                width={24}
                height={24}
                alt=""
                className={clsx("tw-mx-auto")}
              />
            )}
          </div>
        </div>
        <div className="tw-font-medium tw-text-brand-secondary tw-mt-4">
          {t("listTablePrice.1.titleLeft.inboundManagement")}
        </div>
        <div className="tw-py-2 tw-grid tw-grid-cols-2 tw-text-sm tw-border-b-2 tw-items-center">
          <p className="tw-font-medium tw-mb-0">
            {t("listTablePrice.1.functions.inboundRequest.title")}
          </p>
          <div className="tw-text-center">
            {item?.itemContent?.inboundRequest?.value != "" &&
              item?.itemContent?.inboundRequest?.value}
            {item?.itemContent?.inboundRequest?.image != "" && (
              <Image
                src={item?.itemContent?.inboundRequest?.image}
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
            {t("listTablePrice.1.functions.inboundReceiving.title")}
          </p>
          <div className="tw-text-center">
            {item?.itemContent?.inboundReceiving?.value != "" &&
              item?.itemContent?.inboundReceiving?.value}
            {item?.itemContent?.inboundReceiving?.image != "" && (
              <Image
                src={item?.itemContent?.inboundReceiving?.image}
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
            {t("listTablePrice.1.functions.autoSuggestion.title")}
          </p>
          <div className="tw-text-center">
            {item?.itemContent?.autoSuggestion?.value != "" &&
              item?.itemContent?.autoSuggestion?.value}
            {item?.itemContent?.autoSuggestion?.image != "" && (
              <Image
                src={item?.itemContent?.autoSuggestion?.image}
                width={24}
                height={24}
                alt=""
                className={clsx("tw-mx-auto")}
              />
            )}
          </div>
        </div>
        <div className="tw-flex tw-justify-between tw-items-center">
          <span className="tw-font-medium tw-text-brand-secondary">
            {t("listTablePrice.1.titleLeft.outboundManagement")}
          </span>
          <div className="tw-my-3">{item?.uom}</div>
        </div>
        <div className="tw-py-2 tw-grid tw-grid-cols-2 tw-text-sm tw-border-b-2 tw-items-center">
          <p className="tw-font-medium tw-mb-0">
            {t("listTablePrice.1.functions.outbound.title")}
          </p>
          <div className="tw-text-end">
            {item?.itemContent?.outbound?.value.map(
              (item: any, idx: number) => (
                <div key={idx} className="tw-py-2">
                  {item}
                </div>
              ),
            )}
          </div>
        </div>
        <div className="tw-py-2 tw-grid tw-grid-cols-2 tw-text-sm tw-border-b-2 tw-items-center">
          <p className="tw-font-medium tw-mb-0">
            {t("listTablePrice.1.functions.multiplePicking.title")}
          </p>
          <div className="tw-text-center">
            {item?.itemContent?.multiplePicking?.value != "" &&
              item?.itemContent?.multiplePicking?.value}
            {item?.itemContent?.multiplePicking?.image != "" && (
              <Image
                src={item?.itemContent?.multiplePicking?.image}
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
            {t("listTablePrice.1.functions.multipleOutbound.title")}
          </p>
          <div className="tw-text-center">
            {item?.itemContent?.multipleOutbound?.value != "" &&
              item?.itemContent?.multipleOutbound?.value}
            {item?.itemContent?.multipleOutbound?.image != "" && (
              <Image
                src={item?.itemContent?.multipleOutbound?.image}
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
            {t("listTablePrice.1.functions.flexible.title")}
          </p>
          <div className="tw-text-center">
            {item?.itemContent?.flexible?.value != "" &&
              item?.itemContent?.flexible?.value}
            {item?.itemContent?.flexible?.image != "" && (
              <Image
                src={item?.itemContent?.flexible?.image}
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
            {t("listTablePrice.1.functions.automated.title")}
          </p>
          <div className="tw-text-center">
            {item?.itemContent?.automated?.value != "" &&
              item?.itemContent?.automated?.value}
            {item?.itemContent?.automated?.image != "" && (
              <Image
                src={item?.itemContent?.automated?.image}
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
            {t("listTablePrice.1.functions.multiCarrier.title")}
          </p>
          <div className="tw-text-center">
            {item?.itemContent?.multiCarrier?.value != "" &&
              item?.itemContent?.multiCarrier?.value}
            {item?.itemContent?.multiCarrier?.image != "" && (
              <Image
                src={item?.itemContent?.multiCarrier?.image}
                width={24}
                height={24}
                alt=""
                className={clsx("tw-mx-auto")}
              />
            )}
          </div>
        </div>
        <div className="tw-font-medium tw-text-brand-secondary tw-mt-4">
          {t("listTablePrice.1.titleLeft.inventory")}
        </div>
        <div className="tw-py-2 tw-grid tw-grid-cols-2 tw-text-sm tw-border-b-2 tw-items-center">
          <p className="tw-font-medium tw-mb-0">
            {t("listTablePrice.1.functions.product.title")}
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
            {t("listTablePrice.1.functions.location.title")}
          </p>
          <div className="tw-text-center">
            {item?.itemContent?.location?.value != "" &&
              item?.itemContent?.location?.value}
            {item?.itemContent?.location?.image != "" && (
              <Image
                src={item?.itemContent?.location?.image}
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
            {t("listTablePrice.1.functions.stocktaking.title")}
          </p>
          <div className="tw-text-center">
            {item?.itemContent?.stocktaking?.value != "" &&
              item?.itemContent?.stocktaking?.value}
            {item?.itemContent?.stocktaking?.image != "" && (
              <Image
                src={item?.itemContent?.stocktaking?.image}
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
            {t("listTablePrice.1.functions.warehouseFacilities.title")}
          </p>
          <div className="tw-text-center">
            {item?.itemContent?.warehouseFacilities?.value != "" &&
              item?.itemContent?.warehouseFacilities?.value}
            {item?.itemContent?.warehouseFacilities?.image != "" && (
              <Image
                src={item?.itemContent?.warehouseFacilities?.image}
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
            {t("listTablePrice.1.functions.operational.title")}
          </p>
          <div className="tw-text-center">
            {item?.itemContent?.operational?.value != "" &&
              item?.itemContent?.operational?.value}
            {item?.itemContent?.operational?.image != "" && (
              <Image
                src={item?.itemContent?.operational?.image}
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
            {t("listTablePrice.1.functions.integrationSales.title")}
          </p>
          <div className="tw-text-center">
            {item?.itemContent?.integrationSales?.value != "" &&
              item?.itemContent?.integrationSales?.value}
            {item?.itemContent?.integrationSales?.image != "" && (
              <Image
                src={item?.itemContent?.integrationSales?.image}
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
            {t("listTablePrice.1.functions.integrationLogistics.title")}
          </p>
          <div className="tw-text-center">
            {item?.itemContent?.integrationLogistics?.value != "" &&
              item?.itemContent?.integrationLogistics?.value}
            {item?.itemContent?.integrationLogistics?.image != "" && (
              <Image
                src={item?.itemContent?.integrationLogistics?.image}
                width={24}
                height={24}
                alt=""
                className={clsx("tw-mx-auto")}
              />
            )}
          </div>
        </div>
        <div className="tw-font-medium tw-text-brand-secondary tw-mt-4">
          {t("listTablePrice.1.titleLeft.report")}
        </div>
        <div className="tw-py-2 tw-grid tw-grid-cols-2 tw-text-sm tw-border-b-2 tw-items-center">
          <p className="tw-font-medium tw-mb-0">
            {t("listTablePrice.1.functions.inventoryReports.title")}
          </p>
          <div className="tw-text-center">
            {item?.itemContent?.inventoryReports?.value != "" &&
              item?.itemContent?.inventoryReports?.value}
            {item?.itemContent?.inventoryReports?.image != "" && (
              <Image
                src={item?.itemContent?.inventoryReports?.image}
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
            {t("listTablePrice.1.functions.operationalPerformance.title")}
          </p>
          <div className="tw-text-center">
            {item?.itemContent?.operationalPerformance?.value != "" &&
              item?.itemContent?.operationalPerformance?.value}
            {item?.itemContent?.operationalPerformance?.image != "" && (
              <Image
                src={item?.itemContent?.operationalPerformance?.image}
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
            {t("listTablePrice.1.functions.shipping.title")}
          </p>
          <div className="tw-text-center">
            {item?.itemContent?.shipping?.value != "" &&
              item?.itemContent?.shipping?.value}
            {item?.itemContent?.shipping?.image != "" && (
              <Image
                src={item?.itemContent?.shipping?.image}
                width={24}
                height={24}
                alt=""
                className={clsx("tw-mx-auto")}
              />
            )}
          </div>
        </div>
        <div className="tw-font-medium tw-text-brand-secondary tw-mt-4">
          {t("listTablePrice.1.titleLeft.additionalServices")}
        </div>
        <div className="tw-py-2 tw-grid tw-grid-cols-2 tw-text-sm tw-border-b-2 tw-items-center">
          <p className="tw-font-medium tw-mb-0">
            {t("listTablePrice.1.functions.onSite.title")}
          </p>
          <div className="tw-text-center">
            {item?.itemContent?.onSite?.value != "" &&
              item?.itemContent?.onSite?.value}
            {item?.itemContent?.onSite?.image != "" && (
              <Image
                src={item?.itemContent?.onSite?.image}
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
            {t("listTablePrice.1.functions.outOfScope.title")}
          </p>
          <div className="tw-text-center">
            {item?.itemContent?.outOfScope?.value != "" &&
              item?.itemContent?.outOfScope?.value}
            {item?.itemContent?.outOfScope?.image != "" && (
              <Image
                src={item?.itemContent?.outOfScope?.image}
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
