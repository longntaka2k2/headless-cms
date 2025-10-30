import React from "react";
import HeaderCrawler from "../header";
import Banner from "./Banner";
import YourOwn from "./YourOwn";
import EcommerceSites from "./EcommerceSites";
import Empower from "./empower";
import IChibaStoreFront from "./IChibaStoreFront";
import OmnichannelSelling from "./OmnichannelSelling";
import UseCases from "./use-cases";
import Contact from "./Contact";
import CaseStudies from "./case-studies";

const CrawlerOverview = () => {
  return (
    <React.Fragment>
      <HeaderCrawler />
      <Banner />
      <YourOwn />
      <EcommerceSites />
      <Empower />
      <IChibaStoreFront />
      <OmnichannelSelling />
      <div className="tw-bg-[url(https://cms-strapi.ichiba.net/uploads/Group_1171275987_113c230c06.svg)] tw-bg-cover">
        <UseCases />
        <CaseStudies />
      </div>
      <Contact />
    </React.Fragment>
  );
};
export default CrawlerOverview;
