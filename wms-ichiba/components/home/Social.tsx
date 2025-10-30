/* eslint-disable @next/next/link-passhref */
"use client";
import { useEffect, useRef, useState } from "react";
import clsx from "clsx";
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose, faMessage } from "@fortawesome/free-solid-svg-icons";

declare global {
  interface Window {
    fbAsyncInit: () => void;
  }
}
const Social = () => {
  const [hoverZalo, setHoverZalo] = useState(false);
  const MessengerRef = useRef<HTMLDivElement>(null);
  const [showChat, setShowChat] = useState(false);

  const changeShow = () => {
    setShowChat(!showChat);
  };
  return (
    <>
      {showChat && (
        <div className="tw-fixed lg:tw-bottom-[85px] sm:tw-bottom-[80px] tw-bottom-[75px] sm:tw-right-7 md:tw-right-6 tw-right-4 tw-flex tw-flex-col tw-items-end tw-gap-3 tw-z-[1]">
          <Link
            href={"https://zalo.me/890265522282252483"}
            className="tw-flex-1"
            target="_blank"
            onMouseEnter={() => setHoverZalo(true)}
            onMouseLeave={() => setHoverZalo(false)}
          >
            <div
              className={clsx(
                "tw-bg-[#0264FE] tw-flex tw-items-center tw-overflow-hidden tw-rounded-full",
              )}
            >
              <Image
                src={
                  "https://cms-strapi.ichiba.net/uploads/Icon_of_Zalo_svg_2_e48cf8e1f0_dc0b38dedb.webp"
                }
                alt=""
                width={60}
                height={60}
                quality={100}
                className="tw-w-[54px] tw-h-[54px] sm:tw-w-15 sm:tw-h-15 tw-p-[6px]"
              />
              <div
                className={clsx(
                  "tw-font-bold tw-text-white tw-transition-all tw-ease-in tw-duration-600 tw-hidden lg:tw-block",
                  hoverZalo ? "tw-w-[100px] " : "tw-w-0 tw-delay-200",
                )}
              >
                <div>Zalo</div>
              </div>
            </div>
          </Link>

          <div className="">
            <Link href={"https://m.me/101937536171409"} target="_blank">
              <Image
                src={
                  "https://cms-strapi.ichiba.net/uploads/Tiktok_2_f8fccddc01_9060d0648d.svg"
                }
                width={60}
                height={60}
                className="tw-w-[54px] tw-h-[54px] sm:tw-w-15 sm:tw-h-15"
                alt="EFEX"
              />
            </Link>
          </div>
        </div>
      )}

      <div
        className={clsx(
          "tw-fixed sm:tw-bottom-[15px] tw-bottom-[10px] sm:tw-right-7 md:tw-right-6 tw-right-4 tw-cursor-pointer hover:tw-opacity-80",
          "tw-w-[54px] tw-h-[54px] sm:tw-w-15 sm:tw-h-15 tw-rounded-full tw-bg-[#3E65AF] tw-flex tw-items-center tw-justify-center",
        )}
        onClick={() => changeShow()}
      >
        <FontAwesomeIcon
          icon={showChat ? faClose : faMessage}
          className="tw-text-white tw-w-6 tw-h-6"
          width={24}
          height={24}
        />
      </div>
    </>
  );
};
export default Social;
