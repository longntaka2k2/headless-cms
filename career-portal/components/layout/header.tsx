/* eslint-disable @next/next/link-passhref */
import router, { useRouter } from "next/router";
import Image from "next/image";
import facebook from "@/public/icons/facebook.png";
import tiktok from "@/public/icons/Instagramicon.png";
import linkedin from "@/public/icons/Linkedin.png";

import logo from "@/public/icons/logoNew.png";
import { useEffect, useState } from "react";
import { faBars, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Dropdown } from "react-bootstrap";
import React from "react";
import { useTranslation } from "next-i18next";
import Link from "next/link";
import VI from "@/public/icons/VI.png";
import US from "@/public/icons/US.svg";

function useScrollCount() {
  const [scrollCount, setScrollCount] = useState(0);

  useEffect(() => {
    function handleScroll() {
      const scrollTop =
        document.documentElement.scrollTop || document.body.scrollTop;
      setScrollCount(scrollTop);
    }

    window.addEventListener("scroll", handleScroll);
  }, []);

  return scrollCount;
}
interface MyComponentProps {
  children?: any;
  onClick?: () => void;
  className?: string;
  // Các props khác
}

// eslint-disable-next-line react/display-name
const CustomToggle = React.forwardRef<null, MyComponentProps>((props, ref) => (
  // Dùng props.children và props.onClick ở đây
  <span className=" " onClick={props.onClick}>
    {props.children}
  </span>
));

