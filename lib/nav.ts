// src/lib/nav.ts
import {
  LayoutDashboard,
  Dumbbell,
  Salad,
  LineChart,
  ClipboardList,
  User2,
} from "lucide-react";

export const NAV_ITEMS = [
  { href: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { href: "/onboarding", label: "Profile Setup", icon: User2 },
  { href: "/plan", label: "My Plan", icon: ClipboardList },
  { href: "/diet", label: "Diet", icon: Salad },
  { href: "/progress", label: "Progress", icon: LineChart },
];