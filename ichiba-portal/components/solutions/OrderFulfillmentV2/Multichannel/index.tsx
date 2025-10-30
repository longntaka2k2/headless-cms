import { useTranslation } from "next-i18next";
import bgMulti from "@/public/solutions/bg-multichannel-order.png";
import bgReMulti from "@/public/solutions/bg-re-multichannel.png";
import videoMulti from "@/public/solutions/video-multichannel.png";
import Image from "next/image";
import clsx from "clsx";
import Link from "next/link";
import { useState } from "react";
import YouTube, { YouTubeEvent, YouTubeProps } from "react-youtube";
import { useRouter } from "next/router";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

var cElement: YouTubeEvent = { data: null, target: null };

export const Multichannel = () => {
  const { t } = useTranslation("order-fulfillment-by-efex");
  const router = useRouter()
  const [overLayVisible, setOverlayVisible] = useState(false);
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
  };
  return (
    <div>
      <div style={{ backgroundImage: `url(${bgMulti.src})` }}>
        <div className="tw-container tw-h-[370px] lg:tw-h-auto tw-pt-5 lg:tw-py-20 tw-relative">
          <div className="tw-text-white lg:tw-w-[50%]">
            <h2 className="tw-text-2xl lg:tw-text-4xl tw-font-bold tw-mb-2 lg:tw-mb-4">
              {t("multichannel.title")}
            </h2>
            <p className="tw-text-sm lg:tw-text-lg tw-mb-5 lg:tw-mb-10">
              {t("multichannel.subTitle")}
            </p>
            <Link
              href={`/contact-sales`}
              target="_blank"
              className={clsx(
                "tw-w-[200px] tw-py-3 tw-text-center tw-self-center tw-mr-6 tw-no-underline",
                "tw-block tw-border-[2px] tw-border-[#AF0000] tw-bg-[#AF0000] tw-text-[#fff] tw-rounded-lg hover:tw-bg-[#A30505]",
              )}
            >
              {t("contactSale")}
            </Link>
          </div>
          <div
            className={clsx(
              "tw-w-[358px] tw-h-[298px] lg:tw-w-[587px] lg:tw-h-[489px] tw-rounded-lg tw-overflow-hidden",
              "tw-absolute tw-left-[50%] tw-translate-x-[-50%] lg:tw-translate-x-0 tw-bottom-[-45%] lg:tw-bottom-[-40%] lg:tw-right-0",
            )}
          >
            <div className=" tw-relative lg:tw-top-[90px] tw-h-[489px] lg:tw-h-full lg:tw-w-full lg:tw-max-w-[587px]">
              <Image
                src={'https://cms-strapi.ichiba.net/uploads/Video_8a1ee99ece.png'}
                width={587}
                height={489}
                alt="videoMulti"
                onClick={() => display()}
                className="tw-w-full tw-h-full"
              />
            </div>
          </div>
        </div>
      </div>
      <div
        className="tw-h-[180px] lg:tw-h-[227px]"
        style={{
          backgroundImage: `url(${bgReMulti.src})`,
          backgroundRepeat: "no-repeat",
        }}
      ></div>
       <div
        id="video-overlay"
        className={clsx(
          " tw-justify-center tw-items-center tw-fixed h-[100vh]",
          "tw-bg-[rgba(_0,_0,_0,_0.5)] tw-z-50 tw-top-0 tw-right-0 tw-left-0 tw-bottom-0",
          overLayVisible ? "tw-block" : "tw-hidden"
        )}
      >
        <div className="tw-absolute-center tw-cursor-pointer">
          <div className="tw-flex tw-justify-between tw-text-white tw-items-center">
            <span className=" w-fit " onClick={() => hide()}>
              <FontAwesomeIcon
                icon={faXmark}
                size="3x"
                className="tw-ring-transparent tw-ring-2 hover:tw-scale-125 tw-transition tw-duration-300"
              />
            </span>
          </div>
          <YouTube
            videoId="GJJtVp88fKk"
            opts={opts}
            iframeClassName="tw-w-[95vw] tw-h-[35vh] md:tw-w-[44.8vw] md:tw-h-[50vh]"
            onReady={onVideoReadyHandler}
          />
        </div>
      </div>
    </div>
  );
};
