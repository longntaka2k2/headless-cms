import clsx from "clsx";
import { useTranslation } from "next-i18next";
import Link from "next/link";

export default function BannerFeatures() {
  const { t } = useTranslation("common");
  let host = typeof window !== "undefined" ? window.location.origin : "";
  return (
    <section
      className={clsx(
        "tw-py-10 banner-features",
        "tw-bg-[url('https://cms-strapi.ichiba.net/uploads/image_23_bc849d1d78.png')]",
        "tw-bg-cover",
      )}
    >
      <div className="container">
        <h1 className="fw-7 fs-36 pb-3 tw-text-center">
          {t("crossBorder.features.banner.title")}
        </h1>
        <div className="mx-auto text-center container-child">
          <div className="fs-16">
            {t("crossBorder.features.banner.content")}
          </div>
          <div className="text-center">
            <Link
              href={
                host === "https://ichiba.vn"
                  ? "https://api.ichiba.vn/account/login?redirectUrl=https://app.ichiba.net"
                  : "https://api.ichiba.net/account/login?redirectUrl=https://app.ichiba.net"
              }
              className="d-inline-block text-decoration-none btn-janbox px-5 py-3 cursor mt-5"
              rel="nofollow"
            >
              {t("crossBorder.features.banner.exploreNow")}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
