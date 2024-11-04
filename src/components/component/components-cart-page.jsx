'use client';
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Trash2, Plus, Minus } from 'lucide-react'
import { Button } from "@/components/ui/button"

export function CartPageComponent({
  items = [],
  updateQuantity,
  removeItem
}) {
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0)

  return (
    (<div className="min-h-screen bg-[#FFF5F8] py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-[#FF5D8F] mb-8 text-center">Mi Carrito</h1>
        {items.length === 0 ? (
          <div className="text-center">
            <p className="text-gray-600 mb-4">Tu carrito está vacío</p>
            <Link
              href="/products"
              className="text-[#4CAF50] hover:text-[#45a049] font-semibold">
              Continuar comprando
            </Link>
          </div>
        ) : (
          <>
            <div className="grid gap-6">
              {items.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-lg shadow-md p-4 flex items-center">
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={80}
                    height={80}
                    className="rounded-md" />
                  <div className="ml-4 flex-grow">
                    <h2 className="text-lg font-semibold text-[#FF5D8F]">{item.name}</h2>
                    <p className="text-[#4CAF50] font-bold">${item.price.toFixed(2)}</p>
                    <div className="flex items-center mt-2">
                      <Button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        disabled={item.quantity <= 1}
                        className="bg-[#FFF5F8] text-[#FF5D8F] p-1 rounded-full hover:bg-[#FFE5EE]">
                        <Minus className="h-4 w-4" />
                      </Button>
                      <span className="mx-2 font-semibold">{item.quantity}</span>
                      <Button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="bg-[#FFF5F8] text-[#FF5D8F] p-1 rounded-full hover:bg-[#FFE5EE]">
                        <Plus className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                  <Button
                    onClick={() => removeItem(item.id)}
                    className="bg-red-100 text-red-600 p-2 rounded-full hover:bg-red-200">
                    <Trash2 className="h-5 w-5" />
                  </Button>
                </div>
              ))}
            </div>
            <div className="mt-8 bg-white rounded-lg shadow-md p-6">
              <div className="flex justify-between items-center mb-4">
                <span className="text-lg font-semibold">Subtotal:</span>
                <span className="text-lg font-bold text-green-500">${total.toFixed(2)}</span>
              </div>
              <div className="flex justify-between items-center mb-4">
                <span className="text-lg font-semibold">Envío:</span>
                <span className="text-lg font-bold text-green-500">Gratis</span>
              </div>
              <div className="border-t pt-4">
                <div className="flex justify-between items-center">
                  <span className="text-xl font-semibold">Total:</span>
                  <span className="text-xl font-bold text-green-500">${total.toFixed(2)}</span>
                </div>
              </div>
              <Button
                className="w-full mt-6 bg-[#4CAF50] hover:bg-[#45a049] text-white font-bold py-3 px-4 rounded">
                Proceder al pago
              </Button>
            </div>
            <div className="mt-6 text-center">
              <Link
                href="/products"
                className="text-[#4CAF50] hover:text-[#45a049] font-semibold">
                Continuar comprando
              </Link>
            </div>
          </>
        )}
      </div>
    </div>)
  );
}