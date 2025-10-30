/* eslint-disable react/jsx-no-undef */
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

import { useTranslation } from "next-i18next";
import our1 from "@/public/icons/company/discover/our1.png";
import our2 from "@/public/icons/company/discover/our2.png";
// import roammap from "@/public/icons/company/discover/roammap.png";
import roammap from "@/public/icons/company/discover/roammap.json";
import roammapVI from "@/public/icons/company/discover/roammapVI.json";
import ReactPlayer from "react-player";

import roammapmobile from "@/public/icons/company/discover/roammapmobile.json";
import roammapmobileVI from "@/public/icons/company/discover/mobileVI.json";
import VideoComponent from "./videoComponent";

import { Player, Controls } from "@lottiefiles/react-lottie-player";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";

const LottieRenderer = dynamic(
  () => import("@/components/common/lottieRenderer"),
  {
    loading: () => <p>Loading...</p>,
    ssr: false,
  }
);
export default function Banner() {
  const { t } = useTranslation("common");
  const router = useRouter();
  const locale = router?.locale;

  return (
    <>
      <div className="discover-img" style={{ background: "#00194F" }}>
        {/* <Image src={banner} alt="" className="discover-banner" /> */}
        {/* <video  url={page?.img?.url || ""} className="discover-banner" /> */}
        <VideoComponent />
      </div>
      <div className="we-are">
        <div className="container">
          <div className="row pb-5">
            <div className="col-lg-6 pb-3">
              <h1 className="fw-7 fs-36 fs-md-28">{t("discover.whoWeAre")}</h1>
              <div className="pt-1 fs-md-14">
                <div>{t("discover.behindAStrong")}</div>
                <div>{t("discover.behindAStrong2")}</div>
              </div>
            </div>
            <div className="col-lg-6 row ">
              <div className="col-6">
                <div className="bio-number">
                  <div className="fw-7 fs-24 fs-md-20">
                    {t("discover.7years")}
                  </div>
                  <div className="fs-md-14 ">{t("discover.experience")}</div>
                </div>
                <div className="bio-number">
                  <div className="fw-7 fs-24 fs-md-20">200+</div>
                  <div className="fs-md-14 ">{t("discover.worldwide")}</div>
                </div>
              </div>
              <div className="col-6">
                <div className="bio-number">
                  <div className="fw-7 fs-24 fs-md-20 ">20,000+</div>
                  <div className="fs-md-14">
                    {t("discover.customersServiced")}
                  </div>
                </div>
                <div className="bio-number">
                  <div className="fw-7 fs-24 fs-md-20">500+</div>
                  <div className="fs-md-14 ">
                    {t("discover.globalPartners")}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="our row ">
            <div className="col-md-6 our-item ">
              <Image
                src={our1}
                alt=""
                className="discover-banner"
                loading="lazy"
              />
              <div className="our-content" style={{ minHeight: "34%" }}>
                <h3 className="fs-24 fw-7 pb-2 fs-md-18">
                  {t("discover.ourVision.title")}
                </h3>
                <div className="fs-md-14" style={{ height: "100%" }}>
                  {t("discover.ourVision.content")}
                </div>
              </div>
            </div>
            <div className="col-md-6 our-item ">
              <Image
                src={our2}
                alt=""
                className="discover-banner"
                loading="lazy"
              />
              <div className="our-content" style={{ minHeight: "34%" }}>
                <div className="fs-24 fw-7 pb-2 fs-md-18">
                  {t("discover.ourMission.title")}
                </div>
                <div className="fs-md-14" style={{ height: "100%" }}>
                  {t("discover.ourMission.content")}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="our-history container">
        <div className="text-center pb-lg-5 pb-3 history-title">
          <h2 className="pb-3 fs-36 fw-7 fs-md-28">
            {t("discover.ourHistory.title")}
          </h2>
          <div className="fs-md-14">{t("discover.ourHistory.content")}</div>
        </div>
        <div className="d-md-block d-none">
          <LottieRenderer
            path={
              locale === "vi"
                ? "/icons/company/discover/roammapVI.json"
                : "/icons/company/discover/roammap.json"
            }
            style={{ height: "100%" }}
            className="discover-banner mt-5"
          />
        </div>
        <div className="d-block d-md-none">
          <LottieRenderer
            path={
              locale === "vi"
                ? "/icons/company/discover/roammapmobile.json"
                : "/icons/company/discover/mobileVI.json"
            }
            style={{ height: "100%" }}
            className="discover-banner mt-5"
          />
        </div>
      </div> */}
    </>
  );
}
