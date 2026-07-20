"use client";

import { Activity, AlertTriangle, BarChart3, ChevronRight, LayoutDashboard, ScrollText, Search, Server, Sparkles } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const mainItems = [
  { label: 'Overview', icon: LayoutDashboard, active: true },
  { label: 'Services', icon: Server },
  { label: 'Traces', icon: Activity },
  { label: 'Logs', icon: ScrollText },
];

const secondaryItems = [
  { label: 'Dashboards', icon: BarChart3 },
  { label: 'Query Builder', icon: Search },
  { label: 'Alerts', icon: AlertTriangle },
];

export function SidebarNav({ onClose }: { onClose?: () => void }) {
  return (
    <div className="flex h-full flex-col">
      <div className="mb-8 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-500 to-emerald-400 text-lg font-semibold text-white">
          ◎
        </div>
        <div>
          <h2 className="text-base font-semibold">OpsPilot</h2>
          <p className="text-sm text-slate-400">/production</p>
        </div>
      </div>

      <div className="space-y-2">
        <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-500">Monitor</p>
        {mainItems.map((item) => {
          const Icon = item.icon;
          return (
            <button
              key={item.label}
              onClick={onClose}
              className={cn(
                'flex w-full items-center gap-3 rounded-2xl px-3 py-2.5 text-sm transition',
                item.active
                  ? 'bg-violet-500/15 text-white shadow-[inset_0_0_0_1px_rgba(129,104,255,0.2)]'
                  : 'text-slate-400 hover:bg-white/5 hover:text-white'
              )}
            >
              <Icon className="h-4 w-4" />
              {item.label}
            </button>
          );
        })}

        <p className="mb-3 mt-5 text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-500">Observability</p>
        {secondaryItems.map((item) => {
          const Icon = item.icon;
          return (
            <button
              key={item.label}
              onClick={onClose}
              className="flex w-full items-center gap-3 rounded-2xl px-3 py-2.5 text-sm text-slate-400 transition hover:bg-white/5 hover:text-white"
            >
              <Icon className="h-4 w-4" />
              {item.label}
            </button>
          );
        })}

        <div className="mt-5 rounded-[20px] border border-violet-500/20 bg-violet-500/10 p-3">
          <div className="flex items-center gap-2 text-sm font-medium text-white">
            <Sparkles className="h-4 w-4 text-emerald-300" />
            Ask via MCP
          </div>
          <p className="mt-2 text-sm text-slate-400">Investigate incidents with AI-assisted context.</p>
          <Button variant="success" className="mt-3 w-full justify-between" onClick={onClose}>
            Open workspace <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <div className="mt-auto rounded-3xl border border-white/10 bg-white/5 p-4">
        <h3 className="text-sm font-semibold">SigNoz Connected</h3>
        <p className="mt-2 text-sm text-slate-400">Receiving OpenTelemetry data</p>
        <Button variant="primary" className="mt-4 w-full">
          Export Report
        </Button>
      </div>
    </div>
  );
}
