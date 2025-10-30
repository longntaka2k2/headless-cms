"use client";
import { Cta } from "@/components/commons/Cta";
import EzImage from "@/components/commons/EzImage";
import { faArrowRight, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import { useState } from "react";
import YouTube, { YouTubeEvent, YouTubeProps } from "react-youtube";

var cElement: YouTubeEvent = { data: null, target: null };

export const Assist = ({ lang }: { lang: any }) => {
  const [activeTab, setActiveTab] = useState(0);
  const content = [
    {
      icon: (
        <EzImage
          src={"/uploads/ezbuy_d54b781baa.png"}
          alt="logo"
          width={124}
          height={40}
          className="w-[73px] h-6 lg:w-[124px] lg:h-[40px]"
        />
      ),
      ...lang.assist.contents[0],
    },
    {
      icon: (
        <EzImage
          src={"/uploads/ichiba_Jp_12a482232c.png"}
          alt="logo"
          width={158}
          height={40}
          className="w-[88px] h-6 lg:w-[158px] lg:h-[40px]"
        />
      ),
      ...lang.assist.contents[1],
    },
    {
      icon: (
        <EzImage
          src={"/uploads/next247_c7fd3456bc.png"}
          alt="logo"
          width={78}
          height={40}
          className="w-[57px] h-6 lg:w-[78px] lg:h-[40px]"
        />
      ),
      ...lang.assist.contents[2],
    },
    {
      icon: (
        <EzImage
          src={"/uploads/janbox_ecfad5ba1b.png"}
          alt="logo"
          width={148}
          height={40}
          className="w-[87px] h-6 lg:w-[148px] lg:h-[40px]"
        />
      ),
      ...lang.assist.contents[3],
    },
  ];

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
  const videoId = "GJJtVp88fKk";
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

  const handleClick = (index: number) => {
    setActiveTab(index);
  };
  const locale = usePathname().slice(1, 3);

  return (
    <div className="relative container overflow-hidden mt-10 lg:mt-16">
      <h3 className="text-xl font-bold text-center lg:text-3xl lg:leading-[38px]">
        <p>
          {lang.assist.title.first}{" "}
          <span className="text-brand-primary">{lang.assist.title.second}</span>
        </p>
      </h3>
      <div className="px-4 lg:px-0"></div>

      <ul className="mt-5 flex overflow-x-auto no-scrollbar lg:mt-10">
        {content.map((item, index) => {
          return (
            <li
              key={index}
              onClick={() => handleClick(index)}
              className="relative cursor-pointer flex-1"
            >
              <div className="min-w-[122px] flex justify-center">
                {item.icon}
              </div>
              <div className="mt-[10px] bg-ic-white-6 w-full h-[2px]" />
              <div
                className={clsx(
                  "absolute bottom-0 mt-2 bg-gradient-red-1 w-full rounded-lg h-1 transition-[left] duration-300"
                )}
                style={{
                  left: `${100 * (activeTab - index)}%`,
                }}
              />
            </li>
          );
        })}
      </ul>

      <div className="px-4 flex mt-5 lg:px-0 lg:mt-10">
        <div className="w-full flex flex-col gap-5 lg:flex-row lg:gap-15">
          <div className="flex flex-col gap-4 lg:flex-1 lg:self-center">
            <p className="text-sm lg:text-lg">
              {content[activeTab].description}
            </p>
            <div className="flex items-center gap-4">
              <div className="rounded-full flex justify-center items-center overflow-hidden">
                <div className="overflow-hidden h-10 w-10 lg:h-15 lg:w-15">
                  <EzImage
                    src={"/uploads/Ellipse_521_d8a1701417.png"}
                    alt="avatar"
                    width={60}
                    height={60}
                  />
                </div>
              </div>
              <div className="flex flex-col justify-between">
                <p className="text-lg font-bold lg:text-xl">
                  {content[activeTab].name}
                </p>
                <p className="text-sm text-ic-ink-5">
                  {content[activeTab].bio}
                </p>
              </div>
            </div>
          </div>
          <div
            className={clsx(
              "relative ",
              "bg-ic-white-6 rounded-lg",
              "p-3  max-w-[430px] max-h-[296px] lg:max-w-[582px]  lg:p-5 lg:max-h-80 lg:rounded-2xl lg:flex-1",
              "shadow-[0_0px_12.30241px_0px_rgba(0,0,0,0.11)] lg:shadow-[0_0_20px_0_rgba(0,0,0,0.11)]"
            )}
          >
            <EzImage
              src={"/uploads/Mr_Jarosima_3403f3a3a3.png"}
              alt="avatar"
              width={542}
              height={280}
              className="w-full h-full rounded-[4px] lg:rounded-xl"
            />
            <EzImage
              src={"/uploads/play_btn_2d68366b1c.png"}
              alt="avatar"
              width={104}
              height={104}
              className="absolute absolute-center w-[72px] h-[72px] lg:w-[104px] lg:h-[104px] cursor-pointer"
              onClick={display}
            />
          </div>
          <div
            id="video-overlay"
            className={clsx(
              "flex justify-center items-center fixed h-[100vh]",
              "bg-[rgba(0,0,0,.5)] z-50 top-0 right-0 left-0 bottom-0",
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
                videoId={videoId}
                opts={opts}
                iframeClassName="w-[95vw] h-[35vh] md:w-[44.8vw] md:h-[50vh]"
                onReady={onVideoReadyHandler}
              />
            </div>
          </div>
        </div>
      </div>

      <Cta
        href={`/${locale}/blog`}
        target="_blank"
        className="mx-auto flex items-center gap-2 mt-6"
      >
        <p>{lang.assist.viewMore}</p>
        <div className="w-6 h-6 flex justify-center items-center">
          <FontAwesomeIcon icon={faArrowRight} size="lg" />
        </div>
      </Cta>
    </div>
  );
};
