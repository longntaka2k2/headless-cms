"use client";
import YouTube, { YouTubeProps } from "react-youtube";
import clsx from "clsx";
var cElement: any = null;

const poppUpVideo = () => {
  const hide = () => {
    const ele = document.getElementById("video-overlay");
    ele?.classList.replace("flex", "hidden");
    cElement?.target?.stopVideo();
  };
  const display = () => {
    const ele = document.getElementById("video-overlay");
    ele?.classList.replace("hidden", "flex");
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
  return (
    <div
      id="video-overlay"
      onClick={() => hide()}
      className={clsx(
        "hidden justify-center items-center fixed  w-[100vw] h-[100vh]",
        "bg-[rgba(_0,_0,_0,_0.5)] z-50 top-0 right-0 left-0 bottom-0"
      )}
    >
      <YouTube
        className=""
        videoId="aDJxt7gXMOU"
        opts={opts}
        iframeClassName="w-[95vw] h-[35vh] md:w-[70vw] md:h-[70vh]"
        onReady={(e: any) => (cElement = e)}
        loading="lazy"
      />
    </div>
  );
};
export default poppUpVideo;
