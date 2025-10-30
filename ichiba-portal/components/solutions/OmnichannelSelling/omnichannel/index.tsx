import { useTranslation } from "next-i18next";
import Merge from "./Merge"
import List from "./List";

const Omnichannel = () => {
  const o = useTranslation("omnichannel-selling").t; 

  return(
    <div className="tw-bg-[url(https://cms-strapi.ichiba.net/uploads/Vector_a48aa9e783.png)]">
      <Merge />
      <div className="tw-mt-10 lg:tw-mt-15 tw-mx-4 lg:tw-container lg:tw-text-center">
        <h2 className="tw-text-2xl lg:tw-text-4xl tw-font-bold">{o("omnichannel.title")}</h2>
        <div className="tw-text-sm lg:tw-text-lg tw-mt-2">{o("omnichannel.subtitle")}</div> 
      </div>
      <List />
    </div>
  )
}
export default Omnichannel