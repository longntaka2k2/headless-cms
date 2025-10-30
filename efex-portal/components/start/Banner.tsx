"use client";

import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import clsx from "clsx";
import Image from "next/image";
import { useState } from "react";
import YouTube, { YouTubeEvent, YouTubeProps } from "react-youtube";
import EzImage from "../commons/EzImage";

var cElement: YouTubeEvent = { data: null, target: null };

const Banner = ({ lang }: { lang: any }) => {
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

  return (
    <div className="">
      <div className="lg:py-3 pt-6 lg:pt-0 lg:block lg:bg-[url(https://strapi-efex.ichiba.net/uploads/banner_Start_PC_0670c028c6.svg)] bg-[url(https://strapi-efex.ichiba.net/uploads/banner_Start_Mobile_5e7d9ed2e2.svg)] bg-no-repeat bg-cover">
        <div className="lg:container px-4 lg:px-0 lg:pt-0 lg:flex lg:justify-between lg:items-center ">
          <div className="lg:max-w-[588px] relative z-[1]">
            <div className=" grounded-radiants w-max px-4 py-1 text-brand-secondary text-sm bg-[#F6F6FD]">
              <div className="">{lang?.selling}</div>
            </div>
            <h1 className="text-[24px] font-bold lg:text-[48px] mt-2">
              {lang?.title}
            </h1>
            <div className="text-[14px] lg:text-base mt-4">
              {lang?.subTitle}
            </div>
          </div>
          <div className="mt-4 relative lg:top-[90px] h-[350px] lg:h-full lg:w-full lg:max-w-[486px]">
            <div
              className={clsx(
                "absolute-center  w-fit transition",
                "hover:bg-gray-1 rounded-full cursor-pointer"
              )}
              onClick={() => display()}
            >
              <EzImage
                src={"/uploads/Frame_35_cdf704d0c4.png"}
                width={84}
                height={84}
                alt="uploads/Frame_35_cdf704d0c4"
              />
            </div>
            <EzImage
              src={"/uploads/image_816_e2b5899dde.jpg"}
              alt="thumbnail_image_816_1a78247627"
              width={486}
              height={520}
              quality={100}
              className="rounded-[20px] w-full h-auto lg:max-w-[486px] lg:max-h-[520px] max-h-[383px] max-w-[358px] mx-auto lg:mx-0 "
            />
          </div>
        </div>
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
            videoId="GJJtVp88fKk"
            opts={opts}
            iframeClassName="w-[95vw] h-[35vh] md:w-[44.8vw] md:h-[50vh]"
            onReady={onVideoReadyHandler}
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
