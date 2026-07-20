"use client";

import { motion } from 'framer-motion';
import { ArrowRight, BadgeCheck, BrainCircuit, ShieldCheck, Sparkles } from 'lucide-react';

import { cn } from '@/lib/utils';

type InvestigationCardProps = {
  title: string;
  value: string;
  description: string;
  accent?: 'violet' | 'emerald' | 'slate';
};

const accentStyles = {
  violet: 'border-violet-500/20 bg-violet-500/10 text-violet-200',
  emerald: 'border-emerald-500/20 bg-emerald-500/10 text-emerald-200',
  slate: 'border-white/10 bg-white/5 text-slate-200',
};

export function InvestigationCard({ title, value, description, accent = 'slate' }: InvestigationCardProps) {
  return (
    <motion.div
      whileHover={{ y: -3, scale: 1.01 }}
      transition={{ duration: 0.2 }}
      className="rounded-[22px] border border-white/10 bg-slate-900/70 p-4 shadow-[0_16px_44px_rgba(2,6,23,0.24)]"
    >
      <div className={cn('inline-flex items-center gap-2 rounded-full border px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.18em]', accentStyles[accent])}>
        <BadgeCheck className="h-3.5 w-3.5" />
        {title}
      </div>
      <p className="mt-4 text-2xl font-semibold text-white">{value}</p>
      <p className="mt-2 text-sm text-slate-400">{description}</p>
    </motion.div>
  );
}
