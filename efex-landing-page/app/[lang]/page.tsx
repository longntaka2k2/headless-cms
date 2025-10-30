import { Suspense } from "react";
import dynamic from "next/dynamic";
import { getDictionary } from "../getDictionary";
import { Metadata } from "next";
import Head from "next/head";

const EFEXFulfillmentCPN = dynamic(
  () => import("@/components/efex-fulfillment/page")
);

type Props = {
  params: { lang: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const lang = await getDictionary(params.lang ? params.lang : "en");
  return {
    title: lang?.meta?.home?.title,
    description: lang?.meta?.home?.des,
  };
}

const Home = async ({
  params,
}: {
  params: {
    lang: string;
    slug: string;
  };
}) => {
  const lang = await getDictionary(params.lang ? params.lang : "en");

  return (
    <Suspense fallback={<div></div>}>
      <Head>
        <link rel="canonical" href="https://fulfillment.efex.vn/vi" />
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '239676549190270');
            fbq('track', 'PageView');
          `,
          }}
        />
        <noscript
          dangerouslySetInnerHTML={{
            __html: `<img height="1" width="1" style="display:none"
            src="https://www.facebook.com/tr?id=239676549190270&ev=PageView&noscript=1"
            />
          `,
          }}
        />
      </Head>
      <EFEXFulfillmentCPN lang={lang} params={params.lang} />
    </Suspense>
  );
};

export default Home;
