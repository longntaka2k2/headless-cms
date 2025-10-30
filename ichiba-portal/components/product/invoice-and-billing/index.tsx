import React from "react";
import HeaderInvoiceSelling from "./Header";
import Banner from "./Banner";
import Overview from "./Overview";
import SmartInvoicing from "./smart-invoicing/index";
import Flexible from "./Flexible";
import GetStarted from "./GetStarted";
import CustomerStorie from "./CustomerStorie";

const InvoiceBillingComponent = () => {
  return (
    <React.Fragment>
      <HeaderInvoiceSelling />
      <Banner />
      <Overview />
      <SmartInvoicing />
      <Flexible />
      {/* <CustomerStorie /> */}
      <GetStarted />
    </React.Fragment>
  );
};

export default InvoiceBillingComponent;
