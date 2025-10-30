"use client";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import clsx from "clsx";
import Link from "next/link";
import { useRef, useState } from "react";
import Image from "next/image";
import YouTube, { YouTubeProps } from "react-youtube";
import playBtn from "@/public/images/icons/playBtn.png";
import { LocalizeLink } from "@/utils/ultils";

const ContentComp = ({
  lang,
  heading,
  subHeading,
  link,
  bgLink,
  isContentLeft,
  countNum,
}: {
  lang: any;
  heading: string;
  subHeading: string;
  link: string;
  bgLink: string;
  isContentLeft: boolean;
  countNum?: string;
}) => (
  <div
    className={clsx(
      "flex justify-end items-center relative z-[1] flex-col",
      isContentLeft ? "md:flex-row" : "md:flex-row-reverse"
    )}
  >
    <div
      className={clsx(
        "relative shadow-[0_0_5px_0_rgba(_0,_0,_0,_0.1)] max-w-[530px]",
        "bg-[rgba(255,_255,_255,_0.85)] hover:bg-[rgba(255,_255,_255,_0.95)] ",
        " transition-all duration-300",
        "flex flex-col justify-between gap-4",
        "md:px-[40px] md:py-10",
        "px-5 py-[30px] mx-5 md:mx-0"
      )}
    >
      <div
        className={clsx(
          "absolute font-sans text-[#003B82] top-[-33px] text-6xl",
          isContentLeft ? "" : "md:self-end"
        )}
      >
        {countNum}
      </div>
      <div>
        <p className="font-black text-lg">{heading}</p>
        <p>{subHeading}</p>
      </div>
      <Link
        href={link}
        target="_blank"
        className="flex flex-row items-center justify-end text-brand-primary gap-4 hover:underline"
      >
        <div className="leading-[150%] font-medium">
          {lang.common.learnMore}
        </div>
        <div className="leading-[150%] text-center flex items-center justify-center w-4 h-4 shrink-0">
          <FontAwesomeIcon icon={faArrowRight} />
        </div>
      </Link>
    </div>
    <div
      className={clsx(
        "z-[-1] md:w-[80%] mt-[-5%] md:mt-[0]  h-[350px] flex justify-center",
        isContentLeft
          ? "md:ml-[-20%] md:justify-end"
          : "md:mr-[-20%] md:justify-start"
      )}
    >
      <Image
        src={bgLink}
        width={1176}
        height={480}
        quality={100}
        alt="Background Ezbuy"
        className="object-cover object-center w-[800px] h-full"
      ></Image>
    </div>
  </div>
);

var cElement: any = null;

const Services3 = ({ lang, params }: { lang: any; params: any }) => {
  const hide = () => {
    const ele = document.getElementById("video-overlay");
    ele?.classList.replace("flex", "hidden");
    cElement?.target?.stopVideo();
  };
  const display = () => {
    const ele = document.getElementById("video-overlay");
    ele?.classList.replace("hidden", "flex");
    cElement?.target?.playVideo();
  };
  const opts: YouTubeProps["opts"] = {
    height: "315",
    width: "560",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
  return (
    <section className="pt-10">
      <div className="container">
        <div className="leading-[150%] text-2xl lg:text-4xl uppercase font-black text-center pb-6">
          {lang.home.services.services}
        </div>
        <div className="flex flex-col gap-16">
          <ContentComp
            heading={lang.home.services.heading}
            subHeading={lang.home.services.subHeading}
            bgLink="https://strapi-ezbuy.ichiba.net/uploads/image_24_b9b3ec4bd2.png"
            lang={lang}
            link={LocalizeLink(params.lang, "/services/cross-border-ecommerce")}
            isContentLeft
            countNum="01"
          />
          <ContentComp
            heading={lang.home.crossBorder.heading}
            subHeading={lang.home.crossBorder.subHeading}
            bgLink="https://strapi-ezbuy.ichiba.net/uploads/Rectangle_6526_1_1bd5f83b6d.png"
            lang={lang}
            link={LocalizeLink(params.lang, "/services/cross-border-shipping")}
            isContentLeft={false}
            countNum="02"
          />
          <ContentComp
            heading={lang.home.warehouseFulfillment.heading}
            subHeading={lang.home.warehouseFulfillment.subHeading}
            bgLink="https://strapi-ezbuy.ichiba.net/uploads/Warehouse_Fulfillment_87f941d13a.png"
            lang={lang}
            link={LocalizeLink(params.lang, "/services/warehouse-fulfillment")}
            isContentLeft
            countNum="03"
          />
          <ContentComp
            heading={lang.home.sellInJapan.heading}
            subHeading={lang.home.sellInJapan.subHeading}
            bgLink="https://strapi-ezbuy.ichiba.net/uploads/Sell_in_japan_5f8d681c7f.png"
            lang={lang}
            link={LocalizeLink(params.lang, "/services/sell-in-japan")}
            isContentLeft={false}
            countNum="04"
          />
          <ContentComp
            heading={lang.home.b2bTrading.heading}
            subHeading={lang.home.b2bTrading.subHeading}
            bgLink="https://strapi-ezbuy.ichiba.net/uploads/b2_B_Ecommerce_874760f6a1.png"
            lang={lang}
            link={LocalizeLink(params.lang, "/services/b2b-trading-ecommerce")}
            isContentLeft
            countNum="05"
          />
          <ContentComp
            heading={lang.home.airFreight.heading}
            subHeading={lang.home.airFreight.subHeading}
            bgLink="https://strapi-ezbuy.ichiba.net/uploads/air_Freight_d4d672c854.png"
            lang={lang}
            link={LocalizeLink(
              params.lang,
              "/services/air-freight-customs-clearance"
            )}
            isContentLeft={false}
            countNum="06"
          />
          <ContentComp
            heading={lang.home.sellOverseas.heading}
            subHeading={lang.home.sellOverseas.subHeading}
            bgLink="https://strapi-ezbuy.ichiba.net/uploads/Frame_19158_4bb5a59ff8.png"
            lang={lang}
            link={LocalizeLink(
              params.lang,
              "/services/sell-overseas"
            )}
            isContentLeft={true}
            countNum="07"
          />
        </div>
      </div>
    </section>
  );
};

export default Services3;
