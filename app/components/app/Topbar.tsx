// src/components/app/Topbar.tsx
import MobileNav from './MobileNav';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';

export default function Topbar() {
  return (
    <header className="sticky top-0 z-30 border-b bg-white/80 backdrop-blur">
      <div className="h-16 px-4 md:px-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <MobileNav />
          <div>
            <p className="text-sm font-medium text-slate-900">
              Welcome back 👋
            </p>
            <p className="text-xs text-slate-500">
              Let’s build your physique, step by step.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <Button variant="outline" className="rounded-xl hidden sm:flex">
            Upgrade
          </Button>
          <Avatar className="h-9 w-9">
            <AvatarFallback>VG</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </header>
  );
}
