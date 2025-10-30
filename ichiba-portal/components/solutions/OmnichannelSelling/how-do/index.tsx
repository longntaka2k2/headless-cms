import { useTranslation } from "next-i18next";
import API from "./API";
import Streamlined from "./Streamlined";
import Enhanced from "./Enhanced";



const HowDo = () => {
  const o = useTranslation("omnichannel-selling").t; 

  return(
    <div className="lg:tw-pt-20 lg:tw-pb-10 tw-py-6">
      <h3 className="tw-text-2xl tw-font-bold tw-text-center tw-mb-6 tw-mx-4 lg:tw-text-4xl lg:tw-mb-15 lg:tw-max-w-[800px] lg:tw-mx-auto">{o("howdo.title")}</h3>
      <API />
      <Streamlined />
      <Enhanced />

    </div>
  )
}
export default HowDo