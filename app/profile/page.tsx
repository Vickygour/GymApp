'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  User,
  Settings,
  Dumbbell,
  Apple,
  LogOut,
  ChevronRight,
  Activity,
  Target,
  Utensils,
} from 'lucide-react';
import FloatingNavbar from '@/components/src/FloatingNavbar';

export default function ProfilePage() {
  const containerVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, staggerChildren: 0.08 },
    },
  };

  return (
    <>
      <div className="min-h-screen bg-white text-slate-900 pb-32 selection:bg-[#155DFC]/20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-md mx-auto px-6 pt-12"
        >
          {/* TOP NAVIGATION */}
          <header className="flex justify-between items-center mb-10">
            <h1 className="text-2xl font-black tracking-tight text-slate-900">
              MY PROFILE
            </h1>
            <Button
              variant="ghost"
              size="icon"
              className="rounded-2xl bg-slate-50 hover:bg-slate-100"
            >
              <Settings size={22} className="text-slate-600" />
            </Button>
          </header>

          {/* MODERN PROFILE HEADER */}
          <section className="flex items-center gap-6 mb-12">
            <div className="relative">
              <div className="absolute inset-0 bg-[#155DFC]/10 blur-xl rounded-full" />
              <Avatar className="w-24 h-24 border-[3px] border-white ring-2 ring-[#155DFC]/20 shadow-xl relative">
                <AvatarImage src="/avatar.png" />
                <AvatarFallback className="bg-slate-100 text-[#155DFC] font-bold">
                  VG
                </AvatarFallback>
              </Avatar>
            </div>

            <div className="flex flex-col gap-1">
              <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight">
                Vicky Gour
              </h2>
              <p className="text-slate-500 text-sm font-medium">
                vicky@email.com
              </p>
              <Badge className="w-fit mt-1 bg-[#155DFC] hover:bg-[#155DFC]/90 text-white rounded-lg px-4 py-0.5 text-[10px] font-bold uppercase tracking-wider">
                Beginner Level
              </Badge>
            </div>
          </section>

          {/* STATS STRIP */}
          <div className="grid grid-cols-3 gap-3 mb-10">
            <StatBox label="Weight" value="72" unit="kg" />
            <StatBox label="Height" value="6.0" unit="ft" />
            <StatBox label="BMI" value="21.5" unit="Idx" />
          </div>

          {/* INFO CARDS SECTION */}
          <div className="space-y-4 mb-10">
            <h3 className="text-[11px] font-black text-slate-400 uppercase tracking-[0.2em] px-1">
              Fitness Core
            </h3>

            <div className="bg-slate-50 rounded-[2.5rem] p-8 border border-slate-100 shadow-sm flex justify-between items-center">
              <InfoItem
                label="Goal"
                value="Build Muscle"
                icon={<Target className="text-[#155DFC]" size={20} />}
              />
              <div className="w-[1px] h-10 bg-slate-200" />
              <InfoItem
                label="Activity"
                value="High"
                icon={<Activity className="text-[#155DFC]" size={20} />}
              />
              <div className="w-[1px] h-10 bg-slate-200" />
              <InfoItem
                label="Diet"
                value="Non-Veg"
                icon={<Utensils className="text-[#155DFC]" size={20} />}
              />
            </div>
          </div>

          {/* LIST ACTIONS */}
          <div className="space-y-2">
            <ActionTile
              icon={<User size={20} />}
              label="Edit Personal Details"
            />
            <ActionTile
              icon={<Dumbbell size={20} />}
              label="Custom Workout Plan"
            />
            <ActionTile icon={<Apple size={20} />} label="Nutrition & Macros" />

            <Button
              variant="ghost"
              className="w-full justify-center h-14 rounded-3xl text-red-500 hover:bg-red-50 hover:text-red-600 transition-all mt-6 font-bold tracking-tight"
            >
              <LogOut size={18} className="mr-2" />
              Sign Out
            </Button>
          </div>
        </motion.div>
      </div>
      {/* Navbar ko parent fragment ke andar rakha hai */}
      <FloatingNavbar />
    </>
  );
}

/* --- REUSABLE MICRO-COMPONENTS --- */

function StatBox({
  label,
  value,
  unit,
}: {
  label: string;
  value: string;
  unit: string;
}) {
  return (
    <div className="bg-white border-2 border-slate-50 rounded-3xl p-4 text-center shadow-sm">
      <p className="text-[10px] font-bold text-slate-400 uppercase mb-1">
        {label}
      </p>
      <div className="flex items-baseline justify-center gap-0.5">
        <span className="text-xl font-black text-slate-900">{value}</span>
        <span className="text-[10px] text-[#155DFC] font-bold uppercase">
          {unit}
        </span>
      </div>
    </div>
  );
}

function InfoItem({
  label,
  value,
  icon,
}: {
  label: string;
  value: string;
  icon: React.ReactNode;
}) {
  return (
    <div className="flex flex-col items-center gap-2">
      <div className="p-2 bg-white rounded-full shadow-sm border border-slate-100">
        {icon}
      </div>
      <div className="text-center">
        <p className="text-[9px] font-bold text-slate-400 uppercase tracking-tighter">
          {label}
        </p>
        <p className="text-xs font-black text-slate-800">{value}</p>
      </div>
    </div>
  );
}

function ActionTile({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <motion.div
      whileHover={{ x: 5 }}
      className="flex items-center justify-between p-5 bg-white border border-slate-100 rounded-3xl cursor-pointer hover:shadow-md hover:border-[#155DFC]/20 transition-all group"
    >
      <div className="flex items-center gap-4">
        <div className="text-slate-400 group-hover:text-[#155DFC] transition-colors">
          {icon}
        </div>
        <span className="text-sm font-bold text-slate-700 tracking-tight">
          {label}
        </span>
      </div>
      <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center group-hover:bg-[#155DFC] transition-colors">
        <ChevronRight
          size={16}
          className="text-slate-400 group-hover:text-white"
        />
      </div>
    </motion.div>
  );
}
