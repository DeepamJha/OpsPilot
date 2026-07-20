"use client";

import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';

import { SidebarNav } from '@/components/layout/SidebarNav';
import { TopBar } from '@/components/layout/TopBar';

export function AppShell({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-app text-primary transition-colors duration-200">
      <div className="mx-auto flex min-h-screen max-w-7xl flex-col border-x border-theme bg-app-frame backdrop-blur xl:flex-row">
        <aside className="hidden w-64 shrink-0 border-b border-theme px-5 py-6 xl:block xl:border-b-0 xl:border-r">
          <SidebarNav />
        </aside>

        <AnimatePresence>
          {sidebarOpen ? (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-40 bg-overlay xl:hidden"
                onClick={() => setSidebarOpen(false)}
              />
              <motion.aside
                initial={{ x: '-100%' }}
                animate={{ x: 0 }}
                exit={{ x: '-100%' }}
                transition={{ type: 'spring', stiffness: 260, damping: 24 }}
                className="fixed inset-y-0 left-0 z-50 w-72 border-r border-theme bg-surface-strong p-5 backdrop-blur xl:hidden"
              >
                <SidebarNav onClose={() => setSidebarOpen(false)} />
              </motion.aside>
            </>
          ) : null}
        </AnimatePresence>

        <main className="flex-1 px-4 py-5 sm:px-6 lg:px-8 lg:py-7">
          <TopBar onMenuToggle={() => setSidebarOpen(true)} />
          <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
            {children}
          </motion.div>
        </main>
      </div>
    </div>
  );
}
