'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import {
  Flame,
  Dumbbell,
  Clock,
  ChevronRight,
  Zap,
  Target,
} from 'lucide-react';
import FloatingNavbar from '@/components/src/FloatingNavbar';

type Plan = {
  id: number;
  title: string;
  level: string;
  duration: string;
  progress: number;
  image: string;
  workouts: number;
};

const plans: Plan[] = [
  {
    id: 1,
    title: 'Beginner Strength',
    level: 'Beginner',
    duration: '4 Weeks',
    workouts: 12,
    progress: 20,
    image:
      'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=500&auto=format&fit=crop',
  },
  {
    id: 2,
    title: 'Fat Burn Program',
    level: 'Intermediate',
    duration: '6 Weeks',
    workouts: 24,
    progress: 40,
    image:
      'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=500&auto=format&fit=crop',
  },
  {
    id: 3,
    title: 'Muscle Builder',
    level: 'Advanced',
    duration: '8 Weeks',
    workouts: 32,
    progress: 10,
    image:
      'https://images.unsplash.com/photo-1621750627159-cf77b0b91aac?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bXVzY2xlfGVufDB8fDB8fHww',
  },
];

export default function PlansPage() {
  return (
    <>
      <div className="min-h-screen bg-white text-slate-900 pb-32 selection:bg-[#155DFC]/20">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-md mx-auto px-6 pt-12"
        >
          {/* HEADER */}
          <header className="flex justify-between items-end mb-10">
            <div>
              <h1 className="text-3xl font-black tracking-tight text-slate-900 leading-none">
                WORKOUT
              </h1>
              <p className="text-[#155DFC] text-xs font-bold uppercase tracking-widest mt-2">
                Personalized Plans
              </p>
            </div>
            <div className="bg-slate-50 p-2 rounded-xl border border-slate-100">
              <Target className="text-slate-400" size={20} />
            </div>
          </header>

          {/* ACTIVE PLAN CARD - PREMIUM DARK LOOK */}
          <div className="relative mb-12 overflow-hidden bg-slate-900 rounded-[2.5rem] p-8 text-white shadow-2xl shadow-[#155DFC]/20">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#155DFC] blur-[80px] opacity-40" />

            <div className="relative z-10">
              <div className="flex justify-between items-center mb-6">
                <Badge className="bg-[#155DFC] hover:bg-[#155DFC] text-[9px] uppercase font-black tracking-wider px-3 py-1 rounded-lg">
                  Current
                </Badge>
                <div className="flex items-center gap-1 text-orange-400">
                  <Flame size={14} fill="currentColor" />
                  <span className="text-xs font-bold">5 Day Streak</span>
                </div>
              </div>

              <h2 className="text-2xl font-black tracking-tight mb-1">
                Beginner Strength
              </h2>
              <p className="text-slate-400 text-xs font-medium mb-6 italic">
                Week 1 of 4 • 3 Workouts left
              </p>

              <div className="space-y-3">
                <div className="flex justify-between text-[10px] font-black uppercase tracking-widest text-slate-400">
                  <span>Overall Progress</span>
                  <span className="text-[#155DFC]">25%</span>
                </div>
                <div className="h-2.5 w-full bg-white/10 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: '25%' }}
                    transition={{ duration: 1 }}
                    className="h-full bg-[#155DFC] shadow-[0_0_15px_#155DFC]"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* PLANS LIST */}
          <div className="space-y-6">
            <h3 className="text-[11px] font-black text-slate-400 uppercase tracking-[0.2em] px-1">
              Discover New Plans
            </h3>

            <div className="space-y-4">
              {plans.map((plan, index) => (
                <motion.div
                  key={plan.id}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="rounded-[2rem] border-slate-100 shadow-sm hover:shadow-md transition-all group overflow-hidden border-2 hover:border-[#155DFC]/20">
                    <CardContent className="p-0">
                      <div className="flex p-4 gap-5">
                        <div className="relative w-24 h-24 shrink-0 overflow-hidden rounded-2xl">
                          <img
                            src={plan.image}
                            alt={plan.title}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-black/20" />
                        </div>

                        <div className="flex-1 py-1">
                          <div className="flex justify-between items-start">
                            <h4 className="font-black text-slate-800 text-base leading-tight group-hover:text-[#155DFC] transition-colors uppercase italic">
                              {plan.title}
                            </h4>
                          </div>

                          <div className="flex gap-2 mt-2">
                            <Badge className="bg-[#155DFC]/10 text-[#155DFC] border-none text-[8px] font-black uppercase px-2 py-0.5 rounded-md">
                              {plan.level}
                            </Badge>
                            <Badge className="bg-slate-50 text-slate-500 border-none text-[8px] font-black uppercase px-2 py-0.5 rounded-md flex items-center gap-1">
                              <Clock size={10} /> {plan.duration}
                            </Badge>
                          </div>

                          <div className="mt-4 flex items-center gap-3">
                            <div className="flex-1 h-1.5 bg-slate-100 rounded-full overflow-hidden">
                              <div
                                className="h-full bg-slate-300 group-hover:bg-[#155DFC] transition-all"
                                style={{ width: `${plan.progress}%` }}
                              />
                            </div>
                            <span className="text-[9px] font-black text-slate-400">
                              {plan.progress}%
                            </span>
                          </div>
                        </div>
                      </div>

                      <Button className="w-full h-12 bg-white hover:bg-[#155DFC] text-slate-900 hover:text-white rounded-none border-t border-slate-50 transition-all font-black text-[10px] uppercase tracking-widest gap-2">
                        Start Training <Zap size={14} fill="currentColor" />
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
      <FloatingNavbar />
    </>
  );
}
