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
  Calendar as CalendarIcon,
  Play,
  CheckCircle2,
  Dumbbell,
  X,
} from 'lucide-react';
import FloatingNavbar from '@/components/src/FloatingNavbar';

const ALL_EXERCISES = [
  {
    id: 1,
    title: 'Incline Bench Press',
    tag: 'Chest',
    sets: 4,
    reps: 12,
    weight: '60kg',
    status: 'Pending',
  },
  {
    id: 2,
    title: 'Lat Pulldowns',
    tag: 'Back',
    sets: 3,
    reps: 10,
    weight: '45kg',
    status: 'Pending',
  },
  {
    id: 3,
    title: 'Barbell Overhead Extension',
    tag: 'Triceps',
    sets: 3,
    reps: 8,
    weight: '20kg',
    status: 'Pending',
  },
  {
    id: 4,
    title: 'Hammer Curls',
    tag: 'Biceps',
    sets: 3,
    reps: 12,
    weight: '12kg',
    status: 'Pending',
  },
  {
    id: 5,
    title: 'Lateral Raises',
    tag: 'Shoulder',
    sets: 4,
    reps: 15,
    weight: '7.5kg',
    status: 'Pending',
  },
  {
    id: 6,
    title: 'Leg Press',
    tag: 'Legs',
    sets: 4,
    reps: 10,
    weight: '120kg',
    status: 'Pending',
  },
  {
    id: 7,
    title: 'Hanging Leg Raises',
    tag: 'Abs',
    sets: 3,
    reps: 20,
    weight: 'BW',
    status: 'Pending',
  },
];

