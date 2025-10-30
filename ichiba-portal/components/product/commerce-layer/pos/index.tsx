import HeaderCommerceLayer from "../header";
import BannerPos from "./Banner";
import Compatible from "./Compatible";
import ExploreThePoin from "./ExploreThePoin";
import FromOnlineToOffline from "./FromOnlineToOffline";
import GetStarted from "./GetStarted";
import HowDoes from "./HowDoes";
import IchibaOnePOS from "./IchibaOne";
import POSBuyer from "./POSBuyer";
import POSIntegration from "./POSIntegration";
import POSShop from "./POSShop";
import PosForEmployee from "./POSTEmployee";
import Ultimate from "./TheUltimate";
import WhyChooseUs from "./WhyChooseUs";

const POSOverViewCPN = () => {
  return (
    <div>
      <HeaderCommerceLayer />
      <BannerPos />
      <IchibaOnePOS />
      <POSIntegration />
      <PosForEmployee />
      <POSShop />
      <POSBuyer />
      <Compatible />
      <HowDoes />
      <Ultimate />
      <GetStarted />
      <WhyChooseUs />
      <FromOnlineToOffline />
      <ExploreThePoin />
    </div>
  );
};

export default POSOverViewCPN;
