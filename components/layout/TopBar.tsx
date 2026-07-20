"use client";

import { Bell, ChevronRight, Menu, Moon, Search, Settings, Sun, User2 } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';

import { BreadcrumbNav } from '@/components/layout/BreadcrumbNav';
import { Button } from '@/components/ui/button';

export function TopBar({ onMenuToggle }: { onMenuToggle: () => void }) {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [profileMenuOpen, setProfileMenuOpen] = useState(false);

  useEffect(() => setMounted(true), []);

  return (
    <header className="mb-6 flex flex-col gap-4 rounded-[28px] border border-white/10 bg-slate-900/70 p-4 shadow-[0_18px_60px_rgba(2,6,23,0.4)] sm:flex-row sm:items-center sm:justify-between sm:px-6">
      <div className="flex items-center gap-3">
        <Button variant="outline" size="icon" className="lg:hidden" onClick={onMenuToggle}>
          <Menu className="h-4 w-4" />
        </Button>

        <div>
          <BreadcrumbNav />
          <h1 className="text-2xl font-semibold tracking-tight">Production Overview</h1>
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-3">
        <div className="hidden items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-slate-400 sm:flex">
          <Search className="h-4 w-4" />
          Search services
        </div>

        <Button variant="outline" size="icon" aria-label="Open notifications">
          <Bell className="h-4 w-4" />
        </Button>

        <Button
          variant="outline"
          size="icon"
          aria-label="Toggle theme"
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        >
          {mounted && theme === 'dark' ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
        </Button>

        <div className="relative">
          <Button
            variant="outline"
            className="gap-2 px-3"
            onClick={() => setProfileMenuOpen((open) => !open)}
          >
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-linear-to-br from-violet-500 to-emerald-400 text-sm font-semibold text-white">
              AD
            </div>
            <span className="hidden sm:inline">Alicia Diaz</span>
          </Button>

          {profileMenuOpen ? (
            <div className="absolute right-0 mt-2 w-48 rounded-2xl border border-white/10 bg-slate-900/95 p-2 shadow-2xl">
              <button className="flex w-full items-center gap-2 rounded-xl px-3 py-2 text-sm text-slate-300 hover:bg-white/10">
                <User2 className="h-4 w-4" />
                Profile
              </button>
              <button className="flex w-full items-center gap-2 rounded-xl px-3 py-2 text-sm text-slate-300 hover:bg-white/10">
                <Settings className="h-4 w-4" />
                Settings
              </button>
              <button className="mt-1 flex w-full items-center gap-2 rounded-xl bg-white/10 px-3 py-2 text-sm text-slate-100">
                Sign out
              </button>
            </div>
          ) : null}
        </div>
      </div>
    </header>
  );
}
