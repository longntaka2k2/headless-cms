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

const HowWorks = ({ lang }: { lang: any }) => {
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
    <div ref={elementRef}>
      <div className="container px-4 lg:px-[50px] lg:mb-[76px] mb-[28px]">
        <div
          className={clsx(
            "mt-[48px] shadow-[0px_0px_20px_0px_rgba(0,_0,_0,_0.11);] pt-3 pb-6 px-5 lg:py-[60px] lg:px-[80px] lg:rounded-2xl rounded-xl",
            " transition-all duration-400 delay-700",
            isVisible ? "opacity-100 scale-100" : "opacity-0 scale-0"
          )}
        >
          <div className="flex lg:block justify-between items-end lg:relative">
            <div className="">
              <h2 className="text-[#333] text-2xl font-bold lg:text-4xl lg:leading-[48px]">
                {lang?.homePage?.howEfex?.title}
              </h2>
            </div>
            <EzImage
              src={"/uploads/Rectangle_6380_30157ed7c6.png"}
              alt="Customs"
              width={256}
              height={151}
              quality={100}
              className="lg:absolute lg:w-[256px] lg:h-[151px] relative left-[8px] lg:left-[auto] lg:right-[-20px] lg:top-[-20px] lg:rounded-xl rounded w-[84px] h-[45px]"
            />
          </div>
          <div className="lg:max-w-[555px] max-w-[245px] lg:text-lg text-sm text-[#666] font-normal ">
            {lang?.homePage?.howEfex?.content}
          </div>
          <div className="mt-4 relative w-max">
            <div
              className="cursor-pointer rounded-[20px] flex px-5 py-2 gradient-border grounded-radiants hover:opacity-95 hover:text-white text-[#AF0000]"
              onClick={() => display()}
            >
              <Image src={play} alt="Customs" quality={100} />
              <div className="ml-3 font-medium">{lang?.homePage?.watch}</div>
            </div>
          </div>
          <div>
            {step.map((value, index) => (
              <div className="flex mt-4 lg:mt-8" key={index}>
                <div className="h-[24px] text-lg font-bold mr-4 lg:mr-8">
                  <span>{lang?.homePage?.howEfex?.step}&nbsp;</span>
                  <span>{index + 1}:</span>
                </div>
                <div className="">
                  <div className="text-lg lg:text-xl font-bold">
                    {value.title}
                  </div>
                  <div className="text-sm lg:text-[16px]">
                    {value.content[0]}
                    <span className="underline">{value.content[1]}</span>
                    {value.content[2]}
                    <span className="underline">{value.content[3]}</span>
                  </div>
                </div>
              </div>
            ))}
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
            videoId={locale === "en" ? "GJJtVp88fKk" : "32-GE7_rx-w"}
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

export default HowWorks;
