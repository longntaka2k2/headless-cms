import React from "react";
import HeaderPim from "../components/header";
import Summary from "./summary";
import AnchorLinks from "./anchor-links";
import CategorizeProducts from "./categorize-products";
import CentralizedProductData from "./centralized-product-data";
import ProductDataSyndication from "./product-data-syndication";
import UnlimitedProductAttributes from "./unlimited-product-attributes";
import OmniChannelExperience from "./omni-channel-experience";
import DeepIntegration from "./deep-integration";
import SuccessStories from "./success-stories";
import SourceOfTrust from "./source-of-trust";
import FAQs from "./faqs";
import MultiWarehouseChannel from "./multi-warehouse-channel";
import RealtimeAnalyticsDashboards from "./realtime-analytics-dashboard";
import { useTranslation } from "next-i18next";

const PimFeatures = () => {
  const { t } = useTranslation("pim");

  return (
    <React.Fragment>
      <HeaderPim />
      <Summary />
      <AnchorLinks
        items={[
          { label: t("categorizeProducts"), href: "#categorize-products" },
          {
            label: t("centralizedProductData"),
            href: "#centralized-product-data",
          },
          {
            label: t("automaticDataEnrichment"),
            href: "#automatic-data-enrichment",
          },
          {
            label: t("multiMerchantManagement"),
            href: "#multi-merchant-management",
          },
          {
            label: t("productDataSyndication"),
            href: "#product-data-syndication",
          },
          {
            label: t("unlimitedProductAttributes"),
            href: "#unlimited-product-attributes",
          },
        ]}
      />
      <CategorizeProducts />
      <CentralizedProductData />
      {/* <ProductDataSyndication /> */}
      <div className="tw-relative">
        <UnlimitedProductAttributes />
        {/* <MultiWarehouseChannel />
        <RealtimeAnalyticsDashboards /> */}
      </div>
      <div className="container tw-overflow-auto">
        <div className="tw-overflow-auto tw-flex lg:tw-flex-col tw-w-max lg:tw-w-full tw-min-w-full  tw-py-6 lg:tw-py-15">
          <OmniChannelExperience />
          <DeepIntegration />
        </div>
      </div>
      <SuccessStories />
      <SourceOfTrust />
      <FAQs />
    </React.Fragment>
  );
};

export default PimFeatures;
