'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Apple, Flame, Plus, Clock, Zap } from 'lucide-react';
import FloatingNavbar from '@/components/src/FloatingNavbar';

type Meal = {
  id: number;
  name: string;
  calories: number;
  type: string;
  image: string;
  time: string;
};

const meals: Meal[] = [
  {
    id: 1,
    name: 'Oatmeal with Fruits',
    calories: 320,
    type: 'Breakfast',
    image:
      'https://plus.unsplash.com/premium_photo-1671379041175-782d15092945?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZnJ1aXRzfGVufDB8fDB8fHww',
    time: '08:30 AM',
  },
  {
    id: 2,
    name: 'Grilled Chicken Salad',
    calories: 450,
    type: 'Lunch',
    image:
      'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=500&auto=format&fit=crop',
    time: '01:30 PM',
  },
  {
    id: 3,
    name: 'Protein Shake',
    calories: 200,
    type: 'Snack',
    image:
      'https://images.unsplash.com/photo-1542444592-0d5997f202eb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvdGVpbiUyMHNoYWtlfGVufDB8fDB8fHww',
    time: '05:00 PM',
  },
  {
    id: 4,
    name: 'Brown Rice & Paneer',
    calories: 520,
    type: 'Dinner',
    image:
      'https://images.unsplash.com/photo-1543339308-43e59d6b73a6?q=80&w=500&auto=format&fit=crop',
    time: '08:45 PM',
  },
];

export default function NutritionPage() {
  const totalCalories = 1490;
  const goalCalories = 2200;
  const progress = (totalCalories / goalCalories) * 100;

  return (
    <>
      <div className="min-h-screen bg-white text-slate-900 pb-32 selection:bg-[#155DFC]/20">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-md mx-auto px-6 pt-12"
        >
          {/* HEADER */}
          <header className="flex justify-between items-center mb-8">
            <div>
              <h1 className="text-3xl font-black tracking-tight text-slate-900 leading-none">
                FUEL UP
              </h1>
              <p className="text-slate-400 text-xs font-bold uppercase tracking-widest mt-2">
                Daily Nutrition Tracker
              </p>
            </div>
            <button className="w-12 h-12 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center text-[#155DFC] hover:bg-[#155DFC] hover:text-white transition-all shadow-sm active:scale-95">
              <Plus size={24} />
            </button>
          </header>

          {/* CALORIE CARD */}
          <div className="relative mb-10 overflow-hidden bg-slate-900 rounded-[2.5rem] p-8 text-white shadow-2xl shadow-[#155DFC]/20">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#155DFC] blur-[80px] opacity-40" />

            <div className="relative z-10">
              <div className="flex justify-between items-start mb-6">
                <div className="p-3 bg-white/10 rounded-2xl backdrop-blur-md">
                  <Flame className="text-[#155DFC]" fill="#155DFC" size={24} />
                </div>
                <div className="text-right">
                  <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">
                    Remaining
                  </p>
                  <p className="text-xl font-bold">
                    {goalCalories - totalCalories} kcal
                  </p>
                </div>
              </div>

              <div className="mb-6">
                <h2 className="text-5xl font-black tracking-tighter mb-1">
                  {totalCalories}
                </h2>
                <p className="text-slate-400 text-xs font-bold uppercase tracking-widest">
                  Calories Consumed
                </p>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between text-[10px] font-black uppercase tracking-widest mb-1">
                  <span>Progress</span>
                  <span>{Math.round(progress)}%</span>
                </div>
                <div className="h-3 w-full bg-white/10 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${progress}%` }}
                    transition={{ duration: 1, ease: 'easeOut' }}
                    className="h-full bg-[#155DFC] shadow-[0_0_15px_#155DFC]"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* MACROS QUICK VIEW */}
          <div className="grid grid-cols-3 gap-3 mb-10">
            <MacroCard label="Protein" value="112g" color="bg-orange-500" />
            <MacroCard label="Carbs" value="180g" color="bg-[#155DFC]" />
            <MacroCard label="Fats" value="45g" color="bg-emerald-500" />
          </div>

          {/* MEALS TIMELINE */}
          <div className="space-y-6">
            <div className="flex justify-between items-center px-1">
              <h3 className="text-[11px] font-black text-slate-400 uppercase tracking-[0.2em]">
                Meal Timeline
              </h3>
              <Badge
                variant="outline"
                className="border-slate-200 text-slate-400 text-[10px] rounded-lg"
              >
                Today
              </Badge>
            </div>

            <div className="space-y-4">
              {meals.map((meal, index) => (
                <motion.div
                  key={meal.id}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="rounded-[2rem] border-slate-100 shadow-sm hover:shadow-md transition-all overflow-hidden group cursor-pointer active:scale-[0.98]">
                    <CardContent className="p-4 flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="relative w-16 h-16 shrink-0">
                          <img
                            src={meal.image}
                            alt={meal.name}
                            className="w-full h-full rounded-2xl object-cover border border-slate-100"
                          />
                          <div className="absolute -bottom-1 -right-1 bg-white p-1 rounded-lg shadow-sm">
                            <Zap
                              size={10}
                              className="text-[#155DFC]"
                              fill="#155DFC"
                            />
                          </div>
                        </div>

                        <div>
                          <p className="font-bold text-slate-800 text-sm group-hover:text-[#155DFC] transition-colors">
                            {meal.name}
                          </p>
                          <div className="flex items-center gap-3 mt-1">
                            <span className="text-[11px] font-bold text-[#155DFC]">
                              {meal.calories} kcal
                            </span>
                            <span className="flex items-center gap-1 text-[10px] text-slate-400 font-medium">
                              <Clock size={10} /> {meal.time}
                            </span>
                          </div>
                        </div>
                      </div>

                      <Badge className="bg-slate-50 text-slate-500 hover:bg-[#155DFC]/10 hover:text-[#155DFC] border-none px-3 py-1 rounded-xl text-[9px] font-black uppercase tracking-tighter transition-all">
                        {meal.type}
                      </Badge>
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

function MacroCard({
  label,
  value,
  color,
}: {
  label: string;
  value: string;
  color: string;
}) {
  return (
    <div className="bg-white border-2 border-slate-50 rounded-3xl p-4 text-center hover:border-[#155DFC]/10 transition-colors">
      <div className={`w-1.5 h-1.5 rounded-full ${color} mx-auto mb-2`} />
      <p className="text-[9px] font-black text-slate-400 uppercase tracking-tighter mb-0.5">
        {label}
      </p>
      <p className="text-sm font-black text-slate-800 tracking-tight">
        {value}
      </p>
    </div>
  );
}
