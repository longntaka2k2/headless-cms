/* eslint-disable @next/next/next-script-for-ga */
import "@/app/styles/global.scss";
import Footer from "@/components/commons/footer";
import Header from "@/components/commons/header";
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
import QueryProvider from '../providers/query-provider';

const inter = Inter({ subsets: ["latin"] });

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
      <body className={clsx(inter.className, "text-ic-ink-6")}>
        <QueryProvider>
          <Header lang={lang.header} />
          {children}
          <Footer lang={lang.footer} />
        </QueryProvider>
        <div
          className="zalo-chat-widget !tw-bottom-[90px] !tw-right-5 lg:tw-block tw-hidden"
          data-oaid="890265522282252483"
          data-welcome-message="Rất vui khi được hỗ trợ bạn!"
          data-autopopup="10"
          data-width="365"
          data-height="375"
        ></div>
      </body>
    </html>
  );
}
