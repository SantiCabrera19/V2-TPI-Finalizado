'use client';
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";

export function InstallPWA() {
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [isIOS, setIsIOS] = useState(false);

  useEffect(() => {
    const isIOSDevice = /iPad|iPhone|iPod/.test(navigator.userAgent);
    setIsIOS(isIOSDevice);

    const handleBeforeInstallPrompt = (e) => {
      e.preventDefault();
      setDeferredPrompt(e);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    return () => window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
  }, []);

  const handleInstallClick = async () => {
    if (deferredPrompt) {
      try {
        deferredPrompt.prompt();
        const { outcome } = await deferredPrompt.userChoice;
        console.log(`User response to the install prompt: ${outcome}`);
      } catch (error) {
        console.error('Error al intentar instalar:', error);
      }
    } else {
      alert('Para instalar la app:\n\n' +
            '1. En Chrome: Busca el ícono de instalación en la barra de direcciones\n' +
            '2. En Safari iOS: Usa el botón "Compartir" y selecciona "Añadir a pantalla de inicio"');
    }
  };

  return (
    <Button
      onClick={handleInstallClick}
      className="fixed bottom-4 left-4 bg-primary text-white shadow-lg z-50"
    >
      {isIOS ? "Instalar desde Safari" : "Instalar App"}
    </Button>
  );
}