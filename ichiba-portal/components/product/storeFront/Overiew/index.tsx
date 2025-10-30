import { useTranslation } from "next-i18next";
import HeaderStoreFront from "../header";
import BannerStoreFront from "./banner";
import Tailored from "./tailored";
import BuildStoreFront from "./buildStoreFront";
import CreateLandingPage from "./createLanding";
import PreDesign from "./preDesign";
import WhyShould from "./whyshould";
import Suiability from "./suitability";
import News from "./new";
import DontKnow from "./dontKnow";

const StoreFrontOverview = () => {
  return (
    <div>
      <HeaderStoreFront />
      <BannerStoreFront />
      <Tailored />
      <BuildStoreFront />
      <CreateLandingPage />
      <PreDesign />
      <WhyShould />
      <Suiability />
      <News />
      <DontKnow />
    </div>
  );
};
export default StoreFrontOverview;
