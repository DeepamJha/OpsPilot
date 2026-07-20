"use client";

import { Bell, Menu, Moon, Search, Settings, Sun, User2 } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';

import { BreadcrumbNav } from '@/components/layout/BreadcrumbNav';
import { Button } from '@/components/ui/button';

export function TopBar({ onMenuToggle }: { onMenuToggle: () => void }) {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [profileMenuOpen, setProfileMenuOpen] = useState(false);
  const isDark = mounted && resolvedTheme === 'dark';

  useEffect(() => setMounted(true), []);

  return (
    <header className="mb-6 flex flex-col gap-4 rounded-[28px] border border-theme bg-surface-panel p-4 shadow-panel sm:flex-row sm:items-center sm:justify-between sm:px-6">
      <div className="flex items-center gap-3">
        <Button variant="outline" size="icon" className="lg:hidden" onClick={onMenuToggle}>
          <Menu className="h-4 w-4" />
        </Button>

        <div>
          <BreadcrumbNav />
          <h1 className="text-2xl font-semibold tracking-tight text-primary">Production Overview</h1>
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-3">
        <div className="hidden items-center gap-2 rounded-2xl border border-theme bg-surface-subtle px-3 py-2 text-sm text-muted sm:flex">
          <Search className="h-4 w-4" />
          Search services
        </div>

        <Button variant="outline" size="icon" aria-label="Open notifications">
          <Bell className="h-4 w-4" />
        </Button>

        <Button
          variant="outline"
          size="icon"
          aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
          onClick={() => setTheme(isDark ? 'light' : 'dark')}
        >
          {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
        </Button>

        <div className="relative">
          <Button
            variant="outline"
            className="gap-2 px-3"
            onClick={() => setProfileMenuOpen((open) => !open)}
          >
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-indigo-500 to-teal-400 text-sm font-semibold text-white dark:from-violet-500 dark:to-emerald-400">
              AD
            </div>
            <span className="hidden sm:inline">Alicia Diaz</span>
          </Button>

          {profileMenuOpen ? (
            <div className="absolute right-0 z-20 mt-2 w-48 rounded-2xl border border-theme bg-surface-strong p-2 shadow-panel">
              <button className="flex w-full items-center gap-2 rounded-xl px-3 py-2 text-sm text-secondary hover-surface">
                <User2 className="h-4 w-4" />
                Profile
              </button>
              <button className="flex w-full items-center gap-2 rounded-xl px-3 py-2 text-sm text-secondary hover-surface">
                <Settings className="h-4 w-4" />
                Settings
              </button>
              <button className="mt-1 flex w-full items-center gap-2 rounded-xl bg-surface-subtle px-3 py-2 text-sm text-primary">
                Sign out
              </button>
            </div>
          ) : null}
        </div>
      </div>
    </header>
  );
}
