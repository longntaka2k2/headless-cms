/* eslint-disable @next/next/no-sync-scripts */
import "../styles/globals.scss";
import "../styles/Home.module.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import type { AppProps } from "next/app";
import dynamic from "next/dynamic";
import Head from "next/head";
import { appWithTranslation } from "next-i18next";
import { Inter } from "next/font/google";
import { Hydrate, QueryClient, QueryClientProvider } from "react-query";
import { useRouter } from "next/router";

const HeaderCarrer = dynamic(() => import("../components/layout/header"), {
  ssr: true,
});
const Footer = dynamic(() => import("../components/layout/footer"), {
  ssr: true,
});
const queryClient = new QueryClient();
const inter = Inter({ subsets: ["latin"] });

function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  return (
    <>
      <div>
        <div id="App" className={inter.className}>
          <Head>
            <meta name="App" />
            <meta
              name="google-site-verification"
              content="s0dnMw0eTCwC8WaUC59V62rX-dj2dCgWyH1EsHvFip0"
            />

            <link
              rel="shortcut icon"
              type="image/png"
              href="/icons/logoFaviion.png"
            />
          </Head>

          <HeaderCarrer />
          <div>
            <Component {...pageProps} />
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default appWithTranslation(App);
