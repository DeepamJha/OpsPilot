"use client";

import { motion } from 'framer-motion';
import { Search, SlidersHorizontal } from 'lucide-react';

const filters = ['All', 'Error', 'Warn', 'Info'];

const logs = [
  { timestamp: '12:14:32', severity: 'error', service: 'payment', message: 'Redis timeout exceeded for checkout retry fanout', traceId: 'trc-4821' },
  { timestamp: '12:14:10', severity: 'warn', service: 'checkout', message: 'Latency spike detected on /cart summary', traceId: 'trc-4818' },
  { timestamp: '12:13:58', severity: 'info', service: 'frontend', message: 'CDN cache hit ratio improved after rollout', traceId: 'trc-4814' },
  { timestamp: '12:13:48', severity: 'info', service: 'postgres', message: 'Background vacuum completed successfully', traceId: 'trc-4809' },
  { timestamp: '12:13:32', severity: 'error', service: 'redis', message: 'Connection pool saturation reached 94%', traceId: 'trc-4805' },
];

function severityClass(severity: string) {
  if (severity === 'error') return 'border-rose-500/20 bg-rose-500/10 text-rose-200';
  if (severity === 'warn') return 'border-amber-500/20 bg-amber-500/10 text-amber-200';
  return 'border-emerald-500/20 bg-emerald-500/10 text-emerald-200';
}

export function LiveLogs() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="mt-6 rounded-[28px] border border-white/10 bg-slate-900/70 p-5 shadow-[0_18px_50px_rgba(2,6,23,0.28)]"
    >
      <div className="mb-4 flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <h3 className="text-lg font-semibold">Live Logs</h3>
          <p className="mt-1 text-sm text-slate-400">Streaming operational events with trace context</p>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <div className="flex flex-wrap gap-2">
            {filters.map((filter) => (
              <button
                key={filter}
                className={`rounded-full border px-2.5 py-1 text-sm ${filter === 'All' ? 'border-violet-500/20 bg-violet-500/10 text-violet-200' : 'border-white/10 bg-white/5 text-slate-300'}`}
              >
                {filter}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2 rounded-2xl border border-white/10 bg-slate-950/60 px-3 py-2">
            <Search className="h-4 w-4 text-slate-500" />
            <input
              className="w-full bg-transparent text-sm text-slate-200 outline-none sm:w-48"
              placeholder="Search logs"
            />
          </div>
        </div>
      </div>

      <div className="mb-3 flex items-center gap-2 text-sm text-slate-400">
        <SlidersHorizontal className="h-4 w-4" />
        Filtered by service and severity
      </div>

      <div className="overflow-hidden rounded-[22px] border border-white/10 bg-slate-950/60">
        <div className="grid grid-cols-[120px_90px_110px_1fr_120px] gap-3 border-b border-white/10 bg-slate-900/70 px-4 py-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-500">
          <div>Timestamp</div>
          <div>Severity</div>
          <div>Service</div>
          <div>Message</div>
          <div>Trace ID</div>
        </div>

        <div className="max-h-80 overflow-y-auto">
          {logs.map((log) => (
            <div key={`${log.timestamp}-${log.traceId}`} className="grid grid-cols-[120px_90px_110px_1fr_120px] gap-3 border-b border-white/5 px-4 py-3 text-sm text-slate-300 last:border-b-0">
              <div className="text-slate-400">{log.timestamp}</div>
              <div>
                <span className={`rounded-full border px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] ${severityClass(log.severity)}`}>
                  {log.severity}
                </span>
              </div>
              <div className="font-medium capitalize">{log.service}</div>
              <div className="truncate">{log.message}</div>
              <div className="font-mono text-xs text-violet-200">{log.traceId}</div>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
