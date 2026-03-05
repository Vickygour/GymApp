import AppShell from '../components/app/AppShell';
import SectionTitle from '../components/app/SectionTitle';
import StatCard from '../components/app/StatCard';
import { Card, CardContent } from '@/components/ui/card';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function DashboardPage() {
  return (
    <AppShell>
      <div className="space-y-6">
        <SectionTitle
          title="Dashboard"
          subtitle="Your workouts and diet, organized day by day."
        />

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
          <StatCard label="Workout Streak" value="0 days" hint="Start today" />
          <StatCard label="Goal" value="Muscle Gain" hint="Beginner plan" />
          <StatCard label="Weekly Days" value="4 days" hint="Balanced split" />
          <StatCard label="Today" value="Day 1" hint="Full Body" />
        </div>

        <div className="grid lg:grid-cols-2 gap-4">
          <Card className="rounded-2xl">
            <CardContent className="p-6 space-y-3">
              <p className="text-sm text-slate-500">Today’s Workout</p>
              <h3 className="text-lg md:text-xl font-semibold text-slate-900">
                Full Body (Beginner)
              </h3>
              <p className="text-sm text-slate-500">
                Squat • Bench • Pulldown • Shoulder • Core
              </p>
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <Button asChild className="rounded-xl">
                  <Link href="/workout/1">Start Workout</Link>
                </Button>
                <Button asChild variant="outline" className="rounded-xl">
                  <Link href="/plan">View Weekly Plan</Link>
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="rounded-2xl">
            <CardContent className="p-6 space-y-3">
              <p className="text-sm text-slate-500">Today’s Diet</p>
              <h3 className="text-lg md:text-xl font-semibold text-slate-900">
                2200 kcal target
              </h3>
              <p className="text-sm text-slate-500">
                Protein 140g • Carbs 240g • Fat 60g
              </p>
              <Button asChild variant="outline" className="rounded-xl">
                <Link href="/diet">Open Diet Plan</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </AppShell>
  );
}
