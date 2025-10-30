import Image from "next/image";
import value1 from "@/public/icons/company/discover/value1.png";
import value2 from "@/public/icons/company/discover/value2.png";
import value3 from "@/public/icons/company/discover/value3.png";
import value4 from "@/public/icons/company/discover/value4.png";
import value5 from "@/public/icons/company/discover/value5.png";
import { useTranslation } from "next-i18next";

export default function CoreValue() {
  const {t} = useTranslation("common");

  return (
    <>
      <div className="core-value ">
        <div className="container px-3 px-lg-0">
        <div className="text-center">
          <h2 className="pb-3 fs-36 fw-7 fs-md-28">{t("discover.coreValue.title")}</h2>
        </div>
        <div className="text-center fs-md-14">{t("discover.coreValue.content")}</div>
        <div className="values pt-4">
          <div className="row " style={{width:'100%'}}>
            <div className="col-lg-4 col-md-6 pb-5">
              <div>
                <Image src={value1} alt="" />
                <h3 className="fw-7 fs-20 fs-md-18 py-3">{t("discover.coreValue.equality.title")}</h3>
                <div className="fs-md-14">{t("discover.coreValue.equality.content")}</div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 pb-5">
              <div>
                <Image src={value2} alt="" />
                <h3 className="fw-7 fs-20 py-3 fs-md-18">{t("discover.coreValue.innovation.title")}</h3>
                <div className="fs-md-14">{t("discover.coreValue.innovation.content")}</div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 pb-5">
              <div>
                <Image src={value3} alt="" />
                <h3 className="fw-7 fs-20 py-3 fs-md-18">{t("discover.coreValue.trustComponents.title")}</h3>
                <div className="fs-md-14">{t("discover.coreValue.trustComponents.content")}</div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 pb-5">
              <div>
                <Image src={value4} alt="" />
                <h3 className="fw-7 fs-20 py-3 fs-md-18">{t("discover.coreValue.customerCentricity.title")}</h3>
                <div className="fs-md-14">{t("discover.coreValue.customerCentricity.content")}
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 pb-5">
              <div>
                <Image src={value5} alt="" />
                <h3 className="fw-7 fs-20 py-3 fs-md-18">{t("discover.coreValue.integrityCommitment.title")}</h3>
                <div className="fs-md-14">{t("discover.coreValue.integrityCommitment.content")}</div>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </>
  );
}
