import { getDictionary } from "@/app/getDictionary";
import ThankyouComponent from "@/components/thank-you/page";

import { Metadata } from "next";

type Props = {
  params: { lang: string };
};
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const lang = await getDictionary(params.lang ? params.lang : "en");
  const link = `https://efex.vn/${params.lang}/thank-you`;
  return {
    title: lang?.meta?.thankYou?.title,
    description: lang?.meta?.thankYou?.des,
    alternates: { canonical: link },
    openGraph: {
      type: "website",
      url: link,
      title: lang?.meta?.thankYou?.title,
      description: lang?.meta?.thankYou?.des,
      siteName: "EFEX",
      images: [
        {
          url: "https://strapi-efex.ichiba.net/uploads/image_835_1_40836254e9.png",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      site: "@EfexVietnam",
      creator: "@EfexVietnam",
      images:
        "https://strapi-efex.ichiba.net/uploads/image_835_1_40836254e9.png",
      title: lang?.meta?.thankYou?.title,
      description: lang?.meta?.thankYou?.des,
    },
  };
}

const ThankYou = async ({
  params,
}: {
  params: {
    lang: string;
    slug: string;
  };
}) => {
  const lang = await getDictionary(params.lang ? params.lang : "en");
  return (
    <>
      <head>
        <meta name="robots" content="noindex,nofollow" />
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
            fbq('init', '452204876853625');
            fbq('track', 'PageView');
            fbq('track', 'thankyou');
          `,
          }}
        />
        <noscript
          dangerouslySetInnerHTML={{
            __html: `<img height="1" width="1" style="display:none"
            src="https://www.facebook.com/tr?id=452204876853625&ev=PageView&noscript=1"
            />
          `,
          }}
        />
      </head>
      <ThankyouComponent lang={lang} params={params.lang} />
    </>
  );
};
export default ThankYou;
