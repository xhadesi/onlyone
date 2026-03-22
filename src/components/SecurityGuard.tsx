"use client";
import { useEffect } from 'react';

export default function SecurityGuard() {
  useEffect(() => {
    // Bloquer le clic droit (enregistrer l'image)
    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault();
    };

    // Bloquer les raccourcis de développement, d'impression et de capture
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'F12' || e.key === 'PrintScreen') {
        e.preventDefault();
      }
      if ((e.ctrlKey || e.metaKey) && e.shiftKey && ['i', 'c', 'j', 's'].includes(e.key.toLowerCase())) {
        e.preventDefault();
      }
      if ((e.ctrlKey || e.metaKey) && ['u', 's', 'p'].includes(e.key.toLowerCase())) { // 'p' for Print
        e.preventDefault();
      }
    };

    // Intercepter la touche Impéc (PrintScreen) et vider le presse-papier
    const handleKeyUp = (e: KeyboardEvent) => {
      if (e.key === 'PrintScreen') {
        e.preventDefault();
        try {
          navigator.clipboard.writeText("La capture de nos modèles est strictement prohibée - OnlyOne Agency");
        } catch (err) {}
      }
    };

    // Bloquer le glisser-déposer globalement sur les images
    const handleDragStart = (e: DragEvent) => {
      if (e.target && (e.target as HTMLElement).tagName.toLowerCase() === 'img') {
        e.preventDefault();
      }
    };

    // Obfuscation d'écran (Anti Snipping-Tool / Alt-Tab)
    // Quand l'outil de capture Windows/Mac s'ouvre, la fenêtre perd le focus (blur). On floute alors toute la page !
    const handleVisibilityChange = () => {
      if (document.hidden) {
        document.body.style.filter = "blur(20px) grayscale(100%) opacity(0)";
      } else {
        document.body.style.filter = "none";
      }
    };

    const handleWindowBlur = () => {
      document.body.style.filter = "blur(20px) grayscale(100%) opacity(0)";
    };

    const handleWindowFocus = () => {
      document.body.style.filter = "none";
    };

    document.addEventListener('contextmenu', handleContextMenu);
    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('keyup', handleKeyUp);
    document.addEventListener('dragstart', handleDragStart);
    document.addEventListener('visibilitychange', handleVisibilityChange);
    window.addEventListener('blur', handleWindowBlur);
    window.addEventListener('focus', handleWindowFocus);

    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('keyup', handleKeyUp);
      document.removeEventListener('dragstart', handleDragStart);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      window.removeEventListener('blur', handleWindowBlur);
      window.removeEventListener('focus', handleWindowFocus);
      document.body.style.filter = "none";
    };
  }, []);

  return null; // Composant complètement invisible
}
