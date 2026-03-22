"use client";
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';

function BarChart() {
  const { t } = useLanguage();
  return (
    <div className="flex flex-col h-full justify-between pt-6 pt-4">
      <div className="flex items-end justify-around h-32 w-full px-2 gap-4">
         {/* Avant */}
         <div className="flex flex-col items-center gap-2 group">
            <motion.div initial={{ height: 0 }} whileInView={{ height: '2rem' }} transition={{ duration: 1, delay: 0.2 }} className="w-10 sm:w-16 bg-slate-200 rounded-t-lg relative group-hover:bg-slate-300 transition-colors" />
            <span className="text-[10px] sm:text-xs font-bold text-slate-500 uppercase">{t('results.before')}</span>
         </div>
         {/* Début */}
         <div className="flex flex-col items-center gap-2 group">
            <motion.div initial={{ height: 0 }} whileInView={{ height: '5rem' }} transition={{ duration: 1, delay: 0.5 }} className="w-10 sm:w-16 bg-pink-300 rounded-t-lg relative shadow-[0_0_15px_rgba(244,114,182,0.4)] group-hover:bg-pink-400 transition-colors" />
            <span className="text-[10px] sm:text-xs font-bold text-slate-700 uppercase">{t('results.start')}</span>
         </div>
         {/* Après 3 Mois */}
         <div className="flex flex-col items-center gap-2 group">
            <motion.div initial={{ height: 0 }} whileInView={{ height: '9rem' }} transition={{ duration: 1, delay: 0.8 }} className="w-10 sm:w-16 bg-dragon_red rounded-t-lg relative shadow-[0_0_20px_rgba(225,29,72,0.6)] group-hover:bg-rose-700 transition-colors">
                <span className="absolute -top-7 left-1/2 -translate-x-1/2 bg-slate-900 text-white text-[10px] sm:text-xs font-bold px-2 py-1 rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity">
                    +450%
                </span>
            </motion.div>
            <span className="text-[10px] sm:text-xs font-bold text-dragon_red uppercase">{t('results.after3m')}</span>
         </div>
      </div>
    </div>
  );
}

function LineChartOF() {
  const { t } = useLanguage();
  const months = [0, 1, 2];
  return (
    <div className="flex flex-col h-full justify-between pt-6 relative px-4">
      <div className="absolute right-0 top-0 bottom-8 border-l border-slate-200/50 flex flex-col justify-between text-[10px] text-slate-400 font-sans items-end pr-2 py-2">
         <span>$30k</span>
         <span>$15k</span>
         <span>$0</span>
      </div>
      <div className="flex items-end justify-start h-32 w-full gap-2 sm:gap-4 pr-10">
         <motion.div initial={{ height: 0 }} whileInView={{ height: '3rem' }} transition={{ duration: 0.8 }} className="w-full bg-blue-400/20 border border-blue-400/40 rounded-t-md relative group">
           <div className="absolute top-0 left-0 w-full h-[2px] bg-blue-500" />
           <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs font-bold text-slate-600 opacity-0 group-hover:opacity-100 transition-opacity">$2,400</span>
         </motion.div>
         <motion.div initial={{ height: 0 }} whileInView={{ height: '6rem' }} transition={{ duration: 0.8, delay: 0.2 }} className="w-full bg-blue-400/40 border border-blue-400/60 rounded-t-md relative group">
           <div className="absolute top-0 left-0 w-full h-[2px] bg-blue-500" />
           <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs font-bold text-slate-700 opacity-0 group-hover:opacity-100 transition-opacity">$14,250</span>
         </motion.div>
         <motion.div initial={{ height: 0 }} whileInView={{ height: '9.5rem' }} transition={{ duration: 0.8, delay: 0.4 }} className="w-full bg-blue-500/80 border border-blue-500 rounded-t-md relative group shadow-[0_0_20px_rgba(59,130,246,0.4)]">
           <div className="absolute top-0 left-0 w-full h-[2px] bg-blue-600" />
           <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs font-bold text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity">$32,800</span>
         </motion.div>
      </div>
      <div className="flex justify-between w-full pr-10 mt-2 border-t border-slate-200/50 pt-2">
        {months.map(m => (
           <span key={m} className="text-[10px] sm:text-xs font-bold text-slate-500 uppercase flex-1 text-center">{t(`results.months.${m}`)}</span>
        ))}
      </div>
    </div>
  );
}

export default function Results() {
  const { t } = useLanguage();
  return (
    <section className="py-24 bg-transparent relative z-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-dragon_red font-accent font-bold tracking-[0.3em] text-xs uppercase opacity-80">{t('results.tag')}</span>
          <h2 className="mt-4 text-4xl sm:text-5xl font-serif text-slate-900 leading-tight">{t('results.title1')} <span className="italic text-pearl_pink">{t('results.title2')}</span></h2>
        </motion.div>

        {/* Dashboards - 1 Col to make them VERY LARGE */}
        <div className="flex flex-col gap-16">
          
          {/* Bloc 1 : Dashboard 1 + BarChart */}
          <div className="space-y-6">
              <motion.div 
                initial={{ opacity: 0, y: 30 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                viewport={{ once: true }} 
                className="relative rounded-[2rem] overflow-hidden glass-card p-4 group"
              >
                 <div className="relative w-full aspect-video md:aspect-[21/9] rounded-[1.5rem] overflow-hidden border-2 border-slate-900/10 shadow-lg bg-[#111111]">
                   <img src="/dashboards/dashboard1.png" alt="Dashboard Revenue 1" className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-[2s] ease-out" />
                 </div>
              </motion.div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                 <div className="glass-card p-6 rounded-[2rem] flex flex-col justify-center">
                    <h4 className="font-serif text-xl sm:text-2xl text-slate-900 mb-2">{t('results.growth_title')}</h4>
                    <p className="text-sm text-slate-600 font-sans leading-relaxed">
                      {t('results.growth_desc')}
                    </p>
                 </div>
                 <div className="glass-card p-6 rounded-[2rem]">
                    <BarChart />
                 </div>
              </div>
          </div>

          {/* Bloc 2 : Dashboard 2 + LineChart */}
          <div className="space-y-6">
              <motion.div 
                initial={{ opacity: 0, y: 30 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                viewport={{ once: true }} 
                className="relative rounded-[2rem] overflow-hidden glass-card p-4 group"
              >
                 <div className="relative w-full aspect-[21/9] sm:aspect-[21/9] rounded-[1.5rem] overflow-hidden border-2 border-slate-900/10 shadow-lg bg-black">
                   <div className="absolute inset-0 bg-blue-100/10 mix-blend-multiply z-10" />
                   <img src="/dashboards/dashboard2.png" alt="Dashboard Revenue 2" className="w-full h-full object-contain sm:object-cover group-hover:scale-105 transition-transform duration-[2s] ease-out opacity-90" />
                 </div>
              </motion.div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                 <div className="glass-card p-6 rounded-[2rem]">
                    <LineChartOF />
                 </div>
                 <div className="glass-card p-6 rounded-[2rem] flex flex-col justify-center">
                    <h4 className="font-serif text-xl sm:text-2xl text-slate-900 mb-2">{t('results.stability_title')}</h4>
                    <p className="text-sm text-slate-600 font-sans leading-relaxed">
                      {t('results.stability_desc')}
                    </p>
                 </div>
              </div>
          </div>

        </div>
      </div>
    </section>
  );
}
