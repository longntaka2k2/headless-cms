/* eslint-disable @next/next/link-passhref */
import { useEffect, useRef, useState } from "react";
import clsx from "clsx";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

declare global {
  interface Window {
    fbAsyncInit: () => void;
  }
}
const Social = () => {
  const [hoverMess, setHoverMess] = useState(false);
  const [hoverZalo, setHoverZalo] = useState(false);
  const MessengerRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  useEffect(() => {
    var chatbox = document.getElementById("fb-customer-chat") as HTMLDivElement;
    chatbox.setAttribute(
      "page_id",
      router?.locale === "en" ? "101937536171409" : "116365411396505",
    );
    chatbox.setAttribute("attribution", "biz_inbox");
    window.fbAsyncInit = function () {
      FB.init({
        xfbml: true,
        version: "v18.0",
      });
    };

    (function (d, s, id) {
      var js: any,
        fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s);
      js.id = id;
      js.src = "https://connect.facebook.net/vi_VN/sdk/xfbml.customerchat.js";
      fjs?.parentNode?.insertBefore(js, fjs);
    })(document, "script", "facebook-jssdk");
  }, [router?.locale]);
  return (
    <div className="tw-fixed  tw-bottom-20 tw-right-6 tw-flex tw-flex-col tw-items-end tw-gap-3 tw-z-[1]">
      <Link
        href={
          router?.locale === "en"
            ? "https://m.me/101937536171409"
            : "https://m.me/116365411396505"
        }
        target="_blank"
        className="flex-1 pr-4"
        onMouseEnter={() => setHoverMess(true)}
        onMouseLeave={() => setHoverMess(false)}
      >
        <div
          className={clsx(
            " tw-bg-[#0084FF] tw-flex tw-items-center tw-overflow-hidden tw-rounded-full lg:tw-hidden",
          )}
        >
          <Image
            src={
              "https://cms-strapi.ichiba.net/uploads/facebook_messenger_white_logo_2_1_1e224fc778.svg"
            }
            alt=""
            width={50}
            height={50}
            className="p-1"
          />
        </div>
      </Link>
      {/* <Link
        href={"https://zalo.me/4563681100355802014"}
        className="flex-1 pr-4"
        target="_blank"
        onMouseEnter={() => setHoverZalo(true)}
        onMouseLeave={() => setHoverZalo(false)}
      >
        <div
          className={clsx(
            " bg-[#0264FE] flex items-center overflow-hidden rounded-full",
            locale === 'en' && 'hidden'
          )}
        >
          <Image
            src={"/uploads/Icon_of_Zalo_svg_2_e48cf8e1f0.webp"}
            alt=""
            width={42}
            height={42}
            className="p-[6px]"
          />
          <div
            className={clsx(
              "font-bold text-white transition-all ease-in  duration-600 hidden lg:block",
              hoverZalo ? " w-[100px] " : "  w-0  delay-300"
            )}
          >
            <div>Zalo</div>
          </div>
        </div>
      </Link> */}
      <div id="fb-root" className="tw-hidden lg:tw-block"></div>
      <div
        ref={MessengerRef}
        id="fb-customer-chat"
        className="fb-customerchat "
      ></div>
    </div>
  );
};
export default Social;
