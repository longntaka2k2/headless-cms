/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/link-passhref */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
import Link from "next/link";

import { useState, useEffect, useMemo } from "react";
import { useTranslation } from "next-i18next";
import useWidth from "@/hooks/useWidth";

export default function HomeBannerICB(props: any) {
  const { t } = useTranslation("common");
  const background = props.background.data?.attributes.url;
  const mobileBg = props.mobileBackground.data?.attributes?.url;
  const widthCount = useWidth();
  const styleObj = useMemo(
    () =>
      widthCount > 1600
        ? {
            backgroundImage: `url(${background})`,
            backgroundSize: "cover",
          }
        : { background: `linear-gradient(180deg, #FFF 0%, #DDDDDC 100%)` },
    [widthCount],
  );

  return (
    <div key={`${props.id}_${props.__component}`}>
      {props && (
        <div id="home-banner" key={props.id} style={styleObj}>
          <div className="container user-select-none">
            <div className="row py-5">
              <div className="col-xl-6 col-lg-6 ">
                <div className="title">
                  <span dangerouslySetInnerHTML={{ __html: props?.heading }} />
                </div>
                <div className="fs-18 fw-5">
                  <div className="pt-3">
                    <span className="">{props?.subHeading}</span>
                  </div>
                  <div className="pt-3">
                    <span className="">{props?.subHeading2}</span>
                  </div>
                </div>
                <div className="banner-button p-2 row-sm">
                  <Link
                    rel="nofollow"
                    target={"_blank"}
                    href={"https://org.ichiba.net"}
                    className="trial d-inline-block me-3 cursor text-decoration-none col text-center"
                  >
                    {t("freeTrial")}
                  </Link>
                  <Link
                    rel="canonical"
                    target={"_blank"}
                    href={"/contact-sales"}
                    className="tour d-inline-block cursor text-decoration-none my-3 col text-center"
                  >
                    <span>{t("contactSale")}</span>
                  </Link>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 pt-sm-4 pt-xl-1 pt-5">
                <div
                  className={
                    widthCount < 990
                      ? "banner-img text-center"
                      : "banner-img text-center d-none"
                  }
                >
                  <img src={mobileBg || ""} alt="home-banner" />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
