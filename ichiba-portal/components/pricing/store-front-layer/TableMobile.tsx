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
      itemContent: {
        title: t("listTablePrice.3.items.0.subHeader.0.title"),
        usingFree: {
          value: t(
            "listTablePrice.3.items.0.subHeader.0.itemContent.usingFree.value",
          ),
          image: t(
            "listTablePrice.3.items.0.subHeader.0.itemContent.usingFree.image",
          ),
        },
        usingPro: {
          value: t(
            "listTablePrice.3.items.0.subHeader.0.itemContent.usingPro.value",
          ),
          image: t(
            "listTablePrice.3.items.0.subHeader.0.itemContent.usingPro.image",
          ),
        },
        landingPage: {
          value: t(
            "listTablePrice.3.items.0.subHeader.0.itemContent.landingPage.value",
          ),
          image: t(
            "listTablePrice.3.items.0.subHeader.0.itemContent.landingPage.image",
          ),
        },
        annual: {
          value: t(
            "listTablePrice.3.items.0.subHeader.0.itemContent.annual.value",
          ),
          image: t(
            "listTablePrice.3.items.0.subHeader.0.itemContent.annual.image",
          ),
        },
        managingTrading: {
          value: t(
            "listTablePrice.3.items.0.subHeader.0.itemContent.managingTrading.value",
          ),
          image: t(
            "listTablePrice.3.items.0.subHeader.0.itemContent.managingTrading.image",
          ),
        },
        managing: {
          valueList: [
            t(
              "listTablePrice.3.items.0.subHeader.0.itemContent.managing.value.0",
            ),
            t(
              "listTablePrice.3.items.0.subHeader.0.itemContent.managing.value.1",
            ),
            t(
              "listTablePrice.3.items.0.subHeader.0.itemContent.managing.value.2",
            ),
          ],
          image: t(
            "listTablePrice.3.items.0.subHeader.0.itemContent.managing.image",
          ),
        },
        custom: {
          value: t(
            "listTablePrice.3.items.0.subHeader.0.itemContent.custom.value",
          ),
          image: t(
            "listTablePrice.3.items.0.subHeader.0.itemContent.custom.image",
          ),
        },
        product: {
          value: t(
            "listTablePrice.3.items.0.subHeader.0.itemContent.product.value",
          ),
          image: t(
            "listTablePrice.3.items.0.subHeader.0.itemContent.product.image",
          ),
        },
        additional: {
          value: t(
            "listTablePrice.3.items.0.subHeader.0.itemContent.additional.value",
          ),
          image: t(
            "listTablePrice.3.items.0.subHeader.0.itemContent.additional.image",
          ),
        },
      },
    },
    {
      itemContent: {
        title: t("listTablePrice.3.items.0.subHeader.1.title"),
        usingFree: {
          value: t(
            "listTablePrice.3.items.0.subHeader.1.itemContent.usingFree.value",
          ),
          image: t(
            "listTablePrice.3.items.0.subHeader.1.itemContent.usingFree.image",
          ),
        },
        usingPro: {
          value: t(
            "listTablePrice.3.items.0.subHeader.1.itemContent.usingPro.value",
          ),
          image: t(
            "listTablePrice.3.items.0.subHeader.1.itemContent.usingPro.image",
          ),
        },
        landingPage: {
          value: t(
            "listTablePrice.3.items.0.subHeader.1.itemContent.landingPage.value",
          ),
          image: t(
            "listTablePrice.3.items.0.subHeader.1.itemContent.landingPage.image",
          ),
        },
        annual: {
          value: t(
            "listTablePrice.3.items.0.subHeader.1.itemContent.annual.value",
          ),
          image: t(
            "listTablePrice.3.items.0.subHeader.1.itemContent.annual.image",
          ),
        },
        managingTrading: {
          value: t(
            "listTablePrice.3.items.0.subHeader.1.itemContent.managingTrading.value",
          ),
          image: t(
            "listTablePrice.3.items.0.subHeader.1.itemContent.managingTrading.image",
          ),
        },
        managing: {
          value: t(
            "listTablePrice.3.items.0.subHeader.1.itemContent.managing.value",
          ),
          image: t(
            "listTablePrice.3.items.0.subHeader.1.itemContent.managing.image",
          ),
        },
        custom: {
          value: t(
            "listTablePrice.3.items.0.subHeader.1.itemContent.custom.value",
          ),
          image: t(
            "listTablePrice.3.items.0.subHeader.1.itemContent.custom.image",
          ),
        },
        product: {
          value: t(
            "listTablePrice.3.items.0.subHeader.1.itemContent.product.value",
          ),
          image: t(
            "listTablePrice.3.items.0.subHeader.1.itemContent.product.image",
          ),
        },
        additional: {
          value: t(
            "listTablePrice.3.items.0.subHeader.1.itemContent.additional.value",
          ),
          image: t(
            "listTablePrice.3.items.0.subHeader.1.itemContent.additional.image",
          ),
        },
      },
    },
    {
      itemContent: {
        title: t("listTablePrice.3.items.0.subHeader.2.title"),
        usingFree: {
          value: t(
            "listTablePrice.3.items.0.subHeader.2.itemContent.usingFree.value",
          ),
          image: t(
            "listTablePrice.3.items.0.subHeader.2.itemContent.usingFree.image",
          ),
        },
        usingPro: {
          value: t(
            "listTablePrice.3.items.0.subHeader.2.itemContent.usingPro.value",
          ),
          image: t(
            "listTablePrice.3.items.0.subHeader.2.itemContent.usingPro.image",
          ),
        },
        landingPage: {
          value: t(
            "listTablePrice.3.items.0.subHeader.2.itemContent.landingPage.value",
          ),
          image: t(
            "listTablePrice.3.items.0.subHeader.2.itemContent.landingPage.image",
          ),
        },
        annual: {
          value: t(
            "listTablePrice.3.items.0.subHeader.2.itemContent.annual.value",
          ),
          image: t(
            "listTablePrice.3.items.0.subHeader.2.itemContent.annual.image",
          ),
        },
        managingTrading: {
          value: t(
            "listTablePrice.3.items.0.subHeader.2.itemContent.managingTrading.value",
          ),
          image: t(
            "listTablePrice.3.items.0.subHeader.2.itemContent.managingTrading.image",
          ),
        },
        managing: {
          value: t(
            "listTablePrice.3.items.0.subHeader.2.itemContent.managing.value",
          ),
          image: t(
            "listTablePrice.3.items.0.subHeader.2.itemContent.managing.image",
          ),
        },
        custom: {
          value: t(
            "listTablePrice.3.items.0.subHeader.2.itemContent.custom.value",
          ),
          image: t(
            "listTablePrice.3.items.0.subHeader.2.itemContent.custom.image",
          ),
        },
        product: {
          value: t(
            "listTablePrice.3.items.0.subHeader.2.itemContent.product.value",
          ),
          image: t(
            "listTablePrice.3.items.0.subHeader.2.itemContent.product.image",
          ),
        },
        additional: {
          value: t(
            "listTablePrice.3.items.0.subHeader.2.itemContent.additional.value",
          ),
          image: t(
            "listTablePrice.3.items.0.subHeader.2.itemContent.additional.image",
          ),
        },
      },
    },
  ];

  const listMobile = [
    {
      itemContent: {
        title: t("listTablePrice.3.items.1.subHeader.0.title"),
        development: {
          value: t(
            "listTablePrice.3.items.1.subHeader.0.itemContent.development.value",
          ),
          image: t(
            "listTablePrice.3.items.1.subHeader.0.itemContent.development.image",
          ),
        },
        managingTrading: {
          value: t(
            "listTablePrice.3.items.1.subHeader.0.itemContent.managingTrading.value",
          ),
          image: t(
            "listTablePrice.3.items.1.subHeader.0.itemContent.managingTrading.image",
          ),
        },
        managing: {
          valueList: [
            t(
              "listTablePrice.3.items.1.subHeader.0.itemContent.managing.value.0",
            ),
            t(
              "listTablePrice.3.items.1.subHeader.0.itemContent.managing.value.1",
            ),
            t(
              "listTablePrice.3.items.1.subHeader.0.itemContent.managing.value.2",
            ),
          ],
          image: t(
            "listTablePrice.3.items.1.subHeader.0.itemContent.managing.image",
          ),
        },
        custom: {
          value: t(
            "listTablePrice.3.items.1.subHeader.0.itemContent.custom.value",
          ),
          image: t(
            "listTablePrice.3.items.1.subHeader.0.itemContent.custom.image",
          ),
        },
        product: {
          value: t(
            "listTablePrice.3.items.1.subHeader.0.itemContent.product.value",
          ),
          image: t(
            "listTablePrice.3.items.1.subHeader.0.itemContent.product.image",
          ),
        },
        annual: {
          value: t(
            "listTablePrice.3.items.1.subHeader.0.itemContent.annual.value",
          ),
          image: t(
            "listTablePrice.3.items.1.subHeader.0.itemContent.annual.image",
          ),
        },
      },
    },
    {
      itemContent: {
        title: t("listTablePrice.3.items.1.subHeader.1.title"),
        development: {
          value: t(
            "listTablePrice.3.items.1.subHeader.1.itemContent.development.value",
          ),
          image: t(
            "listTablePrice.3.items.1.subHeader.1.itemContent.development.image",
          ),
        },
        managingTrading: {
          value: t(
            "listTablePrice.3.items.1.subHeader.1.itemContent.managingTrading.value",
          ),
          image: t(
            "listTablePrice.3.items.1.subHeader.1.itemContent.managingTrading.image",
          ),
        },
        managing: {
          value: t(
            "listTablePrice.3.items.1.subHeader.1.itemContent.managing.value",
          ),
          image: t(
            "listTablePrice.3.items.1.subHeader.1.itemContent.managing.image",
          ),
        },
        custom: {
          value: t(
            "listTablePrice.3.items.1.subHeader.1.itemContent.custom.value",
          ),
          image: t(
            "listTablePrice.3.items.1.subHeader.1.itemContent.custom.image",
          ),
        },
        product: {
          value: t(
            "listTablePrice.3.items.1.subHeader.1.itemContent.product.value",
          ),
          image: t(
            "listTablePrice.3.items.1.subHeader.1.itemContent.product.image",
          ),
        },
        annual: {
          value: t(
            "listTablePrice.3.items.1.subHeader.1.itemContent.annual.value",
          ),
          image: t(
            "listTablePrice.3.items.1.subHeader.1.itemContent.annual.image",
          ),
        },
      },
    },
    {
      itemContent: {
        title: t("listTablePrice.3.items.1.subHeader.2.title"),
        development: {
          value: t(
            "listTablePrice.3.items.1.subHeader.2.itemContent.development.value",
          ),
          image: t(
            "listTablePrice.3.items.1.subHeader.2.itemContent.development.image",
          ),
        },
        managingTrading: {
          value: t(
            "listTablePrice.3.items.1.subHeader.2.itemContent.managingTrading.value",
          ),
          image: t(
            "listTablePrice.3.items.1.subHeader.2.itemContent.managingTrading.image",
          ),
        },
        managing: {
          value: t(
            "listTablePrice.3.items.1.subHeader.2.itemContent.managing.value",
          ),
          image: t(
            "listTablePrice.3.items.1.subHeader.2.itemContent.managing.image",
          ),
        },
        custom: {
          value: t(
            "listTablePrice.3.items.1.subHeader.2.itemContent.custom.value",
          ),
          image: t(
            "listTablePrice.3.items.1.subHeader.2.itemContent.custom.image",
          ),
        },
        product: {
          value: t(
            "listTablePrice.3.items.1.subHeader.2.itemContent.product.value",
          ),
          image: t(
            "listTablePrice.3.items.1.subHeader.2.itemContent.product.image",
          ),
        },
        annual: {
          value: t(
            "listTablePrice.3.items.1.subHeader.2.itemContent.annual.value",
          ),
          image: t(
            "listTablePrice.3.items.1.subHeader.2.itemContent.annual.image",
          ),
        },
      },
    },
  ];

  const listCrawler = [
    {
      itemContent: {
        title: t("listTablePrice.3.items.2.subHeader.0.title"),
        valueCommon: t("listTablePrice.3.items.2.subHeader.0.valueCommon"),
        mercari: {
          value: t(
            "listTablePrice.3.items.2.subHeader.0.itemContent.mercari.value",
          ),
          image: t(
            "listTablePrice.3.items.2.subHeader.0.itemContent.mercari.image",
          ),
        },
        yahoo: {
          value: t(
            "listTablePrice.3.items.2.subHeader.0.itemContent.yahoo.value",
          ),
          image: t(
            "listTablePrice.3.items.2.subHeader.0.itemContent.yahoo.image",
          ),
        },
        amazon: {
          value: t(
            "listTablePrice.3.items.2.subHeader.0.itemContent.amazon.value",
          ),
          image: t(
            "listTablePrice.3.items.2.subHeader.0.itemContent.amazon.image",
          ),
        },
        ponpareMall: {
          value: t(
            "listTablePrice.3.items.2.subHeader.0.itemContent.ponpareMall.value",
          ),
          image: t(
            "listTablePrice.3.items.2.subHeader.0.itemContent.ponpareMall.image",
          ),
        },
        ebay: {
          value: t(
            "listTablePrice.3.items.2.subHeader.0.itemContent.ebay.value",
          ),
          image: t(
            "listTablePrice.3.items.2.subHeader.0.itemContent.ebay.image",
          ),
        },
        macy: {
          value: t(
            "listTablePrice.3.items.2.subHeader.0.itemContent.macy.value",
          ),
          image: t(
            "listTablePrice.3.items.2.subHeader.0.itemContent.macy.image",
          ),
        },
        gmarket: {
          value: t(
            "listTablePrice.3.items.2.subHeader.0.itemContent.gmarket.value",
          ),
          image: t(
            "listTablePrice.3.items.2.subHeader.0.itemContent.gmarket.image",
          ),
        },
        taobao: {
          value: t(
            "listTablePrice.3.items.2.subHeader.0.itemContent.taobao.value",
          ),
          image: t(
            "listTablePrice.3.items.2.subHeader.0.itemContent.taobao.image",
          ),
        },
      },
    },
    {
      itemContent: {
        title: t("listTablePrice.3.items.2.subHeader.1.title"),
        valueCommon: t("listTablePrice.3.items.2.subHeader.1.valueCommon"),
        mercari: {
          value: t(
            "listTablePrice.3.items.2.subHeader.1.itemContent.mercari.value",
          ),
          image: t(
            "listTablePrice.3.items.2.subHeader.1.itemContent.mercari.image",
          ),
        },
        yahoo: {
          value: t(
            "listTablePrice.3.items.2.subHeader.1.itemContent.yahoo.value",
          ),
          image: t(
            "listTablePrice.3.items.2.subHeader.1.itemContent.yahoo.image",
          ),
        },
        amazon: {
          value: t(
            "listTablePrice.3.items.2.subHeader.1.itemContent.amazon.value",
          ),
          image: t(
            "listTablePrice.3.items.2.subHeader.1.itemContent.amazon.image",
          ),
        },
        ponpareMall: {
          value: t(
            "listTablePrice.3.items.2.subHeader.1.itemContent.ponpareMall.value",
          ),
          image: t(
            "listTablePrice.3.items.2.subHeader.1.itemContent.ponpareMall.image",
          ),
        },
        ebay: {
          value: t(
            "listTablePrice.3.items.2.subHeader.1.itemContent.ebay.value",
          ),
          image: t(
            "listTablePrice.3.items.2.subHeader.1.itemContent.ebay.image",
          ),
        },
        macy: {
          value: t(
            "listTablePrice.3.items.2.subHeader.1.itemContent.macy.value",
          ),
          image: t(
            "listTablePrice.3.items.2.subHeader.1.itemContent.macy.image",
          ),
        },
        gmarket: {
          value: t(
            "listTablePrice.3.items.2.subHeader.1.itemContent.gmarket.value",
          ),
          image: t(
            "listTablePrice.3.items.2.subHeader.1.itemContent.gmarket.image",
          ),
        },
        taobao: {
          value: t(
            "listTablePrice.3.items.2.subHeader.1.itemContent.taobao.value",
          ),
          image: t(
            "listTablePrice.3.items.2.subHeader.1.itemContent.taobao.image",
          ),
        },
      },
    },
    {
      itemContent: {
        title: t("listTablePrice.3.items.2.subHeader.2.title"),
        valueCommon: t("listTablePrice.3.items.2.subHeader.2.valueCommon"),
        mercari: {
          value: t(
            "listTablePrice.3.items.2.subHeader.2.itemContent.mercari.value",
          ),
          image: t(
            "listTablePrice.3.items.2.subHeader.2.itemContent.mercari.image",
          ),
        },
        yahoo: {
          value: t(
            "listTablePrice.3.items.2.subHeader.2.itemContent.yahoo.value",
          ),
          image: t(
            "listTablePrice.3.items.2.subHeader.2.itemContent.yahoo.image",
          ),
        },
        amazon: {
          value: t(
            "listTablePrice.3.items.2.subHeader.2.itemContent.amazon.value",
          ),
          image: t(
            "listTablePrice.3.items.2.subHeader.2.itemContent.amazon.image",
          ),
        },
        ponpareMall: {
          value: t(
            "listTablePrice.3.items.2.subHeader.2.itemContent.ponpareMall.value",
          ),
          image: t(
            "listTablePrice.3.items.2.subHeader.2.itemContent.ponpareMall.image",
          ),
        },
        ebay: {
          value: t(
            "listTablePrice.3.items.2.subHeader.2.itemContent.ebay.value",
          ),
          image: t(
            "listTablePrice.3.items.2.subHeader.2.itemContent.ebay.image",
          ),
        },
        macy: {
          value: t(
            "listTablePrice.3.items.2.subHeader.2.itemContent.macy.value",
          ),
          image: t(
            "listTablePrice.3.items.2.subHeader.2.itemContent.macy.image",
          ),
        },
        gmarket: {
          value: t(
            "listTablePrice.3.items.2.subHeader.2.itemContent.gmarket.value",
          ),
          image: t(
            "listTablePrice.3.items.2.subHeader.2.itemContent.gmarket.image",
          ),
        },
        taobao: {
          value: t(
            "listTablePrice.3.items.2.subHeader.2.itemContent.taobao.value",
          ),
          image: t(
            "listTablePrice.3.items.2.subHeader.2.itemContent.taobao.image",
          ),
        },
      },
    },
  ];

  const listNote = [
    {
      itemContent: {
        title: t("listTablePrice.3.items.3.subHeader.0.title"),
        monthly: {
          value: t(
            "listTablePrice.3.items.3.subHeader.0.itemContent.monthly.value",
          ),
          image: t(
            "listTablePrice.3.items.3.subHeader.0.itemContent.monthly.image",
          ),
        },
        annual: {
          value: t(
            "listTablePrice.3.items.3.subHeader.0.itemContent.annual.value",
          ),
          image: t(
            "listTablePrice.3.items.3.subHeader.0.itemContent.annual.image",
          ),
        },
        auctionManagement: {
          value: t(
            "listTablePrice.3.items.3.subHeader.0.itemContent.auctionManagement.value",
          ),
          image: t(
            "listTablePrice.3.items.3.subHeader.0.itemContent.auctionManagement.image",
          ),
        },
        auctionOrderManagement: {
          value: t(
            "listTablePrice.3.items.3.subHeader.0.itemContent.auctionOrderManagement.value",
          ),
          image: t(
            "listTablePrice.3.items.3.subHeader.0.itemContent.auctionOrderManagement.image",
          ),
        },
      },
    },
    {
      itemContent: {
        title: t("listTablePrice.3.items.3.subHeader.1.title"),
        monthly: {
          value: t(
            "listTablePrice.3.items.3.subHeader.1.itemContent.monthly.value",
          ),
          image: t(
            "listTablePrice.3.items.3.subHeader.1.itemContent.monthly.image",
          ),
        },
        annual: {
          value: t(
            "listTablePrice.3.items.3.subHeader.1.itemContent.annual.value",
          ),
          image: t(
            "listTablePrice.3.items.3.subHeader.1.itemContent.annual.image",
          ),
        },
        auctionManagement: {
          value: t(
            "listTablePrice.3.items.3.subHeader.1.itemContent.auctionManagement.value",
          ),
          image: t(
            "listTablePrice.3.items.3.subHeader.1.itemContent.auctionManagement.image",
          ),
        },
        auctionOrderManagement: {
          value: t(
            "listTablePrice.3.items.3.subHeader.1.itemContent.auctionOrderManagement.value",
          ),
          image: t(
            "listTablePrice.3.items.3.subHeader.1.itemContent.auctionOrderManagement.image",
          ),
        },
      },
    },
    {
      itemContent: {
        title: t("listTablePrice.3.items.3.subHeader.2.title"),
        monthly: {
          value: t(
            "listTablePrice.3.items.3.subHeader.2.itemContent.monthly.value",
          ),
          image: t(
            "listTablePrice.3.items.3.subHeader.2.itemContent.monthly.image",
          ),
        },
        annual: {
          value: t(
            "listTablePrice.3.items.3.subHeader.2.itemContent.annual.value",
          ),
          image: t(
            "listTablePrice.3.items.3.subHeader.2.itemContent.annual.image",
          ),
        },
        auctionManagement: {
          value: t(
            "listTablePrice.3.items.3.subHeader.2.itemContent.auctionManagement.value",
          ),
          image: t(
            "listTablePrice.3.items.3.subHeader.2.itemContent.auctionManagement.image",
          ),
        },
        auctionOrderManagement: {
          value: t(
            "listTablePrice.3.items.3.subHeader.2.itemContent.auctionOrderManagement.value",
          ),
          image: t(
            "listTablePrice.3.items.3.subHeader.2.itemContent.auctionOrderManagement.image",
          ),
        },
      },
    },
  ];

  const [item, setItemActive] = useState(listItem[0]);
  const [itemMB, setItemActiveMB] = useState(listMobile[0]);
  const [itemCrawler, setItemActiveCrawler] = useState(listCrawler[0]);
  const [itemNote, setItemActiveNote] = useState(listNote[0]);
  return (
    <div className="tw-grid tw-gap-6">
      <div>
        <div className="tw-sticky tw-z-1 tw-top-[120px] md:tw-top-[140px] tw-bg-white tw-w-full tw-py-1">
          <h2 className="tw-text-xl tw-font-bold">
            {t("listTablePrice.3.items.0.title")}
          </h2>
        </div>
        <div className="tw-grid tw-grid-cols-3 tw-gap-3 tw-py-2 tw-sticky tw-top-[162px] md:tw-top-[180px] tw-bg-white tw-px-4">
          {listItem.map((value: any, index: number) => (
            <div
              onClick={() => setItemActive(value)}
              key={index}
              className={clsx(
                index === 0
                  ? "tw-bg-green-1 tw-border-green-2"
                  : "tw-bg-blue-1 tw-border-blue-2",
                value?.itemContent?.title === item?.itemContent.title
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
                {value?.itemContent?.title}
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
          <div className="tw-font-medium tw-text-brand-secondary tw-mt-4">
            {t("listTablePrice.3.items.0.titleLeft.buildingWebsite")}
          </div>
          <div className="tw-py-2 tw-grid tw-grid-cols-2 tw-text-sm tw-border-b-2 tw-items-center">
            <p className="tw-font-medium tw-mb-0">
              {t("listTablePrice.3.items.0.functions.usingFree.title")}
            </p>
            <div className="tw-text-center">
              {item?.itemContent?.usingFree?.value != "" &&
                item?.itemContent?.usingFree?.value}
              {item?.itemContent?.usingFree?.image != "" && (
                <Image
                  src={item?.itemContent?.usingFree?.image}
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
              {t("listTablePrice.3.items.0.functions.usingPro.title")}
            </p>
            <div className="tw-text-center">
              {item?.itemContent?.usingPro?.value != "" &&
                item?.itemContent?.usingPro?.value}
              {item?.itemContent?.usingPro?.image != "" && (
                <Image
                  src={item?.itemContent?.usingPro?.image}
                  width={24}
                  height={24}
                  alt=""
                  className={clsx("tw-mx-auto")}
                />
              )}
            </div>
          </div>
          <div className="tw-py-2 tw-grid tw-grid-cols-2 tw-text-sm tw-border-b-2 tw-items-center">
            <div className="tw-font-medium tw-text-brand-secondary tw-mt-4">
              {t("listTablePrice.3.items.0.titleLeft.landingPage")}
            </div>
            <div className="tw-text-center">
              {item?.itemContent?.landingPage?.value != "" &&
                item?.itemContent?.landingPage?.value}
              {item?.itemContent?.landingPage?.image != "" && (
                <Image
                  src={item?.itemContent?.landingPage?.image}
                  width={24}
                  height={24}
                  alt=""
                  className={clsx("tw-mx-auto")}
                />
              )}
            </div>
          </div>
          <div className="tw-py-2 tw-grid tw-grid-cols-2 tw-text-sm tw-border-b-2 tw-items-center">
            <div className="tw-font-medium tw-text-brand-secondary tw-mt-4">
              {t("listTablePrice.3.items.0.titleLeft.annual")}
            </div>
            <div className="tw-text-center">
              {item?.itemContent?.annual?.value != "" &&
                item?.itemContent?.annual?.value}
              {item?.itemContent?.annual?.image != "" && (
                <Image
                  src={item?.itemContent?.annual?.image}
                  width={24}
                  height={24}
                  alt=""
                  className={clsx("tw-mx-auto")}
                />
              )}
            </div>
          </div>
          <div className="tw-py-2 tw-grid tw-grid-cols-2 tw-text-sm tw-border-b-2 tw-items-center">
            <div className="tw-font-medium tw-text-brand-secondary tw-mt-4">
              {t("listTablePrice.3.items.0.titleLeft.managing")}
            </div>
            <div className="tw-text-center">
              <div className="tw-py-2 tw-border-b-2">
                {item?.itemContent?.managingTrading?.value != "" &&
                  item?.itemContent?.managingTrading?.value}
                {item?.itemContent?.managingTrading?.image != "" && (
                  <Image
                    src={item?.itemContent?.managingTrading?.image}
                    width={24}
                    height={24}
                    alt=""
                    className={clsx("tw-mx-auto")}
                  />
                )}
              </div>
              <div className="tw-py-2">
                {item?.itemContent?.managing?.value &&
                  item?.itemContent?.managing?.value}
                {item?.itemContent?.managing?.valueList &&
                  item?.itemContent?.managing?.valueList.map(
                    (item: any, idx: number) => <div key={idx}>{item}</div>,
                  )}
                {item?.itemContent?.managing?.image != "" && (
                  <Image
                    src={item?.itemContent?.managing?.image}
                    width={24}
                    height={24}
                    alt=""
                    className={clsx("tw-mx-auto")}
                  />
                )}
              </div>
            </div>
          </div>
          <div className="tw-py-2 tw-grid tw-grid-cols-2 tw-text-sm tw-border-b-2 tw-items-center">
            <div className="tw-font-medium tw-text-brand-secondary tw-mt-4">
              {t("listTablePrice.3.items.0.titleLeft.custom")}
            </div>
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
          <div className="tw-py-2 tw-grid tw-grid-cols-2 tw-text-sm tw-border-b-2 tw-items-center">
            <div className="tw-font-medium tw-text-brand-secondary tw-mt-4">
              {t("listTablePrice.3.items.0.titleLeft.product")}
            </div>
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
          <div className="tw-py-2 tw-grid tw-grid-cols-2 tw-text-sm tw-items-center">
            <div className="tw-font-medium tw-text-brand-secondary tw-mt-4">
              {t("listTablePrice.3.items.0.titleLeft.additionalServices")}
            </div>
            <div className="tw-text-center">
              {item?.itemContent?.additional?.value != "" &&
                item?.itemContent?.additional?.value}
              {item?.itemContent?.additional?.image != "" && (
                <Image
                  src={item?.itemContent?.additional?.image}
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

      <div>
        <div className="tw-sticky tw-z-1 tw-top-[120px] md:tw-top-[140px] tw-bg-white tw-w-full tw-py-1">
          <h2 className="tw-text-xl tw-font-bold">
            {t("listTablePrice.3.items.1.title")}
          </h2>
        </div>
        <div className="tw-grid tw-grid-cols-3 tw-gap-3 tw-py-2 tw-sticky tw-top-[162px] md:tw-top-[180px] tw-bg-white tw-px-4">
          {listMobile.map((value: any, index: number) => (
            <div
              onClick={() => setItemActiveMB(value)}
              key={index}
              className={clsx(
                index === 0
                  ? "tw-bg-green-1 tw-border-green-2"
                  : "tw-bg-blue-1 tw-border-blue-2",
                value?.itemContent?.title === itemMB?.itemContent.title
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
                {value?.itemContent?.title}
              </div>
            </div>
          ))}
        </div>
        <div className="tw-mt-5 tw-rounded-lg tw-shadow-[0px_0px_20px_0px_rgba(0,_0,_0,_0.11)] tw-p-3 tw-mx-4 lg:tw-mx-0 ">
          <div className="tw-flex tw-justify-between tw-items-center">
            <span className="tw-text-base tw-font-bold tw-text-[#00194F]">
              {itemMB?.itemContent?.title}
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
            <div className="tw-font-medium tw-text-brand-secondary tw-mt-4">
              {t("listTablePrice.3.items.1.titleLeft.development")}
            </div>
            <div className="tw-text-center">
              {itemMB?.itemContent?.development?.value != "" &&
                itemMB?.itemContent?.development?.value}
              {itemMB?.itemContent?.development?.image != "" && (
                <Image
                  src={itemMB?.itemContent?.development?.image}
                  width={24}
                  height={24}
                  alt=""
                  className={clsx("tw-mx-auto")}
                />
              )}
            </div>
          </div>
          <div className="tw-py-2 tw-grid tw-grid-cols-2 tw-text-sm tw-border-b-2 tw-items-center">
            <div className="tw-font-medium tw-text-brand-secondary tw-mt-4">
              {t("listTablePrice.3.items.1.titleLeft.development")}
            </div>
            <div className="tw-text-center">
              {itemMB?.itemContent?.development?.value != "" &&
                itemMB?.itemContent?.development?.value}
              {itemMB?.itemContent?.development?.image != "" && (
                <Image
                  src={itemMB?.itemContent?.development?.image}
                  width={24}
                  height={24}
                  alt=""
                  className={clsx("tw-mx-auto")}
                />
              )}
            </div>
          </div>
          <div className="tw-py-2 tw-grid tw-grid-cols-2 tw-text-sm tw-border-b-2 tw-items-center">
            <div className="tw-font-medium tw-text-brand-secondary tw-mt-4">
              {t("listTablePrice.3.items.0.titleLeft.managing")}
            </div>
            <div className="tw-text-center">
              <div className="tw-py-2 tw-border-b-2">
                {itemMB?.itemContent?.managingTrading?.value != "" &&
                  itemMB?.itemContent?.managingTrading?.value}
                {itemMB?.itemContent?.managingTrading?.image != "" && (
                  <Image
                    src={itemMB?.itemContent?.managingTrading?.image}
                    width={24}
                    height={24}
                    alt=""
                    className={clsx("tw-mx-auto")}
                  />
                )}
              </div>
              <div className="tw-py-2">
                {itemMB?.itemContent?.managing?.value &&
                  itemMB?.itemContent?.managing?.value}
                {itemMB?.itemContent?.managing?.valueList &&
                  itemMB?.itemContent?.managing?.valueList.map(
                    (item: any, idx: number) => <div key={idx}>{item}</div>,
                  )}
                {itemMB?.itemContent?.managing?.image != "" && (
                  <Image
                    src={itemMB?.itemContent?.managing?.image}
                    width={24}
                    height={24}
                    alt=""
                    className={clsx("tw-mx-auto")}
                  />
                )}
              </div>
            </div>
          </div>
          <div className="tw-py-2 tw-grid tw-grid-cols-2 tw-text-sm tw-border-b-2 tw-items-center">
            <div className="tw-font-medium tw-text-brand-secondary tw-mt-4">
              {t("listTablePrice.3.items.1.titleLeft.custom")}
            </div>
            <div className="tw-text-center">
              {itemMB?.itemContent?.custom?.value != "" &&
                itemMB?.itemContent?.custom?.value}
              {itemMB?.itemContent?.custom?.image != "" && (
                <Image
                  src={itemMB?.itemContent?.custom?.image}
                  width={24}
                  height={24}
                  alt=""
                  className={clsx("tw-mx-auto")}
                />
              )}
            </div>
          </div>
          <div className="tw-py-2 tw-grid tw-grid-cols-2 tw-text-sm tw-border-b-2 tw-items-center">
            <div className="tw-font-medium tw-text-brand-secondary tw-mt-4">
              {t("listTablePrice.3.items.1.titleLeft.product")}
            </div>
            <div className="tw-text-center">
              {itemMB?.itemContent?.product?.value != "" &&
                itemMB?.itemContent?.product?.value}
              {itemMB?.itemContent?.product?.image != "" && (
                <Image
                  src={itemMB?.itemContent?.product?.image}
                  width={24}
                  height={24}
                  alt=""
                  className={clsx("tw-mx-auto")}
                />
              )}
            </div>
          </div>
          <div className="tw-py-2 tw-grid tw-grid-cols-2 tw-text-sm tw-items-center">
            <div className="tw-font-medium tw-text-brand-secondary tw-mt-4">
              {t("listTablePrice.3.items.1.titleLeft.annual")}
            </div>
            <div className="tw-text-center">
              {itemMB?.itemContent?.annual?.value != "" &&
                itemMB?.itemContent?.annual?.value}
              {itemMB?.itemContent?.annual?.image != "" && (
                <Image
                  src={itemMB?.itemContent?.annual?.image}
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

      <div>
        <div className="tw-sticky tw-z-1 tw-top-[120px] md:tw-top-[140px] tw-bg-white tw-w-full tw-py-1">
          <h2 className="tw-text-xl tw-font-bold">
            {t("listTablePrice.3.items.2.title")}
          </h2>
        </div>
        <div className="tw-grid tw-grid-cols-3 tw-gap-3 tw-py-2 tw-sticky tw-top-[162px] md:tw-top-[180px] tw-bg-white tw-px-4">
          {listCrawler.map((value: any, index: number) => (
            <div
              onClick={() => setItemActiveCrawler(value)}
              key={index}
              className={clsx(
                index === 0
                  ? "tw-bg-green-1 tw-border-green-2"
                  : "tw-bg-blue-1 tw-border-blue-2",
                value?.itemContent?.title === item?.itemContent.title
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
                {value?.itemContent?.title}
              </div>
            </div>
          ))}
        </div>
        <div className="tw-mt-5 tw-rounded-lg tw-shadow-[0px_0px_20px_0px_rgba(0,_0,_0,_0.11)] tw-p-3 tw-mx-4 lg:tw-mx-0 ">
          <div className="tw-flex tw-justify-between tw-items-center">
            <span className="tw-text-base tw-font-bold tw-text-[#00194F]">
              {itemCrawler?.itemContent?.title}
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
          <div className="tw-font-medium tw-text-brand-secondary tw-mt-4">
            {t("listTablePrice.3.items.2.titleLeft.japan")}
          </div>
          <div className="tw-py-2 tw-grid tw-grid-cols-2 tw-text-sm tw-border-b-2 tw-items-center">
            <p className="tw-font-medium tw-mb-0">
              {t("listTablePrice.3.items.2.functions.mercari.title")}
            </p>
            <div className="tw-text-center">
              {itemCrawler?.itemContent?.mercari?.value != "" &&
                itemCrawler?.itemContent?.mercari?.value}
              {itemCrawler?.itemContent?.mercari?.image != "" && (
                <Image
                  src={itemCrawler?.itemContent?.mercari?.image}
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
              {t("listTablePrice.3.items.2.functions.yahoo.title")}
            </p>
            <div className="tw-text-center">
              {itemCrawler?.itemContent?.yahoo?.value != "" &&
                itemCrawler?.itemContent?.yahoo?.value}
              {itemCrawler?.itemContent?.yahoo?.image != "" && (
                <Image
                  src={itemCrawler?.itemContent?.yahoo?.image}
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
              {t("listTablePrice.3.items.2.functions.amazon.title")}
            </p>
            <div className="tw-text-center">
              {itemCrawler?.itemContent?.amazon?.value != "" &&
                itemCrawler?.itemContent?.amazon?.value}
              {itemCrawler?.itemContent?.amazon?.image != "" && (
                <Image
                  src={itemCrawler?.itemContent?.amazon?.image}
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
              {t("listTablePrice.3.items.2.functions.ponpareMall.title")}
            </p>
            <div className="tw-text-center">
              {itemCrawler?.itemContent?.ponpareMall?.value != "" &&
                itemCrawler?.itemContent?.ponpareMall?.value}
              {itemCrawler?.itemContent?.ponpareMall?.image != "" && (
                <Image
                  src={itemCrawler?.itemContent?.ponpareMall?.image}
                  width={24}
                  height={24}
                  alt=""
                  className={clsx("tw-mx-auto")}
                />
              )}
            </div>
          </div>
          <div className="tw-font-medium tw-text-brand-secondary tw-mt-4">
            {t("listTablePrice.3.items.2.titleLeft.us")}
          </div>
          <div className="tw-py-2 tw-grid tw-grid-cols-2 tw-text-sm tw-border-b-2 tw-items-center">
            <p className="tw-font-medium tw-mb-0">
              {t("listTablePrice.3.items.2.functions.ebay.title")}
            </p>
            <div className="tw-text-center">
              {itemCrawler?.itemContent?.ebay?.value != "" &&
                itemCrawler?.itemContent?.ebay?.value}
              {itemCrawler?.itemContent?.ebay?.image != "" && (
                <Image
                  src={itemCrawler?.itemContent?.ebay?.image}
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
              {t("listTablePrice.3.items.2.functions.macy.title")}
            </p>
            <div className="tw-text-center">
              {itemCrawler?.itemContent?.macy?.value != "" &&
                itemCrawler?.itemContent?.macy?.value}
              {itemCrawler?.itemContent?.macy?.image != "" && (
                <Image
                  src={itemCrawler?.itemContent?.macy?.image}
                  width={24}
                  height={24}
                  alt=""
                  className={clsx("tw-mx-auto")}
                />
              )}
            </div>
          </div>
          <div className="tw-font-medium tw-text-brand-secondary tw-mt-4">
            {t("listTablePrice.3.items.2.titleLeft.korea")}
          </div>
          <div className="tw-py-2 tw-grid tw-grid-cols-2 tw-text-sm tw-border-b-2 tw-items-center">
            <p className="tw-font-medium tw-mb-0">
              {t("listTablePrice.3.items.2.functions.gmarket.title")}
            </p>
            <div className="tw-text-center">
              {itemCrawler?.itemContent?.gmarket?.value != "" &&
                itemCrawler?.itemContent?.gmarket?.value}
              {itemCrawler?.itemContent?.gmarket?.image != "" && (
                <Image
                  src={itemCrawler?.itemContent?.gmarket?.image}
                  width={24}
                  height={24}
                  alt=""
                  className={clsx("tw-mx-auto")}
                />
              )}
            </div>
          </div>
          <div className="tw-font-medium tw-text-brand-secondary tw-mt-4">
            {t("listTablePrice.3.items.2.titleLeft.china")}
          </div>
          <div className="tw-py-2 tw-grid tw-grid-cols-2 tw-text-sm tw-items-center">
            <p className="tw-font-medium tw-mb-0">
              {t("listTablePrice.3.items.2.functions.taobao.title")}
            </p>
            <div className="tw-text-center">
              {itemCrawler?.itemContent?.taobao?.value != "" &&
                itemCrawler?.itemContent?.taobao?.value}
              {itemCrawler?.itemContent?.taobao?.image != "" && (
                <Image
                  src={itemCrawler?.itemContent?.taobao?.image}
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

      <div>
        <div className="tw-sticky tw-z-1 tw-top-[120px] md:tw-top-[140px] tw-bg-white tw-w-full tw-py-1">
          <h2 className="tw-text-lg tw-italic">
            {t("listTablePrice.3.items.3.title")}
          </h2>
        </div>
        <div className="tw-grid tw-grid-cols-3 tw-gap-3 tw-py-2 tw-sticky tw-top-[165px] md:tw-top-[180px] tw-bg-white tw-px-4">
          {listNote.map((value: any, index: number) => (
            <div
              onClick={() => setItemActiveNote(value)}
              key={index}
              className={clsx(
                index === 0
                  ? "tw-bg-green-1 tw-border-green-2"
                  : "tw-bg-blue-1 tw-border-blue-2",
                value?.itemContent?.title === item?.itemContent.title
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
                {value?.itemContent?.title}
              </div>
            </div>
          ))}
        </div>
        <div className="tw-mt-5 tw-rounded-lg tw-shadow-[0px_0px_20px_0px_rgba(0,_0,_0,_0.11)] tw-p-3 tw-mx-4 lg:tw-mx-0 ">
          <div className="tw-flex tw-justify-between tw-items-center">
            <span className="tw-text-base tw-font-bold tw-text-[#00194F]">
              {itemNote?.itemContent?.title}
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
            <div className="tw-font-medium tw-text-brand-secondary tw-mt-4">
              {t("listTablePrice.3.items.3.titleLeft.monthly")}
            </div>
            <div className="tw-text-center">
              {itemNote?.itemContent?.monthly?.value != "" &&
                itemNote?.itemContent?.monthly?.value}
              {itemNote?.itemContent?.monthly?.image != "" && (
                <Image
                  src={itemNote?.itemContent?.monthly?.image}
                  width={24}
                  height={24}
                  alt=""
                  className={clsx("tw-mx-auto")}
                />
              )}
            </div>
          </div>
          <div className="tw-py-2 tw-grid tw-grid-cols-2 tw-text-sm tw-border-b-2 tw-items-center">
            <div className="tw-font-medium tw-text-brand-secondary tw-mt-4">
              {t("listTablePrice.3.items.3.titleLeft.annual")}
            </div>
            <div className="tw-text-center">
              {itemNote?.itemContent?.annual?.value != "" &&
                itemNote?.itemContent?.annual?.value}
              {itemNote?.itemContent?.annual?.image != "" && (
                <Image
                  src={itemNote?.itemContent?.annual?.image}
                  width={24}
                  height={24}
                  alt=""
                  className={clsx("tw-mx-auto")}
                />
              )}
            </div>
          </div>
          <div className="tw-py-2 tw-grid tw-grid-cols-2 tw-text-sm tw-border-b-2 tw-items-center">
            <div className="tw-font-medium tw-text-brand-secondary tw-mt-4">
              {t("listTablePrice.3.items.3.titleLeft.auctionManagement")}
            </div>
            <div className="tw-text-center">
              {itemNote?.itemContent?.auctionManagement?.value != "" &&
                itemNote?.itemContent?.auctionManagement?.value}
              {itemNote?.itemContent?.auctionManagement?.image != "" && (
                <Image
                  src={itemNote?.itemContent?.auctionManagement?.image}
                  width={24}
                  height={24}
                  alt=""
                  className={clsx("tw-mx-auto")}
                />
              )}
            </div>
          </div>
          <div className="tw-py-2 tw-grid tw-grid-cols-2 tw-text-sm tw-items-center">
            <div className="tw-font-medium tw-text-brand-secondary tw-mt-4">
              {t("listTablePrice.3.items.3.titleLeft.auctionOrderManagement")}
            </div>
            <div className="tw-text-center">
              {itemNote?.itemContent?.auctionOrderManagement?.value != "" &&
                itemNote?.itemContent?.auctionOrderManagement?.value}
              {itemNote?.itemContent?.auctionOrderManagement?.image != "" && (
                <Image
                  src={itemNote?.itemContent?.auctionOrderManagement?.image}
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
    </div>
  );
};
export default TableMobile;
