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
    shell: 'from-violet-500/20 via-violet-500/10 to-slate-900/80',
    trend: 'bg-violet-500/15 text-violet-200',
    line: '#8b5cf6',
  },
  emerald: {
    shell: 'from-emerald-500/20 via-emerald-500/10 to-slate-900/80',
    trend: 'bg-emerald-500/15 text-emerald-200',
    line: '#34d399',
  },
  amber: {
    shell: 'from-amber-500/20 via-amber-500/10 to-slate-900/80',
    trend: 'bg-amber-500/15 text-amber-200',
    line: '#f59e0b',
  },
  slate: {
    shell: 'from-slate-400/20 via-slate-400/10 to-slate-900/80',
    trend: 'bg-white/10 text-slate-200',
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
      whileHover={{ y: -4, scale: 1.01, boxShadow: '0 20px 50px rgba(2, 6, 23, 0.34)' }}
      transition={{ duration: 0.2 }}
      className={cn(
        'rounded-3xl border border-white/10 bg-slate-900/70 p-5 shadow-[0_18px_50px_rgba(2,6,23,0.28)]',
        `bg-linear-to-br ${style.shell}`
      )}
    >
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-sm text-slate-400">{label}</p>
          <motion.h2
            key={value}
            initial={{ opacity: 0.4, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
            className="mt-4 text-3xl font-semibold tracking-tight text-white"
          >
            {displayValue}
          </motion.h2>
        </div>
        <span className={cn('rounded-full px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.18em]', style.trend)}>
          {trend}
        </span>
      </div>

      <div className="mt-4 h-16 rounded-2xl border border-white/10 bg-slate-950/50 p-2">
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

      <p className="mt-3 text-sm text-slate-400">{description}</p>
    </motion.div>
  );
}
