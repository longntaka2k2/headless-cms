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

const CustomerStories = ({ lang }: any) => {
  const [active, setActive] = useState(0);
  const [overLayVisible, setOverlayVisible] = useState(false);
  const [videoTitle, setVideoTitle] = useState("");
  const opts: YouTubeProps["opts"] = {
    height: "315",
    width: "560",
    // playerVars: {
    //   // https://developers.google.com/youtube/player_parameters
    //   autoplay: 1,
    // },
  };

  const hide = () => {
    setOverlayVisible(false);
    cElement?.target?.stopVideo();
  };

  const display = () => {
    setOverlayVisible(true);
    cElement?.target?.playVideo();
  };
  const onVideoReadyHandler = (element: any) => {
    cElement = element;
    setVideoTitle(element?.target?.playerInfo?.videoData?.title);
  };
  const locale = usePathname().slice(1, 3);
  const link = locale === "en" ? "/en/contact-sales" : "/vi/contact-sales";

  return (
    <div className="lg:py-10 py-6 container px-4">
      <div className="text-[#333] my-4">
        <h2 className="text-xl lg:text-[30px] font-bold text-center mb-5">
          {lang?.heading}
        </h2>
        <p className="text-base text-center mb-5">{lang?.subHeading}</p>
        <div className="px-4 py-5 rounded-[20px] bg-[#F2F6F9] lg:items-center lg:px-10 lg:pt-10 lg:max-w-[990px] mx-auto lg:mt-10">
          {lang?.content?.map((value: any, index: number) => (
            <div
              className={`${
                index === active ? "" : "hidden"
              } min-h-[310px] sm:min-h-[260px] lg:min-h-[250px]`}
              key={index}
            >
              <div>
                <EzImage
                  src={"/uploads/quote_left_1_7a245635e1.svg"}
                  alt="quote"
                  width={39}
                  height={31}
                  className="mt-3 w-7 h-[23px] lg:w-[38px] lg:h-[31px]"
                />
                <div
                  className="font-medium text-[20px] lg:h-[50px]"
                  style={{ fontFamily: "Lora" }}
                >
                  {value?.subtitle}
                </div>
                <div className="flex items-center mt-3">
                  <div className="mr-3">
                    <EzImage
                      src={"/uploads/Avatar_0cac47099a.png"}
                      alt="/uploads/Avatar_0cac47099a.png"
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
                <FontAwesomeIcon width={16} height={16} icon={faArrowLeft} />
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
                <FontAwesomeIcon width={16} height={16} icon={faArrowRight} />
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center text-sm font-medium mt-6">
          <Link
            className="bg-brand-primary px-4 py-2 text-white text-sm lg:text-base font-medium lg:py-[14px] lg:px-8 rounded-lg"
            href={`/${locale}/blog/category/${
              locale === "en" ? "customer-stories" : "cau-chuyen-khach-hang"
            }`}
          >
            {lang?.view}
            <FontAwesomeIcon width={16} height={16}
              icon={faArrowRight}
              className="ml-1 group-hover:translate-x-2 transition-all"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CustomerStories;
