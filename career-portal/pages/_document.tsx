import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>      
          <meta property="og:ur" content="https://careers.ichiba.net" />
          <meta name="google-site-verification" content="vscQWSI_ev-i_5zVpOQTEOuy0S2evHq6Lh1OR5Jij_0" />
          <script
                    dangerouslySetInnerHTML={{
                        __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                        })(window,document,'script','dataLayer','GTM-WF2FK2K');`,
                    }}
                />
        </Head>
        <body>
          
          <Main />
          <NextScript />
           <noscript
                dangerouslySetInnerHTML={{
                    __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-WF2FK2K" height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
                }}
            />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
