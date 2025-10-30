/* eslint-disable @next/next/next-script-for-ga */
import "@/app/styles/global.scss";
import Head from "next/head";
import Script from "next/script";
import "swiper/css";
import "swiper/css/pagination";

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: any;
}) {
  return (
    <html lang={params.lang}>
      <head>
        <Script
          id="crisp"
          dangerouslySetInnerHTML={{
            __html: `window.$crisp=[];window.CRISP_WEBSITE_ID="5b924916-e708-4a5f-a61e-993be99c835f";(function(){d=document;s=d.createElement("script");s.src="https://client.crisp.chat/l.js";s.async=1;d.getElementsByTagName("head")[0].appendChild(s);})();`,
          }}
        />
        <Script
          id=""
          dangerouslySetInnerHTML={{
            __html: `gtag('event', 'conversion', {'send_to': 'AW-11359862764/s3EJCPv-s4UZEOz_5qgq'});`,
          }}
        />
      </head>
      {children}
    </html>
  );
}
