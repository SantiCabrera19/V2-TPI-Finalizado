'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useCart } from '@/lib/cart-context';

export function ProductCard({
  name,
  price,
  description,
  servicio_id
}) {
  const { addItem } = useCart();

  const handleAddToCart = () => {
    addItem({
      id: servicio_id,
      name,
      price: parseFloat(price),
      description
    });
  };

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className="bg-white rounded-lg shadow-lg overflow-hidden"
    >
      <div className="relative h-48 overflow-hidden">
        <Image
          src="/producto.jpg"
          alt={name}
          fill
          className="object-cover transition-transform duration-300 hover:scale-110"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-[#FF5D8F]">{name}</h3>
        <p className="mt-1 text-gray-500 line-clamp-2">{description}</p>
        <div className="mt-4 flex items-center justify-between">
          <span className="text-xl font-bold text-[#4CAF50]">
            ${parseFloat(price).toFixed(2)}
          </span>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleAddToCart}
            className="px-4 py-2 bg-[#FF5D8F] text-white rounded-md hover:bg-[#ff4783] transition-colors duration-200"
          >
            Agregar al Carrito
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}