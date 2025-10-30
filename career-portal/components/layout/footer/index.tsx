/* eslint-disable @next/next/link-passhref */
import { faEnvelope, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";

import tiktok from "@/public/icons/Instagramicon.png";
import linkedin from "@/public/icons/Linkedin.png";
import twitter from "@/public/icons/Twitter.png";
import youtube from "@/public/icons/Youtube.png";
import facebook from "@/public/icons/facebook.png";
import US from "@/public/icons/header/global.png";
import VI from "@/public/icons/header/vietnam.svg";
import { useTranslation } from "next-i18next";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useRef, useState } from "react";
import { Dropdown } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import bocongthuong from "@/public/icons/logoSaleNoti.png";
import FooterItems from "./FooterItems";

const urlImage = [
  {
    src: facebook,
    urlVi: "https://www.facebook.com/ichiba.oms/",
    urlEn: "https://www.facebook.com/ichibaglobal",
  },
  {
    src: twitter,
    urlVi: "https://www.facebook.com/ichiba.oms/",
    urlEn: "https://www.facebook.com/ichiba.oms/",
  },
  {
    src: tiktok,
    urlVi: "https://www.instagram.com/ichibaglobal/",
    urlEn: "https://www.instagram.com/ichibaglobal/",
  },
  {
    src: youtube,
    urlVi: "https://www.youtube.com/@ichibaoms/",
    urlEn: "https://www.youtube.com/@ichibaglobal/",
  },
  {
    src: linkedin,
    urlVi: "https://www.linkedin.com/company/ichiba-global/",
    urlEn: "https://www.linkedin.com/company/ichiba-global/",
  },
];

