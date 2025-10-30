import React from "react";
import Header from "./header";
import Introduce from "./introduce";
import SimplifyFulfillment from "./simplify-fulfillment";
import WhyChoose from "./why-choose";
import FulfillmentProficiency from "./fulfillment-proficiency";
import MultiChannelFulfillment from "./multi-channel-fulfillment";
import FulfillmentProcess from "./fulfillment-process";
import FocusYourSale from "./focus-your-sale";

const EcommerceFulfillmentView = () => {
  return (
    <div className="tw-flex tw-flex-col tw-text-sm lg:tw-text-base tw-text-ic-ink-6">
      <Header />
      <Introduce />
      <WhyChoose />
      <FocusYourSale />
      <FulfillmentProcess />
      <MultiChannelFulfillment />
      <FulfillmentProficiency />
      <SimplifyFulfillment />
    </div>
  );
};

export default EcommerceFulfillmentView;
