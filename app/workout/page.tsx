import AppShell from '../components/app/AppShell';
import SectionTitle from '../components/app/SectionTitle';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export default function WorkoutPage() {
  const day = 2; // static day

  const exercises = [
    { name: 'Barbell Squat', sets: '3', reps: '8–10', rest: '90s' },
    { name: 'Bench Press', sets: '3', reps: '8–10', rest: '90s' },
    { name: 'Lat Pulldown', sets: '3', reps: '10–12', rest: '75s' },
    { name: 'Dumbbell Shoulder Press', sets: '2', reps: '10–12', rest: '60s' },
    { name: 'Plank', sets: '3', reps: '30–45s', rest: '45s' },
  ];

  return (
    <AppShell>
      <div className="space-y-6">
        <SectionTitle
          title={`Workout Day ${day}`}
          subtitle="Focus on form. Stop if pain occurs."
        />

        <div className="grid gap-4">
          {exercises.map((e) => (
            <Card key={e.name} className="rounded-2xl">
              <CardContent className="p-5 flex items-start justify-between gap-4">
                <div>
                  <p className="font-semibold text-slate-900">{e.name}</p>
                  <p className="text-sm text-slate-500 mt-1">
                    Sets {e.sets} • Reps {e.reps} • Rest {e.rest}
                  </p>
                </div>

                <Badge variant="secondary" className="rounded-full">
                  Beginner
                </Badge>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </AppShell>
  );
}
