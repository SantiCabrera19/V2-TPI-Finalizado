'use client';
import React from 'react'

export function ProductGridComponent({
  children
}) {
  return (
    <div className="min-h-screen w-full bg-[#FFF5F8] py-8 flex-1 relative z-0">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-[#FF5D8F] mb-8 text-center">Nuestros Productos</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {children}
        </div>
      </div>
    </div>
  );
}