'use client';

import Link from 'next/link';
import { NavigationButtons } from '@/components/component/navigation-buttons';
import { HeroLogin } from '@/components/component/hero-login';


export function Header() {
  const scrollToTop = (e) => {
    e.preventDefault(); // Previene el comportamiento por defecto del enlace
    window.scrollTo({
      top: 0, // Desplaza hacia el inicio de la página
      behavior: 'smooth' // Hace que el scroll sea suave
    });
  };

  return (
    <header 
      style={{ 
        backgroundColor: '#fdbeff', // Nuevo color de fondo más claro
        position: 'sticky',
        top: 0,
        zIndex: 50,
        width: '100%',
        textShadow: '0px 2px 3px rgba(0,0,0,0.1)',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
      }}
      className="text-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <div className="flex items-center space-x-3 group">
            <div className="p-2 bg-white shadow-md">
              <img src="/icon.png" alt="Icono Personalizado" className="w-15 h-12" />
            </div>
            <a onClick={scrollToTop} className="text-xl sm:text-2xl md:text-3xl font-extrabold cursor-pointer">
              Oasis Sentirse Bien
            </a>
          </div>
          <NavigationButtons />
          <HeroLogin />
        </div>
      </div>
    </header>
  );
}
