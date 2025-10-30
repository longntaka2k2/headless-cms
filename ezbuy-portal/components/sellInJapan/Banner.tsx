"use client";
import clsx from "clsx";
import YouTube, { YouTubeProps } from "react-youtube";
import playBtn from "@/public/images/icons/playBtn.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import EzImage from "../commons/EzImage";

var cElement: any = null;

const Banner = ({ lang, locale }: any) => {
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
  const { heading, subHeading, description } = lang.services.sellInJapan.banner;
  const [overLayVisible, setOverlayVisible] = useState(false);
  const [videoTitle, setVideoTitle] = useState("");

  return (
    <section className="pt-14 container">
      <div className="px-4 lg:px-0 flex flex-col gap-6 lg:gap-10">
        <h1 className="text-2xl lg:text-4xl font-black uppercase">{heading}</h1>
        <div className="h-2 bg-black" />
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-[124] justify-between">
          <p className="font-bold text-lg lg:text-2xl lg:leading-9 leading-27 flex-1">
            {subHeading}
          </p>
          <p className="leading-6 flex-1">{description}</p>
        </div>
      </div>
      <div className="flex items-center lg:flex-col flex-col-reverse w-full mt-10">
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
              src={"/uploads/Rectangle_6558_2a7c165210.png"}
              alt="Image"
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
                videoId={locale === "vi" ? "lUsirzqOrp4" : "0zN1NO4x7-4"}
                opts={opts}
                iframeClassName="w-[95vw] h-[35vh] md:w-[45vw] md:h-[50vh]"
                onReady={onVideoReadyHandler}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Banner;
