import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="es">
      <Head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#fdbeff" />
        <meta name="description" content="Spa y centro de bienestar" />
        
        {/* Soporte mejorado para iOS */}
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Spa" />
        <link rel="apple-touch-icon" href="/LogoTPI-192x192.png" />
        <link rel="apple-touch-startup-image" href="/LogoTPI-512x512.png" />
        
        {/* Soporte para Windows */}
        <meta name="msapplication-TileImage" content="/LogoTPI-512x512.png" />
        <meta name="msapplication-TileColor" content="#fdbeff" />
        <meta name="msapplication-navbutton-color" content="#fdbeff" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}