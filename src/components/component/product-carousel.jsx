'use client';
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'

const products = [
  { id: 1, name: "Aceite Esencial de Lavanda", description: "Relajante y calmante", image: "/producto.jpg" },
  { id: 2, name: "Sales de Baño de Rosas", description: "Hidratante y aromático", image: "/producto.jpg" },
  { id: 3, name: "Crema Facial de Aloe Vera", description: "Refrescante y nutritiva", image: "/producto.jpg" },
  { id: 4, name: "Vela de Masaje de Vainilla", description: "Relajante y sensual", image: "/producto.jpg" },
  { id: 5, name: "Exfoliante Corporal de Coco", description: "Suavizante y revitalizante", image: "/producto.jpg" },
  { id: 6, name: "Mascarilla de Arcilla Verde", description: "Purificante y tonificante", image: "/producto.jpg" },
]


export function ProductCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)

  const nextProducts = () => {
    setDirection(1)
    setCurrentIndex((prevIndex) => (prevIndex + 3) % products.length)
  }

  const prevProducts = () => {
    setDirection(-1)
    setCurrentIndex((prevIndex) => (prevIndex - 3 + products.length) % products.length)
  }

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  }

  return (
    (<div className="relative w-full max-w-6xl mx-auto my-12 px-4">
      <div className="absolute top-0 right-0">
        <Link href="/products">
          <Button className="bg-blue-500 text-white hover:bg-blue-600 py-2 px-4 rounded-lg transition-colors duration-300 !important">
            Ver más productos
          </Button>
        </Link>
      </div>
      <div className="flex justify-between items-center mt-16">
        <Button
          onClick={prevProducts}
          className="bg-pink-500 text-white hover:bg-pink-600 h-12">
          <ChevronLeft className="h-6 w-6" />
        </Button>
        <div className="flex justify-center overflow-hidden">
          <AnimatePresence custom={direction} initial={false}>
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ type: 'tween', duration: 0.5 }}
              className="flex space-x-8">
              {products.slice(currentIndex, currentIndex + 3).map((product) => (
                <div
                  key={product.id}
                  className="w-64 bg-white rounded-lg shadow-md overflow-hidden flex-shrink-0">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-cover" />
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">{product.name}</h3>
                    <p className="text-sm text-gray-600 mb-4">{product.description}</p>
                    <p className="text-lg font-bold text-pink-600">$3.99</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
        <Button
          onClick={nextProducts}
          className="bg-pink-500 text-white hover:bg-pink-600 h-12">
          <ChevronRight className="h-6 w-6" />
        </Button>
      </div>
    </div>)
  );
}