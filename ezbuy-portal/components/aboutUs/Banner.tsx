"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Element, Link as LinkScroll } from "react-scroll";
import { useWindowSize } from "usehooks-ts";

const Banner = ({ aboutUs }: { aboutUs: any }) => {
  const [activeSection, setActiveSection] = useState<string>("whoWeAre");
  const screen = useWindowSize();
  const checkWidthScreen = screen.width < 1024;
  const [isTop, setIsTop] = useState<number>(0);

  const dataScroll = [
    {
      label: aboutUs.whoWeAre,
      id: "whoWeAre",
    },
    {
      label: aboutUs.ourStrengths,
      id: "ourStrengths",
    },
    {
      label: aboutUs.ourCulture,
      id: "ourCulture",
    },
    {
      label: aboutUs.trustSecurity,
      id: "trustSecurity",
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsTop(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const isTopHeader = checkWidthScreen ? "top-[55px]" : "top-[70px]";
  const isNeoMenu =
    isTop < 154 ? "" : `fixed w-full ${isTopHeader} bg-white shadow-1 z-10`;

  const desktop = isTop === 0 ? -190 : -150;
  const mobile = isTop > 0 ? -130 : -120;

  return (
    <Element name="whoWeAre" className="w-full h-full bg-white shadow-1">
      <div
        style={{
          backgroundImage: `${
            checkWidthScreen
              ? "url(https://strapi-ezbuy.ichiba.net/uploads/Header_tittle_mobile_4bdacecb47.webp)"
              : "url(https://strapi-ezbuy.ichiba.net/uploads/Header_tittle_312c367040.webp)"
          }`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
        className={`w-full flex justify-end flex-col items-center ${
          checkWidthScreen ? "h-[208px]" : "h-[240px]"
        } `}
      >
        <div className="text-center mb-[30px] lg:mb-14">
          <p className="text-xl lg:text-2xl font-semibold leading-30 lg:leading-9 not-italic text-white">
            {aboutUs.aboutUs}
          </p>
          <div className="flex lg:mt-1">
            <Link
              className="text-sm font-normal leading-21 not-italic text-white opacity-60"
              href={"/"}
            >
              {aboutUs.home}
            </Link>
            <div className="text-sm font-normal leading-21 not-italic px-1 w-6 h-6 text-center text-white opacity-60">
              /
            </div>
            <Link
              className="text-sm font-medium leading-21 not-italic text-white"
              href={"#"}
            >
              {aboutUs.aboutUs}
            </Link>
          </div>
        </div>
      </div>
      <div className={`${isNeoMenu}`}>
        <div className="flex w-full overflow-x-auto px-4 py-3 md:justify-center">
          {dataScroll.map((item) => (
            <LinkScroll
              key={item.id}
              to={item.id}
              spy={true}
              smooth={true}
              offset={checkWidthScreen ? mobile : desktop}
              duration={1000}
              onSetActive={(data) => {
                setActiveSection(data);
              }}
              className={`whitespace-nowrap mr-6 text-sm leading-21 cursor-pointer lg:min-w-40 ${
                item.id === activeSection
                  ? "text-[#262626] font-bold"
                  : "font-normal text-[#434343]"
              }`}
            >
              {item.label}
            </LinkScroll>
          ))}
        </div>
      </div>
    </Element>
  );
};

export default Banner;
