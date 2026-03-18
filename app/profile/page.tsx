'use client';

import React, { useState } from 'react';
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
  Camera,
} from 'lucide-react';
import FloatingNavbar from '@/components/src/FloatingNavbar';

// Primary Color: #155DFC

export default function ProfilePage() {
  // Demo State for user info
  const [userStats] = useState({
    weight: '72',
    height: '6.0',
    bmi: '21.5',
  });

  const containerVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, staggerChildren: 0.08 },
    },
  };

  const handleAction = (type: string) => {
    console.log(`Navigating to ${type}...`);
    // Add routing logic here (e.g., router.push)
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
              className="rounded-2xl bg-slate-50 hover:bg-[#155DFC]/10 hover:text-[#155DFC] transition-all"
            >
              <Settings size={22} />
            </Button>
          </header>

          {/* MODERN PROFILE HEADER */}
          <section className="flex items-center gap-6 mb-12">
            <div className="relative group cursor-pointer">
              <div className="absolute inset-0 bg-[#155DFC]/10 blur-xl rounded-full" />
              <Avatar className="w-24 h-24 border-[3px] border-white ring-2 ring-[#155DFC]/20 shadow-xl relative overflow-hidden">
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback className="bg-slate-100 text-[#155DFC] font-bold">
                  VG
                </AvatarFallback>
                {/* Image Overlay */}
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <Camera size={20} className="text-white" />
                </div>
              </Avatar>
            </div>

            <div className="flex flex-col gap-1">
              <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight leading-tight">
                Vicky Gour
              </h2>
              <p className="text-slate-500 text-sm font-medium">
                vicky.g@electrician.in
              </p>
              <Badge className="w-fit mt-1 bg-[#155DFC] hover:bg-[#155DFC] text-white rounded-lg px-4 py-0.5 text-[10px] font-bold uppercase tracking-wider shadow-md shadow-[#155DFC]/30">
                Beginner Level
              </Badge>
            </div>
          </section>

          {/* STATS STRIP */}
          <div className="grid grid-cols-3 gap-3 mb-10">
            <StatBox label="Weight" value={userStats.weight} unit="kg" />
            <StatBox label="Height" value={userStats.height} unit="ft" />
            <StatBox label="BMI" value={userStats.bmi} unit="Idx" />
          </div>

          {/* FITNESS CORE SECTION */}
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
          <div className="space-y-3">
            <ActionTile
              icon={<User size={20} />}
              label="Edit Personal Details"
              onClick={() => handleAction('details')}
            />
            <ActionTile
              icon={<Dumbbell size={20} />}
              label="Custom Workout Plan"
              onClick={() => handleAction('workout')}
            />
            <ActionTile
              icon={<Apple size={20} />}
              label="Nutrition & Macros"
              onClick={() => handleAction('nutrition')}
            />

            <Button
              variant="ghost"
              className="w-full justify-center h-16 rounded-[2rem] text-red-500 hover:bg-red-50 hover:text-red-600 transition-all mt-6 font-black text-sm uppercase tracking-widest active:scale-95"
            >
              <LogOut size={18} className="mr-2" />
              Sign Out
            </Button>
          </div>
        </motion.div>
      </div>
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
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-white border-2 border-slate-50 rounded-[2rem] p-5 text-center shadow-sm"
    >
      <p className="text-[10px] font-black text-slate-400 uppercase mb-1 tracking-wider">
        {label}
      </p>
      <div className="flex items-baseline justify-center gap-0.5">
        <span className="text-2xl font-black text-slate-900 tracking-tighter">
          {value}
        </span>
        <span className="text-[10px] text-[#155DFC] font-bold uppercase">
          {unit}
        </span>
      </div>
    </motion.div>
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
    <div className="flex flex-col items-center gap-3">
      <div className="w-12 h-12 bg-white rounded-2xl shadow-sm border border-slate-100 flex items-center justify-center">
        {icon}
      </div>
      <div className="text-center">
        <p className="text-[9px] font-bold text-slate-400 uppercase tracking-tighter mb-0.5">
          {label}
        </p>
        <p className="text-xs font-black text-slate-800 uppercase">{value}</p>
      </div>
    </div>
  );
}

function ActionTile({
  icon,
  label,
  onClick,
}: {
  icon: React.ReactNode;
  label: string;
  onClick: () => void;
}) {
  return (
    <motion.div
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className="flex items-center justify-between p-5 bg-white border border-slate-100 rounded-[2rem] cursor-pointer hover:shadow-xl hover:shadow-[#155DFC]/5 hover:border-[#155DFC]/20 transition-all group"
    >
      <div className="flex items-center gap-4">
        <div className="w-10 h-10 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-[#155DFC]/10 group-hover:text-[#155DFC] transition-all">
          {icon}
        </div>
        <span className="text-sm font-bold text-slate-700 tracking-tight group-hover:text-slate-900 transition-colors">
          {label}
        </span>
      </div>
      <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center group-hover:bg-[#155DFC] transition-all">
        <ChevronRight
          size={16}
          className="text-slate-400 group-hover:text-white transition-colors"
        />
      </div>
    </motion.div>
  );
}
