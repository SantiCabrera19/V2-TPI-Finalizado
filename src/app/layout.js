import { Inter } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/lib/cart-context";
import { InstallPWA } from "@/components/component/install-pwa";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Spa - Sentirse Bien",
  description: "Spa y centro de bienestar",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <CartProvider>
          {children}
          <InstallPWA />
        </CartProvider>
      </body>
    </html>
  );
}
