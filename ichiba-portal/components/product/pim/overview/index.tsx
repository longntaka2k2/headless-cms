import React from "react";
import PimSummary from "./summary";
import KeyBenefits from "./key-benefits";
import IntegrationAndPartnership from "./integration-and-partnership";
import HowItWorks from "./how-it-works";
import SellingMore from "./selling-more";
import HeaderPim from "../components/header";
import PimSupport from "./pim-support";

const PimOverview = () => {
  return (
    <React.Fragment>
      <HeaderPim />
      <PimSummary />
      <KeyBenefits />
      <HowItWorks />
      <IntegrationAndPartnership />
      <PimSupport />
      <SellingMore />
    </React.Fragment>
  );
};

export default PimOverview;
