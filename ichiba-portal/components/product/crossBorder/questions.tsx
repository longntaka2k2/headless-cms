import bgQuestion from "@/public/icons/company/trust/bgQuestion.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTranslation } from "next-i18next";
import router from "next/router";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
const Question = () => {
  const { t } = useTranslation("common");
  return (
    <div className="container">
      <div
        className="question"
        style={{
          backgroundImage: `url(${bgQuestion.src})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="question-title">
          {t("crossBorder.areYouReady.title")}
        </div>
        <div className="py-4" style={{ maxWidth: "736px" }}>
          {t("crossBorder.areYouReady.content")}
        </div>

        <a href="#" className="text-decoration-none " rel="canonical">
          <div className="button" onClick={() => router.push("/contact-sales")}>
            {t("crossBorder.areYouReady.contact")} &ensp;
            <FontAwesomeIcon icon={faArrowRight} />
          </div>
        </a>
      </div>
    </div>
  );
};
