import mobile from "@/public/solutions/mobile.png";
import desktop from "@/public/solutions/desktop.png";
import bestDesktop from "@/public/solutions/bestDesktop.png";
import Image from "next/image";
import Link from "next/link";
import YouTube, { YouTubeProps } from "react-youtube";
import clsx from "clsx";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "next-i18next";
var cElement: any = null;

const BestEnd = () => {
  const [overLayVisible, setOverlayVisible] = useState(false);
  const { t } = useTranslation("order-fulfillment-by-efex");
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
  };
  const locale = usePathname().split("/")[1];

  return (
    <div>
      {/* mobile */}
      <div
        className="tw-container tw-relative tw-z-1 lg:tw-hidden"
        style={{
          backgroundImage: `url(${mobile.src})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="tw-py-6 tw-px-4">
          <h1 className="tw-text-2xl tw-text-6 tw-font-bold tw-text-[#333]">
            {t("title")}
          </h1>
          <div className="tw-text-sm tw-mt-3">{t("subTitle")}</div>
          <div className="tw-flex tw-justify-between tw-mt-6 tw-text-sm">
            <Link
              href={`/contact-sales`}
              target="_blank"
              className={clsx(
                "tw-w-[48%] tw-py-3 tw-text-center tw-self-center tw-no-underline",
                "tw-block tw-border-[2px] tw-border-[#AF0000] tw-bg-[#AF0000] tw-text-[#fff] tw-rounded-lg",
              )}
            >
              {t("contactSale")}
            </Link>
          </div>
        </div>
        <div className="tw-relative hover:tw-scale-105 hover:tw-transition-all hover:tw-duration-300 hover:tw-ease-linear tw-cursor-pointer tw-group tw-w-[75%] tw-mx-auto tw-mb-7">
          <Image
            src={bestDesktop}
            alt="bestDesktop"
            className="tw-rounded-2xl"
            onClick={() => display()}
          />
          <div
            className="tw-absolute tw-border-2 tw-rounded-full 
                                tw-w-[84px] tw-h-[84px] tw-flex tw-items-center tw-justify-center
                                tw-top-[50%] tw-left-[50%] tw-translate-x-[-50%] tw-translate-y-[-50%]
                                group-hover:tw-border-[3px] group-hover:tw-bg-gradient-to-t tw-from-[#FFFFFFE5]"
          >
            <FontAwesomeIcon
              icon={faPlay}
              onClick={() => display()}
              className="tw-text-[#F57C00] tw-text-3xl"
            />
          </div>
        </div>
      </div>

      {/* deskktop */}
      <div
        className="lg:tw-block tw-hidden tw-py-[80px]"
        style={{
          backgroundImage: `url(${desktop.src})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="tw-container tw-flex tw-gap-14">
          <div className="tw-my-auto tw-w-3/5">
            <h1 className="tw-text-[48px] tw-text-6 tw-font-bold tw-text-[#333]">
              {t("title")}
            </h1>
            <div className=" tw-mt-8 tw-max-w-[582px]">{t("subTitle")}</div>
            <div className="tw-flex tw-mt-10 tw-text-sm">
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
          </div>
          <div className="tw-relative tw-w-2/5 hover:tw-scale-105 hover:tw-transition-all hover:tw-duration-300 hover:tw-ease-linear tw-cursor-pointer tw-group">
            <Image
              src={bestDesktop}
              alt="bestDesktop"
              onClick={() => display()}
              className="tw-rounded-2xl"
            />
            <div
              className="tw-absolute tw-border-2 tw-rounded-full 
                                tw-w-[84px] tw-h-[84px] tw-flex tw-items-center tw-justify-center
                                tw-top-[50%] tw-left-[50%] tw-translate-x-[-50%] tw-translate-y-[-50%]
                                group-hover:tw-border-[3px] group-hover:tw-bg-gradient-to-t tw-from-[#FFFFFFE5]"
            >
              <FontAwesomeIcon
                icon={faPlay}
                onClick={() => display()}
                className="tw-text-[#F57C00] tw-text-3xl"
              />
            </div>
          </div>
        </div>
      </div>

      <div
        className={clsx(
          "tw-justify-center tw-items-center tw-fixed tw-h-[100vh]",
          "tw-bg-[rgba(_0,_0,_0,_0.5)] tw-z-50 tw-top-0 tw-right-0 tw-left-0 tw-bottom-0",
          overLayVisible ? "tw-block" : "tw-hidden",
        )}
      >
        <div className="tw-absolute tw-top-[50%] tw-left-[50%] tw-translate-x-[-50%] tw-translate-y-[-50%]">
          <div className="tw-text-right tw-text-white">
            <span className="tw-w-fit" onClick={() => hide()}>
              <FontAwesomeIcon
                icon={faXmark}
                size="2x"
                className="tw-ring-transparent tw-ring-2 hover:tw-scale-125 tw-transition tw-duration-300 tw-cursor-pointer"
              />
            </span>
          </div>
          <YouTube
            videoId={locale === "en" ? "x9HB5vq0mh8" : "QOHPOQV2_rM"}
            opts={opts}
            iframeClassName="tw-w-[95vw] tw-h-[35vh] md:tw-w-[44.8vw] md:tw-h-[50vh]"
            onReady={(e: { target: any }) => (cElement = e)}
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
};
export default BestEnd;