export default function Footer() {
  const router = useRouter();
  const { t } = useTranslation("common");

  const { pathname, asPath, query } = router;
  const [domains, setDomains] = useState("https://ichiba.vn");
  const [urlDocs, setUrlDocs] = useState(
    "https://docs.ichiba.net/en/docs/legal/terms-and-conditions/"
  );
  const location = useRef<string>(router?.locale === "vi" ? "Việt Nam" : "USA");

  const urlCareersDiscover =
    router?.locale === "vi"
      ? "https://careers.ichiba.net/"
      : "https://careers.ichiba.net/en";

  const urlCareersOurlife =
    router?.locale === "vi"
      ? "https://careers.ichiba.net/our-life"
      : "https://careers.ichiba.net/en/our-life";

  const urlCareersTrust =
    router?.locale === "vi"
      ? "https://ichiba.vn/trust-security"
      : "https://ichiba.net/trust-security";

  const urlIchiba =
    router?.locale === "vi" ? "https://ichiba.vn" : "https://ichiba.net";

  useEffect(() => {
    if (router?.locale === "vi") {
      setUrlDocs("https://docs.ichiba.net/docs/legal/terms-and-conditions/");
      setDomains("https://ichiba.vn");
    } else {
      setUrlDocs("https://docs.ichiba.net/en/docs/legal/terms-and-conditions/");
      setDomains("https://ichiba.net");
    }
  }, [router?.locale]);

  useEffect(() => {
    const country = localStorage.getItem("country")
      ? localStorage.getItem("country")
      : "";
    if (country && country !== "Việt Nam" && router?.locale !== "vi") {
      location.current = country;
    } else if (router?.locale === "vi") {
      location.current = "Việt Nam";
    } else {
      location.current = "USA";
    }
  }, []);

  const changeLocation = (locale: string, country: string) => {
    router.replace(asPath, asPath, { locale: locale });
    localStorage.setItem("country", country);
    location.current = country;
  };

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText("support@ichiba.net");
      toast.success(t("footer.copy"), { autoClose: 700 });
    } catch (error) {
      console.error("Failed to copy text: ", error);
    }
  };

  interface MyComponentProps {
    children?: any;
    onClick?: () => void;
    className?: string;
    // Các props khác
  }
  // eslint-disable-next-line react/display-name
  const CustomToggle = React.forwardRef<null, MyComponentProps>(
    (props, ref) => (
      // Dùng props.children và props.onClick ở đây
      <span className="" onClick={props.onClick}>
        {props.children}
      </span>
    )
  );
  const nav = [
    {
      title: t("brand"),
      items: [
        {
          label: t("footer.discover"),
          link: urlCareersDiscover,
        },
        {
          label: t("footer.trust"),
          link: urlCareersTrust,
        },
        {
          label: t("footer.careers"),
          link: urlCareersOurlife,
        },
        {
          img: bocongthuong,
          link: "http://online.gov.vn/Home/WebDetails/64338",
        },
      ],
    },
    {
      title: t("footer.product"),
      items: [
        {
          label: t("footer.oms"),
          link: urlIchiba + "/products/oms/overview",
        },
        {
          label: t("footer.pim"),
          link: urlIchiba + "/products/pim/overview",
        },
        {
          label: t("footer.pos"),
          link: urlIchiba + "/products/pos/overview",
        },
        {
          label: t("footer.digital"),
          link: urlIchiba + "/products/digital-commerce/overview",
        },
        {
          label: t("footer.crossEcom"),
          link: urlIchiba + "/products/smart-cross-border/overview",
        },
        {
          label: t("footer.ship4p"),
          link: urlIchiba + "/products/ship4p/overview",
        },
        {
          label: t("footer.cdxp"),
          link: urlIchiba + "/products/cdxp/overview",
        },
        {
          label: t("footer.integration"),
          link: urlIchiba + "/products/integration",
        },
      ],
    },
    {
      title: t("footer.solutions"),
      items: [
        {
          label: t("footer.ecomDis"),
          link: urlIchiba + "/solutions/ecommerce-distributors",
        },
        {
          label: t("footer.omniRetail"),
          link: urlIchiba + "/solutions/omnichannel-retailers",
        },
        {
          label: t("footer.brand"),
          link: urlIchiba + "/solutions/brand",
        },
        {
          label: t("footer.cross"),
          link: urlIchiba + "/solutions/cross-border-ecommerce",
        },
        {
          label: t("footer.orderfulfillment"),
          link: urlIchiba + "/solutions/fulfillment",
        },
        {
          label: t("footer.ecomFulfill"),
          link: urlIchiba + "/solutions/ecommerce-fulfillment",
        },
        {
          label: t("footer.warehouse"),
          link: urlIchiba + "/solutions/warehouse-fulfillment",
        },
        {
          label: t("footer.asiaFulfillmentServ"),
          link: urlIchiba + "/solutions/ecommerce-fulfillment",
        },
      ],
    },
    {
      title: t("footer.resource"),
      items: [
        {
          label: t("footer.blog"),
          link: "/blog",
        },
        {
          label: t("footer.useGuide"),
          link: "https://docs.ichiba.net/",
        },
        {
          label: t("footer.video"),
          link: "https://docs.ichiba.net/",
        },
        {
          label: t("footer.event"),
          link: "https://docs.ichiba.net/",
        },
        {
          label: t("footer.documentation"),
          link: "https://docs.ichiba.net/",
        },
      ],
    },
  ];
  return (
    <>
      <div id="footer" className="pt-phone-24">
        <div className="container ">
          {/* TODO: FooterItems ver1: remove when ver2 ok */}
          {/* <div className="row footer-nav">
            {nav.map((x, idx) => (
              <div
                key={`${x.items}_${idx}`}
                className="col-xl-3 col-md-6 col-sm-6 pb-lg-5 pb-3"
              >
                <div className="title pb-lg-3 pb-1">
                  <div className="text-uppercase">{x.title}</div>
                </div>
                <div>
                  {x.items.map((i, idx) => (
                    i.img ? (
                      <Link
                        className="d-block cursor py-1 cursor fs-md-14 text-capitalize"
                        key={`${i.label}_${idx}`}
                        href={i.link}
                        target="_blank"
                      >
                        <Image src={i.img} alt="" style={{ width: '150px', height: 'auto' }} className={` ${router?.locale === 'vi' ? '' : 'd-none'} mt-2`} key={`${i.label}_${idx}`} />
                      </Link>
                    ) : (<Link
                      className="d-block cursor py-1 cursor fs-md-14 text-capitalize"
                      key={`${i.label}_${idx}`}
                      href={i.link}
                      target="_blank"
                    >
                      {i.label}
                    </Link>)
                  ))}
                </div>
              </div>
            ))}
          </div> */}

          {/* TODO: FooterItems ver2 */}
          <FooterItems />

          <div className="row">
            <div className="col-xl-6 col-md-6 col-sm-6">
              <div className="title pb-lg-3 pb-1">
                <div>{t("footer.contactUs")}</div>
              </div>
              <div>
                <div
                  className="d-block fs-md-14 cursor"
                  onClick={() => copyEmail()}
                >
                  <FontAwesomeIcon icon={faEnvelope} /> &nbsp;
                  support@ichiba.net
                </div>
              </div>
              <div className="pt-lg-4 pt-3 d-flex d-lg-block">
                <div className="mx-auto ">
                  {urlImage.map((value, index) => (
                    <div key={index} className="d-inline-block">
                      {router?.locale === "vi" ? (
                        <>
                          <Link
                            href={value.urlVi}
                            target={"_blank"}
                            key={index}
                          >
                            <div className="d-inline-block me-3 ">
                              <Image src={value.src} alt="index" />
                            </div>
                          </Link>
                        </>
                      ) : (
                        <>
                          <Link
                            href={value.urlEn}
                            target={"_blank"}
                            key={index}
                          >
                            <div className="d-inline-block me-3 =">
                              <Image src={value.src} alt="index" />
                            </div>
                          </Link>
                        </>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-md-6 col-sm-6 ">
              <div className="title mt-3">
                <div>{t("footer.subscribe")}</div>
              </div>
              <div className="pb-2 fs-md-14">
                <div>{t("footer.dontMiss")}</div>
              </div>
              <div className="d-flex align-items-center">
                <div className="footer-input fs-md-14">
                  <input type="text" placeholder="Ex: Youremail@gmail.com" className="tw-placeholder-ic-ink-4" />
                </div>
                <div className="footer-button ms-2   cursor fs-md-14">
                  <div>{t("footer.subscribe")}</div>
                </div>
              </div>
            </div>
            <div></div>
          </div>
          <div className="our-team mt-3 mg-lg-5 py-lg-4 py-2">
            <div className="text-uppercase fs-18 fw-4 pb-4 fs-md-16 fs-phone-18 fw-phone-700">
              <div>WE ARE GLOBAL, MEET OUR TEAM</div>
            </div>
            <div className="row mt-2">
              <div className="col-lg-3 d-flex pb-3">
                <div className="pe-3">
                  <div className=" icon-location">
                    <FontAwesomeIcon
                      icon={faLocationDot}
                      style={{ color: "#1D39C4", fontSize: "20px" }}
                    />
                  </div>
                </div>
                <div className="fs-md-14">
                  <div className="fw-5">Singapore</div>
                  <div className="fs-14">
                    470 North Bridge road, #05-12, Bugis Cube, Singapore
                  </div>
                  <div className="fs-14"></div>
                </div>
              </div>
              {/* <div className="col-lg-3 d-flex pb-3">
                <div className="pe-3">
                  <div className=" icon-location">
                    <FontAwesomeIcon
                      icon={faLocationDot}
                      style={{ color: "#1D39C4", fontSize: "20px" }}
                    />
                  </div>
                </div>
                <div className="fs-md-14">
                  <div className="fw-5">Ho Chi Minh, Vietnam</div>
                  <div className="fs-14">{t("footer.hoChiMinh")}</div>
                </div>
              </div> */}
              <div className="col-lg-3 d-flex pb-3">
                <div className="pe-3">
                  <div className=" icon-location">
                    <FontAwesomeIcon
                      icon={faLocationDot}
                      style={{ color: "#1D39C4", fontSize: "20px" }}
                    />
                  </div>
                </div>
                <div className="fs-md-14">
                  <div className="fw-5">Hanoi, Vietnam</div>
                  <div className="fs-14">{t("footer.haNoi")}</div>
                </div>
              </div>
              <div className="col-lg-3 d-flex pb-3">
                <div className="pe-3">
                  <div className=" icon-location">
                    <FontAwesomeIcon
                      icon={faLocationDot}
                      style={{ color: "#1D39C4", fontSize: "20px" }}
                    />
                  </div>
                </div>
                <div className="fs-md-14">
                  <div className="fw-5">Japan</div>
                  <div className="fs-14">
                    3-chome-10-8 Shinsuna, Koto City, Tokyo 136-0075, Japan
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="d-lg-flex justify-content-between pt-lg-4 pt-3 fs-md-14">
            <div>© 2023 IChiba OnePlatform. All Rights Reserved</div>
            <div className="d-lg-flex ">
              <Link
                style={{ borderRight: "1px solid #DDDDDD" }}
                className="pe-4 fs-md-12 text-decoration-none color-black"
                href={`https://docs.ichiba.net/${
                  router?.locale === "vi" ? "" : "en/"
                }docs/legal/terms-and-conditions`}
                target="_blank"
              >
                {t("footer.term")}
              </Link>
              <Link
                // style={{ borderRight: "1px solid #DDDDDD" }}
                className="px-4 fs-md-12 text-decoration-none color-black"
                href={`https://docs.ichiba.net/${
                  router?.locale === "vi" ? "" : "en/"
                }docs/legal/privacy-policy`}
                target="_blank"
              >
                {t("footer.privacy")}
              </Link>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
}
