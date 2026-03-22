"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import { IPhoneMockup } from './iphone/IPhoneMockup';

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-[90vh] w-full flex items-center justify-center pt-24 pb-16 overflow-hidden">
      {/* Decorative Blur Backgrounds */}
      <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-dragon_red/10 rounded-full blur-[120px] -z-10 mix-blend-multiply" />
      <div className="absolute bottom-1/4 -right-1/4 w-[30rem] h-[30rem] bg-pearl_blue/40 rounded-full blur-[120px] -z-10" />

      {/* Main Glass Tile Container - GRID for iPhone side */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-20">
        <div className="glass-card rounded-[3rem] p-8 sm:p-16 lg:p-20 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center relative overflow-hidden border-2 border-slate-900/10 shadow-[0_40px_80px_-15px_rgba(0,0,0,0.15)]">
          
          {/* Tile Inner Glow */}
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-white/60 to-transparent pointer-events-none" />
          <div className="absolute -top-32 -left-32 w-64 h-64 bg-pink-100 rounded-full blur-[100px] opacity-60 pointer-events-none" />

          {/* LEFT COLUMN: Text Content */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left relative z-10 w-full">
            {/* Premium Tagline */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
              className="inline-flex items-center gap-3 backdrop-blur-md bg-white/40 border border-white/60 px-5 py-2.5 rounded-full shadow-sm mb-10"
            >
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-dragon_red opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-dragon_red"></span>
              </span>
              <span className="font-sans text-[10px] sm:text-xs font-black tracking-[0.25em] text-slate-800 uppercase">
                {t('hero.tag')}
              </span>
            </motion.div>
            
            {/* Main Headline */}
            <motion.h1 
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
              className="text-5xl sm:text-6xl lg:text-7xl font-serif text-slate-900 leading-[1.1] mb-8"
            >
              {t('hero.title1')} <br />
              <span className="relative inline-block mt-2">
                <span className="relative z-10 bg-clip-text text-transparent bg-gradient-to-r from-dragon_red via-pink-600 to-rose-400 font-light italic pr-2">
                  {t('hero.title2')}
                </span>
                <span className="absolute bottom-1 left-0 w-full h-4 bg-pearl_pink/40 -z-10 -rotate-2 blur-[2px]" />
              </span>
            </motion.h1>
            
            {/* Subheadline Description */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}
              className="bg-white/50 p-6 rounded-2xl border border-white/60 shadow-[inset_0_1px_2px_rgba(255,255,255,1),0_4px_10px_rgba(0,0,0,0.02)] mb-10 max-w-xl"
            >
                <p className="text-lg sm:text-lg text-slate-600 font-sans font-light leading-relaxed">
                  {t('hero.desc')}
                </p>
            </motion.div>
            
            {/* Call To Actions */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }}
              className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
            >
              <button 
                onClick={(e) => { e.preventDefault(); document.getElementById('candidature')?.scrollIntoView({ behavior: 'smooth' }); }}
                className="bg-slate-900 text-white rounded-xl px-8 py-4 sm:py-5 hover:scale-[1.02] transition-all shadow-xl shadow-slate-900/10 font-sans font-semibold hover:bg-dragon_red duration-500 tracking-wide text-sm sm:text-base border border-slate-800"
              >
                {t('hero.btn1')}
              </button>
              <button 
                onClick={(e) => { e.preventDefault(); document.getElementById('resultats')?.scrollIntoView({ behavior: 'smooth' }); }}
                className="bg-white/60 backdrop-blur-md border border-white/80 text-slate-900 rounded-xl px-8 py-4 sm:py-5 font-sans font-semibold hover:bg-white transition-all shadow-[0_4px_15px_-3px_rgba(0,0,0,0.05)] tracking-wide text-sm sm:text-base flex items-center justify-center gap-2"
              >
                {t('hero.btn2')}
                <span className="text-xl leading-none font-light">&rarr;</span>
              </button>
            </motion.div>
            
            {/* Social Proof Logos */}
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }}
              className="mt-12 flex items-center justify-start gap-3 sm:gap-5 w-full opacity-90 px-5 py-4 rounded-2xl bg-white/40 border border-white/60 shadow-sm relative z-10 whitespace-nowrap overflow-hidden"
            >
              <span className="font-sans text-[10px] sm:text-xs font-bold tracking-widest text-slate-500 uppercase flex-shrink-0">{t('hero.partners')}</span>
              <div className="flex items-center gap-4 sm:gap-5 flex-shrink-0">
                <span className="font-sans font-black text-lg sm:text-lg tracking-tighter text-[#00AFF0] leading-none">OnlyFans</span>
                <span className="font-serif font-black text-lg sm:text-lg text-[#FF0054] leading-none">MYM.</span>
                <span className="font-sans font-bold text-lg sm:text-lg tracking-tight text-[#00D2D3] leading-none">Fanvue</span>
                <span className="font-serif font-black text-base sm:text-[1.1rem] tracking-widest text-slate-900 uppercase leading-none">PLAYBOY</span>
              </div>
            </motion.div>
          </div>

          {/* RIGHT COLUMN: iPhone Mockup */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, type: "spring", bounce: 0.3 }}
            className="hidden lg:flex justify-center xl:justify-end relative z-10 w-full h-[700px]"
            style={{ perspective: "1500px" }}
          >
             {/* Interactive 3D iPhone container */}
             <motion.div 
                className="relative w-[340px] h-[720px] flex-shrink-0 z-30 xl:mr-10 cursor-pointer"
                initial={{ rotateY: -3, rotateX: 1, rotateZ: 0 }}
                whileHover={{ rotateY: -12, rotateX: 6, rotateZ: -2, y: -10, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 350, damping: 20 }}
                style={{ transformStyle: "preserve-3d" }}
             >
                <IPhoneMockup />
             </motion.div>

             {/* Floating notification badges */}
             <motion.div 
               animate={{ y: [0, -10, 0] }} transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
               className="absolute top-20 right-10 z-[40] bg-white/95 backdrop-blur-md px-4 py-3 rounded-2xl shadow-[0_10px_30px_-5px_rgba(0,0,0,0.15)] flex items-center gap-3 border border-white pointer-events-none"
             >
                <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 font-bold">$</div>
                <div>
                   <p className="text-sm font-bold text-slate-900 leading-tight">+ $4,250.00</p>
                   <p className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">{t('hero.today')}</p>
                </div>
             </motion.div>

             <motion.div 
               animate={{ y: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
               className="absolute bottom-40 -left-6 z-[40] bg-white/95 backdrop-blur-md px-4 py-3 rounded-2xl shadow-[0_10px_30px_-5px_rgba(0,0,0,0.15)] flex items-center gap-3 border border-white pointer-events-none"
             >
                <div className="w-8 h-8 rounded-full bg-rose-100 flex items-center justify-center text-dragon_red font-bold">♥</div>
                <div>
                   <p className="text-sm font-bold text-slate-900 leading-tight">{t('hero.new_fan')}</p>
                   <p className="text-[10px] uppercase font-bold text-dragon_red tracking-wider">{t('hero.vip_tier')}</p>
                </div>
             </motion.div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
