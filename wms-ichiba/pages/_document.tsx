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
          href="/icons/LogoFavicon.png"
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
