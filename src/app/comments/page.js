'use client';
import { HeaderComponent } from "@/components/component/components-header";
import { Footer } from "@/components/component/footer";
import { useState, useEffect } from 'react';
import { CommentForm } from "@/components/component/comment-form";
import { motion } from "framer-motion";

export default function CommentsPage() {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchComments = async () => {
    try {
      const response = await fetch('/api/comments');
      if (!response.ok) {
        throw new Error('Error al cargar los comentarios');
      }
      const data = await response.json();
      setComments(Array.isArray(data) ? data : []);
    } catch (error) {
      console.error('Error fetching comments:', error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchComments();
  }, []);

  if (error) {
    return (
      <div className="min-h-screen flex flex-col bg-[#FFF5F8]">
        <HeaderComponent />
        <main className="flex-1 container mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold text-[#FF5D8F] mb-8 text-center">
            Comentarios de Nuestros Clientes
          </h1>
          <div className="text-center text-red-500">
            Error: {error}
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-[#FFF5F8]">
      <HeaderComponent />
      <main className="flex-1 container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-[#FF5D8F] mb-8 text-center">
          Comentarios de Nuestros Clientes
        </h1>
        <CommentForm onCommentSubmit={fetchComments} />
        {loading ? (
          <div className="text-center">Cargando comentarios...</div>
        ) : (
          <motion.div 
            className="grid gap-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {comments.map((comment) => (
              <motion.div
                key={comment.comentario_id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white rounded-lg shadow-md p-6"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-[#FF5D8F]">
                    {comment.nombre}
                  </h3>
                  <span className="text-sm text-gray-500">
                    {new Date(comment.fecha).toLocaleDateString()}
                  </span>
                </div>
                <p className="text-gray-700">{comment.contenido}</p>
              </motion.div>
            ))}
          </motion.div>
        )}
      </main>
      <Footer />
    </div>
  );
}
