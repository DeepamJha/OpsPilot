"use client";

import { motion } from 'framer-motion';
import { BrainCircuit, MessageSquareText, Sparkles } from 'lucide-react';

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
      className="mt-6 rounded-[28px] border border-theme bg-surface-panel p-5 shadow-panel"
    >
      <div className="mb-4 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h3 className="text-lg font-semibold text-primary">AI Chat Dock</h3>
          <p className="mt-1 text-sm text-muted">Context-aware assistant for incidents and investigations</p>
        </div>
        <div className="inline-flex items-center gap-2 rounded-full border border-indigo-500/20 bg-indigo-500/10 px-3 py-1.5 text-sm text-indigo-700 dark:border-violet-500/20 dark:bg-violet-500/10 dark:text-violet-200">
          <BrainCircuit className="h-4 w-4" />
          Cursor-style AI workspace
        </div>
      </div>

      <div className="grid gap-4 xl:grid-cols-[1.05fr_0.95fr]">
        <div className="rounded-3xl border border-theme bg-surface-inset p-4">
          <div className="mb-3 flex items-center gap-2 text-sm font-semibold text-secondary">
            <MessageSquareText className="h-4 w-4 text-teal-600 dark:text-emerald-300" />
            Conversation
          </div>

          <div className="space-y-3">
            {messages.map((message, index) => (
              <div key={`${message.role}-${index}`} className={`rounded-2xl border px-3 py-3 ${message.role === 'assistant' ? 'border-indigo-500/20 bg-indigo-500/10 dark:border-violet-500/20 dark:bg-violet-500/10' : 'border-theme bg-surface-subtle'}`}>
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-faint">{message.role}</p>
                <p className="mt-2 text-sm leading-6 text-secondary">{message.text}</p>
              </div>
            ))}
          </div>

          <div className="mt-4 rounded-2xl border border-theme bg-surface-subtle p-3">
            <div className="flex items-center gap-2 text-sm font-medium text-secondary">
              <Sparkles className="h-4 w-4 text-indigo-600 dark:text-violet-300" />
              Suggested prompts
            </div>
            <div className="mt-3 flex flex-wrap gap-2">
              {suggestions.map((suggestion) => (
                <button key={suggestion} className="rounded-full border border-theme bg-surface-panel px-3 py-1.5 text-sm text-secondary hover-surface">
                  {suggestion}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="rounded-3xl border border-theme bg-surface-inset p-4">
          <div className="flex items-center gap-2 text-sm font-semibold text-secondary">
            <Sparkles className="h-4 w-4 text-teal-600 dark:text-emerald-300" />
            Ask the assistant
          </div>

          <div className="mt-4 rounded-[20px] border border-theme bg-surface-panel p-3">
            <textarea
              rows={5}
              className="w-full resize-none bg-transparent text-sm text-secondary outline-none placeholder:text-muted"
              placeholder="Ask the AI to investigate an incident, explain a metric, or build a dashboard..."
            />
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            <button className="rounded-2xl border border-theme bg-surface-subtle px-3 py-2 text-sm text-secondary hover-surface">Open Trace</button>
            <button className="rounded-2xl border border-theme bg-surface-subtle px-3 py-2 text-sm text-secondary hover-surface">Open Logs</button>
            <button className="rounded-2xl bg-indigo-500/10 px-3 py-2 text-sm font-medium text-indigo-700 dark:bg-violet-500/15 dark:text-violet-200">Generate Dashboard</button>
          </div>

          <div className="mt-4 rounded-[20px] border border-theme bg-surface-panel p-4 text-sm text-muted">
            The dock is UI-only and designed to feel like a premium AI sidecar for your operations workflow.
          </div>
        </div>
      </div>
    </motion.section>
  );
}
