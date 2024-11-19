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
        backgroundColor: '#fdbeff',
        position: 'sticky',
        top: 0,
        zIndex: 50,
        width: '100%',
        textShadow: '0px 2px 3px rgba(0,0,0,0.1)',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
      }}
      className="text-gray-800 overflow-x-hidden">
      <div className="container mx-auto px-2 sm:px-4">
        <div className="flex flex-col sm:flex-row items-center justify-between py-2 sm:py-0 space-y-2 sm:space-y-0">
          <div className="flex items-center space-x-2 sm:space-x-3 w-full sm:w-auto justify-center sm:justify-start">
            <div className="p-1 sm:p-2 bg-white shadow-md">
              <img src="/icon.png" alt="Icono Personalizado" className="w-8 h-8 sm:w-12 sm:h-10" />
            </div>
            <a onClick={scrollToTop} className="text-lg sm:text-xl md:text-2xl font-extrabold cursor-pointer truncate">
              Oasis Sentirse Bien
            </a>
          </div>
          <NavigationButtons />
          <div className="w-full sm:w-auto flex justify-center">
            <HeroLogin />
          </div>
        </div>
      </div>
    </header>
  );
}
