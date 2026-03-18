'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  Dumbbell,
  Flame,
  Apple,
  Zap,
  ChevronRight,
  Clock,
  ChevronDown,
  CheckCircle2,
  Play,
} from 'lucide-react';
import FloatingNavbar from '@/components/src/FloatingNavbar';

const FADE_UP_VARIANT = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, staggerChildren: 0.08 },
  },
};

export default function HomePage() {
  const [expandedExercise, setExpandedExercise] = useState<string | null>(null);

  const stepGoal = 10000;
  const currentSteps = 6420;
  const stepPercentage = Math.round((currentSteps / stepGoal) * 100);

  // Expanded Exercise logic
  const toggleExercise = (id: string) => {
    setExpandedExercise(expandedExercise === id ? null : id);
  };

  return (
    <>
      <div className="min-h-screen bg-slate-50 text-slate-900 pb-40 selection:bg-[#155DFC]/10">
        <div className="fixed top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-gradient-to-b from-[#155DFC]/5 to-transparent pointer-events-none" />

        <motion.div
          variants={FADE_UP_VARIANT}
          initial="hidden"
          animate="visible"
          className="max-w-md mx-auto px-6 pt-12 relative z-10"
        >
          {/* 1. HEADER */}
          <header className="flex items-center justify-between mb-10">
            <div>
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-1.5">
                Your Hub
              </p>
              <h1 className="text-3xl font-black tracking-tighter text-slate-950 flex items-center gap-2">
                Rajesh <span className="text-3xl animate-bounce">⚡</span>
              </h1>
            </div>
            <motion.div whileTap={{ scale: 0.9 }}>
              <Avatar className="w-14 h-14 border-[4px] border-white shadow-2xl ring-2 ring-slate-100 cursor-pointer">
                <AvatarImage src="/avatar.png" />
                <AvatarFallback className="bg-slate-100 text-[#155DFC] font-bold">
                  RG
                </AvatarFallback>
              </Avatar>
            </motion.div>
          </header>

          {/* 2. HERO BENTO */}
          <div className="grid grid-cols-5 gap-3 mb-8">
            <motion.div
              whileTap={{ scale: 0.98 }}
              className="col-span-3 bg-white/60 backdrop-blur-xl border border-white/50 rounded-[2.5rem] p-7 flex flex-col justify-between shadow-lg shadow-slate-100 cursor-pointer relative group overflow-hidden"
            >
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
                <div className="flex items-center gap-2 mt-2">
                  <Play size={10} className="text-[#155DFC] fill-current" />
                  <p className="text-slate-500 text-[9px] font-bold tracking-widest uppercase">
                    Resume Workout
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Steps Circle */}
            <motion.div
              whileTap={{ scale: 0.98 }}
              className="col-span-2 bg-slate-950 rounded-[2.5rem] p-5 text-white flex flex-col items-center justify-center relative cursor-pointer"
            >
              <div className="relative w-24 h-24 flex items-center justify-center">
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
                    transition={{ duration: 1.5 }}
                  />
                </svg>
                <div className="text-center z-10">
                  <Zap
                    className="text-[#155DFC] mb-0.5 mx-auto"
                    size={14}
                    fill="currentColor"
                  />
                  <span className="text-xl font-black">{currentSteps}</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* 3. HEALTH GRIDS */}
          <div className="grid grid-cols-2 gap-3 mb-8">
            <Card className="rounded-[2.5rem] border-slate-100 shadow-sm p-6 bg-white cursor-pointer active:scale-95 transition-transform">
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1.5">
                Burn Rate
              </p>
              <h3 className="text-4xl font-black italic tracking-tighter">
                420
                <span className="text-xs ml-1 text-orange-500 not-italic">
                  kcal
                </span>
              </h3>
              <div className="flex gap-1 mt-4">
                {[...Array(6)].map((_, i) => (
                  <div
                    key={i}
                    className={`h-1.5 flex-1 rounded-full ${i < 3 ? 'bg-orange-500 shadow-[0_0_8px_#F97316]' : 'bg-slate-100'}`}
                  />
                ))}
              </div>
            </Card>

            <Card className="rounded-[2.5rem] border-slate-100 shadow-sm p-6 bg-white cursor-pointer active:scale-95 transition-transform">
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1.5">
                Calories In
              </p>
              <h3 className="text-4xl font-black italic tracking-tighter">
                1.4
                <span className="text-xs ml-1 text-emerald-500 not-italic">
                  k
                </span>
              </h3>
              <div className="flex gap-1 mt-4">
                {[...Array(6)].map((_, i) => (
                  <div
                    key={i}
                    className={`h-1.5 flex-1 rounded-full ${i < 4 ? 'bg-emerald-500' : 'bg-slate-100'}`}
                  />
                ))}
              </div>
            </Card>
          </div>

          {/* 4. DETAILED ACTIVITY TIMELINE */}
          <div className="space-y-3">
            <div className="flex justify-between items-center px-1 mb-4">
              <h3 className="text-[11px] font-black text-slate-400 uppercase tracking-[0.2em]">
                Live Session
              </h3>
              <motion.button
                whileTap={{ scale: 0.9 }}
                className="text-[10px] font-black text-[#155DFC] uppercase flex items-center gap-1"
              >
                View All <ChevronRight size={12} />
              </motion.button>
            </div>

            {/* CLICKABLE EXERCISE ITEM */}
            {[
              {
                id: '1',
                name: 'Bench Press',
                sets: '4 Sets',
                detail: '10 Reps • 60kg',
              },
              {
                id: '2',
                name: 'Incline Dumbbell',
                sets: '3 Sets',
                detail: '12 Reps • 20kg',
              },
              {
                id: '3',
                name: 'Chest Flys',
                sets: '3 Sets',
                detail: '15 Reps • 15kg',
              },
            ].map((ex) => (
              <div key={ex.id} className="overflow-hidden">
                <motion.div
                  onClick={() => toggleExercise(ex.id)}
                  className={`flex justify-between items-center p-5 bg-white border rounded-2xl cursor-pointer transition-colors ${
                    expandedExercise === ex.id
                      ? 'border-[#155DFC] shadow-md'
                      : 'border-slate-100'
                  }`}
                >
                  <div className="flex gap-4 items-center">
                    <div
                      className={`h-2 w-2 rounded-full ${expandedExercise === ex.id ? 'bg-[#155DFC] animate-ping' : 'bg-slate-200'}`}
                    />
                    <div>
                      <p className="font-black text-slate-800 text-sm uppercase italic leading-none">
                        {ex.name}
                      </p>
                      <p className="text-[10px] text-slate-400 font-bold mt-1">
                        {ex.sets}
                      </p>
                    </div>
                  </div>
                  <motion.div
                    animate={{ rotate: expandedExercise === ex.id ? 180 : 0 }}
                  >
                    <ChevronDown size={16} className="text-slate-300" />
                  </motion.div>
                </motion.div>

                {/* EXPANDED CONTENT */}
                <AnimatePresence>
                  {expandedExercise === ex.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="bg-slate-50/50 mx-2 rounded-b-2xl border-x border-b border-slate-100 overflow-hidden"
                    >
                      <div className="p-4 space-y-3">
                        {[1, 2, 3, 4].map((set) => (
                          <div
                            key={set}
                            className="flex justify-between items-center bg-white p-3 rounded-xl border border-slate-100"
                          >
                            <span className="text-[10px] font-black text-slate-400">
                              SET {set}
                            </span>
                            <span className="text-xs font-bold text-slate-700">
                              {ex.detail}
                            </span>
                            <motion.button
                              whileTap={{ scale: 0.8 }}
                              className="text-slate-200 hover:text-emerald-500 transition-colors"
                            >
                              <CheckCircle2 size={18} />
                            </motion.button>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
      <FloatingNavbar />
    </>
  );
}
