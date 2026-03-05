// src/components/app/StatCard.tsx
import React from 'react';
import { Card, CardContent } from '../../../components/ui/card';

export default function StatCard({
  label,
  value,
  hint,
}: {
  label: string;
  value: string;
  hint?: string;
}) {
  return (
    <Card className="rounded-2xl">
      <CardContent className="p-5">
        <p className="text-xs md:text-sm text-slate-500">{label}</p>
        <p className="mt-2 text-2xl md:text-3xl font-bold text-slate-900">
          {value}
        </p>
        {hint ? <p className="mt-2 text-sm text-slate-500">{hint}</p> : null}
      </CardContent>
    </Card>
  );
}
