"use client";

import { motion } from 'framer-motion';
import { Area, AreaChart, ResponsiveContainer } from 'recharts';

import { cn } from '@/lib/utils';

type ServiceCardProps = {
  name: string;
  status: 'healthy' | 'degraded' | 'slow';
  latency: string;
  errors: string;
  requests: string;
  sparkline: Array<{ value: number }>;
};

const statusStyles = {
  healthy: 'bg-emerald-500/10 text-emerald-200',
  degraded: 'bg-amber-500/10 text-amber-200',
  slow: 'bg-rose-500/10 text-rose-200',
};

export function ServiceCard({ name, status, latency, errors, requests, sparkline }: ServiceCardProps) {
  return (
    <motion.div
      whileHover={{ y: -3, scale: 1.01 }}
      transition={{ duration: 0.2 }}
      className="rounded-[20px] border border-white/10 bg-slate-950/60 p-4"
    >
      <div className="flex items-center justify-between gap-3">
        <div>
          <h4 className="text-sm font-semibold capitalize text-white">{name}</h4>
          <p className="mt-1 text-xs uppercase tracking-[0.2em] text-slate-500">service</p>
        </div>
        <span className={cn('rounded-full px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.16em]', statusStyles[status])}>
          {status}
        </span>
      </div>

      <div className="mt-4 grid gap-2 sm:grid-cols-3">
        <div>
          <p className="text-[11px] uppercase tracking-[0.2em] text-slate-500">Latency</p>
          <p className="mt-1 text-sm font-medium text-slate-200">{latency}</p>
        </div>
        <div>
          <p className="text-[11px] uppercase tracking-[0.2em] text-slate-500">Errors</p>
          <p className="mt-1 text-sm font-medium text-slate-200">{errors}</p>
        </div>
        <div>
          <p className="text-[11px] uppercase tracking-[0.2em] text-slate-500">Req</p>
          <p className="mt-1 text-sm font-medium text-slate-200">{requests}</p>
        </div>
      </div>

      <div className="mt-4 h-12 rounded-2xl border border-white/10 bg-slate-900/70 p-2">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={sparkline} margin={{ top: 2, right: 0, left: 0, bottom: 0 }}>
            <defs>
              <linearGradient id={`spark-${name}`} x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#8b5cf6" stopOpacity={0.4} />
                <stop offset="100%" stopColor="#8b5cf6" stopOpacity={0.02} />
              </linearGradient>
            </defs>
            <Area type="monotone" dataKey="value" stroke="#8b5cf6" strokeWidth={2} fill={`url(#spark-${name})`} />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
}
