import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTranslation } from "next-i18next";

const before = [
  { title: "must" },
  { title: "canNot" },
  { title: "decentralized" },
  { title: "haveTo" },
  { title: "complicated" },
  { title: "contact" },
];
const after = [
  { title: "access" },
  { title: "easily" },
  { title: "create" },
  { title: "automatic" },
  { title: "check" },
  { title: "support" },
];
export default function WeBuild() {
  const { t } = useTranslation("common");

  return (
    <>
      <div className="we-build">
        <div className="container">
          <h2 className="title">{t("ship.overview.weBuild.title")}</h2>
          <div className="d-lg-flex align-items-center">
            <div className="ship4p ">
              <div className="before ship4p-item">
                <div className="fw-7 fs-24 pb-2">
                  {t("ship.overview.weBuild.before.title")}
                </div>
                {before.map((value: any, index: number) => (
                  <>
                    <div className="d-flex align-item-center my-3">
                      <FontAwesomeIcon
                        icon={faCheck}
                        color="#FFFFFF"
                        style={{
                          background: "#1D39C4",
                          borderRadius: "50px",
                          padding: "4px 5px",
                          marginRight: "16px",
                        }}
                      />{" "}
                      <div className="d-inline-block ship-content">
                        {t(`ship.overview.weBuild.before.${value.title}`)}
                      </div>
                    </div>
                  </>
                ))}
              </div>
            </div>
            <div className="ship4p">
              <div className="after ship4p-item">
                <div className="fw-7 fs-24 pb-2">
                  {t("ship.overview.weBuild.after.title")}
                </div>
                {after.map((value: any, index: number) => (
                  <>
                    <div className="d-flex align-item-center my-3">
                      <FontAwesomeIcon
                        icon={faCheck}
                        color="#1D39C4"
                        style={{
                          background: "#FFFFFF",
                          borderRadius: "50px",
                          padding: "4px 5px",
                          marginRight: "16px",
                        }}
                      />{" "}
                      <div className="d-inline-block ship-content">
                        {t(`ship.overview.weBuild.after.${value.title}`)}
                      </div>
                    </div>
                  </>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
