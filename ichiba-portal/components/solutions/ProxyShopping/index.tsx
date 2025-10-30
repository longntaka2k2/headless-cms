import Auction from "./Auction";
import BannerProxy from "./Banner";
import Challenges from "./Challenges";
import CustomerSay from "./CustomerSay";
import HowItWork from "./HowItWork";
import International from "./International";
import PaymentProcessing from "./PaymentProcessing";
import ProductPim from "./ProductPIM";
import Purchase from "./Purchase";
import Ready from "./Ready";
import Steamline from "./Steamline";
import WhatAre from "./WhatAre";
import WhatAreTheRight from "./WhatAreTheRight";

const ProxyShoppingCpn = () => {
  return (
    <div>
      <BannerProxy />
      <Challenges />
      <WhatAre />
      <Purchase />
      <Auction />
      <International />
      <ProductPim />
      <PaymentProcessing />
      <HowItWork />
      <Steamline />
      <CustomerSay />
      <WhatAreTheRight />
      <Ready />
    </div>
  );
};

export default ProxyShoppingCpn;
