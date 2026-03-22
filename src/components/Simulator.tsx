"use client";
import { useState } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';

export default function Simulator() {
  const { t } = useLanguage();
  const [followers, setFollowers] = useState(1000);
  
  // Calculate Revenue - Not abusing numbers under 5k
  let min = 0;
  let max = 0;

  if (followers > 0 && followers <= 1000) {
    min = 200; max = 600;
  } else if (followers > 1000 && followers <= 5000) {
     min = 600; max = 1500;
  } else if (followers > 5000) {
     min = followers * 0.3;
     max = followers * 0.9;
  }

  const estimatedRevenueMin = Math.floor(min);
  const estimatedRevenueMax = Math.floor(max);

  return (
    <section className="py-24 bg-transparent relative z-20 overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-dragon_red font-accent font-bold tracking-[0.3em] text-xs uppercase opacity-80">{t('simulator.tag')}</span>
          <h2 className="mt-4 text-4xl sm:text-5xl font-serif text-slate-900 leading-tight">{t('simulator.title1')} <span className="italic text-pearl_pink">{t('simulator.title2')}</span></h2>
          <p className="mt-4 text-slate-600 font-sans max-w-2xl mx-auto text-sm sm:text-base">
            {t('simulator.desc')}
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="glass-card p-8 sm:p-12 rounded-[3rem] relative border-2 border-slate-900/10 shadow-[0_40px_80px_-15px_rgba(0,0,0,0.1)]"
        >
            <div className="mb-10 text-center">
                <label className="block text-sm font-bold text-slate-500 uppercase tracking-widest mb-6">{t('simulator.label')}</label>
                <div className="text-4xl sm:text-6xl font-black text-slate-800 font-sans mb-8">
                    {followers.toLocaleString('fr-FR')} <span className="text-dragon_red/80 text-2xl">{t('simulator.subs')}</span>
                </div>
                
                <input 
                  type="range" 
                  min="0" 
                  max="500000" 
                  step="1000"
                  value={followers} 
                  onChange={(e) => setFollowers(Number(e.target.value))}
                  className="w-full h-3 bg-white/60 rounded-lg appearance-none cursor-pointer accent-dragon_red shadow-inner shadow-black/5"
                />
                <div className="flex justify-between mt-3 text-xs font-bold text-slate-400">
                   <span>0</span>
                   <span>500k+</span>
                </div>
            </div>

            <div className="bg-white/60 border-2 border-slate-900/10 p-8 rounded-[2rem] text-center shadow-[0_10px_30px_rgba(0,0,0,0.05)]">
                <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-4">{t('simulator.monthly')}</p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
                    <span className="text-5xl sm:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-dragon_red to-pink-500 drop-shadow-sm transition-all duration-300">
                        ${estimatedRevenueMin.toLocaleString('en-US')}
                    </span>
                    <span className="text-2xl text-slate-400 font-light hidden sm:block">{t('simulator.to')}</span>
                    <span className="text-5xl sm:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-rose-400 drop-shadow-sm transition-all duration-300">
                        ${estimatedRevenueMax.toLocaleString('en-US')}
                    </span>
                </div>
                
                <div className="mt-8 bg-pink-50/50 rounded-xl p-4 border border-rose-100">
                   <p className="text-[10px] sm:text-xs text-slate-500 font-sans leading-relaxed text-left">
                     * <strong className="font-bold text-slate-700">{t('simulator.disclaimer')}</strong> {t('simulator.disclaimer_text')}
                   </p>
                </div>
            </div>
            
            <div className="mt-8 text-center">
                <button 
                  onClick={(e) => { e.preventDefault(); document.getElementById('candidature')?.scrollIntoView({ behavior: 'smooth' }); }}
                  className="bg-slate-900 border border-slate-800 text-white px-8 py-4 rounded-full font-sans text-sm font-bold hover:bg-dragon_red hover:border-dragon_red transition-all shadow-xl hover:shadow-dragon_red/20 hover:scale-[1.02]"
                >
                    {t('simulator.btn')}
                </button>
            </div>
        </motion.div>
      </div>
    </section>
  );
}
