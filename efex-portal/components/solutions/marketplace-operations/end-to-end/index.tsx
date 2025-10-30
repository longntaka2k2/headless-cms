import MarketplaceOperation from "./MarketplaceOperation";
import WarehouseFulfillment from "./WarehouseFulfillment";
import CrossBorderShipping from "./CrossBorderShipping";
import ManagementSoftware from "./ManagementSoftware";
import AnchorLinks from "./AnchorLinks";
import { removeAccent } from "@/utils/ultils";
const EndToEnd = ({ lang, params }: any) => {
  return (
    <div
      id="what-we-do"
      className="pt-6 lg:px-0 lg:pt-15 bg-[url('https://strapi-efex.ichiba.net/uploads/Vector_2_aca802fa57.svg')] bg-no-repeat bg-center bg-cover"
    >
      <div className="container lg:text-center px-4">
        <h2 className="lg:hidden font-bold text-xl mb-2">
          {lang.heading[0]}
          <span className="text-contact">{lang.heading[1]}</span>
        </h2>
        <h2 className="hidden lg:block font-bold text-4xl text-center mb-2">
          {lang.heading[0]} <br />
          <span className="text-contact">{lang.heading[1]}</span>
        </h2>
        <p className="text-base lg:text-lg">{lang.subHeading}</p>
      </div>
      <AnchorLinks
        items={[...lang.listLabel].map((x) => ({
          label: x,
          href: "#" + removeAccent(x),
        }))}
      />
      <MarketplaceOperation lang={lang.marketplaceOperation} params={params} />
      <WarehouseFulfillment lang={lang.warehouseFulfillment} params={params} />
      <CrossBorderShipping lang={lang.crossBorder} params={params} />
      <ManagementSoftware lang={lang.managementSoftware} params={params} />
    </div>
  );
};

export default EndToEnd;
