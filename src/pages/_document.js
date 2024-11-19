import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="es">
      <Head>
        <link rel="manifest" href="manifest.json" />
        <meta name="theme-color" content="#000000" />
        <meta name="description" content="Tienda de productos informáticos" />
        
        {/* Soporte para iOS */}
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black" />
        <meta name="apple-mobile-web-app-title" content="TPI" />
        <link rel="apple-touch-icon" href="/LogoTPI-192x192.png" />
        
        {/* Soporte para Windows */}
        <meta name="msapplication-TileImage" content="/LogoTPI-512x512.png" />
        <meta name="msapplication-TileColor" content="#000000" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}