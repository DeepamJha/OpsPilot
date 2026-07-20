"use client";

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
  if (value > 0.9) return 'bg-violet-500/90 shadow-[0_0_0_1px_rgba(255,255,255,0.06)]';
  if (value > 0.75) return 'bg-violet-500/70';
  if (value > 0.55) return 'bg-violet-500/50';
  if (value > 0.35) return 'bg-violet-500/30';
  return 'bg-slate-800/80';
}

export function ServiceActivityHeatmap() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="mt-6 rounded-[28px] border border-white/10 bg-slate-900/70 p-5 shadow-[0_18px_50px_rgba(2,6,23,0.28)]"
    >
      <div className="mb-4 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h3 className="text-lg font-semibold">Service Activity Heatmap</h3>
          <p className="mt-1 text-sm text-slate-400">Request density by hour across the core services</p>
        </div>
        <div className="flex items-center gap-2 text-sm text-slate-400">
          <span className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1">Hours</span>
          <span className="rounded-full border border-violet-500/20 bg-violet-500/10 px-2.5 py-1 text-violet-200">Peak traffic at 08:00–18:00</span>
        </div>
      </div>

      <div className="overflow-x-auto">
        <div className="min-w-190 rounded-[22px] border border-white/10 bg-slate-950/60 p-3">
          <div className="grid grid-cols-[100px_repeat(24,minmax(0,1fr))] gap-2">
            <div />
            {hours.map((hour) => (
              <div key={hour} className="text-center text-[11px] font-medium uppercase tracking-[0.2em] text-slate-500">
                {hour}
              </div>
            ))}

            {services.map((service, rowIndex) => (
              <>
                <div key={`${service}-label`} className="flex items-center text-sm font-medium capitalize text-slate-300">
                  {service}
                </div>
                {data[rowIndex].map((value, columnIndex) => (
                  <div
                    key={`${service}-${hours[columnIndex]}`}
                    className={`h-8 rounded-md ${intensityClass(value)}`}
                    title={`${service} ${hours[columnIndex]}: ${Math.round(value * 100)}%`}
                  />
                ))}
              </>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-4 flex flex-wrap items-center gap-3 text-sm text-slate-400">
        <span className="text-slate-500">Low</span>
        <div className="h-3 w-3 rounded-sm bg-slate-800/80" />
        <div className="h-3 w-3 rounded-sm bg-violet-500/30" />
        <div className="h-3 w-3 rounded-sm bg-violet-500/50" />
        <div className="h-3 w-3 rounded-sm bg-violet-500/70" />
        <div className="h-3 w-3 rounded-sm bg-violet-500/90" />
        <span className="text-slate-500">High</span>
      </div>
    </motion.section>
  );
}
