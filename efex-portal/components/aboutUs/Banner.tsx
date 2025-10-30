"use client";
import Link from "next/link";
import { useState } from "react";
import { Link as LinkScroll } from "react-scroll";

const Banner = ({ aboutUs }: { aboutUs: any }) => {
  const [activeSection, setActiveSection] = useState<string>("whoWeAre");
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
  return (
    <div className="w-full h-full sticky top-0 bg-white z-10 shadow-1">
      <div className="w-full h-[208px] flex justify-end flex-col items-center">
        <p className="text-xl font-semibold leading-30 not-italic">
          {aboutUs.aboutUs}
        </p>
        <div className="flex">
          <Link
            className="text-sm font-normal leading-21 not-italic"
            href={"/"}
            rel="canonical"
          >
            {aboutUs.home}
          </Link>
          <div className="text-sm font-normal leading-21 not-italic px-1 w-6 h-6 text-center">
            /
          </div>
          <Link
            className="text-sm font-medium leading-21 not-italic"
            href={"#"}
            rel="canonical"
          >
            {aboutUs.aboutUs}
          </Link>
        </div>
      </div>
      <div className="flex w-full overflow-x-auto px-4 py-3">
        {dataScroll.map((item) => (
          <LinkScroll
            key={item.id}
            to={item.id}
            spy={true}
            smooth={true}
            offset={-260}
            duration={500}
            onSetActive={(data) => {
              setActiveSection(data);
            }}
            className={`whitespace-nowrap mr-6 text-sm leading-21 cursor-pointer ${
              item.id === activeSection ? "text-[#262626] font-bold" : "font-normal text-[#434343]"
            }`}
          >
            {item.label}
          </LinkScroll>
        ))}
      </div>
    </div>
  );
};

export default Banner;
