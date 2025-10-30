"use client";
import { useEffect, useRef, useState } from "react";
import clsx from "clsx";
import Link from "next/link";
import EzImage from "../commons/EzImage";

declare global {
  interface Window {
    fbAsyncInit: () => void;
  }
}
const Social = ({ locale }: any) => {
  const [hoverMess, setHoverMess] = useState(false);
  const [hoverZalo, setHoverZalo] = useState(false);
  const MessengerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    var chatbox = document.getElementById('fb-customer-chat') as HTMLDivElement;
    chatbox.setAttribute("page_id", "107382755248848");
    chatbox.setAttribute("attribution", "biz_inbox");
    window.fbAsyncInit = function () {
      FB.init({
        xfbml: true,
        version: 'v18.0'
      });
    };

    (function (d, s, id) {
      var js: any, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s); js.id = id;
      js.src = 'https://connect.facebook.net/vi_VN/sdk/xfbml.customerchat.js';
      fjs?.parentNode?.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));

  }, [])
  return (
    <div className="fixed lg:bottom-[130px] bottom-[80px] md:right-3 right-0 flex flex-col items-end gap-3 z-[1]">
      <Link
        href="https://m.me/efex.asia"
        className="flex-1 pr-4"
        target="_blank"
        onMouseEnter={() => setHoverMess(true)}
        onMouseLeave={() => setHoverMess(false)}
      >
        <div
          className={clsx(
            " bg-[#0084FF] flex items-center overflow-hidden rounded-full hidden"
          )}
        >
          <EzImage
            src={"/uploads/facebook_messenger_white_logo_2_e2ffffb75c.svg"}
            alt="facebook_messenger_white_logo"
            width={42}
            height={42}
            quality={100}
            className="p-1"
          />
        </div>
      </Link>
      <Link
        href={"https://zalo.me/4563681100355802014"}
        className="flex-1 pr-4"
        target="_blank"
        onMouseEnter={() => setHoverZalo(true)}
        onMouseLeave={() => setHoverZalo(false)}
      >
        <div
          className={clsx(
            " bg-[#0264FE] flex items-center overflow-hidden rounded-full"
          )}
        >
          <EzImage
            src={"/uploads/Icon_of_Zalo_svg_2_e48cf8e1f0.webp"}
            alt=""
            width={42}
            height={42}
            quality={100}
            className="p-[6px]"
          />
          <div
            className={clsx(
              "font-bold text-white transition-all ease-in  duration-600 hidden lg:block",
              hoverZalo ? " w-[100px] " : "  w-0  delay-200"
            )}
          >
            <div>Zalo</div>
          </div>
        </div>
      </Link>
      <div id="fb-root" className="hidden lg:block relative z-[999]"></div>
      <div ref={MessengerRef} id="fb-customer-chat" className="fb-customerchat "></div>
    </div>
  );
};
export default Social;
