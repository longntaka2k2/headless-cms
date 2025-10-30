"use client";
import human from "@/public/images/home/bestToEnd/human.svg";
import year from "@/public/images/home/bestToEnd/year.svg";
import hidden from "@/public/images/home/bestToEnd/hidden.svg";
import desktop from "@/public/images/home/bestToEnd/desktop.webp";
import bestDesktop from "@/public/images/home/bestToEnd/bestDesktop.webp";
import Image from "next/image";
import Link from "next/link";
import YouTube, { YouTubeProps } from "react-youtube";
import clsx from "clsx";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { usePathname } from "next/navigation";
var cElement: any = null;

const BestEnd = ({ lang }: { lang: any }) => {
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
  const locale = usePathname().split("/")[1];

  return (
    <div>
      <div
        className="py-6 px-4 lg:py-[80px] bg-bottom"
        style={{
          backgroundImage: `url(${desktop.src})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="container relative z-1 grid lg:grid-cols-12 gap-6">
          <div className="my-auto lg:col-span-7">
            <h1 className="text-2xl lg:text-[42px] lg:leading-10 text-6 font-bold text-[#333]">
              {lang?.homePage?.banner?.heading?.[0]}
              <span className="text-[#AF0000]">
                {lang?.homePage?.banner?.heading?.[1]}
              </span>
              {lang?.homePage?.banner?.heading?.[2]}
            </h1>
            <div
              className={clsx(
                "bg-[linear-gradient(89deg,_#00194F_0%,_#AF0000_84.37%)] text-white",
                "mt-3 lg:mt-8 w-full sm:w-max rounded-lg py-2 px-4 font-bold overflow-hidden"
              )}
            >
              {lang?.homePage?.banner?.label}
            </div>
            <div className="mt-3 lg:mt-8 list-disc flex flex-col xl:gap-2">
              {lang?.homePage?.banner?.contents?.map((x: any, idx: number) => (
                <li key={idx} className="text-sm xl:text-base">
                  {x}
                </li>
              ))}
            </div>
            <div className="mt-6 lg:mt-10 text-sm">
              <Link
                href={`/${locale}/contact-sales`}
                target="_blank"
                className="block border-[2px] border-[#AF0000] bg-[#AF0000] text-[#fff] rounded-lg w-[200px] py-3 text-center self-center lg:mr-6 hover:no-underline hover:bg-[#A30505]"
              >
                {lang?.homePage?.banner?.quote}
              </Link>
            </div>
          </div>
          <div className="relative lg:col-span-5 hover:scale-105  hover:transition-all hover:duration-300 hover:ease-linear w-full">
            <div className="border border-[#959DB9] font-medium lg:font-bold leading-5 px-4 py-3 rounded-lg text-[11px] lg:text-sm w-max absolute bottom-10 left-[-10px] bg-[#F2F4F8]">
              {lang?.homePage?.banner?.just}
            </div>
            <Image
              src={bestDesktop}
              alt="bestDesktop"
              width={446}
              height={559}
              className="lg:float-right rounded-lg mx-auto cursor-pointer"
              onClick={() => display()}
            />
          </div>
        </div>
      </div>
      <div className="py-6 lg:flex justify-between container">
        <div className="text-center mb-4">
          <Image
            src={year}
            alt={"bestDesktop"}
            quality={100}
            className="mx-auto lg:h-[100px] w-auto"
          />
          <div className="mb-2 font-bold lg:text-2xl text-lg lg:mt-10 mt-3">
            {lang?.homePage?.banner?.yearOf?.title}
          </div>
          <div className="max-w-[323px] lg:text-base text-sm mx-auto">
            {lang?.homePage?.banner?.yearOf?.content}
          </div>
        </div>
        <div className="text-center mb-4">
          <Image
            src={human}
            alt={"bestDesktop"}
            quality={100}
            className="mx-auto lg:h-[100px] w-auto"
          />
          <div className="mb-2 font-bold lg:text-2xl text-lg lg:mt-10  mt-3">
            {lang?.homePage?.banner?.human?.title}
          </div>
          <div className="max-w-[323px] lg:text-base text-sm mx-auto">
            {lang?.homePage?.banner?.human?.content}
          </div>
        </div>
        <div className="text-center mb-4">
          <Image
            src={hidden}
            alt={"bestDesktop"}
            quality={100}
            className="mx-auto lg:h-[100px] w-auto"
          />
          <div className="mb-2 font-bold lg:text-2xl text-lg lg:mt-10 mt-3">
            {lang?.homePage?.banner?.hidden?.title}
          </div>
          <div className="max-w-[323px] lg:text-base text-sm mx-auto">
            {lang?.homePage?.banner?.hidden?.content}
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
            videoId={locale === "en" ? "DaQoGCoLG9g" : "uV85GA7H0bY"}
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

export default BestEnd;
