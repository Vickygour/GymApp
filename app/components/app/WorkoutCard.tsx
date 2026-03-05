// src/components/app/WorkoutCard.tsx
import React from 'react';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ChevronRight, Dumbbell } from 'lucide-react';

export default function WorkoutCard() {
  return (
    <Card className="rounded-2xl overflow-hidden">
      <CardContent className="p-5">
        <div className="flex items-start justify-between gap-4">
          <div className="space-y-2">
            <Badge variant="secondary" className="rounded-full">
              Today • Day 1
            </Badge>
            <h3 className="text-lg md:text-xl font-semibold text-slate-900">
              Full Body (Beginner)
            </h3>
            <p className="text-sm text-slate-500">
              Squat • Bench • Row • Shoulder • Core
            </p>
          </div>
          <div className="h-10 w-10 rounded-xl bg-slate-100 flex items-center justify-center">
            <Dumbbell className="h-5 w-5 text-slate-900" />
          </div>
        </div>

        <div className="mt-5 flex flex-col sm:flex-row gap-3">
          <Button asChild className="rounded-xl">
            <Link href="/workout/1">
              Start Workout <ChevronRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button variant="outline" className="rounded-xl">
            View Exercises
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
