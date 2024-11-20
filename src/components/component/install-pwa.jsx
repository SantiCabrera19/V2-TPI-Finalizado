'use client';
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";

export function InstallPWA() {
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [showInstallButton, setShowInstallButton] = useState(false);

  useEffect(() => {
    window.addEventListener('beforeinstallprompt', (e) => {
      // Prevenir que Chrome muestre el prompt automático
      e.preventDefault();
      // Guardar el evento para usarlo después
      setDeferredPrompt(e);
      setShowInstallButton(true);
    });
  }, []);

  const handleInstallClick = async () => {
    if (!deferredPrompt) return;

    // Mostrar el prompt de instalación
    deferredPrompt.prompt();
    
    // Esperar la respuesta del usuario
    const { outcome } = await deferredPrompt.userChoice;
    
    // Limpiar el prompt guardado
    setDeferredPrompt(null);
    setShowInstallButton(false);
  };

  if (!showInstallButton) return null;

  return (
    <Button
      onClick={handleInstallClick}
      className="fixed bottom-4 right-4 bg-primary text-white shadow-lg"
    >
      Instalar App
    </Button>
  );
}