/* eslint-disable @next/next/next-script-for-ga */
import "@/app/styles/global.scss";
import Script from "next/script";
import "swiper/css";
import "swiper/css/pagination";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head>
        {/* <Script
          id="crisp"
          dangerouslySetInnerHTML={{
            __html: `window.$crisp=[];window.CRISP_WEBSITE_ID="5b924916-e708-4a5f-a61e-993be99c835f";(function(){d=document;s=d.createElement("script");s.src="https://client.crisp.chat/l.js";s.async=1;d.getElementsByTagName("head")[0].appendChild(s);})();`,
          }}
        /> */}
      </head>
      {children}
    </html>
  );
}
