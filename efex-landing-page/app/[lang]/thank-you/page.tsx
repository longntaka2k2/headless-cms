import { getDictionary } from "@/app/getDictionary";
import ThankYouCPN from "@/components/efex-fulfillment/thank-you/page";
import { Metadata } from "next";

type Props = {
  params: { lang: string };
};
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const lang = await getDictionary(params.lang ? params.lang : "en");
  return {
    title: lang?.meta?.thankYou?.title,
    description: lang?.meta?.thankYou?.des,
  };
}

const ThankYouEFEXFulfillment = async ({
  params,
}: {
  params: {
    lang: string;
    slug: string;
  };
}) => {
  const lang = await getDictionary(params.lang ? params.lang : "en");
  return (
    <html>
      <head>
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
            fbq('track', 'ThankYou');
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
      </head>

      <body>
        <noscript
          dangerouslySetInnerHTML={{
            __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-P4QL3Z53"
            height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
          }}
        />
        <ThankYouCPN lang={lang} params={params.lang} />
      </body>
    </html>
  );
};
export default ThankYouEFEXFulfillment;
