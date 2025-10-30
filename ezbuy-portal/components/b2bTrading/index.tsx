"use client";
import React from "react";
import B2bTradingHeader from "./Header";
import { B2bTradingContext } from "./context";
import WhyChoose from "./WhyChoose";
import FeaturesOfService from "./FeaturesOfService";
import KeyFigures from "./KeyFigures";
import Partners from "./Partners";
import ProductCategories from "./ProductCategories";

interface B2bTradingViewProps {
  lang: any;
}

const B2bTradingView: React.FC<B2bTradingViewProps> = ({ lang }) => {
  return (
    <B2bTradingContext.Provider value={{ lang }}>
      <div className="flex flex-col gap-12 text-sm md:text-base text-gray-10">
        <B2bTradingHeader />
        <WhyChoose />
        <KeyFigures />
        <FeaturesOfService />
        <Partners />
        <ProductCategories />
      </div>
    </B2bTradingContext.Provider>
  );
};

export default B2bTradingView;
