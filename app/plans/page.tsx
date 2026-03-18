'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Flame,
  Clock,
  Zap,
  Target,
  ChevronDown,
  Lock,
  CheckCircle2,
  Trophy,
} from 'lucide-react';
import FloatingNavbar from '@/components/src/FloatingNavbar';

// Dummy data with schedule added
const plans = [
  {
    id: 1,
    title: 'Beginner Strength',
    level: 'Beginner',
    duration: '4 Weeks',
    progress: 25,
    image:
      'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=500&auto=format&fit=crop',
    schedule: ['Push Day', 'Pull Day', 'Leg Day', 'Rest'],
  },
  {
    id: 2,
    title: 'Fat Burn Program',
    level: 'Intermediate',
    duration: '6 Weeks',
    progress: 40,
    image:
      'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=500&auto=format&fit=crop',
    schedule: ['HIIT Cardio', 'Abs Burner', 'Lower Body', 'Active Rest'],
  },
  {
    id: 3,
    title: 'Muscle Builder',
    level: 'Advanced',
    duration: '8 Weeks',
    progress: 10,
    image:
      'https://images.unsplash.com/photo-1621750627159-cf77b0b91aac?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bXVzY2xlfGVufDB8fDB8fHww',
    schedule: ['Chest/Back', 'Shoulders/Arms', 'Legs Heavy', 'Rest Day'],
  },
];

export default function PlansPage() {
  const [expandedPlan, setExpandedPlan] = useState<number | null>(null);
  const [isStarting, setIsStarting] = useState<number | null>(null);

  const handleStartTraining = (id: number) => {
    setIsStarting(id);
    // Simulate plan activation
    setTimeout(() => setIsStarting(null), 2000);
  };

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
                TRAINING <span className="text-[#155DFC]">PLANS</span>
              </h1>
              <p className="text-slate-400 text-[10px] font-black uppercase tracking-[0.2em] mt-2">
                Curated for <span className="text-slate-900">Rajesh</span>
              </p>
            </div>
            <motion.div
              whileTap={{ rotate: 180 }}
              className="bg-slate-50 p-2.5 rounded-2xl border border-slate-100 shadow-sm"
            >
              <Target className="text-[#155DFC]" size={22} />
            </motion.div>
          </header>

          {/* ACTIVE PLAN - PREMIUM LOOK */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="relative mb-12 overflow-hidden bg-slate-950 rounded-[2.5rem] p-8 text-white shadow-2xl shadow-[#155DFC]/30"
          >
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#155DFC] blur-[100px] opacity-30" />

            <div className="relative z-10">
              <div className="flex justify-between items-center mb-6">
                <Badge className="bg-[#155DFC] text-[9px] font-black px-3 py-1">
                  CURRENT PLAN
                </Badge>
                <div className="flex items-center gap-1.5 text-orange-400">
                  <Trophy size={14} />
                  <span className="text-[10px] font-bold uppercase tracking-tighter">
                    Week 1 / Day 4
                  </span>
                </div>
              </div>

              <h2 className="text-2xl font-black italic tracking-tighter mb-6 uppercase">
                Beginner Strength
              </h2>

              <div className="space-y-4">
                <div className="flex justify-between text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">
                  <span>Progress</span>
                  <span className="text-[#155DFC]">25%</span>
                </div>
                <div className="h-3 w-full bg-white/5 rounded-full overflow-hidden border border-white/5 p-0.5">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: '25%' }}
                    className="h-full bg-gradient-to-r from-[#155DFC] to-blue-400 rounded-full shadow-[0_0_20px_#155DFC]"
                  />
                </div>
              </div>
            </div>
          </motion.div>

          {/* DISCOVER SECTION */}
          <div className="space-y-6">
            <h3 className="text-[11px] font-black text-slate-400 uppercase tracking-[0.3em] px-1">
              Select Your Path
            </h3>

            <div className="space-y-4">
              {plans.map((plan) => (
                <motion.div key={plan.id} layout>
                  <Card
                    className={`rounded-[2.5rem] border-slate-100 transition-all overflow-hidden ${
                      expandedPlan === plan.id
                        ? 'ring-2 ring-[#155DFC] shadow-2xl'
                        : 'shadow-sm'
                    }`}
                  >
                    <CardContent className="p-0">
                      <div
                        className="flex p-5 gap-5 cursor-pointer"
                        onClick={() =>
                          setExpandedPlan(
                            expandedPlan === plan.id ? null : plan.id,
                          )
                        }
                      >
                        <div className="relative w-24 h-24 shrink-0 overflow-hidden rounded-[1.8rem]">
                          <img
                            src={plan.image}
                            className="w-full h-full object-cover"
                            alt=""
                          />
                          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                            <motion.div
                              animate={{
                                rotate: expandedPlan === plan.id ? 180 : 0,
                              }}
                            >
                              <ChevronDown
                                className="text-white opacity-60"
                                size={20}
                              />
                            </motion.div>
                          </div>
                        </div>

                        <div className="flex-1 py-1">
                          <h4 className="font-black text-slate-900 text-lg italic uppercase leading-none mb-3">
                            {plan.title}
                          </h4>
                          <div className="flex gap-2">
                            <Badge
                              variant="secondary"
                              className="bg-slate-50 text-slate-500 text-[8px] font-black rounded-md px-2"
                            >
                              {plan.duration}
                            </Badge>
                            <Badge
                              variant="secondary"
                              className="bg-[#155DFC]/5 text-[#155DFC] text-[8px] font-black rounded-md px-2"
                            >
                              {plan.level}
                            </Badge>
                          </div>
                        </div>
                      </div>

                      {/* EXPANDED DETAILS */}
                      <AnimatePresence>
                        {expandedPlan === plan.id && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="px-6 pb-6"
                          >
                            <div className="pt-2 pb-6 border-t border-slate-50">
                              <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-4">
                                Plan Overview
                              </p>
                              <div className="grid grid-cols-2 gap-3">
                                {plan.schedule.map((item, i) => (
                                  <div
                                    key={i}
                                    className="flex items-center gap-3 bg-slate-50 p-3 rounded-2xl border border-slate-100"
                                  >
                                    <CheckCircle2
                                      size={14}
                                      className={
                                        i === 3
                                          ? 'text-slate-300'
                                          : 'text-[#155DFC]'
                                      }
                                    />
                                    <span className="text-[10px] font-bold text-slate-700 uppercase italic">
                                      {item}
                                    </span>
                                  </div>
                                ))}
                              </div>
                            </div>

                            <Button
                              onClick={() => handleStartTraining(plan.id)}
                              disabled={isStarting !== null}
                              className="w-full h-14 bg-[#155DFC] hover:bg-blue-700 text-white rounded-2xl font-black text-xs uppercase tracking-[0.2em] shadow-lg shadow-[#155DFC]/20 gap-3 transition-all active:scale-95"
                            >
                              {isStarting === plan.id ? (
                                <motion.div
                                  animate={{ rotate: 360 }}
                                  transition={{
                                    repeat: Infinity,
                                    duration: 1,
                                    ease: 'linear',
                                  }}
                                >
                                  <Zap size={18} fill="currentColor" />
                                </motion.div>
                              ) : (
                                <>
                                  Switch To This Plan{' '}
                                  <Zap size={16} fill="currentColor" />
                                </>
                              )}
                            </Button>
                          </motion.div>
                        )}
                      </AnimatePresence>
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
