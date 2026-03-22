"use client";
import { DashboardReplica } from './DashboardReplica';

export function IPhoneMockup() {
  return (
    <div className="relative w-full h-full rounded-[3.8rem] border-[12px] border-slate-900 bg-black shadow-[0_30px_60px_rgba(0,0,0,0.4),inset_0_0_0_2px_rgba(255,255,255,0.05)] overflow-hidden ring-[3px] ring-slate-800/40 outline outline-1 outline-white/10">
      {/* Soft internal glass reflection */}
      <div className="absolute inset-0 rounded-[3.3rem] shadow-[inset_0_2px_20px_rgba(255,255,255,0.5)] pointer-events-none z-50" />

      {/* Power Button */}
      <div className="absolute top-[120px] -right-[14px] w-[3px] h-16 bg-[#1C1C1E] rounded-l-md" />
      {/* Volume Buttons */}
      <div className="absolute top-[100px] -left-[14px] w-[3px] h-12 bg-[#1C1C1E] rounded-r-md" />
      <div className="absolute top-[160px] -left-[14px] w-[3px] h-12 bg-[#1C1C1E] rounded-r-md" />
      {/* Silent Switch */}
      <div className="absolute top-[60px] -left-[14px] w-[3px] h-6 bg-[#1C1C1E] rounded-r-md" />

      {/* Dynamic Island */}
      <div className="absolute top-2 left-1/2 -translate-x-1/2 w-[120px] h-[30px] bg-black rounded-full z-50 flex items-center justify-between px-3 shadow-[inset_0_0_2px_rgba(255,255,255,0.1)]">
        <div className="w-2.5 h-2.5 bg-slate-900 shadow-inner rounded-full" />
        <div className="w-2.5 h-2.5 bg-green-500/20 rounded-full flex items-center justify-center">
            <div className="w-1.5 h-1.5 bg-green-500 rounded-full shadow-[0_0_8px_rgba(34,197,94,0.8)]" />
        </div>
      </div>
      
      {/* Screen Content */}
      <div className="w-full h-full bg-slate-50 relative overflow-hidden rounded-[3rem] shadow-[inset_0_0_10px_rgba(0,0,0,0.15)] ring-1 ring-black/5">
        <DashboardReplica platform="MYM" />
        
        {/* Screen glint reflection */}
        <div className="absolute top-0 left-0 w-[150%] h-[150%] bg-gradient-to-br from-white/10 to-transparent -rotate-45 pointer-events-none transform -translate-y-[20%] -translate-x-[20%]" />
      </div>
    </div>
  );
}
