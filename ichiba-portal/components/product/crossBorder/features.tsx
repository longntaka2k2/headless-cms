import { useTranslation } from "next-i18next";
import { Player, Controls } from "@lottiefiles/react-lottie-player";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import Scrollspy from "react-scrollspy";
import { scroller, Link, Events } from "react-scroll";
import { useState, useEffect } from "react";
import Fearture1 from "@/public/icons/crossBorder/features/Features1.json";
import Fearture2 from "@/public/icons/crossBorder/features/Features2.json";
import Fearture3 from "@/public/icons/crossBorder/features/Fearture3.json";
import Fearture4 from "@/public/icons/crossBorder/features/Feartures4.json";
import Fearture5 from "@/public/icons/crossBorder/features/Fearture5.json";
import Fearture6 from "@/public/icons/crossBorder/features/Fearture6.json";
import Fearture7 from "@/public/icons/crossBorder/features/freature7.json";
import Fearture8 from "@/public/icons/crossBorder/features/fearture8.json";
import Fearture9 from "@/public/icons/crossBorder/features/fearture9.json";
import Fearture10 from "@/public/icons/crossBorder/features/fearture10.json";
import Fearture11 from "@/public/icons/crossBorder/features/fearture11.json";
import useWidth from "@/hooks/useWidth";

const featuresObject = [
  {
    title: "effortless",
    content: ["reach", "search", "update"],
    img: Fearture1,
  },
  {
    title: "online",
    content: ["connectTo", "keepTrack", "VIP", "sniper"],
    img: Fearture2,
  },
  {
    title: "corssForward",
    content: ["integrate", "insurance", "regular", "supporting", "supportHigh"],
    img: Fearture3,
  },
  {
    title: "diversity",
    content: ["cashback", "loyalty", "taxfree", "continous"],
    img: Fearture4,
  },
  {
    title: "valueAdd",
    content: ["package", "protective", "insurance", "photo"],
    img: Fearture5,
  },
  {
    title: "multiple",
    content: ["accept", "weMeet", "getAutomated"],
    img: Fearture6,
  },
  {
    title: "professional",
    content: ["highTechnology", "drive", "high", "cubiscan"],
    img: Fearture7,
  },
  {
    title: "fulfillment",
    content: ["warehouse", "optimized", "shipments"],
    img: Fearture8,
  },
  { title: "customized", content: ["inherently", "customize"], img: Fearture9 },
  { title: "diverse", content: ["connect", "choose"], img: Fearture10 },
  {
    title: "persional",
    content: ["collect", "suggest", "usingAi"],
    img: Fearture11,
  },
];
export default function FeaturesComponent() {
  const { t } = useTranslation("common");

  const scrollToElement = (id: string) => {
    scroller.scrollTo(id, {
      duration: 0,
      delay: 5,
      smooth: true,
      offset: -50,
    });
  };
  // function scrollToTop(value : number) {
  //   if (typeof window !== 'undefined') {
  //     window.scrollTo({ top: 0, behavior: 'smooth' });
  //   }
  //   setOpenNavItem(value)
  // }
  const widthCount = useWidth();
  const iconStyle = {
    background: "#1D39C4",
    borderRadius: "50px",
    padding: "3px 4px",
    margin: "15px 16px 0 0",
  };

  return (
    <>
      <div className="features user-select-none">
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <div className="features-tab">
                {featuresObject.map((value: any, index: number) => (
                  <>
                    <Link
                      activeClass="is-active "
                      className="features-title d-block text-decoration-none fs-18 py-2 cursor"
                      style={{ color: "#333333" }}
                      to={index.toString() as string}
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={0}
                    >
                      {t(`crossBorder.features.${value.title}.title`)}
                    </Link>
                  </>
                ))}
              </div>
            </div>
            <div className="col-lg-9 ">
              <Scrollspy items={[]} currentClassName="is-current">
                {featuresObject.map((value: any, index: number) => (
                  <>
                    {widthCount > 1430 ? (
                      <a
                        href={`#${index}`}
                        className="text-decoration-none "
                        id={index.toString()}
                        style={{ color: "#333333" }}
                        key={index}
                        rel="canonical"
                      >
                        {index % 2 == 0 ? (
                          <div className="row !tw-mb-[120px]">
                            <div className="col-6 pt-4 tw-flex tw-flex-col tw-justify-center">
                              <h3 className="fw-7 tw-text-2xl">
                                {t(`crossBorder.features.${value.title}.title`)}
                              </h3>
                              {value.content.map(
                                (value2: any, index: number) => (
                                  <>
                                    <div className="d-flex ">
                                      <FontAwesomeIcon
                                        icon={faCheck}
                                        color="#FFFFFF"
                                        style={iconStyle}
                                      />{" "}
                                      <div className="d-inline-block py-2">
                                        {t(
                                          `crossBorder.features.${value.title}.${value2}`,
                                        )}
                                      </div>
                                    </div>
                                  </>
                                ),
                              )}
                            </div>
                            <div className="col-6 ps-3 tw-flex">
                              <Player
                                src={value.img}
                                loop
                                autoplay
                                style={{ width: "460px", height: "100%" }}
                              >
                                {" "}
                                <Controls />{" "}
                              </Player>
                            </div>
                          </div>
                        ) : (
                          <div className="row !tw-mb-[120px]">
                            <div className="col-6 tw-flex">
                              <Player
                                src={value.img}
                                loop
                                autoplay
                                style={{ width: "460px", height: "100%" }}
                              >
                                {" "}
                                <Controls />{" "}
                              </Player>
                            </div>
                            <div className="col-6 pt-4 features-content-right tw-flex tw-flex-col tw-justify-center">
                              <div className="fw-7 tw-text-2xl">
                                {t(`crossBorder.features.${value.title}.title`)}
                              </div>
                              {value.content.map(
                                (value2: any, index: number) => (
                                  <>
                                    <div className="d-flex">
                                      <FontAwesomeIcon
                                        icon={faCheck}
                                        color="#FFFFFF"
                                        style={iconStyle}
                                      />{" "}
                                      <div className="d-inline-block py-2">
                                        {t(
                                          `crossBorder.features.${value.title}.${value2}`,
                                        )}
                                      </div>
                                    </div>
                                  </>
                                ),
                              )}
                            </div>
                          </div>
                        )}
                      </a>
                    ) : (
                      <a
                        href={`#${index}`}
                        className="text-decoration-none "
                        id={index.toString()}
                        style={{ color: "#333333" }}
                        rel="canonical"
                      >
                        <div className="fw-7 tw-text-2xl">
                          {t(`crossBorder.features.${value.title}.title`)}
                        </div>
                        <>
                          <div className="row my-4">
                            <div className=" pt-4">
                              {value.content.map(
                                (value2: any, index: number) => (
                                  <>
                                    <div className="d-flex ">
                                      <FontAwesomeIcon
                                        icon={faCheck}
                                        color="#FFFFFF"
                                        style={iconStyle}
                                      />{" "}
                                      <div className="d-inline-block py-2">
                                        {t(
                                          `crossBorder.features.${value.title}.${value2}`,
                                        )}
                                      </div>
                                    </div>
                                  </>
                                ),
                              )}
                            </div>
                            <div className="col-xl-7 ps-3">
                              <Player
                                src={value.img}
                                loop
                                autoplay
                                style={{ width: "100%", height: "auto" }}
                              >
                                {" "}
                                <Controls />{" "}
                              </Player>
                            </div>
                          </div>
                        </>
                      </a>
                    )}
                  </>
                ))}
              </Scrollspy>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
