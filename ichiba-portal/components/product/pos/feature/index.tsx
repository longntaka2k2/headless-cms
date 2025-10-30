import BannerPOS from "./BannerPOS";
import CustomerManagement from "./CustomerManagement";
import DailySales from "./DailySales";
import Effortless from "./Effortless";
import EmployeeManagement from "./EmployeeManagement";
import FAQCPN from "./FAQ";
import InventoryManagement from "./InventoryManagement";
import OfflineSelling from "./OfflineSelling";
import Physical from "./Physical";
import ReturnManagement from "./ReturnManagement";
import SelleBetter from "./SellBetter";
import Supported from "./Supported";

const POSFeaturesCPN = () => {
  return (
    <div>
      <BannerPOS />
      <Supported />
      <Effortless />
      <CustomerManagement />
      <OfflineSelling />
      <div className="container tw-flex tw-flex-col lg:tw-flex-row tw-items-center lg:tw-justify-between">
        <div className="lg:tw-w-[40%]">
          <InventoryManagement />
        </div>
        <div className="lg:tw-w-[55%]">
          <Physical />
        </div>
      </div>
      <ReturnManagement />
      <EmployeeManagement />
      <DailySales />
      <SelleBetter />
      <FAQCPN />
    </div>
  );
};

export default POSFeaturesCPN;
