import AppShell from '../components/app/AppShell';
import SectionTitle from '../components/app/SectionTitle';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function PlanPage() {
  const days = [
    {
      day: 1,
      title: 'Full Body A',
      focus: 'Strength + form',
      href: '/workout/1',
    },
    {
      day: 2,
      title: 'Active Rest',
      focus: 'Steps + mobility',
      href: '/progress',
    },
    {
      day: 3,
      title: 'Full Body B',
      focus: 'Strength + form',
      href: '/workout/3',
    },
    { day: 4, title: 'Rest', focus: 'Sleep + recovery', href: '/progress' },
  ];

  return (
    <AppShell>
      <div className="space-y-6">
        <SectionTitle title="My Plan" subtitle="Your weekly structure." />

        <div className="grid md:grid-cols-2 gap-4">
          {days.map((d) => (
            <Card key={d.day} className="rounded-2xl">
              <CardContent className="p-5 space-y-3">
                <div className="flex items-center justify-between">
                  <Badge variant="secondary" className="rounded-full">
                    Day {d.day}
                  </Badge>
                  <Button
                    asChild
                    size="sm"
                    variant="outline"
                    className="rounded-xl"
                  >
                    <Link href={d.href}>Open</Link>
                  </Button>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900">
                    {d.title}
                  </h3>
                  <p className="text-sm text-slate-500">{d.focus}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </AppShell>
  );
}
