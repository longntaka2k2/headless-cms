"use client";
import hambuger from "@/public/images/icons/hambuger.svg";
import logo from "@/public/images/icons/logo.svg";
import {
  faArrowRight,
  faChevronDown,
  faMagnifyingGlass,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Dialog, Disclosure, Popover, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import { Fragment, useEffect, useState } from "react";
import LanguageSwitcher from "./LanguageSwitcher";
import bgPopoverPanel from "@/public/images/contents/bg-popover-panel.svg";
import clsx from "clsx";
import Link from "next/link";
import { LocalizeLink } from "@/utils/ultils";
import EzImage from "../EzImage";
import HeaderUser from "./HeaderUser";
import HeaderUserMB from "./HeaderUserMobile";

const LanguageMenuItems = [
  {
    name: "English",
    icon: "en",
    href: "en",
  },
  {
    name: "日本",
    icon: "ja",
    href: "ja",
  },
  {
    name: "Tiếng Việt",
    icon: "vi",
    href: "vi",
  },
];
const linkFAQ = (lang: string) => {
  let link = "/#";
  // switch (lang) {
  //   case "vi":
  //     link = "https://ezbuyjapan.gitbook.io/help-center/faqs";
  //     break;
  //   case "ja":
  //     link = "https://ezbuyjapan.gitbook.io/help-center/faqs";
  //     break;
  //   default:
  //     link = "https://ezbuyjapan.gitbook.io/help-center/faqs";
  //     break;
  // }
  return link;
};
const MenuItem = ({
  tagert,
  link,
  title,
  description,
  close,
}: {
  tagert?: string;
  link: string;
  title: string;
  description: string;
  close: () => void;
}) => (
  <div className="group relative flex items-center text-base leading-6 hover:bg-gray-50 p-2">
    <div className="flex-auto">
      <Link
        href={link}
        target={tagert}
        className="block font-semibold text-gray-900"
        onClick={() => close()}
      >
        {title}
        <span className="absolute inset-0" />
      </Link>
      <p className="mt-1 text-gray-600">{description}</p>
    </div>
  </div>
);
const Header = ({ lang, params }: { lang: any; params: any }) => {
  const companyMenuItems = [
    {
      name: lang?.header?.aboutUs,
      description: lang?.header?.aboutUsDetail,
      href: "/about-us",
    },
    // {
    //   name: lang?.header?.ourCulture,
    //   description: lang?.header?.ourCultureDetail,
    //   href: "/our-culture",
    // },
    {
      name: lang?.header?.partnerNetwork,
      description: lang?.header?.partnerNetworkDetail,
      href: "/partners-network",
    },
  ];
  const serviceMenuItems = [
    {
      name: lang?.header?.cbe,
      description: lang?.header?.cbeDetail,
      href: "/services/cross-border-ecommerce",
    },
    {
      name: lang?.header?.sbs,
      description: lang?.header?.sbsDetail,
      href: "/services/cross-border-shipping",
    },
    {
      name: lang?.header?.b2bTrading,
      description: lang?.header?.b2bTradingDetail,
      href: "/services/B2B-wholesale-ecommerce",
    },
    {
      name: lang?.header?.oneStop,
      description: lang?.header?.oneStopDetail,
      href: lang?.header?.linkOneStop,
      tagert: "_blank",
    },
    {
      name: lang?.header?.WarehouseFullfilment,
      description: lang?.header?.WarehouseFullfilmentDetail,
      href: "/services/warehouse-fulfillment",
    },
    {
      name: lang?.header?.airFreight,
      description: lang?.header?.airFreightDetail,
      href: "/services/air-freight-customs-clearance",
    },
    {
      name: lang?.header?.dropshipping,
      description: lang?.header?.dropshippingDetail,
      href: "/services/dropshipping",
    },
    {
      name: lang?.header?.sio,
      description: lang?.header?.sioDetail,
      href: "/services/sell-overseas",
    },
    {
      name: lang?.header?.sellInVie,
      description: lang?.header?.sellInVieDetail,
      href: "/services/sell-in-vietnam",
    },
    {
      name: lang?.header?.sij,
      description: lang?.header?.sijDetail,
      href: "/services/sell-in-japan",
    },
  ];
  const resourceMenuItems = [
    {
      name: lang?.header?.blog,
      description: lang?.header?.blogDetail,
      href: "/blog",
    },
    {
      name: lang?.header?.faq,
      description: lang?.header?.faqDetail,
      href: linkFAQ(params.lang as string),
      isBlank: true,
    },
    // {
    //   name: lang?.header?.userGuide,
    //   description: lang?.header?.userGuideDetail,
    //   href: "/resource/user-guide",
    // },
    {
      name: lang?.header?.videoLibrary,
      description: lang?.header?.videoLibraryDetail,
      href: "https://www.youtube.com/@ezbuyjapan",
      isBlank: true,
    },
    {
      name: lang?.header?.caseStudies,
      description: lang?.header?.caseStudiesDetail,
      href: "/customer-success-studies",
      isBlank: true,
    },
  ];
  const signInItems = [
    {
      name: lang.header.listLogin[0],
      href: "https://portal.ezbuy.jp/auth/login",
    },
    {
      name: lang.header.listLogin[1],
      href: "#",
    },
  ];
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isTop, setIsTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolledToTop = window.scrollY === 0;
      setIsTop(isScrolledToTop);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const headerWidth = isTop ? "w-[96%] left-[calc(50%_-_48%)]" : "w-full";
  const position = isTop ? "relative top-2 lg:top-6" : "sticky top-0";
  return (
    <div
      className={clsx(
        "shadow-[0px_4px_12px_rgba(0,_0,_0,_0.09)] flex justify-center bg-white z-50  transition-all duration-100 ease-linear",
        position,
        headerWidth,
        "!fixed"
      )}
    >
      <div className="w-full lg:min-h-[72px] lg:px-6 p-2 lg:py-4">
        <div className="flex lg:text-sm font-medium items-center">
          <div className="mr-[56px] flex items-center">
            <div
              className="ml-auto lg:hidden p-2 mr-3"
              onClick={() => setMobileMenuOpen(true)}
            >
              <Image src={hambuger} alt="logo"></Image>
            </div>
            <Link href={LocalizeLink(params?.lang, "/")}>
              <Image
                src={logo}
                alt="logo"
                className="w-[85px] lg:w-auto"
              ></Image>
            </Link>
          </div>
          <div className="flex-1 hidden lg:flex">
            <div className="flex items-center py-2 px-4">
              <Popover className="relative">
                <Popover.Button className="flex items-center">
                  <span className="mr-2">{lang?.header?.company}</span>
                  <FontAwesomeIcon
                    icon={faChevronDown}
                    height={12}
                    width={12}
                  />
                </Popover.Button>
                <Popover.Overlay className="fixed inset-0 bg-black opacity-10" />
                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-200"
                  enterFrom="opacity-0 translate-y-1"
                  enterTo="opacity-100 translate-y-0"
                  leave="transition ease-in duration-150"
                  leaveFrom="opacity-100 translate-y-0"
                  leaveTo="opacity-0 translate-y-1"
                >
                  <Popover.Panel
                    className={clsx(
                      "absolute -left-8 top-full z-10",
                      "mt-3 w-screen max-w-md overflow-hidden bg-white shadow-4 ring-1 ring-gray-900/5"
                    )}
                  >
                    {({ close }) => (
                      <>
                        <div className="p-5 gap-6 flex flex-col">
                          {companyMenuItems.map((item, index) => (
                            <MenuItem
                              key={index}
                              link={LocalizeLink(params.lang, item.href)}
                              description={item.description}
                              title={item.name}
                              close={close}
                            />
                          ))}
                        </div>
                        <Image
                          alt="bg-panel"
                          src={bgPopoverPanel}
                          className="w-full"
                        />
                      </>
                    )}
                  </Popover.Panel>
                </Transition>
              </Popover>
            </div>
            <div className="flex items-center py-2 px-4 ">
              <Popover className="relative">
                <Popover.Button className="flex items-center">
                  <span className="mr-2">{lang?.header?.services}</span>
                  <FontAwesomeIcon
                    icon={faChevronDown}
                    height={12}
                    width={12}
                  />
                </Popover.Button>
                <Popover.Overlay className="fixed inset-0 bg-black opacity-10" />
                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-200"
                  enterFrom="opacity-0 translate-y-1"
                  enterTo="opacity-100 translate-y-0"
                  leave="transition ease-in duration-150"
                  leaveFrom="opacity-100 translate-y-0"
                  leaveTo="opacity-0 translate-y-1"
                >
                  <Popover.Panel className="absolute -left-8 top-full z-10 mt-3 w-screen overflow-hidden bg-white shadow-4 ring-1 ring-gray-900/5  max-w-[65vw]">
                    {({ close }) => (
                      <>
                        <div className="p-5 grid grid-cols-2">
                          <div className="flex flex-col gap-4">
                            <div className="font-bold text-lg capitalize ms-2 -mb-2">
                              {lang.header.forBuyer}
                            </div>
                            {serviceMenuItems
                              .slice(0, 4)
                              .map((item: any, index) => (
                                <MenuItem
                                  key={index}
                                  tagert={item.tagert}
                                  link={LocalizeLink(params.lang, item.href)}
                                  description={item.description}
                                  title={item.name}
                                  close={close}
                                />
                              ))}
                          </div>
                          <div className="flex flex-col gap-4">
                            <div className="font-bold text-lg capitalize ms-2 -mb-2">
                              {lang.header.forSeller}
                            </div>
                            {serviceMenuItems.slice(4).map((item, index) => (
                              <MenuItem
                                key={index}
                                tagert={item.tagert}
                                link={LocalizeLink(params.lang, item.href)}
                                description={item.description}
                                title={item.name}
                                close={close}
                              />
                            ))}
                          </div>
                        </div>
                        <Image
                          alt="bg-panel"
                          src={bgPopoverPanel}
                          className="w-full"
                        />
                      </>
                    )}
                  </Popover.Panel>
                </Transition>
              </Popover>
            </div>
            <div className="flex items-center py-2 px-4 ">
              <Popover className="relative">
                <Popover.Button className="flex items-center">
                  <span className="mr-2">{lang?.header?.resources}</span>
                  <FontAwesomeIcon
                    icon={faChevronDown}
                    height={12}
                    width={12}
                  />
                </Popover.Button>
                <Popover.Overlay className="fixed inset-0 bg-black opacity-10" />
                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-200"
                  enterFrom="opacity-0 translate-y-1"
                  enterTo="opacity-100 translate-y-0"
                  leave="transition ease-in duration-150"
                  leaveFrom="opacity-100 translate-y-0"
                  leaveTo="opacity-0 translate-y-1"
                >
                  <Popover.Panel className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden bg-white shadow-4 ring-1 ring-gray-900/5">
                    {({ close }) => (
                      <>
                        <div className="p-5 gap-6 flex flex-col">
                          {resourceMenuItems.map((item, index) => (
                            <MenuItem
                              key={index}
                              link={LocalizeLink(params.lang, item.href)}
                              description={item.description}
                              title={item.name}
                              close={close}
                            />
                          ))}
                        </div>
                        <Image
                          alt="bg-panel"
                          src={bgPopoverPanel}
                          className="w-full"
                        />
                      </>
                    )}
                  </Popover.Panel>
                </Transition>
              </Popover>
            </div>
            <div className="flex items-center py-2 px-4 ">
              <Link
                href={`https://ezbuyjapan.gitbook.io/help-center/`}
                className="mr-2"
                target="_blank"
              >
                <span>{lang?.header?.support}</span>
              </Link>
            </div>
            <div className="flex ml-auto items-center">
              <div className="flex items-center py-2 px-4 ">
                <FontAwesomeIcon icon={faMagnifyingGlass} size="lg" />
              </div>
              <div className="flex items-center py-2 px-4 ">
                <LanguageSwitcher lang={lang} />
              </div>
              <div className="flex items-center py-2 px-4 ">
                {/* <span className="mr-2">{lang?.header?.login}</span> */}
                <HeaderUser lang={lang} />
              </div>
              <Link
                href={`/${params.lang}/contact-sales`}
                target="_blank"
                role="button"
                className="flex py-2 px-4 h-14 max-h-[40px] items-center text-center bg-brand-secondary-active active:bg-brand-secondary font-bold text-white"
              >
                {lang?.header?.contactSales}
              </Link>
            </div>
          </div>
          <div className="flex ml-auto lg:hidden">
            <HeaderUserMB lang={lang} />
          </div>
        </div>
      </div>
      {/* mobile */}
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <Dialog.Panel className="fixed inset-y-0 right-0 w-full overflow-y-auto bg-white p-4 lg:max-w-sm lg:ring-1 lg:ring-gray-900/10 z-[51]">
          <div className="flex items-center ">
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
            <Link href={LocalizeLink(params?.lang, "/")}>
              <Image
                src={logo}
                alt="logo"
                className="w-[85px] lg:w-auto ml-3"
              ></Image>
            </Link>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Disclosure as="div" className="-mx-3">
                  {({ open }) => (
                    <>
                      <Disclosure.Button
                        className={clsx(
                          "flex items-center justify-between",
                          "w-full py-2 pl-3 pr-3.5  hover:bg-gray-50",
                          "text-base font-semibold leading-7 text-gray-900"
                        )}
                      >
                        {lang?.header?.company}
                        <FontAwesomeIcon
                          icon={faChevronDown}
                          height={12}
                          width={12}
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="mt-2 space-y-2">
                        {[...companyMenuItems].map((item, index) => (
                          <Disclosure.Button
                            key={index}
                            as={Link}
                            href={LocalizeLink(params?.lang, item.href)}
                            onClick={() => setMobileMenuOpen(false)}
                            locale={params.lang}
                            className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                          >
                            {item.name}
                          </Disclosure.Button>
                        ))}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
                <Disclosure as="div" className="-mx-3">
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex w-full items-center justify-between py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                        {lang?.header?.services}
                        <FontAwesomeIcon
                          icon={faChevronDown}
                          height={12}
                          width={12}
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="mt-2 space-y-2">
                        {[...serviceMenuItems].map((item, index) => (
                          <>
                            {(index === 0 || index === 4) && (
                              <div className="font-semibold text-base capitalize ms-4 -mb-2">
                                {index == 0
                                  ? lang.header.forBuyer
                                  : lang.header.forSeller}
                              </div>
                            )}
                            <Link
                              key={index}
                              target={item.tagert}
                              href={LocalizeLink(params?.lang, item.href)}
                              locale={params.lang}
                              onClick={() => setMobileMenuOpen(false)}
                              className={clsx(
                                "block",
                                "py-2 pl-6 pr-3",
                                "rounded-lg hover:bg-gray-50",
                                "text-sm font-semibold leading-7 text-gray-900"
                              )}
                            >
                              {item.name}
                            </Link>
                          </>
                        ))}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
                <Link
                  href="#"
                  locale={params.lang}
                  onClick={() => setMobileMenuOpen(false)}
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  {lang?.header?.trackTrace}
                </Link>
                {/* <Link
                  href="#"
                  locale={params.lang}
                  onClick={() => setMobileMenuOpen(false)}
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  {lang?.header?.b2bCatalog}
                </Link> */}
                <Disclosure as="div" className="-mx-3">
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex w-full items-center justify-between py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                        {lang?.header?.resources}
                        <FontAwesomeIcon
                          icon={faChevronDown}
                          height={12}
                          width={12}
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="mt-2 space-y-2">
                        {[...resourceMenuItems].map((item, index) => (
                          <Disclosure.Button
                            key={index}
                            as={Link}
                            onClick={() => setMobileMenuOpen(false)}
                            href={LocalizeLink(params?.lang, item.href)}
                            locale={params.lang}
                            className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                          >
                            {item.name}
                          </Disclosure.Button>
                        ))}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
                <Link
                  href={`https://ezbuyjapan.gitbook.io/help-center/`}
                  locale={params.lang}
                  onClick={() => setMobileMenuOpen(false)}
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  {lang?.header?.support}
                </Link>
                <LanguageSwitcher lang={lang} />
                <div>
                  <div className="mt-6 bg-[#F2F4F8] p-3 rounded-xl ">
                    <EzImage
                      src={"/uploads/Group_1_7ea82091f9.svg"}
                      alt="/uploads/Group_1_7ea82091f9.svg"
                      width={188}
                      height={109}
                      className="w-full px-4 "
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-5 w-[35%]">
            <Link
              href={`/${params.lang}/contact-sales`}
              target="_blank"
              role="button"
              className="block py-2 px-4 text-center bg-brand-primary active:bg-brand-primary-active font-bold text-white"
            >
              {lang?.header?.contactSales}
            </Link>
          </div>
        </Dialog.Panel>
      </Dialog>
    </div>
  );
};
export default Header;
