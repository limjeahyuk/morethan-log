import Document, { Html, Head, Main, NextScript } from "next/document"
import { CONFIG } from "site.config"

class MyDocument extends Document {
  render() {
    return (
      <Html lang={CONFIG.lang}>
        <Head>
          {/* 기본 파비콘 설정 */}
          <link rel="icon" href="/favicon.ico" sizes="any" />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon-16x16.png"
          />

          {/* 애플 기기 (아이폰, 아이패드) 대응 */}
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/apple-touch-icon.png"
          />

          {/* 안드로이드 및 크롬 (PWA) 대응 - webmanifest 연결 */}
          <link rel="manifest" href="/site.webmanifest" />
          <meta name="theme-color" content="#ffffff" />

          {/* RSS 피드 (기존 유지) */}
          <link
            rel="alternate"
            type="application/rss+xml"
            title="RSS 2.0"
            href="/feed"
          />

          {/* Google Search Console 인증 (기존 유지) */}
          {CONFIG.googleSearchConsole.enable === true && (
            <meta
              name="google-site-verification"
              content={CONFIG.googleSearchConsole.config.siteVerification}
            />
          )}

          {/* Naver Search Advisor 인증 (기존 유지) */}
          {CONFIG.naverSearchAdvisor.enable === true && (
            <meta
              name="naver-site-verification"
              content={CONFIG.naverSearchAdvisor.config.siteVerification}
            />
          )}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
