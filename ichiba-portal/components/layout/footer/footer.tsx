/* eslint-disable @next/next/link-passhref */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faEnvelope,
  faCheck,
} from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import bocongthuong from "@/public/icons/logoSaleNoti.png";

import facebook from "@/public/icons/facebook.png";
import tiktok from "@/public/icons/Instagramicon.png";
import linkedin from "@/public/icons/Linkedin.png";
import twitter from "@/public/icons/Twitter.png";
import youtube from "@/public/icons/Youtube.png";
import { useTranslation } from "next-i18next";
import router, { useRouter } from "next/router";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import US from "@/public/icons/header/global.png";
import VI from "@/public/icons/header/vietnam.svg";
import { Dropdown } from "react-bootstrap";
import React from "react";
import endpointRegion from "@/const/listRegion";
import { linkFAQ } from "@/utils/utils";
import clsx from "clsx";
import Social from "./Social";
import Head from "next/head";

const urlImage = [
  {
    src: facebook,
    urlVi: "https://www.facebook.com/ichiba.oms/",
    urlEn: "https://www.facebook.com/ichibaglobal",
  },
  {
    src: twitter,
    urlVi: "https://twitter.com/IChibaGlobal",
    urlEn: "https://twitter.com/IChibaGlobal",
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

  const { asPath } = router;
  const [domains, setDomains] = useState("https://ichiba.vn");
  const [email, setEmail] = useState("");

  const location = useRef<string>(router?.locale === "vi" ? "Việt Nam" : "USA");

  const urlCareersDiscover =
    router?.locale === "vi"
      ? "https://careers.ichiba.net/"
      : "https://careers.ichiba.net/en";

  const urlCareersOurlife =
    router?.locale === "vi"
      ? "https://careers.ichiba.net/our-life"
      : "https://careers.ichiba.net/en/our-life";

  useEffect(() => {
    if (router?.locale === "vi") {
      setDomains("https://ichiba.vn");
    } else {
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
    ),
  );

  const linkUseGuide = (lang: string) => {
    let link = "";
    switch (lang) {
      case "vi":
        link = "https://help.ichiba.net/vi";
        break;
      default:
        link = "https://help.ichiba.net/en";
        break;
    }
    return link;
  };
  const nav = [
    {
      title: t("footer.ichiba"),
      items: [
        {
          label: t("footer.discover"),
          link: urlCareersDiscover,
          rel: "nofollow",
        },
        {
          label: t("footer.trust"),
          link: "/trust-security",
          rel: "nofollow",
        },
        {
          label: t("footer.careers"),
          link: urlCareersOurlife,
          rel: "nofollow",
        },
        {
          img: bocongthuong,
          link: "http://online.gov.vn/Home/WebDetails/64338",
          rel: "nofollow",
        },
      ],
    },
    {
      title: t("footer.product"),
      items: [
        {
          label: t("footer.pos"),
          link: "/products/pos/overview",
        },
        {
          label: t("footer.digital"),
          link: "/products/storefront-layer/overview",
        },
        {
          label: t("footer.crossEcom"),
          link: "/products/cross-border-forwarding/overview",
        },
        {
          label: t("footer.ship4p"),
          link: "/products/ship4p/overview",
        },
        {
          label: t("footer.cdxp"),
          link: "/products/cdxp/overview",
        },
        {
          label: t("footer.integration"),
          link: "/products/integrations",
        },
      ],
    },
    {
      title: t("footer.solutions"),
      items: [
        {
          label: t("footer.omniRetail"),
          link: "/solutions/omnichannel-retailers",
        },
        {
          label: t("footer.brand"),
          link: "/solutions/brand-commerce",
        },
        {
          label: t("footer.cross"),
          link: "/solutions/cross-border-ecommerce",
        },
        {
          label: t("footer.orderfulfillment"),
          link: "/solutions/order-fulfillment",
        },
        {
          label: t("footer.ecomFulfill"),
          link: "/solutions/ecommerce-fulfillment",
        },
        {
          label: t("footer.warehouse"),
          link: "/solutions/warehouse-fulfillment",
        },
        {
          label: t("footer.asiaFulfillmentServ"),
          link: "/solutions/cross-border-ecommerce",
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
          label: t("footer.faq"),
          link: linkFAQ(router?.locale as string),
          rel: "nofollow",
        },
        {
          label: t("footer.useGuide"),
          link: linkUseGuide(router?.locale as string),
          rel: "nofollow",
        },
        {
          label: t("footer.video"),
          link: "https://www.youtube.com/@ichibaglobal",
          rel: "nofollow",
        },
        // {
        //   label: t("footer.event"),
        //   link: "https://docs.ichiba.net/",
        // },
        // {
        //   label: t("footer.documentation"),
        //   link: "https://docs.ichiba.net/",
        // },
      ],
    },
  ];
  function validateEmail(email: String) {
    // Biểu thức chính quy để kiểm tra định dạng email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Kiểm tra chuỗi với biểu thức chính quy
    return emailRegex.test(email as string);
  }
  const submit = (event: any) => {
    event?.preventDefault();
    const valid = validateEmail(email);
    if (valid) {
      toast.success(t("suscess"), { autoClose: 700 });
      setEmail("");
    } else {
      toast.error(t("false"), { autoClose: 700 });
    }
    try {
    } catch (error) {
      console.error("Failed to copy text: ", error);
    }
  };
  return (
    <>
      <div id="footer" className="pt-phone-24">
        <div className="container ">
          <div className="row footer-nav">
            {nav.map((x, idx) => (
              <div
                key={`${x.items}_${idx}`}
                className="col-xl-3 col-md-6 col-sm-6 pb-lg-5 tw-pb-4"
              >
                <div className="title pb-lg-3 pb-1">
                  <div className="text-uppercase">{x.title}</div>
                </div>
                <div>
                  {x.items.map((i: any, idx) => (
                    <Link
                      className="d-block cursor py-1 cursor fs-md-14 text-capitalize"
                      key={`${i.label}_${idx}`}
                      href={i.link}
                      target="_blank"
                      rel="noindex"
                    >
                      {i?.img ? (
                        <Image
                          src={i?.img}
                          alt="footer-items"
                          style={{ width: "150px", height: "auto" }}
                          className={clsx(!router?.locale && "d-none", ` mt-2`)}
                          key={`${i.label}_${idx}`}
                        />
                      ) : (
                        i.label
                      )}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>

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
                      <Link
                        href={
                          router?.locale === "vi" ? value.urlVi : value.urlEn
                        }
                        target={"_blank"}
                        key={index}
                        rel="nofollow"
                      >
                        <div className="d-inline-block me-3 ">
                          <Image src={value.src} alt="index" />
                        </div>
                      </Link>
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
              <form onSubmit={submit}>
                <div className="d-flex align-items-center">
                  <div className="footer-input fs-md-14 flex tw-justify-between">
                    <input
                      type="text"
                      value={email}
                      id="emailSubscribe"
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Ex: Youremail@gmail.com"
                    />
                  </div>
                  <button
                    type="submit"
                    className="footer-button ms-2 cursor fs-md-14"
                  >
                    <div>{t("footer.subscribe")}</div>
                  </button>
                </div>
              </form>
            </div>
            <div></div>
          </div>
          <div className="our-team mt-3 mg-lg-5 py-lg-4 py-2">
            <div className="text-uppercase fs-18 fw-4 pb-4 fs-md-16 fs-phone-18 fw-phone-700">
              <div>WE ARE GLOBAL, MEET OUR TEAM</div>
            </div>
            <div className="row mt-2">
              <div className="col-lg-3 d-flex tw-pb-4">
                <div className="tw-pr-4">
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
              <div className="col-lg-3 d-flex tw-pb-4">
                <div className="tw-pr-4">
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
              </div>
              <div className="col-lg-3 d-flex tw-pb-4">
                <div className="tw-pr-4">
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
              <div className="col-lg-3 d-flex tw-pb-4">
                <div className="tw-pr-4">
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
                rel="nofollow"
              >
                {t("footer.term")}
              </Link>
              <Link
                style={{ borderRight: "1px solid #DDDDDD" }}
                className="px-4 fs-md-12 text-decoration-none color-black"
                href={`https://docs.ichiba.net/${
                  router?.locale === "vi" ? "" : "en/"
                }docs/legal/privacy-policy`}
                target="_blank"
                rel="nofollow"
              >
                {t("footer.privacy")}
              </Link>
              <div className=" ps-lg-4">
                <Dropdown drop="up" className="cursor " id="regionFooter">
                  <Dropdown.Toggle as={CustomToggle} id="aa">
                    <div className="items-Location text-drop">
                      <div className="d-flex">
                        <Image
                          src={location.current === "Việt Nam" ? VI : US}
                          alt="locale"
                          style={{
                            width: "24px",
                            height: "auto",
                            borderRadius: "4px",
                            marginRight: "10px",
                          }}
                        />
                        <div className="">{location.current}</div>
                      </div>
                    </div>
                  </Dropdown.Toggle>
                  <Dropdown.Menu
                    renderOnMount={true}
                    className=" mt-1 p-2"
                    style={{
                      minWidth: "400px",
                      border: "none",
                      boxShadow: "0 2px 10px rgba(0,0,0,.25)",
                    }}
                  >
                    <div className="row p-3 p-lg-4">
                      <div className="col-6">
                        {endpointRegion.regionLeft.map((value, index) => (
                          <div
                            key={index}
                            className={` fs-md-14 py-1 item-region ${
                              location.current === value.title ? "active" : ""
                            }`}
                            onClick={() =>
                              changeLocation(
                                value.title === "Việt Nam" ? "vi" : "en",
                                value.title,
                              )
                            }
                          >
                            {value.title}
                          </div>
                        ))}
                      </div>
                      <div className="col-6">
                        {endpointRegion.regionRight.map((value, index) => (
                          <div
                            key={index}
                            className={`fs-md-14 py-1 item-region ${
                              location.current === value.title ? "active" : ""
                            }`}
                            onClick={() =>
                              changeLocation(
                                value.title === "Việt Nam" ? "vi" : "en",
                                value.title,
                              )
                            }
                          >
                            {value.title}
                          </div>
                        ))}
                      </div>
                    </div>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
}
