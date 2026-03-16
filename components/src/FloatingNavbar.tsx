'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { Home, ClipboardList, Dumbbell, Utensils, User } from 'lucide-react';

type TabType = 'Home' | 'Plans' | 'Exercise' | 'Diet' | 'Profile';

export default function FloatingNavbar() {
  const pathname = usePathname();

  // Mapping current URL to Tab IDs
  const getActiveTab = (): TabType => {
    if (pathname === '/home') return 'Home';
    if (pathname.includes('/plans')) return 'Plans';
    if (pathname.includes('/ExercisePlannerPage')) return 'Exercise'; // Updated route
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
    }, // Updated Link
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
              className="relative flex flex-col items-center justify-center h-full w-full cursor-pointer group"
            >
              {/* Floating Square Box */}
              <div
                className={`
                  flex items-center justify-center transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)]
                  ${
                    isActive
                      ? 'bg-[#155DFC] w-[60px] h-[60px] rounded-[1.5rem] -translate-y-[38px] shadow-2xl shadow-[#155DFC]/40 border-[5px] border-white text-white'
                      : 'w-12 h-12 bg-transparent translate-y-0 text-slate-400 group-hover:text-slate-600'
                  }
                `}
              >
                <Icon
                  size={isActive ? 26 : 22}
                  strokeWidth={isActive ? 2.5 : 2}
                />
              </div>

              {/* Label Text */}
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

              {/* Smooth Active Indicator Line */}
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
