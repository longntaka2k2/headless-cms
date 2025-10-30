"use client";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import EzImage from "../commons/EzImage";
import { useEffect, useState } from "react";
import clsx from "clsx";
import Link from "next/link";
import YouTube, { YouTubeEvent, YouTubeProps } from "react-youtube";
import { usePathname } from "next/navigation";

var cElement: YouTubeEvent = { data: null, target: null };

const CustomerStory = ({ lang }: any) => {
  const [active, setActive] = useState(0);

  const locale = usePathname().slice(1, 3);
  const link = locale === "en" ? "/en/contact-sales" : "/vi/contact-sales";

  return (
    <div className="lg:py-10 py-6 container px-4">
      <div className="text-[#333] my-4">
        <h2 className="text-2xl lg:text-4xl font-bold text-center pb-2">
          {lang?.heading}
        </h2>
        <p className="text-sm lg:text-base text-center mb-6 lg:mb-10 text-[#666]">
          {lang?.subHeading}
        </p>
        <div className="relative px-4 py-6 lg:p-10 rounded-[20px] bg-[#F2F6F9] lg:items-center lg:px-10 lg:pt-10 lg:max-w-[990px] mx-auto lg:mt-10 overflow-hidden">
          {lang?.content?.map((value: any, index: number) => (
            <div
              className={`${
                index === active ? "" : "hidden"
              } min-h-[310px] sm:min-h-[260px] lg:min-h-[250px]`}
              key={index}
            >
              <div>
                <EzImage
                  src={"/uploads/quote_left_1_9c1c7836fd.svg"}
                  alt="quote"
                  width={39}
                  height={31}
                  className="mt-3 w-7 h-[23px] lg:w-[38px] lg:h-[31px]"
                />
                <div
                  className="font-medium text-[20px] lg:h-[50px] my-2 pr-[90px] lg:pr-32"
                  style={{ fontFamily: "Lora" }}
                >
                  {value?.subtitle}
                </div>
                <div className="flex items-center mt-3">
                  <div className="mr-3">
                    <EzImage
                      src={value.avatar}
                      alt={value?.name}
                      width={50}
                      height={50}
                      className="w-10 h-10 lg:h-12 lg:w-12"
                    />
                  </div>
                  <div className="">
                    <div className="font-medium text-sm lg:text-base">
                      {value?.name}
                    </div>
                    <div className="text-xs lg:text-sm">{value?.bio}</div>
                  </div>
                </div>
                <div className="text-sm mt-3 lg:mt-6 lg:text-base">
                  {value?.content}
                </div>
              </div>
            </div>
          ))}
          <div className="">
            <div className="flex items-center justify-end mt-7 lg:mt-10">
              <div
                className={clsx(
                  "py-[7px] px-3 rounded-full border border-[#333]",
                  active === 0 ? "pointer-events-none opacity-0" : ""
                )}
                onClick={() => setActive(active - 1)}
              >
                <FontAwesomeIcon icon={faArrowLeft} />
              </div>
              <div className="text-sm text-[#666] mx-5">
                {active + 1 + " / " + lang?.content?.length}
              </div>
              <div
                className={clsx(
                  "py-[7px] px-3 rounded-full border border-[#333]",
                  active + 1 === lang?.content?.length
                    ? "pointer-events-none opacity-0"
                    : ""
                )}
                onClick={() => setActive(active + 1)}
              >
                <FontAwesomeIcon icon={faArrowRight} />
              </div>
            </div>
          </div>

          <EzImage
            src={"/uploads/Group_a48f118d68.svg"}
            alt="Ezbuy"
            width={187}
            height={187}
            className="absolute -top-3 lg:-top-6 -right-6 lg:-right-9 w-[114px] h-[114px] lg:w-[187px] lg:h-[187px]"
          />
        </div>
        {/* <div className="flex justify-center text-sm font-medium mt-6">
          <Link
            className="w-[170px] lg:w-[180px] bg-brand-secondary px-4 py-3 text-white text-sm text-center font-medium"
            href={`/${locale}/blog/category/${
              locale === "en" ? "customer-stories" : "cau-chuyen-khach-hang"
            }`}
          >
            {lang?.textBtn}
          </Link>
        </div> */}
      </div>
    </div>
  );
};

export default CustomerStory;
