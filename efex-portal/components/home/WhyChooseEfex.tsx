"use client";
import video from "@/public/images/home/whyChooseEfex/video1.webp";
import video2 from "@/public/images/home/whyChooseEfex/video2.webp";
import video3 from "@/public/images/home/whyChooseEfex/video3.webp";
import video4 from "@/public/images/home/whyChooseEfex/video4.webp";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import play from "@/public/images/home/whatIsFulfill/play.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import clsx from "clsx";
import EzImage from "../commons/EzImage";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import YouTube, { YouTubeProps } from "react-youtube";
import { usePathname } from "next/navigation";
import React from "react";

var cElement: any = null;

const WhyChooseEfex = ({ lang }: { lang: any }) => {
  const [overLayVisible, setOverlayVisible] = useState(false);
  const [videoId, setVideoId] = useState("GJJtVp88fKk");
  const [titleVideo, setTitleVideo] = useState("");

  const hide = () => {
    setOverlayVisible(false);
    setVideoId("");
    setTitleVideo("");
    cElement?.target?.stopVideo();
  };
  const display = (videoId: string, title: string) => {
    setVideoId(videoId);
    setOverlayVisible(true);
    setTitleVideo(title);
    cElement?.target?.playVideo();
  };
  const opts: YouTubeProps["opts"] = {
    height: "315",
    width: "560",
    // playerVars: {
    //   // https://developers.google.com/youtube/player_parameters
    //   autoplay: 1,
    // },
  };
  const locale = usePathname().split("/")[1];
  const [isVisible, setVisible] = React.useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 1 / 4 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        observer.unobserve(elementRef.current);
      }
    };
  }, []);
  return (
    <div
      className="container pt-6 px-4 lg:pt-[60px] overflow-hidden"
      ref={elementRef}
    >
      <div
        className={clsx(
          "text-center pb-5 lg:pb-[60px]",
          " transition-all duration-200 delay-200",
          isVisible ? "opacity-100 translate-y-0" : "translate-y-7 opacity-0 "
        )}
      >
        <h2 className="text-2xl lg:text-4xl font-bold">
          {lang?.homePage?.whyChoose?.whyChoose}{" "}
          <span className="text-contact ">
            {lang?.homePage?.whyChoose?.efex}
          </span>
          {lang?.homePage?.whyChoose?.endtitle}
        </h2>
        <div className="text-sm lg:text-lg">
          {lang?.homePage?.whyChoose?.content}
        </div>
      </div>
      <div
        className={clsx(
          "p-4 lg:px-5 shadow-[0px_0px_20px_0px_rgba(0,_0,_0,_0.11);] rounded-[20px] lg:flex lg:items-center hover:translate-y-[-5px] hover:shadow-[0px_4px_12px_rgba(0,_0,_0,_0.24)] hover:transition-all hover:duration-300 hover:ease-linear",
          " transition-all duration-500 delay-200",
          isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-20"
        )}
      >
        <EzImage
          quality={100}
          width={368}
          height={244}
          src={"/uploads/Frame_16446_5d96be724c.png"}
          alt="Customs"
          className="lg:h-[248px] lg:w-auto lg:mr-10 cursor-pointer hover:opacity-95"
          onClick={() =>
            display(
              locale === "en" ? "QVsY77JVb9I" : "5onusd_oOQM",
              lang?.homePage?.whyChoose?.scale?.title
            )
          }
        />
        <div>
          <div className="text-sm text-[#1D39C4] my-4 lg:my-2">
            <span className="px-2 py-1 bg-[#E6F3FF] rounded-[4px] mr-3 font-medium">
              Video
            </span>
            <span>20s</span>
          </div>
          <div className="text-lg lg:text-xl font-bold">
            {lang?.homePage?.whyChoose?.scale?.title}
          </div>
          <div className="mt-2 text-sm lg:text-[16px] max-w-[668px]">
            {lang?.homePage?.whyChoose?.scale?.content}
          </div>
        </div>
      </div>
      <div
        className={clsx(
          "mt-[48px] px-4  bg-[#F2F4F8] rounded-[20px] relative top-[16px] lg:top-[45px]",
          " transition-all duration-400 delay-300",
          isVisible ? "opacity-100" : "opacity-0 "
        )}
      >
        <div className="relative bottom-[35px] lg:bottom-[46px]">
          <div className="lg:flex lg:justify-between lg:items-center lg:px-[62px]">
            <div className="hidden lg:block max-w-[420px]">
              <div className="text-xl font-bold mt-4">
                {lang?.homePage?.whyChoose?.streamline?.title}
              </div>
              <div className=" mt-2">
                {lang?.homePage?.whyChoose?.streamline?.content}
              </div>
            </div>
            <Image
              src={video2}
              alt="Customs"
              quality={100}
              className="lg:h-[364px] lg:max-h-[100%] rounded-[12px] lg:rounded-[20px] cursor-pointer hover:opacity-95 hover:translate-y-[-5px] hover:shadow-[0px_4px_12px_rgba(0,_0,_0,_0.24)] hover:transition-all hover:duration-300 hover:ease-linear"
              onClick={() =>
                display(
                  locale === "en" ? "fkH6H5NBTjY" : "nX7Q7KpeLwQ",
                  lang?.homePage?.whyChoose?.streamline?.title
                )
              }
            />
            <div className="lg:hidden">
              <div className="text-lg font-bold mt-4">
                {lang?.homePage?.whyChoose?.streamline?.title}
              </div>
              <div className="text-sm mt-2">
                {lang?.homePage?.whyChoose?.streamline?.content}
              </div>
            </div>
          </div>
          <div
            className={clsx(
              "lg:flex lg:justify-between lg:px-[86px] lg:my-[60px]"
            )}
          >
            <div className="p-4 lg:p-5 rounded-[20px] lg:max-w-[467px] bg-white mt-5 hover:translate-y-[-5px] hover:shadow-[0px_4px_12px_rgba(0,_0,_0,_0.24)] hover:transition-all hover:duration-300 hover:ease-linear">
              <div className="relative">
                <Image
                  src={video3}
                  alt="supply"
                  quality={100}
                  className="lg:h-[248px] rounded-[12px] cursor-pointer hover:opacity-95 "
                  onClick={() =>
                    display(
                      locale === "vi" ? "sBCC7NtbWhc" : "pMFo-GfJSu0",
                      lang?.homePage?.whyChoose?.speed?.title
                    )
                  }
                />
                <div className="absolute right-[10px] bottom-[10px]">
                  <div
                    className="cursor-pointer rounded-[20px] flex text-sm lg:text-base lg:px-5 px-2 py-1 lg:py-2  hover:opacity-95 text-[#AF0000] bg-[rgba(230,_243,_255,_0.7)]"
                    onClick={() =>
                      display(
                        locale === "vi" ? "sBCC7NtbWhc" : "pMFo-GfJSu0",
                        lang?.homePage?.whyChoose?.speed?.title
                      )
                    }
                  >
                    <Image src={play} alt="Customs" />
                    <div className="ml-3 font-medium">
                      {lang?.homePage?.watch}
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-5 text-lg lg:text-xl font-bold">
                {lang?.homePage?.whyChoose?.speed?.title}
              </div>
              <div className="mt-2 text-sm lg:text-base">
                {lang?.homePage?.whyChoose?.speed?.content}
              </div>
            </div>
            <div className="p-4 lg:p-5 rounded-[20px] lg:max-w-[467px] bg-white mt-5 hover:translate-y-[-5px] hover:shadow-[0px_4px_12px_rgba(0,_0,_0,_0.24)] hover:transition-all hover:duration-300 hover:ease-linear">
              <div className="relative">
                <Image
                  quality={100}
                  src={video4}
                  alt="supply"
                  className="lg:h-[248px] rounded-[12px] cursor-pointer hover:opacity-95"
                  onClick={() =>
                    display(
                      locale === "en" ? "livRERkh1Y4" : "W1OaMmE9B98",
                      lang?.homePage?.whyChoose?.order?.title
                    )
                  }
                />
                <div className="absolute right-[10px] bottom-[10px]">
                  <div
                    className="cursor-pointer rounded-[20px] flex text-sm lg:text-base lg:px-5 px-2 py-1 lg:py-2  hover:opacity-95 text-[#AF0000] bg-[rgba(230,_243,_255,_0.7)]"
                    onClick={() =>
                      display(
                        "livRERkh1Y4",
                        lang?.homePage?.whyChoose?.order?.title
                      )
                    }
                  >
                    <Image src={play} alt="Customs" quality={100} />
                    <div className="ml-3 font-medium">
                      {lang?.homePage?.watch}
                    </div>
                  </div>
                </div>
              </div>
              <div className="lg:flex mt-5 justify-between items-center">
                <div className=" text-lg lg:text-xl font-bold">
                  {lang?.homePage?.whyChoose?.order?.title}
                </div>
                <div className="bg-[#D9F7BE] text-sm  px-5 rounded-[4px] text-center w-max my-2 lg:py-1 lg:my-1  text-[#389E0D] lg:min-w-[100px] lg:h-max ">
                  {lang?.homePage?.whyChoose?.order?.free}
                </div>
              </div>
              <div className=" text-sm lg:text-base">
                {lang?.homePage?.whyChoose?.order?.content}
              </div>
            </div>
          </div>
        </div>
        <div
          className={clsx(
            " justify-center items-center fixed  h-[100vh]",
            "bg-[rgba(_0,_0,_0,_0.5)] z-50 top-0 right-0 left-0 bottom-0",
            overLayVisible ? "block" : "hidden"
          )}
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="text-right text-white ">
              <div className="flex justify-between items-center ">
                <div className="text-white font-bold lg:text-lg">
                  {titleVideo}
                </div>
                <span className=" w-fit " onClick={() => hide()}>
                  <FontAwesomeIcon
                    icon={faXmark}
                    size="2x"
                    className="ring-transparent ring-2 hover:scale-125 transition duration-300 cursor-pointer"
                  />
                </span>
              </div>
            </div>
            <YouTube
              videoId={videoId}
              opts={opts}
              iframeClassName="w-[95vw] h-[35vh] md:w-[44.8vw] md:h-[50vh]"
              onReady={(e: any) => (cElement = e)}
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseEfex;
