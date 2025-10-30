import { useTranslation } from "next-i18next";
import Link from "next/link";
import bg from "@/public/icons/solutions/CB-Fulfilment/getCustomized.jpg";

export default function GetCustomized() {
  const { t } = useTranslation("common");
 
  return (
    <div
      className="getCustomized"
      style={{
        backgroundImage: `url(${bg.src})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="container tw-text-center color-white">
        <div className="container-child mx-auto">
          <div className="fs-36 fs-md-24 fw-7">
            {t("crossFulfill.getCustomized")}
          </div>
          <div className=" mt-4">
            <Link
              href="/contact-sales"
              rel="canonical"
              className="btn-janbox fs-14 contact-sale cursor "
            >
              {t("crossFulfill.talkToOur")}
            </Link>
          </div>
        </div>l
      </div>
    </div>
  );
}
