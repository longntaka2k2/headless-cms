'use client';
import React from "react";
import facebook from "@/public/icons/facebook.svg";
import instagram from "@/public/icons/instagram.svg";
import tiwtter from "@/public/icons/twitter.svg";
import youtube from "@/public/icons/youtube.svg";
import linkedin from "@/public/icons/linkedin.svg";
import location from "@/public/icons/location-regular.svg";
import email from "@/public/icons/email-regular.svg";
import Image from "next/image";
import logo from "@/public/icons/logo.svg";
import locationorange from "@/public/icons/location-orange.svg";
import { usePathname } from "next/navigation";
import { getDictionary } from "@/app/getDictionary";
import Link from "next/link";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = ({ lang }: { lang: any }) => {
  const locale = usePathname().slice(1, 3);
  const listAddress = [
    {
      address: "Singapore",
      location: "470 North Bridge road, Bugis Cube, Singapore"
    },
    {
      address: "Japan",
      location: "3-chōme-10-8 Shinsuna, Koto City, Tokyo 136-0075, Japan"
    },
    {
      address: "Texas, USA",
      location: "1606 Audrey Dr, Garland, TX 75040, United States"
    },
    {
      address: "California, USA",
      location: "1316 John Reed Ct, City of Industry, CA 91745, United States"
    }
  ]

  const listSocials = [
    {
      icon: facebook,
      link: "#",
    },
    {
      icon: instagram,
      link: "#",
    },
    {
      icon: tiwtter,
      link: "#",
    },
    {
      icon: youtube,
      link: "#",
    },
    {
      icon: linkedin,
      link: "#",
    }
  ]

  return (
    <>
      <div className="bg-primary-1 pt-6 pb-10 lg:pt-10 lg:pb-6">
        <div className="container">
          <div className="flex flex-col gap-6 lg:gap-10 mb-6 lg:mb-8">
            <div className="flex flex-col lg:flex-row-reverse gap-6 lg:gap-15">
              <div className="lg:w-2/3 grid grid-cols-2 lg:grid-cols-4 gap-6">
                {
                  lang.listMenu.map((item: any, index: number) => (
                    <div key={index} className="flex flex-col gap-4">
                      <p className="font-bold">
                        {item.lablel}
                      </p>
                      <ul className="pl-4 list-disc flex flex-col gap-4">
                        {
                          item.contents.map((value: any, idx: number) => (
                            <Link href={value.link || "#"} key={idx} className="">
                              <li className="hover:underline text-sm">{value.title}</li>
                            </Link>
                          ))
                        }
                      </ul>
                    </div>
                  ))
                }
              </div>
              <div className="lg:w-1/3">
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
                <h3 className="text-base font-medium uppercase text-primary-7 mt-3 mb-6 lg:mb-10">
                  One-stop dropshipping solutions
                </h3>
                <div className="flex items-center gap-2">
                  <Image src={location} width={24} height={24} alt="icon-location" />
                  <span>
                    470 North Bridge road, Bugis Cube, Singapore
                  </span>
                </div>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row gap-6 lg:gap-15">
              <div className="lg:w-1/3 flex flex-col gap-4">
                <p className="text-base font-bold text-[#00194F]">
                  Connect us:
                </p>
                <div className="flex items-center gap-4">
                  {
                    listSocials.map((item, index) => (
                      <Link key={index} href={item.link || "#"}>
                        <Image src={item.icon} width={40} height={40} alt="icon-social" />
                      </Link>
                    ))
                  }
                </div>
              </div>
              <div className="lg:w-2/3">
                <h3 className="uppercase text-lg font-bold lg:font-medium mb-6">
                  WE ARE GLOBAL, MEET OUR TEAM
                </h3>
                <div className="grid lg:grid-cols-3 gap-6">
                  {
                    listAddress.map((item, index) => (
                      <div key={index} className="flex gap-4 items-start w-full">
                        <div className="min-w-8 min-h-8 bg-[#FFDDA3] rounded-lg flex items-center justify-center">
                          <Image src={locationorange} width={24} height={24} alt="icon-location" />
                        </div>
                        <div>
                          <p className="text-base font-medium mb-1">
                            {item.address}
                          </p>
                          <p className="text-sm">
                            {item.location}
                          </p>
                        </div>
                      </div>
                    ))
                  }
                </div>
              </div>
            </div>
          </div>
          <hr />
          <div className="mt-5 lg:mt-6 flex flex-col lg:flex-row-reverse gap-6 lg:justify-between">
            <div className="flex items-center gap-4 text-sm">
              <a href="#">Terms & Conditions</a> | <a href="#">Privacy Policy</a>
            </div>
            <p className="text-sm">© 2025 IChibaOne Platform. All Rights Reserved</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
