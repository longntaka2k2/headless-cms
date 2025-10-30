import { AppProps } from "next/app";
import { Html, Head, Main, NextScript } from "next/document";

interface CustomProps {
  navbar?: any;
}

export default function Document({ router }: AppProps & CustomProps) {
  return (
    <Html>
      <Head>
        <link
          rel="shortcut icon"
          type="image/png"
          href="https://cms-strapi.ichiba.net/uploads/logo_Favicon_44a632ec95.png"
        />
        <link
          rel="icon"
          type="image/png"
          href="https://cms-strapi.ichiba.net/uploads/logo_Favicon_44a632ec95.png"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
          integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
        />
      </Head>
      <body>
        <Main />

        <NextScript />
      </body>
    </Html>
  );
}
