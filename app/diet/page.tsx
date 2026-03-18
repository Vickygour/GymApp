'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Flame, Clock, CheckCircle2, Circle } from 'lucide-react';
import FloatingNavbar from '@/components/src/FloatingNavbar';

// Primary Color: #155DFC

type Meal = {
  id: number;
  name: string;
  calories: number;
  type: string;
  image: string;
  time: string;
  completed: boolean; // Tracking status
};

export default function NutritionPage() {
  const goalCalories = 2200;

  // Pre-defined Diet Plan (Target)
  const [meals, setMeals] = useState<Meal[]>([
    {
      id: 1,
      name: 'Oatmeal with Fruits',
      calories: 320,
      type: 'Breakfast',
      image:
        'https://plus.unsplash.com/premium_photo-1671379041175-782d15092945?w=600&auto=format&fit=crop&q=60',
      time: '08:30 AM',
      completed: false,
    },
    {
      id: 2,
      name: 'Grilled Chicken Salad',
      calories: 450,
      type: 'Lunch',
      image:
        'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=500&auto=format&fit=crop',
      time: '01:30 PM',
      completed: false,
    },
    {
      id: 3,
      name: 'Protein Shake',
      calories: 200,
      type: 'Snack',
      image:
        'https://images.unsplash.com/photo-1542444592-0d5997f202eb?w=600&auto=format&fit=crop',
      time: '05:00 PM',
      completed: false,
    },
    {
      id: 4,
      name: 'Brown Rice & Paneer',
      calories: 520,
      type: 'Dinner',
      image:
        'https://images.unsplash.com/photo-1543339308-43e59d6b73a6?q=80&w=500&auto=format&fit=crop',
      time: '08:45 PM',
      completed: false,
    },
  ]);

  // Logic: Sirf wahi calories count hongi jo "completed" hain
  const consumedCalories = meals
    .filter((meal) => meal.completed)
    .reduce((acc, meal) => acc + meal.calories, 0);

  const progress = (consumedCalories / goalCalories) * 100;

  // Toggle Completion
  const toggleMeal = (id: number) => {
    setMeals(
      meals.map((meal) =>
        meal.id === id ? { ...meal, completed: !meal.completed } : meal,
      ),
    );
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
          <header className="mb-8">
            <h1 className="text-3xl font-black tracking-tight text-slate-900 leading-none">
              FUEL UP
            </h1>
            <p className="text-slate-400 text-xs font-bold uppercase tracking-widest mt-2">
              Mark your meals to track progress
            </p>
          </header>

          {/* PROGRESS CARD */}
          <div className="relative mb-10 overflow-hidden bg-slate-900 rounded-[2.5rem] p-8 text-white shadow-2xl shadow-[#155DFC]/20">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#155DFC] blur-[80px] opacity-40" />

            <div className="relative z-10">
              <div className="flex justify-between items-start mb-6">
                <div className="p-3 bg-white/10 rounded-2xl backdrop-blur-md">
                  <Flame className="text-[#155DFC]" fill="#155DFC" size={24} />
                </div>
                <div className="text-right">
                  <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">
                    Target
                  </p>
                  <p className="text-xl font-bold">{goalCalories} kcal</p>
                </div>
              </div>

              <div className="mb-6">
                <motion.h2
                  key={consumedCalories}
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="text-6xl font-black tracking-tighter mb-1 text-[#155DFC]"
                >
                  {consumedCalories}
                </motion.h2>
                <p className="text-slate-400 text-xs font-bold uppercase tracking-widest">
                  Calories Consumed
                </p>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between text-[10px] font-black uppercase tracking-widest">
                  <span>Daily Goal</span>
                  <span>{Math.round(progress)}%</span>
                </div>
                <div className="h-3 w-full bg-white/10 rounded-full overflow-hidden">
                  <motion.div
                    animate={{ width: `${progress}%` }}
                    transition={{ type: 'spring', stiffness: 50 }}
                    className="h-full bg-[#155DFC] shadow-[0_0_20px_#155DFC]"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* DIET PLAN LIST */}
          <div className="space-y-6">
            <h3 className="text-[11px] font-black text-slate-400 uppercase tracking-[0.2em] px-1">
              Today's Diet Plan
            </h3>

            <div className="space-y-4">
              {meals.map((meal) => (
                <motion.div
                  key={meal.id}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => toggleMeal(meal.id)}
                >
                  <Card
                    className={`rounded-[2rem] border-2 transition-all cursor-pointer overflow-hidden ${
                      meal.completed
                        ? 'border-[#155DFC] bg-blue-50/30'
                        : 'border-slate-50 bg-white'
                    }`}
                  >
                    <CardContent className="p-4 flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="relative w-14 h-14 shrink-0">
                          <img
                            src={meal.image}
                            alt={meal.name}
                            className={`w-full h-full rounded-2xl object-cover transition-filter duration-500 ${
                              meal.completed ? 'grayscale-0' : 'grayscale'
                            }`}
                          />
                          {meal.completed && (
                            <div className="absolute -top-2 -right-2 bg-[#155DFC] text-white rounded-full p-1 shadow-lg">
                              <CheckCircle2 size={14} />
                            </div>
                          )}
                        </div>

                        <div>
                          <p
                            className={`font-bold text-sm transition-colors ${
                              meal.completed
                                ? 'text-[#155DFC]'
                                : 'text-slate-800'
                            }`}
                          >
                            {meal.name}
                          </p>
                          <div className="flex items-center gap-3 mt-1">
                            <span className="text-[11px] font-bold text-slate-500">
                              {meal.calories} kcal
                            </span>
                            <span className="flex items-center gap-1 text-[10px] text-slate-400 font-medium">
                              <Clock size={10} /> {meal.time}
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="pr-2">
                        {meal.completed ? (
                          <CheckCircle2 className="text-[#155DFC]" size={24} />
                        ) : (
                          <Circle className="text-slate-200" size={24} />
                        )}
                      </div>
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
