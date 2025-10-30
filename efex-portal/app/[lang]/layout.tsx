/* eslint-disable @next/next/next-script-for-ga */
import "@/app/styles/global.scss";
import Footer from "@/components/commons/Footer";
import Header from "@/components/commons/Header";
import { Inter, Lora } from "next/font/google";
// import "@/app/globals.css";
import "swiper/css";
import "swiper/css/pagination";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { getDictionary } from "../getDictionary";
import clsx from "clsx";
import { ResolvingMetadata, Metadata } from "next";
import { Props } from "react-svg";
import Social from "@/components/home/Social";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });
const lora = Lora({ subsets: ["cyrillic", "latin"], variable: "--font--lora" });
export async function generateMetadata(
  {}: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  return {
    verification: {
      google: "AcejthRkifcKiuwVlpLyjGNiMIxCzybDmJlgFdKyfek",
    },
  };
}
export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: any;
}) {
  const lang = await getDictionary(params.lang ? params.lang : "en");
  return (
    <html lang={params.lang}>
      <head>
        <meta
          name="google-site-verification"
          content="YPrdJfgsDHgZT3JpkTyLtHiVpkapzRko2fwONrHp15g"
        />
        <script
          id="google-tag-manager"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-WBBDZLL');`,
          }}
        />
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=GTM-WBBDZLL"
        ></Script>
      </head>
      <body className={clsx(inter.className, "text-ic-ink-6")}>
        <noscript
          dangerouslySetInnerHTML={{
            __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-WBBDZLL"
            height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
          }}
        />
        <Header lang={lang} />
        {children}
        <Footer params={params} />
        <Social locale={params.lang} />
      </body>
    </html>
  );
}
