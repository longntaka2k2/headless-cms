"use client";
import { dataLayout } from "@/constants";
import vn from "@/public/images/icons/VN.svg";
import contact from "@/public/images/icons/contact-sale.webp";
import caseStudies from "@/public/images/icons/OBJECTS.svg";
import hambuger from "@/public/images/icons/hambuger.svg";
import us from "@/public/images/icons/item-header/us.svg";
import x from "@/public/images/icons/item-header/x.svg";
import logo from "@/public/images/icons/logo.svg";
import logoPC from "@/public/images/icons/logoPC.svg";
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
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Fragment, useEffect, useState } from "react";
import DropDownMenu from "./DropDownMenu";
import DropDownMenuMobile from "./DropDownMenuMobile";

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
  // {
  //   name: "Japanese (JP)",
  //   icon: jp,
  //   href: "jp",
  // },
  // {
  //   name: "South Korea (KR)",
  //   icon: kr,
  //   href: "kr",
  // },
];
const Header = ({ lang }: { lang: any }) => {
  const locale = usePathname().slice(1, 3);
  // const headerStart = [
  //   {
  //     name: lang?.header?.start?.howToStart?.title,
  //     description: lang?.header?.start?.howToStart?.content,
  //     href: "#",
  //     icon: dataLayout.imgHeader?.start,
  //   },
  //   {
  //     name: lang?.header?.start?.optimize?.title,
  //     description: lang?.header?.start?.optimize?.content,
  //     href: "#",
  //     icon: dataLayout.imgHeader?.optimize,
  //   },
  //   {
  //     name: lang?.header?.start?.multiChannel?.title,
  //     description: lang?.header?.start?.multiChannel?.content,
  //     href: "#",
  //     icon: dataLayout.imgHeader?.manage,
  //   },
  //   {
  //     name: lang?.header?.start?.howToBuild?.title,
  //     description: lang?.header?.start?.howToBuild?.content,
  //     href: "#",
  //     icon: dataLayout.imgHeader?.build,
  //   },
  //   {
  //     name: lang?.header?.start?.shipping?.title,
  //     description: lang?.header?.start?.shipping?.content,
  //     href: "#",
  //     icon: dataLayout.imgHeader?.shipping,
  //   },
  //   {
  //     name: lang?.header?.start?.howToControl?.title,
  //     description: lang?.header?.start?.howToControl?.content,
  //     href: "#",
  //     icon: dataLayout.imgHeader?.control,
  //   },
  // ];
  const headerSolution = [
    {
      name: lang?.header?.solution?.ecommerce?.title,
      description: lang?.header?.solution?.ecommerce?.content,
      href: `/${locale}/solutions/ecommerce-order-fulfillment`,
      icon: dataLayout.imgHeader?.solution,
      rel: "",
    },
    {
      name: lang?.header?.solution?.crossborder?.title,
      description: lang?.header?.solution?.crossborder?.content,
      href: `/${locale}/solutions/cross-border-shipping`,
      icon: dataLayout.imgHeader?.solution,
      rel: "",
    },
    {
      name: lang?.header?.solution?.b2b?.title,
      description: lang?.header?.solution?.b2b?.content,
      href: `/${locale}/solutions/b2b-retail-fulfillment`,
      icon: dataLayout.imgHeader?.solution,
      rel: "",
    },
    // {
    //   name: lang?.header?.solution?.bonded?.title,
    //   description: lang?.header?.solution?.bonded?.content,
    //   href: `/${locale}/solutions/bonded-warehouse`,
    //   icon: dataLayout.imgHeader?.solution,
    //   rel: "",
    // },
    // {
    //   name: lang?.header?.solution?.customer?.title,
    //   description: lang?.header?.solution?.customer?.content,
    //   href: `/${locale}/solutions/custom-clearance`,
    //   icon: dataLayout.imgHeader?.solution,
    //   rel: "",
    // },
    {
      name: lang?.header?.solution?.sell?.title,
      description: lang?.header?.solution?.sell?.content,
      href: `/${locale}/solutions/sell-in-vietnam`,
      icon: dataLayout.imgHeader?.solutionVN,
      rel: "",
    },
    {
      name: lang?.header?.solution?.sellGlobally?.title,
      description: lang?.header?.solution?.sellGlobally?.content,
      href: `/${locale}/solutions/sell-globally`,
      icon: dataLayout.imgHeader?.sellGlobally,
      rel: "",
    },
    {
      name: lang?.header?.solution?.sellOnAmazon?.title,
      description: lang?.header?.solution?.sellOnAmazon?.content,
      href: `/${locale}/solutions/sell-on-amazon`,
      icon: dataLayout.imgHeader?.solution,
      rel: "",
    },
    {
      name: lang?.header?.solution?.marketplaceOperations?.title,
      description: lang?.header?.solution?.marketplaceOperations?.content,
      href: `/${locale}/solutions/marketplace-operations`,
      icon: dataLayout.imgHeader?.solution,
      rel: "",
    },
  ];
  // const headerPricing = [
  //   {
  //     name: lang?.header?.pricing?.warehouse,
  //     href: "#",
  //     icon: dataLayout.imgHeader?.solution,
  //   },
  //   {
  //     name: lang?.header?.pricing?.cost,
  //     href: "#",
  //     icon: dataLayout.imgHeader?.solution,
  //   },
  //   {
  //     name: lang?.header?.pricing?.shipping,
  //     href: "#",
  //     icon: dataLayout.imgHeader?.solution,
  //   },
  //   {
  //     name: lang?.header?.pricing?.bonded,
  //     href: "#",
  //     icon: dataLayout.imgHeader?.solution,
  //   },
  //   {
  //     name: lang?.header?.pricing?.customs,
  //     href: "#",
  //     icon: dataLayout.imgHeader?.solution,
  //   },
  // ];
  const headerResource = [
    {
      name: lang?.header?.resource?.blog?.title,
      description: lang?.header?.resource?.blog?.content,
      href: `/${locale}/blog`,
      icon: dataLayout.imgHeader?.blog,
      rel: "",
    },
    {
      name: lang?.header?.resource?.video?.title,
      description: lang?.header?.resource?.video?.content,
      href: "https://www.youtube.com/@efex.fulfillment",
      icon: dataLayout.imgHeader?.video,
      rel: "nofollow",
      target: "_blank",
    },
    {
      name: lang?.header?.resource?.caseStudies?.title,
      description: lang?.header?.resource?.caseStudies?.content,
      href: `/${locale}/customer-success-studies`,
      icon: dataLayout.imgHeader?.blog,
      rel: "nofollow",
      type: "caseStudies",
      target: "_blank",
    },
  ];
  const headerSupport = [
    {
      name: lang?.header?.support?.faq?.title,
      description: lang?.header?.support?.faq?.content,
      href: `https://support.efex.vn/${locale}`,
      icon: dataLayout.imgHeader?.faq,
      rel: "nofollow",
    },
    {
      name: lang?.header?.support?.support?.title,
      description: lang?.header?.support?.support?.content,
      href: `/${locale}/support/support-request`,
      icon: dataLayout.imgHeader?.support,
      rel: "nofollow",
    },
    {
      name: lang?.header?.support?.contact?.title,
      description: lang?.header?.support?.contact?.content,
      href: `/${locale}/contact-sales`,
      icon: dataLayout.imgHeader?.support,
      type: "contact",
      target: "_blank",
    },
  ];
  const headerMenu = [
    {
      name: lang?.header?.start?.title,
      href: `/${locale}/start`,
    },
    {
      name: lang?.header?.solution?.title,
      content: headerSolution,
    },
    {
      name: lang?.header?.pricing?.title,
      href: `/${locale}/pricing`,
    },
    {
      name: lang?.header?.resource?.title,
      content: headerResource,
    },
    {
      name: lang?.header?.support?.title,
      content: headerSupport,
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
  const [titlelv2, setTitlelv2] = useState("");
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
  // const currentUrl = window.location.href;

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
    // setItemHeader(null, "", false);
    setIsOpen(false);
    setRotateChevron(false);
    setType("");
  };
  const position = isTop
    ? "relative top-0 right-0 left-0 "
    : "fixed top-0 z-[100] w-full";
  return (
    <>
      {/* {currentUrl !== "https://fulfillment.efex.vn" &&
      currentUrl !== "https://fulfillment.efex.vn/thank-you" ? ( */}
      <div className={"sticky top-0 z-[150] w-full"}>
        <div
          className={` h-max shadow-[0px_8px_16px_0px_rgba(0,_0,_0,_0.05)] flex justify-center bg-white z-50  transition-all duration-100 ease-linear sticky top-0 `}
        >
          {/* <div
          className={clsx(
            `absolute top-[6px] h-[58px] bg-white z-[1] flex items-center searchInput justify-between `,
            openSearch && "slide-in-width"
          )}
        >
          <div className="w-[80%] ] ">
            <input
              type="text"
              className="w-[100%] py-1 rounded-[20px] border border-[#ddd px-3"
            />
          </div>
          <button className="bg-linear text-[#fff] h-max w-max rounded-[20px] px-3 py-2">
            Tìm kiếm
          </button>
        </div> */}
          <div className="container sm:min-h-[72px] xl:py-4  ">
            <div className=" flex sm:text-sm font-medium items-center">
              <Link
                className=" ml-4 md:ml-0 flex items-center"
                rel="canonical"
                href={`/${locale}/`}
              >
                <Image
                  src={logoPC}
                  alt="logo"
                  className="h-8 lg:h-[40px] w-auto"
                />
                {/* <Image
                  src={logo}
                  alt="logo"
                  className="h-[40px] w-auto md:hidden"
                /> */}
              </Link>
              <div className="flex-1 hidden xl:flex cursor-pointer ml-[36px]">
                <Link
                  href={`/${locale}/start`}
                  className={`flex relative items-center py-2 px-4  ${
                    pathname === `/${locale}/start` ? "active" : ""
                  }`}
                >
                  <span className="mr-2 ">{lang?.header?.start?.title}</span>
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
                  <span className="mr-2">{lang?.header?.solution?.title}</span>
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
                  <span className="mr-2">{lang?.header?.pricing?.title}</span>
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
                  <span className="mr-2">{lang?.header?.resource?.title}</span>
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
                <div
                  className={`flex relative items-center py-2 px-[14px]  ${
                    typeItem === "support" ? "active" : ""
                  }`}
                  onMouseEnter={() =>
                    setItemHeader(headerSupport as any, "support", true)
                  }
                >
                  <span className="mr-2">{lang?.header?.support?.title}</span>
                  <FontAwesomeIcon
                    icon={faChevronDown}
                    height={12}
                    width={12}
                    style={{
                      transform: typeItem === "support" ? rotate : "",
                      transition: "all 0.2s linear",
                    }}
                  />
                </div>

                <div className="flex ml-auto ">
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
                          {language?.href}{" "}
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
                                />{" "}
                                {value.name}
                              </div>
                              <div
                                className={`${
                                  value === language ? "" : "hidden"
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

                  <DropDownMenu lang={lang} />
                  <Link
                    href={`/${locale}/contact-sales`}
                    target="_blank"
                    className="flex px-3 text-contact items-center gradient-border grounded-radiants "
                  >
                    {lang?.header?.login}{" "}
                  </Link>
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
            {["start", "solution", "pricing"].includes(typeItem) && (
              <div
                className={`${
                  isOpen ? "" : "hidden"
                } pt-[32px] headerDropdown xl:absolute xl:right-0 xl:left-0 xl:bg-white`}
                onMouseLeave={() => closeMenuDesktop()}
              >
                <div className={` grid grid-cols-3 xl:container`}>
                  {itemHeader.map((item: any, index) => (
                    <div
                      key={index}
                      className={`group relative z-[10] flex text-base ${
                        typeItem === "pricing" ? "items-center" : "items-start"
                      }  leading-6 mb-[40px] gap-4 max-w-[384px] w-full`}
                    >
                      {item?.icon && <Image src={item?.icon} alt="start" />}
                      <div className="flex-auto">
                        <a
                          href={item?.href}
                          target={item?.target}
                          rel={item?.rel}
                          className="block font-semibold text-gray-900 hover:text-contact title-items"
                        >
                          <div className="flex justify-between items-center ">
                            <span>{item?.name}</span>
                            <FontAwesomeIcon
                              icon={faArrowRight}
                              className="mr-4 icon"
                            />
                          </div>
                          <span className="absolute inset-0" />
                        </a>
                        <p className="mt-1 text-gray-600 text-xs">
                          {item?.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
            {typeItem === "resource" && (
              <div
                className={`${
                  isOpen ? "" : "hidden"
                } pt-[32px] headerDropdown xl:absolute xl:right-0 xl:left-0 xl:bg-white z-[160]`}
                onMouseLeave={() => closeMenuDesktop()}
              >
                <div className={`flex justify-between xl:container`}>
                  <div className="">
                    {itemHeader.map(
                      (item: any, index) =>
                        item?.type !== "caseStudies" && (
                          <div
                            key={index}
                            className="group relative flex text-base leading-6 mb-[40px] gap-4 w-full"
                          >
                            <div className="pl-4">
                              <div className="border-b border-line pb-3 flex items-center">
                                <Image src={item?.icon} alt="resource" />
                                <a
                                  target={item?.target}
                                  href={item?.href}
                                  className="ml-3 block font-semibold text-gray-900 hover:text-contact title-items"
                                >
                                  <div className="flex justify-between items-center w-[200px]">
                                    <span>{item?.name}</span>
                                    <FontAwesomeIcon
                                      icon={faArrowRight}
                                      className="mr-4 icon"
                                    />
                                  </div>
                                  <span className="absolute inset-0" />
                                </a>
                              </div>
                              <p className="pt-3 text-gray-600 ">
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
                        item?.type === "caseStudies" && (
                          <div
                            className="grid gap-6 text-base text-center leading-6 mb-[40px] rounded-xl py-4 px-5 shadow-[0px_0px_20px_0px_rgba(0,_0,_0,_0.11);]"
                            key={index}
                          >
                            <Image
                              alt="support"
                              src={caseStudies}
                              className="w-[320px] h-[154px]"
                            />
                            <div className="my-auto">
                              <div className="mb-5">
                                <div className="" key={index}>
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
                                {lang?.header?.resource?.caseStudies?.textLink}
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
            {typeItem === "support" && (
              <div
                className={`${
                  isOpen ? "" : "hidden"
                } pt-[32px] headerDropdown xl:absolute xl:right-0 xl:left-0 xl:bg-white z-[160]`}
                onMouseLeave={() => closeMenuDesktop()}
              >
                <div className={` grid grid-cols-2 xl:container`}>
                  <div className="gap-6 ">
                    {itemHeader.map(
                      (item: any, index) =>
                        item?.type !== "contact" && (
                          <div
                            className=" text-base leading-6 mb-[40px] max-w-[384px] w-full"
                            key={index}
                          >
                            <div className="">
                              <div className="mb-10">
                                <div
                                  className="border-b border-line pb-3 flex items-center"
                                  key={index}
                                >
                                  <Image src={item?.icon} alt="support" />
                                  <a
                                    rel="canonical nofollow"
                                    href={item?.href}
                                    className="block font-semibold text-gray-900 ml-3 hover:text-contact title-items"
                                  >
                                    <div className="flex justify-between items-center w-[300px] line-clamp-1">
                                      <span>{item?.name}</span>
                                      <FontAwesomeIcon
                                        icon={faArrowRight}
                                        className="mr-4 icon"
                                      />
                                    </div>
                                  </a>
                                </div>
                                <p className="pt-3 text-gray-600 ">
                                  {item?.description}
                                </p>
                              </div>
                            </div>
                          </div>
                        )
                    )}
                  </div>
                  <div className="gap-6">
                    {itemHeader.map(
                      (item: any, index) =>
                        item?.type === "contact" && (
                          <div
                            className="flex gap-6 text-base leading-6 mb-[40px] rounded-xl py-[20px] px-[16px] w-full shadow-[0px_0px_20px_0px_rgba(0,_0,_0,_0.11);]"
                            key={index}
                          >
                            <Image
                              alt="support"
                              src={contact}
                              className="w-[282px] h-[192px] "
                            />
                            <div className="my-auto">
                              <div className="mb-5">
                                <div className="" key={index}>
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
                                href={`/${locale}/contact-sales`}
                                target="_blank"
                                className="text-contact block font-semibold text-sm"
                              >
                                {lang?.header?.contactUs}
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
              <div className="flex text-sm pb-2 justify-between items-center">
                <div className="flex">
                  <Link
                    href={`/${locale}/contact-sales`}
                    className="flex pr-5 items-center text-contact"
                    onClick={() => toggleModalMobile(false)}
                  >
                    <FontAwesomeIcon
                      icon={faUser}
                      size="lg"
                      className="mr-2 "
                    />
                    {lang?.header?.login}{" "}
                  </Link>
                  <Popover className="relative">
                    <Popover.Button className="flex items-center">
                      <div className="flex border-l border-line pl-5 items-center uppercase">
                        <Image
                          src={language?.icon || ""}
                          className="mr-2"
                          alt="navmain"
                        />
                        {language?.href}{" "}
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
                      <Popover.Panel className="absolute left-[-32px] top-full py-2 w-[232px] z-10 mt-3 rounded-xl bg-white shadow-[0px_8px_16px_0px_rgba(0,_0,_0,_0.05);] ">
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
                              />{" "}
                              {value.name}
                            </div>
                            <div
                              className={`${
                                value === language ? "" : "hidden"
                              } `}
                            >
                              <FontAwesomeIcon icon={faCheck} color="#1D39C4" />
                            </div>
                          </div>
                        ))}
                      </Popover.Panel>
                    </Transition>
                  </Popover>
                </div>

                <DropDownMenuMobile lang={lang} />
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
            className={`tab-item-header ${
              isOpenItemMobile ? "slide-in" : "hidden "
            } `}
          >
            <div className="tab">
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
              <div className=" pt-3">
                {contentTabMobile &&
                  contentTabMobile?.map(
                    (value: any, index: number) =>
                      value.icon && (
                        <Link
                          key={index}
                          onClick={() => toggleModalMobile(false)}
                          rel={value?.rel}
                          href={value?.href}
                          className="text-sm flex py-[10px] items-start"
                        >
                          <Image
                            src={value.icon}
                            alt="support"
                            className="mr-3 mt-1"
                          />
                          <div>
                            <div className="font-bold">{value.name}</div>
                            <div>{value?.description}</div>
                          </div>
                        </Link>
                      )
                  )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Header;
