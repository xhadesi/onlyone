"use client";
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';

export default function Models() {
  const { t } = useLanguage();
  // "Varie entre 0.1% et top 5%"
  // "dezoom un peu les photos sauf l'asiatique et celle à la piscine"
  // id 2 = Piscine, id 3 = Asiatique. So id 2 and 3 get no frame (p-0). Others get a nice museum frame (p-4 or p-6) to physically zoom them out inside the tile.
  const modelsLayout = [
    { id: 1, platform: 'MYM Creator', tag: 'Top 2%', frame: 'p-0', pos: 'object-cover object-top' }, 
    { id: 2, platform: 'OnlyFans', tag: 'Top 5%', frame: 'p-0', pos: 'object-cover object-center' }, 
    { id: 3, platform: 'OnlyFans', tag: 'Top 0.5%', frame: 'p-0', pos: 'object-cover object-center' }, // Piscine
    { id: 4, platform: 'Fanvue Global', tag: 'Top 5%', frame: 'p-0', pos: 'object-contain object-bottom bg-slate-900/5' }, 
    { id: 5, platform: 'OnlyFans', tag: 'Top 0.1%', frame: 'p-0', pos: 'object-cover object-center' }, // Asiatique
    { id: 6, platform: 'OnlyFans', tag: 'Top 0.05%', frame: 'p-0', pos: 'object-contain object-center bg-slate-900/5' }, 
  ];

  return (
    <section className="py-24 bg-transparent w-full relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-dragon_red font-accent font-bold tracking-[0.3em] text-xs uppercase opacity-80">{t('models.tag')}</span>
          <h2 className="mt-4 text-4xl sm:text-6xl font-serif text-slate-900 leading-tight">{t('models.title1')} <span className="italic text-pearl_pink drop-shadow-sm font-light">{t('models.title2')}</span></h2>
        </motion.div>

        {/* 3 Column grid of identical aspect ratio (all portraits) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 auto-rows-[450px]">
          {modelsLayout.map((m, i) => (
            <motion.div 
              key={m.id} 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              className="relative rounded-[2.5rem] overflow-hidden group cursor-pointer glass-card"
            >
              {/* Image framed with padding to simulate "dezoom" in a luxurious way */}
              <div className={`absolute inset-0 w-full h-full ${m.frame}`}>
                <div className="relative w-full h-full rounded-[2rem] overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.1)] select-none pointer-events-none">
                  <Image 
                     src={`/models/model${m.id}.jpg`} 
                     alt={`Modèle ${m.id}`} 
                     fill 
                     draggable={false}
                     className={`object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-110 ${m.pos}`}
                     style={{ filter: 'contrast(1.05) saturate(1.1) brightness(0.95)' }}
                  />
                  
                  {/* Anti Reverse-Search Watermark */}
                  <div className="absolute inset-0 z-20 flex flex-wrap content-start justify-center gap-x-6 gap-y-12 -rotate-[25deg] scale-150 opacity-[0.03] mix-blend-overlay">
                     {Array.from({ length: 40 }).map((_, i) => (
                       <span key={i} className="font-extrabold text-3xl text-white tracking-widest whitespace-nowrap drop-shadow-md">ONLYONE</span>
                     ))}
                  </div>

                  {/* Subtle vignette inner shadow */}
                  <div className="absolute inset-0 shadow-[inset_0_0_40px_rgba(0,0,0,0.15)] pointer-events-none z-30" />
                </div>
              </div>
              
              {/* Premium Dark Gradient Overlay on Hover */}
              <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700 flex flex-col justify-end p-8 translate-y-4 group-hover:translate-y-0 rounded-[2.5rem]">
                 <h3 className="text-white font-serif text-2xl sm:text-3xl drop-shadow-xl tracking-wide">{m.platform}</h3>
                 <p className="text-white/80 font-sans text-sm mt-2 font-medium tracking-wide flex items-center gap-2">
                    {/* Color dot depending on platform */}
                    <span className={`w-2 h-2 rounded-full shadow-[0_0_8px_currentColor] ${
                      m.platform.includes('MYM') ? 'bg-pink-400 text-pink-400' : 
                      m.platform.includes('Fanvue') ? 'bg-emerald-400 text-emerald-400' : 'bg-blue-400 text-blue-400'
                    }`} />
                    {m.tag}
                 </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
