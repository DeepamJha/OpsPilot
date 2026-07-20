"use client";

import { motion } from 'framer-motion';
import { AlertTriangle, CheckCircle2 } from 'lucide-react';

type Span = {
  service: string;
  duration: string;
  latency: string;
  status: 'ok' | 'error';
  error?: string;
  width: number;
};

const spans: Span[] = [
  { service: 'Frontend', duration: '14ms', latency: '12ms', status: 'ok', width: 20 },
  { service: 'Checkout', duration: '42ms', latency: '38ms', status: 'ok', width: 34 },
  { service: 'Payment', duration: '118ms', latency: '92ms', status: 'error', error: 'timeout', width: 76 },
  { service: 'Redis', duration: '27ms', latency: '20ms', status: 'ok', width: 24 },
  { service: 'Postgres', duration: '61ms', latency: '56ms', status: 'ok', width: 44 },
];

export function TraceWaterfall() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="mt-6 rounded-[28px] border border-white/10 bg-slate-900/70 p-5 shadow-[0_18px_50px_rgba(2,6,23,0.28)]"
    >
      <div className="mb-4 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h3 className="text-lg font-semibold">Trace Waterfall</h3>
          <p className="mt-1 text-sm text-slate-400">Distributed request path with span-level timing and status</p>
        </div>
        <div className="flex items-center gap-2 text-sm text-slate-400">
          <span className="rounded-full border border-violet-500/20 bg-violet-500/10 px-2.5 py-1 text-violet-200">Trace 4821</span>
          <span className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1">Root span</span>
        </div>
      </div>

      <div className="space-y-3">
        {spans.map((span, index) => (
          <div key={span.service} className="rounded-[20px] border border-white/10 bg-slate-950/60 p-4">
            <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
              <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/5 text-sm font-semibold text-slate-200">
                  {index + 1}
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <p className="text-sm font-semibold text-white">{span.service}</p>
                    {index < spans.length - 1 ? <span className="text-slate-500">↓</span> : null}
                  </div>
                  <p className="text-xs uppercase tracking-[0.2em] text-slate-500">request path</p>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-2 text-sm">
                <div className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-slate-300">
                  <span className="text-slate-500">Duration:</span> {span.duration}
                </div>
                <div className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-slate-300">
                  <span className="text-slate-500">Latency:</span> {span.latency}
                </div>
                <div className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-slate-300">
                  {span.status === 'ok' ? (
                    <span className="flex items-center gap-1 text-emerald-200">
                      <CheckCircle2 className="h-3.5 w-3.5" /> ok
                    </span>
                  ) : (
                    <span className="flex items-center gap-1 text-rose-200">
                      <AlertTriangle className="h-3.5 w-3.5" /> error
                    </span>
                  )}
                </div>
                {span.error ? (
                  <span className="rounded-full border border-rose-500/20 bg-rose-500/10 px-2.5 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-rose-200">
                    {span.error}
                  </span>
                ) : null}
              </div>
            </div>

            <div className="mt-4 h-2.5 rounded-full bg-slate-800/80">
              <div
                className={`h-2.5 rounded-full ${span.status === 'error' ? 'bg-rose-500' : 'bg-violet-500'}`}
                style={{ width: `${span.width}%` }}
              />
            </div>

            <div className="mt-2 flex items-center justify-between text-xs uppercase tracking-[0.2em] text-slate-500">
              <span>start</span>
              <span>timeline</span>
              <span>end</span>
            </div>
          </div>
        ))}
      </div>
    </motion.section>
  );
}
