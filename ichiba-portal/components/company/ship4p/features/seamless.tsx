import React, { useEffect, useMemo, useRef, useState } from "react";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { scroller, Link, Events } from "react-scroll";
import Scrollspy from "react-scrollspy";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import Link2 from "next/link";
import useWidth from "@/hooks/useWidth";
import dynamic from "next/dynamic";
// import LottieRenderer from "@/components/common/lottieRenderer";
const LottieRenderer = dynamic(
  () => import("@/components/common/lottieRenderer"),
  {
    loading: () => <p>Loading...</p>,
    ssr: false,
  },
);

export default function Seamless() {
  const router = useRouter();
  const seamlessRef = React.createRef();
  const automaticRef = React.createRef();
  const trackRef = React.createRef();
  const flexibleRef = React.createRef();
  const accurateRef = React.createRef();
  const shippingRef = React.createRef();
  const realtimeRef = React.createRef();

  const [isActive, setActive] = useState<String>("seamless" as String);
  const { t } = useTranslation("common");

  const seamless = [
    {
      tab: "seamlessBusiness",
      ref: seamlessRef,
      title: "seamless",
      content: ["connectFirms", "easilySwap", "enableFast"],
      img:
        router?.locale === "vi"
          ? "/icons/ship4p/fetures/A-VI.json"
          : "/icons/ship4p/fetures/A-EN.json",
    },
    {
      tab: "automatic",
      ref: automaticRef,
      title: "automatic",
      content: ["centeredly", "automatically"],
      img:
        router?.locale === "vi"
          ? "/icons/ship4p/fetures/B-VI.json"
          : "/icons/ship4p/fetures/B-EN.json",
    },
    {
      tab: "trackAndTrace",
      ref: trackRef,
      title: "track",
      content: ["quickly", "receive"],
      img: "/icons/ship4p/fetures/C.json",
    },
    {
      tab: "flexible",
      ref: flexibleRef,
      title: "flexible",
      content: ["easily", "print", "suggest"],
      img:
        router?.locale === "vi"
          ? "/icons/ship4p/fetures/D-VI.json"
          : "/icons/ship4p/fetures/D-EN.json",
    },
    {
      tab: "accurate",
      ref: accurateRef,
      title: "accurate",
      content: ["easilyControl", "clearAnd", "CheckWithin"],
      img: "/icons/ship4p/fetures/E.json",
    },
    {
      tab: "shippingAPI",
      ref: shippingRef,
      title: "shipping",
      content: ["anyPlatform", "easilyValidate", "ourAdvanced"],
      img: "/icons/ship4p/fetures/F.json",
    },
    {
      tab: "realTimeReport",
      ref: realtimeRef,
      title: "realtime",
      content: ["comprehensive", "suggestSolution"],
      img: "/icons/ship4p/fetures/G.json",
    },
  ];

  const forcus = (value: any, title: string) => {
    value.current.scrollIntoView({ behavior: "smooth" });
    setActive(title);
  };

  const widthCount = useWidth();
  let host = typeof window !== "undefined" ? window.location.origin : "";
  // const styleObj = useMemo(
  //   () => ({
  //     width: widthCount > 972 ? "636px" : "auto",
  //     height: "100%",
  //   }),
  //   [widthCount]
  // );

  return (
    <div className="seamless">
      <div className="features">
        <div className="mx-auto " style={{ maxWidth: "800px" }}>
          <h1 className="title text-center">{t("ship.features.title")}</h1>
          <div className=" text-center">{t("ship.features.content")}</div>
          <div className="text-center my-5">
            <Link2
              href={
                host === "https://ichiba.vn"
                  ? "https://api.ichiba.vn/account/login?redirectUrl=https://app.ichiba.net"
                  : "https://api.ichiba.net/account/login?redirectUrl=https://app.ichiba.net"
              }
              className="text-decoration-none button cursor"
              rel="nofollow"
            >
              {t("ship.features.getStarted")}
            </Link2>{" "}
          </div>
        </div>
      </div>
      <div className="container">
        <div
          className="mx-auto title text-center py-5 "
          style={{ maxWidth: "760px" }}
        >
          {t("ship.features.shippingKeep")}
        </div>

        <div className="row">
          <div className="col-lg-3">
            <div
              className={
                widthCount > 972
                  ? "seam-title tab-pc"
                  : "seam-title-mobile tab-mobile"
              }
            >
              {seamless.map((value: any, index: number) => (
                <Link
                  activeClass="active"
                  className="cursor fs-16 d-inline-block py-2 seam-items text-decoration-none"
                  style={{ color: "#666666" }}
                  to={index.toString() as string}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={0}
                  key={index}
                >
                  {t(`ship.features.${value.tab}`)}
                </Link>
              ))}
            </div>
          </div>
          <div className="col-lg-9 ">
            <Scrollspy items={[]} currentClassName="is-current">
              {seamless.map((value: any, index: number) => (
                <a
                  href={`#${index}`}
                  rel="canonical"
                  className="text-decoration-none mb-lg-2"
                  id={index.toString()}
                  style={{ color: "#333333" }}
                  key={`${value.tab}_${index}`}
                >
                  <h3 className="fw-7 fs-24" style={{ color: "#333333" }}>
                    {t(`ship.features.${value.tab}`)}
                  </h3>
                  {index % 2 == 0 ? (
                    <div className="row my-4">
                      <div className="col-lg-4 pt-4">
                        {value.content.map((value2: any, index: number) => (
                          <div className="d-flex" key={`${value2}_${index}`}>
                            <FontAwesomeIcon
                              icon={faCheck}
                              color="#FFFFFF"
                              style={{
                                background: "#1D39C4",
                                borderRadius: "50px",
                                padding: "3px 4px",
                                margin: "15px 16px 0 0",
                              }}
                            />{" "}
                            <div className="d-inline-block py-2">
                              {t(`ship.features.${value2}`)}
                            </div>
                          </div>
                        ))}
                      </div>
                      <div className="col-lg-8 ps-3">
                        <LottieRenderer
                          path={value.img}
                          style={{
                            width: widthCount > 972 ? "636px" : "auto",
                            height: "100%",
                          }}
                        />
                      </div>
                    </div>
                  ) : (
                    <div className="row my-4">
                      <div className="col-lg-8">
                        <LottieRenderer
                          path={value.img}
                          style={{
                            position: widthCount > 972 ? "relative" : undefined,
                            right: "30px",
                            width: widthCount > 972 ? "600px" : "auto",
                            height: "100%",
                          }}
                        />
                      </div>
                      <div className="col-lg-4 pt-4 ps-3">
                        {value.content.map((value2: any, index: number) => (
                          <>
                            <div className="d-flex">
                              <FontAwesomeIcon
                                icon={faCheck}
                                color="#FFFFFF"
                                style={{
                                  background: "#1D39C4",
                                  borderRadius: "50px",
                                  padding: "3px 4px",
                                  margin: "15px 16px 0 0",
                                }}
                              />{" "}
                              <div className="d-inline-block py-2">
                                {t(`ship.features.${value2}`)}
                              </div>
                            </div>
                          </>
                        ))}
                      </div>
                    </div>
                  )}
                </a>
              ))}
            </Scrollspy>
          </div>
        </div>
      </div>
    </div >
  );
}
