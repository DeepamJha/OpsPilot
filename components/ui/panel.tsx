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
      whileHover={hover ? { y: -3, scale: 1.005, boxShadow: 'var(--shadow-panel-hover)' } : undefined}
      className={cn(
        'rounded-[28px] border border-theme bg-surface-panel p-5 shadow-panel backdrop-blur-xl transition-[transform,box-shadow,border-color,background-color] duration-200',
        hover && 'hover-border-theme',
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
          <h3 className="text-lg font-semibold tracking-tight text-primary">{title}</h3>
          {badge ? <span className="rounded-full border border-indigo-500/20 bg-indigo-500/10 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-indigo-700 dark:border-violet-500/20 dark:bg-violet-500/10 dark:text-violet-200">{badge}</span> : null}
        </div>
        {description ? <p className="text-sm leading-6 text-muted">{description}</p> : null}
      </div>
      {actions ? <div className="flex items-center gap-2">{actions}</div> : null}
    </div>
  );
}
