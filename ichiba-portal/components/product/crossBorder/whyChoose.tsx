import whyChoose from "@/public/icons/crossBorder/whyChoose.png";
import Image from "next/image";
import { useTranslation } from "next-i18next";
// import map from "@/public/icons/company/discover/map.json";

import { SimpleSectionProps } from "@/components/shared/simpleSectionRenderer";

export default function WhyChoose(props?: SimpleSectionProps) {
  const { t } = useTranslation("common");
  const iconStyle = {
    color: "#0f62fe",
    margin: "19px 16px 0px 0px",
  };
  const content = [
    t("crossBorder.whyChooseCb.power"),
    t("crossBorder.whyChooseCb.certified"),
    t("crossBorder.whyChooseCb.hyper"),
    t("crossBorder.whyChooseCb.professional"),
    t("crossBorder.whyChooseCb.transparent"),
  ];
  return (
    <>
      <div className="tw-py-6 md:tw-py-16 why-choose">
        <div className="container">
          <div className="text-center mx-auto fw-7 tw-text-2xl md:tw-text-4xl md:tw-max-w-[792px] tw-pb-6">
            <span>{t("crossBorder.whyChooseCb.title")}</span>
          </div>
          <div className="row">
            <div className="col-lg-5">
              {content.map((x, idx) => (
                <div className="d-flex pb-2 pt-3" key={idx}>
                  <i
                    className="fa-solid fa-lg fa-circle-check"
                    style={iconStyle}
                  />
                  <div className="tw-text-sm md:tw-text-base">{x}</div>
                </div>
              ))}
            </div>
            <div className="offset-lg-1 col-lg-6">
              <Image
                src={whyChoose}
                alt="whyChoose"
                style={{ width: "100%" }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
