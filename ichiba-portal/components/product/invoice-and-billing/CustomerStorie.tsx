"use client";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useRef, useState } from "react";
import clsx from "clsx";
import Link from "next/link";
import YouTube, { YouTubeEvent, YouTubeProps } from "react-youtube";
import { usePathname } from "next/navigation";
import { useTranslation } from "next-i18next";

var cElement: YouTubeEvent = { data: null, target: null };

export default function CustomerStorie() {
  const { t: tInvoice } = useTranslation("invoice-and-billing");
  const [active, setActive] = useState(0);
  const [overLayVisible, setOverlayVisible] = useState(false);
  const [videoTitle, setVideoTitle] = useState("");
  const elementRef = useRef(null);
  const [isVisible, setVisible] = useState(false);

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
      { threshold: 1 / 3 },
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
    <div
      ref={elementRef}
      className={clsx(
        "lg:tw-bg-[url(https://cms-strapi.ichiba.net/uploads/Customer_say_d9933bec69_27271d69c8.svg)]",
        "tw-bg-[#F3F6F9] lg:tw-py-10 tw-py-6",
        isVisible ? "tw-animate-showOn" : "tw-opacity-0",
      )}
    >
      <div className="tw-container tw-text-[#333] tw-px-4 lg:tw-px-0 tw-my-4">
        <h2 className="tw-text-xl tw-leading-7 lg:tw-text-[30px] lg:tw-leading-8 tw-font-bold tw-text-center tw-mb-5 lg:tw-mb-6">
          <span className="tw-text-brand-primary">
            {tInvoice("customerStories.heading.0")}
          </span>
          {tInvoice("customerStories.heading.1")}
          <br />
          {tInvoice("customerStories.heading.2")}
        </h2>
        <p className="tw-text-sm lg:tw-text-base  tw-mb-5 lg:tw-mb-6 tw-text-center">
          {tInvoice("customerStories.subHeading.0")}
          <br />
          {tInvoice("customerStories.subHeading.1")}
        </p>
        <div
          className={clsx(
            "tw-px-4 tw-py-5 tw-rounded-[20px] tw-shadow-[0px_8px_16px_0px_rgba(0,_0,_0,_0.05)]",
            "lg:tw-items-center lg:tw-px-10 lg:tw-pt-10 lg:tw-max-w-[990px] tw-mx-auto lg:tw-mt-10 tw-bg-white",
          )}
        >
          {(
            tInvoice(`customerStories.content`, {
              returnObjects: true,
            }) as string[]
          ).map((value: any, index: number) => (
            <div
              className={`${index === active ? "" : "tw-hidden"}`}
              key={index}
            >
              <div className="lg:tw-flex lg:tw-justify-between">
                <div className="tw-relative">
                  <Image
                    src={value?.image}
                    alt="image"
                    width={351}
                    height={388}
                    quality={100}
                    className="tw-rounded-2xl tw-mx-auto"
                    style={{
                      clipPath:
                        "polygon(0 0, 100% 0, 100% 12%, 100% 100%, 70% 100%, 12% 100%, 0 88%, 0 0)",
                    }}
                  />
                </div>
                <div className="lg:tw-max-w-[499px]">
                  <div className="tw-mt-6 tw-text-[#666] tw-font-bold tw-text-[20px]">
                    {value?.company}
                  </div>
                  <Image
                    src={
                      "https://cms-strapi.ichiba.net/uploads/quote_left_1_a835bb4cda.svg"
                    }
                    alt="icon"
                    width={28}
                    height={23}
                    className="tw-mt-3"
                  />
                  <div
                    className="tw-font-medium tw-text-[20px] lg:tw-max-w-[440px]"
                    style={{ fontFamily: "Lora" }}
                  >
                    {value?.label}
                  </div>
                  <div className="tw-flex tw-items-center tw-gap-3 tw-mt-3">
                    <div className="mr-3">
                      <Image
                        src={value?.avatar}
                        alt="avatar"
                        width={50}
                        height={50}
                        className="tw-w-10 tw-h-10 lg:tw-h-12 lg:tw-w-12"
                      />
                    </div>
                    <div className="">
                      <div className="tw-font-bold tw-text-sm lg:tw-text-base">
                        {value?.name}
                      </div>
                      <div className="tw-text-xs lg:tw-text-sm">
                        {value?.bio}
                      </div>
                    </div>
                  </div>
                  <div className="tw-text-sm tw-mt-3 lg:tw-mt-6 lg:tw-text-base">
                    {value?.content}
                  </div>
                </div>
              </div>
            </div>
          ))}

          <div className="">
            <div className="tw-flex tw-items-center tw-justify-end tw-mt-7 lg:tw-mt-10">
              <div
                className={clsx(
                  "tw-py-[7px] tw-px-3 tw-rounded-full tw-border tw-border-[#333]",
                  active === 0 ? "tw-pointer-events-none tw-opacity-0" : "",
                )}
                onClick={() => setActive(active - 1)}
              >
                <FontAwesomeIcon icon={faArrowLeft} />
              </div>
              <div className="tw-text-sm tw-text-[#666] tw-mx-5">
                {active +
                  1 +
                  " / " +
                  (
                    tInvoice(`customerStories.content`, {
                      returnObjects: true,
                    }) as string[]
                  ).length}
              </div>
              <div
                className={clsx(
                  "tw-py-[7px] tw-px-3 tw-rounded-full tw-border tw-border-[#333]",
                  active + 1 ===
                    (
                      tInvoice(`customerStories.content`, {
                        returnObjects: true,
                      }) as string[]
                    ).length
                    ? "pointer-events-none tw-hidden"
                    : "",
                )}
                onClick={() => setActive(active + 1)}
              >
                <FontAwesomeIcon icon={faArrowRight} />
              </div>
            </div>
          </div>
        </div>
        <Link
          href={`/case-studies`}
          className={clsx(
            "tw-block tw-w-max tw-rounded-[8px] tw-text-sm tw-bg-contact tw-text-white tw-py-2 tw-px-3 tw-no-underline",
            "lg:tw-px-5 tw-my-5 lg:tw-mt-10 lg:tw-mb-0 tw-bg-brand-primary hover:tw-opacity-90 tw-mx-auto",
          )}
        >
          {tInvoice("customerStories.view")}
          <FontAwesomeIcon
            icon={faArrowRight}
            className="tw-ml-2"
            width={24}
            height={24}
          />
        </Link>
      </div>
      <div
        id="video-overlay"
        className={clsx(
          "tw-justify-center tw-items-center tw-fixed tw-h-[100vh]",
          "tw-bg-[rgba(_0,_0,_0,_0.5)] tw-z-50 tw-top-0 tw-right-0 tw-left-0 tw-bottom-0",
          overLayVisible ? "tw-block" : "tw-hidden",
        )}
      >
        <div className="tw-absolute-center tw-cursor-pointer">
          <div className="tw-flex tw-justify-between tw-text-white tw-items-center">
            <span className="tw-font-bold tw-text-2xl">{videoTitle}</span>
            <span className="tw-w-fit" onClick={() => hide()}>
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
    </div>
  );
}
