import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "next-i18next";
import YouTube, { YouTubeEvent, YouTubeProps } from "react-youtube";
import playBtn from "@/public/icons/playBtn.png";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

var cElement: YouTubeEvent = { data: null, target: null };

const Banner = () => {
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
  const d = useTranslation("digital").t;

  return (
    <section
      className={clsx(
        "tw-py-6 lg:tw-px-0 lg:tw-py-16",
        "tw-bg-[url('https://cms-strapi.ichiba.net/uploads/BG_86c8df40af.png')]",
        "lg:tw-bg-[url('#')] tw-bg-cover tw-bg-no-repeat tw-relative",
      )}
    >
      <div
        className={clsx(
          "tw-container",
          "tw-flex tw-flex-col tw-gap-9 md:tw-gap-6 tw-items-center",
        )}
      >
        <div className=" tw-flex tw-flex-col lg:tw-text-center">
          <h1 className="tw-text-2xl md:tw-text-4xl tw-font-bold lg:tw-mb-6 tw-mb-4 ">
            {d("banner.heading")}
          </h1>
          <p className="tw-font-medium lg:tw-font-bold lg:tw-text-2xl">
            {d("banner.heading2")}
          </p>
          <div className="lg:tw-mb-9 tw-mb-4 tw-text-center">
            <p className="tw-mb-0 tw-text-pending-5 lg:tw-text-black lg:tw-w-4/5  tw-mx-auto">
              {d("banner.subHeading") + " " + d("banner.subHeading2")}
            </p>
          </div>
          <div className="tw-flex tw-justify-between lg:tw-justify-center tw-text-sm md:tw-text-xl tw-font-medium lg:tw-gap-6 tw-gap-4">
            <Link
              href={"/book-demo"}
              className="tw-cta tw-cta-primary tw-flex-1 tw-p-3 lg:tw-max-w-[250px]"
            >
              {d("cta.requestADemo")}
            </Link>
            <Link
              href={"#"}
              className="tw-cta tw-cta-secondary tw-flex-1 tw-p-3 lg:tw-max-w-[258px]"
            >
              {d("cta.getStarted")}
            </Link>
          </div>
        </div>
        <div className="tw-relative">
          <div
            className={clsx(
              "tw-absolute-center tw-z-10 tw-w-fit tw-transition",
              "hover:tw-bg-orange-5 tw-rounded-full tw-cursor-pointer tw-bg-brand-primary",
            )}
            // onClick={() => display()}
          >
            <Image src={playBtn} alt="" />
          </div>
          <Image
            src="https://cms-strapi.ichiba.net/uploads/Mask_group_8ba91b1736.svg"
            alt=""
            width={11200}
            height={587}
          />
        </div>
      </div>
      <div
        id="video-overlay"
        className={clsx(
          " tw-justify-center tw-items-center tw-fixed  tw-h-[100vh]",
          "tw-bg-[rgba(_0,_0,_0,_0.5)] tw-z-50 tw-top-0 tw-right-0 tw-left-0 tw-bottom-0",
          overLayVisible ? "tw-block" : "tw-hidden",
        )}
      >
        <div className="tw-absolute-center tw-cursor-pointer">
          <div className="tw-flex tw-justify-between tw-text-white tw-items-center">
            <span className="tw-font-bold tw-text-2xl"></span>
            <span className=" tw-w-fit " onClick={() => hide()}>
              <FontAwesomeIcon
                icon={faXmark}
                size="3x"
                className="tw-ring-transparent tw-ring-2 hover:tw-scale-125 tw-transition tw-duration-300"
              />
            </span>
          </div>
          <YouTube
            videoId="aDJxt7gXMOU"
            opts={opts}
            iframeClassName="tw-w-[95vw] tw-h-[35vh] md:tw-w-[44.8vw] md:tw-h-[50vh]"
            onReady={onVideoReadyHandler}
          />
        </div>
      </div>
    </section>
  );
};

export function BannerDigital() {
  const d = useTranslation("digital").t;
  return (
    <section
      className={clsx(
        "tw-bg-[url('https://cms-strapi.ichiba.net/uploads/BG_86c8df40af.png')]",
        "md:tw-bg-[url('https://cms-strapi.ichiba.net/uploads/BG_desktop_5d15cd9040.png')]",
        "tw-bg-center tw-bg-cover",
        "tw-py-6 lg:tw-px-0 lg:tw-py-16",
      )}
    >
      <div
        className={clsx(
          "tw-container",
          "tw-flex tw-flex-col md:tw-flex-row tw-gap-9 md:tw-gap-6 tw-items-center",
        )}
      >
        <div className="tw-flex-1 tw-flex tw-flex-col lg:tw-pe-10">
          <h1 className="tw-text-2xl md:tw-text-4xl tw-font-bold lg:tw-mb-6 tw-mb-4 ">
            {d("banner.heading")}
          </h1>
          <div className=" lg:tw-mb-12 tw-mb-4">
            <p className="tw-font-medium tw-mb-2 lg:tw-mb-6">
              {d("banner.heading2")}
            </p>
            <p className="tw-mb-0 tw-text-pending-5 lg:tw-text-black lg:tw-mb-6">
              {d("banner.subHeading")}
            </p>
            <p className="tw-mb-0 tw-text-pending-5 lg:tw-text-black">
              {d("banner.subHeading2")}
            </p>
          </div>
          <div className="tw-flex tw-justify-between tw-text-sm md:tw-text-xl tw-font-medium lg:tw-gap-6 tw-gap-4">
            <Link href={"#"} className="tw-cta tw-cta-primary tw-flex-1 tw-p-3">
              {d("cta.getStarted")}
            </Link>
            <Link
              href={"#"}
              className="tw-cta tw-cta-secondary tw-flex-1 tw-p-3"
            >
              {d("cta.requestADemo")}
            </Link>
          </div>
        </div>
        <div className="tw-flex-1">
          <Image
            className="tw-object-cover tw-object-center"
            src={
              "https://cms-strapi.ichiba.net/uploads/Block_1_1_a90c02ea53.png"
            }
            alt=""
            width={588}
            height={482}
            quality={100}
          />
        </div>
      </div>
    </section>
  );
}
export default Banner;
