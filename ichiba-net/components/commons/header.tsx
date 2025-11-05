"use client";
import { dataLayout } from "@/constants";
import vn from "@/public/icons/vn.svg";
import contact from "@/public/icons/contact-sale.webp";
import imagecontact from "@/public/images/image-contact-us.webp";
import hambuger from "@/public/icons/hambuger.svg";
import us from "@/public/icons/us.svg";
import x from "@/public/icons/header/x.svg";
import logo from "@/public/icons/logo.svg";
import {
  faArrowLeft,
  faArrowRight,
  faCheck,
  faChevronDown,
  faChevronRight,
  faMagnifyingGlass,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Popover, Transition } from "@headlessui/react";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React, { Fragment, useEffect, useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import { Button } from "@ichiba/ichiba-core-ui";
import { UserAvatar } from "@/components/commons/user-avatar";
import { useQuery } from "@tanstack/react-query";
import { getProfile } from "@/public/api/auth";
import { AxiosResponse } from "axios";
import { Profile } from "@/types/response";
import SvgIcon from "@/components/commons/svg-icon";


const Header = ({ lang }: { lang: any }) => {
  const locale = usePathname().slice(1, 3);
  const [userName, setUserName] = useState<string | undefined>(undefined);
  const [userData, setUserData] = useState<Profile>();
  const [isLoading, setIsLoading] = useState(false);

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
  const userDropdownList = [
    {
      title: lang.profile,
      icon: "profile",
      href: "https://org.ichiba.net/account-management/profile/",
      target: "_blank",
    },
    {
      title: lang.logout,
      icon: "log-out",
      href: `https://api.ichiba.net/account/logout?redirectUrl=https://ichiba.net`,
    },
  ];

  const headerSolution = [
    {
      name: lang.ourSolution.dropshipping.label,
      description: lang.ourSolution.dropshipping.des,
      href: "",
      icon: dataLayout.imgHeader?.dropshipping,
      rel: "",
    },
    {
      name: lang.ourSolution.printOnDemand.label,
      description: lang.ourSolution.printOnDemand.des,
      href: "",
      icon: dataLayout.imgHeader?.printon,
      rel: "",
    },
    {
      name: lang.ourSolution.fulfillment.label,
      description: lang.ourSolution.fulfillment.des,
      href: "",
      icon: dataLayout.imgHeader?.fulfillment,
      rel: "",
    },
    {
      name: lang.ourSolution.integration.label,
      description: lang.ourSolution.integration.des,
      href: "",
      icon: dataLayout.imgHeader?.integration,
      rel: "",
    },
  ];
  const headerResource = [
    {
      name: lang.resources.blog.label,
      description: lang.resources.blog.des,
      href: `/blog`,
      icon: dataLayout.imgHeader?.blog,
      rel: "",
    },
    {
      name: lang.resources.help.label,
      description: lang.resources.help.des,
      href: `https://help.ichiba.net/en/`,
      icon: dataLayout.imgHeader?.help,
      rel: "nofollow",
      target: "_blank",
    },
    {
      name: lang.resources.contactSales.label,
      description: lang.resources.contactSales.des,
      href: `/contact-sales`,
      icon: dataLayout.imgHeader?.blog,
      rel: "nofollow",
      type: "contactsale",
      target: "_blank",
    },
  ];
  const headerMenu = [
    {
      name: lang.startSelling,
      href: `/${locale}/start-selling`,
    },
    {
      name: lang.becomeASupplier,
      href: `/${locale}/become-a-supplier`,
    },
    {
      name: lang.reviews,
      href: `/${locale}/reviews`,
    },
    {
      name: lang.ourSolution.title,
      content: headerSolution,
    },
    {
      name: lang.pricing,
      href: `/${locale}/pricing`,
    },
    {
      name: lang.resources.title,
      content: headerResource,
      linkContact: "#"
    },
  ];
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openSearch, setOpenSearch] = useState(false);
  const [isTop, setIsTop] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [itemHeader, setItem] = useState([]);
  const [typeItem, setType] = useState("");
  const [language, setLanguage] = useState(
    locale === "vi" ? LanguageMenuItems[0] : (LanguageMenuItems[1] as any)
  );
  const [isOpenItemMobile, setItemMobile] = useState(false);
  const [isOpenItemCategories, setItemCategories] = useState(false);
  const [titlelv2, setTitlelv2] = useState("");
  const [linkContact, setLinkContact] = useState("");
  const [contentTabMobile, setContentTabMobile] = useState([] as any);
  const [rotateChevron, setRotateChevron] = useState(false);

  useEffect(() => {
    if (locale === "vi") {
      setLanguage(LanguageMenuItems[0]);
    } else {
      setLanguage(LanguageMenuItems[1]);
    }
    const handleScroll = () => {
      const isScrolledToTop = window.scrollY === 0;
      setIsTop(isScrolledToTop);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const router = useRouter();
  const changeLanguage = (lang: any) => {
    setLanguage(lang);
    router.push("/" + lang?.href + pathname.slice(3));
    setMobileMenuOpen(false);
    setItemMobile(false);
  };
  const openTabProduct = async (item: any, title: any) => {
    setContentTabMobile(item as any);
    setItemMobile(true);
    setTitlelv2(title);
  };
  const setItemHeader = async (value: any, type: any, chevdown: boolean) => {
    await setRotateChevron(chevdown);
    if (typeItem !== type) {
      setIsOpen(true);
      setItem(value as any);
      setType(type);
    }
  };
  const rotate = rotateChevron === true ? "rotate(180deg)" : "rotate(0deg)";
  const toggleModalMobile = (value: boolean) => {
    setMobileMenuOpen(value);
    setItemMobile(false);
  };
  const closeMenuDesktop = () => {
    setIsOpen(false);
    setRotateChevron(false);
    setType("");
  };

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

  const { data: profileData } = useQuery({
    queryKey: ["getProfileUser", userName],
    queryFn: getProfile,
    enabled: !!userName,
  });

  useEffect(() => {
    if (profileData) {
      setUserData(profileData.data);
    }
  }, [profileData]);

  const fetchData = () => {
    setIsLoading(true); // Bắt đầu loading
    let host = typeof window !== "undefined" ? window.location.origin : "";
    let urlApi = "https://api.ichiba.net";
    fetch(`${urlApi}/userinfo`, { credentials: "include" })
      ?.then((res) => res.json())
      .then((data) => {
        if (data) {
          setUserName(data.name);
        }
        setIsLoading(false); // Kết thúc loading sau khi có dữ liệu
      })
      .catch(() => {
        setIsLoading(false); // Kết thúc loading nếu có lỗi
      });
  };

  useEffect(() => {
    fetchData();
    // setUserName("MU")
  }, []);


  return (
    <>
      <div className={"sticky top-0 z-[150] w-full"}>
        <div
          className={` h-max shadow-[0px_8px_16px_0px_rgba(0,_0,_0,_0.05)] flex justify-center bg-white z-50  transition-all duration-100 ease-linear sticky top-0 `}
        >
          <div className="container sm:min-h-[72px] xl:py-4  ">
            <div className=" flex sm:text-sm font-medium items-center">
              <Link
                className=" ml-4 md:ml-0 flex items-center"
                rel="canonical"
                href={`/${locale}/`}
              >
                <Image
                  src={logo}
                  width={135}
                  height={40}
                  alt="logo"
                  className="h-[40px] w-auto"
                />
              </Link>
              <div className="flex-1 hidden xl:flex cursor-pointer ml-[36px]">
                {/* <div
                  className={clsx(
                    `flex relative items-center py-2 px-[14px] title-header `,
                    typeItem === "categories" && "active"
                  )}
                  onMouseEnter={() =>
                    setItemHeader(headerCateogries as any, "categories", true)
                  }
                >
                  <span className="mr-2">All categories</span>
                  <FontAwesomeIcon
                    icon={faChevronDown}
                    height={12}
                    width={12}
                    style={{
                      transform: typeItem === "categories" ? rotate : "",
                      transition: "all 0.2s linear",
                    }}
                  />
                </div> */}
                <Link
                  href={`/${locale}/start-selling`}
                  className={`flex relative items-center py-2 px-4  ${pathname === `/${locale}/start-selling` ? "active" : ""
                    }`}
                >
                  <span className="mr-2 ">{lang.startSelling}</span>
                </Link>
                <Link
                  href={`/${locale}/become-a-supplier`}
                  className={clsx(
                    `flex relative items-center py-2 px-[14px] `,
                    pathname === `/${locale}/become-a-supplier` ? "active" : ""
                  )}
                  onMouseEnter={() => setItemHeader(null as any, "", false)}
                >
                  <span className="mr-2">{lang.becomeASupplier}</span>
                </Link>
                <Link
                  href={`/${locale}/reviews`}
                  className={clsx(
                    `flex relative items-center py-2 px-[14px] `,
                    pathname === `/${locale}/reviews` ? "active" : ""
                  )}
                  onMouseEnter={() => setItemHeader(null as any, "", false)}
                >
                  <span className="mr-2">{lang.reviews}</span>
                </Link>
                <div
                  className={clsx(
                    `flex relative items-center py-2 px-[14px] title-header `,
                    typeItem === "solution" && "active"
                  )}
                  onMouseEnter={() =>
                    setItemHeader(headerSolution as any, "solution", true)
                  }
                >
                  <span className="mr-2">{lang.ourSolution.title}</span>
                  <FontAwesomeIcon
                    icon={faChevronDown}
                    height={12}
                    width={12}
                    style={{
                      transform: typeItem === "solution" ? rotate : "",
                      transition: "all 0.2s linear",
                    }}
                  />
                </div>
                <Link
                  href={`/${locale}/pricing`}
                  className={clsx(
                    `flex relative items-center py-2 px-[14px] `,
                    pathname === `/${locale}/pricing` ? "active" : ""
                  )}
                  onMouseEnter={() => setItemHeader(null as any, "", false)}
                >
                  <span className="mr-2">{lang.pricing}</span>
                </Link>
                <div
                  className={clsx(
                    "flex relative items-center py-2 px-[14px]",
                    typeItem === "resource" && "active"
                  )}
                  onMouseEnter={() =>
                    setItemHeader(headerResource as any, "resource", true)
                  }
                >
                  <span className="mr-2">{lang.resources.title}</span>
                  <FontAwesomeIcon
                    icon={faChevronDown}
                    height={12}
                    width={12}
                    style={{
                      transform: typeItem === "resource" ? rotate : "",
                      transition: "all 0.2s linear",
                    }}
                  />
                </div>

                <div className="flex ml-auto">
                  <div
                    className="flex items-center py-2 px-4 "
                    onClick={() => setOpenSearch(!openSearch)}
                  >
                    <FontAwesomeIcon icon={faMagnifyingGlass} size="lg" />
                  </div>

                  <div className="flex items-center mx-4 cursor-pointer ">
                    <Popover className="relative">
                      <Popover.Button className="flex items-center">
                        <div className="flex items-center uppercase">
                          <Image
                            src={language?.icon || ""}
                            className="mr-2"
                            alt="navmain"
                          />
                          {language?.href}
                        </div>
                      </Popover.Button>

                      <Transition
                        as={Fragment}
                        enter="transition ease-out duration-200"
                        enterFrom="opacity-0 translate-y-1"
                        enterTo="opacity-100 translate-y-0"
                        leave="transition ease-in duration-150"
                        leaveFrom="opacity-100 translate-y-0"
                        leaveTo="opacity-0 translate-y-1"
                      >
                        <Popover.Panel className="absolute left-[-32px] top-full py-2 w-[232px] z-20 mt-3 rounded-xl bg-white shadow-[0px_8px_16px_0px_rgba(0,_0,_0,_0.15);] ">
                          {LanguageMenuItems.map((value, index) => (
                            <div
                              className="flex justify-between items-center py-2 px-3"
                              key={index}
                            >
                              <div
                                onClick={() => changeLanguage(value)}
                                className="flex  "
                              >
                                <Image
                                  src={value.icon}
                                  alt="support"
                                  className="mr-2"
                                />
                                {value.name}
                              </div>
                              <div
                                className={`${value === language ? "" : "hidden"
                                  } `}
                              >
                                <FontAwesomeIcon
                                  icon={faCheck}
                                  color="#1D39C4"
                                />
                              </div>
                            </div>
                          ))}
                        </Popover.Panel>
                      </Transition>
                    </Popover>
                  </div>
                  {/* <DropDownMenu lang={lang} /> */}
                  <div className="flex items-center gap-2">
                    {/* Show demo button only when not logged in */}
                    {
                      !userName &&
                      <Link
                        href={`https://api.ichiba.net/account/login?redirectUrl=https://app.ichiba.net`}
                        className="no-underline bg-brand-primary flex gap-2 py-2 px-3 rounded-lg items-center"
                        rel="nofollow"
                      >
                        <span className="text-sm font-medium text-white">
                          {lang.login}
                        </span>
                      </Link>
                    }
                    <div className="inline-block cursor-pointer pe-2">
                      <Popover className="relative">
                        <Popover.Button className="flex items-center">
                          {userName && (
                            <UserAvatar
                              avatarUrl={userData?.avatarUrl}
                              fullName={userName}
                            />
                          )}
                        </Popover.Button>
                        {userName !== undefined && (
                          <Transition
                            as={Fragment}
                            enter="transition ease-out duration-200"
                            enterFrom="opacity-0 translate-y-1"
                            enterTo="opacity-100 translate-y-0"
                            leave="transition ease-in duration-150"
                            leaveFrom="opacity-100 translate-y-0"
                            leaveTo="opacity-0 translate-y-1"
                          >
                            <Popover.Panel className="absolute left-[-32px] top-full py-2 w-[232px] z-20 mt-3 rounded-xl bg-white shadow-[0px_8px_16px_0px_rgba(0,_0,_0,_0.15);] ">
                              {userDropdownList.map((value, index) => (
                                <div
                                  className="flex justify-between items-center px-3"
                                  key={index}
                                >
                                  <Link
                                    key={value.title}
                                    href={value.href}
                                    target={value.target}
                                    rel="nofollow"
                                    className=" py-2 px-3 hover:bg-ic-ink-2 w-full"

                                  >
                                    <div className="flex-1">
                                      <span className="text-ic-ink-5 text-sm">
                                        {value.title}
                                      </span>
                                    </div>
                                  </Link>
                                </div>
                              ))}
                            </Popover.Panel>
                          </Transition>
                        )}
                      </Popover>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex ml-auto xl:hidden">
                <div className="flex items-center">
                  <div className="p-2 mr-1">
                    <FontAwesomeIcon icon={faMagnifyingGlass} size="lg" />
                  </div>
                  <div className="p-2">
                    <div
                      className="ml-auto xl:hidden p-2"
                      onClick={() =>
                        toggleModalMobile(!mobileMenuOpen as boolean)
                      }
                    >
                      <Image
                        src={mobileMenuOpen === false ? hambuger : x}
                        alt="logo"
                      ></Image>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {typeItem === "categories" && (
              <div
                className={`${isOpen ? "" : "hidden"
                  } pt-[32px] headerDropdown xl:absolute xl:right-0 xl:left-0 xl:bg-white z-[160]`}
                onMouseLeave={() => closeMenuDesktop()}
              >
                <div className={`xl:container`}>
                  {lang.comingSoon}
                </div>
              </div>
            )}
            {typeItem === "solution" && (
              <div
                className={`${isOpen ? "" : "hidden"
                  } py-[32px] headerDropdown xl:absolute xl:right-0 xl:left-0 xl:bg-white`}
                onMouseLeave={() => closeMenuDesktop()}
              >
                <div className="grid grid-cols-2 gap-12 xl:container">
                  {itemHeader.map((item: any, index) => {
                    const isDisabled = !item?.href; // kiểm tra có href không

                    return (
                      <div
                        key={index}
                        className="group relative z-[10] flex text-base leading-6 gap-4 w-full"
                      >
                        {item?.icon && <Image src={item.icon} alt="icon" />}

                        <div className="flex-auto">
                          {isDisabled ? (
                            // Trường hợp không có href → không click được
                            <div className="block font-semibold title-items cursor-default select-none">
                              <div className="flex justify-between items-center">
                                <span className="flex items-center gap-2">
                                  {item?.name}
                                  <span className="text-xs font-normal border border-gray-300 rounded px-2 py-[1px]">
                                    {lang.commingSoon}
                                  </span>
                                </span>
                                <FontAwesomeIcon icon={faArrowRight} className="mr-4 icon" />
                              </div>
                            </div>
                          ) : (
                            // Trường hợp có href → là link bình thường
                            <a
                              href={item.href}
                              target={item.target}
                              rel={item.rel}
                              className="block font-semibold text-gray-900 hover:text-contact title-items"
                            >
                              <div className="flex justify-between items-center">
                                <span>{item.name}</span>
                                <FontAwesomeIcon icon={faArrowRight} className="mr-4 icon" />
                              </div>
                              <span className="absolute inset-0" />
                            </a>
                          )}

                          <p className="mt-1 text-gray-600 text-sm">{item?.description}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
            {typeItem === "resource" && (
              <div
                className={`${isOpen ? "" : "hidden"
                  } py-[32px] headerDropdown xl:absolute xl:right-0 xl:left-0 xl:bg-white z-[160]`}
                onMouseLeave={() => closeMenuDesktop()}
              >
                <div className={`grid grid-cols-2 lg:items-center gap-20 xl:container`}>
                  <div className="">
                    {itemHeader.map(
                      (item: any, index) =>
                        item?.type !== "contactsale" && (
                          <div
                            key={index}
                            className={`group relative z-[10] flex text-base leading-6 mb-[40px] gap-4 w-full`}
                          >
                            {item?.icon && <Image src={item?.icon} alt="start" />}
                            <div className="flex-auto">
                              <a
                                href={item?.href}
                                target={item?.target}
                                rel={item?.rel}
                                className="block font-semibold text-gray-900 hover:text-contact title-items"
                              >
                                <div className="flex justify-between items-center">
                                  <span>{item?.name}</span>
                                  <FontAwesomeIcon
                                    icon={faArrowRight}
                                    className="mr-4 icon"
                                  />
                                </div>
                                <span className="absolute inset-0" />
                              </a>
                              <p className="mt-1 text-gray-600 text-sm">
                                {item?.description}
                              </p>
                            </div>
                          </div>
                        )
                    )}
                  </div>
                  <div className="gap-6">
                    {itemHeader.map(
                      (item: any, index) =>
                        item?.type === "contactsale" && (
                          <div
                            className="flex gap-5 text-base text-center leading-6 rounded-xl py-5 px-4 shadow-[0px_0px_20px_0px_rgba(0,_0,_0,_0.11);]"
                            key={index}
                          >
                            <Image
                              alt="support"
                              src={imagecontact}
                              className="w-[280px] h-[200px]"
                            />
                            <div className="my-auto">
                              <div className="mb-5">
                                <div className="">
                                  <a
                                    href={item?.href}
                                    className="block font-semibold text-gray-900"
                                  >
                                    {item?.name}
                                  </a>
                                </div>
                                <p className="pt-3 text-gray-600 text-sm">
                                  {item?.description}
                                </p>
                              </div>
                              <a
                                href={item?.href}
                                target="_blank"
                                className="text-contact block font-semibold text-sm"
                              >
                                {lang.resources.textBtn}
                                <FontAwesomeIcon
                                  className="ml-2"
                                  icon={faArrowRight}
                                />
                              </a>
                            </div>
                          </div>
                        )
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* mobile */}

          <div
            className={clsx(
              mobileMenuOpen ? "navmain " : "hidden",
              "!tw-z-[150] xl:hidden "
            )}
          >
            <div className="p-4 bg-white">
              <div className="flex flex-col gap-4 text-sm pb-2">
                {/* user */}
                {
                  !userName && (
                    <div className="my-3 lg:my-6 w-full">
                      <div className="w-full">
                        <Link
                          href="https://api.ichiba.net/account/login?redirectUrl=https://app.ichiba.net"
                          className={clsx(
                            "block w-full rounded-lg border border-brand-primary bg-white",
                            "text-sm lg:text-base text-brand-primary py-[10px] lg:py-3 px-6 hover:opacity-80 text-center"
                          )}
                        >
                          {lang.login}
                        </Link>
                      </div>
                    </div>
                  )
                }

                {
                  userName && <div className="text-sm mt-3 pb-3 border-b border-line last:border-b-0" >
                    <div
                      className="flex justify-between items-center "
                      onClick={() =>
                        openTabProduct(userData, userName)
                      }
                    >
                      <div className="flex items-center gap-2">
                        <UserAvatar
                          avatarUrl={userData?.avatarUrl}
                          fullName={userName || ""}
                        />
                        <div>
                          <p className="text-base font-bold">{userName}</p>
                        </div>
                      </div>
                      <FontAwesomeIcon
                        icon={faChevronRight}
                        size="1x"
                        style={{}}
                      />
                    </div>
                  </div>
                }

                {/* language */}
                <Popover className="relative border-b border-line pb-3">
                  <Popover.Button className="flex items-center">
                    <div className="flex  items-center uppercase">
                      <Image
                        src={language?.icon || ""}
                        className="mr-2"
                        alt="navmain"
                      />
                      {language?.href}
                      <FontAwesomeIcon
                        className="ml-2"
                        icon={faChevronDown}
                      />
                    </div>
                  </Popover.Button>

                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0 translate-y-1"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-1"
                  >
                    <Popover.Panel className="absolute left-0-0 top-full py-2 w-[232px] z-10 mt-3 rounded-xl bg-white shadow-[0px_8px_16px_0px_rgba(0,_0,_0,_0.05);] ">
                      {LanguageMenuItems.map((value, index) => (
                        <div
                          className="flex justify-between items-center py-2 px-3"
                          key={index}
                        >
                          <div
                            onClick={() => changeLanguage(value)}
                            className="flex  "
                          >
                            <Image
                              src={value.icon}
                              alt="support"
                              className="mr-2"
                            />
                            {value.name}
                          </div>
                          <div
                            className={`${value === language ? "" : "hidden"
                              } `}
                          >
                            <FontAwesomeIcon icon={faCheck} color="#1D39C4" />
                          </div>
                        </div>
                      ))}
                    </Popover.Panel>
                  </Transition>
                </Popover>

                {/* <DropDownMenuMobile lang={lang} /> */}
              </div>
              <div>
                {headerMenu &&
                  headerMenu.map((item: any, idx: number) =>
                    item?.content ? (
                      <div
                        className="text-sm mt-3 pb-3 border-b border-line last:border-b-0"
                        key={`tab1_${item.Title}_${idx}`}
                      >
                        <div
                          className="flex justify-between items-center "
                          onClick={() =>
                            openTabProduct(item?.content, item.name)
                          }
                        >
                          <div>{item.name}</div>
                          <div className={`${item?.content ? "" : "hidden"}`}>
                            <FontAwesomeIcon
                              icon={faChevronRight}
                              size="1x"
                              style={{}}
                            />
                          </div>
                        </div>
                      </div>
                    ) : (
                      <Link
                        href={item.href ? item.href : "#"}
                        className="block text-sm mt-3 pb-3 border-b border-line last:border-b-0"
                        key={`tab1_${item.Title}_${idx}`}
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        <div className="flex justify-between items-center ">
                          <div>{item.name}</div>
                          <div className={`${item?.content ? "" : "hidden"}`}>
                            <FontAwesomeIcon
                              icon={faChevronRight}
                              size="1x"
                              style={{}}
                            />
                          </div>
                        </div>
                      </Link>
                    )
                  )}
              </div>
            </div>
          </div>
          <div
            className={`tab-item-header ${isOpenItemMobile ? "slide-in" : "hidden "
              } `}
          >
            {
              userName ? <div className="tab">
                <div
                  className=" flex items-center gap-2 border-b border-line pb-3"
                  onClick={() => setItemMobile(false)}
                >
                  <FontAwesomeIcon
                    icon={faArrowLeft}
                    className={`mr-1 ${isOpenItemMobile ? "" : "hidden"}`}
                  />
                  <div className="flex items-center gap-2">
                    <UserAvatar
                      avatarUrl={userData?.avatarUrl}
                      fullName={userName || ""}
                    />
                    <div>
                      <p className="text-base font-bold">{userName}</p>
                    </div>
                  </div>
                </div>
                <div className=" pt-3">
                  {userDropdownList.map((value, index) => (
                    <div
                      className="flex justify-between items-center px-3"
                      key={index}
                    >
                      <Link
                        key={value.title}
                        href={value.href}
                        target={value.target}
                        rel="nofollow"
                        className=" py-2 px-3 hover:bg-ic-ink-2 w-full"

                      >
                        <div className="flex-1">
                          <span className="text-ic-ink-5 text-sm">
                            {value.title}
                          </span>
                        </div>
                      </Link>
                    </div>
                  ))}
                </div>
              </div> : <div className="tab">
                <div
                  className=" d-flex align-items-center border-b border-line pb-3"
                  onClick={() => setItemMobile(false)}
                >
                  <FontAwesomeIcon
                    icon={faArrowLeft}
                    className={`mr-1 ${isOpenItemMobile ? "" : "hidden"}`}
                  />
                  {titlelv2}
                </div>
                <div className="pt-3">
                  {contentTabMobile &&
                    contentTabMobile.map((value: any, index: number) => {
                      const isDisabled = !value?.href; // Kiểm tra có href không

                      if (!value.icon) return null;

                      return (
                        <div key={index}>
                          {isDisabled ? (
                            // Nếu không có href → disable, không click
                            <div className="text-sm flex py-[10px] items-start cursor-default select-none">
                              <Image src={value.icon} alt="support" className="mr-3 mt-1" />
                              <div>
                                <div className="font-bold flex items-center gap-2">
                                  {value.name}
                                  <span className="text-xs border border-gray-300 rounded px-2 py-[1px]">
                                    {lang.commingSoon}
                                  </span>
                                </div>
                                <div>{value?.description}</div>
                              </div>
                            </div>
                          ) : (
                            // Nếu có href → link bình thường
                            <Link
                              key={index}
                              onClick={() => toggleModalMobile(false)}
                              rel={value?.rel}
                              href={value.href}
                              className="text-sm flex py-[10px] items-start"
                            >
                              <Image src={value.icon} alt="support" className="mr-3 mt-1" />
                              <div>
                                <div className="font-bold">{value.name}</div>
                                <div>{value?.description}</div>
                              </div>
                            </Link>
                          )}
                        </div>
                      );
                    })}
                </div>

              </div>
            }
          </div>
        </div>
      </div>
    </>
  );
};
export default Header;
