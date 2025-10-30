/* eslint-disable @next/next/link-passhref */
import { useState } from "react";
import Frame1 from "@/public/icons/ship4p/Frame1.png";
import Frame2 from "@/public/icons/ship4p/Frame2.png";
import Frame3 from "@/public/icons/ship4p/Frame3.png";
import Frame4 from "@/public/icons/ship4p/Frame4.png";
import Frame5 from "@/public/icons/ship4p/Frame5.png";
import Frame6 from "@/public/icons/ship4p/Frame6.png";
import Frame7 from "@/public/icons/ship4p/Frame7.png";
import Frame8 from "@/public/icons/ship4p/Frame8.png";
import imgSimplify from "@/public/icons/ship4p/imgSimplify.png";
import imgSimplifyVi from "@/public/icons/ship4p/simplifyVi.png";
import manage from "@/public/icons/ship4p/manage.png";
import manageVi from "@/public/icons/ship4p/manageVi.png";
import Link from "next/link";

import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";

const keySimplify = [
  {
    img: Frame1,
    title: "delivery",
    content:
      "Customers can choose the suitable delivery company based on the estimated time and costs of each unit. We also offer add-on services like collect-on-delivery, insurance, signature required, dangerous goods, pickup, and Saturday delivery.",
  },
  {
    img: Frame2,
    title: "automatic",
    content:
      "Ship4P system gets the shipment status from multiple carrier channels constantly. You can monitor all shipments from various shipping companies on one screen, which saves time and costs.",
  },
  {
    img: Frame3,
    title: "label",
    content:
      "We provide a wide range of printing label sizes. Proactive shipment tracking through an API system and sending notifications in real-time, optimize delivery performance and user satisfaction.",
  },
  {
    img: Frame4,
    title: "accurate",
    content:
      "Fully automate and standardize the reconciliation process to significantly reduce the time to close daily and period-end reconciliation activities. Data collected from various sources and carriers are systematically controlled in Ship4P.",
  },
  {
    img: Frame5,
    title: "advanced",
    content:
      "Easily analyze shipment performance with our reporting tool which easily generates shipping and logistics reports, followed by multiple options to customize by date, shipment type, status, and more.",
  },
  {
    img: Frame6,
    title: "complete",
    content:
      "Shipping APIs and webhooks enable direct integration of the logistic partner with multiple sale channels and order management system, hence automating the process. Powerful shipping APIs of Ship4P can be used to consolidate all expedite shipment and delivery information into a single, complete dashboard.",
  },
  {
    img: Frame7,
    title: "shipping",
    content:
      "Our software delivers automation processes including picking items from inventory for delivery, document handling, packing, and getting packages in transit to be delivered.",
  },
  {
    img: Frame8,
    title: "interational",
    content:
      "Ship4P gives businesses instant access to significant shipping information, the ability to save and reuse Harmonized System codes (HS codes), and estimated duties and taxes for international shipments.",
  },
];
const keyManage = [
  {
    img: Frame1,
    title: "multi",
    content:
      "Customers can choose the suitable delivery company based on the estimated time and costs of each unit. We also offer add-on services like collect-on-delivery, insurance, signature required, dangerous goods, pickup, and Saturday delivery.",
  },
  {
    img: Frame2,
    title: "mangageSingle",
    content:
      "Ship4P system gets the shipment status from multiple carrier channels constantly. You can monitor all shipments from various shipping companies on one screen, which saves time and costs.",
  },
];
export default function Robust() {
  const router = useRouter();
  const { t } = useTranslation("common");
  const [isActive, setActive] = useState<String>("1");
  const changeTab = (value: string) => {
    setActive(value as string);
  };
  return (
    <>
      <div className="robust">
        <div className="container">
          <h2 className="title tw-mb-0">{t("ship.overview.robust.title")}</h2>
          <div className="row ">
            <div
              className={
                isActive === "1"
                  ? "simplify col-6 tab active "
                  : "simplify col-6 tab"
              }
              onClick={() => changeTab("1")}
            >
              <div className="fw-7 fs-24 cursor text-center pb-3">
                {t("ship.overview.robust.simplify")}
              </div>
            </div>
            <div
              className={
                isActive === "0"
                  ? "manager col-6 tab active"
                  : "manager col-6 tab"
              }
              onClick={() => changeTab("0")}
            >
              <div className="fw-5 fs-24 cursor text-center pb-3">
                {t("ship.overview.robust.manage")}
              </div>
            </div>
          </div>
          <div
            className={
              isActive === "1" ? "body-simplify" : "body-simplify d-none "
            }
          >
            <div
              className="row py-5 "
              style={{ borderBottom: "1px solid #DDDDDD" }}
            >
              <div className="col-sm-4">
                <div className="fs-16 pt-5">
                  {t("ship.overview.robust.increase")}
                </div>
                <div className="fw-7 fs-36 fs-md-28 pt-3">100%</div>
                <div>{t("ship.overview.robust.ofTheShipping")}</div>
              </div>
              <div className="col-sm-8">
                <Image
                  src={router.locale === "vi" ? imgSimplifyVi : imgSimplify}
                  alt="simplify"
                  style={{ width: "100%" }}
                />
              </div>
            </div>
            <div className="fw-7 fs-24 pb-1 pt-4">
              {t("ship.overview.robust.keyFeatures")}
            </div>
            <div className="py-3 ">{t("ship.overview.robust.theComplete")}</div>
            <div className="row">
              {keySimplify.map((value: any, index: number) => (
                <>
                  <div className="col-lg-4 col-md-6 features-items">
                    <Image src={value.img} alt={value.title} />
                    <div className="fw-7 fs-20 py-3 features-title">
                      {t(`ship.overview.robust.${value.title}.title`)}
                    </div>
                    <div className="features-content">
                      {t(`ship.overview.robust.${value.title}.content`)}
                    </div>
                    <div className="">
                      <Link
                        rel="canonical"
                        href="/products/ship4p/features"
                        className="text-decoration-none"
                      >
                        {t("learnMore")} &ensp;
                        <FontAwesomeIcon icon={faArrowRight} />
                      </Link>
                    </div>
                  </div>
                </>
              ))}
            </div>
          </div>
          <div
            className={
              isActive === "0" ? "body-manager" : "body-manager d-none "
            }
          >
            <div
              className="row py-5 "
              style={{ borderBottom: "1px solid #DDDDDD" }}
            >
              <div className="col-sm-4">
                <div className="fs-16 pt-5">
                  {t("ship.overview.robust.centralize")}
                </div>
                <div className="fw-7 fs-36 fs-md-28 pt-3 ">90%</div>
                <div>{t("ship.overview.robust.timeSaved")}</div>
              </div>
              <div className="col-sm-8">
                <Image
                  src={router.locale === "vi" ? manageVi : manage}
                  alt="manage"
                  style={{ width: "100%" }}
                />
              </div>
            </div>
            <div className="fw-7 fs-24 py-3">
              {t("ship.overview.robust.keyFeatures")}
            </div>

            <div className="row">
              {keyManage.map((value: any, index: number) => (
                <>
                  <div className="col-lg-4 col-md-6 features-items">
                    <Image src={value.img} alt={value.title ?? ""} />
                    <div className="fw-7 fs-20 py-3 features-title">
                      {t(`ship.overview.robust.${value.title}.title`)}
                    </div>
                    <div className="features-content">
                      {t(`ship.overview.robust.${value.title}.content`)}
                    </div>
                    <div className="">
                      <Link
                        rel="canonical"
                        href="/products/ship4p/features"
                        className="text-decoration-none"
                      >
                        {t("learnMore")} &ensp;
                        <FontAwesomeIcon icon={faArrowRight} />
                      </Link>
                    </div>
                  </div>
                </>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
