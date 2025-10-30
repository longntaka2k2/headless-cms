import React from "react";
import facebook from "@/public/images/icons/facebook.svg";
import tiwtter from "@/public/images/icons/twitter.svg";
import youtube from "@/public/images/icons/youtube.svg";
import tiktok from "@/public/images/icons/tiktok.svg";
import linkedin from "@/public/images/icons/linkedin.svg";
import address from "@/public/images/icons/address.svg";
import emailIcon from "@/public/images/icons/emailIcon.svg";
import insta from "@/public/images/icons/instagram.svg";
import { getDocs } from "@/public/api/strapiService";
import Image from "next/image";
import logoPC from "@/public/images/icons/iconFooter.svg";
import stripe from "@/public/images/icons/stripe.svg";
import paypal from "@/public/images/icons/paypal.svg";
import { getDictionary } from "@/app/getDictionary";
import Link from "next/link";

const Footer = async ({ params }: { params: any }) => {
  const lang = await getDictionary(params?.lang ? params?.lang : "en");
  const docs = await getDocs(params.lang as string);

  const headerResource = [
    {
      name: lang?.header?.resource?.blog?.title,
      href: `/${params?.lang}/blog`,
    },
    {
      name: lang?.header?.resource?.video?.title,
      href: "https://www.youtube.com/@efex.fulfillment",
    },
    {
      name: lang?.header?.support?.support?.title,
      href: `/${params?.lang}/support/support-request`,
    },
    {
      name: lang?.header?.resource?.caseStudies?.label,
      href: `/${params?.lang}/customer-success-studies`,
    },
  ];
  const headerSolution = [
    {
      name: lang?.header?.solution?.ecommerce?.title,
      href: `/${params?.lang}/solutions/ecommerce-order-fulfillment`,
    },
    {
      name: lang?.header?.solution?.crossborder?.title,
      href: `/${params?.lang}/solutions/cross-border-shipping`,
    },
    {
      name: lang?.header?.solution?.b2b?.title,
      href: `/${params?.lang}/solutions/b2b-retail-fulfillment`,
    },
    {
      name: lang?.header?.solution?.bonded?.title,
      href: `/${params?.lang}/solutions/bonded-warehouse`,
    },
    {
      name: lang?.header?.solution?.customer?.title,
      href: `/${params?.lang}/solutions/custom-clearance`,
    },
    {
      name: lang?.header?.solution?.sell?.title,
      href: `/${params?.lang}/solutions/sell-in-vietnam`,
    },
    {
      name: lang?.header?.solution?.sellGlobally?.title,
      href: `/${params?.lang}/solutions/sell-globally`,
    },
    {
      name: lang?.header?.solution?.sellOnAmazon?.title,
      href: `/${params?.lang}/solutions/sell-on-amazon`,
    },
    {
      name: lang?.header?.solution?.marketplaceOperations?.title,
      href: `/${params?.lang}/solutions/marketplace-operations`,
    },
  ];
  const footerCompany = [
    {
      name: lang?.footer?.aboutUs,
      href: `/${params?.lang}/company/about-us`,
    },
    {
      name: lang?.footer?.pricing,
      href: `/${params?.lang}/pricing`,
    },
    {
      name: lang?.footer?.careers,
      href: `https://careers.ichiba.net/${params?.lang}`,
      target: "_blank",
      rel: "nofollow",
    },
  ];
  const shipping = [
    {
      name: lang?.footer?.createShipment,
      href: "https://portal.efex.vn/",
    },
    {
      name: lang?.footer?.rateTransitTime,
      href: `/${params.lang}/pricing`,
    },
    {
      name: lang?.footer?.valueAdded,
      href: "#",
    },
    {
      name: lang?.footer?.tracking,
      href: "https://portal.efex.vn/",
    },
  ];

  return (
    <>
      <div className="bg-footer text-colortext">
        <div className="px-4 lg:px-[30px] text-sm container lg:pt-[80px] lg:pb-[32px] py-[24px] grid lg:grid-cols-2 flex-row-reverse">
          <div className="lg:hidden">
            <div className="grid grid-cols-2 ">
              <div>
                <div className="font-bold uppercase ">
                  {lang?.footer?.company}
                </div>
                <ul className="list-outside pt-3 pl-4 list-disc">
                  {footerCompany.map((value: any, index) => (
                    <li className="pb-4 " key={index}>
                      <Link
                        className=""
                        href={value.href}
                        target={value?.target}
                      >
                        {value.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <div className="font-bold uppercase ">
                  {lang?.header?.resource?.title}
                </div>
                <ul className="list-outside pt-3 pl-4 list-disc">
                  {headerResource.map((value: any, index) => (
                    <li
                      className={`pb-4 ${value.name ? "" : "d-none"}`}
                      key={index}
                    >
                      {index != 0 ? (
                        <Link className="" rel="nofollow" href={value.href}>
                          {value.name}
                        </Link>
                      ) : (
                        <Link className="" href={value.href}>
                          {value.name}
                        </Link>
                      )}
                    </li>
                  ))}

                  {docs &&
                    docs.map((value: any, index: number) => (
                      <li
                        key={index}
                        className={`pb-4 ${
                          value.attributes.title ? "" : "d-none"
                        }`}
                      >
                        {index != 0 ? (
                          <Link
                            className=""
                            rel="nofollow"
                            href={`/${value.attributes.slug}`}
                          >
                            {value.attributes.title}
                          </Link>
                        ) : (
                          <Link className="" href={`/${value.attributes.slug}`}>
                            {value.attributes.title}
                          </Link>
                        )}
                      </li>
                    ))}
                </ul>
              </div>
            </div>
            <div className="mt-2">
              <div className="font-bold uppercase ">
                {lang?.header?.solution?.title}
              </div>
              <ul className="list-outside pt-3 pl-4 list-disc">
                {headerSolution.map(
                  (value: any, index) =>
                    value.name && (
                      <li
                        className={`pb-4 ${value.name ? "" : "d-none"}`}
                        key={index}
                      >
                        <Link className="" href={value.href}>
                          {value.name}
                        </Link>
                      </li>
                    )
                )}
              </ul>
            </div>
            <div className="mt-2">
              <div className="font-bold uppercase ">
                {lang?.footer?.shipping}
              </div>
              <ul className="list-outside pt-3 pl-4 list-disc">
                {shipping.map((value: any, index) => (
                  <li
                    className={`pb-4 ${value.name ? "" : "d-none"}`}
                    key={index}
                  >
                    <Link className="" target="_blank" href={value.href}>
                      {value.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="mt-2 lg:mt-0">
            <Image src={logoPC} alt="logo" className="h-[40px] w-auto " />
            <div className="mt-3 uppercase font-bold text-sm">
              {lang?.footer?.companyName}
            </div>
            <div className="pt-[14px] lg:pt-[40px] ">
              <div className="grid gap-2">
                {lang?.footer?.addressDetail.map((item: any, idx: number) => (
                  <div key={idx} className="flex max-w-[300px] items-start">
                    <Image src={address} className=" mr-1" alt="logo" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <Link
                href={"mailto:admin@efex.asia"}
                target="_blank"
                className="flex pt-[14px] hover:text-brand-primary"
              >
                <Image src={emailIcon} className=" mr-1" alt="logo" />
                <span className="pt-1">{lang?.footer?.email}</span>
              </Link>
            </div>
            <div className="pt-[26px] lg:pt-[40px]">
              <div className="font-bold uppercase ">
                {lang?.footer?.subscribe}
              </div>
              <div className="opacity-80">{lang?.footer?.subscribeDetail}</div>
            </div>
            <div className="flex mt-4 lg:mt-6">
              <input
                placeholder={lang?.footer?.placeholderSubscribe}
                className="max-w-[248px] w-[100%] lg:min-w-[346px] bg-inherit p-3 rounded-lg border border-white"
              />
              <button className="ml-[10px] rounded-lg bg-contact py-[11px] px-6 hover:bg-[#A30505]">
                {lang?.footer?.subscribe}
              </button>
            </div>
            <div className="mt-6 lg:mt-10 ">
              <div className="font-bold uppercase ">
                {lang?.footer?.connectUs}
              </div>
              <div className="flex pt-4 overflow-x-auto">
                <Link
                  href="https://www.facebook.com/efex.asia"
                  target="_blank"
                  className="mr-4 "
                  rel="nofollow"
                >
                  <Image alt="facebook" src={facebook} />
                </Link>
                <Link
                  href="https://twitter.com/EfexVietnam"
                  target="_blank"
                  className="mr-4 "
                  rel="nofollow"
                >
                  <Image alt="tiwtter" src={tiwtter} />
                </Link>
                <Link
                  href="https://www.youtube.com/@efex.fulfillment"
                  target="_blank"
                  className="mr-4 "
                  rel="nofollow"
                >
                  <Image alt="youtube" src={youtube} />
                </Link>{" "}
                <Link
                  href="https://www.linkedin.com/company/efexfulfillment/"
                  target="_blank"
                  className="mr-4 "
                  rel="nofollow"
                >
                  <Image alt="linkedin" src={linkedin} />
                </Link>
                <Link
                  href="https://www.tiktok.com/@efex.fulfillment"
                  target="_blank"
                  className="mr-4 "
                  rel="nofollow"
                >
                  <Image alt="tiktok" src={tiktok} />
                </Link>
                <Link
                  href="https://www.instagram.com/efex_asia/"
                  target="_blank"
                  className="mr-4 "
                  rel="nofollow"
                >
                  <Image alt="tiktok" src={insta} />
                </Link>
              </div>
            </div>

            <div className="mt-6 lg:mt-10 ">
              <div className="font-bold uppercase ">
                {lang?.footer?.paymentMethods}
              </div>
              <div className="flex gap-4 pt-4 overflow-x-auto">
                 <Image alt="paypal" src={paypal} />
                  <Image alt="stripe" src={stripe} />
              </div>
            </div>
          </div>

          {/* desktop */}
          <div className="lg:block hidden">
            <div className="grid grid-cols-2 ">
              <div>
                <div className="font-bold uppercase ">
                  {lang?.footer?.company}
                </div>
                <ul className="list-outside pt-3 pl-4 list-disc">
                  {footerCompany.map((value: any, index) => (
                    <li
                      className={`pb-4 ${value.name ? "" : "d-none"}`}
                      key={index}
                    >
                      <Link
                        className="hover:underline"
                        href={value.href}
                        target={value?.target}
                      >
                        {value.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="">
                <div className="font-bold uppercase ">
                  {lang?.header?.solution?.title}
                </div>
                <ul className="list-outside pt-3 pl-4 list-disc">
                  {headerSolution.map(
                    (value: any, index) =>
                      value.name && (
                        <li className="pb-4" key={index}>
                          <a className="hover:underline" href={value.href}>
                            {value.name}
                          </a>
                        </li>
                      )
                  )}
                </ul>
              </div>
            </div>
            <div className="grid grid-cols-2 mt-[26px]">
              <div>
                <div className="font-bold uppercase ">
                  {lang?.header?.resource?.title}
                </div>
                <ul className="list-outside pt-3 pl-4 list-disc">
                  {headerResource.map((value: any, index) => (
                    <li
                      className={`pb-4 ${value.name ? "" : "d-none"}`}
                      key={index}
                    >
                      {index != 0 ? (
                        <a
                          className="hover:underline"
                          rel="nofollow"
                          href={value.href}
                        >
                          {value.name}
                        </a>
                      ) : (
                        <a className="hover:underline" href={value.href}>
                          {value.name}
                        </a>
                      )}
                    </li>
                  ))}
                  {docs &&
                    docs.map((value: any, index: number) => (
                      <li
                        className={`pb-4 ${
                          value.attributes.title ? "" : "d-none"
                        }`}
                        key={index}
                      >
                        {index != 0 ? (
                          <a
                            className="hover:underline"
                            rel="nofollow"
                            href={`${value.attributes.slug}`}
                          >
                            {value.attributes.title}
                          </a>
                        ) : (
                          <a
                            className="hover:underline"
                            href={value.attributes.slug}
                          >
                            {value.attributes.title}
                          </a>
                        )}
                      </li>
                    ))}
                </ul>
              </div>

              <div className="">
                <div className="font-bold uppercase ">
                  {lang?.footer?.shipping}
                </div>
                <ul className="list-outside pt-3 pl-4 list-disc">
                  {shipping.map((value: any, index) => (
                    <li
                      className={`pb-4 ${value.name ? "" : "d-none"}`}
                      key={index}
                    >
                      <a
                        className="hover:underline"
                        target="_blank"
                        href={value.href}
                      >
                        {value.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="py-[24px] text-colortext px-4 text-center text-sm border-t border-[rgba(255,_255,_255,_0.2)]">
          <div>{lang?.footer?.premiumEcommerce}</div>
        </div>
      </div>
    </>
  );
};

export default Footer;
