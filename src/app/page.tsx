"use client";
import Hero from "@/components/Hero";
import Models from "@/components/Models";
import Services from "@/components/Services";
import RecruitmentForm from "@/components/RecruitmentForm";
import LanguageModal from "@/components/LanguageModal";
import Results from "@/components/Results";
import Simulator from "@/components/Simulator";
import Onboarding from "@/components/Onboarding";
import FAQ from "@/components/FAQ";
import Reviews from "@/components/Reviews";
import SecurityGuard from "@/components/SecurityGuard";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import PainPoints from "@/components/PainPoints";

export default function Home() {
  const { t, lang } = useLanguage();

  const openLangModal = () => {
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new Event('open-language-modal'));
    }
  };

  const scrollTo = (id: string, e: React.MouseEvent) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-start overflow-x-hidden relative">
      <SecurityGuard />
      <LanguageModal />
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_0%_0%,#fff1f2_0%,#eff6ff_40%,#f1f5f9_100%)] -z-20 opacity-90 pointer-events-none" />

      <header className="w-full px-4 sm:px-6 py-3 flex justify-between items-center fixed top-0 left-0 right-0 z-[100] bg-white/70 backdrop-blur-2xl border-b border-pearl_pink/40 shadow-sm">
        <div className="flex items-center gap-4 max-w-7xl mx-auto w-full justify-between">
            <Image 
               src="/logo.png" 
               alt="OnlyOne Logo" 
               width={110} 
               height={30} 
               className="object-contain cursor-pointer hover:opacity-80 transition-opacity" 
               onClick={(e) => scrollTo('agence', e as any)}
            />
            <nav className="hidden md:flex items-center gap-10 font-sans font-bold text-sm text-slate-700 uppercase tracking-widest">
                <a href="#agence" onClick={(e) => scrollTo('agence', e)} className="hover:text-dragon_red hover:-translate-y-0.5 transition-all duration-300">{t('nav.agency')}</a>
                <a href="#resultats" onClick={(e) => scrollTo('resultats', e)} className="hover:text-dragon_red hover:-translate-y-0.5 transition-all duration-300">{t('nav.results')}</a>
                <a href="#modeles" onClick={(e) => scrollTo('modeles', e)} className="hover:text-dragon_red hover:-translate-y-0.5 transition-all duration-300">{t('nav.muses')}</a>
                <a href="#candidature" onClick={(e) => scrollTo('candidature', e)} className="text-dragon_red hover:text-slate-900 hover:-translate-y-0.5 transition-all duration-300">{t('nav.apply')}</a>
            </nav>
            <div className="flex items-center gap-3 sm:gap-4">
               <button onClick={openLangModal} className="text-slate-600 hover:text-dragon_red font-sans font-bold text-xs sm:text-sm bg-white/50 px-3 py-2 rounded-full border border-slate-900/10 shadow-sm flex items-center gap-2 transition-all duration-300 hover:bg-white hover:scale-105 hover:-translate-y-0.5 hover:shadow-md">
                  <span>🌍</span> {lang}
               </button>
               <button onClick={(e) => scrollTo('candidature', e as any)} className="bg-slate-900 border border-slate-800 text-white px-4 sm:px-6 py-2 rounded-full font-sans text-xs sm:text-sm font-bold hover:bg-dragon_red hover:border-dragon_red transition-all duration-300 shadow-lg hover:shadow-dragon_red/30 backdrop-blur-md hover:scale-105 hover:-translate-y-0.5">
                   {t('nav.apply')}
               </button>
            </div>
        </div>
      </header>
      
      <div id="agence" className="w-full">
         <Hero />
      </div>
      <div id="resultats" className="w-full">
         <Results />
         <Simulator />
      </div>
      <div id="modeles" className="w-full">
         <Models />
      </div>
      <div className="w-full">
         <Services />
         <Onboarding />
         <Reviews />
          <PainPoints />
      </div>
          <FAQ />
      <div id="candidature" className="w-full">
         <RecruitmentForm />
      </div>
      
      <footer className="w-full bg-slate-900 text-white py-10 flex flex-col items-center justify-center relative overflow-hidden mt-10">
        <div className="absolute inset-0 bg-gradient-to-t from-dragon_red/20 to-transparent pointer-events-none" />
        
        <Image 
           src="/logo.png" 
           alt="OnlyOne Logo" 
           width={140} 
           height={40} 
           className="object-contain mb-6 z-10 brightness-0 invert opacity-40 hover:opacity-100 hover:brightness-100 hover:invert-0 transition-all duration-700" 
        />
        
        <div className="flex gap-4 mb-6 z-10">
          <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-dragon_red transition-colors">
            <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 1.76-6.98 6.144-.058 1.28-.072 1.688-.072 4.947s.014 3.667.072 4.947c.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.947.072s3.668-.014 4.948-.072c4.354-.2 6.782-1.762 6.979-6.144.059-1.28.073-1.689.073-4.947s-.014-3.667-.072-4.947c-.196-4.354-2.617-6.782-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
          </a>
          <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-dragon_red transition-colors">
            <span className="font-bold text-sm">𝕏</span>
          </a>
          <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-dragon_red transition-colors">
            <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M21.543 2.112l-19.141 7.387c-1.393.535-1.385 1.336-.26 1.724l4.912 1.533 11.378-7.172c.535-.327 1.025-.152.613.214l-9.22 8.324-.356 5.342c.523 0 .765-.241 1.062-.524l2.551-2.48 5.312 3.921c.979.541 1.684.262 1.928-.887l3.488-16.425c.345-1.372-.511-1.996-1.52-1.534z"/></svg>
          </a>
        </div>
        
        <p className="font-sans text-sm text-slate-400 font-light z-10">{t('footer.rights')}</p>
      </footer>
    </main>
  );
}
