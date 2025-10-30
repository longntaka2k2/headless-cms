"use client";
import clsx from "clsx";
import YouTube, { YouTubeProps } from "react-youtube";
import playBtn from "@/public/images/icons/playBtn.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import EzImage from "../commons/EzImage";
import CountUp from "react-countup";

var cElement: any = null;

const Banner = ({ lang, locale }: any) => {
  const [overLayVisible, setOverlayVisible] = useState(false);
  const [videoTitle, setVideoTitle] = useState("");
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
    // setVideoTitle(element?.target?.playerInfo?.videoData?.title);
  };
  const opts: YouTubeProps["opts"] = {
    height: "315",
    width: "560",
  };
  const { banner } = lang.services.xBorderEcom;
  return (
    <section className={clsx("pt-16 lg:pt-24", "container")}>
      <div className="flex flex-col items-center gap-6">
        <h2 className="uppercase font-black text-2xl lg:text-4xl text-brand-primary text-center">
          <span className="block">{banner?.heading}</span>
        </h2>
        <div
          className={clsx(
            "transition-all duration-200",
            "flex justify-center px-4"
          )}
        >
          <p className="text-sm lg:text-base lg:w-[50%] text-center">
            {banner?.subHeading}
          </p>
        </div>

        <div className="flex items-center lg:flex-col flex-col-reverse w-full">
          <div
            className={clsx(
              "relative z-10 ",
              "shadow-6 flex bg-white",
              "mt-[-10%] lg:mt-0 lg:mb-[-3%] mx-4 lg:px-12 lg:py-6 w-[90%]"
            )}
          >
            <div
              className={clsx(
                "grid grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-4 justify-between w-full",
                "px-4 py-6 lg:px-12"
              )}
            >
              <div className="flex flex-col lg:items-center col-span-1">
                <CountUp
                  className="font-bold text-lg lg:text-2xl"
                  duration={2}
                  start={0}
                  end={10}
                  suffix="+"
                />
                <div className="text-sm lg:text-base lg:text-center">
                  {lang.services.xBorderEcom.banner.items[0]}
                </div>
              </div>
              <div className="flex flex-col lg:items-center col-span-1">
                <CountUp
                  className="font-bold text-lg lg:text-2xl"
                  duration={2}
                  start={0}
                  end={220}
                  suffix="+"
                />
                <div className="text-sm lg:text-base lg:text-center">
                  {lang.services.xBorderEcom.banner.items[1]}
                </div>
              </div>
              <div className="flex flex-col lg:items-center  col-span-1">
                <CountUp
                  className="font-bold text-lg lg:text-2xl"
                  duration={2}
                  start={0}
                  end={25000}
                  suffix="+"
                />
                <div className="text-sm lg:text-base lg:text-center">
                  {lang.services.xBorderEcom.banner.items[2]}
                </div>
              </div>
              <div className="flex flex-col lg:items-center col-span-1">
                <CountUp
                  className="font-bold text-lg lg:text-2xl"
                  duration={2}
                  start={0}
                  end={242000}
                  suffix="+"
                />
                <div className="text-sm lg:text-base lg:text-center">
                  {lang.services.xBorderEcom.banner.items[3]}
                </div>
              </div>
            </div>
          </div>
          <div className="relative w-full">
            <div>
              <div
                className={clsx(
                  "absolute-center z-10 w-fit transition",
                  "hover:bg-gray-1 rounded-full cursor-pointer"
                )}
                onClick={() => display()}
              >
                <EzImage src={playBtn} alt="Icon Play" />
              </div>
              <EzImage
                src={"/uploads/banner_Video_Thumb_c673619fa8.png"}
                alt="Ezbuy"
                width={1176}
                height={400}
                quality={100}
                className="min-h-[50vw] lg:min-h-0 w-full object-center object-cover"
              />
            </div>
            {/* video-overlay */}
            <div
              id="video-overlay"
              className={clsx(
                "justify-center items-center fixed h-[100vh]",
                "bg-[rgba(_0,_0,_0,_0.5)] z-50 top-0 right-0 left-0 bottom-0",
                overLayVisible ? "block" : "hidden"
              )}
            >
              <div className="absolute-center text-white cursor-pointer">
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
                  videoId={locale === "vi" ? "e6Rj-_Qebj4" : "3WUcpVoO-Ws"}
                  opts={opts}
                  iframeClassName="w-[95vw] h-[35vh] md:w-[45vw] md:h-[50vh]"
                  onReady={onVideoReadyHandler}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Banner;
