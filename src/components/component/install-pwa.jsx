'use client';
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";

export function InstallPWA() {
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [showInstallButton, setShowInstallButton] = useState(false);
  const [isIOS, setIsIOS] = useState(false);
  const [isStandalone, setIsStandalone] = useState(false);

  useEffect(() => {
    // Detectar si es iOS
    const isIOSDevice = /iPad|iPhone|iPod/.test(navigator.userAgent);
    setIsIOS(isIOSDevice);

    // Detectar si ya está instalada
    const isStandaloneMode = 
      window.matchMedia('(display-mode: standalone)').matches ||
      window.navigator.standalone ||
      document.referrer.includes('android-app://');
    
    setIsStandalone(isStandaloneMode);

    const handleBeforeInstallPrompt = (e) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setShowInstallButton(true);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    
    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    };
  }, []);

  const handleInstallClick = async () => {
    if (!deferredPrompt) return;

    try {
      deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;
      console.log(`User response to the install prompt: ${outcome}`);
      
      if (outcome === 'accepted') {
        setIsStandalone(true);
      }
    } catch (error) {
      console.error('Error al intentar instalar:', error);
    } finally {
      setDeferredPrompt(null);
      setShowInstallButton(false);
    }
  };

  // No mostrar el botón si ya está instalada o no es instalable
  if (isStandalone || (!showInstallButton && !isIOS)) return null;

  return (
    <Button
      onClick={handleInstallClick}
      className="fixed bottom-4 right-4 bg-primary text-white shadow-lg z-50"
    >
      {isIOS ? "Instalar desde Safari" : "Instalar App"}
    </Button>
  );
}