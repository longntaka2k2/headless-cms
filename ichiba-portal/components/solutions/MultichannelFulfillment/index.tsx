import BannerMultichannelFulfillment from "./banner"
import Ready from "./ready"
import Simplify from "./Simplify"
import WhatProblem from "./WhatProblem"

const MultichannelFulfillmentCpn = () => {
  return(
    <div>
      <BannerMultichannelFulfillment />
      <WhatProblem />
      <Simplify />
      <Ready />
    </div>
  )
}
export default MultichannelFulfillmentCpn