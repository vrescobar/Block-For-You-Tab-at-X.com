"use strict";
(() => {
    // Flag para prevenir múltiples clicks simulados en la pestaña "Following"
    let hasSwitched = false;
    /**
     * Encuentra todos los elementos de pestaña usando el selector preciso.
     * La primera ocurrencia (índice 0) se asume que es la pestaña "For You",
     * y la segunda (índice 1) se asume que es la pestaña "Following".
     */
    function updateTabs() {
        const tabs = document.querySelectorAll('a[href="/home"][role="tab"]');
        // Si hay menos de dos pestañas coincidentes, no hay nada que hacer aún.
        if (tabs.length < 2) {
            return false;
        }
        // Ocultar la primera pestaña ("For You").
        tabs[0].style.display = 'none';
        // Si estamos en la línea de tiempo "For You" (es decir, la URL es "/home") y no hemos cambiado aún,
        // simular un clic en la segunda pestaña ("Following").
        if (!hasSwitched && (globalThis.location.pathname === '/home' || globalThis.location.pathname === '/home/')) {
            tabs[1].click();
            hasSwitched = true;
        }
        return true;
    }
    /**
     * Inicializa el proceso:
     * 1. Intenta actualizar las pestañas inmediatamente.
     * 2. Configura un MutationObserver para manejar cualquier cambio dinámico en el DOM.
     */
    function init() {
        // Intentar actualizar las pestañas inmediatamente.
        updateTabs();
        // Observar cambios en el DOM para verificar y actualizar las pestañas continuamente.
        const observer = new MutationObserver(() => {
            updateTabs();
        });
        observer.observe(document.body, { childList: true, subtree: true });
    }
    // Ejecutar la función init() cuando el DOM esté completamente cargado.
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    }
    else {
        init();
    }
})();
