"use client";
import { motion } from 'framer-motion';

import { useLanguage } from '@/context/LanguageContext';

export default function Services() {
  const { t } = useLanguage();
  return (
    <section className="py-24 bg-transparent relative overflow-hidden z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center md:text-left mb-16 flex flex-col md:flex-row justify-between items-end gap-6 glass-card p-8 rounded-3xl"
        >
           <div>
             <span className="text-dragon_red font-accent font-bold tracking-[0.2em] text-xs uppercase opacity-80">{t('services.tag')}</span>
             <h2 className="mt-4 text-4xl sm:text-5xl font-serif text-slate-900 leading-tight">{t('services.title1')} <span className="italic text-pearl_pink drop-shadow-sm font-light">{t('services.title2')}</span></h2>
           </div>
           <p className="max-w-lg text-slate-600 font-sans font-medium text-sm lg:text-base leading-relaxed">
             {t('services.desc')}
           </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {[0, 1, 2, 3].map((i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              viewport={{ once: true, margin: "-50px" }}
              className="glass-card p-10 lg:p-12 group hover:-translate-y-3 hover:shadow-[0_40px_80px_-20px_rgba(224,30,55,0.15)] hover:border-dragon_red/30 transition-all duration-500 rounded-[2.5rem] relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-dragon_red/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-pink-100 to-blue-50 flex items-center justify-center mb-8 shadow-inner border border-white relative z-10 group-hover:scale-110 transition-all duration-500">
                 <div className="w-4 h-4 bg-slate-800 rounded-sm rotate-45 group-hover:bg-dragon_red group-hover:shadow-[0_0_15px_rgba(224,30,55,0.4)] transition-all duration-500" />
              </div>
              <h3 className="font-serif text-2xl text-slate-900 mb-4 tracking-tight relative z-10 group-hover:text-dragon_red transition-colors duration-500">{t(`services.items.${i}.title`)}</h3>
              <p className="font-sans text-slate-600 leading-relaxed font-light relative z-10">{t(`services.items.${i}.desc`)}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