export default function NextLevelPlanner() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [expandedId, setExpandedId] = useState<number | null>(3);
  const [showFullCalendar, setShowFullCalendar] = useState(false);

  // Week View logic
  const startDate = startOfWeek(selectedDate, { weekStartsOn: 0 });
  const weekDays = Array.from({ length: 7 }).map((_, i) =>
    addDays(startDate, i),
  );

  // Full Month Calendar logic
  const monthStart = startOfMonth(selectedDate);
  const monthEnd = endOfMonth(selectedDate);
  const allDaysInMonth = eachDayOfInterval({
    start: monthStart,
    end: monthEnd,
  });

  return (
    <div className="min-h-screen bg-[#F8FAFC] pb-32 font-sans antialiased text-slate-900 relative">
      {/* 1. FULL SCREEN CALENDAR OVERLAY */}
      {showFullCalendar && (
        <div className="fixed inset-0 z-[100] bg-slate-900/60 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-300">
          <Card className="w-full max-w-sm border-none shadow-2xl rounded-[2.5rem] overflow-hidden bg-white animate-in zoom-in-95 duration-300">
            <CardContent className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-bold text-slate-800">
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
                {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((d) => (
                  <span
                    key={d}
                    className="text-[10px] font-black text-slate-400 mb-2"
                  >
                    {d}
                  </span>
                ))}
                {allDaysInMonth.map((day) => {
                  const isSelected = isSameDay(day, selectedDate);
                  return (
                    <button
                      key={day.toString()}
                      onClick={() => {
                        setSelectedDate(day);
                        setShowFullCalendar(false);
                      }}
                      className={`h-10 w-10 rounded-xl flex items-center justify-center text-sm font-bold transition-all
                        ${
                          isSelected
                            ? 'bg-blue-600 text-white shadow-lg shadow-blue-200'
                            : 'hover:bg-blue-50 text-slate-600'
                        }
                      `}
                    >
                      {format(day, 'd')}
                    </button>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        </div>
      )}


      <div className="max-w-md mx-auto px-4 mt-6 space-y-6">
        {/* DATE SELECTOR (Horizontal Week View) */}
        <Card className="border-none shadow-xl shadow-blue-100/50 rounded-[2rem] overflow-hidden">
          <CardContent className="p-6">
            <div
              className="flex items-center justify-between mb-6 cursor-pointer group transition"
              onClick={() => setShowFullCalendar(true)}
            >
              <h3 className="font-bold text-slate-700">Select Date</h3>
              <div className="flex items-center gap-2 text-blue-600 bg-blue-50 px-3 py-1 rounded-full text-sm font-semibold group-hover:bg-blue-100 transition">
                {format(selectedDate, 'dd MMM yyyy')}
                <ChevronDown size={14} />
              </div>
            </div>

            <div className="flex justify-between">
              {weekDays.map((day) => {
                const isSelected = isSameDay(day, selectedDate);
                return (
                  <div
                    key={day.toString()}
                    onClick={() => setSelectedDate(day)}
                    className="flex flex-col items-center gap-2 group cursor-pointer"
                  >
                    <span
                      className={`text-[10px] font-bold uppercase ${isSelected ? 'text-blue-600' : 'text-slate-400'}`}
                    >
                      {format(day, 'EEE')}
                    </span>
                    <div
                      className={`w-10 h-10 rounded-2xl flex items-center justify-center text-sm font-bold transition-all duration-300 ${
                        isSelected
                          ? 'bg-blue-600 text-white shadow-lg shadow-blue-200 scale-110'
                          : 'bg-slate-50 text-slate-600 hover:bg-slate-100'
                      }`}
                    >
                      {format(day, 'd')}
                    </div>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>

        {/* PROGRESS BOX */}
        <div className="relative overflow-hidden bg-slate-900 rounded-[2rem] p-6 text-white shadow-2xl">
          <div className="relative z-10">
            <div className="flex justify-between items-end mb-4">
              <div>
                <p className="text-blue-400 text-sm font-bold mb-1">
                  DAILY GOAL
                </p>
                <h2 className="text-2xl font-bold text-white/95">
                  Progress of the day
                </h2>
              </div>
              <span className="text-3xl font-black opacity-20 italic">
                0/10
              </span>
            </div>
            <Progress value={30} className="h-3 bg-white/10" />
            <p className="mt-4 text-[10px] text-slate-400 font-bold tracking-widest uppercase">
              3 EXERCISES LEFT TO REACH 50%
            </p>
          </div>
          <div className="absolute top-[-20%] right-[-10%] w-32 h-32 bg-blue-600 rounded-full blur-[80px] opacity-40 animate-pulse"></div>
        </div>

        {/* EXERCISES LIST */}
        <div className="space-y-4">
          <div className="flex items-center justify-between px-2">
            <h2 className="text-xl font-extrabold text-slate-800">
              Recommendation
            </h2>
            <Badge
              variant="outline"
              className="border-slate-200 text-slate-400 font-bold text-[10px]"
            >
              DAY {format(selectedDate, 'i')}
            </Badge>
          </div>

          {ALL_EXERCISES.map((ex) => {
            const isExpanded = expandedId === ex.id;
            return (
              <Card
                key={ex.id}
                className={`border-none transition-all duration-500 rounded-[1.8rem] overflow-hidden ${
                  isExpanded
                    ? 'ring-2 ring-blue-500 shadow-2xl scale-[1.02]'
                    : 'shadow-sm hover:shadow-md'
                }`}
              >
                <div
                  className="p-4 flex items-center justify-between cursor-pointer"
                  onClick={() => setExpandedId(isExpanded ? null : ex.id)}
                >
                  <div className="flex items-center gap-4">
                    <div
                      className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-colors ${
                        isExpanded
                          ? 'bg-blue-600 text-white'
                          : 'bg-blue-50 text-blue-600'
                      }`}
                    >
                      <Dumbbell size={20} />
                    </div>
                    <div>
                      <p className="font-bold text-slate-800 leading-tight">
                        {ex.title}
                      </p>
                      <p className="text-[11px] font-bold text-slate-400 mt-0.5 tracking-wide">
                        {ex.status}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-100 border-none px-3 py-1 text-[10px] font-black uppercase tracking-wider">
                      {ex.tag}
                    </Badge>
                    {isExpanded ? (
                      <ChevronUp className="text-slate-400" size={20} />
                    ) : (
                      <ChevronDown className="text-slate-400" size={20} />
                    )}
                  </div>
                </div>

                {isExpanded && (
                  <div className="px-4 pb-6 space-y-5 animate-in fade-in zoom-in-95 duration-300">
                    <div className="grid grid-cols-3 gap-3">
                      {[
                        { label: 'Sets', val: ex.sets },
                        { label: 'Reps', val: ex.reps },
                        { label: 'Weight', val: ex.weight },
                      ].map((stat) => (
                        <div
                          key={stat.label}
                          className="bg-slate-50 p-3 rounded-2xl text-center border border-slate-100"
                        >
                          <p className="text-[9px] text-slate-400 font-black uppercase tracking-widest mb-1">
                            {stat.label}
                          </p>
                          <p className="text-lg font-black text-slate-800">
                            {stat.val}
                          </p>
                        </div>
                      ))}
                    </div>

                    <div className="relative group rounded-[1.5rem] overflow-hidden aspect-video bg-slate-200 shadow-inner">
                      <div className="absolute inset-0 flex items-center justify-center z-10">
                        <div className="w-14 h-14 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center group-hover:scale-110 transition-transform cursor-pointer border border-white/30 shadow-xl">
                          <Play fill="white" className="text-white ml-1" />
                        </div>
                      </div>
                      <img
                        src={`https://images.unsplash.com/photo-1581009146145-b5ef03a7481b?q=80&w=400`}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        alt="exercise"
                      />
                    </div>

                    <Button className="w-full h-14 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-lg shadow-lg shadow-blue-100 transition-all hover:translate-y-[-2px] active:translate-y-[0]">
                      <CheckCircle2 className="mr-2" size={20} />
                      Mark Complete
                    </Button>
                  </div>
                )}
              </Card>
            );
          })}
        </div>
      </div>

      <FloatingNavbar />
    </div>
  );
}
