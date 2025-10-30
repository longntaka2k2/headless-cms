"use client";
import clsx from "clsx";
import YouTube, { YouTubeProps } from "react-youtube";
import playBtn from "@/public/images/icons/playBtn.png";
import clockIcon from "@/public/images/icons/services/clock.svg";
import shopIcon from "@/public/images/icons/services/shop.svg";
import userIcon from "@/public/images/icons/services/user.svg";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import bgPanel from "@/public/images/icons/services/bgPanel.svg";
import { useState } from "react";
import Link from "next/link";

var cElement: any = null;

const Banner = ({ lang, params }: any) => {
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
  const { warehouseFulfillment } = lang.services;
  return (
    <section className={clsx("pt-16 lg:pt-24", "container px-4")}>
      <div className="flex flex-col items-center gap-6 lg:mb-[-5%]">
        <h2 className="uppercase font-black text-2xl lg:text-4xl text-brand-primary text-center">
          <span className="block">
            {warehouseFulfillment?.banner?.heading[0]}
          </span>{" "}
          <span>{warehouseFulfillment?.banner?.heading[1]}</span>
        </h2>
        <div
          className={clsx("transition-all duration-200", "flex justify-center")}
        >
          <div className="text-sm lg:text-base lg:w-[50%] text-center">
            <p>{warehouseFulfillment?.banner?.subHeading[0]}</p>
            <br />
            <p>{warehouseFulfillment?.banner?.subHeading[1]}</p>
          </div>
        </div>
        <div>
          <div className="relative">
            <div>
              <div
                className={clsx(
                  "absolute-center z-10 w-fit transition",
                  "hover:bg-gray-1 rounded-full cursor-pointer"
                )}
                onClick={() => display()}
              >
                <Image src={playBtn} alt="Icon Play" />
              </div>
              <Image
                src={
                  "https://strapi-ezbuy.ichiba.net/uploads/Rectangle_6526_a2cf45dd5b.png"
                }
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
                  videoId={params.lang === "vi" ? "lUsirzqOrp4" : "T_NdoLl-4ms"}
                  opts={opts}
                  iframeClassName="w-[95vw] h-[35vh] md:w-[45vw] md:h-[50vh]"
                  onReady={onVideoReadyHandler}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <div
          className={clsx(
            "relative",
            "flex flex-col md:flex-row lg:gap-12 gap-8",
            " z-10 bg-white lg:w-[90%]"
          )}
        >
          <div className="flex flex-col lg:gap-12 gap-8 pt-6 lg:p-8 flex-1">
            <div className="flex flex-col gap-6">
              <div className="flex items-start justify-start gap-4">
                <Image
                  src={shopIcon}
                  alt="Icon"
                  width={24}
                  height={24}
                  quality={100}
                />
                <p
                  dangerouslySetInnerHTML={{
                    __html: warehouseFulfillment?.banner?.contents[0],
                  }}
                />
              </div>
              <div className="flex items-start justify-start gap-4">
                <Image
                  src={clockIcon}
                  alt="Icon"
                  width={24}
                  height={24}
                  quality={100}
                />
                <p
                  dangerouslySetInnerHTML={{
                    __html: warehouseFulfillment?.banner?.contents[1],
                  }}
                />
              </div>
              <div className="flex items-start justify-start gap-4">
                <Image
                  src={userIcon}
                  alt="Icon"
                  width={24}
                  height={24}
                  quality={100}
                />
                <p
                  dangerouslySetInnerHTML={{
                    __html: warehouseFulfillment?.banner?.contents[2],
                  }}
                />
              </div>
            </div>
            <Link
              href={`/${params.lang}/contact-sales`}
              className={clsx(
                "bg-brand-secondary text-white",
                "p-4 w-[228px] self-center text-center"
              )}
            >
              {lang?.common?.getStarted}
            </Link>
          </div>
          <Image
            src="https://strapi-ezbuy.ichiba.net/uploads/Frame_19245_4ab45a78e5.png"
            alt="Ezbuy"
            width={476}
            height={467}
            className="flex-1"
          />
          <Image
            alt="Ezbuy"
            src={bgPanel}
            className="w-full absolute z-10 bottom-0 hidden lg:block"
            quality={100}
          />
        </div>
      </div>
    </section>
  );
};
export default Banner;
