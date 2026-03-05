// src/components/app/SidebarNav.tsx
'use client';
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_ITEMS } from "@/lib/nav";
import { cn } from "@/lib/utils";

export default function SidebarNav() {
  const pathname = usePathname();

  return (
    <aside className="hidden lg:flex lg:flex-col lg:w-72 lg:fixed lg:inset-y-0 lg:border-r bg-white">
      <div className="p-6">
        <Link href="/dashboard" className="flex items-center gap-2">
          <div className="h-10 w-10 rounded-2xl bg-slate-900 text-white flex items-center justify-center font-bold">
            G
          </div>
          <div>
            <p className="font-semibold text-slate-900 leading-tight">GymApp</p>
            <p className="text-xs text-slate-500">Beginner Coach</p>
          </div>
        </Link>
      </div>

      <nav className="px-3 pb-6 space-y-1">
        {NAV_ITEMS.map((item) => {
          const active =
            pathname === item.href || pathname.startsWith(item.href + "/");
          const Icon = item.icon;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm transition",
                active
                  ? "bg-slate-900 text-white"
                  : "text-slate-700 hover:bg-slate-100"
              )}
            >
              <Icon className="h-4 w-4" />
              {item.label}
            </Link>
          );
        })}
      </nav>

      <div className="mt-auto p-6">
        <div className="rounded-2xl border p-4">
          <p className="text-sm font-medium text-slate-900">Tip</p>
          <p className="mt-1 text-xs text-slate-500">
            Consistency beats intensity. 3–4 days/week is enough.
          </p>
        </div>
      </div>
    </aside>
  );
}