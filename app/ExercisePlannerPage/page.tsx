'use client';

import { useState } from 'react';
import {
  format,
  startOfWeek,
  addDays,
  isSameDay,
  startOfMonth,
  endOfMonth,
  eachDayOfInterval,
} from 'date-fns';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';
import {
  ChevronDown,
  ChevronUp,
  Play,
  CheckCircle2,
  Dumbbell,
  X,
  Undo2,
} from 'lucide-react';
import FloatingNavbar from '@/components/src/FloatingNavbar';
import { motion, AnimatePresence } from 'framer-motion';

const ALL_EXERCISES = [
  {
    id: 1,
    title: 'Incline Bench Press',
    tag: 'Chest',
    sets: 4,
    reps: 12,
    weight: '60kg',
  },
  {
    id: 2,
    title: 'Lat Pulldowns',
    tag: 'Back',
    sets: 3,
    reps: 10,
    weight: '45kg',
  },
  {
    id: 3,
    title: 'Barbell Overhead Extension',
    tag: 'Triceps',
    sets: 3,
    reps: 8,
    weight: '20kg',
  },
  {
    id: 4,
    title: 'Hammer Curls',
    tag: 'Biceps',
    sets: 3,
    reps: 12,
    weight: '12kg',
  },
  {
    id: 5,
    title: 'Lateral Raises',
    tag: 'Shoulder',
    sets: 4,
    reps: 15,
    weight: '7.5kg',
  },
  {
    id: 6,
    title: 'Leg Press',
    tag: 'Legs',
    sets: 4,
    reps: 10,
    weight: '120kg',
  },
  {
    id: 7,
    title: 'Hanging Leg Raises',
    tag: 'Abs',
    sets: 3,
    reps: 20,
    weight: 'BW',
  },
];

