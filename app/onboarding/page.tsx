'use client';

import AppShell from '../components/app/AppShell';
import SectionTitle from '../components/app/SectionTitle';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export default function OnboardingPage() {
  return (
    <AppShell>
      <div className="max-w-2xl space-y-6">
        <SectionTitle
          title="Profile Setup"
          subtitle="Enter details to generate a day-wise workout & diet."
        />

        <Card className="rounded-2xl">
          <CardContent className="p-6 space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>Age</Label>
                <Input placeholder="e.g. 22" inputMode="numeric" />
              </div>
              <div className="space-y-2">
                <Label>Height (cm)</Label>
                <Input placeholder="e.g. 175" inputMode="numeric" />
              </div>
              <div className="space-y-2">
                <Label>Weight (kg)</Label>
                <Input placeholder="e.g. 72" inputMode="numeric" />
              </div>
              <div className="space-y-2">
                <Label>Goal</Label>
                <Input placeholder="Fat loss / Muscle gain" />
              </div>
            </div>

            <Button className="w-full rounded-xl">Generate My Plan</Button>

            <p className="text-xs text-slate-500">
              Disclaimer: This app provides general guidance only. If you have
              medical issues, consult a professional.
            </p>
          </CardContent>
        </Card>
      </div>
    </AppShell>
  );
}
