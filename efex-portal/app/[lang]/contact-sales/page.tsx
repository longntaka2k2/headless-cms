import { getDictionary } from "@/app/getDictionary";
import EzImage from "@/components/commons/EzImage";
import ContactSalesComponent from "@/components/contact-sale/page";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { ResolvingMetadata, Metadata } from "next";
import Link from "next/link";

type Props = {
  params: { lang: string };
};
export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const lang = await getDictionary(params.lang ? params.lang : "en");
  const link = `https://efex.vn/${params.lang}/contact-sales`;
  return {
    title: lang?.meta?.contactSale?.title,
    description: lang?.meta?.contactSale?.des,
    alternates: { canonical: link },
    openGraph: {
      type: "website",
      url: link,
      title: lang?.meta?.contactSale?.title,
      description: lang?.meta?.contactSale?.des,
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
      title: lang?.meta?.ecomm?.title,
      description: lang?.meta?.ecomm?.des,
    },
  };
}

const ContactSales = async ({
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
        <script
          dangerouslySetInnerHTML={{
            __html: `
          document.getElementById('SendRequestButton').addEventListener('click', function() {
            fbq('track', 'SendRequest_Button');
          });
        `,
          }}
        />
      </head>
      <ContactSalesComponent
        lang={lang}
        params={params.lang}
        id="SendRequestButton"
      />
    </>
  );
};
export default ContactSales;
