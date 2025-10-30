/* eslint-disable @next/next/no-sync-scripts */
/* eslint-disable react/no-unknown-property */
import "@/styles/globals.scss";
import "@fortawesome/fontawesome-svg-core/styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { appWithTranslation } from "next-i18next";
import type { AppProps } from "next/app";
import dynamic from "next/dynamic";
import { Inter } from "next/font/google";
import Head from "next/head";
import { Router, useRouter } from "next/router";
import { InstantSearch, InstantSearchSSRProvider } from "react-instantsearch";
import { Intercom, LiveChatLoaderProvider } from "react-live-chat-loader";
import "../styles/Home.module.scss";
import Script from "next/script";
import { useEffect, useState } from "react";
import { AppContextType } from "next/dist/shared/lib/utils";
import QueryString from "qs";
import endpoints from "@/const/endpoints";
import App from "next/app";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Social from "@/components/layout/footer/Social";
import FooterV2 from "@/components/layout/footer/footerV2";

const Header = dynamic(() => import("@/components/layout/header/index"), {
  ssr: true,
});
const Footer = dynamic(() => import("@/components/layout/footer/footer"), {
  ssr: true,
});
const inter = Inter({ subsets: ["latin"] });

interface CustomProps {
  navbar?: any;
}
function MyApp({
  Component,
  pageProps,
  router,
  navbar,
}: AppProps & CustomProps) {
  const [name, setName] = useState<string | undefined>(undefined);
  const [email, setEmail] = useState<string | undefined>(undefined);
  const [phone, setPhone] = useState<string | undefined>(undefined);
  const language = router?.locale === "en" ? "en-US" : "vi-VN";
  const fetchData = () => {
    let host = typeof window !== "undefined" ? window.location.origin : "";
    let urlApi = "https://api.ichiba.vn";

    if (host != "https://ichiba.vn") {
      urlApi = "https://api.ichiba.net";
    }
    fetch(`${urlApi}/userinfo`, { credentials: "include" })
      ?.then((res) => res.json())
      .then((data) => {
        if (data) {
          setName(data?.name);
          setEmail(data?.email);
          setPhone(data?.phone);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);
  // const crypto = require("crypto");

  // const secretKey = "cBh83SkYqLbhoiiYnfP97RDu_kH-TudqxkjKTiHM"; // secret key (keep safe!)
  // const userIdentifier = email ? email : '' ; // user's email address

  // const hash = crypto
  //   .createHmac("sha256", secretKey)
  //   .update(userIdentifier as any)
  //   .digest("hex");
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            refetchOnWindowFocus: false,
          },
        },
      }),
  );

  const checkPrcingTable = router.pathname.includes("pricing-table");

  const metaContent = {
    en: [
      "IqPqL5oL9kqGRh7WA_Ia_lND0CKYr5cg3q0XZPDkTWE",
      "qJUilSBvuolLJsxAzMvn070oRGYZLkSs7qUxQexSn44",
    ],
    vi: [
      "XSA66doKGcIK3_mOQC1gxRPMgc7ZDrhV3qkPog6mlJU",
      "Uc3SrC32rHKXkqFUwmDiIBcSGCfnvhVUp2NmduIkDXQ",
    ],
  };

  return (
    <>
      <Head>
        <title>IChiba OnePlatform</title>
        <meta name="App" />
        {router?.locale === "en" &&
          metaContent.en.map((content) => (
            <meta
              key={content}
              name="google-site-verification"
              content={content}
            />
          ))}
        {router?.locale === "vi" &&
          metaContent.vi.map((content) => (
            <meta
              key={content}
              name="google-site-verification"
              content={content}
            />
          ))}

        {/* <meta
          name="google-site-verification"
          content="s0dnMw0eTCwC8WaUC59V62rX-dj2dCgWyH1EsHvFip0"
        /> */}
        <meta property="og:site_name" content="IChiba OnePlatform" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@IChibaOne" />
        <meta name="twitter:creator" content="@IChibaOne" />
        <link
          rel="canonical"
          href={
            router?.locale === "en"
              ? `https://ichiba.net${router.asPath}`
              : `https://ichiba.vn${router.asPath}`
          }
        />
        {router?.locale === "en" ? (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: `
                {
                  "@context": "https://schema.org",
                  "@type": "Organization",
                  "name": "IChiba OnePlatform",
                  "alternateName": "IChiba OnePlatform",
                  "url": "https://ichiba.net/",
                  "description": "The Best End-to-End Commerce Enablement Platform for Brand Commerces and Enterprise Businesses",
                  "disambiguatingDescription": "Leading ecosystem enabling e-commerce and fulfillment to create impactful values for retailers and supply chain businesses.",
                  "sameAs": [
                    "https://www.facebook.com/ichibaone.platform/",
                    "https://www.linkedin.com/company/ichibaone-platform/",
                    "https://www.youtube.com/@IChibaOne.Platform/",
                    "https://twitter.com/IChibaOne/"
                  ],
                  "email": "support@ichiba.net",
                  "logo": "https://ichiba.net/_next/static/media/Logo.77cef910.svg",
                  "image": "https://ichiba.net/_next/static/media/Logo.77cef910.svg",
                  "address": {
                    "@type": "PostalAddress",
                    "streetAddress": "470 North Bridge road, #05-12, Bugis Cube, Singapore",
                    "addressLocality": "Singapore",
                    "postalCode": "179100",
                    "addressCountry": "Singapore"
                  },
                  "foundingDate": "2016",
                  "contactPoint": {
                    "@type": "ContactPoint",
                    "email": "support@ichiba.net",
                    "contactType": "customer service",
                    "contactOption": "TollFree"
                  }
                }
          
      `,
            }}
          />
        ) : (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: `
      
                {
                  "@context": "https://schema.org",
                  "@type": "Organization",
                  "name": "IChiba OnePlatform",
                  "alternateName": "IChiba OnePlatform",
                  "url": "https://ichiba.vn/",
                  "description": "Nền tảng hỗ trợ thương mại điện tử toàn diện cho doanh nghiệp vừa và lớn",
                  "disambiguatingDescription": "IChiba OnePlatform - Hệ sinh thái công nghệ hàng đầu mang đến giải pháp thương mại điện tử toàn diện, giúp doanh nghiệp mở rộng tiềm năng trưởng thành.",
                  "sameAs": [
                    "https://www.facebook.com/ichibaone.platform/",
                    "https://www.linkedin.com/company/ichibaone-platform/",
                    "https://www.youtube.com/@IChibaOne.Platform/",
                    "https://twitter.com/IChibaOne/"
                  ],
                  "email": "support@ichiba.net",
                  "logo": "https://ichiba.vn/_next/static/media/Logo.77cef910.svg",
                  "image": "https://ichiba.vn/_next/static/media/Logo.77cef910.svg",
                  "address": {
                    "@type": "PostalAddress",
                    "streetAddress": "Số 8 Lê Quang Đạo, Phường Phú Đô, Quận Nam Từ Liêm",
                    "addressLocality": "Việt Nam",
                    "postalCode": "100000",
                    "addressCountry": "Việt Nam"
                  },
                  "foundingDate": "2016",
                  "contactPoint": {
                    "@type": "ContactPoint",
                    "email": "support@ichiba.net",
                    "contactType": "customer service",
                    "contactOption": "TollFree"
                  }
                }
          
    `,
            }}
          />
        )}
        <script
          id="google-tag-manager"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','${
              router?.locale === "en" ? "GTM-5CP9BGXK" : "GTM-MTBL3RW"
            }');`,
          }}
        />

        {router.pathname != "/pricing-table/commerce-layer" ? (
          <script
            type="text/javascript"
            dangerouslySetInnerHTML={{
              __html: `window.$crisp=[];window.CRISP_WEBSITE_ID="36913cf5-f1c3-4926-9928-976557c9d647";(function(){d=document;s=d.createElement("script");s.src="https://client.crisp.chat/l.js";s.async=1;d.getElementsByTagName("head")[0].appendChild(s);})();`,
            }}
          />
        ) : (
          ""
        )}

        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${
            router?.locale === "en" ? "GTM-5CP9BGXK" : "GTM-MTBL3RW"
          }`}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.ap3c=window.ap3c||{};var s,t,ap3c=window.ap3c;ap3c.cmd=ap3c.cmd||[],ap3c.cmd.push((function(){ap3c.init("ZUC871n9AhwlNNs7aWNoaWJhMg","https://capture-api-eu.ortto.app/"),ap3c.track({v:0})})),ap3c.activity=function(t){ap3c.act=ap3c.act||[],ap3c.act.push(t)},(s=document.createElement("script")).type="text/javascript",s.src="https://cdneu.net/app.js",(t=document.getElementsByTagName("script")[0]).parentNode.insertBefore(s,t);`,
          }}
        />
        <script id="scroll" src="/js/scroll.js" />
      </Head>

      <QueryClientProvider client={queryClient}>
        <div id="App" className={inter.className}>
          {!checkPrcingTable ? <Header {...navbar} /> : ""}

          <div>
            <Component {...pageProps} />
          </div>
          <Social />

          {!checkPrcingTable ? <FooterV2 /> : ""}
          <Script src="https://sp.zalo.me/plugins/sdk.js" />
          {router?.locale !== "en" && (
            <div
              className="zalo-chat-widget !tw-bottom-[90px] !tw-right-5 lg:tw-block tw-hidden"
              data-oaid="890265522282252483"
              data-welcome-message="Rất vui khi được hỗ trợ bạn!"
              data-autopopup="10"
              data-width="365"
              data-height="375"
            ></div>
          )}
        </div>
      </QueryClientProvider>
      <noscript
        dangerouslySetInnerHTML={{
          __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=${
            router?.locale === "en" ? "GTM-5CP9BGXK" : "GTM-MTBL3RW"
          }" height="0" width="0" style="display: none; visibility: hidden;" />`,
        }}
      />
    </>
  );
}

MyApp.getInitialProps = async (appContext: AppContextType<Router>) => {
  const fetchHeader = async () => {
    const params = QueryString.stringify(
      {
        populate: "deep",
        locale: appContext.ctx.locale,
      },
      { encodeValuesOnly: true },
    );
    const data = await fetch(`${endpoints.navbarv2}?${params}`)
      ?.then((res) => res.json())
      .catch((err) => {
        console.log(err);
      });

    return data?.data?.attributes;
  };
  const navbar = await fetchHeader();
  const appProps = await App.getInitialProps(appContext);

  return { ...appProps, navbar };
};
export default appWithTranslation(MyApp);
