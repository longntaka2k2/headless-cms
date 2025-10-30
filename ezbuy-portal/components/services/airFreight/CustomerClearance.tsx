"use client";
import React, { useState } from "react";
import EzImage from "../../commons/EzImage";
import clsx from "clsx";
import YouTube, { YouTubeEvent, YouTubeProps } from "react-youtube";
import playBtn from "@/public/images/icons/playBtn.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

var cElement: YouTubeEvent = { data: null, target: null };

const CustomsClearance = ({
  lang,
  videoId,
  imageUrl,
  className,
}: {
  lang: any;
  videoId?: string;
  imageUrl: string;
  className?: string;
}) => {
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
    <section
      className={clsx(
        " relative container my-14 lg:my-[120px]",
        "h-[720px] bg-cover flex flex-col justify-end"
      )}
      style={{
        background:
          "linear-gradient(180deg, rgba(0, 25, 79, 0.00) 0%, #00194F 100%)," +
          `url('${imageUrl}') center / cover no-repeat `,
      }}
    >
      <div
        className={clsx("container px-4 lg:px-0  flex flex-col justify-end")}
      >
        <div className=" lg:p-20 text-white ">
          {videoId && (
            <div
              className={clsx(
                " w-fit transition",
                "hover:bg-gray-1 rounded-full cursor-pointer mb-6"
              )}
              onClick={() => display()}
            >
              <EzImage src={playBtn} alt="Icon Play" />
            </div>
          )}
          <h2 className="text-2xl lg:text-4xl leading-9 lg:leading-54 font-black uppercase">
            {lang.heading}
          </h2>
          <p className="text-sm lg:text-base">{lang.subHeading}</p>
        </div>

        {videoId && (
          <div
            id={"video-overlay-" + videoId}
            className={clsx(
              "justify-center items-center fixed h-[100vh]",
              "bg-[rgba(_0,_0,_0,_0.5)] z-50 top-0 right-0 left-0 bottom-0",
              overLayVisible ? "block" : "hidden"
            )}
          >
            <div className="absolute-center text-white cursor-pointer">
              <div className="flex flex-row-reverse justify-between text-white items-center">
                <span className=" w-fit " onClick={() => hide()}>
                  <FontAwesomeIcon
                    icon={faXmark}
                    size="3x"
                    className="ring-transparent ring-2 hover:scale-125 transition duration-300"
                  />
                </span>
              </div>
              <YouTube
                videoId={videoId}
                opts={opts}
                iframeClassName="w-[95vw] h-[35vh] md:w-[45vw] md:h-[50vh]"
                onReady={onVideoReadyHandler}
              />
            </div>
          </div>
        )}
      </div>
      <EzImage
        src={"/uploads/overlay_Botton_5ae8d67f5b.svg"}
        alt="Ezbuy"
        className="bottom-0 min-h-[56px] object-cover object-bottom"
        width={1920}
        height={56}
      />
    </section>
  );
};
export default CustomsClearance;
