'use client'

import Link from 'next/link'
import { ShoppingCart } from 'lucide-react'
import { useCart } from '@/lib/cart-context'

export function HeaderComponent() {
  const { items } = useCart()

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-2 flex flex-col sm:flex-row justify-between items-center">
        <Link href="/" className="text-lg font-bold text-pink-600">
          Mi Tienda
        </Link>
        <Link href="/cart" className="relative">
          <ShoppingCart className="h-5 w-5 text-green-500" />
          {items.length > 0 && (
            <span className="absolute -top-2 -right-2 bg-pink-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
              {items.length}
            </span>
          )}
        </Link>
      </div>
    </header>
  );
}