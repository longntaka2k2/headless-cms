import bannerGlad from "@/public/icons/company/career/bannerGlad.png";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import router from "next/router";
import { useTranslation } from "next-i18next";

export default function GladToHave() {
  const {t} = useTranslation("common");

  return (
    <>
      <div
        className="glad-to-have"
        style={{
          backgroundImage: `url(${bannerGlad.src})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",

        }}
      >
        <div className="container">
            <div >
              <h2
                className="text-center fw-7 fs-36 fs-md-28 title-glad"
                style={{ color: "#FFFFFF", maxWidth: "700px", margin: "0 auto" }}
              >{t("careers.employee.Wereglad")}
              </h2>
              <div className="d-flex align-center">
                <div className="button cursor fs-md-14" onClick={() => router.push('/jobs')}>
                {t("careers.employee.seeOpen")} &ensp;{" "}
                  <FontAwesomeIcon
                    icon={faArrowRight}
                    style={{ color: "white" }}
                  />
                </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
