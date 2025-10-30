import dynamic from "next/dynamic";
import WhyChoose from "../product/crossBorder/whyChoose";
import GlobalShipping from "../product/crossBorder/globalShipping";

const HowItWork = dynamic(
  () => import("@/components/product/crossBorder/howItwork"),
  { ssr: true },
);

enum SimpleSectionType {
  CROSS_BORDER_OVER_VIEW_HOWITWORK = "cross.border.overview.howItWork",
  CROSS_BORDER_OVER_VIEW_WHYCHOOSE = "cross.border.overview.whyChoose",
  CROSS_BORDER_OVER_VIEW_GLOBALSHIPPING = "cross.border.overview.globalShip",
}
export interface SimpleSectionProps {
  content: string;
  id: number;
  title: string;
  type: string;
}
const SimpleSectionRenderer = (props: SimpleSectionProps) => {
  switch (props.type) {
    case SimpleSectionType.CROSS_BORDER_OVER_VIEW_WHYCHOOSE:
      return <WhyChoose {...props} />;
    case SimpleSectionType.CROSS_BORDER_OVER_VIEW_GLOBALSHIPPING:
      return <GlobalShipping />;
    default:
      return <></>;
  }
};
export default SimpleSectionRenderer;
