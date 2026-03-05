// src/components/app/AppShell.tsx
'use client';

import React from 'react';
import SidebarNav from './SidebarNav';
import Topbar from './Topbar';

export default function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-slate-50">
      <SidebarNav />
      <div className="lg:pl-72">
        <Topbar />
        <main className="px-4 md:px-6 py-6">{children}</main>
      </div>
    </div>
  );
}
