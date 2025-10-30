"use client";
import video from "@/public/images/home/save/video5.webp";
import video6 from "@/public/images/home/save/video6.webp";
import video7 from "@/public/images/home/save/video7.webp";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import clsx from "clsx";

import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import YouTube, { YouTubeProps } from "react-youtube";
var cElement: any = null;

const Save = ({ lang }: { lang: any }) => {
  const [overLayVisible, setOverlayVisible] = useState(false);
  const [videoId, setVideoId] = useState("");
  const [titleVideo, setTitleVideo] = useState("");

  const hide = () => {
    setVideoId("");
    setTitleVideo("");
    setOverlayVisible(false);
    cElement?.target?.stopVideo();
  };
  const display = (videoId: string, title: string) => {
    setVideoId(videoId);
    setTitleVideo(title);
    setOverlayVisible(true);
    cElement?.target?.playVideo();
  };
  const locale = usePathname().split("/")[1];

  const opts: YouTubeProps["opts"] = {
    height: "315",
    width: "560",
    // playerVars: {
    //   // https://developers.google.com/youtube/player_parameters
    //   autoplay: 1,
    // },
  };
  const [isVisible, setVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(entry.target);
        }
      });
    });

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
    <div className="mt-6 lg:mt-10" ref={elementRef}>
      <div
        className={clsx(
          " justify-center items-center fixed  h-[100vh] overflow-hidden",
          "bg-[rgba(_0,_0,_0,_0.5)] z-50 top-0 right-0 left-0 bottom-0",
          overLayVisible ? "block" : "hidden"
        )}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="text-right text-white ">
            <div className="flex justify-between items-center ">
              <div className={clsx("text-white font-bold lg:text-lg")}>
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

      <div className="bg-[url('https://strapi-efex.ichiba.net/uploads/Frame_16464_0dac56080d.svg')] pt-[32px] lg:pt-[105px] px-4 text-brand-secondary overflow-hidden bg-cover bg-center bg-no-repeat">
        <div className="container">
          <div
            className={clsx(
              " transition-all duration-300 delay-300",
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            )}
          >
            <div className="flex items-end lg:items-center justify-center font-bold">
              <div>
                <div className="text-lg lg:text-2xl leading-none">
                  {lang?.homePage?.whyChoose?.save?.save}
                </div>
                <div className="text-[10px] lg:text-xs  text-end font-medium">
                  {lang?.homePage?.whyChoose?.save?.upto}
                </div>
              </div>
              <div className="text-[#418DFF] lg:text-[48px] text-[28px] leading-[38px] ml-2 mr-1">
                70%
              </div>
              <div className="text-lg lg:text-2xl">
                {lang?.homePage?.whyChoose?.save?.title}
              </div>
            </div>
            <div className="mt-4 opacity-80 text-sm text-center lg:text-base lg:max-w-[800px] lg:mx-auto">
              {lang?.homePage?.whyChoose?.save?.content}
            </div>
          </div>
          <div
            className={clsx(
              "mt-3 lg:mt-[60px] ",
              " transition-all duration-400 delay-200",
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            )}
          >
            <Image
              src={video}
              alt="EFEX"
              className="rounded-[12px] lg:rounded-[20px] relative top-[20px] lg:mx-auto cursor-pointer hover:opacity-95 hover:translate-y-[-5px] hover:shadow-[0px_4px_12px_rgba(0,_0,_0,_0.24)] hover:transition-all hover:duration-300 hover:ease-linear"
              onClick={() =>
                display(
                  locale === "en" ? "DaQoGCoLG9g" : "uV85GA7H0bY",
                  lang?.homePage?.whyChoose?.save?.save +
                    " " +
                    lang?.homePage?.whyChoose?.save?.title +
                    " " +
                    lang?.homePage?.whyChoose?.save?.upto +
                    " " +
                    "70%"
                )
              }
            />
          </div>
        </div>
      </div>
      <div className="container pt-[40px] pb-5 px-4 lg:px-10 lg:pt-[100px] lg:pb-[60px]">
        <div className="bg-[#F6F7F9] rounded-[16px] px-4 lg:pl-10 pb-6 lg:flex max-w-[1100px] mx-auto lg:pb-0 relative professional">
          <Image
            src={video6}
            alt="EFEX"
            quality={100}
            className="w-[50%] rounded-[12px] relative bottom-4 lg:bottom-10 lg:w-[100%] lg:max-h-[389px] cursor-pointer hover:opacity-95"
            onClick={() =>
              display(
                locale === "en" ? "GJJtVp88fKk" : "32-GE7_rx-w",
                lang?.homePage?.whyChoose?.professional?.title
              )
            }
          />
          <div
            className={clsx(
              "lg:mx-[8%] my-auto",
              " transition-all duration-400 delay-200",
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            )}
          >
            <div className="text-lg lg:text-xl font-bold">
              {lang?.homePage?.whyChoose?.professional?.title}
            </div>
            <div className="text-sm lg:text-base mt-2">
              {lang?.homePage?.whyChoose?.professional?.content}
            </div>
          </div>
        </div>

        <div className="border-[2px] lg:border-0 border-[#AF0000] rounded-[16px] px-4 pb-6 mt-[43px] lg:p-0 lg:flex lg:max-w-[846px] mx-auto ">
          <Image
            src={video7}
            alt="Customs"
            quality={100}
            className="w-[100%] lg:max-w-[352px] lg:h-[350px] max-w-[200px] rounded-[12px] relative lg:bottom-[0] bottom-4 z-1 cursor-pointer hover:opacity-95"
            onClick={() =>
              display(
                locale === "en" ? "QVsY77JVb9I" : "5onusd_oOQM",
                lang?.homePage?.whyChoose?.customs?.title
              )
            }
          />
          <div
            className={clsx(
              "lg:border-[2px] lg:border-l-0 lg:border-[#AF0000] lg:h-max lg:my-auto lg:p-10 lg:rounded-r-[16px]",
              " transition-all duration-400 delay-200",
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            )}
          >
            <div className="text-lg lg:text-xl font-bold">
              {lang?.homePage?.whyChoose?.customs?.title}
            </div>
            <div className="text-sm lg:text-base mt-2">
              {lang?.homePage?.whyChoose?.customs?.content}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Save;
