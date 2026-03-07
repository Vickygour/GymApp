'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation'; // Redirect ke liye
import { Mail, Phone, Chrome, ShieldCheck } from 'lucide-react';

const Login = () => {
  const [mobileNumber, setMobileNumber] = useState<string>('');
  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    // Abhi static login hai, toh bina condition ke redirect kar rahe hain
    // Real app mein yahan OTP send karne ka logic aayega
    if (mobileNumber.length >= 10) {
      router.push('/onboarding');
    } else {
      alert('Please enter a valid mobile number');
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-4 font-sans">
      <div className="w-full max-w-md bg-white rounded-[2.5rem] shadow-2xl shadow-blue-100 overflow-hidden border border-slate-100 p-8 md:p-10">
        {/* Logo Section */}
        <div className="flex flex-col items-center mb-10">
          <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-700 rounded-3xl flex items-center justify-center shadow-lg shadow-blue-200 transform rotate-3 transition-transform hover:rotate-0">
            <span className="text-white text-5xl font-black italic">F</span>
          </div>
          <h2 className="mt-4 text-xl font-bold text-blue-600 tracking-tight uppercase">
            Fitzen
          </h2>
        </div>

        {/* Header Text */}
        <div className="text-left mb-8">
          <h1 className="text-3xl font-extrabold text-slate-900 leading-tight">
            Sign In
          </h1>
          <p className="text-slate-500 mt-2 font-medium">
            Join <span className="text-blue-600 font-bold">10,000+</span>{' '}
            Indians on their fitness journey.
          </p>
        </div>

        {/* Form Section */}
        <form onSubmit={handleLogin} className="space-y-6">
          <div className="space-y-2">
            <label className="text-xs font-bold text-slate-400 uppercase tracking-wider ml-1">
              Mobile Number
            </label>
            <div className="flex gap-3">
              <div className="flex items-center gap-2 px-4 py-4 bg-slate-50 border border-slate-200 rounded-2xl shadow-sm">
                <img
                  src="https://flagcdn.com/w40/in.png"
                  alt="India"
                  className="w-5 h-auto rounded-[2px]"
                />
                <span className="font-bold text-slate-700">+91</span>
              </div>

              <input
                type="tel"
                required
                maxLength={10}
                placeholder="Enter your mobile number"
                className="flex-1 px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all font-semibold text-slate-800 placeholder:text-slate-400"
                value={mobileNumber}
                onChange={(e) =>
                  setMobileNumber(e.target.value.replace(/\D/g, ''))
                } // Sirf numbers allow honge
              />
            </div>
          </div>

          <div className="flex justify-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-emerald-50 border border-emerald-100 rounded-full">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span className="text-[10px] font-bold text-emerald-700 uppercase tracking-widest">
                100% Secure & Private
              </span>
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-2xl shadow-lg shadow-blue-200 active:scale-[0.98] transition-all text-lg flex items-center justify-center gap-2"
          >
            Send OTP
          </button>
        </form>

        {/* Divider */}
        <div className="relative my-10">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-slate-100"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-4 bg-white text-slate-400 font-medium">
              Or Continue with
            </span>
          </div>
        </div>

        {/* Social Buttons */}
        <div className="flex justify-center gap-6 mb-8">
          {[
            { icon: <Phone size={24} />, color: 'text-blue-500' },
            { icon: <Mail size={24} />, color: 'text-rose-500' },
            { icon: <Chrome size={24} />, color: 'text-slate-700' },
          ].map((item, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => router.push('/onboarding')} // In buttons par bhi redirect laga diya
              className="p-4 rounded-full border border-slate-100 shadow-sm hover:bg-slate-50 hover:border-slate-200 transition-all active:scale-90"
            >
              <span className={item.color}>{item.icon}</span>
            </button>
          ))}
        </div>

        {/* Footer */}
        <p className="text-center text-[13px] text-slate-400 leading-relaxed font-medium">
          By signing up, you agree to our
          <br />
          <a href="#" className="text-blue-600 font-bold hover:underline">
            Terms & Conditions
          </a>
          <span className="mx-1 text-slate-300">|</span>
          <a href="#" className="text-blue-600 font-bold hover:underline">
            Privacy Policy
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
