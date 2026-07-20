"use client";

import { motion } from 'framer-motion';
import { BadgeCheck } from 'lucide-react';

import { cn } from '@/lib/utils';

type InvestigationCardProps = {
  title: string;
  value: string;
  description: string;
  accent?: 'violet' | 'emerald' | 'slate';
};

const accentStyles = {
  violet: 'border-indigo-500/20 bg-indigo-500/10 text-indigo-700 dark:border-violet-500/20 dark:bg-violet-500/10 dark:text-violet-200',
  emerald: 'border-emerald-500/20 bg-emerald-500/10 text-emerald-700 dark:text-emerald-200',
  slate: 'border-theme bg-surface-subtle text-secondary',
};

export function InvestigationCard({ title, value, description, accent = 'slate' }: InvestigationCardProps) {
  return (
    <motion.div
      whileHover={{ y: -3, scale: 1.01 }}
      transition={{ duration: 0.2 }}
      className="rounded-[22px] border border-theme bg-surface-panel p-4 shadow-panel"
    >
      <div className={cn('inline-flex items-center gap-2 rounded-full border px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.18em]', accentStyles[accent])}>
        <BadgeCheck className="h-3.5 w-3.5" />
        {title}
      </div>
      <p className="mt-4 text-2xl font-semibold text-primary">{value}</p>
      <p className="mt-2 text-sm text-muted">{description}</p>
    </motion.div>
  );
}