export default function HeaderCarrer() {
  const { t } = useTranslation("common");
  const [rotateChevron, setRotateChevron] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const { pathname, asPath, query } = router;
  const [isOpenLang, setOpenLang] = useState(false);

  const handleRotate = async () => {
    await setRotateChevron(!rotateChevron);
    setIsOpen(!isOpen);
  };
  const headerMobile = [
    { title: t("header.company.discover.title"), url: "/" },
    { title: t("header.company.careers.title"), url: "/our-life" },
    { title: t("header.company.job"), url: "/jobs" },
    { title: "Blog", url: "/blog" },
  ];
  const listLocales = (router.locales as string[]).map((val) => {
    return {
      value: val,
      label: val === "vi" ? t("header.vie") : t("header.en"),
      img: val === "vi" ? VI : US,
    };
  });
  const changeLocation = (res: string, locale: string) => {
    router.replace(asPath, asPath, { locale: locale });
    if (res === "mobile") {
      handleRotate();
      openLanguge();
    } else {
      const element = document.getElementById("dropdown");
      element?.click();
    }
  };
  const closeModal = async () => {
    await setRotateChevron(!rotateChevron);
    setIsOpen(!isOpen);
  };
  function openLanguge() {
    setOpenLang(!isOpenLang);
  }
  const rotate = rotateChevron === true ? "rotate(180deg)" : "rotate(0)";
  const scrollCount = useScrollCount();

  return (
    <>
      <div id="header-ship4p">
        <div className="header">
          <div className="container">
            <div className="">
              <div className="row">
                <div className="col-lg-3 col-9">
                  <div className="mt-1 tw-flex tw-items-center">
                    <span
                      onClick={() =>
                        router.push(
                          `https://ichiba.${
                            router?.locale === "vi" ? "vn" : "net"
                          }/`
                        )
                      }
                      className="color-note text-decoration-none d-inline-block"
                    >
                      <Image
                        priority={true}
                        src={logo}
                        width={128}
                        height={40}
                        alt="logo"
                        className="cursor pe-2 header-icon max-w-[128px] max-h-[40px] w-full h-full"
                      />
                    </span>
                    <Link
                      href={"/"}
                      className="color-note text-decoration-none d-inline-block"
                    >
                      <div className="fw-7 fs-20 ps-2 fs-md-18 border-left ">
                        Careers
                      </div>
                    </Link>
                  </div>
                </div>
                <div className=" col-lg-9 res-pc d-flex  d-flex justify-content-end">
                  <div
                    className="d-flex align-items-center ps-lg-3 float-end"
                    style={{ height: "100%" }}
                  >
                    <div className="header-items fs-14  px-3 cursor">
                      <Link
                        href={"/"}
                        className={
                          router?.pathname === "/"
                            ? "header-active text-decoration-none"
                            : "color-header text-decoration-none fw-5"
                        }
                      >
                        {t("header.company.discover.title")}
                      </Link>
                    </div>
                    <div className="header-items fs-14  px-3 cursor">
                      <Link
                        href={"/our-life"}
                        className={
                          router?.pathname === "/our-life"
                            ? "header-active text-decoration-none"
                            : "color-header text-decoration-none fw-5"
                        }
                      >
                        {t("header.company.careers.title")}
                      </Link>
                    </div>
                    <div className="header-items fs-14 px-3 cursor">
                      <Link
                        href={"/jobs"}
                        className={
                          router?.pathname === "/jobs"
                            ? "header-active text-decoration-none"
                            : "color-header text-decoration-none fw-5"
                        }
                      >
                        {t("header.company.job")}
                      </Link>
                    </div>
                    <div className=" header-items fs-14 px-3 cursor">
                      <Link
                        href={"/blog"}
                        className="color-header text-decoration-none fw-5"
                      >
                        Blog
                      </Link>
                    </div>
                    <div className="px-3">
                      <Dropdown className="cursor" id="dropdown">
                        <Dropdown.Toggle as={CustomToggle} id="aa">
                          <div className="items-Location text-drop">
                            <div className="d-flex">
                              <Image
                                src={router.locale === "vi" ? VI : US}
                                alt=""
                                style={{
                                  width: "24px",
                                  height: "auto",
                                  marginTop: "2px",
                                  borderRadius: "4px",
                                  marginRight: "10px",
                                }}
                              />
                            </div>
                          </div>
                        </Dropdown.Toggle>
                        <Dropdown.Menu
                          renderOnMount={true}
                          className="position-fixed mt-1 py-2 px-3"
                          style={{
                            top: "64px",
                            width: "max-content",
                            border: "none",
                            boxShadow: "0 2px 10px rgba(0,0,0,.25)",
                            minWidth: "min-content",
                          }}
                        >
                          <div className="">
                            {listLocales.map((val, index) => {
                              return (
                                <div
                                  key={index}
                                  onClick={() =>
                                    changeLocation("pc", val.value)
                                  }
                                  className="items-Location py-1 text-drop fw-5 fs-14"
                                >
                                  <div className="tw-flex tw-items-center">
                                    <Image
                                      className="align-self-center"
                                      src={val.img}
                                      alt=""
                                      style={{
                                        width: "24px",
                                        height: "auto",
                                        borderRadius: "4px",
                                        marginRight: "10px",
                                      }}
                                    />
                                    <span className="d-inline-block  ">
                                      {val.label}
                                    </span>
                                  </div>
                                </div>
                              );
                            })}
                          </div>
                        </Dropdown.Menu>
                      </Dropdown>
                    </div>
                  </div>
                  <div className="ms-3 tw-flex">
                    <Link
                      href={"https://www.facebook.com/ichibacareers"}
                      target="_blank"
                    >
                      <Image src={facebook} alt="" />
                    </Link>
                    <Link
                      href={"https://www.instagram.com/ichibaglobal/"}
                      target="_blank"
                    >
                      <Image src={tiktok} alt="" className="mx-3" />
                    </Link>
                    <Link
                      href={"https://www.linkedin.com/company/ichiba-global/"}
                      target="_blank"
                    >
                      <Image src={linkedin} alt="" />
                    </Link>
                  </div>
                </div>
                <div
                  className="col res-mobile align-self-center ms-4"
                  onClick={() => handleRotate()}
                >
                  <FontAwesomeIcon
                    icon={faBars}
                    size="xl"
                    className="float-end"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={isOpen ? "drop-header " : "drop-header-close"}>
          <div
            className={isOpen ? "model-header" : ""}
            onClick={() => setIsOpen(false)}
          ></div>
          <div className="pt-2 drop-header-content">
            {headerMobile.map((value, index) => (
              <div
                className={`${
                  router?.pathname === value.url ? "active-mobile " : " "
                } " header-title-mobile px-3 item-header-mobile" `}
                key={index}
              >
                <Link
                  onClick={() => handleRotate()}
                  href={value.url ?? "/"}
                  className={`${
                    router?.pathname === value.url ? "fw-7 " : " "
                  }" color-black text-decoration-none  d-block fw-5"`}
                >
                  {value.title}
                </Link>
              </div>
            ))}

            <div className="nav-items px-3 py-3 mt-2 item-header-mobile">
              <div className="nav-items-lv1" onClick={() => openLanguge()}>
                <div className="d-flex justify-content-between">
                  {/* <FontAwesomeIcon icon={faGlobe} size="xl" /> */}
                  <div className="tw-flex tw-items-center">
                    <Image
                      src={router?.locale === "vi" ? VI : US}
                      alt=""
                      className="me-2"
                      style={{
                        width: "34px",
                        height: "auto",
                        borderRadius: "4px",
                      }}
                    />
                    <span className="fs-md-14 fw-5">
                      {router?.locale === "vi"
                        ? t("header.vie")
                        : t("header.en")}
                    </span>
                  </div>
                  <div className={`icon ${isOpenLang ? "rotate-180" : ""}`}>
                    <FontAwesomeIcon icon={faChevronDown} />
                  </div>
                </div>
              </div>
              <div
                className={
                  isOpenLang
                    ? "nav-items-lv2 dropdown mt-2 pb-2"
                    : "nav-items-lv2-close"
                }
              >
                {listLocales.map((val, index) => {
                  return (
                    <div
                      key={index}
                      onClick={() => changeLocation("mobile", val.value)}
                      className="fw-5 items-dropdown py-1 text-drop ps-3 tw-flex tw-items-center"
                    >
                      <Image
                        src={val.img}
                        alt=""
                        className="me-2"
                        style={{
                          width: "24px",
                          height: "auto",
                          borderRadius: "4px",
                        }}
                      />
                      <span className="">{val.label}</span>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="py-3 px-3 item-header-mobile tw-flex">
              <Image src={facebook} alt="" width={35} />
              <Image src={tiktok} alt="" className="mx-3" width={35} />
              <Image src={linkedin} alt="" width={35} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
