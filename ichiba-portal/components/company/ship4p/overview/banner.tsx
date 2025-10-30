import Image from "next/image";

import banner from "@/public/icons/ship4p/banneOverview.png";
import bannerJson from "@/public/icons/ship4p/banner.json";
import CountUp from "react-countup";
import { useTranslation } from "next-i18next";
import { Player, Controls } from "@lottiefiles/react-lottie-player";
import Link from "next/link";

export default function BannerOverview() {
  const { t } = useTranslation("common");
  let host = typeof window !== "undefined" ? window.location.origin : "";

  return (
    <>
      <div className="banner">
        <div className="container">
          <div className="row mt-5 mb-5">
            <div className="banner-content">
              <div className="title-banner">
                <h1 className="tw-mb-4 tw-text-2xl lg:tw-text-5xl tw-font-bold">
                  {t("ship.overview.banner.title")}
                </h1>
              </div>
              <div className="fs-18 fw-5">
                <div className="pt-3">
                  <span className="">{t("ship.overview.banner.content1")}</span>
                </div>
                <div className="">
                  <span className="">{t("ship.overview.banner.content2")}</span>
                </div>
              </div>
              <div className="banner-button pt-5">
                <div className="trial d-inline-block me-3 cursor">
                  <Link
                    href={
                      host === "https://ichiba.vn"
                        ? "https://api.ichiba.vn/account/login?redirectUrl=https://app.ichiba.net"
                        : "https://api.ichiba.net/account/login?redirectUrl=https://app.ichiba.net"
                    }
                    className="text-decoration-none text-white"
                    rel="nofollow"
                  >
                    {t("ship.overview.banner.getFree")}
                  </Link>
                </div>
              </div>
            </div>
            <div className="banner-content pt-sm-4 pt-xl-1 pt-5">
              <div className="banner-img text-center">
                {/* <Image src={banner} alt="" /> */}
                <Player
                  src={bannerJson}
                  loop
                  autoplay
                  style={{ overflow: "none !important" }}
                >
                  <Controls />
                </Player>
              </div>
            </div>
          </div>
          <div className="info">
            <div className="row">
              <div className="col-lg-3 col-6 text-center pb-3 pb-lg-0">
                <CountUp
                  className="number"
                  duration={2}
                  start={0}
                  end={99}
                  suffix="%"
                />
                <div className="fw-6">
                  {t("ship.overview.banner.number.orders")}
                </div>
              </div>
              <div className="col-lg-3 col-6 text-center pb-3 pb-lg-0">
                <CountUp
                  className="number"
                  duration={1.2}
                  start={0}
                  end={99.96}
                  decimals={2}
                  suffix="%"
                />

                <div className="fw-6">
                  {t("ship.overview.banner.number.accuracy")}
                </div>
              </div>
              <div className="col-lg-3 col-6 text-center pb-3 pb-lg-0">
                <CountUp
                  className="number"
                  duration={2}
                  start={0}
                  end={220}
                  suffix="+"
                />
                <div className="fw-6">
                  {t("ship.overview.banner.number.countries")}
                </div>
              </div>
              <div className="col-lg-3 col-6 text-center pb--3 pb-lg-0">
                <CountUp
                  className="number"
                  duration={2}
                  start={0}
                  end={100}
                  suffix="+"
                />
                <div className="fw-6">
                  {t("ship.overview.banner.number.carriers")}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
