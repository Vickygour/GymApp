'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  Dumbbell,
  Flame,
  Apple,
  Activity,
  Zap,
  ChevronRight,
  Bell,
  Clock,
} from 'lucide-react';
import FloatingNavbar from '@/components/src/FloatingNavbar';

export default function HomePage() {
  return (
    <>
      <div className="min-h-screen bg-white text-slate-900 pb-32 selection:bg-[#155DFC]/20">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-md mx-auto px-6 pt-12"
        >
          {/* HEADER SECTION */}
          <header className="flex items-center justify-between mb-10">
            <div>
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-1">
                Welcome Back
              </p>
              <h1 className="text-3xl font-black tracking-tighter text-slate-900 flex items-center gap-2">
                Rajesh <span className="text-2xl animate-bounce">💪</span>
              </h1>
            </div>
            <div className="relative">
              <button className="absolute -top-1 -right-1 w-4 h-4 bg-[#155DFC] rounded-full border-2 border-white z-10 animate-pulse" />
              <Avatar className="w-14 h-14 border-[3px] border-slate-50 shadow-xl ring-2 ring-[#155DFC]/10">
                <AvatarImage src="/avatar.png" />
                <AvatarFallback className="bg-slate-100 text-[#155DFC] font-bold">
                  RG
                </AvatarFallback>
              </Avatar>
            </div>
          </header>

          {/* PREMIUM DAILY PROGRESS CARD */}
          <div className="relative mb-10 overflow-hidden bg-slate-900 rounded-[2.5rem] p-8 text-white shadow-2xl shadow-[#155DFC]/20 group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#155DFC] blur-[80px] opacity-40 group-hover:opacity-60 transition-opacity" />

            <div className="relative z-10">
              <div className="flex justify-between items-center mb-6">
                <div className="p-3 bg-white/10 rounded-2xl backdrop-blur-md">
                  <Activity className="text-[#155DFC]" size={22} />
                </div>
                <Badge className="bg-white/10 text-white border-none text-[9px] font-black tracking-widest uppercase">
                  Goal: 80%
                </Badge>
              </div>

              <h2 className="text-2xl font-black tracking-tight mb-2 italic uppercase">
                Daily Training
              </h2>
              <p className="text-slate-400 text-xs font-bold uppercase tracking-widest mb-6">
                4 / 10 <span className="text-[#155DFC]">Exercises Done</span>
              </p>

              <div className="space-y-3">
                <div className="h-3 w-full bg-white/10 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: '40%' }}
                    transition={{ duration: 1, ease: 'easeOut' }}
                    className="h-full bg-[#155DFC] shadow-[0_0_20px_#155DFC] relative"
                  >
                    <div className="absolute inset-0 bg-white/20 animate-shimmer" />
                  </motion.div>
                </div>
              </div>
            </div>
          </div>

          {/* QUICK BENTO STATS */}
          <div className="grid grid-cols-3 gap-3 mb-10">
            <QuickStat
              icon={<Flame size={18} />}
              value="420"
              label="Burned"
              unit="kcal"
              color="text-orange-500"
            />
            <QuickStat
              icon={<Clock size={18} />}
              value="32"
              label="Duration"
              unit="min"
              color="text-[#155DFC]"
            />
            <QuickStat
              icon={<Zap size={18} />}
              value="4"
              label="Streak"
              unit="days"
              color="text-emerald-500"
            />
          </div>

          {/* TODAY'S WORKOUT PREVIEW */}
          <div className="space-y-4 mb-10">
            <div className="flex justify-between items-center px-1">
              <h3 className="text-[11px] font-black text-slate-400 uppercase tracking-[0.2em]">
                Next Session
              </h3>
              <button className="text-[10px] font-black text-[#155DFC] uppercase flex items-center gap-1">
                View All <ChevronRight size={12} />
              </button>
            </div>

            <Card className="rounded-[2.5rem] border-slate-100 shadow-sm hover:shadow-md transition-all group overflow-hidden border-2 hover:border-[#155DFC]/10">
              <CardContent className="p-6 flex items-center justify-between">
                <div className="flex items-center gap-5">
                  <div className="w-16 h-16 bg-slate-50 rounded-[1.5rem] flex items-center justify-center group-hover:bg-[#155DFC]/5 transition-colors">
                    <Dumbbell className="text-[#155DFC]" size={32} />
                  </div>
                  <div>
                    <p className="font-black text-slate-800 text-lg tracking-tight italic uppercase">
                      Upper Body
                    </p>
                    <div className="flex items-center gap-3 mt-1">
                      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                        6 EXS
                      </span>
                      <span className="w-1 h-1 rounded-full bg-slate-200" />
                      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                        45 MIN
                      </span>
                    </div>
                  </div>
                </div>
                <Badge className="bg-[#155DFC] hover:bg-[#155DFC] text-white rounded-lg px-3 py-1 text-[9px] font-black">
                  DAY 02
                </Badge>
              </CardContent>
            </Card>
          </div>

          {/* NUTRITION PREVIEW CARD */}
          <div className="space-y-4">
            <h3 className="text-[11px] font-black text-slate-400 uppercase tracking-[0.2em] px-1">
              Nutrition Tracker
            </h3>
            <Card className="rounded-[2.5rem] bg-slate-50 border-none p-6">
              <CardContent className="p-0 flex items-center justify-between">
                <div className="flex-1">
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-black text-slate-800 tracking-tight uppercase italic">
                      Calories
                    </span>
                    <span className="text-xs font-bold text-[#155DFC]">
                      1450 / 2200
                    </span>
                  </div>
                  <div className="h-2 w-full bg-slate-200 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-emerald-500 rounded-full"
                      style={{ width: '65%' }}
                    />
                  </div>
                </div>
                <div className="ml-8 p-4 bg-white rounded-[1.5rem] shadow-sm">
                  <Apple
                    className="text-emerald-500"
                    size={24}
                    fill="currentColor"
                  />
                </div>
              </CardContent>
            </Card>
          </div>
        </motion.div>
      </div>
      <FloatingNavbar />
    </>
  );
}

/* REUSABLE BENTO STAT COMPONENT */

function QuickStat({ icon, value, label, unit, color }: any) {
  return (
    <Card className="border-2 border-slate-50 rounded-3xl p-4 text-center shadow-sm hover:border-[#155DFC]/10 transition-colors bg-white">
      <CardContent className="p-0 flex flex-col items-center gap-1">
        <div className={`${color} opacity-80 mb-1`}>{icon}</div>
        <div className="flex items-baseline gap-0.5">
          <span className="text-lg font-black text-slate-900 leading-none">
            {value}
          </span>
          <span className="text-[8px] font-bold text-slate-400 uppercase">
            {unit}
          </span>
        </div>
        <p className="text-[9px] font-black text-slate-400 uppercase tracking-tighter">
          {label}
        </p>
      </CardContent>
    </Card>
  );
}
