"use client";
import img from "@/public/images/home/whatIsFulfill/whatisffmMobile.webp";
import imgdesk from "@/public/images/home/whatIsFulfill/whatIsDesktop.webp";
import fill from "@/public/images/home/whatIsFulfill/fill.svg";
import { faArrowRight, faX, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import play from "@/public/images/home/whatIsFulfill/play.svg";
import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";
import YouTube, { YouTubeProps } from "react-youtube";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import EzImage from "../commons/EzImage";
var cElement: any = null;

const WhatIsFulfillment = ({ lang }: { lang: any }) => {
  const step = [
    {
      title: lang?.homePage?.howEfex?.step1?.title,
      content: [lang?.homePage?.howEfex?.step1?.content],
    },
    {
      title: lang?.homePage?.howEfex?.step2?.title,
      content: [
        lang?.homePage?.howEfex?.step2?.content[0],
        lang?.homePage?.howEfex?.step2?.content[1],
        lang?.homePage?.howEfex?.step2?.content[2],
      ],
    },
    {
      title: lang?.homePage?.howEfex?.step3?.title,
      content: [lang?.homePage?.howEfex?.step3?.content],
    },
    {
      title: lang?.homePage?.howEfex?.step4?.title,
      content: [lang?.homePage?.howEfex?.step4?.content],
    },
  ];

  const [overLayVisible, setOverlayVisible] = useState(false);
  const [videoId, setVideoId] = useState("");
  const [titleVideo, setTitleVideo] = useState("");
  const hide = () => {
    setVideoId("");
    setTitleVideo("");
    setOverlayVisible(false);
    cElement?.target?.stopVideo();
  };
  const display = async (videoId: string, title: string) => {
    await setVideoId(videoId);
    setTitleVideo(title);
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
  const [isVisible, setVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 1 / 3 }
    );

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
    <div ref={elementRef} className="relative lg:mb-20 mb-[28px]">
      <div className="container px-4 lg:px-[50px]">
        <div
          className={clsx(
            " justify-center items-center fixed  h-[100vh]",
            "bg-[rgba(_0,_0,_0,_0.5)] z-50 top-0 right-0 left-0 bottom-0",
            overLayVisible ? "block" : "hidden"
          )}
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="text-right text-white ">
              <div className="flex justify-between items-center ">
                <div className="text-white font-bold lg:text-lg">
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
        <div
          className={clsx(
            "lg:grid lg:grid-cols-12 ",
            " transition-all duration-300 delay-200",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}
        >
          <div className="lg:hidden rounded-xl lg:col-span-5 mx-auto lg:mx-0 cursor-pointer h-full">
            <EzImage
              src={"/uploads/Frame_16368_1_131a74cf2a.png"}
              quality={100}
              height={500}
              width={500}
              alt="Customs"
              className="w-full h-full"
              onClick={() =>
                display(
                  locale === "en" ? "GJJtVp88fKk" : "32-GE7_rx-w",
                  lang?.homePage?.banner?.whatis?.title
                )
              }
            />
          </div>
          <div
            className={clsx(
              "hover:translate-y-[-5px] hover:shadow-[0px_4px_12px_rgba(0,_0,_0,_0.24)] hover:transition-all hover:duration-300 hover:ease-linear",
              "lg:block hidden rounded-xl lg:col-span-5 cursor-pointer hover:opacity-95 h-full"
            )}
          >
            <Image
              src={imgdesk}
              alt="Customs"
              quality={100}
              className="h-full w-full"
              onClick={() =>
                display(
                  locale === "en" ? "GJJtVp88fKk" : "32-GE7_rx-w",
                  lang?.homePage?.banner?.whatis?.title
                )
              }
            />
          </div>
          <div className="lg:col-span-7">
            <div className="lg:ml-10 lg:mt-0 lg:pt-[80px] lg:pb-[40px] lg:px-10 h-[100%] pt-5 pb-5 mt-2  px-4 bg-[#001033] lg:rounded-2xl rounded-xl grid content-between">
              <div className="max-w-[474px]">
                <h2 className="text-xl lg:text-3xl text-white font-bold">
                  {lang?.homePage?.banner?.whatis?.title}
                </h2>
                <div className="lg:mt-6 mt-4 text-[rgba(255,_255,_255,_0.8)] lg:text-lg text-sm">
                  {lang?.homePage?.banner?.whatis?.content}
                </div>
              </div>
              <div className="mt-10 lg:mt-[106px] flex justify-end items-center text-white">
                <Link
                  href={
                    locale === "en"
                      ? "/en/blog/ecommerce-order-fulfillment-guide"
                      : "/vi/blog/fulfillment-la-gi"
                  }
                  className="underline underline-offset-4 mr-3 text-right lg:flex text-sm lg:text-base"
                  target="_blank"
                >
                  <div>{lang?.homePage?.banner?.whatis?.learn}</div>
                  <div className="hidden lg:block">&nbsp;</div>
                  <div>{lang?.homePage?.banner?.whatis?.ecomm}</div>
                </Link>
                <FontAwesomeIcon
                  icon={faArrowRight}
                  width={24}
                  height={24}
                  className="text-white"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Image
        src={
          "https://strapi-efex.ichiba.net/uploads/Group_19150_fadfc0a346.svg"
        }
        width={414}
        height={716}
        alt="Vector"
        className="absolute bottom-[-315px] left-[-50%] lg:left-0 -z-1"
      />
      <Image
        src={
          "https://strapi-efex.ichiba.net/uploads/Group_427318628_c018e57640.svg"
        }
        width={316}
        height={170}
        alt="Vector"
        className="absolute bottom-0 right-[-50%] lg:right-[-40px] -z-1"
      />
    </div>
  );
};

export default WhatIsFulfillment;
