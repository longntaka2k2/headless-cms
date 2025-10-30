/* eslint-disable @next/next/link-passhref */
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import bgQuestion from "@/public/icons/company/trust/bgQuestion.png";
import { useTranslation } from "next-i18next";
import Link from "next/link";
import Faq from "@/components/common/faq";

const tabLeft = [
  "COD returns",
  "Delivery cost",
  "Contracts",
  "Reconciliation",
  "Supporting service",
];

export default function WyConnect() {
  const { t } = useTranslation("common");
  let host = typeof window !== "undefined" ? window.location.origin : "";

  const faqs = [
    {
      title: t("ship.features.faqs.canConnect"),
      content: t("ship.features.faqs.ship4pConnect"),
    },
    {
      title: t("ship.features.faqs.doesShip4p"),
      content: t("ship.features.faqs.ship4pUpdate"),
    },
    {
      title: t("ship.features.faqs.canUseShip4p"),
      content: t("ship.features.faqs.definitely"),
    },
  ];
  return (
    <>
      <div className="wy-connect">
        <div className="container">
          <div className="title  text-center">
            <h2
              className="fw-7 fs-36 fs-md-28 mx-auto"
              style={{ maxWidth: "1000px" }}
            >
              {t("ship.features.weConnect.title")}
            </h2>
            <div className="fs-18 mt-3 mx-auto">
              {t("ship.features.weConnect.content")}
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-lg-2 type-tab"></div>
            <div className="offset-lg-1 col-lg-4 ps-lg-0 ">
              <div className="table-left">
                <div>
                  <div>{t("ship.features.weConnect.connectBy")}</div>
                  <div className="fw-6 fs-24" style={{ minHeight: "4.5rem" }}>
                    {t("ship.features.weConnect.yourOwn")}
                  </div>
                </div>
                <div>
                  <div className="py-4 ">
                    <div className="typeName">
                      {t("ship.features.weConnect.cod")}
                    </div>
                    <div className="title-left ">
                      {t("ship.features.weConnect.cod")}:
                    </div>
                    <div className="fw-7 fs-36 fs-md-28">1-2</div>
                    <div>{t("ship.features.weConnect.timeWeek")}</div>
                  </div>
                  <div className="py-4 border-top">
                    <div className="typeName">
                      {t("ship.features.weConnect.delivery")}
                    </div>
                    <div className="title-left ">
                      {t("ship.features.weConnect.delivery")}:
                    </div>
                    <div>{t("ship.features.weConnect.manually")}</div>
                  </div>
                  <div className="py-4 border-top">
                    <div className="typeName">
                      {t("ship.features.weConnect.contracts")}
                    </div>
                    <div className="title-left ">
                      {t("ship.features.weConnect.contracts")}:
                    </div>
                    <div>{t("ship.features.weConnect.connectTo")}</div>
                  </div>
                  <div className="py-4 border-top">
                    <div className="typeName">
                      {t("ship.features.weConnect.reconciliation")}
                    </div>
                    <div className="title-left">
                      {t("ship.features.weConnect.reconciliation")}:
                    </div>
                    <div>{t("ship.features.weConnect.separately")}</div>
                  </div>
                  <div className="py-4 border-top">
                    <div className="typeName">
                      {t("ship.features.weConnect.supporting")}
                    </div>
                    <div className="title-left ">
                      {t("ship.features.weConnect.supporting")}:
                    </div>
                    <div>{t("ship.features.weConnect.contactTo")}</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-5 mt-lg-0 mt-md-4">
              <div className="table-right">
                <div>
                  <div>{t("ship.features.weConnect.connectBy")}</div>
                  <div className="fw-6 fs-24" style={{ minHeight: "4.5rem" }}>
                    {t("ship.features.weConnect.ship4pAccount")}
                  </div>
                </div>
                <div className="py-4">
                  <div className="title-right">
                    {t("ship.features.weConnect.cod")}:
                  </div>
                  <div className="fw-7 fs-36 fs-md-28">5</div>
                  <div>{t("ship.features.weConnect.timeWeek")}</div>
                </div>
                <div className="py-4 border-top">
                  <div className="title-right">
                    {t("ship.features.weConnect.delivery")}:
                  </div>
                  <div style={{ minHeight: "3rem" }}>
                    {t("ship.features.weConnect.promotions")}
                  </div>
                </div>
                <div className="py-4 border-top">
                  <div className="title-right">
                    {t("ship.features.weConnect.contracts")}:
                  </div>
                  <div>{t("ship.features.weConnect.onlyConnect")}</div>
                </div>
                <div className="py-4 border-top">
                  <div className="title-right">
                    {t("ship.features.weConnect.reconciliation")}:
                  </div>
                  <div>{t("ship.features.weConnect.automatically")}</div>
                </div>
                <div className="py-4 border-top">
                  <div className="title-right">
                    {t("ship.features.weConnect.supporting")}:
                  </div>
                  <div>{t("ship.features.weConnect.centralized")}</div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="free-up"
            style={{
              backgroundImage: `url(${bgQuestion.src})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          >
            <div className="question-title">
              {t("ship.overview.built.freeUp")}
            </div>
            <div className="py-4" style={{ maxWidth: "736px" }}>
              {t("ship.overview.built.connectWith")}
            </div>
            <Link
              href={
                host === "https://ichiba.vn"
                  ? "https://api.ichiba.vn/account/login?redirectUrl=https://app.ichiba.net"
                  : "https://api.ichiba.net/account/login?redirectUrl=https://app.ichiba.net"
              }
              className="text-decoration-none "
              rel="nofollow"
            >
              <div className="button text-center">
                {t("ship.overview.built.getStarted")} &ensp;
                <FontAwesomeIcon icon={faArrowRight} />
              </div>
            </Link>
          </div>
          <Faq items={faqs} />
        </div>
      </div>
    </>
  );
}
