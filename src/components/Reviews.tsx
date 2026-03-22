"use client";
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';

export default function Reviews() {
  const { t } = useLanguage();
  const messages = [
    { sender: 'model', text: t('reviews.m1'), time: "10:42", align: 'left' },
    { sender: 'agency', text: t('reviews.m2'), time: "10:45", align: 'right' },
    { sender: 'model', text: t('reviews.m3'), time: "10:50", align: 'left' }
  ];

  return (
    <section className="py-24 bg-transparent relative z-20 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div 
             initial={{ opacity: 0, x: -30 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             className="relative"
          >
             <div className="glass-card p-6 sm:p-10 rounded-[3rem] w-full max-w-md mx-auto relative z-10 border-2 border-slate-900/10">
                <div className="flex items-center gap-4 mb-8 border-b border-black/5 pb-4">
                   <div className="w-12 h-12 rounded-full overflow-hidden relative shadow-md">
                      <Image src="/models/model6.jpg" alt="Emma Profile" fill className="object-cover" />
                   </div>
                    <div>
                      <h4 className="font-sans font-bold text-slate-900">Emma (Top 0.5%)</h4>
                      <p className="text-xs text-green-600 font-bold uppercase tracking-wider">{t('reviews.online')}</p>
                   </div>
                </div>

                <div className="flex flex-col gap-4">
                  {messages.map((m, i) => (
                     <motion.div 
                       key={i}
                       initial={{ opacity: 0, y: 10, scale: 0.95 }}
                       whileInView={{ opacity: 1, y: 0, scale: 1 }}
                       viewport={{ once: true }}
                       transition={{ delay: i * 0.4 }}
                       className={`flex ${m.align === 'left' ? 'justify-start' : 'justify-end'} group hover:-translate-y-1 hover:scale-[1.02] transition-transform duration-300`}
                     >
                       <div className={`max-w-[85%] rounded-2xl p-4 shadow-sm transition-all ${
                         m.align === 'left' 
                         ? 'bg-white text-slate-800 rounded-tl-sm border border-black/5 group-hover:shadow-[0_10px_25px_rgba(0,0,0,0.05)] group-hover:border-pearl_pink/40'
                         : 'bg-emerald-500 text-white rounded-tr-sm shadow-[0_4px_15px_rgba(16,185,129,0.3)] group-hover:shadow-[0_15px_30px_rgba(16,185,129,0.4)]'
                       }`}>
                          <p className="font-sans text-sm leading-relaxed">{m.text}</p>
                          <span className={`text-[10px] mt-1 block w-full text-right opacity-70 ${m.align === 'left' ? 'text-slate-500' : 'text-emerald-100'}`}>
                             {m.time} {m.align === 'right' && '✓✓'}
                          </span>
                       </div>
                     </motion.div>
                  ))}
                </div>
             </div>
             {/* Decorative blob behind phone */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-lg bg-pink-200/50 rounded-full blur-[100px] -z-10" />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-center lg:text-left"
          >
            <span className="text-dragon_red font-accent font-bold tracking-[0.3em] text-xs uppercase opacity-80">{t('reviews.tag')}</span>
            <h2 className="mt-4 text-4xl sm:text-5xl font-serif text-slate-900 leading-tight">{t('reviews.title1')} <span className="italic text-pearl_pink">{t('reviews.title2')}</span></h2>
            <p className="mt-6 text-slate-600 font-sans leading-relaxed">
              {t('reviews.desc')}
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 items-center justify-center lg:justify-start">
               <div className="flex -space-x-4">
                  {[1,2,3,4].map(i => (
                     <div key={i} className={`w-12 h-12 rounded-full border-2 border-white/80 overflow-hidden relative bg-slate-200 shadow-md ${i===4 && 'flex items-center justify-center bg-slate-100 text-xs font-bold text-slate-500'}`}>
                        {i === 4 ? '+50' : <Image src={`/models/model${i}.jpg`} alt={`Modèle ${i}`} fill className="object-cover" />}
                     </div>
                  ))}
               </div>
               <span className="text-sm font-sans font-bold text-slate-700">{t('reviews.accompanied')}</span>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
