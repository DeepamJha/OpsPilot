"use client";

import { Fragment } from 'react';
import { motion } from 'framer-motion';

const services = ['frontend', 'checkout', 'payment', 'redis', 'postgres'];
const hours = ['00', '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23'];

const data = [
  [0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 1, 0.9, 0.8, 0.7, 0.6, 0.5, 0.4, 0.6, 0.8, 0.9, 1, 0.9, 0.7, 0.6, 0.5, 0.4, 0.3, 0.2],
  [0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1, 0.9, 0.8, 0.7, 0.6, 0.5, 0.6, 0.7, 0.8, 0.9, 1, 0.8, 0.7, 0.6, 0.5, 0.4, 0.3],
  [0.5, 0.6, 0.7, 0.8, 0.9, 1, 0.9, 0.8, 0.7, 0.6, 0.5, 0.4, 0.5, 0.7, 0.8, 0.9, 1, 0.8, 0.7, 0.6, 0.5, 0.4, 0.3, 0.2],
  [0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1, 0.9, 0.8, 0.7, 0.6, 0.5, 0.4, 0.3, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8],
  [0.2, 0.3, 0.4, 0.5, 0.6, 0.5, 0.6, 0.7, 0.8, 0.9, 0.8, 0.7, 0.6, 0.5, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 0.8, 0.7, 0.6, 0.5],
];

function intensityClass(value: number) {
  if (value > 0.9) return 'bg-indigo-500/90 shadow-[0_0_0_1px_rgba(15,23,42,0.08)] dark:bg-violet-500/90 dark:shadow-[0_0_0_1px_rgba(255,255,255,0.06)]';
  if (value > 0.75) return 'bg-indigo-500/70 dark:bg-violet-500/70';
  if (value > 0.55) return 'bg-indigo-500/50 dark:bg-violet-500/50';
  if (value > 0.35) return 'bg-indigo-500/30 dark:bg-violet-500/30';
  return 'bg-slate-200/90 dark:bg-slate-800/80';
}

export function ServiceActivityHeatmap() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="mt-6 rounded-[28px] border border-theme bg-surface-panel p-5 shadow-panel"
    >
      <div className="mb-4 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h3 className="text-lg font-semibold text-primary">Service Activity Heatmap</h3>
          <p className="mt-1 text-sm text-muted">Request density by hour across the core services</p>
        </div>
        <div className="flex items-center gap-2 text-sm text-muted">
          <span className="rounded-full border border-theme bg-surface-subtle px-2.5 py-1">Hours</span>
          <span className="rounded-full border border-indigo-500/20 bg-indigo-500/10 px-2.5 py-1 text-indigo-700 dark:border-violet-500/20 dark:bg-violet-500/10 dark:text-violet-200">Peak traffic at 08:00-18:00</span>
        </div>
      </div>

      <div className="overflow-x-auto">
        <div className="min-w-[48rem] rounded-[22px] border border-theme bg-surface-inset p-3">
          <div className="grid grid-cols-[100px_repeat(24,minmax(0,1fr))] gap-2">
            <div />
            {hours.map((hour) => (
              <div key={hour} className="text-center text-[11px] font-medium uppercase tracking-[0.2em] text-faint">
                {hour}
              </div>
            ))}

            {services.map((service, rowIndex) => (
              <Fragment key={service}>
                <div className="flex items-center text-sm font-medium capitalize text-secondary">
                  {service}
                </div>
                {data[rowIndex].map((value, columnIndex) => (
                  <div
                    key={`${service}-${hours[columnIndex]}`}
                    className={`h-8 rounded-md ${intensityClass(value)}`}
                    title={`${service} ${hours[columnIndex]}: ${Math.round(value * 100)}%`}
                  />
                ))}
              </Fragment>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-4 flex flex-wrap items-center gap-3 text-sm text-muted">
        <span className="text-faint">Low</span>
        <div className="h-3 w-3 rounded-sm bg-slate-200/90 dark:bg-slate-800/80" />
        <div className="h-3 w-3 rounded-sm bg-indigo-500/30 dark:bg-violet-500/30" />
        <div className="h-3 w-3 rounded-sm bg-indigo-500/50 dark:bg-violet-500/50" />
        <div className="h-3 w-3 rounded-sm bg-indigo-500/70 dark:bg-violet-500/70" />
        <div className="h-3 w-3 rounded-sm bg-indigo-500/90 dark:bg-violet-500/90" />
        <span className="text-faint">High</span>
      </div>
    </motion.section>
  );
}
