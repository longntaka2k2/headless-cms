"use client";
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
  const handleFocusFooter = () => {
    const footerElement = document.getElementById("footer");
    if (footerElement) {
      footerElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <HeaderEFEXFulfillment
        lang={lang.efexFulfillment.header}
        onButtonClick={handleFocusFooter}
      />
      <Committed lang={lang.efexFulfillment.committed} />
      <FreeFulfillment lang={lang.efexFulfillment.freeFulfillment} />
      <Comprehensive lang={lang.efexFulfillment.comprehensive} />
      <OnlyFor
        lang={lang.efexFulfillment.onlyFor}
        onButtonClick={handleFocusFooter}
      />
      <WhyChoose
        lang={lang.efexFulfillment.whyChoose}
        onButtonClick={handleFocusFooter}
      />
      <Procedure lang={lang.efexFulfillment.procedure} />
      <RealImage lang={lang.efexFulfillment.realImage} />
      <OurPartners lang={lang.efexFulfillment.ourPartners} />
      <FooterEFFEXFulfillment lang={lang.efexFulfillment.footer} />
    </>
  );
};

export default EFEXFulfillmentCPN;
