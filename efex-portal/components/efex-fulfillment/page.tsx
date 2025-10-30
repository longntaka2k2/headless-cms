"use client";
import "react-phone-input-2/lib/style.css";
import "react-toastify/dist/ReactToastify.css";
import { usePathname } from "next/navigation";
import HeaderEFEXFulfillment from "./HeaderEFEXFulfillment";
import Committed from "./Committed";
import FreeFulfillment from "./FreeFulfillment";
import Comprehensive from "./Comprehensive";
import OnlyFor from "./OnlyFor";
import WhyChoose from "./WhyChoose";
import Procedure from "./Procedure";
import OurPartners from "./OurPartners";
import FooterEFFEXFulfillment from "./FooterEFEXFulfillment";
import RealImage from "./RealImage";

const EFEXFulfillmentCPN = ({ lang }: any) => {
  const locale = usePathname().slice(1, 3);
  return (
    <>
      <HeaderEFEXFulfillment lang={lang.efexFulfillment.header} />
      <Committed lang={lang.efexFulfillment.committed} />
      <FreeFulfillment lang={lang.efexFulfillment.freeFulfillment} />
      <Comprehensive lang={lang.efexFulfillment.comprehensive} />
      <OnlyFor lang={lang.efexFulfillment.onlyFor} />
      <WhyChoose lang={lang.efexFulfillment.whyChoose} />
      <Procedure lang={lang.efexFulfillment.procedure} />
      <RealImage lang={lang.efexFulfillment.realImage} />
      <OurPartners lang={lang.efexFulfillment.ourPartners} />
      <FooterEFFEXFulfillment lang={lang.efexFulfillment.footer} />
    </>
  );
};

export default EFEXFulfillmentCPN;
