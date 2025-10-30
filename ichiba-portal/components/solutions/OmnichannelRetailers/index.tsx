import React from "react";
import Header from "./Header";
import Introduce from "./Introduce";
import TopBarriers from "./TopBarriers";
import Insights from "./Insights";
import MultipleChannels from "./MultipleChannels";
import TrustedPartner from "./TrustedPartner";
import MadeForScale from "./MadeForScale";
import EraseOmnichannelBarriers from "./EraseOmnichannelBarriers";
import CustomerStories from "./CustomerStories";

const OmnichannelRetailersView = ({ posts }: { posts: any }) => {
  return (
    <div className="tw-flex tw-flex-col tw-text-sm lg:tw-text-base tw-text-ic-ink-6">
      <Header />
      <Introduce />
      <TopBarriers />
      <EraseOmnichannelBarriers />
      <TrustedPartner />
      <CustomerStories />
      <MultipleChannels />
      <Insights posts={posts} />
      <MadeForScale />
    </div>
  );
};

export default OmnichannelRetailersView;
