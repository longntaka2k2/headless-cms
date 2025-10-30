import bg from "@/public/icons/solutions/CB-Fulfilment/notesure.jpg";
import { useTranslation } from "next-i18next";
import Link from "next/link";

export default function NoteSure() {
  const { t } = useTranslation("common");

  return (
    <div
      className="noteSure"
      style={{
        backgroundImage: `url(${bg.src})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="container">
        <div className="container-child mx-auto text-center color-white">
          <h3 className="fw-7 fs-md-24 fs-36">
            {t("crossFulfill.notSure.title")}
          </h3>
          <div className="fs-md-14">{t("crossFulfill.notSure.content")}</div>
          <div className="mt-4">
            <Link
              rel="canonical"
              href="/contact-sales"
              className="btn-janbox fs-14  contact-sale  cursor "
            >
              {t("crossFulfill.notSure.advice")}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
