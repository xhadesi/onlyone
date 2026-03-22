"use client";
import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';

export default function Onboarding() {
  const { t } = useLanguage();

  return (
    <section className="py-24 bg-transparent relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-dragon_red font-accent font-bold tracking-[0.3em] text-xs uppercase opacity-80">{t('onboarding.tag')}</span>
          <h2 className="mt-4 text-4xl sm:text-5xl font-serif text-slate-900 leading-tight">{t('onboarding.title1')} <span className="italic text-pearl_pink">{t('onboarding.title2')}</span></h2>
          <p className="mt-4 text-slate-600 font-sans max-w-2xl mx-auto text-sm sm:text-base">
            {t('onboarding.desc')}
          </p>
        </motion.div>

        <div className="relative mt-12 max-w-5xl mx-auto">
          {/* Timeline Line */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-dragon_red/20 via-pink-400/50 to-dragon_red/20 -translate-y-1/2 rounded-full" />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[0, 1, 2, 3].map((i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="relative z-10 flex flex-col items-center text-center group hover:-translate-y-2 transition-transform duration-500"
              >
                 <div className="w-16 h-16 rounded-full glass-card flex items-center justify-center border-2 border-white shadow-[0_10px_20px_rgba(0,0,0,0.05)] group-hover:shadow-[0_15px_30px_rgba(224,30,55,0.15)] group-hover:border-dragon_red/30 mb-6 relative group-hover:scale-110 transition-all duration-500">
                    <span className="font-serif font-black text-xl text-dragon_red">{`0${i + 1}`}</span>
                    <div className="absolute inset-0 rounded-full border border-dragon_red/30 scale-125 opacity-0 group-hover:opacity-100 group-hover:scale-150 group-hover:border-transparent group-hover:bg-dragon_red/5 transition-all duration-700" />
                 </div>
                 <h3 className="font-sans font-bold text-lg text-slate-900 mb-3 group-hover:text-dragon_red transition-colors duration-500">{t(`onboarding.items.${i}.title`)}</h3>
                 <p className="text-sm font-sans text-slate-600 leading-relaxed font-light px-2">
                    {t(`onboarding.items.${i}.desc`)}
                 </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
