import Group from "react-select/dist/declarations/src/components/Group";
import According from "./according";
import BannerSelling from "./banner";
import GoOmnichannel from "./go-omnichannel";
import HowDo from "./how-do";
import Insight from "./insight";
import IntegrationCapability from "./integration";
import Omnichannel from "./omnichannel";
import Troubles from "./troubles";
import WhatOur from "./what-our";
import WhatAre from "./whatAre";
import Grow from "./grow";
import FAQ from "./faq";

const OmnichannelSellingCpn = () => {
  return (
    <div>
      <BannerSelling />
      <According />
      <Troubles/>
      <HowDo />
      <Omnichannel />
      <IntegrationCapability />
      <WhatOur />
      <GoOmnichannel />
      <WhatAre />
      <Insight />
      <Grow/>
      <FAQ />
    </div>
  );
};

export default OmnichannelSellingCpn;
