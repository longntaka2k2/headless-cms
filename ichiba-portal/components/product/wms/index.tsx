import React from "react";
import HeaderWMS from "./header";
import BannerWMS from "./Banner";
import Automated from "./Automated";
import Suitability from "./suitability";
import SystemIntegration from "./SystemIntegration";
import Technology from "./Technology";
import YourWarehouse from "./your-warehouse";
import Contact from "./Contact";
import SuccessSpotlights from "./success-spotlights";
import TheBenefits from "./TheBenefits";
import Discover from "./Discover";

const WMSComponent = () => {
  return (
    <React.Fragment>
      <HeaderWMS />
      <BannerWMS />
      <Automated />
      <YourWarehouse />
      <SystemIntegration />
      <Suitability />
      <Technology />
      {/* <SuccessSpotlights /> */}
      <TheBenefits />
      <Contact />
      <Discover />
    </React.Fragment>
  );
};

export default WMSComponent;
