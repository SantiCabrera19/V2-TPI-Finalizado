(function() {
    function isStandalone() {
      return (
        window.navigator.standalone || // iOS
        window.matchMedia('(display-mode: standalone)').matches || // Android/Chrome
        window.matchMedia('(display-mode: fullscreen)').matches ||
        window.matchMedia('(display-mode: minimal-ui)').matches
      );
    }
  
    function forceStandalone() {
      if (!isStandalone()) {
        const currentUrl = window.location.href;
        const standaloneUrl = new URL(currentUrl);
        standaloneUrl.searchParams.set('mode', 'standalone');
        
        // Crear un elemento para mostrar instrucciones
        const overlay = document.createElement('div');
        overlay.style.cssText = `
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.9);
          color: white;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 20px;
          text-align: center;
          z-index: 9999;
        `;
        
        overlay.innerHTML = `
          <h2 style="margin-bottom: 20px;">Para una mejor experiencia</h2>
          <p>Por favor, instala la aplicación:</p>
          <p style="margin: 10px 0;">
            En Chrome (Android): Toca el menú (⋮) y selecciona "Añadir a pantalla de inicio"<br>
            En Safari (iOS): Toca el botón compartir y selecciona "Añadir a pantalla de inicio"
          </p>
        `;
        
        document.body.appendChild(overlay);
      }
    }
  
    // Ejecutar cuando el DOM esté listo
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', forceStandalone);
    } else {
      forceStandalone();
    }
  })();