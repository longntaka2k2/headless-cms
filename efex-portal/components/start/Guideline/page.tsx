import MultiChannel from "./MultiChannel";
import Ecomm from "./Ecom";
import Cross from "./Cross";
import OutSourced from "./OutSourced";
import PickAndPack from "./PickAndPack";
import Fullfilment from "./Fullfilment";
import AnchorLinks from "./AnchorLinks";
import dataSet from "@/components/sellInVietNam/dataSet";
import { removeAccent } from "@/utils/ultils";
const Guideline = ({ lang , params}: { lang: any , params : any } ) => {
  return (
    <div className="pt-[50px] lg:pt-[120px] text-[#333] start">
      <h2 className="px-4 lg:container text-[24px] lg:text-[48px] font-bold lg:leading-56">
        {lang?.title}
      </h2>
      <AnchorLinks
        items={[...lang?.item].map(
          (x) => ({
            label: x?.label!,
            href: "#" + removeAccent(x?.label!),
          })
        )}
      />
      <MultiChannel lang={lang?.item[0] as any} />
      <Ecomm lang={lang?.item[1] as any} params={params} />
      <Cross lang={lang?.item[2] as any} />
      <OutSourced lang={lang?.item[3] as any} />
      <PickAndPack lang={lang?.item[4] as any} />
      <Fullfilment lang={lang?.item[5] as any} />
    </div>
  );
};

export default Guideline;
