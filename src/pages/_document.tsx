import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import createEmotionServer from '@emotion/server/create-instance';

const getCache = () => {
  const cache = createCache({ key: 'css', prepend: true });
  cache.compat = true;

  return cache;
};

export default class MyDocument extends Document {
  render(): JSX.Element {
    return (
      <Html lang="en">
        <Head>
          <meta charSet="utf-8" />
          <meta
            name="naver-site-verification"
            content="ed9736420ea3c4523e7ed8bcedad4946b3023862"
          />
          <link
            rel="stylesheet"
            as="style"
            crossOrigin="true"
            href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.8/dist/web/static/pretendard-jp-dynamic-subset.css"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Do+Hyeon&display=swap"
            rel="stylesheet"
          />
          <link rel="icon" href="/favicon.ico" />
          <link rel="canonical" href="https://jp.brgcard.com" />
          <link rel="manifest" href="/manifest.json" />
          <meta name="theme-color" content="#000000" />
          <meta
            name="description"
            content="Trading card service platform / break grading(brg)"
          />
          <meta
            name="keywords"
            content="break, brg, brggrading, breakncompany, brg그레이딩, 비알지, 비알쥐, brg카드, brg등급, 그레이딩,
            카드그레이딩, 그레이딩카드, 등급카드, 카드등급, 트레이딩카드, 포켓몬카드, 스포츠카드, 유희왕카드, 디지몬카드,
            TCG카드, 포켓몬카드그레이딩, 포켓몬카드등급, 등급회사, TCG, Trading card, Trading card game, brg10, brg9"
          />
          {process.env.NEXT_PUBLIC_ENV !== 'production' ? (
            <meta name="robots" content="none" />
          ) : (
            <meta
              name="robots"
              content="max-snippet:-1, max-image-preview:large, max-video-preview:-1"
            />
          )}
          <meta property="og:title" content="break │ brg grading" />
          <meta
            property="og:description"
            content="Trading card service platform / break grading(brg)"
          />
          <meta property="og:image" content="/og.png" />
          <link rel="apple-touch-icon" href="/logo192.png" />
          <meta property="og:url" content="https://jp.brgcard.com" />
          <meta property="twitter:image" content="/og.png" />
          <meta property="twitter:card" content="/og.png" />
          <meta property="twitter:title" content="break │ brg grading" />
          <meta
            property="twitter:description"
            content="Trading card service platform / break grading(brg)"
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

/**
 * @see https://mui.com/guides/server-rendering
 * @remarks emotion 10버전 이상부터는 ssr 이 자동적용이 되어서 이부분이 굳이 필요는 없지만 일단 놔뒀습니다.
 */

// `getInitialProps` belongs to `_document` (instead of `_app`),
// it's compatible with static-site generation (SSG).
MyDocument.getInitialProps = async (ctx) => {
  // Resolution order
  //
  // On the server:
  // 1. app.getInitialProps
  // 2. page.getInitialProps
  // 3. document.getInitialProps
  // 4. app.render
  // 5. page.render
  // 6. document.render
  //
  // On the server with error:
  // 1. document.getInitialProps
  // 2. app.render
  // 3. page.render
  // 4. document.render
  //
  // On the client
  // 1. app.getInitialProps
  // 2. page.getInitialProps
  // 3. app.render
  // 4. page.render

  // Render app and page and get the context of the page with collected side effects.
  const originalRenderPage = ctx.renderPage;

  const cache = getCache();
  const { extractCriticalToChunks } = createEmotionServer(cache);

  ctx.renderPage = () =>
    originalRenderPage({
      // Take precedence over the CacheProvider in our custom _app.js
      enhanceComponent: (Component) =>
        function test(props) {
          return (
            <CacheProvider value={cache}>
              <Component {...props} />
            </CacheProvider>
          );
        },
    });

  const initialProps = await Document.getInitialProps(ctx);

  return {
    ...initialProps,
    // Styles fragment is rendered after the app and page rendering finish.
    styles: [...React.Children.toArray(initialProps.styles)],
  };
};
