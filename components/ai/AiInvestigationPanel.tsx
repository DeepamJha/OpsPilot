"use client";

import { motion } from 'framer-motion';
import { ArrowRight, BrainCircuit, ShieldCheck, Sparkles } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { InvestigationCard } from '@/components/ai/InvestigationCard';

const findings = [
  { title: 'AI Summary', value: 'Redis connection saturation', description: 'The queue lag is driving elevated payment latency and tail errors.', accent: 'violet' as const },
  { title: 'Confidence Score', value: '92%', description: 'High-confidence match across traces, metrics, and logs.', accent: 'emerald' as const },
  { title: 'Root Cause', value: 'Connection pool exhaustion', description: 'A retry storm from the checkout checkout path is overloading Redis.', accent: 'slate' as const },
];

const services = ['checkout-service', 'payments-api', 'redis-primary'];
const recommendations = ['Throttle retry fanout', 'Increase pool headroom', 'Route traffic to warm nodes'];

export function AiInvestigationPanel() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35 }}
      className="mt-6 overflow-hidden rounded-[30px] border border-white/10 bg-[linear-gradient(135deg,rgba(129,104,255,0.12),rgba(15,23,42,0.9),rgba(16,185,129,0.10))] p-5 shadow-[0_24px_80px_rgba(2,6,23,0.28)] sm:p-6"
    >
      <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1.5 text-sm text-emerald-200">
            <Sparkles className="h-4 w-4" />
            Powered by SigNoz + MCP
          </div>
          <h2 className="mt-4 text-2xl font-semibold tracking-tight text-white">AI Investigation</h2>
          <p className="mt-2 text-sm leading-6 text-slate-400">
            The assistant isolated a high-probability incident chain from telemetry and surfaced the best next actions for the on-call team.
          </p>
        </div>

        <div className="rounded-[20px] border border-white/10 bg-slate-900/60 p-4">
          <div className="flex items-center gap-2 text-sm font-medium text-slate-200">
            <ShieldCheck className="h-4 w-4 text-emerald-300" />
            Auto-generated incident summary
          </div>
          <p className="mt-2 text-sm text-slate-400">Confidence is high enough to suggest a controlled mitigation rollout.</p>
        </div>
      </div>

      <div className="mt-6 grid gap-4 lg:grid-cols-3">
        {findings.map((finding, index) => (
          <motion.div
            key={finding.title}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.08 * index, duration: 0.25 }}
          >
            <InvestigationCard {...finding} />
          </motion.div>
        ))}
      </div>

      <div className="mt-6 grid gap-4 xl:grid-cols-[1.15fr_0.85fr]">
        <div className="rounded-3xl border border-white/10 bg-slate-900/70 p-5">
          <div className="flex items-center gap-2 text-sm font-semibold text-slate-200">
            <BrainCircuit className="h-4 w-4 text-violet-300" />
            Affected Services
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            {services.map((service) => (
              <span key={service} className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-slate-300">
                {service}
              </span>
            ))}
          </div>

          <div className="mt-5 rounded-[20px] border border-white/10 bg-slate-950/60 p-4">
            <div className="flex items-center gap-2 text-sm font-semibold text-slate-200">
              <Sparkles className="h-4 w-4 text-emerald-300" />
              Recommendations
            </div>
            <ul className="mt-3 space-y-2 text-sm text-slate-400">
              {recommendations.map((recommendation) => (
                <li key={recommendation} className="flex items-start gap-2">
                  <span className="mt-1 h-2 w-2 rounded-full bg-violet-400" />
                  {recommendation}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-slate-900/70 p-5">
          <p className="text-sm font-semibold text-slate-200">Suggested actions</p>
          <div className="mt-4 space-y-3">
            <Button variant="primary" className="w-full justify-between">
              Open Trace <ArrowRight className="h-4 w-4" />
            </Button>
            <Button variant="outline" className="w-full justify-between">
              Open Logs <ArrowRight className="h-4 w-4" />
            </Button>
            <Button variant="success" className="w-full justify-between">
              Ask MCP <ArrowRight className="h-4 w-4" />
            </Button>
            <Button variant="default" className="w-full justify-between border border-emerald-500/20 bg-emerald-500/10 text-emerald-200 hover:bg-emerald-500/15">
              Deploy Fix <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
