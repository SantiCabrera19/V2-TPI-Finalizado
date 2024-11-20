import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="es">
      <Head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        <meta name="theme-color" content="#fdbeff" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="application-name" content="Spa Sentirse Bien" />
        <meta name="description" content="Spa y centro de bienestar" />
        
        
        {/* iOS support */}
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-title" content="Spa Sentirse Bien" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <link rel="apple-touch-icon" href="/LogoTPI-192x192.png" />
        <link rel="apple-touch-icon" sizes="152x152" href="/LogoTPI-192x192.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/LogoTPI-192x192.png" />
        <link rel="apple-touch-icon" sizes="167x167" href="/LogoTPI-192x192.png" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}