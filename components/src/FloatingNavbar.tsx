'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { Home, ClipboardList, Dumbbell, Utensils, User } from 'lucide-react';

type TabType = 'Home' | 'Plans' | 'Exercise' | 'Diet' | 'Profile';

export default function FloatingNavbar() {
  const pathname = usePathname();

  const getActiveTab = (): TabType => {
    if (pathname === '/home') return 'Home';
    if (pathname.includes('/plans')) return 'Plans';
    if (pathname.includes('/ExercisePlannerPage')) return 'Exercise';
    if (pathname.includes('/diet')) return 'Diet';
    if (pathname.includes('/profile')) return 'Profile';
    return 'Home';
  };

  const activeTab = getActiveTab();

  const navItems = [
    { id: 'Home' as TabType, icon: Home, label: 'HOME', href: '/home' },
    {
      id: 'Plans' as TabType,
      icon: ClipboardList,
      label: 'PLANS',
      href: '/plans',
    },
    {
      id: 'Exercise' as TabType,
      icon: Dumbbell,
      label: 'WORKOUT',
      href: '/ExercisePlannerPage',
    },
    { id: 'Diet' as TabType, icon: Utensils, label: 'DIET', href: '/diet' },
    {
      id: 'Profile' as TabType,
      icon: User,
      label: 'PROFILE',
      href: '/profile',
    },
  ];

  return (
    <div className="fixed bottom-6 left-6 right-6 z-[100]">
      <div className="bg-white/90 backdrop-blur-2xl border border-slate-100 shadow-[0_20px_50px_rgba(21,93,252,0.15)] rounded-[2.5rem] px-3 h-[80px] flex justify-around items-center max-w-md mx-auto relative">
        {navItems.map((item) => {
          const isActive = activeTab === item.id;
          const Icon = item.icon;

          return (
            <Link
              key={item.id}
              href={item.href}
              className="relative flex flex-col items-center justify-center h-full w-full cursor-pointer group outline-none"
            >
              {/* 1. SMOOTH FLOATING BOX */}
              {/* isActive check ke andar hum 'motion.div' with layoutId use karenge */}
              <div className="relative flex items-center justify-center w-12 h-12">
                {isActive && (
                  <motion.div
                    layoutId="active-pill"
                    className="absolute bg-[#155DFC] w-[60px] h-[60px] rounded-[1.5rem] shadow-2xl shadow-[#155DFC]/40 border-[5px] border-white"
                    style={{ y: -38 }}
                    transition={{
                      type: 'spring',
                      stiffness: 350,
                      damping: 30,
                    }}
                  />
                )}

                {/* 2. ICON WITH COLOR TRANSITION */}
                <motion.div
                  animate={{
                    y: isActive ? -38 : 0,
                    color: isActive ? '#FFFFFF' : '#94a3b8',
                  }}
                  className="relative z-10"
                  transition={{
                    type: 'spring',
                    stiffness: 350,
                    damping: 30,
                  }}
                >
                  <Icon
                    size={isActive ? 26 : 22}
                    strokeWidth={isActive ? 2.5 : 2}
                  />
                </motion.div>
              </div>

              {/* 3. LABEL TEXT ANIMATION */}
              <span
                className={`
                  absolute transition-all duration-300 font-black text-[9px] tracking-widest
                  ${
                    isActive
                      ? 'bottom-3 opacity-100 text-[#155DFC] translate-y-0'
                      : 'bottom-4 opacity-40 text-slate-400 translate-y-1 group-hover:translate-y-0 group-hover:opacity-100'
                  }
                `}
              >
                {item.label}
              </span>

              {/* 4. SMOOTH INDICATOR LINE */}
              {isActive && (
                <motion.div
                  layoutId="nav-line"
                  className="absolute bottom-1 w-5 h-1 bg-[#155DFC] rounded-full"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
