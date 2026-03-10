'use client';

import React, { useState } from 'react';
import { Home, ClipboardList, Dumbbell, Utensils, User } from 'lucide-react';

type TabType = 'Home' | 'Plans' | 'Exercise' | 'Diet' | 'Profile';

export default function FloatingNavbar() {
  const [activeTab, setActiveTab] = useState<TabType>('Exercise');

  const navItems = [
    { id: 'Home' as TabType, icon: Home, label: 'HOME' },
    { id: 'Plans' as TabType, icon: ClipboardList, label: 'PLANS' },
    { id: 'Exercise' as TabType, icon: Dumbbell, label: 'EXERCISE' },
    { id: 'Diet' as TabType, icon: Utensils, label: 'DIET' },
    { id: 'Profile' as TabType, icon: User, label: 'PROFILE' },
  ];

  return (
    <div className="fixed bottom-6 left-6 right-6 z-50">
      {/* Main Bar Container */}
      <div className="bg-white/95 backdrop-blur-2xl border border-white/20 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.15)] rounded-[2.5rem] px-3 h-[80px] flex justify-around items-center max-w-md mx-auto relative">
        {navItems.map((item) => {
          const isActive = activeTab === item.id;
          const Icon = item.icon;

          return (
            <div
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className="relative flex flex-col items-center justify-center h-full w-full cursor-pointer"
            >
              {/* The Floating Square Box */}
              <div
                className={`
                  flex items-center justify-center transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)]
                  ${
                    isActive
                      ? 'bg-blue-600 w-[64px] h-[64px] rounded-[1.25rem] -translate-y-[42px] shadow-2xl shadow-blue-300 border-[6px] border-[#F8FAFC] text-white scale-100'
                      : 'w-12 h-12 bg-transparent translate-y-0 text-slate-400 hover:text-slate-500 hover:scale-110'
                  }
                `}
              >
                <Icon
                  size={isActive ? 28 : 24}
                  strokeWidth={isActive ? 2.5 : 2}
                  className="transition-transform duration-300"
                />
              </div>

              {/* Label Text - Balanced Position */}
              <span
                className={`
                  absolute transition-all duration-300 font-black text-[10px] tracking-widest
                  ${
                    isActive
                      ? 'bottom-2 opacity-100 text-blue-600 translate-y-0'
                      : 'bottom-3 opacity-40 text-slate-400 translate-y-0'
                  }
                `}
              >
                {item.label}
              </span>

              {/* Active Indicator Line */}
              {isActive && (
                <div className="absolute bottom-0 w-6 h-1 bg-blue-600 rounded-t-full" />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
