"use client";

import { motion } from 'framer-motion';
import { useEffect, useMemo, useState } from 'react';
import { Area, AreaChart, ResponsiveContainer } from 'recharts';

import { cn } from '@/lib/utils';

type KpiCardProps = {
  label: string;
  value: string;
  trend: string;
  tone: 'violet' | 'emerald' | 'amber' | 'slate';
  sparklineData: Array<{ value: number }>;
  description: string;
};

const toneStyles = {
  violet: {
    shell: 'from-indigo-500/15 via-indigo-500/10 to-white/80 dark:from-violet-500/20 dark:via-violet-500/10 dark:to-slate-900/80',
    trend: 'bg-indigo-500/10 text-indigo-700 dark:bg-violet-500/15 dark:text-violet-200',
    line: '#8b5cf6',
  },
  emerald: {
    shell: 'from-teal-500/15 via-teal-500/10 to-white/80 dark:from-emerald-500/20 dark:via-emerald-500/10 dark:to-slate-900/80',
    trend: 'bg-teal-500/10 text-teal-700 dark:bg-emerald-500/15 dark:text-emerald-200',
    line: '#34d399',
  },
  amber: {
    shell: 'from-amber-500/20 via-amber-500/10 to-white/80 dark:from-amber-500/20 dark:via-amber-500/10 dark:to-slate-900/80',
    trend: 'bg-amber-500/10 text-amber-700 dark:bg-amber-500/15 dark:text-amber-200',
    line: '#f59e0b',
  },
  slate: {
    shell: 'from-slate-500/15 via-slate-500/10 to-white/80 dark:from-slate-400/20 dark:via-slate-400/10 dark:to-slate-900/80',
    trend: 'bg-slate-500/10 text-slate-700 dark:bg-white/10 dark:text-slate-200',
    line: '#94a3b8',
  },
};

export function KpiCard({ label, value, trend, tone, sparklineData, description }: KpiCardProps) {
  const [displayValue, setDisplayValue] = useState('0');

  useEffect(() => {
    const timeout = window.setTimeout(() => setDisplayValue(value), 120);
    return () => window.clearTimeout(timeout);
  }, [value]);

  const chart = useMemo(() => sparklineData, [sparklineData]);
  const style = toneStyles[tone];

  return (
    <motion.div
      whileHover={{ y: -4, scale: 1.01, boxShadow: 'var(--shadow-panel-hover)' }}
      transition={{ duration: 0.2 }}
      className={cn(
        'rounded-3xl border border-theme bg-surface-panel p-5 shadow-panel',
        `bg-gradient-to-br ${style.shell}`
      )}
    >
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-sm text-muted">{label}</p>
          <motion.h2
            key={value}
            initial={{ opacity: 0.4, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
            className="mt-4 text-3xl font-semibold tracking-tight text-primary"
          >
            {displayValue}
          </motion.h2>
        </div>
        <span className={cn('rounded-full px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.18em]', style.trend)}>
          {trend}
        </span>
      </div>

      <div className="mt-4 h-16 rounded-2xl border border-theme bg-surface-inset p-2">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={chart} margin={{ top: 4, right: 0, left: 0, bottom: 0 }}>
            <defs>
              <linearGradient id={`gradient-${label}`} x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor={style.line} stopOpacity={0.45} />
                <stop offset="100%" stopColor={style.line} stopOpacity={0.02} />
              </linearGradient>
            </defs>
            <Area type="monotone" dataKey="value" stroke={style.line} strokeWidth={2.4} fill={`url(#gradient-${label})`} />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      <p className="mt-3 text-sm text-muted">{description}</p>
    </motion.div>
  );
}