export default function NextLevelPlanner() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [expandedId, setExpandedId] = useState<number | null>(null);
  const [showFullCalendar, setShowFullCalendar] = useState(false);

  // LOGIC: Progress Tracking State
  const [completedExercises, setCompletedExercises] = useState<number[]>([]);

  const totalExercises = ALL_EXERCISES.length;
  const completedCount = completedExercises.length;
  const progressPercentage = (completedCount / totalExercises) * 100;

  const toggleComplete = (id: number) => {
    setCompletedExercises((prev) =>
      prev.includes(id) ? prev.filter((exId) => exId !== id) : [...prev, id],
    );
    // Auto-close card after marking complete
    if (!completedExercises.includes(id)) setExpandedId(null);
  };

  // Calendar Logic
  const startDate = startOfWeek(selectedDate, { weekStartsOn: 0 });
  const weekDays = Array.from({ length: 7 }).map((_, i) =>
    addDays(startDate, i),
  );
  const allDaysInMonth = eachDayOfInterval({
    start: startOfMonth(selectedDate),
    end: endOfMonth(selectedDate),
  });

  return (
    <div className="min-h-screen bg-[#F8FAFC] pb-32 font-sans antialiased text-slate-900 relative">
      {/* 1. CALENDAR OVERLAY (Simplified) */}
      <AnimatePresence>
        {showFullCalendar && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-slate-900/60 backdrop-blur-md flex items-center justify-center p-4"
          >
            <Card className="w-full max-w-sm rounded-[2.5rem] bg-white p-6 shadow-2xl">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-bold">
                  {format(selectedDate, 'MMMM yyyy')}
                </h3>
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full bg-slate-100"
                  onClick={() => setShowFullCalendar(false)}
                >
                  <X size={20} />
                </Button>
              </div>
              <div className="grid grid-cols-7 gap-2 text-center">
                {allDaysInMonth.map((day) => (
                  <button
                    key={day.toString()}
                    onClick={() => {
                      setSelectedDate(day);
                      setShowFullCalendar(false);
                    }}
                    className={`h-10 w-10 rounded-xl text-sm font-bold ${isSameDay(day, selectedDate) ? 'bg-blue-600 text-white shadow-lg' : 'hover:bg-blue-50 text-slate-600'}`}
                  >
                    {format(day, 'd')}
                  </button>
                ))}
              </div>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="max-w-md mx-auto px-4 mt-6 space-y-6">
        {/* 2. DATE SELECTOR */}
        <Card className="border-none shadow-xl shadow-blue-100/50 rounded-[2rem]">
          <CardContent className="p-6">
            <div
              className="flex items-center justify-between mb-6 cursor-pointer group"
              onClick={() => setShowFullCalendar(true)}
            >
              <h3 className="font-bold text-slate-700">Select Date</h3>
              <div className="flex items-center gap-2 text-blue-600 bg-blue-50 px-3 py-1 rounded-full text-sm font-semibold">
                {format(selectedDate, 'dd MMM yyyy')} <ChevronDown size={14} />
              </div>
            </div>
            <div className="flex justify-between">
              {weekDays.map((day) => (
                <div
                  key={day.toString()}
                  onClick={() => setSelectedDate(day)}
                  className="flex flex-col items-center gap-2 cursor-pointer"
                >
                  <span
                    className={`text-[10px] font-bold uppercase ${isSameDay(day, selectedDate) ? 'text-blue-600' : 'text-slate-400'}`}
                  >
                    {format(day, 'EEE')}
                  </span>
                  <div
                    className={`w-10 h-10 rounded-2xl flex items-center justify-center text-sm font-bold transition-all ${isSameDay(day, selectedDate) ? 'bg-blue-600 text-white shadow-lg scale-110' : 'bg-slate-50 text-slate-600'}`}
                  >
                    {format(day, 'd')}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* 3. DYNAMIC PROGRESS BOX */}
        <div className="relative overflow-hidden bg-slate-950 rounded-[2.2rem] p-7 text-white shadow-2xl">
          <div className="relative z-10">
            <div className="flex justify-between items-end mb-4">
              <div>
                <p className="text-blue-400 text-[10px] font-black tracking-[0.2em] mb-1">
                  RAJESH'S DAILY GOAL
                </p>
                <h2 className="text-2xl font-black text-white italic uppercase tracking-tighter">
                  {progressPercentage === 100
                    ? 'Workout Done! 🏆'
                    : 'Daily Progress'}
                </h2>
              </div>
              <div className="text-right">
                <span className="text-3xl font-black text-white italic">
                  {completedCount}
                  <span className="text-white/20 px-1">/</span>
                  {totalExercises}
                </span>
              </div>
            </div>

            <div className="h-3 w-full bg-white/10 rounded-full overflow-hidden border border-white/5 p-0.5 mb-3">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${progressPercentage}%` }}
                className="h-full bg-gradient-to-r from-blue-600 to-cyan-400 rounded-full shadow-[0_0_15px_rgba(37,99,235,0.6)]"
              />
            </div>

            <p className="text-[10px] text-slate-400 font-bold tracking-widest uppercase">
              {progressPercentage === 100
                ? 'All exercises completed! Great job.'
                : `${totalExercises - completedCount} exercises left to crush today`}
            </p>
          </div>
          <div className="absolute top-[-20%] right-[-10%] w-32 h-32 bg-blue-600 rounded-full blur-[70px] opacity-30"></div>
        </div>

        {/* 4. EXERCISES LIST */}
        <div className="space-y-4">
          <h2 className="text-xl font-black text-slate-800 italic uppercase px-2">
            Recommendation
          </h2>

          {ALL_EXERCISES.map((ex) => {
            const isCompleted = completedExercises.includes(ex.id);
            const isExpanded = expandedId === ex.id;

            return (
              <Card
                key={ex.id}
                className={`border-none transition-all duration-300 rounded-[2rem] overflow-hidden ${isCompleted ? 'opacity-60 grayscale-[0.5]' : ''} ${isExpanded ? 'ring-2 ring-blue-500 shadow-2xl' : 'shadow-sm'}`}
              >
                <div
                  className="p-4 flex items-center justify-between cursor-pointer"
                  onClick={() => setExpandedId(isExpanded ? null : ex.id)}
                >
                  <div className="flex items-center gap-4">
                    <div
                      className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-colors ${isCompleted ? 'bg-green-500 text-white' : isExpanded ? 'bg-blue-600 text-white' : 'bg-blue-50 text-blue-600'}`}
                    >
                      {isCompleted ? (
                        <CheckCircle2 size={20} />
                      ) : (
                        <Dumbbell size={20} />
                      )}
                    </div>
                    <div>
                      <p
                        className={`font-black text-slate-800 italic uppercase leading-tight ${isCompleted ? 'line-through' : ''}`}
                      >
                        {ex.title}
                      </p>
                      <p className="text-[10px] font-bold text-slate-400 mt-0.5 uppercase tracking-tighter">
                        {isCompleted ? 'Completed' : 'Pending Action'}
                      </p>
                    </div>
                  </div>
                  <Badge
                    className={`${isCompleted ? 'bg-green-100 text-green-700' : 'bg-blue-100 text-blue-700'} border-none px-3 py-1 text-[9px] font-black uppercase`}
                  >
                    {ex.tag}
                  </Badge>
                </div>

                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0 }}
                      animate={{ height: 'auto' }}
                      exit={{ height: 0 }}
                      className="px-5 pb-6 space-y-5 overflow-hidden"
                    >
                      <div className="grid grid-cols-3 gap-3">
                        {[
                          { l: 'Sets', v: ex.sets },
                          { l: 'Reps', v: ex.reps },
                          { l: 'Weight', v: ex.weight },
                        ].map((s) => (
                          <div
                            key={s.l}
                            className="bg-slate-50 p-3 rounded-2xl text-center border border-slate-100"
                          >
                            <p className="text-[9px] text-slate-400 font-black uppercase mb-1">
                              {s.l}
                            </p>
                            <p className="text-lg font-black text-slate-800">
                              {s.v}
                            </p>
                          </div>
                        ))}
                      </div>

                      <Button
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleComplete(ex.id);
                        }}
                        className={`w-full h-14 rounded-2xl font-black text-sm uppercase tracking-widest shadow-lg transition-all active:scale-95 ${isCompleted ? 'bg-slate-200 text-slate-600 hover:bg-slate-300' : 'bg-blue-600 text-white hover:bg-blue-700'}`}
                      >
                        {isCompleted ? (
                          <>
                            <Undo2 className="mr-2" size={18} /> Re-open Set
                          </>
                        ) : (
                          <>
                            <CheckCircle2 className="mr-2" size={18} /> Mark
                            Complete
                          </>
                        )}
                      </Button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </Card>
            );
          })}
        </div>
      </div>

      <FloatingNavbar />
    </div>
  );
}
