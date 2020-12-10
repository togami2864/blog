import Document, { Html, Main, NextScript, Head } from "next/document";
import { GA_TRACKING_ID } from "../lib/gtag";
import { ServerStyleSheet } from "styled-components";

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }
  render() {
    return (
      <Html lang="ja">
        <Head>
          {/* Global Site Tag (gtag.js) - Google Analytics */}
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
            }}
          />
          <meta charSet="utf8" />
          <meta property="og:title" content="migatodev" />
          <meta property="og:site_name" content="migatodev" />
          <meta property="og:locale" content="ja_JP" />
          <meta
            name="og:description"
            content="見習いdeveloper 主にフロントエンドのブログ兼実験場"
          />
          <meta
            name="description"
            content="見習いdeveloper 主にフロントエンドのブログ兼実験場"
          />
          <meta property="og:url" content="https://pizapizahiza.dev" />
          <meta name="twitter:site" content="@migatodev" />
          <meta property="og:type" content="website" />
          <meta name="twitter:card" content="summary" />
          <meta
            property="og:image"
            content="https://pizapizahiza.dev/profile.jpg"
          />
          <meta
            name="twitter:image"
            content="https://pizapizahiza.dev/profile.png"
          />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Alata&display=swap"
            rel="preload"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
