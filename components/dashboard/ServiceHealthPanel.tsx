"use client";

import { motion } from 'framer-motion';

import { ServiceCard } from '@/components/dashboard/ServiceCard';

const services = [
  { name: 'frontend', status: 'healthy' as const, latency: '68ms', errors: '0.1%', requests: '4.2k', sparkline: [{ value: 4 }, { value: 6 }, { value: 5 }, { value: 8 }, { value: 7 }, { value: 9 }] },
  { name: 'checkout', status: 'degraded' as const, latency: '142ms', errors: '1.2%', requests: '1.8k', sparkline: [{ value: 3 }, { value: 4 }, { value: 4 }, { value: 6 }, { value: 5 }, { value: 7 }] },
  { name: 'payment', status: 'slow' as const, latency: '216ms', errors: '2.3%', requests: '640', sparkline: [{ value: 2 }, { value: 3 }, { value: 4 }, { value: 5 }, { value: 4 }, { value: 6 }] },
  { name: 'redis', status: 'healthy' as const, latency: '12ms', errors: '0.0%', requests: '8.9k', sparkline: [{ value: 6 }, { value: 7 }, { value: 8 }, { value: 7 }, { value: 8 }, { value: 9 }] },
  { name: 'postgres', status: 'healthy' as const, latency: '24ms', errors: '0.2%', requests: '4.1k', sparkline: [{ value: 5 }, { value: 6 }, { value: 5 }, { value: 7 }, { value: 6 }, { value: 8 }] },
];

export function ServiceHealthPanel() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: 0.05 }}
      className="rounded-[28px] border border-theme bg-surface-panel p-5 shadow-panel"
    >
      <div className="mb-4 flex items-center justify-between">
        <div>
          <h3 className="text-lg font-semibold text-primary">Service Health</h3>
          <p className="mt-1 text-sm text-muted">Runtime health and contract signal score</p>
        </div>
        <span className="rounded-full border border-theme bg-surface-subtle px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-secondary">
          5 services
        </span>
      </div>

      <div className="space-y-3">
        {services.map((service) => (
          <ServiceCard key={service.name} {...service} />
        ))}
      </div>
    </motion.section>
  );
}
