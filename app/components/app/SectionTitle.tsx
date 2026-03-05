// src/components/app/SectionTitle.tsx
import React from 'react';
import { Separator } from '@/components/ui/separator';

export default function SectionTitle({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="space-y-2">
      <div>
        <h2 className="text-xl md:text-2xl font-semibold tracking-tight text-slate-900">
          {title}
        </h2>
        {subtitle ? (
          <p className="text-sm md:text-base text-slate-500">{subtitle}</p>
        ) : null}
      </div>
      <Separator />
    </div>
  );
}
