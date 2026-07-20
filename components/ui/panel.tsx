"use client";

import { motion, type HTMLMotionProps } from 'framer-motion';
import type { ReactNode } from 'react';

import { cn } from '@/lib/utils';

type PanelProps = HTMLMotionProps<'section'> & {
  children: ReactNode;
  className?: string;
  hover?: boolean;
};

export function Panel({ children, className, hover = false, ...props }: PanelProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      whileHover={hover ? { y: -3, scale: 1.005, boxShadow: '0 22px 60px rgba(2, 6, 23, 0.34)' } : undefined}
      className={cn(
        'rounded-[28px] border border-white/10 bg-slate-900/70 p-5 shadow-[0_18px_50px_rgba(2,6,23,0.28)] backdrop-blur-xl transition-[transform,box-shadow,border-color,background-color] duration-200',
        hover && 'hover:border-white/20',
        className
      )}
      {...props}
    >
      {children}
    </motion.section>
  );
}

type PanelHeaderProps = {
  title: string;
  description?: string;
  badge?: ReactNode;
  actions?: ReactNode;
  className?: string;
};

export function PanelHeader({ title, description, badge, actions, className }: PanelHeaderProps) {
  return (
    <div className={cn('mb-4 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between', className)}>
      <div className="space-y-1">
        <div className="flex flex-wrap items-center gap-2">
          <h3 className="text-lg font-semibold tracking-tight text-white">{title}</h3>
          {badge ? <span className="rounded-full border border-violet-500/20 bg-violet-500/10 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-violet-200">{badge}</span> : null}
        </div>
        {description ? <p className="text-sm leading-6 text-slate-400">{description}</p> : null}
      </div>
      {actions ? <div className="flex items-center gap-2">{actions}</div> : null}
    </div>
  );
}
