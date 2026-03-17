'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  Dumbbell,
  Flame,
  Apple,
  Activity,
  Zap,
  ChevronRight,
  Clock,
  Footprints,
  Target, // New Icon
} from 'lucide-react';
import FloatingNavbar from '@/components/src/FloatingNavbar';

// Reuseable Framer motion transitions
const FADE_UP_VARIANT = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, staggerChildren: 0.08 },
  },
};

export default function HomePage() {
  const stepGoal = 10000;
  const currentSteps = 6420;
  const stepPercentage = Math.round((currentSteps / stepGoal) * 100);

  return (
    <>
      <div className="min-h-screen bg-slate-50 text-slate-900 pb-32 selection:bg-[#155DFC]/10">
        {/* Deep background glow */}
        <div className="fixed top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-gradient-to-b from-[#155DFC]/5 to-transparent pointer-events-none" />

        <motion.div
          variants={FADE_UP_VARIANT}
          initial="hidden"
          animate="visible"
          className="max-w-md mx-auto px-6 pt-12 relative z-10"
        >
          {/* 1. MINIMAL HEADER SECTION */}
          <header className="flex items-center justify-between mb-12">
            <div>
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-1.5">
                Your Hub
              </p>
              <h1 className="text-3xl font-black tracking-tighter text-slate-950 flex items-center gap-2">
                Rajesh <span className="text-3xl animate-bounce">⚡</span>
              </h1>
            </div>
            <Avatar className="w-16 h-16 border-[4px] border-white shadow-2xl ring-2 ring-slate-100">
              <AvatarImage src="/avatar.png" />
              <AvatarFallback className="bg-slate-100 text-[#155DFC] font-bold text-xl">
                RG
              </AvatarFallback>
            </Avatar>
          </header>

          {/* 2. THE HERO BENTO: CIRCULAR PROGRESS RING & WORKOUT */}
          <div className="grid grid-cols-5 gap-3 mb-8">
            {/* Left: Workout Preview (Glassmorphism) */}
            <div className="col-span-3 bg-white/60 backdrop-blur-xl border border-white/50 rounded-[2.5rem] p-7 flex flex-col justify-between shadow-lg shadow-slate-100">
              <div className="flex justify-between items-start">
                <div className="p-2.5 bg-[#155DFC] rounded-xl text-white shadow-xl shadow-[#155DFC]/30">
                  <Dumbbell size={20} />
                </div>
                <Badge className="bg-[#155DFC]/5 text-[#155DFC] border-none text-[8px] font-black uppercase rounded-full">
                  Day 02
                </Badge>
              </div>
              <div className="mt-8">
                <p className="font-black text-slate-900 text-lg tracking-tight uppercase italic leading-none">
                  Upper Body
                </p>
                <p className="text-slate-500 text-[10px] font-semibold mt-1.5">
                  6 EXS • 45 MIN
                </p>
              </div>
              <ChevronRight
                size={18}
                className="absolute bottom-6 right-6 text-slate-300"
              />
            </div>

            {/* Right: Steps Circle (Premium Radial Progress) */}
            <div className="col-span-2 bg-slate-950 rounded-[2.5rem] p-5 text-white flex flex-col items-center justify-center relative overflow-hidden group active:scale-[0.98]">
              {/* Circular Ring SVG */}
              <div className="relative w-28 h-28 flex items-center justify-center mb-1">
                <svg className="absolute w-full h-full" viewBox="0 0 120 120">
                  <circle
                    cx="60"
                    cy="60"
                    r="54"
                    fill="none"
                    stroke="rgba(255,255,255,0.08)"
                    strokeWidth="12"
                  />
                  <motion.circle
                    cx="60"
                    cy="60"
                    r="54"
                    fill="none"
                    stroke="#155DFC"
                    strokeWidth="12"
                    strokeLinecap="round"
                    transform="rotate(-90 60 60)"
                    initial={{ strokeDasharray: '0, 1000' }}
                    animate={{
                      strokeDasharray: `${(stepPercentage * 340) / 100}, 1000`,
                    }}
                    transition={{ duration: 1.5, ease: 'easeOut' }}
                  />
                </svg>
                <div className="text-center">
                  <Zap
                    className="text-[#155DFC] mb-1 mx-auto"
                    size={18}
                    fill="currentColor"
                  />
                  <span className="text-2xl font-black">{currentSteps}</span>
                  <p className="text-[9px] font-bold text-slate-400">STEPS</p>
                </div>
              </div>
            </div>
          </div>

          {/* 3. RADICAL "SEGMENTED" HEALTH GRIDS (New Unique Feature) */}
          <div className="grid grid-cols-2 gap-3 mb-8">
            {/* Left: Calorie Segmented Arc */}
            <Card className="rounded-[2.5rem] border-slate-100 shadow-sm p-6 bg-white overflow-hidden relative group">
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1.5">
                Burn Rate
              </p>
              <div className="flex gap-2 items-end">
                <h3 className="text-4xl font-black tracking-tight leading-none italic">
                  420
                </h3>
                <span className="text-xs font-bold text-orange-500 mb-0.5">
                  kcal
                </span>
              </div>
              {/* Visual Segments */}
              <div className="flex gap-1.5 mt-5 h-2">
                {[...Array(8)].map((_, i) => (
                  <div
                    key={i}
                    className={`flex-1 rounded-full ${i < 3 ? 'bg-orange-500 shadow-[0_0_8px_#F97316]' : 'bg-slate-100'}`}
                  />
                ))}
              </div>
              <Flame
                className="absolute top-6 right-6 text-orange-400/20"
                size={32}
              />
            </Card>

            {/* Right: Nutrition Hex-Progress */}
            <Card className="rounded-[2.5rem] border-slate-100 shadow-sm p-6 bg-white overflow-hidden relative">
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1.5">
                Calories In
              </p>
              <div className="flex items-center gap-4">
                <div className="relative h-12 w-12 shrink-0">
                  <Apple
                    className="text-emerald-500"
                    size={48}
                    fill="currentColor"
                    strokeWidth={1}
                  />
                </div>
                <div>
                  <span className="text-2xl font-black text-slate-800">
                    1450
                  </span>
                  <p className="text-[10px] font-bold text-slate-400 uppercase">
                    of 2200 kcal
                  </p>
                </div>
              </div>
              {/* Unique Hex Bar */}
              <div className="absolute bottom-0 left-0 right-0 h-1.5 flex gap-1 px-1">
                {[...Array(15)].map((_, i) => (
                  <div
                    key={i}
                    className={`flex-1 ${i < 10 ? 'bg-emerald-500' : 'bg-slate-100'}`}
                  />
                ))}
              </div>
            </Card>
          </div>

          {/* 4. PREVIEW TIMELINE */}
          <div className="space-y-4">
            <div className="flex justify-between items-center px-1 mb-5">
              <h3 className="text-[11px] font-black text-slate-400 uppercase tracking-[0.2em]">
                Activity Timeline
              </h3>
              <button className="text-[10px] font-black text-[#155DFC] uppercase flex items-center gap-1 active:scale-95 transition-all">
                Weekly <Clock size={12} className="ml-0.5" />
              </button>
            </div>

            {/* Exercise Item (Minimalist List Style) */}
            <motion.div
              whileHover={{ x: 5 }}
              className="flex justify-between items-center p-5 bg-white border border-slate-100 rounded-2xl cursor-pointer"
            >
              <div className="flex gap-4 items-center">
                <div className="h-2 w-2 rounded-full bg-[#155DFC] animate-pulse" />
                <p className="font-bold text-slate-700 text-sm">
                  Bench Press{' '}
                  <span className="text-xs text-slate-400 font-medium">
                    10 Reps x 4
                  </span>
                </p>
              </div>
              <ChevronRight size={16} className="text-slate-300" />
            </motion.div>
          </div>
        </motion.div>
      </div>
      <FloatingNavbar />
    </>
  );
}
