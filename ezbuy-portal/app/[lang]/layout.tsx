/* eslint-disable @next/next/next-script-for-ga */
import Footer from "@/components/commons/Footer";
import Header from "@/components/commons/Header";
import type { Metadata } from "next";
import { Inter, Noto_Sans_JP } from "next/font/google";
import "@/app/styles/global.scss";
// import "@/app/globals.css";
import "swiper/css";
import "swiper/css/pagination";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { yuGoth } from "../styles/fonts";
import { getDictionary } from "../getDictionary";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });
const notosansJS = Noto_Sans_JP({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: "%s | Ezbuy Japan",
    default: "Ezbuy Japan", // a default is required when creating a template
  },
};

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: any;
}) {
  const lang = await getDictionary(params.lang);
  const changeFont =
    params.lang === "ja" ? notosansJS.className : inter.className;
  return (
    <html lang={params.lang}>
      <head>
        <script
          id="google-tag-manager"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-MZXW593X');`,
          }}
        />
        <meta
          name="google-site-verification"
          content="npJgdVZdUWMnbGNULAWzQgL1F4xRl3-zAKA7Ux5X9m4"
        />
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=GTM-MZXW593X"
        ></Script>
        <Script
          id="Script-gtag-config"
          dangerouslySetInnerHTML={{
            __html:
              "window.dataLayer = window.dataLayer || [];  function gtag(){dataLayer.push(arguments);}  gtag('js', new Date());  gtag('config', 'G-3K20E0SHZV');",
          }}
        />
      </head>
      <body className={changeFont}>
        <noscript
          dangerouslySetInnerHTML={{
            __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-MZXW593X"
            height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
          }}
        />
        <Header lang={lang} params={params} />
        {children}
        <Footer params={params} lang={lang} />
      </body>
    </html>
  );
}
