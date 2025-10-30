import APIsAndIntegrations from "./APIsAndIntegrations";
import BuildStoreFront from "./BuildStoreFront";
import DataCentralization from "./DataCentralization";
import FrequentlyAskedQuestions from "./FAq";
import IChibaOne from "./IChibaOne";
import Implement from "./Implement";
import ImproveSystem from "./ImproveSystem";
import IntegrateAndUtilize from "./IntegrateAndUtilize";
import MachArchitectture from "./MachArchitectture";
import PowerUp from "./PowerUp";
import ReimagineDDigital from "./ReimagineDigital";
import Scalability from "./Scalability";
import Security from "./Security";
import UpdatesAndMaintenance from "./UpdatesAndMaintenance";

const TechnicalTeamsCPN = () => {
  return (
    <div>
      <Implement />
      <PowerUp />
      <BuildStoreFront />
      <div className="tw-container tw-flex tw-flex-col lg:tw-flex-row tw-gap-6">
        <div className="lg:tw-w-[40%]">
          <MachArchitectture />
        </div>
        <div className="lg:tw-w-[60%] tw-grid tw-gap-6">
          <Scalability />
          <Security />
        </div>
      </div>
      <DataCentralization />
      <div className="tw-container tw-flex tw-flex-col lg:tw-flex-row tw-gap-6 lg:tw-gap-10 tw-mt-6 lg:tw-mt-10F">
        <div className="lg:tw-w-[60%]">
          <UpdatesAndMaintenance />
        </div>
        <div className="lg:tw-w-[40%]">
          <APIsAndIntegrations />
        </div>
      </div>
      <ImproveSystem />
      <IntegrateAndUtilize />
      <IChibaOne />
      <ReimagineDDigital />
      <FrequentlyAskedQuestions />
    </div>
  );
};

export default TechnicalTeamsCPN;
