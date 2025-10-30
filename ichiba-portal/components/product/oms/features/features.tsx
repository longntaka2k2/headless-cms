import { useTranslation } from "next-i18next";
import { Player, Controls } from "@lottiefiles/react-lottie-player";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import Scrollspy from "react-scrollspy";
import { scroller, Link, Events } from "react-scroll";
import Link2 from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import Fearture1 from "@/public/icons/oms/features/1.json";
import Fearture2 from "@/public/icons/oms/features/2.json";
import Fearture3 from "@/public/icons/oms/features/3.json";
import Fearture4 from "@/public/icons/oms/features/4.json";
import Fearture5 from "@/public/icons/oms/features/6.json";
import Fearture6 from "@/public/icons/oms/features/5.json";
import Fearture7 from "@/public/icons/oms/features/7.json";
import Fearture8 from "@/public/icons/oms/features/8.json";
import Fearture2Vi from "@/public/icons/oms/features/2-VI.json";
import Fearture3Vi from "@/public/icons/oms/features/3-VI.json";
import Fearture4Vi from "@/public/icons/oms/features/4-VI.json";
import Fearture5Vi from "@/public/icons/oms/features/5-VI.json";
import Fearture6Vi from "@/public/icons/oms/features/6-VI.json";
import { useRouter } from "next/router";
import useWidth from "@/hooks/useWidth";

const featuresObject = [
  {
    title: "social",
    content: ["create", "automatically", "filter", "creatOrder"],
    img: Fearture1,
    imgVi: Fearture1,
  },
  {
    title: "integration",
    content: ["oms", "orchestrate", "erp", "integrate"],
    img: Fearture2,
    imgVi: Fearture2Vi,
  },
  {
    title: "catalog",
    content: ["effect", "automatically"],
    img: Fearture3,
    imgVi: Fearture3Vi,
  },
  {
    title: "fulfillment",
    content: ["mangage", "automatically", "store", "fasten"],
    img: Fearture4,
    imgVi: Fearture4Vi,
  },
  {
    title: "return",
    content: ["regardless", "manage", "api"],
    img: Fearture5,
    imgVi: Fearture5Vi,
  },
  {
    title: "shipping",
    content: ["ship", "integrates", "saveTime", "update"],
    img: Fearture6,
    imgVi: Fearture6Vi,
  },
  {
    title: "accounting",
    content: ["integrated", "once"],
    img: Fearture7,
    imgVi: Fearture7,
  },
  {
    title: "detailed",
    content: ["oms", "automatically", "api"],
    img: Fearture8,
    imgVi: Fearture8,
  },
];

const LottieRenderer = dynamic(
  () => import("@/components/common/lottieRenderer"),
  {
    loading: () => <p>Loading...</p>,
    ssr: false,
  },
);

export default function FeaturesComponent(props: any) {
  const { t } = useTranslation("common");

  let host = typeof window !== "undefined" ? window.location.origin : "";
  const router = useRouter();
  const scrollToElement = (id: string) => {
    scroller.scrollTo(id, {
      duration: 0,
      delay: 5,
      smooth: true,
      offset: -50,
    });
  };

  const widthCount = useWidth();

  return (
    <>
      <div className="features ">
        <div className="container">
          <h2 className="fs-36 fs-md-28 fw-7 text-center mb-4">
            {t("oms.pricing.tab.features")}
          </h2>
          <div className="row">
            <div className="col-lg-3">
              <div className="features-tab">
                {props?.featuresItems.map((value: any, index: number) => (
                  <>
                    <Link
                      activeClass="is-active "
                      className="features-title  d-block text-decoration-none fs-18 py-2 cursor"
                      style={{ color: "#333333" }}
                      to={index.toString() as string}
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={0}
                    >
                      {value?.Link}
                    </Link>
                  </>
                ))}
              </div>
            </div>
            <div className="col-lg-9 ">
              <Scrollspy items={[]} currentClassName="is-current">
                {props?.featuresItems?.map((value: any, index: number) => (
                  <div key={index} className="mt-md-4 mt-2">
                    <div className="d-none d-md-block">
                      <Link2
                        href={`#${index}`}
                        rel="canonical"
                        className="text-decoration-none text-uppercase fw-5 fs-16 pb-1"
                      >
                        {value?.Link}
                      </Link2>
                      <a
                        href={`#${index}`}
                        rel="canonical"
                        className="text-decoration-none "
                        id={index.toString()}
                        style={{ color: "#333333" }}
                        key={index}
                      >
                        <div className="fw-7 fs-24 fs-16"> {value.title}</div>
                        {index % 2 == 0 ? (
                          <>
                            <div className="row pt-4">
                              <div className="col-xl-5 ">
                                <div
                                  dangerouslySetInnerHTML={{
                                    __html: value?.content,
                                  }}
                                  className="fs-md-14"
                                />
                              </div>
                              <div className="col-xl-7 ps-3">
                                <div
                                  className="d-flex align-items-center"
                                  style={{ height: "100%" }}
                                >
                                  <LottieRenderer
                                    path={value?.media?.data?.attributes?.url}
                                    style={{ width: "600px", height: "100%" }}
                                  />
                                </div>
                              </div>
                            </div>
                          </>
                        ) : (
                          <>
                            <div className="row pt-4">
                              <div className="col-xl-7">
                                <div
                                  className="d-flex align-items-center"
                                  style={{ height: "100%" }}
                                >
                                  <LottieRenderer
                                    path={value?.media?.data?.attributes?.url}
                                    style={{ width: "600px", height: "100%" }}
                                  />
                                </div>
                              </div>
                              <div className="col-xl-5  ps-3 features-content-right">
                                <div
                                  dangerouslySetInnerHTML={{
                                    __html: value?.content,
                                  }}
                                  className="fs-md-14"
                                />
                              </div>
                            </div>
                          </>
                        )}
                      </a>
                    </div>

                    <div className="d-block d-md-none">
                      <a
                        href={`#${index}`}
                        rel="canonical"
                        className="text-decoration-none "
                        id={index.toString()}
                        style={{ color: "#333333" }}
                      >
                        <div className="fw-7 fs-24 fs-16"> {value.title}</div>
                        <>
                          <div className="row my-4">
                            <div className=" pt-md-4 pt-2">
                              <div
                                dangerouslySetInnerHTML={{
                                  __html: value?.content,
                                }}
                                className="fs-md-14"
                              />
                            </div>
                            <div className="col-xl-6 ps-3">
                              {/* <Image src={value.img} alt="" style={{width:'100%',height:'auto'}}/> */}
                              <LottieRenderer
                                path={value?.media?.data?.attributes?.url}
                                style={{ width: "100%", height: "auto" }}
                              />
                            </div>
                          </div>
                        </>
                      </a>
                      <div />
                    </div>
                  </div>
                ))}
              </Scrollspy>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
