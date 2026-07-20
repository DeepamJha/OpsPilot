"use client";

import { motion } from 'framer-motion';
import { Minus, Plus, ScanSearch } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { TimelineChart } from '@/components/charts/TimelineChart';

export function RequestTimelinePanel() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="rounded-[28px] border border-white/10 bg-slate-900/70 p-5 shadow-[0_18px_50px_rgba(2,6,23,0.28)]"
    >
      <div className="mb-4 flex items-center justify-between gap-3">
        <div>
          <h3 className="text-lg font-semibold">Request Timeline</h3>
          <p className="mt-1 text-sm text-slate-400">Traffic, saturation, and deployment impact</p>
        </div>
        <div className="flex items-center gap-2">
          <span className="rounded-full border border-violet-500/20 bg-violet-500/10 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-violet-300">
            Live
          </span>
          <div className="flex items-center gap-1 rounded-2xl border border-white/10 bg-white/5 p-1">
            <Button variant="ghost" size="icon" aria-label="Zoom out">
              <Minus className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon" aria-label="Zoom in">
              <Plus className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon" aria-label="Inspect">
              <ScanSearch className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      <div className="mb-4 flex flex-wrap items-center gap-2 text-sm text-slate-400">
        <span className="rounded-full border border-emerald-500/20 bg-emerald-500/10 px-2.5 py-1 text-emerald-200">Deployments</span>
        <span className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1">P95 overlay</span>
        <span className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1">Latency trend</span>
      </div>

      <div className="h-72 rounded-3xl border border-white/10 bg-slate-950/60 p-3">
        <TimelineChart />
      </div>
    </motion.section>
  );
}
