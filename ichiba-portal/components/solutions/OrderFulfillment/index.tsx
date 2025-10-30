import React from "react";
import Header from "./header";
import Introduce from "./introduce";
import MoreThanSection from "./more-than-section";
import FulfillmentNetwork from "./fulfillment-network";
import GetInTouch from "./get-in-touch";
import Integrations from "./integrations";
import Statistical from "./statistical";
import HowItWorks from "./how-it-works";
import FulfillmentCapability from "./fulfillment-capability";
import WhyChoose from "./why-choose";
import GetSupport from "./get-support";

const OrderFulfillmentView = () => {
  return (
    <div className="tw-flex tw-flex-col tw-text-sm lg:tw-text-base tw-text-ic-ink-6">
      <Header />
      <Introduce />
      <Statistical />
      <WhyChoose />
      <HowItWorks />
      <FulfillmentCapability />
      <FulfillmentNetwork />
      <Integrations />
      <MoreThanSection />
      <GetSupport />
      <GetInTouch />
    </div>
  );
};

export default OrderFulfillmentView;
