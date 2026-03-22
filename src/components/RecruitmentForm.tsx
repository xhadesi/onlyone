"use client";
import { useState } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';

export default function RecruitmentForm() {
  const { t } = useLanguage();
  const [hasAccount, setHasAccount] = useState('Non');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    // User requested Web3Forms Access Key inject
    formData.append("access_key", "6accce7a-2190-45a6-b4ef-54bd547f552a");
    formData.append("subject", "🔥 NOUVELLE CANDIDATURE REÇUE (OnlyOne Agency)");
    formData.append("from_name", "OnlyOne System");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setIsSuccess(true);
        (e.target as HTMLFormElement).reset();
      } else {
        alert(`Erreur Web3Forms: ${data.message || "La soumission a échoué"}`);
      }
    } catch (err: any) {
      alert(`Erreur technique: ${err.message || "Problème de connexion serveur."}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <section className="relative py-24 bg-transparent flex justify-center px-4 sm:px-6 z-20 overflow-hidden">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
          className="max-w-4xl w-full bg-white/60 backdrop-blur-2xl border-2 border-slate-900/10 shadow-[0_40px_80px_-15px_rgba(0,0,0,0.1),inset_0_2px_4px_rgba(255,255,255,1)] rounded-[3rem] p-12 relative overflow-hidden text-center"
        >
            <h2 className="text-3xl sm:text-4xl font-serif text-slate-900 mb-4">{t('form.success_title')}</h2>
            <p className="text-slate-600 font-sans text-sm sm:text-base font-light mb-8 max-w-lg mx-auto">
              {t('form.success_desc')}
            </p>
            <button onClick={() => setIsSuccess(false)} className="text-dragon_red font-bold font-sans text-sm tracking-widest uppercase hover:underline">
                {t('form.success_btn')}
            </button>
        </motion.div>
      </section>
    );
  }

  return (
    <section id="apply-form" className="relative py-24 bg-transparent flex justify-center px-4 sm:px-6 z-20 overflow-hidden">
      <div className="max-w-4xl w-full bg-white/60 backdrop-blur-2xl border-2 border-slate-900/10 shadow-[0_40px_80px_-15px_rgba(0,0,0,0.1),inset_0_2px_4px_rgba(255,255,255,1)] rounded-[3rem] p-8 sm:p-12 relative overflow-hidden">
        
        {/* Soft Decorative Orbs */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-pink-100/50 rounded-full blur-[80px] -z-10 translate-x-10 -translate-y-10" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-100/50 rounded-full blur-[80px] -z-10 -translate-x-10 translate-y-10" />
        
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-serif text-slate-900 mb-4">{t('form.title')}</h2>
          <p className="text-slate-600 font-sans text-sm sm:text-base font-light">{t('form.desc')}</p>
        </div>

        <form className="space-y-8 relative z-10" onSubmit={handleSubmit}>
          {/* Honeypot Spam Protection */}
          <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
             {/* Name */}
             <div className="space-y-2">
                <label className="text-xs font-bold tracking-widest text-slate-500 uppercase ml-1">{t('form.name')}</label>
                <input required type="text" name="prenom" className="w-full bg-white/80 border-2 border-slate-900/10 rounded-2xl px-5 py-4 text-slate-900 focus:outline-none focus:ring-2 focus:ring-dragon_red focus:border-transparent transition-all shadow-[inset_0_2px_4px_rgba(0,0,0,0.02)] placeholder:text-slate-400" placeholder="Emma" />
             </div>
             {/* Email */}
             <div className="space-y-2">
                <label className="text-xs font-bold tracking-widest text-slate-500 uppercase ml-1">{t('form.email')}</label>
                <input required type="email" name="email" className="w-full bg-white/80 border-2 border-slate-900/10 rounded-2xl px-5 py-4 text-slate-900 focus:outline-none focus:ring-2 focus:ring-dragon_red focus:border-transparent transition-all shadow-[inset_0_2px_4px_rgba(0,0,0,0.02)] placeholder:text-slate-400" placeholder="contact@exemple.com" />
             </div>
             
             {/* Social Links Split */}
             <div className="space-y-4 sm:col-span-2">
                <label className="text-xs font-bold tracking-widest text-slate-500 uppercase ml-1 block">{t('form.socials')}</label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                   <input required type="text" name="instagram" className="w-full bg-white/80 border-2 border-slate-900/10 rounded-2xl px-5 py-4 text-slate-900 focus:outline-none focus:ring-2 focus:ring-dragon_red focus:border-transparent transition-all shadow-[inset_0_2px_4px_rgba(0,0,0,0.02)] placeholder:text-slate-400" placeholder="Lien ou @Instagram" />
                   <input type="text" name="tiktok" className="w-full bg-white/80 border-2 border-slate-900/10 rounded-2xl px-5 py-4 text-slate-900 focus:outline-none focus:ring-2 focus:ring-dragon_red focus:border-transparent transition-all shadow-[inset_0_2px_4px_rgba(0,0,0,0.02)] placeholder:text-slate-400" placeholder="Lien ou @TikTok" />
                   <input type="text" name="twitter_x" className="w-full bg-white/80 border-2 border-slate-900/10 rounded-2xl px-5 py-4 text-slate-900 focus:outline-none focus:ring-2 focus:ring-dragon_red focus:border-transparent transition-all shadow-[inset_0_2px_4px_rgba(0,0,0,0.02)] placeholder:text-slate-400" placeholder="Lien ou @X (Twitter)" />
                </div>
             </div>
             
             <div className="space-y-2 sm:col-span-2">
                <label className="text-xs font-bold tracking-widest text-slate-500 uppercase ml-1 block">{t('form.has_platform')}</label>
                <select 
                  name="deja_plateforme"
                  value={hasAccount}
                  onChange={(e) => setHasAccount(e.target.value)}
                  className="w-full bg-white/80 border-2 border-slate-900/10 rounded-2xl px-5 py-4 text-slate-900 focus:outline-none focus:ring-2 focus:ring-dragon_red focus:border-transparent transition-all shadow-[inset_0_2px_4px_rgba(0,0,0,0.02)] appearance-none font-bold"
                >
                  <option value="Non">{t('form.has_platform_no')}</option>
                  <option value="Oui">{t('form.has_platform_yes')}</option>
                  <option value="Essaye">{t('form.has_platform_past')}</option>
                </select>
             </div>

             {hasAccount.includes('Oui') && (
               <div className="space-y-4 sm:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2 p-6 bg-white/40 rounded-2xl border border-slate-900/5">
                 <div className="space-y-2">
                   <label className="text-xs font-bold tracking-widest text-slate-500 uppercase ml-1 block">{t('form.which_platform')}</label>
                   <input required={hasAccount.includes('Oui')} type="text" name="nom_plateforme" className="w-full bg-white/80 border-2 border-slate-900/10 rounded-2xl px-5 py-4 text-slate-900" placeholder="ex: OnlyFans, MYM..." />
                 </div>
                 <div className="space-y-2">
                   <label className="text-xs font-bold tracking-widest text-slate-500 uppercase ml-1 block">{t('form.platform_link')}</label>
                   <input required={hasAccount.includes('Oui')} type="text" name="lien_plateforme" className="w-full bg-white/80 border-2 border-slate-900/10 rounded-2xl px-5 py-4 text-slate-900" placeholder="ex: pseudoMYM" />
                 </div>
               </div>
             )}



             <div className="space-y-2 sm:col-span-2">
                <label className="text-xs font-bold tracking-widest text-slate-500 uppercase ml-1 block">{t('form.motivations')}</label>
                <textarea required name="motivations" rows={5} className="w-full bg-white/80 border-2 border-slate-900/10 rounded-2xl px-5 py-4 text-slate-900 focus:outline-none focus:ring-2 focus:ring-dragon_red focus:border-transparent transition-all shadow-[inset_0_2px_4px_rgba(0,0,0,0.02)] resize-none placeholder:text-slate-400" placeholder={t('form.motivations_ph')} />
             </div>

             <div className="sm:col-span-2 pt-6">
                <button disabled={isSubmitting} type="submit" className="w-full bg-slate-900 text-white font-sans font-bold text-lg py-5 rounded-2xl hover:bg-dragon_red transition-colors shadow-xl shadow-slate-900/20 hover:shadow-dragon_red/20 border-2 border-transparent disabled:opacity-50">
                   {isSubmitting ? t('form.submitting') : t('form.submit')}
                </button>
                <p className="text-center text-xs font-bold text-slate-500 mt-4 px-8 leading-relaxed uppercase tracking-wider">
                  {t('form.secure_note')}
                </p>
             </div>
          </div>
        </form>
      </div>
    </section>
  );
}
