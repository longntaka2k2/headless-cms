"use client";
import React from "react";

import Anchors from "./Anchors";
import WhoAreWe from "./WhoAreWe";
import OurMission from "./OurMission";
import CoreValues from "./CoreValues";
import Statement from "./Statement";
import OurStrength from "./OurStrengths";
import OurWarehouse from "./OurWarehouse";
import OurLocation from "./OurLocations";
import TrustSecurity from "./TrustSecurity";

const Blocks = ({ lang }: any) => {
  return (
    <section className="flex flex-col lg:gap-15">
      <Anchors contents={lang.anchors} />
      <WhoAreWe lang={lang} />
      <OurMission lang={lang} />
      <CoreValues lang={lang} />
      <Statement lang={lang.statement} />
      <OurStrength lang={lang.ourStrengths} />
      <OurWarehouse lang={lang.ourWarehouse} />
      <OurLocation lang={lang.ourLocation} />
      <TrustSecurity lang={lang.trustSecurity} />
    </section>
  );
};
export default Blocks;
