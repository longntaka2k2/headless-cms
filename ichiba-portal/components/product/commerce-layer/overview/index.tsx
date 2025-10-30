import React from "react";
import HeaderCommerceLayer from "../header";
import BannerCommerce from "./Banner";
import MasterOmniChannel from "./MasterOmniChannel";
import MultiChannel from "./MultiChannel";
import BuildStoreFront from "./BuildStoreFront";
import SystemIntegration from "./SystemIntegration";
import Suitability from "./Suitability";
import HowWorks from "./how-works/Index";
import VoicesOfSuccess from "./voices-of-success";
import Contact from "./Contact";
import TryIChibaCommerceLayer from "./TryIChibaCommerceLayer";

const CommerceLayerOverview = () => {
  return (
    <React.Fragment>
      <HeaderCommerceLayer />
      <BannerCommerce />
      <MasterOmniChannel />
      <MultiChannel />
      <BuildStoreFront />
      <SystemIntegration />
      <Suitability />
      <HowWorks />
      {/* <VoicesOfSuccess /> */}
      <Contact />
      <TryIChibaCommerceLayer />
    </React.Fragment>
  );
};

export default CommerceLayerOverview;
