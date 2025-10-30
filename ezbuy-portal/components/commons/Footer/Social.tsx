"use client";
import { useEffect, useRef, useState } from "react";
import EzImage from "../EzImage";
import clsx from "clsx";
import Link from "next/link";

declare global {
  interface Window {
    fbAsyncInit: () => void;
  }
}
const Social = () => {
  const [hoverMess, setHoverMess] = useState(false);
  const [hoverZalo, setHoverZalo] = useState(false);
  const MessengerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {  
    var chatbox = document.getElementById('fb-customer-chat') as HTMLDivElement;
    chatbox.setAttribute("page_id", "112885421178710");
    chatbox.setAttribute("attribution", "biz_inbox");
    window.fbAsyncInit = function() {
      FB.init({
        xfbml            : true,
        version          : 'v18.0'
      } ); 
    };

    (function(d, s, id) {
      var js : any, fjs = d.getElementsByTagName(s)[0] ;
      if (d.getElementById(id)) return;
      js = d.createElement(s) ; js.id = id;
      js.src = 'https://connect.facebook.net/vi_VN/sdk/xfbml.customerchat.js';
      fjs?.parentNode?.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));

}, [])
  return (  
    <div className="fixed lg:bottom-[-4px] bottom-[80px] right-0 flex flex-col items-end gap-3 z-[1]">
      <Link
        href="https://m.me/112885421178710"
        target="_blank"
        className="flex-1 pr-4"
        onMouseEnter={() => setHoverMess(true)}
        onMouseLeave={() => setHoverMess(false)}
      >
        <div
          className={clsx(
            "  flex items-center overflow-hidden rounded-full lg:hidden"
          )}
        >
          <EzImage
            src={"/uploads/messenger_icon_free_png_e759e21507.webp"}
            alt="Ezbuy"
            width={58}
            height={58}
            className=""
          />
        </div>
      </Link>
       <div id="fb-root" className="hidden lg:block"></div>
        <div ref={MessengerRef} id="fb-customer-chat" className="fb-customerchat "></div>
    </div>
  );
};
export default Social;
