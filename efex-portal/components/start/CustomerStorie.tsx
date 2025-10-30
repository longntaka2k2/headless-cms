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

const CustomerStore = ({ lang }: any) => {
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
  const link = locale === 'en' ? '/en/contact-sales' : '/vi/contact-sales'
  return (
    <div className="lg:bg-[url(https://strapi-efex.ichiba.net/uploads/Customer_say_d9933bec69.svg)] bg-[#F3F6F9] lg:py-10 py-6">
      <div className="text-[#333] px-4 lg:px-0 lg:container my-4 ">
        <div className="text-xl lg:text-[30px] font-bold text-center mb-5">
          {lang?.title}
        </div>
        <div className="px-4 py-5 rounded-[20px] shadow-[0px_8px_16px_0px_rgba(0,_0,_0,_0.05)] lg:items-center lg:px-10 lg:pt-10 lg:max-w-[990px] mx-auto lg:mt-10 bg-white">
          {lang?.content?.map((value: any, index: number) => (
            <div className={`${index === active ? "" : "hidden"}`} key={index}>
              <div className="lg:flex lg:justify-between">
                <div className="relative">
                  {/* <div
                    className={clsx(
                      "absolute-center z-[1] w-fit transition ",
                      "hover:bg-gray-1 rounded-full cursor-pointer"
                    )}
                    onClick={() => display()}
                  >
                    <EzImage
                      src={"/uploads/Frame_35_cdf704d0c4.png"}
                      width={84}
                      height={84}
                      alt=""
                    />
                  </div> */}
                  <EzImage
                    src={"/uploads/Rectangle_7130_6bb12fd6c0.png"}
                    alt="/uploads/Avatar_0cac47099a.png"
                    width={351}
                    height={388}
                    quality={100}
                    className="rounded-[16px]"
                    style={{
                      clipPath:
                        "polygon(0 0, 88% 0, 100% 12%, 100% 100%, 70% 100%, 12% 100%, 0 88%, 0 0)",
                    }}
                  />
                </div>
                <div className="lg:max-w-[499px]">
                  <div className="mt-6 text-[#666] font-bold text-[20px]">
                    {value?.label}
                  </div>
                  <EzImage
                    src={"/uploads/quote_left_1_db7f1ac91a.svg"}
                    alt="/uploads/Avatar_0cac47099a.png"
                    width={28}
                    height={23}
                    className="mt-3 "
                  />
                  <div
                    className="font-medium text-[20px] lg:max-w-[440px]"
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
                      <div className="font-bold text-sm lg:text-base">
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
        </div>
        <Link
          href={`/${locale}/blog`}
          className="block w-max rounded-[8px] text-sm bg-contact text-white py-2 px-3 lg:px-5 my-5 lg:mt-10 lg:mb-0 hover:bg-[#A30505] mx-auto"
        >
          {lang?.view}
          <FontAwesomeIcon
            icon={faArrowRight}
            className="ml-2"
            width={24}
            height={24}
          />
        </Link>
      </div>
      <div
        id="video-overlay"
        className={clsx(
          " justify-center items-center fixed h-[100vh]",
          "bg-[rgba(_0,_0,_0,_0.5)] z-50 top-0 right-0 left-0 bottom-0",
          overLayVisible ? "block" : "hidden"
        )}
      >
        <div className="absolute-center cursor-pointer">
          <div className="flex justify-between text-white items-center">
            <span className="font-bold text-2xl">{videoTitle}</span>
            <span className=" w-fit " onClick={() => hide()}>
              <FontAwesomeIcon
                icon={faXmark}
                size="3x"
                className="ring-transparent ring-2 hover:scale-125 transition duration-300"
              />
            </span>
          </div>
          <YouTube
            videoId="aDJxt7gXMOU"
            opts={opts}
            iframeClassName="w-[95vw] h-[35vh] md:w-[44.8vw] md:h-[50vh]"
            onReady={onVideoReadyHandler}
          />
        </div>
      </div>
    </div>
  );
};

export default CustomerStore;
