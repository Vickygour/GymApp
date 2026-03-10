'use client';

import Image from 'next/image';
import OnboardingPage from '@/components/src/OnboardingPage'; // Ensure path is correct

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0F172A]">
      {/* Jab bhi koi '/' par aayega, sabse pehle ye dikhega */}
      <OnboardingPage />
    </main>
  );
}



