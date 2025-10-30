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
const Social = ({ locale }: any) => {
  const [hoverZalo, setHoverZalo] = useState(false);
  const MessengerRef = useRef<HTMLDivElement>(null);
  const [showChat, setShowChat] = useState(false);

  const changeShow = () => {
    setShowChat(!showChat);
  };
  return (
    <>
      {showChat && (
        <div className="fixed lg:bottom-[85px] sm:bottom-[80px] bottom-[75px] sm:right-7 md:right-6 right-4 flex flex-col items-end gap-3 z-[1]">
          <Link
            href={"https://zalo.me/4563681100355802014"}
            className="flex-1"
            target="_blank"
            onMouseEnter={() => setHoverZalo(true)}
            onMouseLeave={() => setHoverZalo(false)}
          >
            <div
              className={clsx(
                " bg-[#0264FE] flex items-center overflow-hidden rounded-full"
              )}
            >
              <Image
                src={
                  "https://strapi-efex.ichiba.net/uploads/Icon_of_Zalo_svg_2_e48cf8e1f0.webp"
                }
                alt=""
                width={60}
                height={60}
                quality={100}
                className="w-[54px] h-[54px] sm:w-15 sm:h-15 p-[6px]"
              />
              <div
                className={clsx(
                  "font-bold text-white transition-all ease-in  duration-600 hidden lg:block",
                  hoverZalo ? "w-[100px] " : " w-0  delay-200"
                )}
              >
                <div>Zalo</div>
              </div>
            </div>
          </Link>

          <div className="">
            <Link href={"https://m.me/107382755248848"} target="_blank">
              <Image
                src={
                  "https://strapi-efex.ichiba.net/uploads/Tiktok_2_f8fccddc01.svg"
                }
                width={60}
                height={60}
                className="w-[54px] h-[54px] sm:w-15 sm:h-15"
                alt="EFEX"
              />
            </Link>
          </div>
        </div>
      )}

      <div
        className={clsx(
          "fixed sm:bottom-[15px] bottom-[10px] sm:right-7 md:right-6 right-4 cursor-pointer hover:opacity-80",
          "w-[54px] h-[54px] sm:w-15 sm:h-15 rounded-full bg-[#3E65AF] flex items-center justify-center"
        )}
        onClick={() => changeShow()}
      >
        <FontAwesomeIcon
          icon={showChat ? faClose : faMessage}
          className="text-white w-6 h-6"
          width={24}
          height={24}
        />
      </div>
    </>
  );
};
export default Social;
