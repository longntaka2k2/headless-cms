"use client";

import clsx from "clsx";
import Image from "next/image";
import YouTube, { YouTubeEvent, YouTubeProps } from "react-youtube";
import deliveryDocument from "@/public/images/icons/solutions/deliveryDocument.svg";
import deliveryTruck from "@/public/images/icons/solutions/deliveryTruck.svg";
import handDelivery from "@/public/images/icons/solutions/handDelivery.svg";
import monitorDelivery from "@/public/images/icons/solutions/monitorDelivery.svg";
import packageBox from "@/public/images/icons/solutions/packageBox.svg";
import playButton from "@/public/images/icons/solutions/playButton.svg";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { usePathname } from "next/navigation";
import EzImage from "@/components/commons/EzImage";
import Script from "next/script";

var cElement: YouTubeEvent = { data: null, target: null };

const Hero = ({ lang }: { lang: any }) => {
  const deliveryProcess = [
    handDelivery,
    monitorDelivery,
    deliveryDocument,
    packageBox,
    deliveryTruck,
  ].map((icon, index) => ({
    icon,
    description: lang.process[index],
  }));

  //#region video controll
  const locale = usePathname().slice(1, 3);

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

  return (
    <>
      <section
        className={clsx(
          "h-auto lg:h-[640px] w-full relative overflow-hidden",
          "bg-[url('https://strapi-efex.ichiba.net/uploads/background_f40d3b33fc.webp')] bg-center bg-[length:100%_100%]",
          "lg:bg-[url('https://strapi-efex.ichiba.net/uploads/background_lg_0705633a1f.webp')]"
        )}
      >
        <div className="container px-4 py-6 w-full h-full lg:p-0 lg:flex">
          <div className="lg:w-[486px] lg:mt-[154px]">
            <h1 className="text-2xl font-bold lg:text-5xl lg:leading-[56px] text-ic-ink-6">
              {lang.title}
            </h1>
            <p className="text-sm mt-4 lg:mt-8 lg:text-base">{lang.subTitle}</p>
            <Link
              id="EcomfulfillmentContactButton"
              href={`/${locale}/contact-sales`}
              target="_blank"
              className={clsx(
                "block w-[171px] bg-brand-primary text-white rounded-lg text-sm font-medium text-center hover:bg-brand-primary-active transition-all",
                "mt-6 p-3 lg:mt-10"
              )}
            >
              {lang.getAQuote}
            </Link>
          </div>

          <div
            className={clsx(
              "w-full h-[100vw] max-w-[358px] max-h-[373px] mt-6",
              "lg:w-[611px] lg:max-w-none lg:h-[407px] lg:max-h-none lg:mt-[93px]"
            )}
          >
            <div className="relative h-full">
              <div
                className={clsx(
                  "bg-[url('https://strapi-efex.ichiba.net/uploads/image_835_423e0147ce.webp')] bg-contain bg-no-repeat",
                  "lg:bg-[url('https://strapi-efex.ichiba.net/uploads/image_835_lg_a7c348628d.webp')]",
                  "absolute h-[296px] w-full top-[5px] hover:bg-gray-1 rounded-2xl cursor-pointer flex justify-center items-center",
                  "lg:h-[400px] lg:w-[486px] lg:right-0"
                )}
                onClick={display}
              >
                <EzImage
                  src={"/uploads/Play_button_1_be68ee0a94.png"}
                  alt="Play Button"
                  width={84}
                  height={84}
                  className="lg:w-[84px] lg:h-[84px]"
                  quality={100}
                />
              </div>
              <div
                id="video-overlay"
                className={clsx(
                  "flex justify-center items-center fixed h-[100vh]",
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
                    videoId={videoId}
                    opts={opts}
                    iframeClassName="w-[95vw] h-[35vh] md:w-[44.8vw] md:h-[50vh]"
                    onReady={onVideoReadyHandler}
                  />
                </div>
              </div>
            </div>

            <div className="w-full absolute bottom-0 right-1/2 translate-x-1/2 lg:h-auto lg:right-1/4 lg:bottom-6 flex justify-center">
              <div
                className={clsx(
                  "bg-[linear-gradient(114deg,rgba(255,255,255,0.60)_3.87%,rgba(243,245,247,0.68)_99.44%,rgba(252,252,252,0.50)_100.62%)] backdrop-blur-[14.635156631469727px]",
                  "w-[340px] h-[120px] px-3 py-2 rounded-lg border-[1.064px] border-[rgba(255,255,255,0.60)] shadow-md",
                  "lg:w-[640px] lg:h-fit lg:px-5 lg:py-4"
                )}
              >
                <h3 className="text-xs text-brand-secondary font-bold lg:text-xl">
                  {lang.fulfillmentProcess}
                </h3>
                <ul className="flex mt-3 w-full">
                  <div
                    className={clsx(
                      "absolute bg-[linear-gradient(89deg,#959DB9_0%,#AF0000_100.62%)]",
                      "h-1 bottom-10 left-1/2 -translate-x-1/2 w-3/4 -z-10",
                      "lg:h-2 lg:bottom-[66px]"
                    )}
                  />
                  {deliveryProcess.map((item, index) => {
                    return (
                      <li
                        className="flex flex-col items-center flex-1"
                        key={index}
                      >
                        <Image
                          src={item.icon}
                          alt={item.description}
                          width={40}
                          height={40}
                          className="w-6 h-6 lg:w-10 lg:h-10"
                          quality={100}
                        />
                        <div
                          className={clsx(
                            "rounded-full border border-brand-secondary bg-white flex justify-center items-center",
                            "w-4 h-4 mt-2",
                            "lg:w-7 lg:h-7 lg:mt-3"
                          )}
                        >
                          <span
                            className={clsx(
                              "text-[8px] leading-[8.515px] font-bold text-brand-secondary",
                              "lg:text-xs"
                            )}
                          >
                            {index + 1}
                          </span>
                        </div>
                        <p
                          className={clsx(
                            "text-[8px] leading-3 font-medium text-center text-ic-ink-6 mt-2 ",
                            "lg:text-xs "
                          )}
                        >
                          {item.description}
                        </p>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <script
        dangerouslySetInnerHTML={{
          __html: `
          document.getElementById('EcomfulfillmentContactButton').addEventListener('click', function() {
            fbq('track', 'Ecomfulfillment_Contact_Button');
          });
        `,
        }}
      />
    </>
  );
};

export default Hero;
