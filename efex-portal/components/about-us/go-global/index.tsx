import clsx from "clsx";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import ListServices from "./ListServices";
import Link from "next/link";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import YouTube, { YouTubeProps } from "react-youtube";
var cElement: any = null;

const GoGlobal = ({ lang, locale }: { lang: any; locale: string }) => {
  const [overLayVisible, setOverlayVisible] = useState(false);
  const hide = () => {
    setOverlayVisible(false);
    cElement?.target?.stopVideo();
  };
  const display = () => {
    setOverlayVisible(true);
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

  const contents = [
    {
      title: lang.items[0].title,
      safe: lang.items[0].safe,
    },
    {
      title: lang.items[1].title,
      safe: lang.items[1].safe,
    },
    {
      title: lang.items[2].title,
      safe: lang.items[2].safe,
    },
    {
      title: lang.items[3].title,
      safe: lang.items[3].safe,
    },
    {
      title: lang.items[4].title,
      safe: lang.items[4].safe,
    },
  ];

  return (
    <div className="relative py-6 lg:pt-20 lg:pb-15 overflow-hidden">
      <div className="container px-4">
        <h2 className="text-2xl lg:text-[35px] font-bold lg:leading-[48px] mb-4 lg:mb-2 text-center">
          {lang.heading[0]}
          <span className="text-brand-primary">{lang.heading[1]}</span>
        </h2>
        <p className="text-sm lg:text-lg text-center mb-6 lg:mb-15">
          {lang.subHeading[0]}
          <span className="text-brand-primary">{lang.subHeading[1]}</span>
          {lang.subHeading[2]}
          <span className="text-brand-primary">{lang.subHeading[3]}</span>
        </p>
        <ListServices contents={contents} />

        <div className="grid lg:grid-cols-2 gap-6 lg:gap-0 mt-6 lg:mt-10 items-center">
          <div>
            <p className="text-lg lg:text-2xl font-bold uppercase mb-3 lg:mb-6">
              <span className="text-brand-primary">
                {lang.content.title[0]}
              </span>
              {lang.content.title[1]}
              <span className="text-brand-primary">
                {lang.content.title[2]}
              </span>
            </p>
            <p className="text-sm lg:text-lg mb-3 lg:mb-10">
              {lang.content.subTitle}
            </p>
            <Link
              href={
                locale === "en" ? "https://efex.vn/en" : "https://efex.vn/vi"
              }
              className="no-underline text-brand-primary flex items-center gap-1 text-base font-medium"
            >
              {lang.content.textLink}
              <FontAwesomeIcon icon={faArrowRight} width={18} height={18} />
            </Link>
          </div>
          <Image
            src="https://strapi-efex.ichiba.net/uploads/Video_f32f929497.svg"
            width={509}
            height={302}
            alt="EFEX"
            onClick={() => display()}
            className="lg:pl-[78px] mx-auto cursor-pointer hover:scale-105 transition-all ease-in-out duration-300"
          />
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
          <div className="text-right text-white">
            <div className="flex justify-between items-center ">
              <div className="text-white font-bold lg:text-lg">
                {lang?.homePage?.banner?.heading}
              </div>
              <span className="w-fit" onClick={() => hide()}>
                <FontAwesomeIcon
                  icon={faXmark}
                  size="2x"
                  className="ring-transparent ring-2 hover:scale-125 transition duration-300 cursor-pointer"
                />
              </span>
            </div>
          </div>
          <YouTube
            videoId="5onusd_oOQM"
            opts={opts}
            iframeClassName="w-[95vw] h-[35vh] md:w-[44.8vw] md:h-[50vh]"
            onReady={(e: any) => (cElement = e)}
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
};

export default GoGlobal;
