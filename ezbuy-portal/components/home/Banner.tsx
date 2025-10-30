"use client";
import clsx from "clsx";
import Link from "next/link";
import { useState } from "react";
import YouTube, { YouTubeEvent, YouTubeProps } from "react-youtube";
import playBtn from "@/public/images/icons/playBtn.png";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { useParams } from "next/navigation";

var cElement: YouTubeEvent = { data: null, target: null };
const Banner = ({ lang }: { lang: any }) => {
  const { banner } = lang.home;
  const params = useParams();

  //#region video controll

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

  //#endregion

  return (
    <section className=" overflow-hidden">
      <div className="relative text-white h-[1003px]">
        <div className="container relative lg:top-[25%] px-4 pt-[80px] md:pt-0">
          <div>
            <h1 className="font-black text-[28px] lg:text-[44px] uppercase pb-4 md:w-2/3">
              <span className="lg:block">{banner.heading.h1}</span>
              <span>{banner.heading.h2}</span>
            </h1>
            <div className="lg:w-[50%]">
              <p className={clsx(
                "opacity-80 lg:w-[85%] text-sm",
                banner.subHeading[5] != "" ? "pb-2" : "pb-10"
              )}>
                {banner.subHeading[0]}
                <span className="font-bold">{banner.subHeading[1]}</span>
                {banner.subHeading[2]}
                <span className="font-bold">{banner.subHeading[3]}</span>
                {banner.subHeading[4]}
              </p>
              {banner.subHeading[5] != "" && (
                <p className="opacity-80 lg:w-[85%] text-sm pb-10">
                  {banner.subHeading[5]}
                </p>
              )}
              <div className="grid grid-cols-2 gap-6 pb-10">
                <div>
                  <p className="font-bold text-xl lg:text-2xl">45.000+</p>
                  <p className="opacity-80 text-sm">{banner.newUsers}</p>
                </div>
                <div>
                  <p className="font-bold text-xl lg:text-2xl">417.000+</p>
                  <p className="opacity-80 text-sm">{banner.orders}</p>
                </div>
                <div>
                  <p className="font-bold text-xl lg:text-2xl">19.000+</p>
                  <p className="opacity-80 text-sm">{banner.customerOrders}</p>
                </div>
                <div>
                  <p className="font-bold text-xl lg:text-2xl">300+</p>
                  <p className="opacity-80 text-sm">{banner.tonOfGood}</p>
                </div>
              </div>
              <Link
                href={"/contact-sales"}
                className="bg-brand-secondary text-white text-sm py-[13px] px-4 w-[134px] font-medium"
              >
                {banner.contactSales}{" "}
              </Link>
            </div>
          </div>
        </div>
        <div
          className={clsx(
            "w-full absolute bottom-0 lg:top-0 bg-brand-primary -z-10 h-full",
            "bg-[url('https://strapi-ezbuy.ichiba.net/uploads/oie_ea4c_AB_9b_Rr_Jc_d0bb9c6cba.png')]",
            "md:bg-[url('https://strapi-ezbuy.ichiba.net/uploads/Group_19_744dbf6b84.png')]",
            "bg-cover bg-no-repeat sm:bg-center bg-bottom"
          )}
        ></div>
        <div
          className={clsx(
            "relative md:left-[70%] z-10 left-[45%] w-fit top-[25%] md:top-0 transition",
            "hover:bg-gray-1 rounded-full cursor-pointer"
          )}
          onClick={() => display()}
        >
          <Image src={playBtn} alt="Ezbuy" />
        </div>
      </div>
      <div
        id="video-overlay"
        className={clsx(
          " justify-center items-center fixed  h-[100vh]",
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
            videoId={params.lang === "vi" ? "lUsirzqOrp4" : "T_NdoLl-4ms"}
            opts={opts}
            iframeClassName="w-[95vw] h-[35vh] md:w-[44.8vw] md:h-[50vh]"
            onReady={onVideoReadyHandler}
          />
        </div>
      </div>
    </section>
  );
};
export default Banner;
