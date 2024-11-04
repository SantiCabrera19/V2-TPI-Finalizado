'use client';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export function CommentForm({ onCommentSubmit }) {
  const [contenido, setContenido] = useState('');
  const [clienteId, setClienteId] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      const userData = JSON.parse(atob(token.split('.')[1]));
      setClienteId(userData.id);
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/comments', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          cliente_id: clienteId,
          contenido,
        }),
      });

      if (!response.ok) {
        throw new Error('Error al enviar el comentario');
      }

      setContenido('');
      onCommentSubmit();
    } catch (error) {
      console.error('Error al enviar el comentario:', error);
    }
  };

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="mb-8 bg-white rounded-lg shadow-md p-6"
      onSubmit={handleSubmit}
    >
      <textarea
        value={contenido}
        onChange={(e) => setContenido(e.target.value)}
        className="w-full p-4 border rounded-lg focus:ring-2 focus:ring-[#FF5D8F] focus:border-transparent"
        placeholder="Escribe tu comentario..."
        rows="4"
        required
      />
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="mt-4 px-6 py-2 bg-[#FF5D8F] text-white rounded-lg hover:bg-[#ff4783] disabled:opacity-50"
        type="submit"
      >
        Publicar Comentario
      </motion.button>
    </motion.form>
  );
}
