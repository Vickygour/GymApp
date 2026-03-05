import AppShell from '../components/app/AppShell';
import SectionTitle from '../components/app/SectionTitle';
import { Card, CardContent } from '@/components/ui/card';

export default function ProgressPage() {
  return (
    <AppShell>
      <div className="space-y-6">
        <SectionTitle title="Progress" subtitle="Track your consistency." />

        <div className="grid md:grid-cols-2 gap-4">
          <Card className="rounded-2xl">
            <CardContent className="p-6">
              <p className="font-medium text-slate-900">Weight Log</p>
              <p className="text-sm text-slate-500 mt-1">
                (Next) Add weight tracking + chart
              </p>
            </CardContent>
          </Card>

          <Card className="rounded-2xl">
            <CardContent className="p-6">
              <p className="font-medium text-slate-900">Workout History</p>
              <p className="text-sm text-slate-500 mt-1">
                (Next) Completed days list
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </AppShell>
  );
}
