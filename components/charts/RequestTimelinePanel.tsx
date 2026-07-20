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
      className="rounded-[28px] border border-theme bg-surface-panel p-5 shadow-panel"
    >
      <div className="mb-4 flex items-center justify-between gap-3">
        <div>
          <h3 className="text-lg font-semibold text-primary">Request Timeline</h3>
          <p className="mt-1 text-sm text-muted">Traffic, saturation, and deployment impact</p>
        </div>
        <div className="flex items-center gap-2">
          <span className="rounded-full border border-indigo-500/20 bg-indigo-500/10 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-indigo-700 dark:border-violet-500/20 dark:bg-violet-500/10 dark:text-violet-300">
            Live
          </span>
          <div className="flex items-center gap-1 rounded-2xl border border-theme bg-surface-subtle p-1">
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

      <div className="mb-4 flex flex-wrap items-center gap-2 text-sm text-muted">
        <span className="rounded-full border border-emerald-500/20 bg-emerald-500/10 px-2.5 py-1 text-emerald-700 dark:text-emerald-200">Deployments</span>
        <span className="rounded-full border border-theme bg-surface-subtle px-2.5 py-1">P95 overlay</span>
        <span className="rounded-full border border-theme bg-surface-subtle px-2.5 py-1">Latency trend</span>
      </div>

      <div className="h-72 rounded-3xl border border-theme bg-surface-inset p-3">
        <TimelineChart />
      </div>
    </motion.section>
  );
}
