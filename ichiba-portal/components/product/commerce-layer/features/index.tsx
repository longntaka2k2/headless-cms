import React from "react";
import HeaderCommerceLayer from "../header";
import HeroSection from "./HeroSection";
import ManageOrders from "./manage-orders";
import ProductInformation from "./product-information";
import DataCrawler from "./DataCrawler";
import PointOfSale from "./PointOfSale";
import Contact from "./Contact";

const CommerceLayerFeatures = () => {
  return (
    <React.Fragment>
      <HeaderCommerceLayer />
      <HeroSection />
      <ManageOrders />
      <ProductInformation />
      <DataCrawler />
      <PointOfSale />
      <Contact />
    </React.Fragment>
  );
};

export default CommerceLayerFeatures;
