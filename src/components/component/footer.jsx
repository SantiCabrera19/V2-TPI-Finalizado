'use client'

import Link from 'next/link'
import { Instagram, Twitter, Facebook } from 'lucide-react'

export function Footer() {
  return (
    (<footer
      className="w-full bg-gradient-to-r from-pink-100 via-pink-200 to-pink-100 text-gray-800 shadow-lg">
      <div className="container mx-auto px-4 py-6 sm:px-6 lg:px-8">
        <div
          className="flex flex-col items-center justify-between space-y-4 sm:flex-row sm:space-y-0">
          <div className="text-sm">
            © 2024 Spa Sentirse Bien. Todos los derechos reservados.
          </div>
          <div className="flex space-x-4 text-sm">
            <Link
              href="/politica-de-privacidad"
              className="hover:text-pink-600 transition-colors">
              Política de privacidad
            </Link>
            <Link
              href="/terminos-de-servicio"
              className="hover:text-pink-600 transition-colors">
              Términos de servicio
            </Link>
          </div>
          <div className="flex space-x-4">
            <Link
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-pink-600 transition-colors">
              <Instagram className="w-5 h-5" />
              <span className="sr-only">Instagram</span>
            </Link>
            <Link
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-pink-600 transition-colors">
              <Twitter className="w-5 h-5" />
              <span className="sr-only">Twitter</span>
            </Link>
            <Link
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-pink-600 transition-colors">
              <Facebook className="w-5 h-5" />
              <span className="sr-only">Facebook</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>)
  );
}