// src/components/app/DietCard.tsx
import React from 'react';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';
import { Salad, ChevronRight } from 'lucide-react';

export default function DietCard() {
  return (
    <Card className="rounded-2xl">
      <CardContent className="p-5">
        <div className="flex items-start justify-between gap-4">
          <div className="space-y-1">
            <p className="text-sm text-slate-500">Today’s Nutrition</p>
            <h3 className="text-lg md:text-xl font-semibold text-slate-900">
              2200 kcal target
            </h3>
            <p className="text-sm text-slate-500">
              Protein 140g • Carbs 240g • Fat 60g
            </p>
          </div>
          <div className="h-10 w-10 rounded-xl bg-slate-100 flex items-center justify-center">
            <Salad className="h-5 w-5 text-slate-900" />
          </div>
        </div>

        <div className="mt-4 space-y-2">
          <div className="flex justify-between text-xs text-slate-500">
            <span>Progress</span>
            <span>40%</span>
          </div>
          <Progress value={40} />
        </div>

        <div className="mt-5">
          <Button asChild variant="outline" className="w-full rounded-xl">
            <Link href="/diet">
              Open Diet Plan <ChevronRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
