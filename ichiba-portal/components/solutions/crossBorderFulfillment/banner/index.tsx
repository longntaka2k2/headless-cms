import bg from "@/public/icons/solutions/BannerCBfulfill.webp";
import bgMobile from "@/public/icons/solutions/BannerMobilecbfulfillment.webp";

import { useTranslation } from "next-i18next";
import Link from "next/link";

export default function BannerCBFulfill() {
  const { t } = useTranslation("common");

  return (
    <div>
      <div
        className="banner d-md-block d-none"
        style={{
          backgroundImage: `url(${bg.src})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="container">
          <div className="text-center color-white">
            <h2 className="fs-36 fs-md-24 lh-48 lh-md-32">
              {t("crossFulfill.banner.title")}
            </h2>
            <div className="fs-md-14">{t("crossFulfill.banner.content")}</div>
            <div className="mt-3 mt-md-4">
              <Link
                rel="canonical"
                href="/contact-sales"
                className="btn-janbox fs-20 fs-md-16 contact-sale  cursor "
              >
                {t("contactSale")}
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div
        className="banner d-md-none d-block"
        style={{
          backgroundImage: `url(${bgMobile.src})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="container">
          <div className="text-center color-white">
            <h2 className="fs-36 fs-md-24 lh-48 lh-md-32">
              {t("crossFulfill.banner.title")}
            </h2>
            <div className="fs-md-14">{t("crossFulfill.banner.content")}</div>
            <div className="mt-3 mt-md-4">
              <Link
                rel="canonical"
                href="/contact-sales"
                className="btn-janbox fs-20 fs-md-16 contact-sale  cursor "
              >
                {t("contactSale")}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
