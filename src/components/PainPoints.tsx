"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';

export default function PainPoints() {
  const { t } = useLanguage();
  return (
    <section className="py-24 relative overflow-hidden bg-transparent z-20">
      <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-50 text-dragon_red font-bold text-xs uppercase tracking-widest mb-6 border border-red-100">
            <span className="w-2 h-2 rounded-full bg-dragon_red animate-pulse" />
            {t('painpoints.tag')}
          </span>
          <h2 className="text-4xl sm:text-5xl font-serif text-slate-900 leading-tight">
            {t('painpoints.title1')} <span className="italic text-dragon_red">{t('painpoints.title2')}</span>.
          </h2>
          <p className="text-slate-600 font-sans mt-6 leading-relaxed">
            {t('painpoints.desc')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch relative">
          {/* Ligne VS Center */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-slate-900 border-4 border-slate-50 flex items-center justify-center text-white font-serif italic text-2xl z-30 hidden lg:flex shadow-xl shadow-slate-900/20">
            VS
          </div>

          {/* Les Autres Agences / Seule */}
          <motion.div
            initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
            className="glass-card rounded-[3rem] p-8 sm:p-12 border-2 border-red-500/10 shadow-[0_20px_60px_-15px_rgba(225,29,72,0.05)] relative overflow-hidden flex flex-col"
          >
            <div className="absolute top-0 right-0 w-40 h-40 bg-red-500/10 rounded-full blur-[60px] pointer-events-none" />

            <h3 className="font-sans font-black text-slate-400 uppercase tracking-widest text-sm mb-10 flex items-center gap-3 relative z-10">
              <div className="w-3 h-3 rounded-full bg-slate-300" /> {t('painpoints.alone.title')}
            </h3>

            <ul className="space-y-6 flex-grow relative z-10">
              {[0, 1, 2, 3, 4].map(idx => (
                <li key={idx} className="flex items-start gap-5">
                  <div className="mt-1 flex items-center justify-center w-7 h-7 rounded-full bg-red-50 text-red-500 shrink-0 text-sm font-bold">✕</div>
                  <div>
                    <h4 className="font-bold text-slate-900 font-sans text-[1.05rem]">{t(`painpoints.alone.items.${idx}.title`)}</h4>
                    <p className="text-sm font-sans text-slate-600 leading-relaxed mt-1">{t(`painpoints.alone.items.${idx}.desc`)}</p>
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* L'Élite OnlyOne */}
          <motion.div
            initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
            className="bg-slate-900 rounded-[3rem] p-8 sm:p-12 border border-slate-800 shadow-[0_30px_80px_rgba(0,0,0,0.4)] relative overflow-hidden flex flex-col"
          >
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-dragon_red/30 blur-[80px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-dragon_red to-pearl_pink" />

            <h3 className="font-sans font-black text-white uppercase tracking-widest text-sm mb-10 flex items-center gap-3 relative z-10">
              <span className="w-3 h-3 rounded-full bg-dragon_red animate-pulse shadow-[0_0_10px_rgba(225,29,72,0.8)]" /> {t('painpoints.agency.title')}
            </h3>

            <ul className="space-y-6 flex-grow relative z-10">
              {[0, 1, 2, 3, 4].map(idx => (
                <li key={idx} className="flex items-start gap-5">
                  <div className="mt-1 flex items-center justify-center w-7 h-7 rounded-full bg-emerald-500/20 text-emerald-400 shrink-0 text-sm font-bold">✓</div>
                  <div>
                    <h4 className="font-bold text-white font-sans text-[1.05rem] drop-shadow-sm">{t(`painpoints.agency.items.${idx}.title`)}</h4>
                    <p className="text-sm font-sans text-slate-400 leading-relaxed mt-1">{t(`painpoints.agency.items.${idx}.desc`)}</p>
                  </div>
                </li>
              ))}
            </ul>

            <div className="mt-12 pt-8 border-t border-slate-800/80 relative z-10 flex flex-col sm:flex-row items-center justify-between gap-6">
              <p className="font-bold text-white uppercase tracking-widest text-xs sm:text-xs drop-shadow-sm text-center sm:text-left leading-relaxed flex-1" dangerouslySetInnerHTML={{ __html: t('painpoints.agency.cta').replace(' ', ' <br />') }} />
              <button
                onClick={(e) => { e.preventDefault(); document.getElementById('apply-form')?.scrollIntoView({ behavior: 'smooth' }); }}
                className="w-full sm:w-auto bg-white text-slate-900 font-black tracking-wide font-sans py-4 px-8 rounded-xl hover:bg-dragon_red hover:text-white transition-all duration-300 shadow-xl hover:shadow-dragon_red/40 whitespace-nowrap active:scale-95 border border-transparent"
              >
                {t('painpoints.agency.btn')} &rarr;
              </button>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
