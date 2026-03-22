"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { Language } from "@/context/translations";

export default function LanguageModal() {
  const [isOpen, setIsOpen] = useState(false);
  const { setLang } = useLanguage();

  useEffect(() => {
    const handleOpen = () => setIsOpen(true);
    window.addEventListener('open-language-modal', handleOpen);

    // Show on first load if not seen
    const hasSeen = localStorage.getItem("lang_selected");
    if (!hasSeen) {
      setIsOpen(true);
    }
    
    return () => window.removeEventListener('open-language-modal', handleOpen);
  }, []);

  const selectLang = (lang: string) => {
    localStorage.setItem("lang_selected", "true");
    setLang(lang as Language);
    setIsOpen(false);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-900/20 backdrop-blur-md">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="bg-white rounded-[2rem] p-8 max-w-sm w-[90%] shadow-2xl border border-white/50 text-center relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-pink-100 rounded-full blur-3xl -z-10 opacity-50 translate-x-10 -translate-y-10" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-blue-100 rounded-full blur-3xl -z-10 opacity-50 -translate-x-10 translate-y-10" />
            
            <h2 className="font-serif text-2xl text-slate-900 mb-6 font-medium">Choisissez votre langue</h2>
            <div className="flex flex-col gap-3">
              {[
                { code: 'FR', label: 'Français 🇫🇷' },
                { code: 'EN', label: 'English 🇬🇧' },
                { code: 'ES', label: 'Español 🇪🇸' },
                { code: 'PT', label: 'Português 🇵🇹' }
              ].map(lang => (
                <button 
                  key={lang.code}
                  onClick={() => selectLang(lang.code)}
                  className="w-full py-4 rounded-xl bg-slate-50 hover:bg-white hover:shadow-md border border-slate-100 font-sans font-semibold text-slate-700 transition-all hover:border-pearl_pink flex items-center justify-center gap-2"
                >
                  {lang.label}
                </button>
              ))}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
