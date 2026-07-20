"use client";

import { motion } from 'framer-motion';
import { ArrowUpRight, BrainCircuit, MessageSquareText, Sparkles } from 'lucide-react';

const suggestions = ['Summarize the incident', 'Explain the latency spike', 'Generate a dashboard for checkout'];

const messages = [
  { role: 'assistant', text: 'I traced the spike to a Redis pool saturation pattern. I can open the related logs and show a mitigation plan.' },
  { role: 'user', text: 'What caused the increase in checkout latency?' },
];

export function AiChatDock() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="mt-6 rounded-[28px] border border-white/10 bg-slate-900/70 p-5 shadow-[0_18px_50px_rgba(2,6,23,0.28)]"
    >
      <div className="mb-4 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h3 className="text-lg font-semibold">AI Chat Dock</h3>
          <p className="mt-1 text-sm text-slate-400">Context-aware assistant for incidents and investigations</p>
        </div>
        <div className="inline-flex items-center gap-2 rounded-full border border-violet-500/20 bg-violet-500/10 px-3 py-1.5 text-sm text-violet-200">
          <BrainCircuit className="h-4 w-4" />
          Cursor-style AI workspace
        </div>
      </div>

      <div className="grid gap-4 xl:grid-cols-[1.05fr_0.95fr]">
        <div className="rounded-3xl border border-white/10 bg-slate-950/60 p-4">
          <div className="mb-3 flex items-center gap-2 text-sm font-semibold text-slate-200">
            <MessageSquareText className="h-4 w-4 text-emerald-300" />
            Conversation
          </div>

          <div className="space-y-3">
            {messages.map((message, index) => (
              <div key={`${message.role}-${index}`} className={`rounded-2xl border px-3 py-3 ${message.role === 'assistant' ? 'border-violet-500/20 bg-violet-500/10' : 'border-white/10 bg-white/5'}`}>
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-500">{message.role}</p>
                <p className="mt-2 text-sm leading-6 text-slate-200">{message.text}</p>
              </div>
            ))}
          </div>

          <div className="mt-4 rounded-2xl border border-white/10 bg-white/5 p-3">
            <div className="flex items-center gap-2 text-sm font-medium text-slate-200">
              <Sparkles className="h-4 w-4 text-violet-300" />
              Suggested prompts
            </div>
            <div className="mt-3 flex flex-wrap gap-2">
              {suggestions.map((suggestion) => (
                <button key={suggestion} className="rounded-full border border-white/10 bg-slate-900/70 px-3 py-1.5 text-sm text-slate-300">
                  {suggestion}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-slate-950/60 p-4">
          <div className="flex items-center gap-2 text-sm font-semibold text-slate-200">
            <Sparkles className="h-4 w-4 text-emerald-300" />
            Ask the assistant
          </div>

          <div className="mt-4 rounded-[20px] border border-white/10 bg-slate-900/70 p-3">
            <textarea
              rows={5}
              className="w-full resize-none bg-transparent text-sm text-slate-200 outline-none"
              placeholder="Ask the AI to investigate an incident, explain a metric, or build a dashboard..."
            />
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            <button className="rounded-2xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-slate-200">Open Trace</button>
            <button className="rounded-2xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-slate-200">Open Logs</button>
            <button className="rounded-2xl bg-violet-500/15 px-3 py-2 text-sm font-medium text-violet-200">Generate Dashboard</button>
          </div>

          <div className="mt-4 rounded-[20px] border border-white/10 bg-slate-900/70 p-4 text-sm text-slate-400">
            The dock is UI-only and designed to feel like a premium AI sidecar for your operations workflow.
          </div>
        </div>
      </div>
    </motion.section>
  );
}
