"use client";
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';


export default function FAQ() {
  const { t } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-transparent relative z-20 overflow-hidden">
      
      {/* Decorative Blur Backgrounds */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-pink-100/30 blur-[100px] rounded-full pointer-events-none -z-10" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-red-50/20 blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <span className="text-dragon_red font-bold tracking-[0.2em] font-sans text-xs uppercase bg-red-50 px-4 py-2 rounded-full border border-red-100">
            {t('faq.tag')}
          </span>
          <h2 className="mt-8 text-4xl sm:text-5xl font-serif text-slate-900 leading-tight">
            {t('faq.title1')} <br/><span className="italic text-dragon_red">{t('faq.title2')}</span>.
          </h2>
        </motion.div>

        <div className="space-y-5">
          {[0, 1, 2, 3].map((i) => {
            const isOpen = openIndex === i;
            return (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`glass-card rounded-3xl overflow-hidden cursor-pointer transition-all duration-300 border-2 ${isOpen ? 'border-dragon_red/20 shadow-[0_15px_40px_-10px_rgba(225,29,72,0.1)]' : 'border-slate-900/5 hover:border-slate-900/10'}`}
                onClick={() => setOpenIndex(isOpen ? null : i)}
              >
                  <div className={`px-6 sm:px-10 py-6 sm:py-8 flex justify-between items-center transition-colors ${isOpen ? 'bg-white/80' : 'bg-white/40'}`}>
                    <h4 className={`font-sans font-bold pr-4 text-sm sm:text-lg transition-colors ${isOpen ? 'text-dragon_red' : 'text-slate-900'}`}>
                       {t(`faq.items.${i}.q`)}
                    </h4>
                    <div className={`w-8 h-8 sm:w-10 sm:h-10 shrink-0 rounded-full flex items-center justify-center transition-all duration-300 text-lg sm:text-xl font-light ${isOpen ? 'bg-dragon_red text-white rotate-180' : 'bg-slate-100 text-slate-500'}`}>
                       {isOpen ? '−' : '+'}
                    </div>
                  </div>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div 
                        initial={{ height: 0, opacity: 0 }} 
                        animate={{ height: 'auto', opacity: 1 }} 
                        exit={{ height: 0, opacity: 0 }}
                        className="px-6 sm:px-10 bg-white/50 border-t border-slate-900/5"
                      >
                        <p className="py-6 sm:py-8 font-sans text-slate-600 font-medium leading-relaxed text-sm sm:text-[15px]">
                            {t(`faq.items.${i}.a`)}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  );
}
