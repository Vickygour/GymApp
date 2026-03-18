'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Github,
  Mail,
  Chrome,
  ArrowRight,
  Lock,
  User,
  Eye,
  EyeOff,
} from 'lucide-react';

// Primary Color: #155DFC

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen bg-white flex flex-col justify-center px-6 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-md w-full mx-auto"
      >
        {/* LOGO & HEADER */}
        <div className="text-center mb-10">
          <div className="w-16 h-16 bg-[#155DFC] rounded-3xl mx-auto flex items-center justify-center shadow-xl shadow-[#155DFC]/30 mb-6 rotate-3">
            <span className="text-white text-3xl font-black italic">P</span>
          </div>
          <h2 className="text-3xl font-black tracking-tighter text-slate-900">
            {isLogin ? 'WELCOME BACK' : 'JOIN THE CLUB'}
          </h2>
          <p className="text-slate-400 text-sm font-medium mt-2 uppercase tracking-widest">
            {isLogin
              ? 'Enter your details to continue'
              : 'Start your fitness journey today'}
          </p>
        </div>

        {/* TAB SWITCHER */}
        <div className="flex p-1.5 bg-slate-50 rounded-[2rem] mb-8 relative">
          <motion.div
            animate={{ x: isLogin ? '0%' : '100%' }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="absolute top-1.5 left-1.5 w-[calc(50%-6px)] h-[calc(100%-12px)] bg-white rounded-[1.5rem] shadow-sm"
          />
          <button
            onClick={() => setIsLogin(true)}
            className={`relative z-10 w-1/2 py-3 text-xs font-black uppercase tracking-widest transition-colors ${isLogin ? 'text-[#155DFC]' : 'text-slate-400'}`}
          >
            Login
          </button>
          <button
            onClick={() => setIsLogin(false)}
            className={`relative z-10 w-1/2 py-3 text-xs font-black uppercase tracking-widest transition-colors ${!isLogin ? 'text-[#155DFC]' : 'text-slate-400'}`}
          >
            Sign Up
          </button>
        </div>

        {/* FORM SECTION */}
        <form onSubmit={(e) => e.preventDefault()} className="space-y-5">
          <AnimatePresence mode="wait">
            {!isLogin && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="space-y-2"
              >
                <Label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-4">
                  Full Name
                </Label>
                <div className="relative">
                  <User
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                    size={18}
                  />
                  <Input
                    placeholder="Vicky Gour"
                    className="h-14 pl-12 rounded-3xl border-slate-100 bg-slate-50 focus:bg-white focus:ring-[#155DFC]/20 focus:border-[#155DFC] transition-all"
                  />
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <div className="space-y-2">
            <Label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-4">
              Email Address
            </Label>
            <div className="relative">
              <Mail
                className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                size={18}
              />
              <Input
                type="email"
                placeholder="name@example.com"
                className="h-14 pl-12 rounded-3xl border-slate-100 bg-slate-50 focus:bg-white focus:ring-[#155DFC]/20 focus:border-[#155DFC] transition-all"
              />
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex justify-between items-center ml-4">
              <Label className="text-[10px] font-black uppercase tracking-widest text-slate-400">
                Password
              </Label>
              {isLogin && (
                <button className="text-[10px] font-bold text-[#155DFC] hover:underline uppercase tracking-widest">
                  Forgot?
                </button>
              )}
            </div>
            <div className="relative">
              <Lock
                className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                size={18}
              />
              <Input
                type={showPassword ? 'text' : 'password'}
                placeholder="••••••••"
                className="h-14 pl-12 pr-12 rounded-3xl border-slate-100 bg-slate-50 focus:bg-white focus:ring-[#155DFC]/20 focus:border-[#155DFC] transition-all"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-[#155DFC]"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          <Button className="w-full h-14 rounded-[2rem] bg-[#155DFC] hover:bg-[#155DFC]/90 text-white font-black text-sm uppercase tracking-widest shadow-lg shadow-[#155DFC]/20 transition-all active:scale-95 group">
            {isLogin ? 'Sign In' : 'Create Account'}
            <ArrowRight
              className="ml-2 group-hover:translate-x-1 transition-transform"
              size={18}
            />
          </Button>
        </form>

        {/* DIVIDER */}
        <div className="relative my-10">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-slate-100"></div>
          </div>
          <div className="relative flex justify-center text-[10px] font-black uppercase tracking-widest">
            <span className="bg-white px-4 text-slate-400">
              Or continue with
            </span>
          </div>
        </div>

        {/* SOCIAL LOGIN */}
        <div className="grid grid-cols-2 gap-4">
          <Button
            variant="outline"
            className="h-14 rounded-3xl border-slate-100 hover:bg-slate-50 font-bold transition-all"
          >
            <Chrome className="mr-2" size={18} /> Google
          </Button>
          <Button
            variant="outline"
            className="h-14 rounded-3xl border-slate-100 hover:bg-slate-50 font-bold transition-all"
          >
            <Github className="mr-2" size={18} /> Github
          </Button>
        </div>

        {/* FOOTER */}
        <p className="text-center mt-10 text-slate-400 text-xs font-medium">
          By continuing, you agree to our{' '}
          <span className="text-slate-900 font-bold hover:underline cursor-pointer">
            Terms of Service
          </span>
        </p>
      </motion.div>
    </div>
  );
}
