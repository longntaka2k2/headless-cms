import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import clsx from "clsx";
import YouTube, { YouTubeEvent, YouTubeProps } from "react-youtube";

var refPlayer: YouTubeEvent = { data: null, target: null };

interface Props {
  videoId: string;
  refPlayer: YouTubeEvent;
  hide?: () => void;
  opts?: YouTubeProps["opts"];
  iframeClassName?: string;
}
const VideoOverlay = ({
  opts,
  //   refPlayer,
  //   hide,
  videoId,
  iframeClassName,
}: Props) => {
  const hide = () => {
    const ele = document.getElementById("video-overlay");
    ele?.classList.replace("flex", "hidden");
    refPlayer?.target?.stopVideo();
  };
  const display = () => {
    const ele = document.getElementById("video-overlay");
    ele?.classList.replace("hidden", "flex");
    refPlayer?.target?.playVideo();
  };
  return (
    <div
      id="video-overlay"
      className={clsx(
        "hidden justify-center items-center fixed h-[100vh]",
        "bg-[rgba(_0,_0,_0,_0.5)] z-50 top-0 right-0 left-0 bottom-0"
      )}
    >
      <div className="">
        <span
          className=" w-fit relative md:left-[55%]  bottom-3"
          onClick={() => hide && hide()}
        >
          <FontAwesomeIcon
            icon={faXmark}
            size="3x"
            color="white"
            className="ring-transparent ring-2 hover:scale-125 transition duration-300"
          />
        </span>
        <YouTube
          className=""
          videoId={videoId}
          opts={opts}
          iframeClassName={
            iframeClassName ?? "w-[95vw] h-[35vh] md:w-[45vw] md:h-[50vh]"
          }
          onReady={(e) => (refPlayer = e)}
        />
      </div>
    </div>
  );
};
export default VideoOverlay;
