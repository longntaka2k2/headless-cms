import HeaderStoreFront from "../header"
import Intergration from "./Integration"
import BannerCommerce from "./banner"
import BoostSEO from "./boost"
import Build from "./build"
import Discover from "./discover"
import Effortless from "./effortless"
import Exclusivery from "./exclusively"
import FindOut from "./find"
import MACH from "./mach"
import WhatYouCanDo from "./whatYouCan"
import WhatIsPossible from "./whatispossible"
import WhyIchibaOne from "./why"

const  CommerceSites = () => {
  return(
    <>
      <HeaderStoreFront />
      <BannerCommerce />
      <WhatYouCanDo />
      <Effortless />
      <BoostSEO />
      <Exclusivery/>
      <WhatIsPossible />
      <Discover />
      <MACH />
      <Intergration />
      <FindOut />
      <WhyIchibaOne />
      <Build />
    </>
  )
}
export default CommerceSites