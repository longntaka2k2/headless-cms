/* eslint-disable react/jsx-no-undef */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/link-passhref */
import logo from "@/public/icons/Logo.svg";
import {
  faArrowLeft,
  faBars,
  faCheck,
  faChevronDown,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTranslation } from "next-i18next";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { Fragment, useEffect, useRef, useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";
// import ship4p from "@/public/icons/ship4p.png";


import { getProfile } from "@/api";
import SvgIcon from "@/components/common/SvgIcon";
import { Profile } from "@/types";
import { useQuery } from "@tanstack/react-query";
import algoliasearch from "algoliasearch/lite";
import { AxiosResponse } from "axios";
import clsx from "clsx";
import "instantsearch.css/themes/satellite.css";
import { useOnClickOutside } from "usehooks-ts";
import { UserAvatar } from "./userAvatar";
import { WorkspaceDropdown } from "./workspaceDropdown";
// import DesktopHeaderMenu from "./DesktopHeaderMenu";
import DesktopHeaderMenuV2 from "./DesktopHeaderMenuV2";
import MobileHeaderMenuV2 from "./MobileHeaderMenuv2";
import { Popover, Transition } from "@headlessui/react";
import vn from "@/public/icons/VN.svg";
import us from "@/public/icons/us.svg";

const searchClient = algoliasearch(
  "DSX9275MTF",
  "0f93029fd5c028c817ff52f47089a236",
);
const orgUrl = process.env.NEXT_PUBLIC_ORG_URL;

const LanguageMenuItems = [
  {
    name: "Vietnamese (VI)",
    icon: vn,
    title: "VIE",
    href: "vi",
  },
  {
    name: "English (EN)",
    icon: us,
    title: "ENG",
    href: "en",
  },
];

export default function HeaderICB(props: any) {
  const { t } = useTranslation("common");
  const [isOpenModal, setOpenModal] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [headerType, setHeaderType] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isOpenItemMobile, setItemMobile] = useState("");
  const [contentTabMobile, setContentTabMobile] = useState<any>(undefined);
  const [isOpenNavItem, setOpenNavItem] = useState(0);
  const [name, setName] = useState<string | undefined>(undefined);
  const [userData, setUserData] = useState<Profile>();
  const [isDropdownShow, setIsDropdownShow] = useState(false);
  const router = useRouter();
  let host = typeof window !== "undefined" ? window.location.origin : "";
  const { pathname, asPath } = router;
  const locale = router?.locale;
  const [rotateChevron, setRotateChevron] = useState(false);
  const [language, setLanguage] = useState(
    locale === "vi" ? LanguageMenuItems[0] : (LanguageMenuItems[1] as any)
  );

  useEffect(() => {
    if (locale === "vi") {
      setLanguage(LanguageMenuItems[0]);
    } else {
      setLanguage(LanguageMenuItems[1]);
    }
    const handleScroll = () => {
      const isScrolledToTop = window.scrollY === 0;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const changeLanguage = (lang: any) => {
    setLanguage(lang);
    router.push(asPath, asPath, { locale: lang.href });
  };

  const handleRotate = async () => {
    await setRotateChevron(!rotateChevron);
  };
  const rotate = rotateChevron === true ? "tw-rotate(180deg)" : "tw-rotate(0)";

  const setHeadTypeByPath = async () => {
    if (
      pathname === "/products/ship4p/overview" ||
      pathname === "/products/ship4p/features" ||
      pathname === "/company/career/jobs" ||
      pathname === "/products/cross-border-forwarding/overview" ||
      pathname === "/products/cross-border/features" ||
      pathname === "/solutions/ecommerce-fulfillment" ||
      pathname === "/solutions/order-fulfillment" ||
      pathname === "/solutions/omnichannel-retailers" ||
      pathname.startsWith("/products")
    ) {
      return await setHeaderType(true);
    } else {
      return await setHeaderType(false);
    }
  };
  const fetchData = () => {
    setIsLoading(true); // Bắt đầu loading
    let host = typeof window !== "undefined" ? window.location.origin : "";
    let urlApi = "https://api.ichiba.vn";

    if (host != "https://ichiba.vn") {
      urlApi = "https://api.ichiba.net";
    }
    fetch(`${urlApi}/userinfo`, { credentials: "include" })
      ?.then((res) => res.json())
      .then((data) => {
        if (data) {
          setName(data.name);
        }
        setIsLoading(false); // Kết thúc loading sau khi có dữ liệu
      })
      .catch(() => {
        setIsLoading(false); // Kết thúc loading nếu có lỗi
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    setHeadTypeByPath();
  }, [pathname]);

  const toggle = () => setIsOpen(!isOpen);

  interface MyComponentProps {
    children?: any;
    onClick?: () => void;
    className?: string;
  }

  // eslint-disable-next-line react/display-name
  const CustomToggle = React.forwardRef<null, MyComponentProps>(
    (props, ref) => (
      // Dùng props.children và props.onClick ở đây
      <span className=" " onClick={props.onClick}>
        {props.children}
      </span>
    ),
  );

  const clickMenu = () => {
    const elementlv2 = document.getElementById("dropmenu");
    const element = document.getElementById("dropdown");
    const element3 = document.getElementById("model-pc");
    elementlv2?.classList.remove("show");
    element3?.classList.remove("show");
    element?.click();
  };

  const changeLocation = (locale: string) => {
    router.replace(asPath, asPath, { locale: locale });
    const element = document.getElementById("dropdown");
    element?.click();
  };

  const openTabProduct = async (item: any) => {
    await setItemMobile("product");
    await setContentTabMobile(item as any);
  };
  const openTabMyProduct = async (item: any) => {
    setItemMobile("my-product");
    setContentTabMobile(item as any);
  };
  const openTabInfo = async () => {
    await setItemMobile("info");
  };
  const closeModalMobile = () => {
    setIsOpen(false);
  };

  const myProductButtonClass = "my-product-button";
  const clickOutsideHandler = (e: any) => {
    if (e.target.classList.contains(myProductButtonClass)) {
      return;
    }
    setIsDropdownShow(false);
  };
  const sideBarRef = useRef<HTMLDivElement>(null);
  useOnClickOutside(sideBarRef, clickOutsideHandler);

  useQuery({
    queryKey: ["getProfileUser", name],
    queryFn: getProfile,
    enabled: !!name,
    onSuccess: (data: AxiosResponse<Profile, any>) => {
      setUserData(data.data);
    },
  });
  const [isPopupOpen, setIsPopUpOpen] = useState(false);
  const [idxActive, setIdxActive] = useState("");

  const hoverPopup = (e: boolean, idx: any) => {
    setIsPopUpOpen(e);
    setIdxActive(idx);
  };
  const userDropdownList = [
    {
      title: "header.profile.profile",
      icon: "profile",
      href: "https://org.ichiba.net/account-management/profile/",
      target: "_blank",
    },
    {
      title: "header.profile.login",
      icon: "social-login",
      href: "https://org.ichiba.net/account-management/social-login/",
      target: "_blank",
    },
    {
      title: "header.profile.address",
      icon: "address-book",
      href: "https://org.ichiba.net/account-management/address-book/",
      target: "_blank",
    },
    {
      title: "header.profile.security",
      icon: "security",
      href: "https://org.ichiba.net/account-management/security/",
      target: "_blank",
    },
    {
      title: "header.profile.logout",
      icon: "log-out",
      href: `https://api.ichiba.net/account/logout?redirectUrl=https://ichiba.net`,
    },
  ];

  return (
    <>
      <div
        id="header"
        className={clsx(
          "tw-shadow-[0px_8px_16px_0px_rgba(0,0,0,0.05)]",
          headerType === true ? "header-products" : "py-phone-12",
          isPopupOpen ? "tw-z-[154]" : "tw-z-[150]",
        )}
      >
        <div className={pathname === "/book-demo" ? "book-demo" : "container"}>
          <div className="row user-select-none justify-content-between">
            <div
              className={clsx(
                !(pathname === "/book-demo") && "tw-gap-12",
                "col-xl-7 col d-flex",
              )}
            >
              <Link
                href={"/"}
                rel="canonical"
                onClick={() => clickMenu()}
                className={clsx(
                  pathname === "/book-demo" ? "logo-in-bookdemo" : "",
                )}
              >
                <Image
                  src={
                    props?.Icon?.data
                      ? `${props.Icon.data.attributes.url}`
                      : logo
                  }
                  unoptimized={true}
                  alt="logo"
                  width={500}
                  height={500}
                  className="cursor header-logo"
                />
              </Link>
              <DesktopHeaderMenuV2
                items={props}
                isPopupOpen={isPopupOpen}
                onClickMenuItem={clickMenu}
                setIsPopUpOpen={(e, idx) => hoverPopup(e, idx)}
                idxActive={idxActive}
              />
            </div>
            <div
              className={clsx(
                "tw-relative tw-whitespace-nowrap tw-z-[3]",
                "tw-flex tw-items-center tw-justify-end tw-gap-2",
                "col-sm-8 col-xl-5 col-5 header-button align-self-center tw-text-right ",
              )}
            >
              <div className="d-inline-block cursor tw-pe-2">
                <Dropdown
                  className="d-inline tw-items-center cursor"
                  id="dropdown-1"
                >
                  <Dropdown.Toggle
                    as={CustomToggle}
                    id="dropdown-autoclose-true-c"
                  >
                    <div className="tw-flex tw-items-center tw-uppercase">
                      <Image
                        src={language?.icon || ""}
                        className="tw-mr-2"
                        alt="navmain"
                      />
                      {language?.title}
                      <FontAwesomeIcon
                        className="tw-ml-2"
                        icon={faChevronDown}
                      />
                    </div>
                  </Dropdown.Toggle>
                  <Dropdown.Menu
                    renderOnMount={true}
                    className="position-fixed mt-1 tw-w-[220px] !tw-ml-[-130px]"
                    style={{
                      top: "57px",
                      border: "none",
                      boxShadow: "0 2px 10px rgba(0,0,0,.25)",
                    }}
                  >
                    {LanguageMenuItems.map((value, index) => (
                      <div
                        className="tw-flex tw-justify-between tw-items-center tw-py-2 tw-px-3"
                        key={index}
                      >
                        <div
                          onClick={() => changeLanguage(value)}
                          className="tw-flex"
                        >
                          <Image
                            src={value.icon}
                            alt="support"
                            className="tw-mr-2"
                          />
                          {value.name}
                        </div>
                        <div
                          className={`${value === language ? "" : "tw-hidden"
                            } `}
                        >
                          <FontAwesomeIcon
                            icon={faCheck}
                            color="#1D39C4"
                          />
                        </div>
                      </div>
                    ))}
                  </Dropdown.Menu>
                </Dropdown>
              </div>

              <div className="tw-flex tw-items-center tw-gap-2">
                <Link
                  href={`https://api.ichiba.net/account/login?redirectUrl=https://app.ichiba.net`}
                  className="tw-no-underline tw-bg-brand-primary tw-flex tw-gap-2 tw-py-2 tw-px-3 tw-rounded-lg tw-items-center"
                  rel="nofollow"
                >
                  <span className="tw-text-sm tw-font-medium tw-text-white">
                    {t("forSeller")}
                  </span>
                  <Image
                    src="https://cms-strapi.ichiba.net/uploads/Group_18710_aa2812ddf7.svg"
                    width={16}
                    height={18}
                    alt="Icon"
                  />
                </Link>

                <div className="d-inline-block cursor tw-pe-2">
                  <Dropdown
                    className="d-inline tw-items-center cursor"
                    id="dropdown-1"
                  >
                    <Dropdown.Toggle
                      as={CustomToggle}
                      id="dropdown-autoclose-true-c"
                    >
                      {name && (
                        <UserAvatar
                          avatarUrl={userData?.avatarUrl}
                          fullName={name}
                        />
                      )}
                    </Dropdown.Toggle>
                    {name !== undefined && (
                      <Dropdown.Menu
                        renderOnMount={true}
                        className="position-fixed mt-1 tw-w-[312px] !tw-ml-[-288px]"
                        style={{
                          top: "57px",
                          border: "none",
                          boxShadow: "0 2px 10px rgba(0,0,0,.25)",
                        }}
                      >
                        <div className="tw-px-4 ">
                          <div className="tw-py-[10px] tw-flex tw-gap-2 tw-border-b tw-border-ic-ink-2 tw-cursor-default">
                            <div className="">
                              <UserAvatar
                                avatarUrl={userData?.avatarUrl}
                                fullName={name}
                                width={40}
                                height={40}
                              />
                            </div>
                            <div className="tw-flex tw-flex-col tw-justify-center">
                              <p className="tw-text-sm tw-font-medium tw-text-ic-ink-6 tw-mb-0">
                                {name}
                              </p>
                              <p className="tw-text-xs tw-text-ic-ink-5 tw-mb-0">
                                {userData?.email}
                              </p>
                            </div>
                          </div>
                          <div>
                            {userDropdownList.map((item) => (
                              <Link
                                key={item.title}
                                href={item.href}
                                target={item.target}
                                rel="nofollow"
                                className={clsx(
                                  "tw-p-2 tw-flex tw-gap-2 tw-no-underline",
                                  "hover:tw-bg-ic-ink-2",
                                )}
                              >
                                <SvgIcon icon={item.icon} />
                                <div className="tw-flex-1">
                                  <span className="tw-text-ic-ink-5 tw-text-sm">
                                    {t(item.title)}
                                  </span>
                                </div>
                              </Link>
                            ))}
                          </div>
                        </div>
                      </Dropdown.Menu>
                    )}
                  </Dropdown>
                </div>
              </div>
            </div>
            <div className="col-sm-1 col-2 menu-bars " onClick={toggle}>
              <FontAwesomeIcon icon={faBars} />
            </div>
          </div>
        </div>
      </div>
      <div id="model-pc">
        <div
          className={isOpenModal ? "model-pc " : "model-pc d-none"}
          onClick={() => setOpenModal(!isOpenModal)}
        />
      </div>

      {/* mobile */}
      <div
        className={clsx(
          isOpen ? "navmain " : "d-none",
          "!tw-z-[153] d-xl-none",
        )}
      >
        <nav>
          <div className="nav-menu">
            <div className="item-info tw-mb-2">
              <div className="tw-flex tw-justify-between tw-gap-1">
                <div className="d-inline-block cursor tw-pe-2">
                  <Dropdown
                    className="d-inline tw-items-center cursor tw-w-max"
                    id="dropdown-1"
                  >
                    <Dropdown.Toggle
                      as={CustomToggle}
                      id="dropdown-autoclose-true-c"
                    >
                      <div className="tw-flex tw-text-base tw-items-center tw-uppercase">
                        <Image
                          src={language?.icon || ""}
                          className="tw-mr-2"
                          alt="navmain"
                        />
                        {language?.title}
                        <FontAwesomeIcon
                          className="tw-ml-2"
                          icon={faChevronDown}
                        />
                      </div>
                    </Dropdown.Toggle>
                    <Dropdown.Menu
                      renderOnMount={true}
                      className="position-fixed mt-1 tw-w-[200px] !tw-ml-0"
                      style={{
                        top: "57px",
                        border: "none",
                        boxShadow: "0 2px 10px rgba(0,0,0,.25)",
                      }}
                    >
                      {LanguageMenuItems.map((value, index) => (
                        <div
                          className="tw-flex tw-justify-between tw-items-center tw-py-2 tw-px-3"
                          key={index}
                        >
                          <div
                            onClick={() => changeLanguage(value)}
                            className="tw-flex tw-text-sm"
                          >
                            <Image
                              src={value.icon}
                              alt="support"
                              className="tw-mr-2"
                            />
                            {value.name}
                          </div>
                          <div
                            className={`${value === language ? "" : "tw-hidden"
                              } `}
                          >
                            <FontAwesomeIcon
                              icon={faCheck}
                              color="#1D39C4"
                            />
                          </div>
                        </div>
                      ))}
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
                <div className="tw-grid sm:tw-flex tw-items-center tw-gap-3">
                  {/* {name && (
                    <div className="tw-relative d-inline-block">
                      <button
                        className="tw-flex tw-items-center tw-gap-2 tw-ml-4 tw-px-3 tw-py-[6px] tw-rounded-lg tw-border tw-border-primary-6"
                        onClick={() =>
                          openTabMyProduct({ Title: t("myProduct") })
                        }
                      >
                        <span className="tw-text-sm tw-font-medium tw-text-primary-6">
                          {t("myProduct")}
                        </span>
                        <Image
                          src={myProductIcon}
                          alt="My product"
                          className="tw-w-4 tw-h-4"
                        />
                      </button>
                    </div>
                  )} */}
                  <div className="tw-flex tw-justify-between tw-items-start">
                    <div className="tw-flex tw-flex-col sm:tw-flex-row sm:tw-items-center tw-gap-3">
                      <div className="tw-flex tw-items-center tw-gap-3">
                        <Link
                          href={`https://api.ichiba.net/account/login?redirectUrl=https://app.ichiba.net`}
                          className="tw-no-underline tw-bg-brand-primary tw-flex tw-gap-2 tw-py-2 tw-px-3 tw-rounded-lg tw-items-center"
                          rel="nofollow"
                        >
                          <span className="tw-text-sm tw-font-medium tw-text-white">
                            {t("forSeller")}
                          </span>
                          <Image
                            src={
                              "https://cms-strapi.ichiba.net/uploads/Group_18708_018e7eb53b.svg"
                            }
                            width={16}
                            height={18}
                            alt="Icon"
                          />
                        </Link>
                        {name && (
                          <div
                            onClick={() =>
                              isOpenNavItem !== 7
                                ? setOpenNavItem(7)
                                : setOpenNavItem(10)
                            }
                          >
                            <UserAvatar
                              avatarUrl={userData?.avatarUrl}
                              fullName={name}
                            />
                          </div>
                        )}
                      </div>
                      {/* <Link
                        href={`https://operator-api.ichiba.net/account/login?redirectUrl=https://operator.ichiba.net`}
                        className="tw-no-underline tw-bg-primary-6 tw-flex tw-gap-2 tw-py-2 tw-px-3 tw-rounded-lg tw-items-center tw-w-max"
                        rel="nofollow"
                      >
                        <span className="tw-text-sm tw-font-medium tw-text-white">
                          {t("forOperator")}
                        </span>
                        <Image
                          src={
                            "https://cms-strapi.ichiba.net/uploads/Group_18708_018e7eb53b.svg"
                          }
                          width={16}
                          height={18}
                          alt="Icon"
                        />
                      </Link> */}
                    </div>
                  </div>
                </div>
              </div>

              <div
                className={
                  isOpenNavItem === 10 ? "nav-items-lv2 dropdown" : "d-none"
                }
              >
                {name && (
                  <div className=" ">
                    <Link
                      className="text-decoration-none text-black"
                      target={"_blank"}
                      href={"https://org.ichiba.net"}
                      rel="nofollow"
                    >
                      <div className=" items-dropdown pb-1 text-drop">
                        <span>{t("visit")}</span>
                      </div>
                    </Link>
                    <Link
                      className="text-decoration-none text-black"
                      href={`https://api.ichiba.net/account/logout?redirectUrl=https://ichiba.net`}
                      rel="nofollow"
                    >
                      <div className=" items-dropdown pb-1 text-drop">
                        <span>{t("logOut")}</span>
                      </div>
                    </Link>
                  </div>
                )}
              </div>
            </div>

            {props &&
              props?.items?.map((item: any, idx: number) => (
                <div
                  className="fs-14  item-header"
                  key={`tab1_${item.Title}_${idx}`}
                >
                  <div
                    onClick={() => openTabProduct(item)}
                    className="tw-flex tw-justify-between tw-items-center"
                  >
                    <div>{item.Title}</div>
                    <div>
                      <FontAwesomeIcon
                        icon={faChevronRight}
                        size="1x"
                        className="-tw-rotate-90"
                      />
                    </div>
                  </div>
                </div>
              ))}
            <div>
              <MobileHeaderMenuV2
                items={props}
                isOpenModal={isOpenModal}
                onClickMenu={closeModalMobile}
              />
            </div>
          </div>
          <div
            className={clsx(
              `tab-item-header`,
              isOpenItemMobile === "my-product" ? "slide-in" : "slide-out ",
              !contentTabMobile && "d-none",
            )}
          >
            <div className="tab">
              <div className="tab-title" onClick={() => setItemMobile("")}>
                <FontAwesomeIcon icon={faArrowLeft} /> &nbsp;
                {contentTabMobile?.Title}
              </div>
              <div className="tab-content mt-3">
                {name && <WorkspaceDropdown />}
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}
