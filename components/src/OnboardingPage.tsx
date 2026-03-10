'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ChevronRight,
  Trophy,
  Zap,
  Target,
  Check,
  UserCircle,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export default function OnboardingPage() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    experience: 'Beginner',
    isTrainer: false,
  });

  const experienceLevels = [
    {
      id: 'Beginner',
      desc: '0-2 years of experience',
      icon: Zap,
      color: 'text-green-500',
    },
    {
      id: 'Intermediate',
      desc: '2-4 years of experience',
      icon: Target,
      color: 'text-blue-500',
    },
    {
      id: 'Professional',
      desc: '4+ years of experience',
      icon: Trophy,
      color: 'text-amber-500',
    },
  ];

  const handleNext = () => {
    if (step === 1 && !formData.name.trim()) return;
    setStep(step + 1);
  };

  return (
    <div className="min-h-screen bg-[#0F172A] text-white flex flex-col items-center justify-center px-6 overflow-hidden relative font-sans">
      {/* Background Decorative Elements */}
      <div className="absolute top-[-10%] left-[-10%] w-64 h-64 bg-blue-600 rounded-full blur-[120px] opacity-20" />
      <div className="absolute bottom-[-10%] right-[-10%] w-64 h-64 bg-purple-600 rounded-full blur-[120px] opacity-20" />

      <AnimatePresence mode="wait">
        {/* STEP 1: NAME */}
        {step === 1 && (
          <motion.div
            key="step1"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            className="w-full max-w-md space-y-8 z-10"
          >
            <div className="space-y-2">
              <h1 className="text-4xl font-black tracking-tight leading-tight">
                Welcome to <span className="text-blue-500">Pro</span>Fit
              </h1>
              <p className="text-slate-400 text-lg">
                May we know your name first?
              </p>
            </div>
            <div className="relative group">
              <UserCircle
                className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-blue-500 transition-colors"
                size={24}
              />
              <Input
                placeholder="Enter your full name"
                value={formData.name}
                className="h-16 pl-12 bg-white/5 border-white/10 rounded-2xl text-xl focus:ring-2 focus:ring-blue-500 transition-all shadow-2xl placeholder:text-slate-600"
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />
            </div>
            <Button
              onClick={handleNext}
              disabled={!formData.name.trim()}
              className="w-full h-16 rounded-2xl bg-blue-600 hover:bg-blue-700 text-lg font-bold shadow-lg shadow-blue-500/20 group transition-all disabled:opacity-50"
            >
              Continue
              <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
        )}

        {/* STEP 2: EXPERIENCE */}
        {step === 2 && (
          <motion.div
            key="step2"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            className="w-full max-w-md space-y-6 z-10"
          >
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tight">
                Select Your Level
              </h2>
              <p className="text-slate-400 text-sm">
                This helps us customize a workout plan tailored for you.
              </p>
            </div>

            <div className="grid gap-4">
              {experienceLevels.map((lvl) => (
                <div
                  key={lvl.id}
                  onClick={() =>
                    setFormData({ ...formData, experience: lvl.id })
                  }
                  className={`p-5 rounded-[1.5rem] border-2 cursor-pointer transition-all flex items-center gap-5
                    ${
                      formData.experience === lvl.id
                        ? 'border-blue-500 bg-blue-500/10 shadow-[0_0_20px_rgba(59,130,246,0.15)]'
                        : 'border-white/5 bg-white/5 hover:bg-white/10 hover:border-white/20'
                    }`}
                >
                  <div className={`p-3 rounded-xl bg-slate-800 ${lvl.color}`}>
                    <lvl.icon size={24} />
                  </div>
                  <div className="flex-1 text-left">
                    <p className="font-bold text-lg leading-none mb-1">
                      {lvl.id}
                    </p>
                    <p className="text-xs text-slate-500 font-medium">
                      {lvl.desc}
                    </p>
                  </div>
                  {formData.experience === lvl.id && (
                    <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }}>
                      <Check className="text-blue-500" />
                    </motion.div>
                  )}
                </div>
              ))}
            </div>

            {/* Trainer Toggle Section */}
            <div
              className="flex items-center justify-between p-5 bg-white/5 rounded-[1.5rem] border border-white/10 mt-8 cursor-pointer hover:bg-white/10 transition-colors"
              onClick={() =>
                setFormData({ ...formData, isTrainer: !formData.isTrainer })
              }
            >
              <div className="space-y-1">
                <p className="font-bold text-white">
                  Are you a professional trainer?
                </p>
                <p className="text-[10px] text-slate-500 text-left uppercase tracking-widest font-bold">
                  Enable expert-level features
                </p>
              </div>
              <div
                className={`w-14 h-8 rounded-full p-1 transition-colors ${formData.isTrainer ? 'bg-blue-600' : 'bg-slate-700'}`}
              >
                <motion.div
                  animate={{ x: formData.isTrainer ? 24 : 0 }}
                  transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                  className="w-6 h-6 bg-white rounded-full shadow-md"
                />
              </div>
            </div>

            <Button
              onClick={() => (window.location.href = '/ExercisePlannerPage')}
              className="w-full h-16 rounded-2xl bg-blue-600 hover:bg-blue-700 text-lg font-bold shadow-xl shadow-blue-900/20 active:scale-[0.98] transition-all"
            >
              Launch My Journey
            </Button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Navigation Progress Dots */}
      <div className="absolute bottom-10 flex gap-3">
        {[1, 2].map((i) => (
          <div
            key={i}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              step === i ? 'w-10 bg-blue-500' : 'w-4 bg-white/10'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
