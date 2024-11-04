'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'

export function CommentsJsx() {
  return (
    <Link href="/comments" className="fixed bottom-4 right-4 z-50">
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="relative group"
      >
        <div className="w-16 h-12 bg-[#FF5D8F] rounded-2xl shadow-lg flex items-center justify-center cursor-pointer hover:bg-[#ff4783] transition-colors duration-300">
          <div className="flex space-x-2">
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0.5 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse", delay: i * 0.2 }}
                className="w-2 h-2 bg-black rounded-full"
              />
            ))}
          </div>
        </div>
        <div className="absolute -bottom-2 right-4 w-4 h-4 bg-[#FF5D8F] transform rotate-45 transition-colors duration-300 group-hover:bg-[#ff4783]"></div>
        <div className="absolute bottom-full right-0 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          <div className="bg-white px-3 py-1 rounded-lg shadow-md text-sm text-[#FF5D8F]">
            Ver comentarios
          </div>
        </div>
      </motion.div>
    </Link>
  );
}