export function DashboardReplica({ platform }: { platform: 'MYM' | 'OF' | 'INFLOWW' }) {
  // A sleek replica of an earnings dashboard
  return (
    <div className="w-full h-full bg-slate-50 flex flex-col pt-12 font-sans select-none">
      {/* Header */}
      <div className="px-6 py-4 border-b border-slate-200 bg-white flex justify-between items-center shadow-sm z-10">
        <div className="font-bold text-lg text-slate-800 flex items-center gap-2">
          {platform === 'MYM' ? (
             <div className="w-6 h-6 bg-pink-500 rounded text-white flex items-center justify-center text-xs">M</div>
          ) : platform === 'OF' ? (
             <div className="w-6 h-6 bg-blue-500 rounded-full text-white flex items-center justify-center text-xs">OF</div>
          ) : (
             <div className="w-6 h-6 bg-indigo-500 rounded text-white flex items-center justify-center text-xs">IF</div>
          )}
          {platform === 'MYM' ? 'MYM Creators' : platform === 'OF' ? 'OnlyFans' : 'Infloww'}
        </div>
        <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-pink-400 to-blue-400 border-2 border-white shadow-sm" />
      </div>
      
      {/* Dashboard Body */}
      <div className="p-5 flex flex-col gap-4 overflow-hidden h-full pb-8">
        <div>
          <h3 className="text-xs font-semibold text-slate-500 uppercase tracking-widest mb-1">Revenus du mois</h3>
          <div className="flex items-baseline gap-2 mt-1">
            <span className="text-4xl font-bold text-slate-900 tracking-tight">$42,850.50</span>
            <span className="text-xs font-bold text-emerald-600 bg-emerald-100 px-2 py-1 rounded-full">+12.4%</span>
          </div>
          <p className="text-[10px] text-slate-400 mt-1 font-medium">Bilan mis à jour à l'instant</p>
        </div>

        {/* Fake Chart */}
        <div className="w-full h-32 flex-shrink-0 bg-white rounded-2xl shadow-[0_2px_15px_-4px_rgba(0,0,0,0.05)] border border-slate-100 p-3 flex items-end gap-2 relative">
          {/* Chart lines */}
          <div className="absolute top-1/4 left-0 w-full h-[1px] bg-slate-100/50" />
          <div className="absolute top-2/4 left-0 w-full h-[1px] bg-slate-100/50" />
          <div className="absolute top-3/4 left-0 w-full h-[1px] bg-slate-100/50" />

          {[40, 55, 45, 70, 55, 85, 100].map((height, i) => (
            <div key={i} className="flex-1 rounded-t-sm relative group" style={{ height: `${height}%` }}>
              <div className="absolute bottom-0 w-full h-full bg-gradient-to-t from-blue-300 to-blue-400 rounded-t-sm opacity-90 transition-opacity" />
              {i === 6 && (
                <div className="absolute -top-7 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-[9px] font-bold px-1.5 py-0.5 rounded shadow-lg whitespace-nowrap">
                   $12k
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Recent Subs */}
        <div className="bg-white rounded-2xl shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-slate-100 p-4 flex-1">
          <h4 className="text-sm font-bold text-slate-800 mb-4 flex items-center justify-between">
            <span>Dernières Transactions</span>
            <span className="text-xs text-blue-500">Voir tout</span>
          </h4>
          
          <div className="flex items-center justify-between py-3 border-b border-slate-50">
             <div className="flex items-center gap-3">
               <div className="w-9 h-9 rounded-full bg-slate-100 border border-slate-200 overflow-hidden flex items-center justify-center">
                  <svg className="w-4 h-4 text-slate-300" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" /></svg>
               </div>
               <div>
                 <div className="text-sm font-bold text-slate-700">Abonnement (1 Mois)</div>
                 <div className="text-[10px] font-medium text-slate-400 uppercase tracking-wider">À L'INSTANT</div>
               </div>
             </div>
             <div className="text-sm font-bold text-emerald-500 bg-emerald-50 px-2 py-1 rounded">+$9.99</div>
          </div>

          <div className="flex items-center justify-between py-3 border-b border-slate-50">
             <div className="flex items-center gap-3">
               <div className="w-9 h-9 rounded-full bg-slate-100 border border-slate-200 overflow-hidden flex items-center justify-center">
                  <svg className="w-4 h-4 text-slate-300" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" /></svg>
               </div>
               <div>
                 <div className="text-sm font-bold text-slate-700">Vente Média Privé</div>
                 <div className="text-[10px] font-medium text-slate-400 uppercase tracking-wider">IL Y A 12 MIN</div>
               </div>
             </div>
             <div className="text-sm font-bold text-emerald-500 bg-emerald-50 px-2 py-1 rounded">+$100.00</div>
          </div>

          <div className="flex items-center justify-between py-3">
             <div className="flex items-center gap-3">
               <div className="w-9 h-9 rounded-full bg-pink-50 border border-pink-100 overflow-hidden flex items-center justify-center">
                  <span className="text-pink-500 text-sm">💡</span>
               </div>
               <div>
                 <div className="text-sm font-bold text-slate-700">Pourboire (Tip)</div>
                 <div className="text-[10px] font-medium text-slate-400 uppercase tracking-wider">IL Y A 24 MIN</div>
               </div>
             </div>
             <div className="text-sm font-bold text-pink-500 bg-pink-50 px-2 py-1 rounded">+$20.00</div>
          </div>

        </div>
      </div>
    </div>
  )
}
