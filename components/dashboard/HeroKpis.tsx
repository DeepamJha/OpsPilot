"use client";

import { motion } from 'framer-motion';

import { KpiCard } from '@/components/dashboard/KpiCard';

const cards = [
  {
    label: 'P95 Latency',
    value: '312 ms',
    trend: '+12%',
    tone: 'violet' as const,
    sparklineData: [{ value: 52 }, { value: 58 }, { value: 56 }, { value: 64 }, { value: 60 }, { value: 68 }, { value: 71 }],
    description: 'Peak latency trending down after the deployment window.',
  },
  {
    label: 'Availability',
    value: '99.4%',
    trend: 'Healthy',
    tone: 'emerald' as const,
    sparklineData: [{ value: 61 }, { value: 63 }, { value: 66 }, { value: 65 }, { value: 67 }, { value: 69 }, { value: 71 }],
    description: 'Service availability stayed above the SLA target.',
  },
  {
    label: 'Error Rate',
    value: '2.3%',
    trend: 'Watch',
    tone: 'amber' as const,
    sparklineData: [{ value: 22 }, { value: 24 }, { value: 26 }, { value: 24 }, { value: 21 }, { value: 23 }, { value: 25 }],
    description: 'A small increase in checkout failures needs attention.',
  },
  {
    label: 'Requests/sec',
    value: '842',
    trend: 'Stable',
    tone: 'slate' as const,
    sparklineData: [{ value: 40 }, { value: 42 }, { value: 43 }, { value: 41 }, { value: 44 }, { value: 45 }, { value: 43 }],
    description: 'Traffic is steady across the global edge network.',
  },
];

export function HeroKpis() {
  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
      {cards.map((card, index) => (
        <motion.div
          key={card.label}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25, delay: index * 0.05 }}
        >
          <KpiCard {...card} />
        </motion.div>
      ))}
    </div>
  );
}
